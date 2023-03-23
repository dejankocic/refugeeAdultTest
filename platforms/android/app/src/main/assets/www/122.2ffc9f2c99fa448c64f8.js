(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "eYby":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreViewerLazyModule", function() { return CoreViewerLazyModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fXoL");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




const routes = [
    {
        path: 'iframe',
        loadChildren: () => __webpack_require__.e(/* import() */ 121).then(__webpack_require__.bind(null, "eYVI")).then(m => m.CoreViewerIframePageModule),
    },
];
let CoreViewerLazyModule = /*@__PURE__*/ (() => {
    class CoreViewerLazyModule {
    }
    CoreViewerLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreViewerLazyModule });
    CoreViewerLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreViewerLazyModule_Factory(t) { return new (t || CoreViewerLazyModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"].forChild(routes)]] });
    return CoreViewerLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵsetNgModuleScope */ "ld"](CoreViewerLazyModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"]] }); })();


/***/ })

}]);