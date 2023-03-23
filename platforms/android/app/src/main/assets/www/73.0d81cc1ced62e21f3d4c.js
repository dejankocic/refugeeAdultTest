(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "Iaui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModWorkshopLazyModule", function() { return /* binding */ workshop_lazy_module_AddonModWorkshopLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/index/index.ts
var index = __webpack_require__("20uA");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/workshop/pages/index/index.ts
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









/**
 * Page that displays a workshop.
 */
let index_AddonModWorkshopIndexPage = /*@__PURE__*/ (() => {
    class AddonModWorkshopIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
        constructor() {
            super(...arguments);
            this.selectedGroup = 0;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            super.ngOnInit();
            this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
        }
    }
    AddonModWorkshopIndexPage.ɵfac = function AddonModWorkshopIndexPage_Factory(t) { return ɵAddonModWorkshopIndexPage_BaseFactory(t || AddonModWorkshopIndexPage); };
    AddonModWorkshopIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModWorkshopIndexPage, selectors: [["page-addon-mod-workshop-index"]], viewQuery: function AddonModWorkshopIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModWorkshopIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 13, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "group", "dataRetrieved"]], template: function AddonModWorkshopIndexPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](7, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModWorkshopIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-workshop-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModWorkshopIndexPage_Template_addon_mod_workshop_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("group", ctx.selectedGroup);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModWorkshopIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModWorkshopIndexPage;
})();
const ɵAddonModWorkshopIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModWorkshopIndexPage);

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/components.module.ts
var components_module = __webpack_require__("Ie1r");

// EXTERNAL MODULE: ./src/addons/mod/workshop/pages/submission/submission.ts
var submission = __webpack_require__("WoAp");

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/grades/services/grades-helper.ts
var grades_helper = __webpack_require__("FvYb");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/addons/mod/workshop/services/workshop.ts
var workshop = __webpack_require__("i1f9");

// EXTERNAL MODULE: ./src/addons/mod/workshop/services/workshop-helper.ts
var workshop_helper = __webpack_require__("8/zp");

// EXTERNAL MODULE: ./src/addons/mod/workshop/services/workshop-offline.ts
var workshop_offline = __webpack_require__("EyWp");

// EXTERNAL MODULE: ./src/addons/mod/workshop/services/workshop-sync.ts
var workshop_sync = __webpack_require__("GuJL");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/assessment-strategy/assessment-strategy.ts
var assessment_strategy = __webpack_require__("Lkkz");

// EXTERNAL MODULE: ./src/core/components/mark-required/mark-required.ts
var mark_required = __webpack_require__("FasJ");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// CONCATENATED MODULE: ./src/addons/mod/workshop/pages/assessment/assessment.ts

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




























const _c0 = ["evaluateFormEl"];
function AddonModWorkshopAssessmentPage_ion_refresher_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-refresher", 15);
        core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModWorkshopAssessmentPage_ion_refresher_12_Template_ion_refresher_ionRefresh_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.refreshAssessment($event.target); });
        core["zc" /* ɵɵelement */](1, "ion-refresher-content", 16);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r0.loaded);
        core["lc" /* ɵɵadvance */](1);
        core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.pulltorefresh"));
    }
}
function AddonModWorkshopAssessmentPage_core_user_avatar_15_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 17);
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.profile)("courseId", ctx_r1.courseId)("userId", ctx_r1.profile.id);
    }
}
function AddonModWorkshopAssessmentPage_h2_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r2.profile.fullname);
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModWorkshopAssessmentPage_p_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 2, "addon.mod_workshop.submissiongradeof", core["ad" /* ɵɵpureFunction1 */](5, _c1, ctx_r3.workshop.grade)), ": ", ctx_r3.assessment.grade, " ");
    }
}
function AddonModWorkshopAssessmentPage_p_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["qc" /* ɵɵclassProp */]("core-has-overriden-grade", ctx_r4.showGrade(ctx_r4.assessment.gradinggrade));
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 4, "addon.mod_workshop.gradinggradeof", core["ad" /* ɵɵpureFunction1 */](7, _c1, ctx_r4.workshop.gradinggrade)), ": ", ctx_r4.assessment.gradinggrade, " ");
    }
}
function AddonModWorkshopAssessmentPage_p_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 18);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.mod_workshop.gradinggradeover"), ": ", ctx_r5.assessment.gradinggradeover, " ");
    }
}
function AddonModWorkshopAssessmentPage_p_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.mod_workshop.weightinfo", core["ad" /* ɵɵpureFunction1 */](4, _c1, ctx_r6.assessment.weight)), " ");
    }
}
function AddonModWorkshopAssessmentPage_ion_badge_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 19);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_workshop.notassessed"), " ");
    }
}
function AddonModWorkshopAssessmentPage_addon_mod_workshop_assessment_strategy_23_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "addon-mod-workshop-assessment-strategy", 20);
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("workshop", ctx_r8.workshop)("access", ctx_r8.access)("assessmentId", ctx_r8.assessmentId)("userId", ctx_r8.profile && ctx_r8.profile.id)("strategy", ctx_r8.strategy);
    }
}
function AddonModWorkshopAssessmentPage_form_24_ion_item_7_ion_select_option_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 28);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const w_r18 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", w_r18);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](w_r18);
    }
}
const _c2 = function (a0) { return { header: a0 }; };
function AddonModWorkshopAssessmentPage_form_24_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 24);
        core["Ec" /* ɵɵelementStart */](2, "span", 25);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-select", 26);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["nd" /* ɵɵtemplate */](7, AddonModWorkshopAssessmentPage_form_24_ion_item_7_ion_select_option_7_Template, 2, 2, "ion-select-option", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_workshop.assessmentweight"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, _c2, core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.mod_workshop.assessmentweight")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r14.weights);
    }
}
function AddonModWorkshopAssessmentPage_form_24_ion_item_15_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 28);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const grade_r20 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", grade_r20.value);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", grade_r20.label, " ");
    }
}
function AddonModWorkshopAssessmentPage_form_24_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 24);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 29);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModWorkshopAssessmentPage_form_24_ion_item_15_ion_select_option_6_Template, 2, 2, "ion-select-option", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "addon.mod_workshop.gradinggradeover"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, _c2, core["Qc" /* ɵɵpipeBind1 */](5, 5, "addon.mod_workshop.gradinggradeover")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r15.evaluationGrades);
    }
}
const _c3 = function (a0) { return { asid: a0 }; };
function AddonModWorkshopAssessmentPage_form_24_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 24);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "core-rich-text-editor", 30);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 5, "addon.mod_workshop.feedbackreviewer"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r16.evaluateForm.controls["text"])("autoSave", true)("contextInstanceId", ctx_r16.workshop == null ? null : ctx_r16.workshop.coursemodule)("draftExtraParams", core["ad" /* ɵɵpureFunction1 */](7, _c3, ctx_r16.assessmentId));
    }
}
function AddonModWorkshopAssessmentPage_form_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "form", 21, 22);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonModWorkshopAssessmentPage_form_24_ion_item_7_Template, 8, 9, "ion-item", 23);
        core["Ec" /* ɵɵelementStart */](8, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](9, "ion-label");
        core["Ec" /* ɵɵelementStart */](10, "h2");
        core["pd" /* ɵɵtext */](11);
        core["Pc" /* ɵɵpipe */](12, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "p");
        core["pd" /* ɵɵtext */](14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](15, AddonModWorkshopAssessmentPage_form_24_ion_item_15_Template, 7, 9, "ion-item", 23);
        core["nd" /* ɵɵtemplate */](16, AddonModWorkshopAssessmentPage_form_24_ion_item_16_Template, 5, 9, "ion-item", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r9.evaluateForm);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 7, "addon.mod_workshop.assessmentsettings"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.access == null ? null : ctx_r9.access.canallocate);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](12, 9, "addon.mod_workshop.gradinggradecalculated"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r9.gradingGrade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.access == null ? null : ctx_r9.access.canoverridegrades);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.access == null ? null : ctx_r9.access.canoverridegrades);
    }
}
function AddonModWorkshopAssessmentPage_ion_list_25_core_user_avatar_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 17);
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("user", ctx_r21.evaluateByProfile)("courseId", ctx_r21.courseId)("userId", ctx_r21.evaluateByProfile.id);
    }
}
function AddonModWorkshopAssessmentPage_ion_list_25_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.mod_workshop.feedbackby", core["ad" /* ɵɵpureFunction1 */](4, _c1, ctx_r22.evaluateByProfile.fullname)), " ");
    }
}
function AddonModWorkshopAssessmentPage_ion_list_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](2, AddonModWorkshopAssessmentPage_ion_list_25_core_user_avatar_2_Template, 1, 3, "core-user-avatar", 8);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonModWorkshopAssessmentPage_ion_list_25_h2_4_Template, 3, 6, "h2", 9);
        core["zc" /* ɵɵelement */](5, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r10.evaluateByProfile);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r10.evaluateByProfile && ctx_r10.evaluateByProfile.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r10.evaluate.text)("contextInstanceId", ctx_r10.workshop == null ? null : ctx_r10.workshop.coursemodule)("courseId", ctx_r10.courseId);
    }
}
/**
 * Page that displays a workshop assessment.
 */
