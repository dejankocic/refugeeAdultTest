(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "Ottz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModH5PActivityAttemptResultsPageModule", function() { return /* binding */ attempt_results_module_AddonModH5PActivityAttemptResultsPageModule; });

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

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.ts

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
















function AddonModH5PActivityAttemptResultsPage_core_format_text_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-format-text", 8);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.h5pActivity.name)("contextInstanceId", ctx_r0.h5pActivity.coursemodule)("courseId", ctx_r0.courseId);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 14);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 15);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("userId", ctx_r4.user.id)("courseId", ctx_r4.courseId);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r4.user.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r4.user)("courseId", ctx_r4.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["td" /* ɵɵtextInterpolate3 */]("", core["Qc" /* ɵɵpipeBind1 */](5, 8, "addon.mod_h5pactivity.attempt"), " #", ctx_r4.attempt.attempt, ": ", ctx_r4.user.fullname, "");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_h5pactivity.attempt"), " #", ctx_r5.attempt.attempt, "");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_p_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "img", 17);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_h5pactivity.attempt_completion_yes"), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_p_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "img", 18);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_h5pactivity.attempt_completion_no"), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_p_32_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 19);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_h5pactivity.attempt_success_pass"), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_p_33_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 20);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_h5pactivity.attempt_success_fail"), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_p_34_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_h5pactivity.attempt_success_unknown"), " ");
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_35_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_h5pactivity.totalscore"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](7, 4, "addon.mod_h5pactivity.score_out_of", core["ad" /* ɵɵpureFunction1 */](7, _c0, ctx_r11.attempt)));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", result_r14.content)("component", ctx_r15.component)("componentId", ctx_r15.cmId)("contextInstanceId", ctx_r15.cmId)("courseId", ctx_r15.courseId);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_6_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
const _c1 = function (a0) { return { answer: a0 }; };
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 30);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const option_r21 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Oc" /* ɵɵnextContext */](5);
        const _r2 = core["fd" /* ɵɵreference */](14);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, option_r21.correctanswer));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_8_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 30);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const option_r21 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Oc" /* ɵɵnextContext */](5);
        const _r2 = core["fd" /* ɵɵreference */](14);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, option_r21.useranswer));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 29);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "ion-row", 25);
        core["Ec" /* ɵɵelementStart */](3, "ion-col", 26);
        core["zc" /* ɵɵelement */](4, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-col", 26);
        core["nd" /* ɵɵtemplate */](6, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_6_Template, 2, 4, "ng-container", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-col", 26);
        core["nd" /* ɵɵtemplate */](8, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_ng_container_8_Template, 2, 4, "ng-container", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r21 = ctx.$implicit;
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", option_r21.description)("component", ctx_r19.component)("componentId", ctx_r19.cmId)("contextInstanceId", ctx_r19.cmId)("courseId", ctx_r19.courseId);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", option_r21.correctanswer);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", option_r21.useranswer);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 31);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["Ec" /* ɵɵelementStart */](3, "strong");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r14 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](4);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 2, "addon.mod_h5pactivity.score"), ": ", core["Rc" /* ɵɵpipeBind2 */](6, 4, "addon.mod_h5pactivity.score_out_of", core["ad" /* ɵɵpureFunction1 */](7, _c0, result_r14)), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 24);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "ion-row", 25);
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 26);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-col", 26);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-col", 26);
        core["pd" /* ɵɵtext */](9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_10_Template, 9, 7, "ion-item", 27);
        core["nd" /* ɵɵtemplate */](11, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_ion_item_11_Template, 7, 9, "ion-item", 28);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const result_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](result_r14.optionslabel);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](result_r14.correctlabel);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](result_r14.answerlabel);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", result_r14.options);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r14.maxscore);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 32);
        core["zc" /* ɵɵelement */](1, "ion-icon", 33);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 1, "addon.mod_h5pactivity.no_compatible_track", core["ad" /* ɵɵpureFunction1 */](4, _c0, result_r14.interactiontype)), " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header", 16);
        core["Ec" /* ɵɵelementStart */](2, "ion-card-title");
        core["zc" /* ɵɵelement */](3, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ion_item_4_Template, 3, 5, "ion-item", 10);
        core["nd" /* ɵɵtemplate */](5, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ng_container_5_Template, 12, 5, "ng-container", 6);
        core["nd" /* ɵɵtemplate */](6, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_ion_item_6_Template, 5, 6, "ion-item", 23);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r14 = ctx.$implicit;
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", result_r14.description)("component", ctx_r13.component)("componentId", ctx_r13.cmId)("contextInstanceId", ctx_r13.cmId)("courseId", ctx_r13.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r14.content);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r14.options && result_r14.options.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !result_r14.track);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_ion_card_1_Template, 7, 8, "ion-card", 21);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r12.attempt.results);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_1_Template, 6, 10, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](2, AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_2_Template, 5, 4, "ion-item", 10);
        core["Ec" /* ɵɵelementStart */](3, "ion-card", 11);
        core["Ec" /* ɵɵelementStart */](4, "ion-list");
        core["Ec" /* ɵɵelementStart */](5, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](6, "ion-label");
        core["Ec" /* ɵɵelementStart */](7, "h2");
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "p");
        core["pd" /* ɵɵtext */](11);
        core["Pc" /* ɵɵpipe */](12, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](14, "ion-label");
        core["Ec" /* ɵɵelementStart */](15, "h2");
        core["pd" /* ɵɵtext */](16);
        core["Pc" /* ɵɵpipe */](17, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](18, AddonModH5PActivityAttemptResultsPage_ng_container_12_p_18_Template, 4, 3, "p", 6);
        core["nd" /* ɵɵtemplate */](19, AddonModH5PActivityAttemptResultsPage_ng_container_12_p_19_Template, 4, 3, "p", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](21, "ion-label");
        core["Ec" /* ɵɵelementStart */](22, "h2");
        core["pd" /* ɵɵtext */](23);
        core["Pc" /* ɵɵpipe */](24, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](25, "p");
        core["pd" /* ɵɵtext */](26);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](27, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](28, "ion-label");
        core["Ec" /* ɵɵelementStart */](29, "h2");
        core["pd" /* ɵɵtext */](30);
        core["Pc" /* ɵɵpipe */](31, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](32, AddonModH5PActivityAttemptResultsPage_ng_container_12_p_32_Template, 4, 3, "p", 6);
        core["nd" /* ɵɵtemplate */](33, AddonModH5PActivityAttemptResultsPage_ng_container_12_p_33_Template, 4, 3, "p", 6);
        core["nd" /* ɵɵtemplate */](34, AddonModH5PActivityAttemptResultsPage_ng_container_12_p_34_Template, 3, 3, "p", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](35, AddonModH5PActivityAttemptResultsPage_ng_container_12_ion_item_35_Template, 8, 9, "ion-item", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](36, AddonModH5PActivityAttemptResultsPage_ng_container_12_ng_container_36_Template, 2, 1, "ng-container", 6);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.user);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.user);
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](9, 15, "addon.mod_h5pactivity.startdate"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](12, 17, ctx_r1.attempt.timecreated, "strftimedatetime"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 20, "addon.mod_h5pactivity.completion"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.completion);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.attempt.completion);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 22, "addon.mod_h5pactivity.duration"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.attempt.durationReadable);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](31, 24, "addon.mod_h5pactivity.outcome"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.success !== null && ctx_r1.attempt.success);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.success !== null && !ctx_r1.attempt.success);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.success === null);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.maxscore);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.results);
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_0_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 34);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r31 = core["Oc" /* ɵɵnextContext */]().answer;
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.mod_h5pactivity.answer_correct"));
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", answer_r31.answer, " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 35);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r31 = core["Oc" /* ɵɵnextContext */]().answer;
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.mod_h5pactivity.answer_incorrect"));
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", answer_r31.answer, " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const answer_r31 = core["Oc" /* ɵɵnextContext */]().answer;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", answer_r31.answer, " ");
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 36);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_h5pactivity.answer_checked"));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 34);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_h5pactivity.answer_pass"));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "ion-icon", 35);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_h5pactivity.answer_fail"));
    }
}
function AddonModH5PActivityAttemptResultsPage_ng_template_13_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_0_Template, 4, 4, "p", 6);
        core["nd" /* ɵɵtemplate */](1, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_1_Template, 4, 4, "p", 6);
        core["nd" /* ɵɵtemplate */](2, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_2_Template, 2, 1, "p", 6);
        core["nd" /* ɵɵtemplate */](3, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_3_Template, 3, 3, "p", 6);
        core["nd" /* ɵɵtemplate */](4, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_4_Template, 3, 3, "p", 6);
        core["nd" /* ɵɵtemplate */](5, AddonModH5PActivityAttemptResultsPage_ng_template_13_p_5_Template, 3, 3, "p", 6);
    }
    if (rf & 2) {
        const answer_r31 = ctx.answer;
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.correct);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.incorrect);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.text);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.checked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.pass);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", answer_r31.fail);
    }
}
/**
 * Page that displays results of an attempt.
 */
