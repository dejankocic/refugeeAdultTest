(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "N/A2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModLessonUserRetakePageModule", function() { return /* binding */ user_retake_module_AddonModLessonUserRetakePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson.ts
var lesson = __webpack_require__("ovS5");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson-helper.ts
var lesson_helper = __webpack_require__("2kx2");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/progress-bar/progress-bar.ts
var progress_bar = __webpack_require__("TKc2");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/lesson/pages/user-retake/user-retake.page.ts

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























function AddonModLessonUserRetakePage_div_13_ion_item_7_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 15);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const retake_r6 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", retake_r6.try);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", retake_r6.label, " ");
    }
}
const _c0 = function (a0) { return { header: a0 }; };
function AddonModLessonUserRetakePage_div_13_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 12);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 13);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModLessonUserRetakePage_div_13_ion_item_7_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](2); return ctx_r7.selectedRetake = $event; })("ionChange", function AddonModLessonUserRetakePage_div_13_ion_item_7_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r9 = core["Oc" /* ɵɵnextContext */](2); return ctx_r9.changeRetake(ctx_r9.selectedRetake); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModLessonUserRetakePage_div_13_ion_item_7_ion_select_option_6_Template, 2, 2, "ion-select-option", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 4, "addon.mod_lesson.attemptheader"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.selectedRetake)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](8, _c0, core["Qc" /* ɵɵpipeBind1 */](5, 6, "addon.mod_lesson.attemptheader")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.student.attempts);
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModLessonUserRetakePage_div_13_ion_list_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 11);
        core["Ec" /* ɵɵelementStart */](3, "ion-grid", 17);
        core["Ec" /* ɵɵelementStart */](4, "ion-row");
        core["Ec" /* ɵɵelementStart */](5, "ion-col");
        core["Ec" /* ɵɵelementStart */](6, "h3", 18);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-col");
        core["Ec" /* ɵɵelementStart */](13, "h3", 18);
        core["pd" /* ɵɵtext */](14);
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](16, "p");
        core["pd" /* ɵɵtext */](17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](18, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](19, "ion-label");
        core["Ec" /* ɵɵelementStart */](20, "h3", 18);
        core["pd" /* ɵɵtext */](21);
        core["Pc" /* ɵɵpipe */](22, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](23, "p");
        core["pd" /* ɵɵtext */](24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](25, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](26, "ion-label");
        core["Ec" /* ɵɵelementStart */](27, "h3", 18);
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](30, "p");
        core["pd" /* ɵɵtext */](31);
        core["Pc" /* ɵɵpipe */](32, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](7);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 9, "addon.mod_lesson.grade"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](11, 11, "core.percentagenumber", core["ad" /* ɵɵpureFunction1 */](22, _c1, ctx_r2.retake.userstats.grade)));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](15, 14, "addon.mod_lesson.rawgrade"));
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", ctx_r2.retake.userstats.gradeinfo.earned, " / ", ctx_r2.retake.userstats.gradeinfo.total, "");
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 16, "addon.mod_lesson.timetaken"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r2.timeTakenReadable);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](29, 18, "addon.mod_lesson.completed"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](32, 20, ctx_r2.retake.userstats.completed * 1000));
    }
}
function AddonModLessonUserRetakePage_div_13_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_lesson.notcompleted"));
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_lesson.didnotanswerquestion"));
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 28);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-grid", 17);
        core["Ec" /* ɵɵelementStart */](3, "ion-row");
        core["Ec" /* ɵɵelementStart */](4, "ion-col");
        core["Ec" /* ɵɵelementStart */](5, "ion-button", 29);
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-col");
        core["zc" /* ɵɵelement */](8, "p", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("disabled", true);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", answer_r17[0].buttonText, " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("innerHTML", answer_r17[0].content, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_1_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 36);
        core["zc" /* ɵɵelement */](1, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r26.component)("componentId", ctx_r26.lesson == null ? null : ctx_r26.lesson.coursemodule)("text", answer_r17[1])("contextInstanceId", ctx_r26.lesson == null ? null : ctx_r26.lesson.coursemodule)("courseId", ctx_r26.courseId);
    }
}
const _c2 = function (a0) { return { "addon-mod_lesson-highlight": a0 }; };
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 32);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_1_ion_badge_4_Template, 2, 5, "ion-badge", 34);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "ion-checkbox", 35);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](5);
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](10, _c2, answer_r17[0].highlight));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r22.component)("componentId", ctx_r22.lesson == null ? null : ctx_r22.lesson.coursemodule)("text", answer_r17[0].content)("contextInstanceId", ctx_r22.lesson == null ? null : ctx_r22.lesson.coursemodule)("courseId", ctx_r22.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[1]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", answer_r17[0].checked)("disabled", true);
        core["mc" /* ɵɵattribute */]("name", answer_r17[0].name);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_2_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 36);
        core["zc" /* ɵɵelement */](1, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r29.component)("componentId", ctx_r29.lesson == null ? null : ctx_r29.lesson.coursemodule)("text", answer_r17[1])("contextInstanceId", ctx_r29.lesson == null ? null : ctx_r29.lesson.coursemodule)("courseId", ctx_r29.courseId);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_2_ion_badge_4_Template, 2, 5, "ion-badge", 34);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](answer_r17[0].value);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[1]);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_3_ion_badge_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 36);
        core["zc" /* ɵɵelement */](1, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        const ctx_r32 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r32.component)("componentId", ctx_r32.lesson == null ? null : ctx_r32.lesson.coursemodule)("text", answer_r17[1])("contextInstanceId", ctx_r32.lesson == null ? null : ctx_r32.lesson.coursemodule)("courseId", ctx_r32.courseId);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 28);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-grid", 17);
        core["Ec" /* ɵɵelementStart */](3, "ion-row");
        core["Ec" /* ɵɵelementStart */](4, "ion-col");
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-col");
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["pd" /* ɵɵtext */](9);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_3_ion_badge_10_Template, 2, 5, "ion-badge", 34);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r24 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](6);
        core["Vc" /* ɵɵproperty */]("component", ctx_r24.component)("componentId", ctx_r24.lesson == null ? null : ctx_r24.lesson.coursemodule)("text", answer_r17[0].content)("contextInstanceId", ctx_r24.lesson == null ? null : ctx_r24.lesson.coursemodule)("courseId", ctx_r24.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](answer_r17[0].value);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[1]);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_4_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 36);
        core["zc" /* ɵɵelement */](1, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        const ctx_r35 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r35.component)("componentId", ctx_r35.lesson == null ? null : ctx_r35.lesson.coursemodule)("text", answer_r17[1])("contextInstanceId", ctx_r35.lesson == null ? null : ctx_r35.lesson.coursemodule)("courseId", ctx_r35.courseId);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_4_ion_badge_4_Template, 2, 5, "ion-badge", 34);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r25 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r25.component)("componentId", ctx_r25.lesson == null ? null : ctx_r25.lesson.coursemodule)("text", answer_r17[0])("contextInstanceId", ctx_r25.lesson == null ? null : ctx_r25.lesson.coursemodule)("courseId", ctx_r25.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[1]);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_1_Template, 6, 12, "ion-item", 31);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_2_Template, 5, 2, "ion-item", 23);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_3_Template, 11, 7, "ion-item", 27);
        core["nd" /* ɵɵtemplate */](4, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_ion_item_4_Template, 5, 6, "ion-item", 23);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[0].isCheckbox);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[0].isText);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[0].isSelect);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !answer_r17[0].isCheckbox && !answer_r17[0].isText && !answer_r17[0].isSelect);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_3_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 36);
        core["zc" /* ɵɵelement */](1, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r39 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r39.component)("componentId", ctx_r39.lesson == null ? null : ctx_r39.lesson.coursemodule)("text", answer_r17[1])("contextInstanceId", ctx_r39.lesson == null ? null : ctx_r39.lesson.coursemodule)("courseId", ctx_r39.courseId);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_3_ion_badge_4_Template, 2, 5, "ion-badge", 34);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r17 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r20.component)("componentId", ctx_r20.lesson == null ? null : ctx_r20.lesson.coursemodule)("text", answer_r17[0])("contextInstanceId", ctx_r20.lesson == null ? null : ctx_r20.lesson.coursemodule)("courseId", ctx_r20.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r17[1]);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_1_Template, 9, 3, "ion-item", 27);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ng_container_2_Template, 5, 4, "ng-container", 5);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_ion_item_3_Template, 5, 6, "ion-item", 23);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const page_r11 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", page_r11.isContent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", page_r11.isQuestion);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !page_r11.isContent && !page_r11.isQuestion);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h3", 18);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const page_r11 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 6, "addon.mod_lesson.response"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r15.component)("componentId", ctx_r15.lesson == null ? null : ctx_r15.lesson.coursemodule)("text", page_r11.answerdata.response)("contextInstanceId", ctx_r15.lesson == null ? null : ctx_r15.lesson.coursemodule)("courseId", ctx_r15.courseId);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const page_r11 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](page_r11.answerdata.score);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 25);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ng_container_1_Template, 4, 3, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ion_item_2_Template, 7, 8, "ion-item", 23);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_ion_item_3_Template, 4, 1, "ion-item", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const page_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", page_r11.answerdata.answers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", page_r11.answerdata.response);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", page_r11.answerdata.score);
    }
}
const _c3 = function (a0) { return { "text-dimmed": a0 }; };
function AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-card-title");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](5, "ion-label");
        core["Ec" /* ɵɵelementStart */](6, "h3", 18);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["zc" /* ɵɵelement */](10, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](12, "ion-label");
        core["Ec" /* ɵɵelementStart */](13, "h3", 18);
        core["pd" /* ɵɵtext */](14);
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](16, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_ion_item_16_Template, 5, 3, "ion-item", 23);
        core["nd" /* ɵɵtemplate */](17, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_div_17_Template, 4, 3, "div", 24);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const page_r11 = ctx.$implicit;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](17, _c3, page_r11.grayout));
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", page_r11.qtype, ": ", page_r11.title, "");
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 13, "addon.mod_lesson.question"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r10.component)("componentId", ctx_r10.lesson == null ? null : ctx_r10.lesson.coursemodule)("maxHeight", 50)("text", page_r11.contents)("contextInstanceId", ctx_r10.lesson == null ? null : ctx_r10.lesson.coursemodule)("courseId", ctx_r10.courseId);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](15, 15, "addon.mod_lesson.answer"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !page_r11.answerdata || !page_r11.answerdata.answers || !page_r11.answerdata.answers.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", page_r11.answerdata && page_r11.answerdata.answers && page_r11.answerdata.answers.length);
    }
}
function AddonModLessonUserRetakePage_div_13_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonUserRetakePage_div_13_ng_container_10_ion_card_1_Template, 18, 19, "ion-card", 19);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.retake.answerpages);
    }
}
function AddonModLessonUserRetakePage_div_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 7);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](6, "core-progress-bar", 8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonModLessonUserRetakePage_div_13_ion_item_7_Template, 7, 10, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](8, AddonModLessonUserRetakePage_div_13_ion_list_8_Template, 33, 24, "ion-list", 10);
        core["nd" /* ɵɵtemplate */](9, AddonModLessonUserRetakePage_div_13_ion_item_9_Template, 4, 3, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](10, AddonModLessonUserRetakePage_div_13_ng_container_10_Template, 2, 1, "ng-container", 5);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("userId", ctx_r0.student.id)("courseId", ctx_r0.courseId);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r0.student.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r0.student)("userId", ctx_r0.student.id)("courseId", ctx_r0.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.student.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("progress", ctx_r0.student.bestgrade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.student.attempts && ctx_r0.student.attempts.length > 1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.retake && ctx_r0.retake.userstats && ctx_r0.retake.userstats.gradeinfo);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.retake && (!ctx_r0.retake.userstats || !ctx_r0.retake.userstats.gradeinfo));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.retake);
    }
}
/**
 * Page that displays a retake made by a certain user.
 */
