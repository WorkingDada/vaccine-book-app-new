/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/VideoPlayer.tsx":
/*!****************************************!*\
  !*** ./src/components/VideoPlayer.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useWindowListener */ \"(app-pages-browser)/./src/hooks/useWindowListener.tsx\");\n/* harmony import */ var _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction VideoPlayer(param) {\n    let { vdoSrc, isPlaying } = param;\n    _s();\n    const vdoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isPlaying) {\n            var _vdoRef_current;\n            (_vdoRef_current = vdoRef.current) === null || _vdoRef_current === void 0 ? void 0 : _vdoRef_current.play();\n        } else {\n            var _vdoRef_current1;\n            (_vdoRef_current1 = vdoRef.current) === null || _vdoRef_current1 === void 0 ? void 0 : _vdoRef_current1.pause();\n        }\n    }, [\n        isPlaying\n    ]);\n    (0,_hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__.useWindowListener)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: \"w-[40%]\",\n        src: vdoSrc,\n        ref: vdoRef,\n        controls: true,\n        loop: true,\n        muted: true\n    }, void 0, false, {\n        fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/VideoPlayer.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(VideoPlayer, \"4ijqAg76opFjN0kWkb5f6TCnQV8=\", false, function() {\n    return [\n        _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__.useWindowListener\n    ];\n});\n_c = VideoPlayer;\nvar _c;\n$RefreshReg$(_c, \"VideoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN5QztBQUNvQjtBQUU5QyxTQUFTRyxZQUFZLEtBQXdEO1FBQXhELEVBQUNDLE1BQU0sRUFBRUMsU0FBUyxFQUFzQyxHQUF4RDs7SUFDaEMsTUFBTUMsU0FBU0wsNkNBQU1BLENBQW1CO0lBQ3hDRCxnREFBU0EsQ0FBQztRQUNOLElBQUdLLFdBQVc7Z0JBQ1ZDO2FBQUFBLGtCQUFBQSxPQUFPQyxPQUFPLGNBQWRELHNDQUFBQSxnQkFBZ0JFLElBQUk7UUFDeEIsT0FBTztnQkFDSEY7YUFBQUEsbUJBQUFBLE9BQU9DLE9BQU8sY0FBZEQsdUNBQUFBLGlCQUFnQkcsS0FBSztRQUN6QjtJQUNKLEdBQUc7UUFBRUo7S0FBVztJQUVoQkgsMkVBQWlCQTtJQUVqQixxQkFDSSw4REFBQ1E7UUFBTUMsV0FBVTtRQUFVQyxLQUFLUjtRQUFRUyxLQUFLUDtRQUFRUSxRQUFRO1FBQUNDLElBQUk7UUFBQ0MsS0FBSzs7Ozs7O0FBRWhGO0dBZndCYjs7UUFVcEJELHVFQUFpQkE7OztLQVZHQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9WaWRlb1BsYXllci50c3g/NjYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXaW5kb3dMaXN0ZW5lciB9IGZyb20gJ0AvaG9va3MvdXNlV2luZG93TGlzdGVuZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZGVvUGxheWVyKHt2ZG9TcmMsIGlzUGxheWluZ30gOiB7dmRvU3JjOnN0cmluZywgaXNQbGF5aW5nOmJvb2xlYW59KXtcbiAgICBjb25zdCB2ZG9SZWYgPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbClcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYoaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB2ZG9SZWYuY3VycmVudD8ucGxheSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZG9SZWYuY3VycmVudD8ucGF1c2UoKVxuICAgICAgICB9XG4gICAgfSwgWyBpc1BsYXlpbmcgXSlcblxuICAgIHVzZVdpbmRvd0xpc3RlbmVyKClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx2aWRlbyBjbGFzc05hbWU9XCJ3LVs0MCVdXCIgc3JjPXt2ZG9TcmN9IHJlZj17dmRvUmVmfSBjb250cm9scyBsb29wIG11dGVkLz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVdpbmRvd0xpc3RlbmVyIiwiVmlkZW9QbGF5ZXIiLCJ2ZG9TcmMiLCJpc1BsYXlpbmciLCJ2ZG9SZWYiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwidmlkZW8iLCJjbGFzc05hbWUiLCJzcmMiLCJyZWYiLCJjb250cm9scyIsImxvb3AiLCJtdXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/VideoPlayer.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/useWindowListener.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useWindowListener.tsx ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});