let attempt_results_AddonModH5PActivityAttemptResultsPage = /*@__PURE__*/ (() => {
    class AddonModH5PActivityAttemptResultsPage {
        constructor() {
            this.loaded = false;
            this.component = h5pactivity["b" /* AddonModH5PActivityProvider */].COMPONENT;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.attemptId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('attemptId');
                try {
                    yield this.fetchData();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading attempt.');
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
                this.attempt = yield h5pactivity["a" /* AddonModH5PActivity */].getAttemptResults(this.h5pActivity.id, this.attemptId, {
                    cmId: this.cmId,
                });
                yield this.fetchUserProfile();
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
                    this.user = yield user["a" /* CoreUser */].getProfile(this.attempt.userid, this.courseId, true);
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
                    promises.push(h5pactivity["a" /* AddonModH5PActivity */].invalidateAttemptResults(this.h5pActivity.id, this.attemptId));
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                yield this.fetchData();
            });
        }
    }
    AddonModH5PActivityAttemptResultsPage.ɵfac = function AddonModH5PActivityAttemptResultsPage_Factory(t) { return new (t || AddonModH5PActivityAttemptResultsPage)(); };
    AddonModH5PActivityAttemptResultsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModH5PActivityAttemptResultsPage, selectors: [["page-addon-mod-h5pactivity-attempt-results"]], decls: 15, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["answerTemplate", ""], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["class", "ion-text-wrap", "core-user-link", "", 3, "userId", "courseId", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "addon-mod_h5pactivity-attempt-result-summary"], ["lines", "none", 1, "ion-text-wrap"], ["class", "ion-text-wrap", "lines", "none", 4, "ngIf"], ["core-user-link", "", 1, "ion-text-wrap", 3, "userId", "courseId"], ["slot", "start", 3, "user", "courseId"], [1, "ion-text-wrap"], ["src", "assets/img/completion/completion-auto-y.svg", "role", "presentation", "alt", ""], ["src", "assets/img/completion/completion-auto-n.svg", "role", "presentation", "alt", ""], ["name", "fas-check-circle", "aria-hidden", "true"], ["name", "far-circle", "aria-hidden", "true"], [4, "ngFor", "ngForOf"], ["contextLevel", "module", 3, "text", "component", "componentId", "contextInstanceId", "courseId"], ["class", "ion-text-wrap core-warning-item", "lines", "none", 4, "ngIf"], [1, "ion-text-wrap", "addon-mod_h5pactivity-result-table-header"], [1, "ion-align-items-center"], [1, "ion-text-center"], ["class", "ion-text-wrap addon-mod_h5pactivity-result-table-row", 4, "ngFor", "ngForOf"], ["class", "ion-text-wrap ion-text-end addon-mod_h5pactivity-result-score", 4, "ngIf"], [1, "ion-text-wrap", "addon-mod_h5pactivity-result-table-row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ion-text-wrap", "ion-text-end", "addon-mod_h5pactivity-result-score"], ["lines", "none", 1, "ion-text-wrap", "core-warning-item"], ["slot", "start", "name", "fas-exclamation-triangle", "color", "warning", "aria-hidden", "true"], ["name", "fas-check", "color", "success"], ["name", "fas-times", "color", "danger"], ["name", "fas-check-circle"]], template: function AddonModH5PActivityAttemptResultsPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonModH5PActivityAttemptResultsPage_core_format_text_6_Template, 1, 3, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModH5PActivityAttemptResultsPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, AddonModH5PActivityAttemptResultsPage_ng_container_12_Template, 37, 26, "ng-container", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](13, AddonModH5PActivityAttemptResultsPage_ng_template_13_Template, 6, 6, "ng-template", null, 7, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.h5pActivity);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["m" /* IonCard */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], common["s" /* NgForOf */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], common["A" /* NgTemplateOutlet */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   .core-warning-item[_ngcontent-%COMP%]{--inner-border-width:0}[_nghost-%COMP%]   .addon-mod_h5pactivity-attempt-result-summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px;display:inline;margin-left:0;margin-right:4px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .addon-mod_h5pactivity-attempt-result-summary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:4px;margin-inline-end:4px}}[_nghost-%COMP%]   .addon-mod_h5pactivity-attempt-result-summary[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.2em}[_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-header[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-row.item[_ngcontent-%COMP%]:nth-child(2n){--background:var(--gray-lighter)}[_nghost-%COMP%]   .addon-mod_h5pactivity-result-score[_ngcontent-%COMP%]{border-top:1px solid #000}body.dark[_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-row.item[_ngcontent-%COMP%]:nth-child(2n), body.dark   [_nghost-%COMP%]   .addon-mod_h5pactivity-result-table-row.item[_ngcontent-%COMP%]:nth-child(2n){--background:var(--black)}"] });
    return AddonModH5PActivityAttemptResultsPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/h5pactivity/pages/attempt-results/attempt-results.module.ts
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
        component: attempt_results_AddonModH5PActivityAttemptResultsPage,
    },
];
let attempt_results_module_AddonModH5PActivityAttemptResultsPageModule = /*@__PURE__*/ (() => {
    class AddonModH5PActivityAttemptResultsPageModule {
    }
    AddonModH5PActivityAttemptResultsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModH5PActivityAttemptResultsPageModule });
    AddonModH5PActivityAttemptResultsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModH5PActivityAttemptResultsPageModule_Factory(t) { return new (t || AddonModH5PActivityAttemptResultsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModH5PActivityAttemptResultsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](attempt_results_module_AddonModH5PActivityAttemptResultsPageModule, { declarations: [attempt_results_AddonModH5PActivityAttemptResultsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);