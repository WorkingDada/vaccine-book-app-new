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

/***/ "(app-pages-browser)/./src/components/VideoPlayer.tsx":
/*!****************************************!*\
  !*** ./src/components/VideoPlayer.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VideoPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useWindowListener */ \"(app-pages-browser)/./src/hooks/useWindowListener.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction VideoPlayer(param) {\n    let { vdoSrc, isPlaying } = param;\n    _s();\n    const vdoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isPlaying) {\n            var _vdoRef_current;\n            (_vdoRef_current = vdoRef.current) === null || _vdoRef_current === void 0 ? void 0 : _vdoRef_current.play();\n        } else {\n            var _vdoRef_current1;\n            (_vdoRef_current1 = vdoRef.current) === null || _vdoRef_current1 === void 0 ? void 0 : _vdoRef_current1.pause();\n        }\n    }, [\n        isPlaying\n    ]);\n    (0,_hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__.useWindowListener)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: \"w-[40%]\",\n        src: vdoSrc,\n        ref: vdoRef,\n        controls: true,\n        loop: true,\n        muted: true\n    }, void 0, false, {\n        fileName: \"/Users/officeservice/Desktop/ReactWeb/SWDEV/vaccine-book-app/src/components/VideoPlayer.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(VideoPlayer, \"4ijqAg76opFjN0kWkb5f6TCnQV8=\", false, function() {\n    return [\n        _hooks_useWindowListener__WEBPACK_IMPORTED_MODULE_2__.useWindowListener\n    ];\n});\n_c = VideoPlayer;\nvar _c;\n$RefreshReg$(_c, \"VideoPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lDO0FBQ29CO0FBRTlDLFNBQVNHLFlBQVksS0FBd0Q7UUFBeEQsRUFBQ0MsTUFBTSxFQUFFQyxTQUFTLEVBQXNDLEdBQXhEOztJQUNoQyxNQUFNQyxTQUFTTCw2Q0FBTUEsQ0FBbUI7SUFDeENELGdEQUFTQSxDQUFDO1FBQ04sSUFBR0ssV0FBVztnQkFDVkM7YUFBQUEsa0JBQUFBLE9BQU9DLE9BQU8sY0FBZEQsc0NBQUFBLGdCQUFnQkUsSUFBSTtRQUN4QixPQUFPO2dCQUNIRjthQUFBQSxtQkFBQUEsT0FBT0MsT0FBTyxjQUFkRCx1Q0FBQUEsaUJBQWdCRyxLQUFLO1FBQ3pCO0lBQ0osR0FBRztRQUFFSjtLQUFXO0lBRWhCSCwyRUFBaUJBO0lBRWpCLHFCQUNJLDhEQUFDUTtRQUFNQyxXQUFVO1FBQVVDLEtBQUtSO1FBQVFTLEtBQUtQO1FBQVFRLFFBQVE7UUFBQ0MsSUFBSTtRQUFDQyxLQUFLOzs7Ozs7QUFFaEY7R0Fmd0JiOztRQVVwQkQsdUVBQWlCQTs7O0tBVkdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLnRzeD82NjMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdpbmRvd0xpc3RlbmVyIH0gZnJvbSAnQC9ob29rcy91c2VXaW5kb3dMaXN0ZW5lcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlkZW9QbGF5ZXIoe3Zkb1NyYywgaXNQbGF5aW5nfSA6IHt2ZG9TcmM6c3RyaW5nLCBpc1BsYXlpbmc6Ym9vbGVhbn0pe1xuICAgIGNvbnN0IHZkb1JlZiA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihpc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHZkb1JlZi5jdXJyZW50Py5wbGF5KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZkb1JlZi5jdXJyZW50Py5wYXVzZSgpXG4gICAgICAgIH1cbiAgICB9LCBbIGlzUGxheWluZyBdKVxuXG4gICAgdXNlV2luZG93TGlzdGVuZXIoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT1cInctWzQwJV1cIiBzcmM9e3Zkb1NyY30gcmVmPXt2ZG9SZWZ9IGNvbnRyb2xzIGxvb3AgbXV0ZWQvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlV2luZG93TGlzdGVuZXIiLCJWaWRlb1BsYXllciIsInZkb1NyYyIsImlzUGxheWluZyIsInZkb1JlZiIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJ2aWRlbyIsImNsYXNzTmFtZSIsInNyYyIsInJlZiIsImNvbnRyb2xzIiwibG9vcCIsIm11dGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/VideoPlayer.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/useWindowListener.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useWindowListener.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useWindowListener; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useWindowListener() {\n    _s();\n    const [winwidth, setWinwidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const handleWinWidthChange = ()=>{\n            setWinwidth(window.innerWidth);\n            alert(\"window width = \" + window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleWinWidthChange);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleWinWidthChange);\n        };\n    }, []);\n}\n_s(useWindowListener, \"Vhx4zkXbCHTBAux/o+wnE6YUrAQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VXaW5kb3dMaXN0ZW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUU1QixTQUFTRTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1JLHVCQUF1QjtZQUN6QkQsWUFBWUUsT0FBT0MsVUFBVTtZQUM3QkMsTUFBTSxvQkFBb0JGLE9BQU9DLFVBQVU7UUFDL0M7UUFFQUQsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNIQyxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN6QztJQUNKLEdBQUUsRUFBRTtBQUNSO0dBZHdCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlV2luZG93TGlzdGVuZXIudHN4PzYwNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0xpc3RlbmVyKCl7XG4gICAgY29uc3QgW3dpbndpZHRoLCBzZXRXaW53aWR0aF0gPSB1c2VTdGF0ZSgwKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBjb25zdCBoYW5kbGVXaW5XaWR0aENoYW5nZSA9ICgpPT57XG4gICAgICAgICAgICBzZXRXaW53aWR0aCh3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgIGFsZXJ0KCd3aW5kb3cgd2lkdGggPSAnICsgd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVXaW5XaWR0aENoYW5nZSlcblxuICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVdpbldpZHRoQ2hhbmdlKVxuICAgICAgICB9XG4gICAgfSxbXSlcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXaW5kb3dMaXN0ZW5lciIsIndpbndpZHRoIiwic2V0V2lud2lkdGgiLCJoYW5kbGVXaW5XaWR0aENoYW5nZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhbGVydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useWindowListener.tsx\n"));

/***/ })

});