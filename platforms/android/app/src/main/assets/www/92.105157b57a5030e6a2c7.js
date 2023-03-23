(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "ulft":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreGradesLazyModule", function() { return /* binding */ grades_lazy_module_CoreGradesLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/grades/pages/course/course.page.ts
var course_page = __webpack_require__("wxbA");

// EXTERNAL MODULE: ./src/core/features/grades/pages/course/course.module.ts
var course_module = __webpack_require__("OzlW");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/features/grades/services/grades.ts
var services_grades = __webpack_require__("wo9T");

// EXTERNAL MODULE: ./src/core/features/grades/services/grades-helper.ts
var grades_helper = __webpack_require__("FvYb");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/grades/pages/courses/courses.page.ts

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















function CoreGradesCoursesPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.grades.nogradesreturned"));
    }
}
function CoreGradesCoursesPage_ion_list_15_ion_item_1_span_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 13);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.grades.grade"), " ");
    }
}
function CoreGradesCoursesPage_ion_list_15_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Mc" /* ɵɵlistener */]("click", function CoreGradesCoursesPage_ion_list_15_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const course_r3 = ctx.$implicit; const ctx_r5 = core["Oc" /* ɵɵnextContext */](2); return ctx_r5.courses.select(course_r3); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-badge", 11);
        core["nd" /* ɵɵtemplate */](4, CoreGradesCoursesPage_ion_list_15_ion_item_1_span_4_Template, 3, 3, "span", 12);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r3 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", course_r3.courseFullName)("aria-current", ctx_r2.courses.getItemAriaCurrent(course_r3));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", course_r3.courseFullName)("contextInstanceId", course_r3.courseid);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", course_r3.grade && course_r3.grade != "-");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", course_r3.grade, " ");
    }
}
function CoreGradesCoursesPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, CoreGradesCoursesPage_ion_list_15_ion_item_1_Template, 6, 6, "ion-item", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.courses.items);
    }
}
/**
 * Page that displays courses grades (main menu option).
 */
let courses_page_CoreGradesCoursesPage = /*@__PURE__*/ (() => {
    class CoreGradesCoursesPage {
        constructor() {
            this.courses = new courses_page_CoreGradesCoursesManager(CoreGradesCoursesPage);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchInitialCourses();
                this.courses.start(this.splitView);
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.courses.destroy();
        }
        /**
         * Refresh courses.
         *
         * @param refresher Refresher.
         */
        refreshCourses(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(services_grades["a" /* CoreGrades */].invalidateCoursesGradesData());
                yield utils["a" /* CoreUtils */].ignoreErrors(this.fetchCourses());
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Obtain the initial list of courses.
         */
        fetchInitialCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchCourses();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading courses');
                    this.courses.setItems([]);
                }
            });
        }
        /**
         * Update the list of courses.
         */
        fetchCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const grades = yield services_grades["a" /* CoreGrades */].getCoursesGrades();
                const courses = yield grades_helper["a" /* CoreGradesHelper */].getGradesCourseData(grades);
                this.courses.setItems(courses);
            });
        }
    }
    CoreGradesCoursesPage.ɵfac = function CoreGradesCoursesPage_Factory(t) { return new (t || CoreGradesCoursesPage)(); };
    CoreGradesCoursesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreGradesCoursesPage, selectors: [["page-core-grades-courses"]], viewQuery: function CoreGradesCoursesPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 16, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-chart-bar", 3, "message", 4, "ngIf"], [4, "ngIf"], ["icon", "fas-chart-bar", 3, "message"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["slot", "end", "color", "light"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"]], template: function CoreGradesCoursesPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreGradesCoursesPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshCourses($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, CoreGradesCoursesPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 5);
                core["nd" /* ɵɵtemplate */](15, CoreGradesCoursesPage_ion_list_15_Template, 2, 1, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.grades.grades"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.courses.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.courses.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.courses.empty);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.courses.empty);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreGradesCoursesPage;
})();
/**
 * Helper class to manage courses.
 */
