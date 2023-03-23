(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "vzIN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModQuizReviewPageModule", function() { return /* binding */ review_module_AddonModQuizReviewPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/question/components/components.module.ts
var components_module = __webpack_require__("uNPo");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/question/services/question-helper.ts
var question_helper = __webpack_require__("qRov");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts
var navigation_modal = __webpack_require__("6GiP");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz.ts
var quiz = __webpack_require__("Ohwm");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz-helper.ts
var quiz_helper = __webpack_require__("+8pu");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/features/question/components/question/question.ts
var question_question = __webpack_require__("Zl5n");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/review/review.page.ts

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





















function AddonModQuizReviewPage_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 9);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizReviewPage_ion_button_9_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.openNavigation(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 10);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_quiz.opentoc"));
    }
}
function AddonModQuizReviewPage_ion_card_15_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_quiz.reviewofpreview"));
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonModQuizReviewPage_ion_card_15_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.mod_quiz.reviewofattempt", core["ad" /* ɵɵpureFunction1 */](4, _c0, ctx_r8.attempt.attempt)), " ");
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.completedon"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, ctx_r9.attempt.timefinish * 1000));
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.timetaken"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r10.timeTaken);
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.overdue"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r11.overTime);
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.marks"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r12.readableMark);
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.grade"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r13.readableGrade);
    }
}
function AddonModQuizReviewPage_ion_card_15_ion_item_26_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 15);
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "core-format-text", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const data_r15 = ctx.$implicit;
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](data_r15.title);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r14.component)("componentId", ctx_r14.cmId)("text", data_r15.content)("contextInstanceId", ctx_r14.cmId)("courseId", ctx_r14.courseId);
    }
}
function AddonModQuizReviewPage_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-card-title");
        core["nd" /* ɵɵtemplate */](3, AddonModQuizReviewPage_ion_card_15_ng_container_3_Template, 3, 3, "ng-container", 7);
        core["nd" /* ɵɵtemplate */](4, AddonModQuizReviewPage_ion_card_15_ng_container_4_Template, 3, 6, "ng-container", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-list", 12);
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "h2");
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "p");
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](15, "ion-label");
        core["Ec" /* ɵɵelementStart */](16, "h2");
        core["pd" /* ɵɵtext */](17);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](19, "p");
        core["pd" /* ɵɵtext */](20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](21, AddonModQuizReviewPage_ion_card_15_ion_item_21_Template, 8, 6, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](22, AddonModQuizReviewPage_ion_card_15_ion_item_22_Template, 7, 4, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](23, AddonModQuizReviewPage_ion_card_15_ion_item_23_Template, 7, 4, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](24, AddonModQuizReviewPage_ion_card_15_ion_item_24_Template, 7, 4, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](25, AddonModQuizReviewPage_ion_card_15_ion_item_25_Template, 7, 4, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](26, AddonModQuizReviewPage_ion_card_15_ion_item_26_Template, 5, 6, "ion-item", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.preview);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.attempt.preview);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](10, 12, "addon.mod_quiz.startedon"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 14, ctx_r1.attempt.timestart * 1000));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](18, 16, "addon.mod_quiz.attemptstate"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.readableState);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.showCompleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.timeTaken);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.overTime);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.readableMark);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.readableGrade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.additionalData);
    }
}
function AddonModQuizReviewPage_div_16_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonModQuizReviewPage_div_16_div_2_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r19 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](2, 1, "core.question.questionno", core["ad" /* ɵɵpureFunction1 */](4, _c0, question_r19.number)));
    }
}
function AddonModQuizReviewPage_div_16_div_2_h2_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.question.information"));
    }
}
function AddonModQuizReviewPage_div_16_div_2_div_6_p_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](question_r19.status);
    }
}
function AddonModQuizReviewPage_div_16_div_2_div_6_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](question_r19.readableMark);
    }
}
function AddonModQuizReviewPage_div_16_div_2_div_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 22);
        core["nd" /* ɵɵtemplate */](1, AddonModQuizReviewPage_div_16_div_2_div_6_p_1_Template, 2, 1, "p", 7);
        core["nd" /* ɵɵtemplate */](2, AddonModQuizReviewPage_div_16_div_2_div_6_p_2_Template, 2, 1, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r19 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r19.status);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r19.readableMark);
    }
}
function AddonModQuizReviewPage_div_16_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "ion-card", 19);
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonModQuizReviewPage_div_16_div_2_h2_4_Template, 3, 6, "h2", 7);
        core["nd" /* ɵɵtemplate */](5, AddonModQuizReviewPage_div_16_div_2_h2_5_Template, 3, 3, "h2", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModQuizReviewPage_div_16_div_2_div_6_Template, 3, 2, "div", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "core-question", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r19 = ctx.$implicit;
        const ctx_r17 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-mod_quiz-question-", question_r19.slot, "");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r19.number);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !question_r19.number);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r19.status || question_r19.readableMark);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("question", question_r19)("component", ctx_r17.component)("componentId", ctx_r17.cmId)("attemptId", ctx_r17.attempt.id)("usageId", ctx_r17.attempt.uniqueid)("offlineEnabled", false)("contextInstanceId", ctx_r17.cmId)("courseId", ctx_r17.courseId)("review", true)("preferredBehaviour", ctx_r17.quiz == null ? null : ctx_r17.quiz.preferredbehaviour);
    }
}
function AddonModQuizReviewPage_div_16_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonModQuizReviewPage_div_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["nd" /* ɵɵtemplate */](1, AddonModQuizReviewPage_div_16_ng_container_1_Template, 1, 0, "ng-container", 17);
        core["nd" /* ɵɵtemplate */](2, AddonModQuizReviewPage_div_16_div_2_Template, 8, 14, "div", 18);
        core["nd" /* ɵɵtemplate */](3, AddonModQuizReviewPage_div_16_ng_container_3_Template, 1, 0, "ng-container", 17);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        const _r3 = core["fd" /* ɵɵreference */](18);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.questions);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r3);
    }
}
function AddonModQuizReviewPage_ng_template_17_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 28);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizReviewPage_ng_template_17_ion_button_3_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r32); const ctx_r31 = core["Oc" /* ɵɵnextContext */](2); return ctx_r31.changePage(ctx_r31.previousPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 29);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("title", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.previous"));
    }
}
function AddonModQuizReviewPage_ng_template_17_ion_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 30);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizReviewPage_ng_template_17_ion_button_5_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r34); const ctx_r33 = core["Oc" /* ɵɵnextContext */](2); return ctx_r33.changePage(ctx_r33.nextPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 31);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.next"));
    }
}
function AddonModQuizReviewPage_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-grid");
        core["Ec" /* ɵɵelementStart */](1, "ion-row", 23);
        core["Ec" /* ɵɵelementStart */](2, "ion-col", 24);
        core["nd" /* ɵɵtemplate */](3, AddonModQuizReviewPage_ng_template_17_ion_button_3_Template, 3, 3, "ion-button", 25);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 26);
        core["nd" /* ɵɵtemplate */](5, AddonModQuizReviewPage_ng_template_17_ion_button_5_Template, 3, 3, "ion-button", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.previousPage >= 0);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.nextPage >= 0 - 1);
    }
}
/**
 * Page that allows reviewing a quiz attempt.
 */
