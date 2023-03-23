(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "Moll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursesAvailableCoursesPageModule", function() { return /* binding */ available_courses_module_CoreCoursesAvailableCoursesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/courses/components/components.module.ts
var components_module = __webpack_require__("oV7r");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var services_courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/features/courses/components/course-list-item/course-list-item.ts
var course_list_item = __webpack_require__("Y7jA");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/courses/pages/available-courses/available-courses.ts

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











function CoreCoursesAvailableCoursesPage_ng_container_13_core_courses_course_list_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-courses-course-list-item", 8);
    }
    if (rf & 2) {
        const course_r3 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("course", course_r3);
    }
}
function CoreCoursesAvailableCoursesPage_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCoursesAvailableCoursesPage_ng_container_13_core_courses_course_list_item_1_Template, 1, 1, "core-courses-course-list-item", 7);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.courses);
    }
}
function CoreCoursesAvailableCoursesPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 9);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.nocourses"));
    }
}
/**
 * Page that displays available courses in current site.
 */
let available_courses_CoreCoursesAvailableCoursesPage = /*@__PURE__*/ (() => {
    class CoreCoursesAvailableCoursesPage {
        constructor() {
            this.courses = [];
            this.coursesLoaded = false;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.loadCourses().finally(() => {
                this.coursesLoaded = true;
            });
        }
        /**
         * Load the courses.
         *
         * @return Promise resolved when done.
         */
        loadCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const frontpageCourseId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
                try {
                    const courses = yield services_courses["a" /* CoreCourses */].getCoursesByField();
                    this.courses = courses.filter((course) => course.id != frontpageCourseId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                }
            });
        }
        /**
         * Refresh the courses.
         *
         * @param refresher Refresher.
         */
        refreshCourses(refresher) {
            const promises = [];
            promises.push(services_courses["a" /* CoreCourses */].invalidateUserCourses());
            promises.push(services_courses["a" /* CoreCourses */].invalidateCoursesByField());
            Promise.all(promises).finally(() => {
                this.loadCourses().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
    }
    CoreCoursesAvailableCoursesPage.ɵfac = function CoreCoursesAvailableCoursesPage_Factory(t) { return new (t || CoreCoursesAvailableCoursesPage)(); };
    CoreCoursesAvailableCoursesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursesAvailableCoursesPage, selectors: [["page-core-courses-available-courses"]], decls: 15, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["icon", "fas-graduation-cap", 3, "message", 4, "ngIf"], [3, "course", 4, "ngFor", "ngForOf"], [3, "course"], ["icon", "fas-graduation-cap", 3, "message"]], template: function CoreCoursesAvailableCoursesPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Pc" /* ɵɵpipe */](7, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCoursesAvailableCoursesPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshCourses($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, CoreCoursesAvailableCoursesPage_ng_container_13_Template, 2, 1, "ng-container", 5);
                core["nd" /* ɵɵtemplate */](14, CoreCoursesAvailableCoursesPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.courses.availablecourses"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.coursesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.coursesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.courses.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.courses.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], common["s" /* NgForOf */], course_list_item["a" /* CoreCoursesCourseListItemComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCoursesAvailableCoursesPage;
})();

// CONCATENATED MODULE: ./src/core/features/courses/pages/available-courses/available-courses.module.ts
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
        component: available_courses_CoreCoursesAvailableCoursesPage,
    },
];
let available_courses_module_CoreCoursesAvailableCoursesPageModule = /*@__PURE__*/ (() => {
    class CoreCoursesAvailableCoursesPageModule {
    }
    CoreCoursesAvailableCoursesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursesAvailableCoursesPageModule });
    CoreCoursesAvailableCoursesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursesAvailableCoursesPageModule_Factory(t) { return new (t || CoreCoursesAvailableCoursesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursesAvailableCoursesPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](available_courses_module_CoreCoursesAvailableCoursesPageModule, { declarations: [available_courses_CoreCoursesAvailableCoursesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCoursesComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);