(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "5S2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseContentsPageModule", function() { return CoreCourseContentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tyNb");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Fjfc");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("L3Fv");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vY5A");
/* harmony import */ var _contents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YUBR");
/* harmony import */ var _contents_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RDH8");
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








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__[/* resolveModuleRoutes */ "d"])(injector, _contents_routing_module__WEBPACK_IMPORTED_MODULE_6__[/* COURSE_CONTENTS_ROUTES */ "a"]);
    return [
        {
            path: '',
            component: _contents__WEBPACK_IMPORTED_MODULE_5__[/* CoreCourseContentsPage */ "a"],
            children: routes.children,
        },
        ...routes.siblings,
    ];
}
let CoreCourseContentsPageModule = /*@__PURE__*/ (() => {
    class CoreCourseContentsPageModule {
    }
    CoreCourseContentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreCourseContentsPageModule });
    CoreCourseContentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreCourseContentsPageModule_Factory(t) { return new (t || CoreCourseContentsPageModule)(); }, providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__[/* ROUTES */ "g"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* Injector */ "x"]] },
        ], imports: [[
                _core_shared_module__WEBPACK_IMPORTED_MODULE_3__[/* CoreSharedModule */ "a"],
                _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreCourseComponentsModule */ "a"],
            ], _angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] });
    return CoreCourseContentsPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵsetNgModuleScope */ "ld"](CoreCourseContentsPageModule, { declarations: [_contents__WEBPACK_IMPORTED_MODULE_5__[/* CoreCourseContentsPage */ "a"]], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_3__[/* CoreSharedModule */ "a"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreCourseComponentsModule */ "a"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] });
})();


/***/ })

}]);