let assessment_AddonModWorkshopAssessmentPage = /*@__PURE__*/ (() => {
    class AddonModWorkshopAssessmentPage {
        constructor(fb) {
            this.fb = fb;
            this.evaluating = false;
            this.loaded = false;
            this.title = '';
            this.evaluate = {
                text: '',
                grade: -1,
                weight: 1,
            };
            this.weights = [];
            this.evaluationGrades = [];
            this.originalEvaluation = {
                text: '',
                grade: -1,
                weight: 1,
            };
            this.hasOffline = false;
            this.isDestroyed = false;
            this.forceLeave = false;
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.showGrade = workshop_helper["a" /* AddonModWorkshopHelper */].showGrade;
            this.evaluateForm = new fesm2015_forms["j" /* FormGroup */]({});
            this.evaluateForm.addControl('weight', this.fb.control('', fesm2015_forms["F" /* Validators */].required));
            this.evaluateForm.addControl('grade', this.fb.control(''));
            this.evaluateForm.addControl('text', this.fb.control(''));
            // Refresh workshop on sync.
            this.syncObserver = events["b" /* CoreEvents */].on(workshop_sync["b" /* AddonModWorkshopSyncProvider */].AUTO_SYNCED, (data) => {
                // Update just when all database is synced.
                if (this.workshopId === data.workshopId) {
                    this.loaded = false;
                    this.refreshAllData();
                }
            }, this.siteId);
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.assessment = services_navigator["a" /* CoreNavigator */].getRouteParam('assessment');
            this.submission = services_navigator["a" /* CoreNavigator */].getRouteParam('submission');
            this.profile = services_navigator["a" /* CoreNavigator */].getRouteParam('profile');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.assessmentId = this.assessment.id;
            this.workshopId = this.submission.workshopid;
            this.fetchAssessmentData();
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave || !this.evaluating) {
                    return true;
                }
                if (!this.hasEvaluationChanged()) {
                    return true;
                }
                // Show confirmation if some data has been modified.
                yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, this.siteId);
                return true;
            });
        }
        /**
         * Fetch the assessment data.
         *
         * @return Resolved when done.
         */
        fetchAssessmentData() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.workshop = yield workshop["a" /* AddonModWorkshop */].getWorkshopById(this.courseId, this.workshopId);
                    this.title = this.workshop.name;
                    this.strategy = this.workshop.strategy;
                    const gradeInfo = yield course["a" /* CoreCourse */].getModuleBasicGradeInfo(this.workshop.coursemodule);
                    this.maxGrade = gradeInfo === null || gradeInfo === void 0 ? void 0 : gradeInfo.grade;
                    this.access = yield workshop["a" /* AddonModWorkshop */].getWorkshopAccessInformation(this.workshopId, { cmId: this.workshop.coursemodule });
                    // Load Weights selector.
                    if (this.assessmentId && (this.access.canallocate || this.access.canoverridegrades)) {
                        if (!this.isDestroyed) {
                            // Block the workshop.
                            sync["a" /* CoreSync */].blockOperation(workshop["f" /* AddonModWorkshopProvider */].COMPONENT, this.workshopId);
                        }
                        this.evaluating = true;
                    }
                    else {
                        this.evaluating = false;
                    }
                    if (!this.evaluating && this.workshop.phase != workshop["e" /* AddonModWorkshopPhase */].PHASE_CLOSED) {
                        return;
                    }
                    // Get all info of the assessment.
                    const assessment = yield workshop_helper["a" /* AddonModWorkshopHelper */].getReviewerAssessmentById(this.workshopId, this.assessmentId, {
                        userId: this.profile && this.profile.id,
                        cmId: this.workshop.coursemodule,
                    });
                    this.assessment = workshop_helper["a" /* AddonModWorkshopHelper */].realGradeValue(this.workshop, assessment);
                    this.evaluate.text = this.assessment.feedbackreviewer || '';
                    this.evaluate.weight = this.assessment.weight;
                    this.gradingGrade = (_a = this.assessment.gradinggrade) !== null && _a !== void 0 ? _a : '-';
                    if (this.evaluating) {
                        if (this.access.canallocate) {
                            this.weights = [];
                            for (let i = 16; i >= 0; i--) {
                                this.weights[i] = i;
                            }
                        }
                        if (this.access.canoverridegrades) {
                            const defaultGrade = singletons["L" /* Translate */].instant('addon.mod_workshop.notoverridden');
                            this.evaluationGrades =
                                yield grades_helper["a" /* CoreGradesHelper */].makeGradesMenu(this.workshop.gradinggrade, undefined, defaultGrade, -1);
                        }
                        try {
                            const offlineAssess = yield workshop_offline["a" /* AddonModWorkshopOffline */].getEvaluateAssessment(this.workshopId, this.assessmentId);
                            this.hasOffline = true;
                            this.evaluate.weight = offlineAssess.weight;
                            if (this.access.canoverridegrades) {
                                this.evaluate.text = offlineAssess.feedbacktext || '';
                                this.evaluate.grade = parseInt(offlineAssess.gradinggradeover, 10) || -1;
                            }
                        }
                        catch (_b) {
                            this.hasOffline = false;
                            // No offline, load online.
                            if (this.access.canoverridegrades) {
                                this.evaluate.text = this.assessment.feedbackreviewer || '';
                                this.evaluate.grade = parseInt(String(this.assessment.gradinggradeover), 10) || -1;
                            }
                        }
                        finally {
                            this.originalEvaluation.weight = this.evaluate.weight;
                            if (this.access.canoverridegrades) {
                                this.originalEvaluation.text = this.evaluate.text;
                                this.originalEvaluation.grade = this.evaluate.grade;
                            }
                            this.evaluateForm.controls['weight'].setValue(this.evaluate.weight);
                            if (this.access.canoverridegrades) {
                                this.evaluateForm.controls['grade'].setValue(this.evaluate.grade);
                                this.evaluateForm.controls['text'].setValue(this.evaluate.text);
                            }
                        }
                    }
                    else if (this.workshop.phase == workshop["e" /* AddonModWorkshopPhase */].PHASE_CLOSED && this.assessment.gradinggradeoverby) {
                        this.evaluateByProfile = yield user["a" /* CoreUser */].getProfile(this.assessment.gradinggradeoverby, this.courseId, true);
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'mm.course.errorgetmodule', true);
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Force leaving the page, without checking for changes.
         */
        forceLeavePage() {
            this.forceLeave = true;
            services_navigator["a" /* CoreNavigator */].back();
        }
        /**
         * Check if data has changed.
         *
         * @return True if changed, false otherwise.
         */
        hasEvaluationChanged() {
            if (!this.loaded || !this.evaluating) {
                return false;
            }
            const inputData = this.evaluateForm.value;
            if (this.originalEvaluation.weight != inputData.weight) {
                return true;
            }
            if (this.access && this.access.canoverridegrades) {
                if (this.originalEvaluation.text != inputData.text) {
                    return true;
                }
                if (this.originalEvaluation.grade != inputData.grade) {
                    return true;
                }
            }
            return false;
        }
        /**
         * Convenience function to refresh all the data.
         *
         * @return Resolved when done.
         */
        refreshAllData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(workshop["a" /* AddonModWorkshop */].invalidateWorkshopData(this.courseId));
                promises.push(workshop["a" /* AddonModWorkshop */].invalidateWorkshopAccessInformationData(this.workshopId));
                promises.push(workshop["a" /* AddonModWorkshop */].invalidateReviewerAssesmentsData(this.workshopId));
                if (this.assessmentId) {
                    promises.push(workshop["a" /* AddonModWorkshop */].invalidateAssessmentFormData(this.workshopId, this.assessmentId));
                    promises.push(workshop["a" /* AddonModWorkshop */].invalidateAssessmentData(this.workshopId, this.assessmentId));
                }
                try {
                    yield Promise.all(promises);
                }
                finally {
                    events["b" /* CoreEvents */].trigger(workshop["f" /* AddonModWorkshopProvider */].ASSESSMENT_INVALIDATED, null, this.siteId);
                    yield this.fetchAssessmentData();
                }
            });
        }
        /**
         * Pull to refresh.
         *
         * @param refresher Refresher.
         */
        refreshAssessment(refresher) {
            if (this.loaded) {
                this.refreshAllData().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            }
        }
        /**
         * Save the assessment evaluation.
         */
        saveEvaluation() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Check if data has changed.
                if (this.hasEvaluationChanged()) {
                    yield this.sendEvaluation();
                }
                // Go back.
                this.forceLeavePage();
            });
        }
        /**
         * Sends the evaluation to be saved on the server.
         *
         * @return Resolved when done.
         */
        sendEvaluation() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                const inputData = this.evaluateForm.value;
                const grade = inputData.grade >= 0 ? String(inputData.grade) : '';
                // Add some HTML to the message if needed.
                const text = utils_text["a" /* CoreTextUtils */].formatHtmlLines(inputData.text);
                try {
                    // Try to send it to server.
                    const result = yield workshop["a" /* AddonModWorkshop */].evaluateAssessment(this.workshopId, this.assessmentId, this.courseId, text, inputData.weight, grade);
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, !!result, this.siteId);
                    const data = {
                        workshopId: this.workshopId,
                        assessmentId: this.assessmentId,
                        userId: this.currentUserId,
                    };
                    return workshop["a" /* AddonModWorkshop */].invalidateAssessmentData(this.workshopId, this.assessmentId).finally(() => {
                        events["b" /* CoreEvents */].trigger(workshop["f" /* AddonModWorkshopProvider */].ASSESSMENT_SAVED, data, this.siteId);
                    });
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Cannot save assessment evaluation');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a;
            this.isDestroyed = true;
            (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
            // Restore original back functions.
            sync["a" /* CoreSync */].unblockOperation(workshop["f" /* AddonModWorkshopProvider */].COMPONENT, this.workshopId);
        }
    }
    AddonModWorkshopAssessmentPage.ɵfac = function AddonModWorkshopAssessmentPage_Factory(t) { return new (t || AddonModWorkshopAssessmentPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    AddonModWorkshopAssessmentPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModWorkshopAssessmentPage, selectors: [["page-addon-mod-workshop-assessment-page"]], viewQuery: function AddonModWorkshopAssessmentPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 26, vars: 22, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end", 3, "hidden"], ["fill", "clear", 3, "click"], ["slot", "fixed", 3, "disabled", "ionRefresh", 4, "ngIf"], [3, "hideUntil"], [1, "ion-text-wrap"], ["slot", "start", 3, "user", "courseId", "userId", 4, "ngIf"], [4, "ngIf"], [3, "core-has-overriden-grade", 4, "ngIf"], ["class", "core-overriden-grade", 4, "ngIf"], ["color", "danger", 4, "ngIf"], [3, "workshop", "access", "assessmentId", "userId", "strategy", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], ["slot", "start", 3, "user", "courseId", "userId"], [1, "core-overriden-grade"], ["color", "danger"], [3, "workshop", "access", "assessmentId", "userId", "strategy"], [3, "formGroup"], ["evaluateFormEl", ""], ["class", "ion-text-wrap", 4, "ngIf"], ["position", "stacked"], ["core-mark-required", "true"], ["formControlName", "weight", "required", "true", "interface", "action-sheet", 3, "interfaceOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "grade", "interface", "action-sheet", 3, "interfaceOptions"], ["name", "text", "contextLevel", "module", "elementId", "feedbackreviewer_editor", 3, "control", "autoSave", "contextInstanceId", "draftExtraParams"]], template: function AddonModWorkshopAssessmentPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["Ec" /* ɵɵelementStart */](8, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function AddonModWorkshopAssessmentPage_Template_ion_button_click_8_listener() { return ctx.saveEvaluation(); });
                core["pd" /* ɵɵtext */](9);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "ion-content");
                core["nd" /* ɵɵtemplate */](12, AddonModWorkshopAssessmentPage_ion_refresher_12_Template, 3, 4, "ion-refresher", 5);
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 6);
                core["Ec" /* ɵɵelementStart */](14, "ion-item", 7);
                core["nd" /* ɵɵtemplate */](15, AddonModWorkshopAssessmentPage_core_user_avatar_15_Template, 1, 3, "core-user-avatar", 8);
                core["Ec" /* ɵɵelementStart */](16, "ion-label");
                core["nd" /* ɵɵtemplate */](17, AddonModWorkshopAssessmentPage_h2_17_Template, 2, 1, "h2", 9);
                core["nd" /* ɵɵtemplate */](18, AddonModWorkshopAssessmentPage_p_18_Template, 3, 7, "p", 9);
                core["nd" /* ɵɵtemplate */](19, AddonModWorkshopAssessmentPage_p_19_Template, 3, 9, "p", 10);
                core["nd" /* ɵɵtemplate */](20, AddonModWorkshopAssessmentPage_p_20_Template, 3, 4, "p", 11);
                core["nd" /* ɵɵtemplate */](21, AddonModWorkshopAssessmentPage_p_21_Template, 3, 6, "p", 9);
                core["nd" /* ɵɵtemplate */](22, AddonModWorkshopAssessmentPage_ion_badge_22_Template, 3, 3, "ion-badge", 12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](23, AddonModWorkshopAssessmentPage_addon_mod_workshop_assessment_strategy_23_Template, 1, 5, "addon-mod-workshop-assessment-strategy", 13);
                core["nd" /* ɵɵtemplate */](24, AddonModWorkshopAssessmentPage_form_24_Template, 17, 11, "form", 14);
                core["nd" /* ɵɵtemplate */](25, AddonModWorkshopAssessmentPage_ion_list_25_Template, 6, 5, "ion-list", 9);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 18, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.workshop && ctx.workshop.coursemodule)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.evaluating);
                core["lc" /* ɵɵadvance */](2);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 20, "core.save"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.evaluating);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.profile);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.profile && ctx.profile.fullname);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.workshop && ctx.assessment && ctx.showGrade(ctx.assessment.grade));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.workshop && ctx.access && ctx.access.canviewallsubmissions && ctx.assessment && ctx.showGrade(ctx.assessment.gradinggrade));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.access && ctx.access.canviewallsubmissions && ctx.assessment && ctx.showGrade(ctx.assessment.gradinggradeover));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.assessment && ctx.assessment.weight && ctx.assessment.weight != 1);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.assessment || !ctx.showGrade(ctx.assessment.grade));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.assessment && ctx.assessmentId && ctx.showGrade(ctx.assessment.grade) && ctx.workshop && ctx.access);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.evaluating);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.evaluating && ctx.evaluate && ctx.evaluate.text);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["k" /* IonButton */], ionic_angular["u" /* IonContent */], common["t" /* NgIf */], loading["a" /* CoreLoadingComponent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["j" /* IonBadge */], assessment_strategy["a" /* AddonModWorkshopAssessmentStrategyComponent */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], mark_required["a" /* CoreMarkRequiredComponent */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], fesm2015_forms["C" /* RequiredValidator */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["O" /* IonList */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModWorkshopAssessmentPage;
})();

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader.ts
var fileuploader = __webpack_require__("hSQQ");