class courses_page_CoreGradesCoursesManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    /**
     * @inheritdoc
     */
    getItemPath(courseGrade) {
        return courseGrade.courseid.toString();
    }
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
            yield services_grades["a" /* CoreGrades */].logCoursesGradesView();
        });
    }
}

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// CONCATENATED MODULE: ./src/core/features/grades/pages/grade/grade.page.ts

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
















function CoreGradesGradePage_core_empty_box_13_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.grades.nogradesreturned"));
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_1_ion_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 14);
    }
    if (rf & 2) {
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("name", ctx_r13.grade.icon);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r13.grade.iconAlt);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_1_img_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 15);
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("src", ctx_r14.grade.image, core["jd" /* ɵɵsanitizeUrl */])("alt", ctx_r14.grade.iconAlt);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 10);
        core["nd" /* ɵɵtemplate */](1, CoreGradesGradePage_ion_list_14_ion_item_1_ion_icon_1_Template, 1, 2, "ion-icon", 11);
        core["nd" /* ɵɵtemplate */](2, CoreGradesGradePage_ion_list_14_ion_item_1_img_2_Template, 1, 2, "img", 12);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["zc" /* ɵɵelement */](5, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r2.grade.link);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.grade.icon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.grade.image);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.grade.itemname)("contextInstanceId", ctx_r2.courseId);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_2_ion_icon_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 14);
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("name", ctx_r15.grade.icon);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r15.grade.iconAlt);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_2_img_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 15);
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("src", ctx_r16.grade.image, core["jd" /* ɵɵsanitizeUrl */])("alt", ctx_r16.grade.iconAlt);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](1, CoreGradesGradePage_ion_list_14_ion_item_2_ion_icon_1_Template, 1, 2, "ion-icon", 11);
        core["nd" /* ɵɵtemplate */](2, CoreGradesGradePage_ion_list_14_ion_item_2_img_2_Template, 1, 2, "img", 12);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["zc" /* ɵɵelement */](5, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.grade.icon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.grade.image);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r3.grade.itemname)("contextInstanceId", ctx_r3.courseId);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.weight"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r4.grade.weight, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.grade"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r5.grade.grade, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.range"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r6.grade.range, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.percentage"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r7.grade.percentage, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.lettergrade"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r8.grade.lettergrade, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.rank"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r9.grade.rank, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.average"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r10.grade.average, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 18);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.grades.feedback"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("fullTitle", core["Qc" /* ɵɵpipeBind1 */](7, 6, "core.grades.feedback"))("text", ctx_r11.grade.feedback)("contextInstanceId", ctx_r11.courseId);
    }
}
function CoreGradesGradePage_ion_list_14_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "p", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.grades.contributiontocoursetotal"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r12.grade.contributiontocoursetotal, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function CoreGradesGradePage_ion_list_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, CoreGradesGradePage_ion_list_14_ion_item_1_Template, 6, 5, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](2, CoreGradesGradePage_ion_list_14_ion_item_2_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](3, CoreGradesGradePage_ion_list_14_ion_item_3_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](4, CoreGradesGradePage_ion_list_14_ion_item_4_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](5, CoreGradesGradePage_ion_list_14_ion_item_5_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](6, CoreGradesGradePage_ion_list_14_ion_item_6_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](7, CoreGradesGradePage_ion_list_14_ion_item_7_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](8, CoreGradesGradePage_ion_list_14_ion_item_8_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](9, CoreGradesGradePage_ion_list_14_ion_item_9_Template, 6, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](10, CoreGradesGradePage_ion_list_14_ion_item_10_Template, 8, 8, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](11, CoreGradesGradePage_ion_list_14_ion_item_11_Template, 6, 4, "ion-item", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.itemname && ctx_r1.grade.link);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.itemname && !ctx_r1.grade.link);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.weight);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.grade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.range);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.percentage);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.lettergrade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.rank);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.average);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.feedback);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.grade.contributiontocoursetotal);
    }
}
/**
 * Page that displays activity grade.
 */
