(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "aMqF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCompetencyLazyModule", function() { return /* binding */ competency_lazy_module_AddonCompetencyLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/addons/competency/services/competency.ts
var services_competency = __webpack_require__("FBtE");

// EXTERNAL MODULE: ./src/addons/competency/services/competency-helper.ts
var competency_helper = __webpack_require__("qjHM");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/competency/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("Hahs");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/progress-bar/progress-bar.ts
var progress_bar = __webpack_require__("TKc2");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/competency/pages/plan/plan.ts

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















function AddonCompetencyPlanPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.plan.plan.name);
    }
}
function AddonCompetencyPlanPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["zc" /* ɵɵelement */](3, "core-user-avatar", 7);
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.user);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.user.fullname);
    }
}
function AddonCompetencyPlanPage_ion_card_12_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r4.plan.plan.description)("contextInstanceId", ctx_r4.plan.plan.userid);
    }
}
function AddonCompetencyPlanPage_ion_card_12_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.competency.duedate"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, ctx_r5.plan.plan.duedate * 1000));
    }
}
function AddonCompetencyPlanPage_ion_card_12_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.competency.template"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r6.plan.plan.template.shortname);
    }
}
const _c0 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c1 = function (a0) { return { $a: a0 }; };
function AddonCompetencyPlanPage_ion_card_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-list");
        core["nd" /* ɵɵtemplate */](2, AddonCompetencyPlanPage_ion_card_12_ion_item_2_Template, 4, 2, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](3, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "p", 10);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["pd" /* ɵɵtext */](9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonCompetencyPlanPage_ion_card_12_ion_item_10_Template, 8, 6, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](11, AddonCompetencyPlanPage_ion_card_12_ion_item_11_Template, 7, 4, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](12, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](13, "ion-label", 11);
        core["Ec" /* ɵɵelementStart */](14, "p", 10);
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](17, "p");
        core["pd" /* ɵɵtext */](18);
        core["Pc" /* ɵɵpipe */](19, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](20, "core-progress-bar", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.plan.plan.description);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 11, "addon.competency.status"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r2.plan.plan.statusname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.plan.plan.duedate > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.plan.plan.template);
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-competency-plan-", ctx_r2.plan.plan.id, "-progress");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 13, "addon.competency.progress"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](19, 15, "addon.competency.xcompetenciesproficientoutofy", core["ad" /* ɵɵpureFunction1 */](21, _c1, core["bd" /* ɵɵpureFunction2 */](18, _c0, ctx_r2.plan.proficientcompetencycount, ctx_r2.plan.competencycount))), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("ariaDescribedBy", "addon-competency-plan-", ctx_r2.plan.plan.id, "-progress");
        core["Vc" /* ɵɵproperty */]("progress", ctx_r2.plan.proficientcompetencypercentage)("text", ctx_r2.plan.proficientcompetencypercentageformatted);
    }
}
function AddonCompetencyPlanPage_ion_card_13_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.competency.nocompetencies"));
    }
}
function AddonCompetencyPlanPage_ion_card_13_ion_item_7_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 18);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", competency_r9.usercompetencyplan.proficiency ? "success" : "danger");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", competency_r9.usercompetencyplan.gradename, " ");
    }
}
function AddonCompetencyPlanPage_ion_card_13_ion_item_7_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 18);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", competency_r9.usercompetency.proficiency ? "success" : "danger");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", competency_r9.usercompetency.gradename, " ");
    }
}
function AddonCompetencyPlanPage_ion_card_13_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyPlanPage_ion_card_13_ion_item_7_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r15); const competency_r9 = ctx.$implicit; const ctx_r14 = core["Oc" /* ɵɵnextContext */](2); return ctx_r14.openCompetency(competency_r9.competency.id); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Ec" /* ɵɵelementStart */](4, "em");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonCompetencyPlanPage_ion_card_13_ion_item_7_ion_badge_6_Template, 2, 2, "ion-badge", 17);
        core["nd" /* ɵɵtemplate */](7, AddonCompetencyPlanPage_ion_card_13_ion_item_7_ion_badge_7_Template, 2, 2, "ion-badge", 17);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r9 = ctx.$implicit;
        core["mc" /* ɵɵattribute */]("aria-label", competency_r9.competency.shortname);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */]("", competency_r9.competency.shortname, " ");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](competency_r9.competency.idnumber);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", competency_r9.usercompetencyplan);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !competency_r9.usercompetencyplan);
    }
}
function AddonCompetencyPlanPage_ion_card_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-card-title");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-list");
        core["nd" /* ɵɵtemplate */](6, AddonCompetencyPlanPage_ion_card_13_ion_item_6_Template, 5, 3, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](7, AddonCompetencyPlanPage_ion_card_13_ion_item_7_Template, 8, 5, "ion-item", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.competency.learningplancompetencies"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.plan.competencycount == 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.plan.competencies);
    }
}
/**
 * Page that displays a learning plan.
 */
