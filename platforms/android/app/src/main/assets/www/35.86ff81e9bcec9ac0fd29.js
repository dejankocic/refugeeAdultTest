(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "cx1z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCourseCompletionLazyModule", function() { return /* binding */ coursecompletion_lazy_module_AddonCourseCompletionLazyModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/features/comments/components/components.module.ts
var components_module = __webpack_require__("rGK3");

// EXTERNAL MODULE: ./src/core/features/tag/components/components.module.ts
var components_components_module = __webpack_require__("yQkb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/addons/coursecompletion/services/coursecompletion.ts
var coursecompletion = __webpack_require__("xd1G");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/coursecompletion/pages/report/report.ts

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













function AddonCourseCompletionReportPage_ion_card_13_p_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.coursecompletion.criteriarequiredall"));
    }
}
function AddonCourseCompletionReportPage_ion_card_13_p_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.coursecompletion.criteriarequiredany"));
    }
}
function AddonCourseCompletionReportPage_ion_card_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](10, "ion-label");
        core["Ec" /* ɵɵelementStart */](11, "h2");
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](14, AddonCourseCompletionReportPage_ion_card_13_p_14_Template, 3, 3, "p", 5);
        core["nd" /* ɵɵtemplate */](15, AddonCourseCompletionReportPage_ion_card_13_p_15_Template, 3, 3, "p", 5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 5, "addon.coursecompletion.status"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 7, ctx_r0.statusText));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 9, "addon.coursecompletion.required"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.completion.aggregation === 1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.completion.aggregation === 2);
    }
}
function AddonCourseCompletionReportPage_ion_card_14_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 12);
        core["zc" /* ɵɵelement */](3, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["zc" /* ɵɵelement */](5, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "strong", 14);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const criteria_r8 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", criteria_r8.details.criteria)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", criteria_r8.details.requirement)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](criteria_r8.status);
    }
}
function AddonCourseCompletionReportPage_ion_card_14_ion_row_34_ion_col_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const criteria_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, criteria_r9.timecompleted * 1000, "strftimedatetimeshort"), " ");
    }
}
function AddonCourseCompletionReportPage_ion_card_14_ion_row_34_ion_col_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-col");
    }
}
function AddonCourseCompletionReportPage_ion_card_14_ion_row_34_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-row");
        core["Ec" /* ɵɵelementStart */](1, "ion-col");
        core["zc" /* ɵɵelement */](2, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-col");
        core["zc" /* ɵɵelement */](4, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-col");
        core["zc" /* ɵɵelement */](6, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-col");
        core["zc" /* ɵɵelement */](8, "core-format-text", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-col");
        core["pd" /* ɵɵtext */](10);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](11, AddonCourseCompletionReportPage_ion_card_14_ion_row_34_ion_col_11_Template, 3, 4, "ion-col", 5);
        core["nd" /* ɵɵtemplate */](12, AddonCourseCompletionReportPage_ion_card_14_ion_row_34_ion_col_12_Template, 1, 0, "ion-col", 5);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const criteria_r9 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", criteria_r9.title)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", criteria_r9.details.criteria)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", criteria_r9.details.requirement)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", criteria_r9.details.status)("filter", false);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](criteria_r9.status);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", criteria_r9.timecompleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !criteria_r9.timecompleted);
    }
}
function AddonCourseCompletionReportPage_ion_card_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonCourseCompletionReportPage_ion_card_14_ion_item_6_Template, 8, 5, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](7, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](8, "ion-label");
        core["Ec" /* ɵɵelementStart */](9, "ion-row");
        core["Ec" /* ɵɵelementStart */](10, "ion-col");
        core["Ec" /* ɵɵelementStart */](11, "strong");
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-col");
        core["Ec" /* ɵɵelementStart */](15, "strong");
        core["pd" /* ɵɵtext */](16);
        core["Pc" /* ɵɵpipe */](17, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](18, "ion-col");
        core["Ec" /* ɵɵelementStart */](19, "strong");
        core["pd" /* ɵɵtext */](20);
        core["Pc" /* ɵɵpipe */](21, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](22, "ion-col");
        core["Ec" /* ɵɵelementStart */](23, "strong");
        core["pd" /* ɵɵtext */](24);
        core["Pc" /* ɵɵpipe */](25, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](26, "ion-col");
        core["Ec" /* ɵɵelementStart */](27, "strong");
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](30, "ion-col");
        core["Ec" /* ɵɵelementStart */](31, "strong");
        core["pd" /* ɵɵtext */](32);
        core["Pc" /* ɵɵpipe */](33, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](34, AddonCourseCompletionReportPage_ion_card_14_ion_row_34_Template, 13, 11, "ion-row", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 9, "addon.coursecompletion.requiredcriteria"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.completion.completions);
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 11, "addon.coursecompletion.criteriagroup"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 13, "addon.coursecompletion.criteria"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 15, "addon.coursecompletion.requirement"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](25, 17, "addon.coursecompletion.status"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](29, 19, "addon.coursecompletion.complete"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](33, 21, "addon.coursecompletion.completiondate"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.completion.completions);
    }
}
function AddonCourseCompletionReportPage_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item");
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonCourseCompletionReportPage_ion_card_15_Template_ion_button_click_8_listener() { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.completeCourse(); });
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "addon.coursecompletion.manualselfcompletion"));
        core["lc" /* ɵɵadvance */](5);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 4, "addon.coursecompletion.completecourse"), " ");
    }
}
function AddonCourseCompletionReportPage_ion_card_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 18);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.coursecompletion.nottracked"));
    }
}
/**
 * Page that displays the course completion report.
 */