let review_page_AddonModQuizReviewPage = /*@__PURE__*/ (() => {
    class AddonModQuizReviewPage {
        constructor(elementRef) {
            this.elementRef = elementRef;
            this.component = quiz["b" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
            this.showAll = false; // Whether to view all questions in the same page.
            this.showCompleted = false; // Whether to show completed time.
            this.loaded = false; // Whether data has been loaded.
            this.navigation = []; // List of questions to navigate them.
            this.questions = []; // Questions of the current page.
            this.nextPage = -2; // Next page.
            this.previousPage = -2; // Previous page.
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.attemptId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('attemptId');
                this.currentPage = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('page') || -1;
                this.showAll = this.currentPage == -1;
                try {
                    yield this.fetchData();
                    utils["a" /* CoreUtils */].ignoreErrors(quiz["a" /* AddonModQuiz */].logViewAttemptReview(this.attemptId, this.quiz.id, this.quiz.name));
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Change the current page. If slot is supplied, try to scroll to that question.
         *
         * @param page Page to load. -1 means all questions in same page.
         * @param fromModal Whether the page was selected using the navigation modal.
         * @param slot Slot of the question to scroll to.
         */
        changePage(page, fromModal, slot) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (typeof slot != 'undefined' && (this.attempt.currentpage == -1 || page == this.currentPage)) {
                    // Scrol to a certain question in the current page.
                    this.scrollToQuestion(slot);
                    return;
                }
                else if (page == this.currentPage) {
                    // If the user is navigating to the current page and no question specified, we do nothing.
                    return;
                }
                this.loaded = false;
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                try {
                    yield this.loadPage(page);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
                }
                finally {
                    this.loaded = true;
                    if (typeof slot != 'undefined') {
                        // Scroll to the question. Give some time to the questions to render.
                        setTimeout(() => {
                            this.scrollToQuestion(slot);
                        }, 2000);
                    }
                }
            });
        }
        /**
         * Convenience function to get the quiz data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.quiz = yield quiz["a" /* AddonModQuiz */].getQuiz(this.courseId, this.cmId);
                    this.options = yield quiz["a" /* AddonModQuiz */].getCombinedReviewOptions(this.quiz.id, { cmId: this.cmId });
                    // Load the navigation data.
                    yield this.loadNavigation();
                    // Load questions.
                    yield this.loadPage(this.currentPage);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
                }
            });
        }
        /**
         * Load a page questions.
         *
         * @param page The page to load.
         * @return Promise resolved when done.
         */
        loadPage(page) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const data = yield quiz["a" /* AddonModQuiz */].getAttemptReview(this.attemptId, { page, cmId: this.quiz.coursemodule });
                this.attempt = data.attempt;
                this.attempt.currentpage = page;
                this.currentPage = page;
                // Set the summary data.
                this.setSummaryCalculatedData(data);
                this.questions = data.questions;
                this.nextPage = page == -1 ? -2 : page + 1;
                this.previousPage = page - 1;
                this.questions.forEach((question) => {
                    // Get the readable mark for each question.
                    question.readableMark = quiz_helper["a" /* AddonModQuizHelper */].getQuestionMarkFromHtml(question.html);
                    // Extract the question info box.
                    question_helper["a" /* CoreQuestionHelper */].extractQuestionInfoBox(question, '.info');
                });
            });
        }
        /**
         * Load data to navigate the questions using the navigation modal.
         *
         * @return Promise resolved when done.
         */
        loadNavigation() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get all questions in single page to retrieve all the questions.
                const data = yield quiz["a" /* AddonModQuiz */].getAttemptReview(this.attemptId, { page: -1, cmId: this.quiz.coursemodule });
                this.navigation = data.questions;
                this.navigation.forEach((question) => {
                    question.stateClass = question_helper["a" /* CoreQuestionHelper */].getQuestionStateClass(question.state || '');
                });
                const lastQuestion = data.questions[data.questions.length - 1];
                this.numPages = lastQuestion ? lastQuestion.page + 1 : 0;
            });
        }
        /**
         * Refreshes data.
         *
         * @param refresher Refresher
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(quiz["a" /* AddonModQuiz */].invalidateQuizData(this.courseId));
                promises.push(quiz["a" /* AddonModQuiz */].invalidateAttemptReview(this.attemptId));
                if (this.quiz) {
                    promises.push(quiz["a" /* AddonModQuiz */].invalidateCombinedReviewOptionsForUser(this.quiz.id));
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                try {
                    yield this.fetchData();
                }
                finally {
                    refresher.complete();
                }
            });
        }
        /**
         * Scroll to a certain question.
         *
         * @param slot Slot of the question to scroll to.
         */
        scrollToQuestion(slot) {
            dom["a" /* CoreDomUtils */].scrollToElementBySelector(this.elementRef.nativeElement, this.content, `#addon-mod_quiz-question-${slot}`);
        }
        /**
         * Calculate review summary data.
         *
         * @param data Result of getAttemptReview.
         */
        setSummaryCalculatedData(data) {
            if (!this.attempt || !this.quiz) {
                return;
            }
            this.readableState = quiz["a" /* AddonModQuiz */].getAttemptReadableStateName(this.attempt.state || '');
            if (this.attempt.state != quiz["b" /* AddonModQuizProvider */].ATTEMPT_FINISHED) {
                return;
            }
            this.showCompleted = true;
            this.additionalData = data.additionaldata;
            const timeTaken = (this.attempt.timefinish || 0) - (this.attempt.timestart || 0);
            if (timeTaken > 0) {
                // Format time taken.
                this.timeTaken = time["a" /* CoreTimeUtils */].formatTime(timeTaken);
                // Calculate overdue time.
                if (this.quiz.timelimit && timeTaken > this.quiz.timelimit + 60) {
                    this.overTime = time["a" /* CoreTimeUtils */].formatTime(timeTaken - this.quiz.timelimit);
                }
            }
            else {
                this.timeTaken = undefined;
            }
            // Treat grade.
            if (this.options.someoptions.marks >= quiz["b" /* AddonModQuizProvider */].QUESTION_OPTIONS_MARK_AND_MAX &&
                quiz["a" /* AddonModQuiz */].quizHasGrades(this.quiz)) {
                if (data.grade === null || typeof data.grade == 'undefined') {
                    this.readableGrade = quiz["a" /* AddonModQuiz */].formatGrade(data.grade, this.quiz.decimalpoints);
                }
                else {
                    // Show raw marks only if they are different from the grade (like on the entry page).
                    if (this.quiz.grade != this.quiz.sumgrades) {
                        this.readableMark = singletons["L" /* Translate */].instant('addon.mod_quiz.outofshort', { $a: {
                                grade: quiz["a" /* AddonModQuiz */].formatGrade(this.attempt.sumgrades, this.quiz.decimalpoints),
                                maxgrade: quiz["a" /* AddonModQuiz */].formatGrade(this.quiz.sumgrades, this.quiz.decimalpoints),
                            } });
                    }
                    // Now the scaled grade.
                    const gradeObject = {
                        grade: quiz["a" /* AddonModQuiz */].formatGrade(Number(data.grade), this.quiz.decimalpoints),
                        maxgrade: quiz["a" /* AddonModQuiz */].formatGrade(this.quiz.grade, this.quiz.decimalpoints),
                    };
                    if (this.quiz.grade != 100) {
                        gradeObject.percent = utils_text["a" /* CoreTextUtils */].roundToDecimals(this.attempt.sumgrades * 100 / this.quiz.sumgrades, 0);
                        this.readableGrade = singletons["L" /* Translate */].instant('addon.mod_quiz.outofpercent', { $a: gradeObject });
                    }
                    else {
                        this.readableGrade = singletons["L" /* Translate */].instant('addon.mod_quiz.outof', { $a: gradeObject });
                    }
                }
            }
            // Treat additional data.
            this.additionalData.forEach((data) => {
                // Remove help links from additional data.
                data.content = dom["a" /* CoreDomUtils */].removeElementFromHtml(data.content, '.helptooltip');
            });
        }
        /**
         * Switch mode: all questions in same page OR one page at a time.
         */
        switchMode() {
            this.showAll = !this.showAll;
            // Load all questions or first page, depending on the mode.
            this.loadPage(this.showAll ? -1 : 0);
        }
        openNavigation() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Create the navigation modal.
                const modalData = yield dom["a" /* CoreDomUtils */].openSideModal({
                    component: navigation_modal["a" /* AddonModQuizNavigationModalComponent */],
                    componentProps: {
                        navigation: this.navigation,
                        summaryShown: false,
                        currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                        isReview: true,
                        numPages: this.numPages,
                        showAll: this.showAll,
                    },
                });
                if (!modalData) {
                    return;
                }
                if (modalData.action == navigation_modal["a" /* AddonModQuizNavigationModalComponent */].CHANGE_PAGE) {
                    this.changePage(modalData.page, true, modalData.slot);
                }
                else if (modalData.action == navigation_modal["a" /* AddonModQuizNavigationModalComponent */].SWITCH_MODE) {
                    this.switchMode();
                }
            });
        }
    }
    AddonModQuizReviewPage.ɵfac = function AddonModQuizReviewPage_Factory(t) { return new (t || AddonModQuizReviewPage)(core["yc" /* ɵɵdirectiveInject */](core["r" /* ElementRef */])); };
    AddonModQuizReviewPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModQuizReviewPage, selectors: [["page-addon-mod-quiz-review"]], viewQuery: function AddonModQuizReviewPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 19, vars: 14, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", "aria-haspopup", "true", 3, "click", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["navArrows", ""], ["fill", "clear", "aria-haspopup", "true", 3, "click"], ["name", "fas-bookmark", "slot", "icon-only", "aria-hidden", "true"], [1, "ion-text-wrap"], ["lines", "none"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], [1, "item-heading"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"], [4, "ngTemplateOutlet"], [4, "ngFor", "ngForOf"], [3, "id"], ["class", "ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note", "slot", "end", 4, "ngIf"], ["contextLevel", "module", 1, "ion-text-wrap", 3, "question", "component", "componentId", "attemptId", "usageId", "offlineEnabled", "contextInstanceId", "courseId", "review", "preferredBehaviour"], ["slot", "end", 1, "ion-text-wrap", "ion-margin-horizontal", "addon-mod_quiz-question-note"], [1, "ion-align-items-center"], [1, "ion-text-start"], ["color", "light", 3, "title", "click", 4, "ngIf"], [1, "ion-text-end"], ["color", "light", 3, "click", 4, "ngIf"], ["color", "light", 3, "title", "click"], ["name", "fas-chevron-left", "slot", "icon-only", "aria-hidden", "true"], ["color", "light", 3, "click"], ["name", "fas-chevron-right", "slot", "icon-only", "aria-hidden", "true"]], template: function AddonModQuizReviewPage_Template(rf, ctx) {
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
                core["nd" /* ɵɵtemplate */](9, AddonModQuizReviewPage_ion_button_9_Template, 3, 3, "ion-button", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "ion-content");
                core["Ec" /* ɵɵelementStart */](11, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModQuizReviewPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](12, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](15, AddonModQuizReviewPage_ion_card_15_Template, 27, 18, "ion-card", 7);
                core["nd" /* ɵɵtemplate */](16, AddonModQuizReviewPage_div_16_Template, 4, 3, "div", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](17, AddonModQuizReviewPage_ng_template_17_Template, 6, 2, "ng-template", null, 8, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 10, "addon.mod_quiz.review"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.navigation.length);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](13, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt && ctx.questions.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["m" /* IonCard */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */], common["A" /* NgTemplateOutlet */], ionic_angular["I" /* IonItemDivider */], question_question["a" /* CoreQuestionComponent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   .addon-mod_quiz-question-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px}"] });
    return AddonModQuizReviewPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/review/review.module.ts
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
        component: review_page_AddonModQuizReviewPage,
    },
];
let review_module_AddonModQuizReviewPageModule = /*@__PURE__*/ (() => {
    class AddonModQuizReviewPageModule {
    }
    AddonModQuizReviewPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModQuizReviewPageModule });
    AddonModQuizReviewPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModQuizReviewPageModule_Factory(t) { return new (t || AddonModQuizReviewPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreQuestionComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModQuizReviewPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](review_module_AddonModQuizReviewPageModule, { declarations: [review_page_AddonModQuizReviewPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreQuestionComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);