let plan_AddonCompetencyPlanPage = /*@__PURE__*/ (() => {
    class AddonCompetencyPlanPage {
        constructor() {
            this.loaded = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.planId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('planId');
            this.fetchLearningPlan().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Fetches the learning plan and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchLearningPlan() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const plan = yield services_competency["a" /* AddonCompetency */].getLearningPlan(this.planId);
                    plan.plan.statusname = competency_helper["a" /* AddonCompetencyHelper */].getPlanStatusName(plan.plan.status);
                    // Get the user profile image.
                    this.user = yield competency_helper["a" /* AddonCompetencyHelper */].getProfile(plan.plan.userid);
                    this.plan = plan;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting learning plan data.');
                }
            });
        }
        /**
         * Navigates to a particular competency.
         *
         * @param competencyId
         */
        openCompetency(competencyId) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/' + mainmenu["b" /* AddonCompetencyMainMenuHandlerService */].PAGE_NAME + '/competencies/' + competencyId, { params: { planId: this.planId } });
        }
        /**
         * Refreshes the learning plan.
         *
         * @param refresher Refresher.
         */
        refreshLearningPlan(refresher) {
            services_competency["a" /* AddonCompetency */].invalidateLearningPlan(this.planId).finally(() => {
                this.fetchLearningPlan().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
    }
    AddonCompetencyPlanPage.ɵfac = function AddonCompetencyPlanPage_Factory(t) { return new (t || AddonCompetencyPlanPage)(); };
    AddonCompetencyPlanPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCompetencyPlanPage, selectors: [["page-addon-competency-plan"]], decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [1, "ion-text-wrap"], ["slot", "start", 3, "user"], ["class", "ion-text-wrap", "lines", "none", 4, "ngIf"], ["lines", "none", 1, "ion-text-wrap"], [1, "item-heading"], [3, "id"], [3, "progress", "text", "ariaDescribedBy"], ["contextLevel", "user", 3, "text", "contextInstanceId"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-text-wrap", "detail", "true", "button", "", 3, "click", 4, "ngFor", "ngForOf"], ["detail", "true", "button", "", 1, "ion-text-wrap", 3, "click"], ["slot", "end", 3, "color", 4, "ngIf"], ["slot", "end", 3, "color"]], template: function AddonCompetencyPlanPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonCompetencyPlanPage_h1_5_Template, 2, 1, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCompetencyPlanPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refreshLearningPlan($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonCompetencyPlanPage_ion_card_11_Template, 6, 2, "ion-card", 2);
                core["nd" /* ɵɵtemplate */](12, AddonCompetencyPlanPage_ion_card_12_Template, 21, 23, "ion-card", 2);
                core["nd" /* ɵɵtemplate */](13, AddonCompetencyPlanPage_ion_card_13_Template, 8, 5, "ion-card", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.plan);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.plan);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.plan);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["O" /* IonList */], progress_bar["a" /* CoreProgressBarComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], common["s" /* NgForOf */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonCompetencyPlanPage;
})();

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// CONCATENATED MODULE: ./src/addons/competency/pages/planlist/planlist.ts

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















function AddonCompetencyPlanListPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.competency.noplanswerecreated"));
    }
}
function AddonCompetencyPlanListPage_ion_list_15_ion_item_1_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Pc" /* ɵɵpipe */](3, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const plan_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.competency.duedate"), ":\u00A0 ", core["Rc" /* ɵɵpipeBind2 */](3, 4, plan_r3.duedate * 1000, "strftimedatetimeshort"), " ");
    }
}
function AddonCompetencyPlanListPage_ion_list_15_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 10);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyPlanListPage_ion_list_15_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r7); const plan_r3 = ctx.$implicit; const ctx_r6 = core["Oc" /* ɵɵnextContext */](2); return ctx_r6.plans.select(plan_r3); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 11);
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonCompetencyPlanListPage_ion_list_15_ion_item_1_p_4_Template, 4, 7, "p", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-badge", 13);
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const plan_r3 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", plan_r3.name)("aria-current", ctx_r2.plans.getItemAriaCurrent(plan_r3));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](plan_r3.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", plan_r3.duedate > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("color", plan_r3.statuscolor);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](plan_r3.statusname);
    }
}
function AddonCompetencyPlanListPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 8);
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyPlanListPage_ion_list_15_ion_item_1_Template, 7, 6, "ion-item", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.plans.items);
    }
}
/**
 * Page that displays the list of learning plans.
 */
