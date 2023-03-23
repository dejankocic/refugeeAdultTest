(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "kNee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModH5PActivityUserAttemptsPageModule", function() { return /* binding */ user_attempts_module_AddonModH5PActivityUserAttemptsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/addons/mod/h5pactivity/services/h5pactivity.ts
var h5pactivity = __webpack_require__("pOwY");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.ts

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


















function AddonModH5PActivityUserAttemptsPage_core_format_text_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-format-text", 11);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.h5pActivity.name)("contextInstanceId", ctx_r0.h5pActivity.coursemodule)("courseId", ctx_r0.courseId);
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 13);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("userId", ctx_r1.user.id)("courseId", ctx_r1.courseId);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r1.user.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.user)("courseId", ctx_r1.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.user.fullname);
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_item_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 14);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 13);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r2.user)("courseId", ctx_r2.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.mod_h5pactivity.myattempts"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
const _c0 = function (a0) { return { attempts: a0 }; };
function AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_1_ng_container_5_Template, 1, 0, "ng-container", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        const _r5 = core["fd" /* ɵɵreference */](17);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](ctx_r7.attemptsData.scored.title);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](3, _c0, ctx_r7.attemptsData.scored.attempts));
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_2_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_2_ng_container_6_Template, 1, 0, "ng-container", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        const _r5 = core["fd" /* ɵɵreference */](17);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.mod_h5pactivity.all_attempts"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r5)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](5, _c0, ctx_r8.attemptsData.attempts));
    }
}
function AddonModH5PActivityUserAttemptsPage_ion_list_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_1_Template, 6, 5, "ng-container", 8);
        core["nd" /* ɵɵtemplate */](2, AddonModH5PActivityUserAttemptsPage_ion_list_14_ng_container_2_Template, 7, 7, "ng-container", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.attemptsData.scored);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.attemptsData.attempts && ctx_r3.attemptsData.attempts.length);
    }
}
function AddonModH5PActivityUserAttemptsPage_core_empty_box_15_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 16);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempts_none"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_18_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 31);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("alt", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempt_completion_yes"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_19_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 32);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("alt", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempt_completion_no"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_ion_icon_21_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 33);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempt_success_pass"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_ion_icon_22_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 34);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempt_success_fail"));
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_23_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 35);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("alt", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_h5pactivity.attempt_success_unknown"));
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 23);
        core["Mc" /* ɵɵlistener */]("click", function AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r20); const attempt_r13 = ctx.$implicit; const ctx_r19 = core["Oc" /* ɵɵnextContext */](2); return ctx_r19.openAttempt(attempt_r13); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "ion-row", 18);
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 19);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-col", 20);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-col", 19);
        core["pd" /* ɵɵtext */](10);
        core["Ec" /* ɵɵelementStart */](11, "span", 24);
        core["pd" /* ɵɵtext */](12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-col", 21);
        core["pd" /* ɵɵtext */](14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](15, "ion-col", 21);
        core["pd" /* ɵɵtext */](16);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](17, "ion-col", 21);
        core["nd" /* ɵɵtemplate */](18, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_18_Template, 2, 3, "img", 25);
        core["nd" /* ɵɵtemplate */](19, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_19_Template, 2, 3, "img", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-col", 27);
        core["nd" /* ɵɵtemplate */](21, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_ion_icon_21_Template, 2, 3, "ion-icon", 28);
        core["nd" /* ɵɵtemplate */](22, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_ion_icon_22_Template, 2, 3, "ion-icon", 29);
        core["nd" /* ɵɵtemplate */](23, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_img_23_Template, 2, 3, "img", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const attempt_r13 = ctx.$implicit;
        core["mc" /* ɵɵattribute */]("aria-label", core["Rc" /* ɵɵpipeBind2 */](1, 12, "addon.mod_h5pactivity.viewattempt", core["ad" /* ɵɵpureFunction1 */](18, _c1, attempt_r13.attempt)));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](attempt_r13.attempt);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](8, 15, attempt_r13.timemodified, "strftimedatetimeshort"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", attempt_r13.rawscore, "");
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" / ", attempt_r13.maxscore, "");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](attempt_r13.maxscore);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](attempt_r13.durationReadable);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", attempt_r13.completion);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !attempt_r13.completion);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", attempt_r13.success !== null && attempt_r13.success);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", attempt_r13.success !== null && !attempt_r13.success);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", attempt_r13.success === null);
    }
}
function AddonModH5PActivityUserAttemptsPage_ng_template_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "ion-row", 18);
        core["Ec" /* ɵɵelementStart */](3, "ion-col", 19);
        core["pd" /* ɵɵtext */](4, "#");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-col", 20);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-col", 19);
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "ion-col", 21);
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-col", 21);
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](17, "ion-col", 21);
        core["pd" /* ɵɵtext */](18);
        core["Pc" /* ɵɵpipe */](19, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-col", 19);
        core["pd" /* ɵɵtext */](21);
        core["Pc" /* ɵɵpipe */](22, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](23, AddonModH5PActivityUserAttemptsPage_ng_template_16_ion_item_23_Template, 24, 20, "ion-item", 22);
    }
    if (rf & 2) {
        const attempts_r11 = ctx.attempts;
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 7, "core.date"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](10, 9, "addon.mod_h5pactivity.score"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 11, "addon.mod_h5pactivity.maxscore"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 13, "addon.mod_h5pactivity.duration"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](19, 15, "addon.mod_h5pactivity.completion"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 17, "core.success"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", attempts_r11);
    }
}
/**
 * Page that displays user attempts of a certain user.
 */