// EXTERNAL MODULE: ./src/core/services/file.ts
var services_file = __webpack_require__("EmGO");

// EXTERNAL MODULE: ./src/core/services/file-helper.ts
var file_helper = __webpack_require__("L2dF");

// EXTERNAL MODULE: ./src/core/components/attachments/attachments.ts
var attachments = __webpack_require__("M9y5");

// CONCATENATED MODULE: ./src/addons/mod/workshop/pages/edit-submission/edit-submission.ts

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


























const edit_submission_c0 = ["editFormEl"];
function AddonModWorkshopEditSubmissionPage_form_15_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](2, "span", 14);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "core-rich-text-editor", 15);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("core-mark-required", ctx_r2.textRequired);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 9, "addon.mod_workshop.submissioncontent"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r2.editForm.controls["content"])("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 11, "addon.mod_workshop.submissioncontent"))("component", ctx_r2.component)("componentId", ctx_r2.componentId)("autoSave", true)("contextInstanceId", ctx_r2.module.id)("draftExtraParams", ctx_r2.editorExtraParams);
    }
}
function AddonModWorkshopEditSubmissionPage_form_15_core_attachments_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-attachments", 16);
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("files", ctx_r3.attachments)("maxSize", ctx_r3.workshop.maxbytes)("maxSubmissions", ctx_r3.workshop.nattachments)("component", ctx_r3.component)("componentId", ctx_r3.workshop.coursemodule)("acceptedTypes", ctx_r3.workshop.submissionfiletypes)("required", ctx_r3.fileRequired);
    }
}
function AddonModWorkshopEditSubmissionPage_form_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "form", 6, 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](3, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](4, "span", 10);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "ion-input", 11);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonModWorkshopEditSubmissionPage_form_15_ion_item_9_Template, 7, 13, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](10, AddonModWorkshopEditSubmissionPage_form_15_core_attachments_10_Template, 1, 7, "core-attachments", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r0.editForm);
        core["lc" /* ɵɵadvance */](5);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.mod_workshop.submissiontitle"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](8, 7, "addon.mod_workshop.submissiontitle"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.textAvailable);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.fileAvailable);
    }
}
/**
 * Page that displays the workshop edit submission.
 */