let grade_page_CoreGradesGradePage = /*@__PURE__*/ (() => {
    class CoreGradesGradePage {
        constructor() {
            var _a;
            this.gradeLoaded = false;
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.gradeId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('gradeId');
            this.userId = (_a = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId')) !== null && _a !== void 0 ? _a : sites["b" /* CoreSites */].getCurrentSiteUserId();
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.fetchGrade();
        }
        /**
         * Fetch all the data required for the view.
         */
        fetchGrade() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.grade = yield grades_helper["a" /* CoreGradesHelper */].getGradeItem(this.courseId, this.gradeId, this.userId);
                    this.gradeLoaded = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading grade item');
                }
            });
        }
        /**
         * Refresh data.
         *
         * @param refresher Refresher.
         */
        refreshGrade(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(services_grades["a" /* CoreGrades */].invalidateCourseGradesData(this.courseId, this.userId));
                yield utils["a" /* CoreUtils */].ignoreErrors(this.fetchGrade());
                refresher.complete();
            });
        }
    }
    CoreGradesGradePage.ɵfac = function CoreGradesGradePage_Factory(t) { return new (t || CoreGradesGradePage)(); };
    CoreGradesGradePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreGradesGradePage, selectors: [["page-core-grades-grade"]], decls: 15, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-chart-bar", 3, "message", 4, "ngIf"], [4, "ngIf"], ["icon", "fas-chart-bar", 3, "message"], ["class", "ion-text-wrap", "detail", "true", "core-link", "", "capture", "true", 3, "href", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["detail", "true", "core-link", "", "capture", "true", 1, "ion-text-wrap", 3, "href"], ["slot", "start", 3, "name", 4, "ngIf"], ["slot", "start", "class", "core-module-icon", 3, "src", "alt", 4, "ngIf"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["slot", "start", 3, "name"], ["slot", "start", 1, "core-module-icon", 3, "src", "alt"], [1, "ion-text-wrap"], [3, "innerHTML"], ["maxHeight", "60", "fullOnClick", "true", "contextLevel", "course", 3, "fullTitle", "text", "contextInstanceId"]], template: function CoreGradesGradePage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreGradesGradePage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshGrade($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, CoreGradesGradePage_core_empty_box_13_Template, 2, 3, "core-empty-box", 5);
                core["nd" /* ɵɵtemplate */](14, CoreGradesGradePage_ion_list_14_Template, 12, 11, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.grades.grade"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.gradeLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.gradeLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.grade);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.grade);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], directives_link["a" /* CoreLinkDirective */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreGradesGradePage;
})();

// EXTERNAL MODULE: ./src/core/features/grades/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("039z");

// CONCATENATED MODULE: ./src/core/features/grades/grades-lazy.module.ts
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












const mobileRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* CoreGradesMainMenuHandlerService */].PAGE_NAME,
        },
        component: courses_page_CoreGradesCoursesPage,
    },
    {
        path: ':courseId',
        component: course_page["a" /* CoreGradesCoursePage */],
    },
    {
        path: ':courseId/:gradeId',
        component: grade_page_CoreGradesGradePage,
    },
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* CoreGradesMainMenuHandlerService */].PAGE_NAME,
        },
        component: courses_page_CoreGradesCoursesPage,
        children: [
            {
                path: ':courseId',
                component: course_page["a" /* CoreGradesCoursePage */],
            },
        ],
    },
    {
        path: ':courseId',
        component: course_page["a" /* CoreGradesCoursePage */],
        children: [
            {
                path: ':gradeId',
                component: grade_page_CoreGradesGradePage,
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let grades_lazy_module_CoreGradesLazyModule = /*@__PURE__*/ (() => {
    class CoreGradesLazyModule {
    }
    CoreGradesLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreGradesLazyModule });
    CoreGradesLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreGradesLazyModule_Factory(t) { return new (t || CoreGradesLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                course_module["a" /* CoreGradesCoursePageModule */],
            ]] });
    return CoreGradesLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](grades_lazy_module_CoreGradesLazyModule, { declarations: [courses_page_CoreGradesCoursesPage,
            grade_page_CoreGradesGradePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            course_module["a" /* CoreGradesCoursePageModule */]] });
})();


/***/ })

}]);