let planlist_AddonCompetencyPlanListPage = /*@__PURE__*/ (() => {
    class AddonCompetencyPlanListPage {
        constructor() {
            this.plans = new planlist_AddonCompetencyPlanListManager(AddonCompetencyPlanListPage);
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchLearningPlans();
                this.plans.start(this.splitView);
            });
        }
        /**
         * Fetches the learning plans and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchLearningPlans() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const plans = yield services_competency["a" /* AddonCompetency */].getLearningPlans(this.userId);
                    plans.forEach((plan) => {
                        plan.statusname = competency_helper["a" /* AddonCompetencyHelper */].getPlanStatusName(plan.status);
                        switch (plan.status) {
                            case services_competency["b" /* AddonCompetencyProvider */].STATUS_ACTIVE:
                                plan.statuscolor = 'success';
                                break;
                            case services_competency["b" /* AddonCompetencyProvider */].STATUS_COMPLETE:
                                plan.statuscolor = 'danger';
                                break;
                            default:
                                plan.statuscolor = 'warning';
                                break;
                        }
                    });
                    this.plans.setItems(plans);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting learning plans data.');
                }
            });
        }
        /**
         * Refreshes the learning plans.
         *
         * @param refresher Refresher.
         */
        refreshLearningPlans(refresher) {
            services_competency["a" /* AddonCompetency */].invalidateLearningPlans(this.userId).finally(() => {
                this.fetchLearningPlans().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.plans.destroy();
        }
    }
    AddonCompetencyPlanListPage.ɵfac = function AddonCompetencyPlanListPage_Factory(t) { return new (t || AddonCompetencyPlanListPage)(); };
    AddonCompetencyPlanListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCompetencyPlanListPage, selectors: [["page-addon-competency-planlist"]], viewQuery: function AddonCompetencyPlanListPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 16, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-route", 3, "message", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], ["icon", "fas-route", 3, "message"], [1, "ion-no-margin"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], [1, "item-heading"], [4, "ngIf"], ["slot", "end", 1, "ion-text-wrap", 3, "color"]], template: function AddonCompetencyPlanListPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCompetencyPlanListPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshLearningPlans($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, AddonCompetencyPlanListPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 5);
                core["nd" /* ɵɵtemplate */](15, AddonCompetencyPlanListPage_ion_list_15_Template, 2, 1, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "addon.competency.userplans"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.plans.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.plans.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.plans.empty);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.plans.empty);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonCompetencyPlanListPage;
})();
/**
 * Helper class to manage plan list.
 */
class planlist_AddonCompetencyPlanListManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent) {
        super(pageComponent);
    }
    /**
     * @inheritdoc
     */
    getItemPath(plan) {
        return String(plan.id);
    }
}

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// CONCATENATED MODULE: ./src/addons/competency/pages/competencies/competencies.ts

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















function AddonCompetencyCompetenciesPage_ion_item_14_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 9);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", competency_r1.usercompetency.proficiency ? "success" : "danger");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", competency_r1.usercompetency.gradename, " ");
    }
}
function AddonCompetencyCompetenciesPage_ion_item_14_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 9);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", competency_r1.usercompetencycourse.proficiency ? "success" : "danger");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", competency_r1.usercompetencycourse.gradename, " ");
    }
}
function AddonCompetencyCompetenciesPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyCompetenciesPage_ion_item_14_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r7); const competency_r1 = ctx.$implicit; const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.competencies.select(competency_r1); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 7);
        core["pd" /* ɵɵtext */](3);
        core["Ec" /* ɵɵelementStart */](4, "em");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonCompetencyCompetenciesPage_ion_item_14_ion_badge_6_Template, 2, 2, "ion-badge", 8);
        core["nd" /* ɵɵtemplate */](7, AddonCompetencyCompetenciesPage_ion_item_14_ion_badge_7_Template, 2, 2, "ion-badge", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const competency_r1 = ctx.$implicit;
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["mc" /* ɵɵattribute */]("aria-label", competency_r1.competency.shortname)("aria-current", ctx_r0.competencies.getItemAriaCurrent(competency_r1));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */]("", competency_r1.competency.shortname, " ");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](competency_r1.competency.idnumber);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", competency_r1.usercompetency);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", competency_r1.usercompetencycourse);
    }
}
/**
 * Page that displays the list of competencies of a learning plan.
 */