let user_attempts_AddonModH5PActivityUserAttemptsPage = /*@__PURE__*/ (() => {
    class AddonModH5PActivityUserAttemptsPage {
        constructor() {
            this.loaded = false;
            this.isCurrentUser = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || sites["b" /* CoreSites */].getCurrentSiteUserId();
                this.isCurrentUser = this.userId == sites["b" /* CoreSites */].getCurrentSiteUserId();
                try {
                    yield this.fetchData();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading attempts.');
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        doRefresh(refresher) {
            this.refreshData().finally(() => {
                refresher.complete();
            });
        }
        /**
         * Get quiz data and attempt data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.h5pActivity = yield h5pactivity["a" /* AddonModH5PActivity */].getH5PActivity(this.courseId, this.cmId);
                yield Promise.all([
                    this.fetchAttempts(),
                    this.fetchUserProfile(),
                ]);
            });
        }
        /**
         * Get attempts.
         *
         * @return Promise resolved when done.
         */
        fetchAttempts() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.attemptsData = yield h5pactivity["a" /* AddonModH5PActivity */].getUserAttempts(this.h5pActivity.id, {
                    cmId: this.cmId,
                    userId: this.userId,
                });
            });
        }
        /**
         * Get user profile.
         *
         * @return Promise resolved when done.
         */
        fetchUserProfile() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.user = yield user["a" /* CoreUser */].getProfile(this.userId, this.courseId, true);
                }
                catch (error) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @return Promise resolved when done.
         */
        refreshData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [
                    h5pactivity["a" /* AddonModH5PActivity */].invalidateActivityData(this.courseId),
                ];
                if (this.h5pActivity) {
                    promises.push(h5pactivity["a" /* AddonModH5PActivity */].invalidateUserAttempts(this.h5pActivity.id, this.userId));
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                yield this.fetchData();
            });
        }
        /**
         * Open the page to view an attempt.
         *
         * @param attempt Attempt.
         */
        openAttempt(attempt) {
            services_navigator["a" /* CoreNavigator */].navigate(`../../attemptresults/${attempt.id}`);
        }
    }
    AddonModH5PActivityUserAttemptsPage.ɵfac = function AddonModH5PActivityUserAttemptsPage_Factory(t) { return new (t || AddonModH5PActivityUserAttemptsPage)(); };
    AddonModH5PActivityUserAttemptsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModH5PActivityUserAttemptsPage, selectors: [["page-addon-mod-h5pactivity-user-attempts"]], decls: 18, vars: 13, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", "core-user-link", "", 3, "userId", "courseId", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngIf"], ["icon", "fas-chart-bar", 3, "message", 4, "ngIf"], ["attemptsTemplate", ""], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["core-user-link", "", 1, "ion-text-wrap", 3, "userId", "courseId"], ["slot", "start", 3, "user", "courseId"], [1, "ion-text-wrap"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["icon", "fas-chart-bar", 3, "message"], ["detail", "true", 1, "ion-text-wrap", "addon-mod_h5pactivity-table-header", "hide-detail"], [1, "ion-align-items-center"], [1, "ion-text-center"], ["size", "5", "size-md", "2", 1, "ion-text-center"], [1, "ion-text-center", "ion-hide-md-down"], ["class", "ion-text-wrap addon-mod_h5pactivity-table-row", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", "addon-mod_h5pactivity-table-row", 3, "click"], [1, "ion-hide-md-up"], ["src", "assets/img/completion/completion-auto-y.svg", 3, "alt", 4, "ngIf"], ["src", "assets/img/completion/completion-auto-n.svg", 3, "alt", 4, "ngIf"], [1, "ion-text-center", "addon-mod_h5pactivity-table-success-col"], ["name", "fas-check-circle", 4, "ngIf"], ["name", "far-circle", 4, "ngIf"], ["src", "assets/img/icons/empty.svg", 3, "alt", 4, "ngIf"], ["src", "assets/img/completion/completion-auto-y.svg", 3, "alt"], ["src", "assets/img/completion/completion-auto-n.svg", 3, "alt"], ["name", "fas-check-circle"], ["name", "far-circle"], ["src", "assets/img/icons/empty.svg", 3, "alt"]], template: function AddonModH5PActivityUserAttemptsPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonModH5PActivityUserAttemptsPage_core_format_text_6_Template, 1, 3, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModH5PActivityUserAttemptsPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, AddonModH5PActivityUserAttemptsPage_ion_item_12_Template, 5, 6, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](13, AddonModH5PActivityUserAttemptsPage_ion_item_13_Template, 6, 5, "ion-item", 7);
                core["nd" /* ɵɵtemplate */](14, AddonModH5PActivityUserAttemptsPage_ion_list_14_Template, 3, 2, "ion-list", 8);
                core["nd" /* ɵɵtemplate */](15, AddonModH5PActivityUserAttemptsPage_core_empty_box_15_Template, 2, 3, "core-empty-box", 9);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](16, AddonModH5PActivityUserAttemptsPage_ng_template_16_Template, 24, 19, "ng-template", null, 10, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.h5pActivity);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user && !ctx.isCurrentUser);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user && ctx.isCurrentUser);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attemptsData);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attemptsData && (!ctx.attemptsData.attempts || !ctx.attemptsData.attempts.length));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["H" /* IonItem */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], ionic_angular["O" /* IonList */], ionic_angular["I" /* IonItemDivider */], common["A" /* NgTemplateOutlet */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], common["s" /* NgForOf */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   .addon-mod_h5pactivity-table-header[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-mod_h5pactivity-table-row[_ngcontent-%COMP%]   .addon-mod_h5pactivity-table-success-col[_ngcontent-%COMP%]{font-size:1.2em}"] });
    return AddonModH5PActivityUserAttemptsPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/h5pactivity/pages/user-attempts/user-attempts.module.ts
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
        component: user_attempts_AddonModH5PActivityUserAttemptsPage,
    },
];
let user_attempts_module_AddonModH5PActivityUserAttemptsPageModule = /*@__PURE__*/ (() => {
    class AddonModH5PActivityUserAttemptsPageModule {
    }
    AddonModH5PActivityUserAttemptsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModH5PActivityUserAttemptsPageModule });
    AddonModH5PActivityUserAttemptsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModH5PActivityUserAttemptsPageModule_Factory(t) { return new (t || AddonModH5PActivityUserAttemptsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModH5PActivityUserAttemptsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](user_attempts_module_AddonModH5PActivityUserAttemptsPageModule, { declarations: [user_attempts_AddonModH5PActivityUserAttemptsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);