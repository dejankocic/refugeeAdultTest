(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "Bg0Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesLazyModule", function() { return CoreCoursesLazyModule; });
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
        redirectTo: 'my',
        pathMatch: 'full',
    },
    {
        path: 'categories',
        redirectTo: 'categories/root',
        pathMatch: 'full',
    },
    {
        path: 'categories/:id',
        loadChildren: () => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, "1mzu"))
            .then(m => m.CoreCoursesCategoriesPageModule),
    },
    {
        path: 'all',
        loadChildren: () => __webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, "Moll"))
            .then(m => m.CoreCoursesAvailableCoursesPageModule),
    },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/* import() */ 91).then(__webpack_require__.bind(null, "Ag8G"))
            .then(m => m.CoreCoursesSearchPageModule),
    },
    {
        path: 'my',
        loadChildren: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "/pOg"))
            .then(m => m.CoreCoursesMyCoursesPageModule),
    },
];
let CoreCoursesLazyModule = /*@__PURE__*/ (() => {
    class CoreCoursesLazyModule {
    }
    CoreCoursesLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreCoursesLazyModule });
    CoreCoursesLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreCoursesLazyModule_Factory(t) { return new (t || CoreCoursesLazyModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"].forChild(routes)]] });
    return CoreCoursesLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__[/* ɵɵsetNgModuleScope */ "ld"](CoreCoursesLazyModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"]] }); })();


/***/ })

}]);