let competencies_AddonCompetencyCompetenciesPage = /*@__PURE__*/ (() => {
    class AddonCompetencyCompetenciesPage {
        constructor(route) {
            this.route = route;
            this.competenciesLoaded = false;
            this.title = '';
            this.planId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('planId', { route });
            if (!this.planId) {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId', { route });
                this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId', { route });
            }
            this.competencies =
                new competencies_AddonCompetencyListManager(AddonCompetencyCompetenciesPage, this.planId, this.courseId, this.userId);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchCompetencies();
                this.competencies.start(this.splitView);
            });
        }
        /**
         * Fetches the competencies and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchCompetencies() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.planId) {
                        const response = yield services_competency["a" /* AddonCompetency */].getLearningPlan(this.planId);
                        if (response.competencycount <= 0) {
                            throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.competency.errornocompetenciesfound'));
                        }
                        this.title = response.plan.name;
                        this.userId = response.plan.userid;
                        this.competencies.setItems(response.competencies);
                    }
                    else if (this.courseId) {
                        const response = yield services_competency["a" /* AddonCompetency */].getCourseCompetencies(this.courseId, this.userId);
                        this.title = singletons["L" /* Translate */].instant('addon.competency.coursecompetencies');
                        this.competencies.setItems(response.competencies);
                    }
                    else {
                        throw null;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting competencies data.');
                }
            });
        }
        /**
         * Refreshes the competencies.
         *
         * @param refresher Refresher.
         */
        refreshCompetencies(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.planId) {
                        yield services_competency["a" /* AddonCompetency */].invalidateLearningPlan(this.planId);
                    }
                    else {
                        yield services_competency["a" /* AddonCompetency */].invalidateCourseCompetencies(this.courseId, this.userId);
                    }
                }
                finally {
                    this.fetchCompetencies().finally(() => {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    });
                }
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.competencies.destroy();
        }
    }
    AddonCompetencyCompetenciesPage.ɵfac = function AddonCompetencyCompetenciesPage_Factory(t) { return new (t || AddonCompetencyCompetenciesPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonCompetencyCompetenciesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCompetencyCompetenciesPage, selectors: [["page-addon-competency-competencies"]], viewQuery: function AddonCompetencyCompetenciesPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 15, vars: 10, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], [1, "item-heading"], ["slot", "end", 3, "color", 4, "ngIf"], ["slot", "end", 3, "color"]], template: function AddonCompetencyCompetenciesPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "core-split-view");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCompetencyCompetenciesPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshCompetencies($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-list");
                core["nd" /* ɵɵtemplate */](14, AddonCompetencyCompetenciesPage_ion_item_14_Template, 8, 6, "ion-item", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.competencies.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.competencies.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.competencies.items);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["t" /* NgIf */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonCompetencyCompetenciesPage;
})();
/**
 * Helper class to manage competencies list.
 */
class competencies_AddonCompetencyListManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent, planId, courseId, userId) {
        super(pageComponent);
        this.planId = planId;
        this.courseId = courseId;
        this.userId = userId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(competency) {
        return String(competency.competency.id);
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        if (this.planId) {
            return { planId: this.planId };
        }
        else {
            return { courseId: this.courseId, userId: this.userId };
        }
    }
}

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// CONCATENATED MODULE: ./src/addons/competency/pages/competency/competency.ts

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




















function AddonCompetencyCompetencyPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Ec" /* ɵɵelementStart */](2, "small");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r0.competency.competency.competency.shortname, " ");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.competency.competency.competency.idnumber);
    }
}
function AddonCompetencyCompetencyPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 7);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.user);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.user.fullname);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r4.competency.competency.competency.description)("contextLevel", ctx_r4.contextLevel)("contextInstanceId", ctx_r4.contextInstanceId);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_a_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "a", 14);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r5.competency.competency.comppath.pluginbaseurl + "/competencies.php?competencyframeworkid=" + ctx_r5.competency.competency.comppath.framework.id + "&pagecontextid=" + ctx_r5.competency.competency.comppath.pagecontextid, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r5.competency.competency.comppath.framework.name, " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r6.competency.competency.comppath.framework.name, " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "button", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_button_1_Template_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r18); const ancestor_r12 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r16 = core["Oc" /* ɵɵnextContext */](2); return ctx_r16.openCompetencySummary(ancestor_r12.id); });
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ancestor_r12 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ancestor_r12.name, " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ancestor_r12 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ancestor_r12.name);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1, "\u00A0/\u00A0");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_button_1_Template, 2, 1, "button", 15);
        core["nd" /* ɵɵtemplate */](2, AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 2);
        core["nd" /* ɵɵtemplate */](3, AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_ng_container_3_Template, 2, 0, "ng-container", 2);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ancestor_r12 = ctx.$implicit;
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.competency.competency.comppath.showlinks);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r7.competency.competency.comppath.showlinks);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ancestor_r12.last);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_p_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.competency.nocrossreferencedcompetencies"), " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_18_p_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["Ec" /* ɵɵelementStart */](1, "button", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyCompetencyPage_ion_card_12_ng_container_18_p_1_Template_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r24); const relatedcomp_r22 = ctx.$implicit; const ctx_r23 = core["Oc" /* ɵɵnextContext */](3); return ctx_r23.openCompetencySummary(relatedcomp_r22.id); });
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const relatedcomp_r22 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["sd" /* ɵɵtextInterpolate2 */](" ", relatedcomp_r22.shortname, " - ", relatedcomp_r22.idnumber, " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_ion_card_12_ng_container_18_p_1_Template, 3, 2, "p", 12);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r9.competency.competency.relatedcompetencies);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.competency.noactivities"), " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_ion_item_6_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 21);
    }
    if (rf & 2) {
        const activity_r27 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("src", activity_r27.iconurl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 18);
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_ion_item_6_img_1_Template, 1, 1, "img", 19);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["zc" /* ɵɵelement */](3, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const activity_r27 = ctx.$implicit;
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("href", activity_r27.url);
        core["mc" /* ɵɵattribute */]("aria-label", activity_r27.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", activity_r27.iconurl);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", activity_r27.name)("contextInstanceId", activity_r27.id)("courseId", ctx_r26.courseId);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_p_5_Template, 3, 3, "p", 2);
        core["nd" /* ɵɵtemplate */](6, AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_ion_item_6_Template, 4, 6, "ion-item", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.competency.activities"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r10.coursemodules.length == 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r10.coursemodules);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r30 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.competency.reviewstatus"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r30.competency.usercompetency.statusname);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 25);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.yes"), " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_badge_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 26);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.no"), " ");
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_item_1_Template, 7, 4, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 10);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_badge_7_Template, 3, 3, "ion-badge", 22);
        core["nd" /* ɵɵtemplate */](8, AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_ion_badge_8_Template, 3, 3, "ion-badge", 23);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](10, "ion-label");
        core["Ec" /* ɵɵelementStart */](11, "p", 10);
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-badge", 24);
        core["pd" /* ɵɵtext */](15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.competency.usercompetency && ctx_r11.competency.usercompetency.status);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 6, "addon.competency.proficient"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.userCompetency.proficiency);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r11.userCompetency.proficiency);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 8, "addon.competency.rating"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r11.userCompetency.gradename);
    }
}
function AddonCompetencyCompetencyPage_ion_card_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_ion_card_12_ion_item_1_Template, 3, 3, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 10);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["nd" /* ɵɵtemplate */](8, AddonCompetencyCompetencyPage_ion_card_12_a_8_Template, 2, 2, "a", 11);
        core["nd" /* ɵɵtemplate */](9, AddonCompetencyCompetencyPage_ion_card_12_ng_container_9_Template, 2, 1, "ng-container", 2);
        core["pd" /* ɵɵtext */](10, " \u00A0/\u00A0 ");
        core["nd" /* ɵɵtemplate */](11, AddonCompetencyCompetencyPage_ion_card_12_ng_container_11_Template, 4, 3, "ng-container", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](13, "ion-label");
        core["Ec" /* ɵɵelementStart */](14, "p", 10);
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](17, AddonCompetencyCompetencyPage_ion_card_12_p_17_Template, 3, 3, "p", 2);
        core["nd" /* ɵɵtemplate */](18, AddonCompetencyCompetencyPage_ion_card_12_ng_container_18_Template, 2, 1, "ng-container", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](19, AddonCompetencyCompetencyPage_ion_card_12_ion_item_19_Template, 7, 5, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](20, AddonCompetencyCompetencyPage_ion_card_12_ng_container_20_Template, 16, 10, "ng-container", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.competency.competency.competency.description);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 10, "addon.competency.path"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.competency.competency.comppath.showlinks);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.competency.competency.comppath.showlinks);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.competency.competency.comppath.ancestors);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 12, "addon.competency.crossreferencedcompetencies"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.competency.competency.hasrelatedcompetencies);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.competency.competency.hasrelatedcompetencies);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.coursemodules);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.userCompetency);
    }
}
function AddonCompetencyCompetencyPage_div_13_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 27);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.competency.noevidence"), " ");
    }
}
function AddonCompetencyCompetencyPage_div_13_ion_card_5_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 32);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 10);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const evidence_r35 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r36 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("userId", evidence_r35.actionuser.id)("courseId", ctx_r36.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", evidence_r35.actionuser);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](evidence_r35.actionuser.fullname);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, evidence_r35.timemodified * 1000));
    }
}
function AddonCompetencyCompetencyPage_div_13_ion_card_5_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 33);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const evidence_r35 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](evidence_r35.description);
    }
}
function AddonCompetencyCompetencyPage_div_13_ion_card_5_blockquote_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "blockquote");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const evidence_r35 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](evidence_r35.note);
    }
}
function AddonCompetencyCompetencyPage_div_13_ion_card_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencyPage_div_13_ion_card_5_ion_item_1_Template, 8, 7, "ion-item", 29);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["Ec" /* ɵɵelementStart */](5, "ion-badge", 30);
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonCompetencyCompetencyPage_div_13_ion_card_5_p_7_Template, 2, 1, "p", 31);
        core["nd" /* ɵɵtemplate */](8, AddonCompetencyCompetencyPage_div_13_ion_card_5_blockquote_8_Template, 2, 1, "blockquote", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const evidence_r35 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", evidence_r35.actionuser);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](evidence_r35.gradename);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", evidence_r35.description);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", evidence_r35.note);
    }
}
function AddonCompetencyCompetencyPage_div_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "h3", 27);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonCompetencyCompetencyPage_div_13_p_4_Template, 3, 3, "p", 28);
        core["nd" /* ɵɵtemplate */](5, AddonCompetencyCompetencyPage_div_13_ion_card_5_Template, 9, 4, "ion-card", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "addon.competency.evidence"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.competency.evidence.length == 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.competency.evidence);
    }
}
/**
 * Page that displays the competency information.
 */