let user_retake_page_AddonModLessonUserRetakePage = /*@__PURE__*/ (() => {
    class AddonModLessonUserRetakePage {
        constructor() {
            this.component = lesson["b" /* AddonModLessonProvider */].COMPONENT;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.retakeNumber = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('retake');
            // Fetch the data.
            this.fetchData().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Change the retake displayed.
         *
         * @param retakeNumber The new retake number.
         */
        changeRetake(retakeNumber) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loaded = false;
                try {
                    yield this.setRetake(retakeNumber);
                }
                catch (error) {
                    this.selectedRetake = this.previousSelectedRetake;
                    dom["a" /* CoreDomUtils */].showErrorModal(utils["a" /* CoreUtils */].addDataNotDownloadedError(error, 'Error getting attempt.'));
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Pull to refresh.
         *
         * @param refresher Refresher.
         */
        doRefresh(refresher) {
            this.refreshData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Get lesson and retake data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.lesson = yield lesson["a" /* AddonModLesson */].getLesson(this.courseId, this.cmId);
                    // Get the retakes overview for all participants.
                    const data = yield lesson["a" /* AddonModLesson */].getRetakesOverview(this.lesson.id, {
                        cmId: this.cmId,
                    });
                    // Search the student.
                    const student = (_a = data === null || data === void 0 ? void 0 : data.students) === null || _a === void 0 ? void 0 : _a.find(student => student.id == this.userId);
                    if (!student) {
                        // Student not found.
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_lesson.cannotfinduser'));
                    }
                    if (!student.attempts.length) {
                        // No retakes.
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_lesson.cannotfindattempt'));
                    }
                    student.bestgrade = utils_text["a" /* CoreTextUtils */].roundToDecimals(student.bestgrade, 2);
                    student.attempts.forEach((retake) => {
                        if (!this.selectedRetake && this.retakeNumber == retake.try) {
                            // The retake specified as parameter exists. Use it.
                            this.selectedRetake = this.retakeNumber;
                        }
                        retake.label = lesson_helper["a" /* AddonModLessonHelper */].getRetakeLabel(retake);
                    });
                    if (!this.selectedRetake) {
                        // Retake number not specified or not valid, use the last retake.
                        this.selectedRetake = student.attempts[student.attempts.length - 1].try;
                    }
                    // Get the profile image of the user.
                    const user = yield utils["a" /* CoreUtils */].ignoreErrors(services_user["a" /* CoreUser */].getProfile(student.id, this.courseId, true));
                    this.student = student;
                    this.student.profileimageurl = user === null || user === void 0 ? void 0 : user.profileimageurl;
                    yield this.setRetake(this.selectedRetake);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting data.', true);
                }
            });
        }
        /**
         * Refreshes data.
         *
         * @return Promise resolved when done.
         */
        refreshData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(lesson["a" /* AddonModLesson */].invalidateLessonData(this.courseId));
                if (this.lesson) {
                    promises.push(lesson["a" /* AddonModLesson */].invalidateRetakesOverview(this.lesson.id));
                    promises.push(lesson["a" /* AddonModLesson */].invalidateUserRetakesForUser(this.lesson.id, this.userId));
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                yield this.fetchData();
            });
        }
        /**
         * Set the retake to view and load its data.
         *
         * @param retakeNumber Retake number to set.
         * @return Promise resolved when done.
         */
        setRetake(retakeNumber) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.selectedRetake = retakeNumber;
                const retakeData = yield lesson["a" /* AddonModLesson */].getUserRetake(this.lesson.id, retakeNumber, {
                    cmId: this.cmId,
                    userId: this.userId,
                });
                this.retake = this.formatRetake(retakeData);
                this.previousSelectedRetake = this.selectedRetake;
            });
        }
        /**
         * Format retake data, adding some calculated data.
         *
         * @param data Retake data.
         * @return Formatted data.
         */
        formatRetake(retakeData) {
            const formattedData = retakeData;
            if (formattedData.userstats.gradeinfo) {
                // Completed.
                formattedData.userstats.grade = utils_text["a" /* CoreTextUtils */].roundToDecimals(formattedData.userstats.grade, 2);
                this.timeTakenReadable = time["a" /* CoreTimeUtils */].formatTime(formattedData.userstats.timetotake);
            }
            // Format pages data.
            formattedData.answerpages.forEach((page) => {
                var _a, _b;
                if (lesson["a" /* AddonModLesson */].answerPageIsContent(page)) {
                    page.isContent = true;
                    if ((_a = page.answerdata) === null || _a === void 0 ? void 0 : _a.answers) {
                        page.answerdata.answers.forEach((answer) => {
                            // Content pages only have 1 valid field in the answer array.
                            answer[0] = lesson_helper["a" /* AddonModLessonHelper */].getContentPageAnswerDataFromHtml(answer[0]);
                        });
                    }
                }
                else if (lesson["a" /* AddonModLesson */].answerPageIsQuestion(page)) {
                    page.isQuestion = true;
                    if ((_b = page.answerdata) === null || _b === void 0 ? void 0 : _b.answers) {
                        page.answerdata.answers.forEach((answer) => {
                            // Only the first field of the answer array requires to be parsed.
                            answer[0] = lesson_helper["a" /* AddonModLessonHelper */].getQuestionPageAnswerDataFromHtml(answer[0]);
                        });
                    }
                }
            });
            return formattedData;
        }
    }
    AddonModLessonUserRetakePage.ɵfac = function AddonModLessonUserRetakePage_Factory(t) { return new (t || AddonModLessonUserRetakePage)(); };
    AddonModLessonUserRetakePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModLessonUserRetakePage, selectors: [["page-addon-mod-lesson-user-retake"]], decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["core-user-link", "", 1, "ion-text-wrap", 3, "userId", "courseId"], ["slot", "start", 3, "user", "userId", "courseId"], ["a11yText", "addon.mod_lesson.grade", 3, "progress"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "addon-mod_lesson-userstats", 4, "ngIf"], [1, "ion-text-wrap"], ["id", "addon-mod_lesson-retakeslabel"], ["aria-labelledby", "addon-mod_lesson-retakeslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "addon-mod_lesson-userstats"], [1, "ion-no-padding"], [1, "item-heading"], ["class", "addon-mod_lesson-answerpage", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "addon-mod_lesson-answerpage", 3, "ngClass"], ["lines", "none", 1, "ion-text-wrap"], ["contextLevel", "module", 3, "component", "componentId", "maxHeight", "text", "contextInstanceId", "courseId"], ["class", "ion-text-wrap", "lines", "none", 4, "ngIf"], ["class", "addon-mod_lesson-answer", 4, "ngIf"], [1, "addon-mod_lesson-answer"], [4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["lines", "none"], ["expand", "block", "color", "light", 1, "ion-text-wrap", 3, "disabled"], [3, "innerHTML"], ["class", "ion-text-wrap", 3, "ngClass", 4, "ngIf"], [1, "ion-text-wrap", 3, "ngClass"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"], ["color", "dark", 4, "ngIf"], ["slot", "end", 3, "ngModel", "disabled"], ["color", "dark"]], template: function AddonModLessonUserRetakePage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModLessonUserRetakePage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, AddonModLessonUserRetakePage_div_13_Template, 11, 12, "div", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "addon.mod_lesson.detailedstats"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.student);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], progress_bar["a" /* CoreProgressBarComponent */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["O" /* IonList */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["m" /* IonCard */], common["q" /* NgClass */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["k" /* IonButton */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   .button-disabled[_ngcontent-%COMP%]{opacity:.4}[_nghost-%COMP%]   .addon-mod_lesson-highlight[_ngcontent-%COMP%]{--background:var(--blue-light)}[_nghost-%COMP%]   .addon-mod_lesson-highlight[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-mod_lesson-highlight[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--blue-dark)}[_nghost-%COMP%]   .item-interactive-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{opacity:.5}"] });
    return AddonModLessonUserRetakePage;
})();

// CONCATENATED MODULE: ./src/addons/mod/lesson/pages/user-retake/user-retake.module.ts
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
        component: user_retake_page_AddonModLessonUserRetakePage,
    },
];
let user_retake_module_AddonModLessonUserRetakePageModule = /*@__PURE__*/ (() => {
    class AddonModLessonUserRetakePageModule {
    }
    AddonModLessonUserRetakePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModLessonUserRetakePageModule });
    AddonModLessonUserRetakePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModLessonUserRetakePageModule_Factory(t) { return new (t || AddonModLessonUserRetakePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModLessonUserRetakePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](user_retake_module_AddonModLessonUserRetakePageModule, { declarations: [user_retake_page_AddonModLessonUserRetakePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);