let report_AddonCourseCompletionReportPage = /*@__PURE__*/ (() => {
    class AddonCourseCompletionReportPage {
        constructor() {
            this.completionLoaded = false;
            this.showSelfComplete = false;
            this.tracked = true; // Whether completion is tracked.
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || sites["b" /* CoreSites */].getCurrentSiteUserId();
            if (!this.userId) {
                this.userId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            }
            this.fetchCompletion().finally(() => {
                this.completionLoaded = true;
            });
        }
        /**
         * Fetch compleiton data.
         *
         * @return Promise resolved when done.
         */
        fetchCompletion() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.completion = yield coursecompletion["a" /* AddonCourseCompletion */].getCompletion(this.courseId, this.userId);
                    this.statusText = coursecompletion["a" /* AddonCourseCompletion */].getCompletedStatusText(this.completion);
                    this.showSelfComplete = coursecompletion["a" /* AddonCourseCompletion */].canMarkSelfCompleted(this.userId, this.completion);
                    this.tracked = true;
                }
                catch (error) {
                    if (error && error.errorcode == 'notenroled') {
                        // Not enrolled error, probably a teacher.
                        this.tracked = false;
                    }
                    else {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.coursecompletion.couldnotloadreport', true);
                    }
                }
            });
        }
        /**
         * Refresh completion data on PTR.
         *
         * @param refresher Refresher instance.
         */
        refreshCompletion(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield coursecompletion["a" /* AddonCourseCompletion */].invalidateCourseCompletion(this.courseId, this.userId).finally(() => {
                    this.fetchCompletion().finally(() => {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    });
                });
            });
        }
        /**
         * Mark course as completed.
         */
        completeCourse() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield coursecompletion["a" /* AddonCourseCompletion */].markCourseAsSelfCompleted(this.courseId);
                    yield this.refreshCompletion();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
    }
    AddonCourseCompletionReportPage.ɵfac = function AddonCourseCompletionReportPage_Factory(t) { return new (t || AddonCourseCompletionReportPage)(); };
    AddonCourseCompletionReportPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCourseCompletionReportPage, selectors: [["page-addon-course-completion-report"]], decls: 17, vars: 15, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["class", "core-warning-card", 4, "ngIf"], [1, "ion-text-wrap"], ["class", "ion-hide-md-up ion-text-wrap", 4, "ngFor", "ngForOf"], [1, "ion-hide-md-down", "ion-text-wrap"], [4, "ngFor", "ngForOf"], [1, "ion-hide-md-up", "ion-text-wrap"], [1, "item-heading"], ["clean", "true", 3, "text", "filter"], ["slot", "end"], [3, "text", "filter"], ["expand", "block", 3, "click"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"]], template: function AddonCourseCompletionReportPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCourseCompletionReportPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshCompletion($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, AddonCourseCompletionReportPage_ion_card_13_Template, 16, 11, "ion-card", 5);
                core["nd" /* ɵɵtemplate */](14, AddonCourseCompletionReportPage_ion_card_14_Template, 35, 23, "ion-card", 5);
                core["nd" /* ɵɵtemplate */](15, AddonCourseCompletionReportPage_ion_card_15_Template, 11, 6, "ion-card", 5);
                core["nd" /* ɵɵtemplate */](16, AddonCourseCompletionReportPage_ion_card_16_Template, 6, 3, "ion-card", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 11, "addon.coursecompletion.coursecompletion"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.completionLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.completionLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.completion && ctx.tracked);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.completion && ctx.tracked);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showSelfComplete && ctx.tracked);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.tracked);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["I" /* IonItemDivider */], common["s" /* NgForOf */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonCourseCompletionReportPage;
})();

// CONCATENATED MODULE: ./src/addons/coursecompletion/coursecompletion-lazy.module.ts
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
        component: report_AddonCourseCompletionReportPage,
    },
];
let coursecompletion_lazy_module_AddonCourseCompletionLazyModule = /*@__PURE__*/ (() => {
    class AddonCourseCompletionLazyModule {
    }
    AddonCourseCompletionLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCourseCompletionLazyModule });
    AddonCourseCompletionLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCourseCompletionLazyModule_Factory(t) { return new (t || AddonCourseCompletionLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCommentsComponentsModule */],
                components_components_module["a" /* CoreTagComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCourseCompletionLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](coursecompletion_lazy_module_AddonCourseCompletionLazyModule, { declarations: [report_AddonCourseCompletionReportPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCommentsComponentsModule */],
            components_components_module["a" /* CoreTagComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);