let edit_submission_AddonModWorkshopEditSubmissionPage = /*@__PURE__*/ (() => {
    class AddonModWorkshopEditSubmissionPage {
        constructor(fb) {
            this.fb = fb;
            this.loaded = false;
            this.component = workshop["f" /* AddonModWorkshopProvider */].COMPONENT;
            this.editorExtraParams = {}; // Extra params to identify the draft.
            this.textAvailable = false;
            this.textRequired = false;
            this.fileAvailable = false;
            this.fileRequired = false;
            this.attachments = [];
            this.submissionId = 0;
            this.originalData = {
                title: '',
                content: '',
                attachmentfiles: [],
            };
            this.hasOffline = false;
            this.editing = false;
            this.forceLeave = false;
            this.isDestroyed = false;
            this.userId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.editForm = new fesm2015_forms["j" /* FormGroup */]({});
            this.editForm.addControl('title', this.fb.control('', fesm2015_forms["F" /* Validators */].required));
            this.editForm.addControl('content', this.fb.control(''));
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.access = services_navigator["a" /* CoreNavigator */].getRouteParam('access');
            this.submissionId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('submissionId') || 0;
            if (this.submissionId > 0) {
                this.editorExtraParams.id = this.submissionId;
            }
            this.workshopId = this.module.instance;
            this.componentId = this.module.id;
            if (!this.isDestroyed) {
                // Block the workshop.
                sync["a" /* CoreSync */].blockOperation(this.component, this.workshopId);
            }
            this.fetchSubmissionData();
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave) {
                    return true;
                }
                // Check if data has changed.
                if (this.hasDataChanged()) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                if ((_a = this.submission) === null || _a === void 0 ? void 0 : _a.attachmentfiles) {
                    // Delete the local files from the tmp folder.
                    fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.submission.attachmentfiles);
                }
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, this.siteId);
                return true;
            });
        }
        /**
         * Fetch the submission data.
         *
         * @return Resolved when done.
         */
        fetchSubmissionData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.workshop = yield workshop["a" /* AddonModWorkshop */].getWorkshop(this.courseId, this.module.id);
                    this.textAvailable = (this.workshop.submissiontypetext != workshop["g" /* AddonModWorkshopSubmissionType */].SUBMISSION_TYPE_DISABLED);
                    this.textRequired = (this.workshop.submissiontypetext == workshop["g" /* AddonModWorkshopSubmissionType */].SUBMISSION_TYPE_REQUIRED);
                    this.fileAvailable = (this.workshop.submissiontypefile != workshop["g" /* AddonModWorkshopSubmissionType */].SUBMISSION_TYPE_DISABLED);
                    this.fileRequired = (this.workshop.submissiontypefile == workshop["g" /* AddonModWorkshopSubmissionType */].SUBMISSION_TYPE_REQUIRED);
                    this.editForm.controls.content.setValidators(this.textRequired ? fesm2015_forms["F" /* Validators */].required : null);
                    if (this.submissionId > 0) {
                        this.editing = true;
                        this.submission =
                            yield workshop_helper["a" /* AddonModWorkshopHelper */].getSubmissionById(this.workshopId, this.submissionId, { cmId: this.module.id });
                        const canEdit = this.userId == this.submission.authorid &&
                            this.access.cansubmit &&
                            this.access.modifyingsubmissionallowed;
                        if (!canEdit) {
                            // Should not happen, but go back if does.
                            this.forceLeavePage();
                            return;
                        }
                    }
                    else if (!this.access.cansubmit || !this.access.creatingsubmissionallowed) {
                        // Should not happen, but go back if does.
                        this.forceLeavePage();
                        return;
                    }
                    const submissionsActions = yield workshop_offline["a" /* AddonModWorkshopOffline */].getSubmissions(this.workshopId);
                    if (submissionsActions && submissionsActions.length) {
                        this.hasOffline = true;
                        this.submission = yield workshop_helper["a" /* AddonModWorkshopHelper */].applyOfflineData(this.submission, submissionsActions);
                    }
                    else {
                        this.hasOffline = false;
                    }
                    if (this.submission) {
                        this.originalData.title = this.submission.title || '';
                        this.originalData.content = this.submission.content || '';
                        this.originalData.attachmentfiles = [];
                        (this.submission.attachmentfiles || []).forEach((file) => {
                            let filename = services_file["a" /* CoreFile */].getFileName(file);
                            if (!filename) {
                                // We don't have filename, extract it from the path.
                                filename = file_helper["a" /* CoreFileHelper */].getFilenameFromPath(file) || '';
                            }
                            this.originalData.attachmentfiles.push({
                                filename,
                                fileurl: 'fileurl' in file ? file.fileurl : '',
                            });
                        });
                        this.editForm.controls['title'].setValue(this.submission.title);
                        this.editForm.controls['content'].setValue(this.submission.content);
                        this.attachments = this.submission.attachmentfiles || [];
                    }
                    this.loaded = true;
                }
                catch (error) {
                    this.loaded = false;
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                    this.forceLeavePage();
                }
            });
        }
        /**
         * Force leaving the page, without checking for changes.
         */
        forceLeavePage() {
            this.forceLeave = true;
            services_navigator["a" /* CoreNavigator */].back();
        }
        /**
         * Get the form input data.
         *
         * @return Object with all the info.
         */
        getInputData() {
            const values = {
                title: this.editForm.value.title,
                content: '',
                attachmentfiles: [],
            };
            if (this.textAvailable) {
                values.content = this.editForm.value.content || '';
            }
            if (this.fileAvailable) {
                values.attachmentfiles = this.attachments;
            }
            return values;
        }
        /**
         * Check if data has changed.
         *
         * @return True if changed or false if not.
         */
        hasDataChanged() {
            if (!this.loaded) {
                return false;
            }
            const inputData = this.getInputData();
            if (this.originalData.title != inputData.title || this.textAvailable && this.originalData.content != inputData.content) {
                return true;
            }
            if (this.fileAvailable) {
                return fileuploader["a" /* CoreFileUploader */].areFileListDifferent(inputData.attachmentfiles, this.originalData.attachmentfiles);
            }
            return false;
        }
        /**
         * Save the submission.
         */
        save() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Check if data has changed.
                if (this.hasDataChanged()) {
                    try {
                        yield this.saveSubmission();
                        // Go back to entry list.
                        this.forceLeavePage();
                    }
                    catch (_a) {
                        // Nothing to do.
                    }
                }
                else {
                    // Nothing to save, just go back.
                    this.forceLeavePage();
                }
            });
        }
        /**
         * Send submission and save.
         *
         * @return Resolved when done.
         */
        saveSubmission() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const inputData = this.getInputData();
                if (!inputData.title) {
                    dom["a" /* CoreDomUtils */].showAlertTranslated('core.notice', 'addon.mod_workshop.submissionrequiredtitle');
                    throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_workshop.submissionrequiredtitle'));
                }
                const noText = utils_text["a" /* CoreTextUtils */].htmlIsBlank(inputData.content);
                const noFiles = !inputData.attachmentfiles.length;
                if ((this.textRequired && noText) || (this.fileRequired && noFiles) || (noText && noFiles)) {
                    dom["a" /* CoreDomUtils */].showAlertTranslated('core.notice', 'addon.mod_workshop.submissionrequiredcontent');
                    throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_workshop.submissionrequiredcontent'));
                }
                let saveOffline = false;
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                const submissionId = (_a = this.submission) === null || _a === void 0 ? void 0 : _a.id;
                // Add some HTML to the message if needed.
                if (this.textAvailable) {
                    inputData.content = utils_text["a" /* CoreTextUtils */].formatHtmlLines(inputData.content);
                }
                // Upload attachments first if any.
                let allowOffline = !inputData.attachmentfiles.length;
                try {
                    let attachmentsId;
                    let storeFilesResult;
                    try {
                        attachmentsId = yield workshop_helper["a" /* AddonModWorkshopHelper */].uploadOrStoreSubmissionFiles(this.workshopId, inputData.attachmentfiles, false);
                    }
                    catch (_b) {
                        // Cannot upload them in online, save them in offline.
                        saveOffline = true;
                        allowOffline = true;
                        storeFilesResult = yield workshop_helper["a" /* AddonModWorkshopHelper */].uploadOrStoreSubmissionFiles(this.workshopId, inputData.attachmentfiles, true);
                    }
                    if (!saveOffline && !this.fileAvailable) {
                        attachmentsId = undefined;
                    }
                    let newSubmissionId;
                    if (this.editing) {
                        if (saveOffline) {
                            // Save submission in offline.
                            yield workshop_offline["a" /* AddonModWorkshopOffline */].saveSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, storeFilesResult, submissionId, workshop["b" /* AddonModWorkshopAction */].UPDATE);
                            newSubmissionId = false;
                        }
                        else {
                            // Try to send it to server.
                            // Don't allow offline if there are attachments since they were uploaded fine.
                            newSubmissionId = yield workshop["a" /* AddonModWorkshop */].updateSubmission(this.workshopId, submissionId, this.courseId, inputData.title, inputData.content, attachmentsId, undefined, allowOffline);
                        }
                    }
                    else {
                        if (saveOffline) {
                            // Save submission in offline.
                            yield workshop_offline["a" /* AddonModWorkshopOffline */].saveSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, storeFilesResult, undefined, workshop["b" /* AddonModWorkshopAction */].ADD);
                            newSubmissionId = false;
                        }
                        else {
                            // Try to send it to server.
                            // Don't allow offline if there are attachments since they were uploaded fine.
                            newSubmissionId = yield workshop["a" /* AddonModWorkshop */].addSubmission(this.workshopId, this.courseId, inputData.title, inputData.content, attachmentsId, undefined, allowOffline);
                        }
                    }
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, !!newSubmissionId, this.siteId);
                    const data = {
                        workshopId: this.workshopId,
                    };
                    if (newSubmissionId) {
                        // Data sent to server, delete stored files (if any).
                        workshop_offline["a" /* AddonModWorkshopOffline */].deleteSubmissionAction(this.workshopId, this.editing ? workshop["b" /* AddonModWorkshopAction */].UPDATE : workshop["b" /* AddonModWorkshopAction */].ADD);
                        workshop_helper["a" /* AddonModWorkshopHelper */].deleteSubmissionStoredFiles(this.workshopId, this.siteId);
                        data.submissionId = newSubmissionId;
                    }
                    events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'workshop' });
                    const promise = newSubmissionId ? workshop["a" /* AddonModWorkshop */].invalidateSubmissionData(this.workshopId, newSubmissionId) :
                        Promise.resolve();
                    yield promise.finally(() => {
                        events["b" /* CoreEvents */].trigger(workshop["f" /* AddonModWorkshopProvider */].SUBMISSION_CHANGED, data, this.siteId);
                        // Delete the local files from the tmp folder.
                        fileuploader["a" /* CoreFileUploader */].clearTmpFiles(inputData.attachmentfiles);
                    });
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Cannot save submission');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        getFilesComponentId() {
            const id = this.submissionId > 0
                ? this.submissionId
                : 'newsub';
            return this.workshopId + '_' + id;
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            this.isDestroyed = true;
            sync["a" /* CoreSync */].unblockOperation(this.component, this.workshopId);
        }
    }
    AddonModWorkshopEditSubmissionPage.ɵfac = function AddonModWorkshopEditSubmissionPage_Factory(t) { return new (t || AddonModWorkshopEditSubmissionPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    AddonModWorkshopEditSubmissionPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModWorkshopEditSubmissionPage, selectors: [["page-addon-mod-workshop-edit-submission"]], viewQuery: function AddonModWorkshopEditSubmissionPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](edit_submission_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 16, vars: 14, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], [3, "hideUntil"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["editFormEl", ""], [1, "ion-text-wrap"], ["position", "stacked"], ["core-mark-required", "true"], ["name", "title", "type", "text", "formControlName", "title", 3, "placeholder"], [4, "ngIf"], ["allowOffline", "true", 3, "files", "maxSize", "maxSubmissions", "component", "componentId", "acceptedTypes", "required", 4, "ngIf"], [3, "core-mark-required"], ["name", "content", "name", "content", "contextLevel", "module", "elementId", "content_editor", 3, "control", "placeholder", "component", "componentId", "autoSave", "contextInstanceId", "draftExtraParams"], ["allowOffline", "true", 3, "files", "maxSize", "maxSubmissions", "component", "componentId", "acceptedTypes", "required"]], template: function AddonModWorkshopEditSubmissionPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-buttons", 2);
                core["Ec" /* ɵɵelementStart */](9, "ion-button", 3);
                core["Mc" /* ɵɵlistener */]("click", function AddonModWorkshopEditSubmissionPage_Template_ion_button_click_9_listener() { return ctx.save(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["pd" /* ɵɵtext */](11);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](15, AddonModWorkshopEditSubmissionPage_form_15_Template, 11, 9, "form", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "addon.mod_workshop.editsubmission"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 10, "core.save"));
                core["lc" /* ɵɵadvance */](2);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](12, 12, "core.save"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.workshop);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], mark_required["a" /* CoreMarkRequiredComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], attachments["a" /* CoreAttachmentsComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModWorkshopEditSubmissionPage;
})();

// EXTERNAL MODULE: ./src/core/components/bs-tooltip/bs-tooltip.ts
var bs_tooltip = __webpack_require__("aEIl");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./src/core/components/chart/chart.ts
var chart = __webpack_require__("Lmwl");

// EXTERNAL MODULE: ./src/core/components/chrono/chrono.ts
var chrono = __webpack_require__("4qNr");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-popover.ts
var context_menu_popover = __webpack_require__("0QZc");

// EXTERNAL MODULE: ./src/core/components/download-refresh/download-refresh.ts
var download_refresh = __webpack_require__("uHIS");

// EXTERNAL MODULE: ./src/core/components/dynamic-component/dynamic-component.ts
var dynamic_component = __webpack_require__("w+Pn");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/file/file.ts
var file_file = __webpack_require__("5450");

// EXTERNAL MODULE: ./src/core/components/files/files.ts
var files = __webpack_require__("W5pS");

// EXTERNAL MODULE: ./src/core/components/icon/icon.ts
var icon = __webpack_require__("p+Qc");

// EXTERNAL MODULE: ./src/core/components/iframe/iframe.ts
var iframe = __webpack_require__("qNqN");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/components/input-errors/input-errors.ts
var input_errors = __webpack_require__("FTxb");

// EXTERNAL MODULE: ./src/core/components/local-file/local-file.ts
var local_file = __webpack_require__("/K1O");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/components/navigation-bar/navigation-bar.ts
var navigation_bar = __webpack_require__("/BoF");

// EXTERNAL MODULE: ./src/core/components/progress-bar/progress-bar.ts
var progress_bar = __webpack_require__("TKc2");

// EXTERNAL MODULE: ./src/core/components/recaptcha/recaptcha.ts
var recaptcha = __webpack_require__("whRm");

// EXTERNAL MODULE: ./src/core/components/send-message-form/send-message-form.ts
var send_message_form = __webpack_require__("O4u7");

// EXTERNAL MODULE: ./src/core/components/show-password/show-password.ts
var show_password = __webpack_require__("lqoc");

// EXTERNAL MODULE: ./src/core/components/site-picker/site-picker.ts
var site_picker = __webpack_require__("3lz8");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/components/style/style.ts
var style = __webpack_require__("QQhE");

// EXTERNAL MODULE: ./src/core/components/tabs/tab.ts
var tab = __webpack_require__("JYLr");

// EXTERNAL MODULE: ./src/core/components/tabs/tabs.ts
var tabs = __webpack_require__("vWwc");

// EXTERNAL MODULE: ./src/core/components/tabs-outlet/tabs-outlet.ts
var tabs_outlet = __webpack_require__("NhJP");

// EXTERNAL MODULE: ./src/core/components/timer/timer.ts
var timer = __webpack_require__("rztj");

// EXTERNAL MODULE: ./src/core/components/combobox/combobox.ts
var combobox = __webpack_require__("rf3J");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/components/horizontal-scroll-controls/horizontal-scroll-controls.ts
var horizontal_scroll_controls = __webpack_require__("TF0o");

// EXTERNAL MODULE: ./src/core/directives/auto-focus.ts
var auto_focus = __webpack_require__("6uVz");

// EXTERNAL MODULE: ./src/core/directives/auto-rows.ts
var auto_rows = __webpack_require__("d0nH");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/directives/long-press.ts
var long_press = __webpack_require__("iJls");

// EXTERNAL MODULE: ./src/core/directives/supress-events.ts
var supress_events = __webpack_require__("ArDJ");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/directives/aria-button.ts
var aria_button = __webpack_require__("saTE");

// EXTERNAL MODULE: ./src/core/directives/on-resize.ts
var on_resize = __webpack_require__("8PoL");

// EXTERNAL MODULE: ./src/core/directives/download-file.ts
var download_file = __webpack_require__("4a38");

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/submission/submission.ts
var submission_submission = __webpack_require__("Uzd6");

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/phase/phase.ts
var phase = __webpack_require__("0w4i");

// EXTERNAL MODULE: ./src/addons/mod/workshop/components/assessment/assessment.ts
var assessment_assessment = __webpack_require__("G92Y");

// EXTERNAL MODULE: ./src/core/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__("1iFe");

// EXTERNAL MODULE: ./src/core/pipes/create-links.ts
var create_links = __webpack_require__("dne1");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// EXTERNAL MODULE: ./src/core/pipes/duration.ts
var duration = __webpack_require__("llyR");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// EXTERNAL MODULE: ./src/core/pipes/no-tags.ts
var no_tags = __webpack_require__("SspJ");

// EXTERNAL MODULE: ./src/core/pipes/seconds-to-hms.ts
var seconds_to_hms = __webpack_require__("U2xU");

// EXTERNAL MODULE: ./src/core/pipes/time-ago.ts
var time_ago = __webpack_require__("lAaw");

// EXTERNAL MODULE: ./src/core/pipes/to-locale-string.ts
var to_locale_string = __webpack_require__("1ArG");

// CONCATENATED MODULE: ./src/addons/mod/workshop/workshop-lazy.module.ts
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
        path: ':courseId/:cmId',
        component: index_AddonModWorkshopIndexPage,
    },
    {
        path: ':courseId/:cmId/:submissionId',
        component: submission["a" /* AddonModWorkshopSubmissionPage */],
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
    {
        path: ':courseId/:cmId/:submissionId/edit',
        component: edit_submission_AddonModWorkshopEditSubmissionPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
    {
        path: ':courseId/:cmId/:submissionId/:assessmentId',
        component: assessment_AddonModWorkshopAssessmentPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let workshop_lazy_module_AddonModWorkshopLazyModule = /*@__PURE__*/ (() => {
    class AddonModWorkshopLazyModule {
    }
    AddonModWorkshopLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModWorkshopLazyModule });
    AddonModWorkshopLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModWorkshopLazyModule_Factory(t) { return new (t || AddonModWorkshopLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModWorkshopComponentsModule */],
                components_components_module["a" /* CoreEditorComponentsModule */],
            ]] });
    return AddonModWorkshopLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](workshop_lazy_module_AddonModWorkshopLazyModule, { declarations: [index_AddonModWorkshopIndexPage,
            submission["a" /* AddonModWorkshopSubmissionPage */],
            assessment_AddonModWorkshopAssessmentPage,
            edit_submission_AddonModWorkshopEditSubmissionPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModWorkshopComponentsModule */],
            components_components_module["a" /* CoreEditorComponentsModule */]] });
})();
core["kd" /* ɵɵsetComponentScope */](submission["a" /* AddonModWorkshopSubmissionPage */], [router["n" /* RouterOutlet */], router["j" /* RouterLink */], router["l" /* RouterLinkWithHref */], router["k" /* RouterLinkActive */], router["p" /* ɵangular_packages_router_router_l */], common["q" /* NgClass */], common["r" /* NgComponentOutlet */], common["s" /* NgForOf */], common["t" /* NgIf */], common["A" /* NgTemplateOutlet */], common["w" /* NgStyle */], common["x" /* NgSwitch */], common["y" /* NgSwitchCase */], common["z" /* NgSwitchDefault */], common["u" /* NgPlural */], common["v" /* NgPluralCase */], attachments["a" /* CoreAttachmentsComponent */], bs_tooltip["a" /* CoreBSTooltipComponent */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */], chart["a" /* CoreChartComponent */], chrono["a" /* CoreChronoComponent */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], context_menu_popover["a" /* CoreContextMenuPopoverComponent */], download_refresh["a" /* CoreDownloadRefreshComponent */], dynamic_component["a" /* CoreDynamicComponent */], empty_box["a" /* CoreEmptyBoxComponent */], file_file["a" /* CoreFileComponent */], files["a" /* CoreFilesComponent */], icon["a" /* CoreIconComponent */], iframe["a" /* CoreIframeComponent */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], input_errors["a" /* CoreInputErrorsComponent */], loading["a" /* CoreLoadingComponent */], local_file["a" /* CoreLocalFileComponent */], mark_required["a" /* CoreMarkRequiredComponent */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], navigation_bar["a" /* CoreNavigationBarComponent */], progress_bar["a" /* CoreProgressBarComponent */], recaptcha["a" /* CoreRecaptchaComponent */], send_message_form["a" /* CoreSendMessageFormComponent */], show_password["a" /* CoreShowPasswordComponent */], site_picker["a" /* CoreSitePickerComponent */], split_view["a" /* CoreSplitViewComponent */], style["a" /* CoreStyleComponent */], tab["a" /* CoreTabComponent */], tabs["a" /* CoreTabsComponent */], tabs_outlet["a" /* CoreTabsOutletComponent */], timer["a" /* CoreTimerComponent */], user_avatar["a" /* CoreUserAvatarComponent */], combobox["a" /* CoreComboboxComponent */], spacer["a" /* CoreSpacerComponent */], horizontal_scroll_controls["a" /* CoreHorizontalScrollControlsComponent */], auto_focus["a" /* CoreAutoFocusDirective */], auto_rows["a" /* CoreAutoRowsDirective */], external_content["a" /* CoreExternalContentDirective */], fab["a" /* CoreFabDirective */], fa_icon["a" /* CoreFaIconDirective */], format_text["a" /* CoreFormatTextDirective */], directives_link["a" /* CoreLinkDirective */], long_press["a" /* CoreLongPressDirective */], supress_events["a" /* CoreSupressEventsDirective */], user_link["a" /* CoreUserLinkDirective */], aria_button["a" /* CoreAriaButtonClickDirective */], on_resize["a" /* CoreOnResizeDirective */], download_file["a" /* CoreDownloadFileDirective */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["w" /* NgSelectOption */], fesm2015_forms["G" /* ɵangular_packages_forms_forms_x */], fesm2015_forms["c" /* DefaultValueAccessor */], fesm2015_forms["x" /* NumberValueAccessor */], fesm2015_forms["A" /* RangeValueAccessor */], fesm2015_forms["a" /* CheckboxControlValueAccessor */], fesm2015_forms["D" /* SelectControlValueAccessor */], fesm2015_forms["E" /* SelectMultipleControlValueAccessor */], fesm2015_forms["z" /* RadioControlValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["C" /* RequiredValidator */], fesm2015_forms["o" /* MinLengthValidator */], fesm2015_forms["n" /* MaxLengthValidator */], fesm2015_forms["y" /* PatternValidator */], fesm2015_forms["b" /* CheckboxRequiredValidator */], fesm2015_forms["d" /* EmailValidator */], fesm2015_forms["u" /* NgModel */], fesm2015_forms["v" /* NgModelGroup */], fesm2015_forms["t" /* NgForm */], ionic_angular["e" /* IonApp */], ionic_angular["f" /* IonAvatar */], ionic_angular["g" /* IonBackButton */], ionic_angular["i" /* IonBackdrop */], ionic_angular["j" /* IonBadge */], ionic_angular["k" /* IonButton */], ionic_angular["l" /* IonButtons */], ionic_angular["m" /* IonCard */], ionic_angular["n" /* IonCardContent */], ionic_angular["o" /* IonCardHeader */], ionic_angular["p" /* IonCardSubtitle */], ionic_angular["q" /* IonCardTitle */], ionic_angular["r" /* IonCheckbox */], ionic_angular["s" /* IonChip */], ionic_angular["t" /* IonCol */], ionic_angular["u" /* IonContent */], ionic_angular["v" /* IonDatetime */], ionic_angular["w" /* IonFab */], ionic_angular["x" /* IonFabButton */], ionic_angular["y" /* IonFabList */], ionic_angular["z" /* IonFooter */], ionic_angular["A" /* IonGrid */], ionic_angular["B" /* IonHeader */], ionic_angular["C" /* IonIcon */], ionic_angular["D" /* IonImg */], ionic_angular["E" /* IonInfiniteScroll */], ionic_angular["F" /* IonInfiniteScrollContent */], ionic_angular["G" /* IonInput */], ionic_angular["H" /* IonItem */], ionic_angular["I" /* IonItemDivider */], ionic_angular["J" /* IonItemGroup */], ionic_angular["K" /* IonItemOption */], ionic_angular["L" /* IonItemOptions */], ionic_angular["M" /* IonItemSliding */], ionic_angular["N" /* IonLabel */], ionic_angular["O" /* IonList */], ionic_angular["P" /* IonListHeader */], ionic_angular["Q" /* IonMenu */], ionic_angular["R" /* IonMenuButton */], ionic_angular["S" /* IonMenuToggle */], ionic_angular["T" /* IonNav */], ionic_angular["U" /* IonNavLink */], ionic_angular["V" /* IonNote */], ionic_angular["W" /* IonProgressBar */], ionic_angular["X" /* IonRadio */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["Z" /* IonRange */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], ionic_angular["cb" /* IonReorder */], ionic_angular["db" /* IonReorderGroup */], ionic_angular["eb" /* IonRippleEffect */], ionic_angular["gb" /* IonRow */], ionic_angular["hb" /* IonSearchbar */], ionic_angular["ib" /* IonSegment */], ionic_angular["jb" /* IonSegmentButton */], ionic_angular["kb" /* IonSelect */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["mb" /* IonSkeletonText */], ionic_angular["nb" /* IonSlide */], ionic_angular["ob" /* IonSlides */], ionic_angular["pb" /* IonSpinner */], ionic_angular["qb" /* IonSplitPane */], ionic_angular["rb" /* IonTabBar */], ionic_angular["sb" /* IonTabButton */], ionic_angular["ub" /* IonText */], ionic_angular["vb" /* IonTextarea */], ionic_angular["wb" /* IonThumbnail */], ionic_angular["yb" /* IonToggle */], ionic_angular["zb" /* IonToolbar */], ionic_angular["xb" /* IonTitle */], ionic_angular["tb" /* IonTabs */], ionic_angular["c" /* BooleanValueAccessor */], ionic_angular["Ib" /* NumericValueAccessor */], ionic_angular["Lb" /* RadioValueAccessor */], ionic_angular["Nb" /* SelectValueAccessor */], ionic_angular["Ob" /* TextValueAccessor */], ionic_angular["fb" /* IonRouterOutlet */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["Gb" /* NavDelegate */], ionic_angular["Mb" /* RouterLinkDelegate */], ionic_angular["Qb" /* VirtualFooter */], ionic_angular["Rb" /* VirtualHeader */], ionic_angular["Sb" /* VirtualItem */], ionic_angular["Ab" /* IonVirtualScroll */], fesm2015_forms["h" /* FormControlDirective */], fesm2015_forms["k" /* FormGroupDirective */], fesm2015_forms["i" /* FormControlName */], fesm2015_forms["l" /* FormGroupName */], fesm2015_forms["e" /* FormArrayName */], ngx_translate_core["a" /* TranslateDirective */], index["a" /* AddonModWorkshopIndexComponent */], submission_submission["a" /* AddonModWorkshopSubmissionComponent */], phase["a" /* AddonModWorkshopPhaseInfoComponent */], assessment_assessment["a" /* AddonModWorkshopAssessmentComponent */], assessment_strategy["a" /* AddonModWorkshopAssessmentStrategyComponent */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], index_AddonModWorkshopIndexPage,
    submission["a" /* AddonModWorkshopSubmissionPage */],
    assessment_AddonModWorkshopAssessmentPage,
    edit_submission_AddonModWorkshopEditSubmissionPage], [common["b" /* AsyncPipe */], common["G" /* UpperCasePipe */], common["p" /* LowerCasePipe */], common["k" /* JsonPipe */], common["E" /* SlicePipe */], common["g" /* DecimalPipe */], common["C" /* PercentPipe */], common["F" /* TitleCasePipe */], common["d" /* CurrencyPipe */], common["f" /* DatePipe */], common["i" /* I18nPluralPipe */], common["j" /* I18nSelectPipe */], common["l" /* KeyValuePipe */], bytes_to_size["a" /* CoreBytesToSizePipe */], create_links["a" /* CoreCreateLinksPipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */], duration["a" /* CoreDurationPipe */], format_date["a" /* CoreFormatDatePipe */], no_tags["a" /* CoreNoTagsPipe */], seconds_to_hms["a" /* CoreSecondsToHMSPipe */], time_ago["a" /* CoreTimeAgoPipe */], to_locale_string["a" /* CoreToLocaleStringPipe */], ngx_translate_core["d" /* TranslatePipe */]]);


/***/ })

}]);