(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "q3im":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCourseLazyModule", function() { return CoreGradesCourseLazyModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tyNb");
/* harmony import */ var _pages_course_course_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wxbA");
/* harmony import */ var _pages_course_course_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OzlW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fXoL");
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
        component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_1__[/* CoreGradesCoursePage */ "a"],
        data: {
            useSplitView: false,
            outsideGradesTab: true,
        },
    },
];
let CoreGradesCourseLazyModule = /*@__PURE__*/ (() => {
    class CoreGradesCourseLazyModule {
    }
    CoreGradesCourseLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreGradesCourseLazyModule });
    CoreGradesCourseLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreGradesCourseLazyModule_Factory(t) { return new (t || CoreGradesCourseLazyModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"].forChild(routes),
                _pages_course_course_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreGradesCoursePageModule */ "a"],
            ]] });
    return CoreGradesCourseLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵsetNgModuleScope */ "ld"](CoreGradesCourseLazyModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__[/* RouterModule */ "m"], _pages_course_course_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreGradesCoursePageModule */ "a"]] }); })();


/***/ })

}]);