(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "HFvr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModFeedbackFormPageModule", function() { return /* binding */ form_module_AddonModFeedbackFormPageModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-helper.ts
var contentlinks_helper = __webpack_require__("vnm2");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback.ts
var feedback = __webpack_require__("MNPK");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback-helper.ts
var feedback_helper = __webpack_require__("96hm");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback-sync.ts
var feedback_sync = __webpack_require__("Uh05");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/handlers/module.ts
var handlers_module = __webpack_require__("0Gvy");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/components/mark-required/mark-required.ts
var mark_required = __webpack_require__("FasJ");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/recaptcha/recaptcha.ts
var recaptcha = __webpack_require__("whRm");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/form/form.ts

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



























function AddonModFeedbackFormPage_ng_container_9_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.anonymous"));
    }
}
function AddonModFeedbackFormPage_ng_container_9_p_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.non_anonymous"));
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_core_spacer_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-spacer");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_span_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */]("", item_r7.itemnumber, ". ");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 19);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](item_r7.postfix);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 16);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_span_1_Template, 2, 1, "span", 4);
        core["zc" /* ɵɵelement */](2, "core-format-text", 17);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_span_3_Template, 2, 1, "span", 18);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("core-mark-required", item_r7.required);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r10.feedback.autonumbering && item_r7.itemnumber);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r10.component)("componentId", ctx_r10.cmId)("text", item_r7.name)("contextInstanceId", ctx_r10.cmId)("courseId", ctx_r10.courseId)("wsNotFiltered", true);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.postfix);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r11.component)("componentId", ctx_r11.cmId)("text", item_r7.presentation)("contextInstanceId", ctx_r11.cmId)("wsNotFiltered", true)("courseId", ctx_r11.courseId);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_input_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-input", 21);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_input_5_Template_ion_input_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r27); const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit; return item_r7.value = $event; });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Wc" /* ɵɵpropertyInterpolate */]("maxlength", item_r7.length);
        core["Vc" /* ɵɵproperty */]("ngModel", item_r7.value)("required", item_r7.required);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_ion_text_2_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1, ", ");
        core["Dc" /* ɵɵelementEnd */]();
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_ion_text_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-text", 24);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_ion_text_2_span_3_Template, 2, 0, "span", 4);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 4, "addon.mod_feedback.numberoutofrange"), " [", item_r7.rangefrom, " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.rangefrom && item_r7.rangeto);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */]("", item_r7.rangeto, "] ");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-input", 22);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_Template_ion_input_ngModelChange_1_listener($event) { core["gd" /* ɵɵrestoreView */](_r34); const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit; return item_r7.value = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_ion_text_2_Template, 5, 6, "ion-text", 23);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Vc" /* ɵɵproperty */]("ngModel", item_r7.value)("required", item_r7.required);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.hasError);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_textarea_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r38 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-textarea", 25);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_textarea_7_Template_ion_textarea_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r38); const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit; return item_r7.value = $event; });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Vc" /* ɵɵproperty */]("required", item_r7.required)("ngModel", item_r7.value);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_select_8_ion_select_option_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 28);
        core["zc" /* ɵɵelement */](1, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r41 = ctx.$implicit;
        const ctx_r40 = core["Oc" /* ɵɵnextContext */](5);
        core["Vc" /* ɵɵproperty */]("value", option_r41.value);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r40.component)("componentId", ctx_r40.cmId)("text", option_r41.label)("contextInstanceId", ctx_r40.cmId)("wsNotFiltered", true)("courseId", ctx_r40.courseId);
    }
}
const _c0 = function (a0) { return { header: a0 }; };
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_select_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r44 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-select", 26);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_select_8_Template_ion_select_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r44); const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit; return item_r7.value = $event; });
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_select_8_ion_select_option_1_Template, 2, 7, "ion-select-option", 27);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Vc" /* ɵɵproperty */]("required", item_r7.required)("ngModel", item_r7.value)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](6, _c0, item_r7.name));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", item_r7.choices);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_radio_group_9_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](3, "ion-radio", 30);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r47 = ctx.$implicit;
        const ctx_r46 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("component", ctx_r46.component)("componentId", ctx_r46.cmId)("text", option_r47.label)("contextInstanceId", ctx_r46.cmId)("wsNotFiltered", true)("courseId", ctx_r46.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("value", option_r47.value);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_radio_group_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r50 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-radio-group", 29);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_radio_group_9_Template_ion_radio_group_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r50); const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit; return item_r7.value = $event; });
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_radio_group_9_ion_item_1_Template, 4, 7, "ion-item", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Vc" /* ɵɵproperty */]("ngModel", item_r7.value)("required", item_r7.required);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", item_r7.choices);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_10_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r55 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-checkbox", 31);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_10_ion_item_1_Template_ion_checkbox_ngModelChange_3_listener($event) { core["gd" /* ɵɵrestoreView */](_r55); const option_r53 = ctx.$implicit; return option_r53.checked = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r53 = ctx.$implicit;
        const item_r7 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        const ctx_r52 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("component", ctx_r52.component)("componentId", ctx_r52.cmId)("text", option_r53.label)("contextInstanceId", ctx_r52.cmId)("wsNotFiltered", true)("courseId", ctx_r52.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Yc" /* ɵɵpropertyInterpolate2 */]("name", "", item_r7.typ, "_", item_r7.id, "");
        core["Vc" /* ɵɵproperty */]("required", item_r7.required)("ngModel", option_r53.checked);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_10_ion_item_1_Template, 4, 10, "ion-item", 8);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", item_r7.choices);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_core_recaptcha_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-recaptcha", 34);
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["Vc" /* ɵɵproperty */]("publicKey", item_r7.captcha.recaptchapublickey)("model", item_r7);
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 35);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 36);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_feedback.captchaofflinewarning"));
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_core_recaptcha_1_Template, 1, 2, "core-recaptcha", 32);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_div_2_Template, 6, 3, "div", 33);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r18.preview && !ctx_r18.offline);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r18.preview && (!item_r7.captcha || ctx_r18.offline));
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 10);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_3_Template, 4, 9, "p", 11);
        core["nd" /* ɵɵtemplate */](4, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_p_4_Template, 2, 6, "p", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_input_5_Template, 1, 5, "ion-input", 12);
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 4);
        core["nd" /* ɵɵtemplate */](7, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_textarea_7_Template, 1, 4, "ion-textarea", 13);
        core["nd" /* ɵɵtemplate */](8, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_select_8_Template, 2, 8, "ion-select", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ion_radio_group_9_Template, 2, 5, "ion-radio-group", 15);
        core["nd" /* ɵɵtemplate */](10, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_10_Template, 2, 1, "ng-container", 4);
        core["nd" /* ɵɵtemplate */](11, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_ng_container_11_Template, 3, 2, "ng-container", 4);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("core-danger-item", item_r7.isEmpty || item_r7.hasError);
        core["Vc" /* ɵɵproperty */]("color", item_r7.dependitem > 0 ? "light" : "");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("position", item_r7.hasTextInput ? "stacked" : undefined);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "label");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "textfield");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "numeric");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "textarea");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "multichoice-d");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "multichoice-r");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "multichoice-c");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.templateName == "captcha");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackFormPage_ng_container_9_ng_container_9_core_spacer_1_Template, 1, 0, "core-spacer", 4);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackFormPage_ng_container_9_ng_container_9_ng_container_2_Template, 12, 13, "ng-container", 4);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r7 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.typ == "pagebreak");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r7.typ != "pagebreak");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r67 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 38);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_2_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r67); const ctx_r66 = core["Oc" /* ɵɵnextContext */](3); return ctx_r66.gotoPage(true); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 39);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_feedback.previous_page"), " ");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r69 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 40);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_3_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r69); const ctx_r68 = core["Oc" /* ɵɵnextContext */](3); return ctx_r68.gotoPage(false); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["zc" /* ɵɵelement */](4, "ion-icon", 41);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_feedback.next_page"), " ");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r71 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 40);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_4_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r71); const ctx_r70 = core["Oc" /* ɵɵnextContext */](3); return ctx_r70.gotoPage(false); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_feedback.save_entries"), " ");
    }
}
function AddonModFeedbackFormPage_ng_container_9_ion_grid_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-grid");
        core["Ec" /* ɵɵelementStart */](1, "ion-row", 37);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_2_Template, 5, 3, "ion-col", 4);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_3_Template, 5, 3, "ion-col", 4);
        core["nd" /* ɵɵtemplate */](4, AddonModFeedbackFormPage_ng_container_9_ion_grid_10_ion_col_4_Template, 4, 3, "ion-col", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.hasPrevPage);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.hasNextPage);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r6.hasNextPage);
    }
}
function AddonModFeedbackFormPage_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-list", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonModFeedbackFormPage_ng_container_9_p_7_Template, 3, 3, "p", 4);
        core["nd" /* ɵɵtemplate */](8, AddonModFeedbackFormPage_ng_container_9_p_8_Template, 3, 3, "p", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonModFeedbackFormPage_ng_container_9_ng_container_9_Template, 3, 2, "ng-container", 8);
        core["nd" /* ɵɵtemplate */](10, AddonModFeedbackFormPage_ng_container_9_ion_grid_10_Template, 5, 3, "ion-grid", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.mod_feedback.mode"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.access.isanonymous);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.access.isanonymous);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.items);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.preview);
    }
}
function AddonModFeedbackFormPage_ion_card_10_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.this_feedback_is_already_submitted"), " ");
    }
}
function AddonModFeedbackFormPage_ion_card_10_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.feedback_submitted_offline"), " ");
    }
}
function AddonModFeedbackFormPage_ion_card_10_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "core-format-text", 44);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r74 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r74.component)("text", ctx_r74.completionPageContents)("contextInstanceId", ctx_r74.cmId)("courseId", ctx_r74.courseId);
    }
}
function AddonModFeedbackFormPage_ion_card_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 42);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 43);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonModFeedbackFormPage_ion_card_10_p_4_Template, 3, 3, "p", 4);
        core["nd" /* ɵɵtemplate */](5, AddonModFeedbackFormPage_ion_card_10_p_5_Template, 3, 3, "p", 4);
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackFormPage_ion_card_10_p_6_Template, 2, 4, "p", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.completionPageContents && !ctx_r1.completedOffline);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.completionPageContents && ctx_r1.completedOffline);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.completionPageContents);
    }
}
function AddonModFeedbackFormPage_ion_card_11_ion_col_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r78 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 38);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackFormPage_ion_card_11_ion_col_3_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r78); const ctx_r77 = core["Oc" /* ɵɵnextContext */](2); return ctx_r77.showAnalysis(); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 45);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_feedback.completed_feedbacks"), " ");
    }
}
function AddonModFeedbackFormPage_ion_card_11_ion_col_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r80 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 40);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackFormPage_ion_card_11_ion_col_4_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r80); const ctx_r79 = core["Oc" /* ɵɵnextContext */](2); return ctx_r79.continue(); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["zc" /* ɵɵelement */](4, "ion-icon", 41);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.continue"), " ");
    }
}
function AddonModFeedbackFormPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-grid");
        core["Ec" /* ɵɵelementStart */](2, "ion-row", 37);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackFormPage_ion_card_11_ion_col_3_Template, 5, 3, "ion-col", 4);
        core["nd" /* ɵɵtemplate */](4, AddonModFeedbackFormPage_ion_card_11_ion_col_4_Template, 5, 3, "ion-col", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.access.canviewanalysis);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.hasNextPage);
    }
}
/**
 * Page that displays feedback form.
 */