let competency_AddonCompetencyCompetencyPage = /*@__PURE__*/ (() => {
    class AddonCompetencyCompetencyPage {
        constructor() {
            this.competencyLoaded = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.competencyId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('competencyId');
                this.planId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('planId');
                if (!this.planId) {
                    this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                    this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
                }
                try {
                    yield this.fetchCompetency();
                    const name = this.competency && this.competency.competency && this.competency.competency.competency &&
                        this.competency.competency.competency.shortname;
                    if (this.planId) {
                        utils["a" /* CoreUtils */].ignoreErrors(services_competency["a" /* AddonCompetency */].logCompetencyInPlanView(this.planId, this.competencyId, this.planStatus, name, this.userId));
                    }
                    else {
                        utils["a" /* CoreUtils */].ignoreErrors(services_competency["a" /* AddonCompetency */].logCompetencyInCourseView(this.courseId, this.competencyId, name, this.userId));
                    }
                }
                finally {
                    this.competencyLoaded = true;
                }
            });
        }
        /**
         * Fetches the competency and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchCompetency() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    let competency;
                    if (this.planId) {
                        this.planStatus = undefined;
                        competency = yield services_competency["a" /* AddonCompetency */].getCompetencyInPlan(this.planId, this.competencyId);
                    }
                    else if (this.courseId) {
                        competency = yield services_competency["a" /* AddonCompetency */].getCompetencyInCourse(this.courseId, this.competencyId, this.userId);
                    }
                    else {
                        throw null;
                    }
                    // Calculate the context.
                    if (this.courseId) {
                        this.contextLevel = "course" /* COURSE */;
                        this.contextInstanceId = this.courseId;
                    }
                    else {
                        this.contextLevel = "user" /* USER */;
                        this.contextInstanceId = this.userId || competency.usercompetencysummary.user.id;
                    }
                    this.competency = competency.usercompetencysummary;
                    this.userCompetency = this.competency.usercompetencyplan || this.competency.usercompetency;
                    if ('plan' in competency) {
                        this.planStatus = competency.plan.status;
                        this.competency.usercompetency.statusname =
                            competency_helper["a" /* AddonCompetencyHelper */].getCompetencyStatusName(this.competency.usercompetency.status);
                    }
                    else {
                        this.userCompetency = this.competency.usercompetencycourse;
                        this.coursemodules = competency.coursemodules;
                    }
                    if (this.competency.user.id != sites["b" /* CoreSites */].getCurrentSiteUserId()) {
                        // Get the user profile from the returned object.
                        this.user = this.competency.user;
                    }
                    this.competency.evidence.forEach((evidence) => {
                        if (evidence.descidentifier) {
                            const key = 'addon.competency.' + evidence.descidentifier;
                            evidence.description = singletons["L" /* Translate */].instant(key, { $a: evidence.desca });
                        }
                    });
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting competency data.');
                }
            });
        }
        /**
         * Refreshes the competency.
         *
         * @param refresher Refresher.
         */
        refreshCompetency(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.planId) {
                        yield services_competency["a" /* AddonCompetency */].invalidateCompetencyInPlan(this.planId, this.competencyId);
                    }
                    else {
                        yield services_competency["a" /* AddonCompetency */].invalidateCompetencyInCourse(this.courseId, this.competencyId);
                    }
                }
                finally {
                    this.fetchCompetency().finally(() => {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    });
                }
            });
        }
        /**
         * Opens the summary of a competency.
         *
         * @param competencyId
         */
        openCompetencySummary(competencyId) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/' + mainmenu["b" /* AddonCompetencyMainMenuHandlerService */].PAGE_NAME + '/summary/' + competencyId, {
                params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
            });
        }
    }
    AddonCompetencyCompetencyPage.ɵfac = function AddonCompetencyCompetencyPage_Factory(t) { return new (t || AddonCompetencyCompetencyPage)(); };
    AddonCompetencyCompetencyPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCompetencyCompetencyPage, selectors: [["page-addon-competency-competency"]], decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [1, "ion-text-wrap"], ["slot", "start", 3, "user"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "ion-text-wrap", "only-links"], [1, "item-heading"], ["core-link", "", 3, "href", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "text", "contextLevel", "contextInstanceId"], ["core-link", "", 3, "href"], ["class", "as-link", 3, "click", 4, "ngIf"], [1, "as-link", 3, "click"], ["class", "ion-text-wrap", "core-link", "", "capture", "true", 3, "href", 4, "ngFor", "ngForOf"], ["core-link", "", "capture", "true", 1, "ion-text-wrap", 3, "href"], ["slot", "start", "core-external-content", "", "alt", "", "class", "core-module-icon", 3, "src", 4, "ngIf"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "start", "core-external-content", "", "alt", "", 1, "core-module-icon", 3, "src"], ["slot", "end", "color", "success", 4, "ngIf"], ["slot", "end", "color", "danger", 4, "ngIf"], ["color", "dark", "slot", "end"], ["slot", "end", "color", "success"], ["slot", "end", "color", "danger"], [1, "ion-margin-horizontal"], ["class", "ion-margin-horizontal", 4, "ngIf"], ["class", "ion-text-wrap", "core-user-link", "", 3, "userId", "courseId", 4, "ngIf"], ["color", "dark"], ["class", "ion-margin-top", 4, "ngIf"], ["core-user-link", "", 1, "ion-text-wrap", 3, "userId", "courseId"], [1, "ion-margin-top"]], template: function AddonCompetencyCompetencyPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonCompetencyCompetencyPage_h1_5_Template, 4, 2, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCompetencyCompetencyPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refreshCompetency($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonCompetencyCompetencyPage_ion_card_11_Template, 6, 2, "ion-card", 2);
                core["nd" /* ɵɵtemplate */](12, AddonCompetencyCompetencyPage_ion_card_12_Template, 21, 14, "ion-card", 2);
                core["nd" /* ɵɵtemplate */](13, AddonCompetencyCompetencyPage_div_13_Template, 6, 5, "div", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.competency);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.competencyLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.competencyLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.competency);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.competency);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */], directives_link["a" /* CoreLinkDirective */], external_content["a" /* CoreExternalContentDirective */], ionic_angular["j" /* IonBadge */], user_link["a" /* CoreUserLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonCompetencyCompetencyPage;
})();

// CONCATENATED MODULE: ./src/addons/competency/pages/competencysummary/competencysummary.ts

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












function AddonCompetencyCompetencySummaryPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Ec" /* ɵɵelementStart */](2, "small");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r0.competency.competency.shortname, " ");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.competency.competency.idnumber);
    }
}
function AddonCompetencyCompetencySummaryPage_ion_card_11_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.competency.competency.description)("contextLevel", ctx_r2.contextLevel)("contextInstanceId", ctx_r2.contextInstanceId);
    }
}
function AddonCompetencyCompetencySummaryPage_ion_card_11_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1, " \u00A0/\u00A0 ");
        core["Ec" /* ɵɵelementStart */](2, "button", 11);
        core["Mc" /* ɵɵlistener */]("click", function AddonCompetencyCompetencySummaryPage_ion_card_11_ng_container_9_Template_button_click_2_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ancestor_r4 = ctx.$implicit; const ctx_r5 = core["Oc" /* ɵɵnextContext */](2); return ctx_r5.openCompetencySummary(ancestor_r4.id); });
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ancestor_r4 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ancestor_r4.name, " ");
    }
}
function AddonCompetencyCompetencySummaryPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonCompetencyCompetencySummaryPage_ion_card_11_ion_item_1_Template, 3, 3, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 8);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["pd" /* ɵɵtext */](8);
        core["nd" /* ɵɵtemplate */](9, AddonCompetencyCompetencySummaryPage_ion_card_11_ng_container_9_Template, 4, 1, "ng-container", 9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.competency.competency.description);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.competency.path"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */]("", ctx_r1.competency.comppath.framework.name, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.competency.comppath.ancestors);
    }
}
/**
 * Page that displays the competency summary.
 */
