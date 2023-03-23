(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[120],{

/***/ "u80r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserLazyModule", function() { return CoreUserLazyModule; });
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
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, "RDa7")).then(m => m.CoreUserProfilePageModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/* import() */ 118).then(__webpack_require__.bind(null, "fJJ0")).then(m => m.CoreUserAboutPageModule),
    },
];
let CoreUserLazyModule = /*@__PURE__*/ (() => {
    class CoreUserLazyModule {
    }
    CoreUserLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreUserLazyModule });
    CoreUserLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreUserLazyModule_Factory(t) { return new (t || CoreUserLazyModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"].forChild(routes)]] });
    return CoreUserLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵsetNgModuleScope */ "ld"](CoreUserLazyModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"]] }); })();


/***/ })

}]);