let form_AddonModFeedbackFormPage = /*@__PURE__*/ (() => {
    class AddonModFeedbackFormPage {
        constructor() {
            this.forceLeave = false;
            this.preview = false;
            this.fromIndex = false;
            this.component = feedback["b" /* AddonModFeedbackProvider */].COMPONENT;
            this.offline = false;
            this.feedbackLoaded = false;
            this.items = [];
            this.hasPrevPage = false;
            this.hasNextPage = false;
            this.completed = false;
            this.completedOffline = false;
            this.currentSite = sites["b" /* CoreSites */].getCurrentSite();
            // Refresh online status when changes.
            this.onlineObserver = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.offline = !app["a" /* CoreApp */].isOnline();
                });
            });
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.currentPage = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('page');
                this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title');
                this.preview = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('preview');
                this.fromIndex = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('fromIndex');
                yield this.fetchData();
                if (!this.feedback) {
                    return;
                }
                try {
                    yield feedback["a" /* AddonModFeedback */].logView(this.feedback.id, this.feedback.name, true);
                    course["a" /* CoreCourse */].checkModuleCompletion(this.courseId, this.module.completiondata);
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
        }
        /**
         * View entered.
         */
        ionViewDidEnter() {
            this.forceLeave = false;
        }
        /**
         * @inheritdoc
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave) {
                    return true;
                }
                if (!this.preview) {
                    const responses = feedback_helper["a" /* AddonModFeedbackHelper */].getPageItemsResponses(this.items);
                    if (this.items && !this.completed && this.originalData) {
                        // Form submitted. Check if there is any change.
                        if (!utils["a" /* CoreUtils */].basicLeftCompare(responses, this.originalData, 3)) {
                            yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                        }
                    }
                }
                return true;
            });
        }
        /**
         * Fetch all the data required for the view.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.module = yield course["a" /* CoreCourse */].getModule(this.cmId, this.courseId, undefined, true, false, this.currentSite.getId());
                    this.offline = !app["a" /* CoreApp */].isOnline();
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                        siteId: this.currentSite.getId(),
                    };
                    this.feedback = yield feedback["a" /* AddonModFeedback */].getFeedback(this.courseId, this.cmId);
                    this.title = this.feedback.name || this.title;
                    yield this.fetchAccessData(options);
                    let page = 0;
                    if (!this.preview && this.access.cansubmit && !this.access.isempty) {
                        page = (_a = this.currentPage) !== null && _a !== void 0 ? _a : yield this.fetchResumePage(options);
                    }
                    else {
                        this.preview = true;
                    }
                    yield this.fetchFeedbackPageData(page);
                }
                catch (message) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                    this.forceLeave = true;
                    services_navigator["a" /* CoreNavigator */].back();
                }
                finally {
                    this.feedbackLoaded = true;
                }
            });
        }
        /**
         * Fetch access information.
         *
         * @param options Options.
         * @return Promise resolved when done.
         */
        fetchAccessData(options) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.access = yield feedback["a" /* AddonModFeedback */].getFeedbackAccessInformation(this.feedback.id, options);
                }
                catch (error) {
                    if (this.offline || utils["a" /* CoreUtils */].isWebServiceError(error)) {
                        // Already offline or shouldn't go offline, fail.
                        throw error;
                    }
                    // If it fails, go offline.
                    this.offline = true;
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    this.access = yield feedback["a" /* AddonModFeedback */].getFeedbackAccessInformation(this.feedback.id, options);
                }
            });
        }
        /**
         * Get resume page from WS.
         *
         * @param options Options.
         * @return Promise resolved with the page to resume.
         */
        fetchResumePage(options) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    return yield feedback["a" /* AddonModFeedback */].getResumePage(this.feedback.id, options);
                }
                catch (error) {
                    if (this.offline || utils["a" /* CoreUtils */].isWebServiceError(error)) {
                        // Already offline or shouldn't go offline, fail.
                        throw error;
                    }
                    // Go offline.
                    this.offline = true;
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    return feedback["a" /* AddonModFeedback */].getResumePage(this.feedback.id, options);
                }
            });
        }
        /**
         * Fetch page data.
         *
         * @param page Page to load.
         * @return Promise resolved when done.
         */
        fetchFeedbackPageData(page = 0) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.items = [];
                const response = yield this.fetchPageItems(page);
                this.items = response.items
                    .map((itemData) => feedback_helper["a" /* AddonModFeedbackHelper */].getItemForm(itemData, this.preview))
                    .filter((itemData) => itemData); // Filter items with errors.
                if (!this.preview) {
                    const itemsCopy = utils["a" /* CoreUtils */].clone(this.items); // Copy the array to avoid modifications.
                    this.originalData = feedback_helper["a" /* AddonModFeedbackHelper */].getPageItemsResponses(itemsCopy);
                }
            });
        }
        /**
         * Fetch page items.
         *
         * @param page Page to get.
         * @return Promise resolved with WS response.
         */
        fetchPageItems(page) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const options = {
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    siteId: this.currentSite.getId(),
                };
                if (this.preview) {
                    const response = yield feedback["a" /* AddonModFeedback */].getItems(this.feedback.id, options);
                    return {
                        items: response.items,
                        warnings: response.warnings,
                        hasnextpage: false,
                        hasprevpage: false,
                    };
                }
                this.currentPage = page;
                let response;
                try {
                    response = yield feedback["a" /* AddonModFeedback */].getPageItemsWithValues(this.feedback.id, page, options);
                }
                catch (error) {
                    if (this.offline || utils["a" /* CoreUtils */].isWebServiceError(error)) {
                        // Already offline or shouldn't go offline, fail.
                        throw error;
                    }
                    // Go offline.
                    this.offline = true;
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    response = yield feedback["a" /* AddonModFeedback */].getPageItemsWithValues(this.feedback.id, page, options);
                }
                this.hasPrevPage = !!response.hasprevpage;
                this.hasNextPage = !!response.hasnextpage;
                return response;
            });
        }
        /**
         * Function to allow page navigation through the questions form.
         *
         * @param goPrevious If true it will go back to the previous page, if false, it will go forward.
         * @return Resolved when done.
         */
        gotoPage(goPrevious) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                this.feedbackLoaded = false;
                const responses = feedback_helper["a" /* AddonModFeedbackHelper */].getPageItemsResponses(this.items);
                const formHasErrors = this.items.some((item) => item.isEmpty || item.hasError);
                try {
                    // Sync other pages first.
                    yield utils["a" /* CoreUtils */].ignoreErrors(feedback_sync["a" /* AddonModFeedbackSync */].syncFeedback(this.feedback.id));
                    const response = yield feedback["a" /* AddonModFeedback */].processPage(this.feedback.id, this.currentPage, responses, {
                        goPrevious,
                        formHasErrors,
                        courseId: this.courseId,
                        cmId: this.cmId,
                    });
                    if (response.completed) {
                        // Form is completed, show completion message and buttons.
                        this.items = [];
                        this.completed = true;
                        this.completedOffline = !!response.offline;
                        this.completionPageContents = response.completionpagecontents;
                        this.siteAfterSubmit = response.siteaftersubmit;
                        events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'feedback' });
                        // Invalidate access information so user will see home page updated (continue form or completion messages).
                        yield Promise.all([
                            feedback["a" /* AddonModFeedback */].invalidateFeedbackAccessInformationData(this.feedback.id),
                            feedback["a" /* AddonModFeedback */].invalidateResumePageData(this.feedback.id),
                        ]);
                        // If form has been submitted, the info has been already invalidated but we should update index view.
                        events["b" /* CoreEvents */].trigger(feedback["b" /* AddonModFeedbackProvider */].FORM_SUBMITTED, {
                            feedbackId: this.feedback.id,
                            tab: 'overview',
                            offline: this.completedOffline,
                        });
                        yield this.fetchAccessData({
                            cmId: this.cmId,
                            readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                            siteId: this.currentSite.getId(),
                        });
                    }
                    else if (typeof response.jumpto != 'number' || response.jumpto == this.currentPage) {
                        // Errors on questions, stay in page.
                    }
                    else {
                        // Invalidate access information so user will see home page updated (continue form).
                        yield feedback["a" /* AddonModFeedback */].invalidateResumePageData(this.feedback.id);
                        events["b" /* CoreEvents */].trigger(feedback["b" /* AddonModFeedbackProvider */].FORM_SUBMITTED, {
                            feedbackId: this.feedback.id,
                            tab: 'overview',
                            offline: this.completedOffline,
                        });
                        // Fetch the new page.
                        yield this.fetchFeedbackPageData(response.jumpto);
                    }
                }
                catch (message) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                }
                finally {
                    this.feedbackLoaded = true;
                }
            });
        }
        /**
         * Function to link implemented features.
         */
        showAnalysis() {
            if (this.fromIndex) {
                // Previous page is the index page, go back.
                events["b" /* CoreEvents */].trigger(feedback["b" /* AddonModFeedbackProvider */].FORM_SUBMITTED, {
                    feedbackId: this.feedback.id,
                    tab: 'analysis',
                    offline: this.completedOffline,
                });
                services_navigator["a" /* CoreNavigator */].back();
                return;
            }
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(handlers_module["b" /* AddonModFeedbackModuleHandlerService */].PAGE_NAME + `/${this.courseId}/${this.cmId}`, {
                params: {
                    module: this.module,
                    tab: 'analysis',
                },
            });
        }
        /**
         * Function to go to the page after submit.
         */
        continue() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.siteAfterSubmit) {
                    return course_helper["a" /* CoreCourseHelper */].getAndOpenCourse(this.courseId, {}, this.currentSite.getId());
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    const treated = yield contentlinks_helper["a" /* CoreContentLinksHelper */].handleLink(this.siteAfterSubmit);
                    if (!treated) {
                        yield this.currentSite.openInBrowserWithAutoLoginIfSameSite(this.siteAfterSubmit);
                    }
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
            this.onlineObserver.unsubscribe();
        }
    }
    AddonModFeedbackFormPage.ɵfac = function AddonModFeedbackFormPage_Factory(t) { return new (t || AddonModFeedbackFormPage)(); };
    AddonModFeedbackFormPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFeedbackFormPage, selectors: [["page-addon-mod-feedback-form"]], viewQuery: function AddonModFeedbackFormPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 12, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], [3, "hideUntil"], [4, "ngIf"], ["class", "core-success-card", 4, "ngIf"], [1, "ion-no-margin"], [1, "ion-text-wrap"], [4, "ngFor", "ngForOf"], [1, "ion-text-wrap", "addon-mod_feedback-item", 3, "color"], [3, "position"], [3, "core-mark-required", 4, "ngIf"], ["type", "text", "autocorrect", "off", 3, "ngModel", "name", "maxlength", "required", "ngModelChange", 4, "ngIf"], [3, "required", "name", "ngModel", "ngModelChange", 4, "ngIf"], ["interface", "action-sheet", 3, "required", "name", "ngModel", "interfaceOptions", "ngModelChange", 4, "ngIf"], [3, "ngModel", "required", "name", "ngModelChange", 4, "ngIf"], [3, "core-mark-required"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId", "wsNotFiltered"], ["class", "addon-mod_feedback-postfix", 4, "ngIf"], [1, "addon-mod_feedback-postfix"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "wsNotFiltered", "courseId"], ["type", "text", "autocorrect", "off", 3, "ngModel", "name", "maxlength", "required", "ngModelChange"], ["type", "number", 3, "ngModel", "name", "required", "ngModelChange"], ["color", "danger", "class", "addon-mod_feedback-item-error", 4, "ngIf"], ["color", "danger", 1, "addon-mod_feedback-item-error"], [3, "required", "name", "ngModel", "ngModelChange"], ["interface", "action-sheet", 3, "required", "name", "ngModel", "interfaceOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "ngModel", "required", "name", "ngModelChange"], ["slot", "start", 3, "value"], ["value", "option.value", 3, "required", "name", "ngModel", "ngModelChange"], ["modelValueName", "value", 3, "publicKey", "model", 4, "ngIf"], ["class", "core-warning-card", 4, "ngIf"], ["modelValueName", "value", 3, "publicKey", "model"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], [1, "ion-align-items-center"], ["expand", "block", "fill", "outline", 1, "ion-text-wrap", 3, "click"], ["name", "fas-chevron-left", "slot", "start", "aria-hidden", "true"], ["expand", "block", 1, "ion-text-wrap", 3, "click"], ["name", "fas-chevron-right", "slot", "end", "aria-hidden", "true"], [1, "core-success-card"], ["name", "fas-check", "slot", "start", "aria-hidden", "true"], ["componentId", "componentId", "contextLevel", "module", 3, "component", "text", "contextInstanceId", "courseId"], ["name", "fas-chart-bar", "slot", "start", "aria-hidden", "true"]], template: function AddonModFeedbackFormPage_Template(rf, ctx) {
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
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "core-loading", 3);
                core["nd" /* ɵɵtemplate */](9, AddonModFeedbackFormPage_ng_container_9_Template, 11, 7, "ng-container", 4);
                core["nd" /* ɵɵtemplate */](10, AddonModFeedbackFormPage_ion_card_10_Template, 7, 3, "ion-card", 5);
                core["nd" /* ɵɵtemplate */](11, AddonModFeedbackFormPage_ion_card_11_Template, 5, 2, "ion-card", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.cmId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.feedbackLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.items && ctx.items.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.completed);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.completed && (ctx.access.canviewanalysis || ctx.hasNextPage));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], spacer["a" /* CoreSpacerComponent */], mark_required["a" /* CoreMarkRequiredComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], fesm2015_forms["n" /* MaxLengthValidator */], fesm2015_forms["C" /* RequiredValidator */], ionic_angular["Ib" /* NumericValueAccessor */], ionic_angular["ub" /* IonText */], ionic_angular["vb" /* IonTextarea */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["X" /* IonRadio */], ionic_angular["Lb" /* RadioValueAccessor */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */], recaptcha["a" /* CoreRecaptchaComponent */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */], ionic_angular["m" /* IonCard */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-mod_feedback-item[_ngcontent-%COMP%]   ion-label.label-stacked[_ngcontent-%COMP%]{margin:11px 0 10px;transform:none}[_nghost-%COMP%]   .addon-mod_feedback-item-error[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:8px}"] });
    return AddonModFeedbackFormPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/form/form.module.ts
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
        component: form_AddonModFeedbackFormPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let form_module_AddonModFeedbackFormPageModule = /*@__PURE__*/ (() => {
    class AddonModFeedbackFormPageModule {
    }
    AddonModFeedbackFormPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModFeedbackFormPageModule });
    AddonModFeedbackFormPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModFeedbackFormPageModule_Factory(t) { return new (t || AddonModFeedbackFormPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModFeedbackFormPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](form_module_AddonModFeedbackFormPageModule, { declarations: [form_AddonModFeedbackFormPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);