let competencysummary_AddonCompetencyCompetencySummaryPage = /*@__PURE__*/ (() => {
    class AddonCompetencyCompetencySummaryPage {
        constructor() {
            this.competencyLoaded = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.competencyId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('competencyId');
                this.contextLevel = services_navigator["a" /* CoreNavigator */].getRouteParam('contextLevel');
                this.contextInstanceId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('contextInstanceId');
                try {
                    yield this.fetchCompetency();
                    const name = this.competency.competency && this.competency.competency.shortname;
                    utils["a" /* CoreUtils */].ignoreErrors(services_competency["a" /* AddonCompetency */].logCompetencyView(this.competencyId, name));
                }
                finally {
                    this.competencyLoaded = true;
                }
            });
        }
        /**
         * Fetches the competency summary and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchCompetency() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield services_competency["a" /* AddonCompetency */].getCompetencySummary(this.competencyId);
                    if (!this.contextLevel || typeof this.contextInstanceId == 'undefined') {
                        // Context not specified, use user context.
                        this.contextLevel = "user" /* USER */;
                        this.contextInstanceId = result.usercompetency.userid;
                    }
                    this.competency = result.competency;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting competency summary data.');
                }
            });
        }
        /**
         * Refreshes the competency summary.
         *
         * @param refresher Refresher.
         */
        refreshCompetency(refresher) {
            services_competency["a" /* AddonCompetency */].invalidateCompetencySummary(this.competencyId).finally(() => {
                this.fetchCompetency().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Opens the summary of a competency.
         *
         * @param competencyId
         */
        openCompetencySummary(competencyId) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/' + mainmenu["b" /* AddonCompetencyMainMenuHandlerService */].PAGE_NAME + '/summary/' + competencyId, {
                params: { contextLevel: this.contextLevel, contextInstanceId: this.contextInstanceId },
            });
        }
    }
    AddonCompetencyCompetencySummaryPage.ɵfac = function AddonCompetencyCompetencySummaryPage_Factory(t) { return new (t || AddonCompetencyCompetencySummaryPage)(); };
    AddonCompetencyCompetencySummaryPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCompetencyCompetencySummaryPage, selectors: [["page-addon-competency-competency-summary"]], decls: 12, vars: 10, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "ion-text-wrap"], [1, "item-heading"], [4, "ngFor", "ngForOf"], [3, "text", "contextLevel", "contextInstanceId"], [1, "as-link", 3, "click"]], template: function AddonCompetencyCompetencySummaryPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonCompetencyCompetencySummaryPage_h1_5_Template, 4, 2, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCompetencyCompetencySummaryPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refreshCompetency($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonCompetencyCompetencySummaryPage_ion_card_11_Template, 10, 6, "ion-card", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.competency);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.competencyLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.competencyLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.competency);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonCompetencyCompetencySummaryPage;
})();

// EXTERNAL MODULE: ./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts
var coursecompetencies_page = __webpack_require__("9DI8");

// EXTERNAL MODULE: ./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts
var coursecompetencies_module = __webpack_require__("y5rm");

// CONCATENATED MODULE: ./src/addons/competency/competency-lazy.module.ts
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
        pathMatch: 'full',
        data: {
            mainMenuTabRoot: mainmenu["b" /* AddonCompetencyMainMenuHandlerService */].PAGE_NAME,
        },
        component: planlist_AddonCompetencyPlanListPage,
    },
    {
        path: 'competencies',
        component: competencies_AddonCompetencyCompetenciesPage,
    },
    {
        path: 'competencies/:competencyId',
        component: competency_AddonCompetencyCompetencyPage,
    },
    {
        path: 'course/:courseId',
        component: coursecompetencies_page["a" /* AddonCompetencyCourseCompetenciesPage */],
    },
    {
        path: 'summary/:competencyId',
        component: competencysummary_AddonCompetencyCompetencySummaryPage,
    },
    {
        path: ':planId',
        component: plan_AddonCompetencyPlanPage,
    },
];
const tabletRoutes = [
    {
        path: 'summary/:competencyId',
        component: competencysummary_AddonCompetencyCompetencySummaryPage,
    },
    {
        path: 'competencies',
        component: competencies_AddonCompetencyCompetenciesPage,
        children: [
            {
                path: ':competencyId',
                component: competency_AddonCompetencyCompetencyPage,
            },
        ],
    },
    {
        path: 'course/:courseId',
        component: coursecompetencies_page["a" /* AddonCompetencyCourseCompetenciesPage */],
    },
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* AddonCompetencyMainMenuHandlerService */].PAGE_NAME,
        },
        component: planlist_AddonCompetencyPlanListPage,
        children: [
            {
                path: ':planId',
                component: plan_AddonCompetencyPlanPage,
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let competency_lazy_module_AddonCompetencyLazyModule = /*@__PURE__*/ (() => {
    class AddonCompetencyLazyModule {
    }
    AddonCompetencyLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCompetencyLazyModule });
    AddonCompetencyLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCompetencyLazyModule_Factory(t) { return new (t || AddonCompetencyLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                coursecompetencies_module["a" /* AddonCompetencyCourseCompetenciesPageModule */],
            ]] });
    return AddonCompetencyLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](competency_lazy_module_AddonCompetencyLazyModule, { declarations: [plan_AddonCompetencyPlanPage,
            planlist_AddonCompetencyPlanListPage,
            competencies_AddonCompetencyCompetenciesPage,
            competency_AddonCompetencyCompetencyPage,
            competencysummary_AddonCompetencyCompetencySummaryPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            coursecompetencies_module["a" /* AddonCompetencyCourseCompetenciesPageModule */]] });
})();


/***/ })

}]);