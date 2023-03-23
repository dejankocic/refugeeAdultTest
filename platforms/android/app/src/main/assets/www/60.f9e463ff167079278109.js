(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "TlsP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModLessonPlayerPageModule", function() { return /* binding */ player_module_AddonModLessonPlayerPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/url.ts
var url = __webpack_require__("mvS9");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/lesson/components/menu-modal/menu-modal.ts
var menu_modal = __webpack_require__("oxVp");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson.ts
var lesson = __webpack_require__("ovS5");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson-helper.ts
var lesson_helper = __webpack_require__("2kx2");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson-offline.ts
var lesson_offline = __webpack_require__("64ry");

// EXTERNAL MODULE: ./src/addons/mod/lesson/services/lesson-sync.ts
var lesson_sync = __webpack_require__("UkMa");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/timer/timer.ts
var timer = __webpack_require__("rztj");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// EXTERNAL MODULE: ./src/core/components/progress-bar/progress-bar.ts
var progress_bar = __webpack_require__("TKc2");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/lesson/pages/player/player.page.ts

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






























const _c0 = ["questionFormEl"];
function AddonModLessonPlayerPage_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 8);
        core["Mc" /* ɵɵlistener */]("click", function AddonModLessonPlayerPage_ion_button_8_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.showMenu(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_lesson.lessonmenu"));
    }
}
function AddonModLessonPlayerPage_ion_card_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 10);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 11);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.messages[0].message);
    }
}
function AddonModLessonPlayerPage_div_12_core_timer_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-timer", 18);
        core["Mc" /* ɵɵlistener */]("finished", function AddonModLessonPlayerPage_div_12_core_timer_1_Template_core_timer_finished_0_listener() { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](2); return ctx_r13.timeUp(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("endTime", ctx_r5.endTime)("timerText", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.mod_lesson.timeremaining"));
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModLessonPlayerPage_div_12_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "p");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](3, 1, "addon.mod_lesson.attempt", core["ad" /* ɵɵpureFunction1 */](4, _c1, ctx_r6.retake)));
    }
}
function AddonModLessonPlayerPage_div_12_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 20);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r7.pageData.ongoingscore, " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["zc" /* ɵɵelement */](1, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r15.component)("componentId", ctx_r15.lesson.coursemodule)("text", ctx_r15.pageContent)("contextInstanceId", ctx_r15.lesson.coursemodule)("courseId", ctx_r15.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ion_item_divider_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-divider", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["zc" /* ɵɵelement */](3, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r18.component)("componentId", ctx_r18.lesson == null ? null : ctx_r18.lesson.coursemodule)("text", ctx_r18.pageContent)("contextInstanceId", ctx_r18.lesson.coursemodule)("courseId", ctx_r18.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["zc" /* ɵɵelement */](1, "ion-input", 30);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](2, 5, "addon.mod_lesson.youranswer"));
        core["Vc" /* ɵɵproperty */]("type", ctx_r19.question.input.type)("id", ctx_r19.question.input.id)("formControlName", ctx_r19.question.input.name)("maxlength", ctx_r19.question.input.maxlength);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["zc" /* ɵɵelement */](1, "core-rich-text-editor", 31);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r23 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](2, 6, "addon.mod_lesson.youranswer"));
        core["Vc" /* ɵɵproperty */]("control", ctx_r23.question.control)("component", ctx_r23.component)("componentId", ctx_r23.lesson == null ? null : ctx_r23.lesson.coursemodule)("autoSave", true)("contextInstanceId", ctx_r23.lesson == null ? null : ctx_r23.lesson.coursemodule);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h3", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r24 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 6, "addon.mod_lesson.youranswer"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r24.component)("componentId", ctx_r24.lesson == null ? null : ctx_r24.lesson.coursemodule)("text", ctx_r24.question.useranswer)("contextInstanceId", ctx_r24.lesson == null ? null : ctx_r24.lesson.coursemodule)("courseId", ctx_r24.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_ion_item_1_Template, 3, 8, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_ion_item_2_Template, 7, 8, "ion-item", 14);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.question.textarea);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r20.question.textarea && ctx_r20.question.useranswer);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ion_radio_group_1_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](3, "ion-radio", 36);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r28 = ctx.$implicit;
        const ctx_r27 = core["Oc" /* ɵɵnextContext */](6);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("component", ctx_r27.component)("componentId", ctx_r27.lesson.coursemodule)("text", option_r28.text)("contextInstanceId", ctx_r27.lesson == null ? null : ctx_r27.lesson.coursemodule)("courseId", ctx_r27.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("id", option_r28.id)("value", option_r28.value)("disabled", option_r28.disabled);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ion_radio_group_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-radio-group", 34);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ion_radio_group_1_ion_item_1_Template, 4, 8, "ion-item", 35);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r25 = core["Oc" /* ɵɵnextContext */](5);
        core["Vc" /* ɵɵproperty */]("formControlName", ctx_r25.question.controlName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r25.question.options);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ng_container_2_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](3, "ion-checkbox", 37);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r30 = ctx.$implicit;
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](6);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("component", ctx_r29.component)("componentId", ctx_r29.lesson == null ? null : ctx_r29.lesson.coursemodule)("text", option_r30.text)("contextInstanceId", ctx_r29.lesson == null ? null : ctx_r29.lesson.coursemodule)("courseId", ctx_r29.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("id", option_r30.id)("formControlName", option_r30.name);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ng_container_2_ion_item_1_Template, 4, 7, "ion-item", 35);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r26.question.options);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ion_radio_group_1_Template, 2, 2, "ion-radio-group", 33);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 16);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r21.question.multi);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r21.question.multi);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_ion_item_1_ion_select_option_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 41);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const option_r34 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", option_r34.value);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", option_r34.label, " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 38);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 39);
        core["nd" /* ɵɵtemplate */](5, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_ion_item_1_ion_select_option_5_Template, 2, 2, "ion-select-option", 40);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const row_r32 = ctx.$implicit;
        const ctx_r31 = core["Oc" /* ɵɵnextContext */](5);
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-mod_lesson-matching-", row_r32.id, "");
        core["Vc" /* ɵɵproperty */]("component", ctx_r31.component)("componentId", ctx_r31.lesson == null ? null : ctx_r31.lesson.coursemodule)("text", row_r32.text)("contextInstanceId", ctx_r31.lesson == null ? null : ctx_r31.lesson.coursemodule)("courseId", ctx_r31.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("id", row_r32.id)("formControlName", row_r32.name);
        core["mc" /* ɵɵattribute */]("aria-labelledby", "addon-mod_lesson-matching-" + row_r32.id);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", row_r32.options);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_ion_item_1_Template, 6, 10, "ion-item", 35);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r22.question.rows);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 23, 24);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function AddonModLessonPlayerPage_div_12_ion_card_4_form_2_Template_form_ngSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r36); const ctx_r35 = core["Oc" /* ɵɵnextContext */](3); return ctx_r35.submitQuestion($event); });
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ion_item_divider_2_Template, 4, 5, "ion-item-divider", 14);
        core["Cc" /* ɵɵelementContainerStart */](3, 25);
        core["nd" /* ɵɵtemplate */](4, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ion_item_4_Template, 3, 7, "ion-item", 26);
        core["nd" /* ɵɵtemplate */](5, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_5_Template, 3, 2, "ng-container", 27);
        core["nd" /* ɵɵtemplate */](6, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_6_Template, 3, 2, "ng-container", 27);
        core["nd" /* ɵɵtemplate */](7, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_ng_container_7_Template, 2, 1, "ng-container", 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 28);
        core["pd" /* ɵɵtext */](9);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](10, "input", 29);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r16.questionForm);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r16.pageContent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitch", ctx_r16.question.template);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "shortanswer");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "essay");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "multichoice");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "matching");
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r16.question.submitLabel, " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_4_ion_item_1_Template, 2, 5, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_card_4_form_2_Template, 11, 8, "form", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r8.question && ctx_r8.pageContent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.question && ctx_r8.loaded);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_5_ion_grid_1_ion_col_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r43 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 46);
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 47);
        core["Mc" /* ɵɵlistener */]("click", function AddonModLessonPlayerPage_div_12_ion_list_5_ion_grid_1_ion_col_2_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r43); const button_r41 = ctx.$implicit; const ctx_r42 = core["Oc" /* ɵɵnextContext */](4); return ctx_r42.buttonClicked(button_r41.data); });
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const button_r41 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("id", button_r41.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", button_r41.content, " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_5_ion_grid_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-grid", 43);
        core["Ec" /* ɵɵelementStart */](1, "ion-row", 44);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_list_5_ion_grid_1_ion_col_2_Template, 3, 2, "ion-col", 45);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r37 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r37.pageButtons);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_5_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "span", 48);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "core-progress-bar", 49);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r38 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-mod_lesson-", ctx_r38.cmId, "-progress");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 4, "addon.mod_lesson.progresscompleted", core["ad" /* ɵɵpureFunction1 */](7, _c1, ctx_r38.pageData.progress)), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("ariaDescribedBy", "addon-mod_lesson-", ctx_r38.cmId, "-progress");
        core["Vc" /* ɵɵproperty */]("progress", ctx_r38.pageData.progress);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_5_div_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 10);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 11);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_lesson.progressbarteacherwarning2"));
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_list_5_ion_grid_1_Template, 3, 1, "ion-grid", 42);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_list_5_ion_item_2_Template, 6, 9, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonPlayerPage_div_12_ion_list_5_div_3_Template, 6, 3, "div", 6);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.pageButtons == null ? null : ctx_r9.pageButtons.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", (ctx_r9.lesson == null ? null : ctx_r9.lesson.progressbar) && !ctx_r9.canManage && ctx_r9.pageData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", (ctx_r9.lesson == null ? null : ctx_r9.lesson.progressbar) && ctx_r9.canManage);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 50);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 51);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_lesson.finishretakeoffline"));
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_card_header_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card-header", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-card-title");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_lesson.congratulations"));
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r45 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r45.eolData.notenoughtimespent.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r46 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r46.eolData.numberofpagesviewed.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r47 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r47.eolData.youshouldview.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r48 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r48.eolData.numberofcorrectanswers.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["zc" /* ɵɵelement */](1, "ion-label", 56);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r49 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("innerHTML", ctx_r49.eolData.displayscorewithessays.message, core["hd" /* ɵɵsanitizeHtml */]);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r50 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r50.eolData.displayscorewithoutessays.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r51 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r51.eolData.yourcurrentgradeisoutof.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r52 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r52.eolData.eolstudentoutoftimenoanswers.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r53 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r53.eolData.welldone.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "span", 48);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "core-progress-bar", 49);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r54 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-mod_lesson-", ctx_r54.cmId, "-progress-end");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 4, "addon.mod_lesson.progresscompleted", core["ad" /* ɵɵpureFunction1 */](7, _c1, ctx_r54.eolData.progresscompleted.value)), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("ariaDescribedBy", "addon-mod_lesson-", ctx_r54.cmId, "-progress-end");
        core["Vc" /* ɵɵproperty */]("progress", ctx_r54.eolData.progresscompleted.value);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r55 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r55.eolData.displayofgrade.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_button_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r61 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 57);
        core["Mc" /* ɵɵlistener */]("click", function AddonModLessonPlayerPage_div_12_ion_card_7_ion_button_13_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r61); const ctx_r60 = core["Oc" /* ɵɵnextContext */](3); return ctx_r60.reviewLesson(ctx_r60.reviewPageId); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_lesson.reviewlesson"), " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r57 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r57.eolData.modattemptsnoteacher.message);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_button_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 58);
        core["zc" /* ɵɵelement */](1, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r58 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r58.activityLink.href)("capture", true);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r58.activityLink.label)("contextInstanceId", ctx_r58.lesson == null ? null : ctx_r58.lesson.coursemodule)("courseId", ctx_r58.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 55);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r59 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r59.activityLink.label)("contextInstanceId", ctx_r59.lesson == null ? null : ctx_r59.lesson.coursemodule)("courseId", ctx_r59.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_card_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_card_7_ion_card_header_1_Template, 4, 3, "ion-card-header", 14);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_2_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_3_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](4, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_4_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](5, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_5_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](6, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_6_Template, 2, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](7, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_7_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](8, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_8_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](9, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_9_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](10, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_10_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](11, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_11_Template, 6, 9, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](12, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_12_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](13, AddonModLessonPlayerPage_div_12_ion_card_7_ion_button_13_Template, 3, 3, "ion-button", 53);
        core["nd" /* ɵɵtemplate */](14, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_14_Template, 3, 1, "ion-item", 52);
        core["nd" /* ɵɵtemplate */](15, AddonModLessonPlayerPage_div_12_ion_card_7_ion_button_15_Template, 2, 5, "ion-button", 54);
        core["nd" /* ɵɵtemplate */](16, AddonModLessonPlayerPage_div_12_ion_card_7_ion_item_16_Template, 3, 3, "ion-item", 52);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.gradelesson);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.notenoughtimespent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.numberofpagesviewed);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.youshouldview);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.numberofcorrectanswers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.displayscorewithessays);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r11.eolData.displayscorewithessays && ctx_r11.eolData.displayscorewithoutessays);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.yourcurrentgradeisoutof);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.eolstudentoutoftimenoanswers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.welldone);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.lesson.progressbar && ctx_r11.eolData.progresscompleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.displayofgrade);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.reviewlesson);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.eolData.modattemptsnoteacher);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.activityLink && ctx_r11.activityLink.formatted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.activityLink && !ctx_r11.activityLink.formatted);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r62 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r62.processData.ongoingscore);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["zc" /* ɵɵelement */](1, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r66 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r66.component)("componentId", ctx_r66.lesson == null ? null : ctx_r66.lesson.coursemodule)("text", ctx_r66.processData.feedback)("contextInstanceId", ctx_r66.lesson == null ? null : ctx_r66.lesson.coursemodule)("courseId", ctx_r66.courseId);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "p");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "addon.mod_lesson.gotoendoflesson"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.mod_lesson.or"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](9, 7, "addon.mod_lesson.continuetonextpage"));
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_div_2_Template, 2, 5, "div", 16);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_div_3_Template, 10, 9, "div", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r63 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r63.processData.reviewmode);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r63.review);
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r69 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 61);
        core["Mc" /* ɵɵlistener */]("click", function AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_3_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r69); const ctx_r68 = core["Oc" /* ɵɵnextContext */](3); return ctx_r68.changePage(ctx_r68.LESSON_EOL); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_lesson.finish"), " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r72 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 61);
        core["Mc" /* ɵɵlistener */]("click", function AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_4_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r72); const button_r70 = ctx.$implicit; const ctx_r71 = core["Oc" /* ɵɵnextContext */](3); return ctx_r71.changePage(button_r70.pageId, true); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const button_r70 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, button_r70.label), " ");
    }
}
function AddonModLessonPlayerPage_div_12_ion_list_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_1_Template, 3, 1, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_list_8_ion_item_2_Template, 4, 2, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_3_Template, 3, 3, "ion-button", 59);
        core["nd" /* ɵɵtemplate */](4, AddonModLessonPlayerPage_div_12_ion_list_8_ion_button_4_Template, 3, 3, "ion-button", 60);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.processData.ongoingscore && !ctx_r12.processData.reviewmode);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r12.processData.reviewmode || ctx_r12.review);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.review);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r12.processDataButtons);
    }
}
const _c2 = function (a0) { return { "addon-mod_lesson-slideshow": a0 }; };
const _c3 = function (a0, a1) { return { "width": a0, "height": a1 }; };
function AddonModLessonPlayerPage_div_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 12);
        core["nd" /* ɵɵtemplate */](1, AddonModLessonPlayerPage_div_12_core_timer_1_Template, 2, 4, "core-timer", 13);
        core["nd" /* ɵɵtemplate */](2, AddonModLessonPlayerPage_div_12_ion_item_2_Template, 4, 6, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](3, AddonModLessonPlayerPage_div_12_ion_item_3_Template, 2, 1, "ion-item", 15);
        core["nd" /* ɵɵtemplate */](4, AddonModLessonPlayerPage_div_12_ion_card_4_Template, 3, 2, "ion-card", 16);
        core["nd" /* ɵɵtemplate */](5, AddonModLessonPlayerPage_div_12_ion_list_5_Template, 4, 3, "ion-list", 16);
        core["nd" /* ɵɵtemplate */](6, AddonModLessonPlayerPage_div_12_ion_card_6_Template, 6, 3, "ion-card", 17);
        core["nd" /* ɵɵtemplate */](7, AddonModLessonPlayerPage_div_12_ion_card_7_Template, 17, 16, "ion-card", 16);
        core["nd" /* ɵɵtemplate */](8, AddonModLessonPlayerPage_div_12_ion_list_8_Template, 5, 4, "ion-list", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](10, _c2, ctx_r2.lesson.slideshow))("ngStyle", core["bd" /* ɵɵpureFunction2 */](12, _c3, ctx_r2.lessonWidth, ctx_r2.lessonHeight));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.endTime);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.showRetake && !ctx_r2.eolData && !ctx_r2.processData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.pageData && ctx_r2.pageData.ongoingscore && !ctx_r2.eolData && !ctx_r2.processData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.eolData && !ctx_r2.processData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.eolData && !ctx_r2.processData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.eolData && !ctx_r2.processData && (ctx_r2.eolData.offline == null ? null : ctx_r2.eolData.offline.value));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.eolData && !ctx_r2.processData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.processData);
    }
}
/**
 * Page that allows attempting and reviewing a lesson.
 */
let player_page_AddonModLessonPlayerPage = /*@__PURE__*/ (() => {
    class AddonModLessonPlayerPage {
        constructor(changeDetector, formBuilder) {
            this.changeDetector = changeDetector;
            this.formBuilder = formBuilder;
            this.component = lesson["b" /* AddonModLessonProvider */].COMPONENT;
            this.LESSON_EOL = lesson["b" /* AddonModLessonProvider */].LESSON_EOL;
            this.messages = []; // Messages to display to the user.
            this.processDataButtons = []; // Buttons to display after processing a page.
            this.forceLeave = false; // If true, don't perform any check when leaving the view.
            this.menuShown = false; // Whether menu is shown.
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.password = services_navigator["a" /* CoreNavigator */].getRouteParam('password');
                this.review = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('review');
                this.currentPage = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('pageId');
                this.retakeToReview = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('retake');
                try {
                    // Fetch the Lesson data.
                    const success = yield this.fetchLessonData();
                    if (success) {
                        // Review data loaded or new retake started, remove any retake being finished in sync.
                        lesson_sync["a" /* AddonModLessonSync */].deleteRetakeFinishedInSync(this.lesson.id);
                    }
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            if (this.lesson) {
                // Unblock the lesson so it can be synced.
                sync["a" /* CoreSync */].unblockOperation(this.component, this.lesson.id);
            }
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave || !this.questionForm) {
                    return true;
                }
                if (this.question && !this.eolData && !this.processData && this.originalData) {
                    // Question shown. Check if there is any change.
                    if (!utils["a" /* CoreUtils */].basicLeftCompare(this.questionForm.getRawValue(), this.originalData, 3)) {
                        yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                    }
                }
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                return true;
            });
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            if (this.menuShown) {
                singletons["x" /* ModalController */].dismiss();
            }
        }
        /**
         * A button was clicked.
         *
         * @param data Button data.
         */
        buttonClicked(data) {
            this.processPage(data);
        }
        /**
         * Call a function and go offline if allowed and the call fails.
         *
         * @param func Function to call.
         * @param options Options passed to the function.
         * @return Promise resolved in success, rejected otherwise.
         */
        callFunction(func, options) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    return yield func();
                }
                catch (error) {
                    if (this.offline || this.review || !lesson["a" /* AddonModLesson */].isLessonOffline(this.lesson)) {
                        // Already offline or not allowed.
                        throw error;
                    }
                    if (utils["a" /* CoreUtils */].isWebServiceError(error)) {
                        // WebService returned an error, cannot perform the action.
                        throw error;
                    }
                    // Go offline and retry.
                    this.offline = true;
                    // Get the possible jumps now.
                    this.jumps = yield lesson["a" /* AddonModLesson */].getPagesPossibleJumps(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 1 /* PREFER_CACHE */,
                    });
                    // Call the function again with offline mode and the new jumps.
                    options.readingStrategy = 1 /* PREFER_CACHE */;
                    options.jumps = this.jumps;
                    options.offline = true;
                    return func();
                }
            });
        }
        /**
         * Change the page from menu or when continuing from a feedback page.
         *
         * @param pageId Page to load.
         * @param ignoreCurrent If true, allow loading current page.
         * @return Promise resolved when done.
         */
        changePage(pageId, ignoreCurrent) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!ignoreCurrent && !this.eolData && this.currentPage == pageId) {
                    // Page already loaded, stop.
                    return;
                }
                this.loaded = true;
                this.messages = [];
                try {
                    yield this.loadPage(pageId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading page');
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Get the lesson data and load the page.
         *
         * @return Promise resolved with true if success, resolved with false otherwise.
         */
        fetchLessonData() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.lesson = yield lesson["a" /* AddonModLesson */].getLesson(this.courseId, this.cmId);
                    this.title = this.lesson.name; // Temporary title.
                    // Block the lesson so it cannot be synced.
                    sync["a" /* CoreSync */].blockOperation(this.component, this.lesson.id);
                    // Wait for any ongoing sync to finish. We won't sync a lesson while it's being played.
                    yield lesson_sync["a" /* AddonModLessonSync */].waitForSync(this.lesson.id);
                    // If lesson has offline data already, use offline mode.
                    this.offline = yield lesson_offline["a" /* AddonModLessonOffline */].hasOfflineData(this.lesson.id);
                    if (!this.offline && !app["a" /* CoreApp */].isOnline() && lesson["a" /* AddonModLesson */].isLessonOffline(this.lesson) && !this.review) {
                        // Lesson doesn't have offline data, but it allows offline and the device is offline. Use offline mode.
                        this.offline = true;
                    }
                    const options = {
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    this.accessInfo = yield this.callFunction(lesson["a" /* AddonModLesson */].getAccessInformation.bind(lesson["a" /* AddonModLesson */].instance, this.lesson.id, options), options);
                    const promises = [];
                    this.canManage = this.accessInfo.canmanage;
                    this.retake = this.accessInfo.attemptscount;
                    this.showRetake = !this.currentPage && this.retake > 0; // Only show it in first page if it isn't the first retake.
                    if (this.accessInfo.preventaccessreasons.length) {
                        // If it's a password protected lesson and we have the password, allow playing it.
                        const preventReason = lesson["a" /* AddonModLesson */].getPreventAccessReason(this.accessInfo, !!this.password, this.review);
                        if (preventReason) {
                            // Lesson cannot be played, show message and go back.
                            throw new errors_error["a" /* CoreError */](preventReason.message);
                        }
                    }
                    if (this.review && this.retakeToReview != this.accessInfo.attemptscount - 1) {
                        // Reviewing a retake that isn't the last one. Error.
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_lesson.errorreviewretakenotlast'));
                    }
                    if (this.password) {
                        // Lesson uses password, get the whole lesson object.
                        const options = {
                            password: this.password,
                            cmId: this.cmId,
                            readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                        };
                        promises.push(this.callFunction(lesson["a" /* AddonModLesson */].getLessonWithPassword.bind(lesson["a" /* AddonModLesson */].instance, this.lesson.id, options), options).then((lesson) => {
                            this.lesson = lesson;
                            return;
                        }));
                    }
                    if (this.offline) {
                        // Offline mode, get the list of possible jumps to allow navigation.
                        promises.push(lesson["a" /* AddonModLesson */].getPagesPossibleJumps(this.lesson.id, {
                            cmId: this.cmId,
                            readingStrategy: 1 /* PREFER_CACHE */,
                        }).then((jumpList) => {
                            this.jumps = jumpList;
                            return;
                        }));
                    }
                    yield Promise.all(promises);
                    this.mediaFile = (_a = this.lesson.mediafiles) === null || _a === void 0 ? void 0 : _a[0];
                    this.lessonWidth = this.lesson.slideshow ? dom["a" /* CoreDomUtils */].formatPixelsSize(this.lesson.mediawidth) : '';
                    this.lessonHeight = this.lesson.slideshow ? dom["a" /* CoreDomUtils */].formatPixelsSize(this.lesson.mediaheight) : '';
                    yield this.launchRetake(this.currentPage);
                    return true;
                }
                catch (error) {
                    if (this.review && this.retakeToReview && utils["a" /* CoreUtils */].isWebServiceError(error)) {
                        // The user cannot review the retake. Unmark the retake as being finished in sync.
                        yield lesson_sync["a" /* AddonModLessonSync */].deleteRetakeFinishedInSync(this.lesson.id);
                    }
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                    this.forceLeave = true;
                    services_navigator["a" /* CoreNavigator */].back();
                    return false;
                }
            });
        }
        /**
         * Finish the retake.
         *
         * @param outOfTime Whether the retake is finished because the user ran out of time.
         * @return Promise resolved when done.
         */
        finishRetake(outOfTime) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.messages = [];
                if (this.offline && app["a" /* CoreApp */].isOnline()) {
                    // Offline mode but the app is online. Try to sync the data.
                    const result = yield utils["a" /* CoreUtils */].ignoreErrors(lesson_sync["a" /* AddonModLessonSync */].syncLesson(this.lesson.id, true, true));
                    if ((_a = result === null || result === void 0 ? void 0 : result.warnings) === null || _a === void 0 ? void 0 : _a.length) {
                        // Some data was deleted. Check if the retake has changed.
                        const info = yield lesson["a" /* AddonModLesson */].getAccessInformation(this.lesson.id, {
                            cmId: this.cmId,
                        });
                        if (info.attemptscount != this.accessInfo.attemptscount) {
                            // The retake has changed. Leave the view and show the error.
                            this.forceLeave = true;
                            services_navigator["a" /* CoreNavigator */].back();
                            throw new errors_error["a" /* CoreError */](result.warnings[0]);
                        }
                        // Retake hasn't changed, show the warning and finish the retake in offline.
                        dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                    }
                    this.offline = false;
                }
                // Now finish the retake.
                const options = {
                    password: this.password,
                    outOfTime,
                    review: this.review,
                    offline: this.offline,
                    accessInfo: this.accessInfo,
                };
                const data = yield this.callFunction(lesson["a" /* AddonModLesson */].finishRetake.bind(lesson["a" /* AddonModLesson */].instance, this.lesson, this.courseId, options), options);
                this.title = this.lesson.name;
                this.eolData = data.data;
                this.messages = this.messages.concat(data.messages);
                this.processData = undefined;
                events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'lesson' });
                // Format activity link if present.
                if (this.eolData.activitylink) {
                    this.activityLink = lesson_helper["a" /* AddonModLessonHelper */].formatActivityLink(this.eolData.activitylink.value);
                }
                else {
                    this.activityLink = undefined;
                }
                // Format review lesson if present.
                if (this.eolData.reviewlesson) {
                    const params = url["a" /* CoreUrlUtils */].extractUrlParams(this.eolData.reviewlesson.value);
                    if (!params || !params.pageid) {
                        // No pageid in the URL, the user cannot review (probably didn't answer any question).
                        delete this.eolData.reviewlesson;
                    }
                    else {
                        this.reviewPageId = Number(params.pageid);
                    }
                }
            });
        }
        /**
         * Jump to a certain page after performing an action.
         *
         * @param pageId The page to load.
         * @return Promise resolved when done.
         */
        jumpToPage(pageId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (pageId === 0) {
                    // Not a valid page, return to entry view.
                    // This happens, for example, when the user clicks to go to previous page and there is no previous page.
                    this.forceLeave = true;
                    services_navigator["a" /* CoreNavigator */].back();
                    return;
                }
                else if (pageId == lesson["b" /* AddonModLessonProvider */].LESSON_EOL) {
                    // End of lesson reached.
                    return this.finishRetake();
                }
                // Load new page.
                this.messages = [];
                return this.loadPage(pageId);
            });
        }
        /**
         * Start or continue a retake.
         *
         * @param pageId The page to load.
         * @return Promise resolved when done.
         */
        launchRetake(pageId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let data;
                if (this.review) {
                    // Review mode, no need to launch the retake.
                }
                else if (!this.offline) {
                    // Not in offline mode, launch the retake.
                    data = yield lesson["a" /* AddonModLesson */].launchRetake(this.lesson.id, this.password, pageId);
                }
                else {
                    // Check if there is a finished offline retake.
                    const finished = yield lesson_offline["a" /* AddonModLessonOffline */].hasFinishedRetake(this.lesson.id);
                    if (finished) {
                        // Always show EOL page.
                        pageId = lesson["b" /* AddonModLessonProvider */].LESSON_EOL;
                    }
                }
                this.currentPage = pageId || this.accessInfo.firstpageid;
                this.messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
                if (this.lesson.timelimit && !this.accessInfo.canmanage) {
                    // Get the last lesson timer.
                    const timers = yield lesson["a" /* AddonModLesson */].getTimers(this.lesson.id, {
                        cmId: this.cmId,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    });
                    this.endTime = timers[timers.length - 1].starttime + this.lesson.timelimit;
                }
                return this.loadPage(this.currentPage);
            });
        }
        /**
         * Load the lesson menu.
         *
         * @return Promise resolved when done.
         */
        loadMenu() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.loadingMenu) {
                    // Already loading.
                    return;
                }
                try {
                    this.loadingMenu = true;
                    const options = {
                        password: this.password,
                        cmId: this.cmId,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    };
                    const pages = yield this.callFunction(lesson["a" /* AddonModLesson */].getPages.bind(lesson["a" /* AddonModLesson */].instance, this.lesson.id, options), options);
                    this.lessonPages = pages.map((entry) => entry.page);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading menu.');
                }
                finally {
                    this.loadingMenu = false;
                }
            });
        }
        /**
         * Load a certain page.
         *
         * @param pageId The page to load.
         * @return Promise resolved when done.
         */
        loadPage(pageId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (pageId == lesson["b" /* AddonModLessonProvider */].LESSON_EOL) {
                    // End of lesson reached.
                    return this.finishRetake();
                }
                const options = {
                    password: this.password,
                    review: this.review,
                    includeContents: true,
                    cmId: this.cmId,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    accessInfo: this.accessInfo,
                    jumps: this.jumps,
                    includeOfflineData: true,
                };
                const data = yield this.callFunction(lesson["a" /* AddonModLesson */].getPageData.bind(lesson["a" /* AddonModLesson */].instance, this.lesson, pageId, options), options);
                if (data.newpageid == lesson["b" /* AddonModLessonProvider */].LESSON_EOL) {
                    // End of lesson reached.
                    return this.finishRetake();
                }
                this.pageData = data;
                this.title = data.page.title;
                this.pageContent = lesson_helper["a" /* AddonModLessonHelper */].getPageContentsFromPageData(data);
                this.loaded = true;
                this.currentPage = pageId;
                this.messages = this.messages.concat(data.messages);
                // Page loaded, hide EOL and feedback data if shown.
                this.eolData = this.processData = undefined;
                if (lesson["a" /* AddonModLesson */].isQuestionPage(data.page.type)) {
                    // Create an empty FormGroup without controls, they will be added in getQuestionFromPageData.
                    this.questionForm = this.formBuilder.group({});
                    this.pageButtons = [];
                    this.question = lesson_helper["a" /* AddonModLessonHelper */].getQuestionFromPageData(this.questionForm, data);
                    this.originalData = this.questionForm.getRawValue(); // Use getRawValue to include disabled values.
                }
                else {
                    this.pageButtons = lesson_helper["a" /* AddonModLessonHelper */].getPageButtonsFromHtml(data.pagecontent || '');
                    this.question = undefined;
                    this.originalData = undefined;
                }
                // Don't display the navigation menu in review mode, using them displays errors.
                if (data.displaymenu && !this.displayMenu && !this.review) {
                    // Load the menu.
                    this.loadMenu();
                }
                this.displayMenu = !this.review && !!data.displaymenu;
                if (!this.firstPageLoaded) {
                    this.firstPageLoaded = true;
                }
                else {
                    this.showRetake = false;
                }
            });
        }
        /**
         * Process a page, sending some data.
         *
         * @param data The data to send.
         * @param formSubmitted Whether a form was submitted.
         * @return Promise resolved when done.
         */
        processPage(data, formSubmitted) {
            var _a, _b;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loaded = false;
                const options = {
                    password: this.password,
                    review: this.review,
                    offline: this.offline,
                    accessInfo: this.accessInfo,
                    jumps: this.jumps,
                };
                try {
                    const result = yield this.callFunction(lesson["a" /* AddonModLesson */].processPage.bind(lesson["a" /* AddonModLesson */].instance, this.lesson, this.courseId, this.pageData, data, options), options);
                    if (formSubmitted) {
                        singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, result.sent, sites["b" /* CoreSites */].getCurrentSiteId());
                    }
                    if (!this.offline && !this.review && lesson["a" /* AddonModLesson */].isLessonOffline(this.lesson)) {
                        // Lesson allows offline and the user changed some data in server. Update cached data.
                        const retake = this.accessInfo.attemptscount;
                        const options = {
                            cmId: this.cmId,
                            readingStrategy: 2 /* ONLY_NETWORK */,
                        };
                        // Update in background the list of content pages viewed or question attempts.
                        if (lesson["a" /* AddonModLesson */].isQuestionPage(((_b = (_a = this.pageData) === null || _a === void 0 ? void 0 : _a.page) === null || _b === void 0 ? void 0 : _b.type) || -1)) {
                            lesson["a" /* AddonModLesson */].getQuestionsAttemptsOnline(this.lesson.id, retake, options);
                        }
                        else {
                            lesson["a" /* AddonModLesson */].getContentPagesViewedOnline(this.lesson.id, retake, options);
                        }
                    }
                    if (result.nodefaultresponse || result.inmediatejump) {
                        // Don't display feedback or force a redirect to a new page. Load the new page.
                        return yield this.jumpToPage(result.newpageid);
                    }
                    // Not inmediate jump, show the feedback.
                    result.feedback = lesson_helper["a" /* AddonModLessonHelper */].removeQuestionFromFeedback(result.feedback);
                    this.messages = result.messages;
                    this.processData = result;
                    this.processDataButtons = [];
                    if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                        !result.maxattemptsreached && !result.reviewmode) {
                        // User can try again, show button to do so.
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.reviewquestionback',
                            pageId: this.currentPage,
                        });
                    }
                    // Button to continue.
                    if (this.lesson.review && !result.correctanswer && !result.noanswer && !result.isessayquestion &&
                        !result.maxattemptsreached) {
                        /* If both the "Yes, I'd like to try again" and "No, I just want to go on to the next question" point to the
                            same page then don't show the "No, I just want to go on to the next question" button. It's confusing. */
                        if (this.pageData.page.id != result.newpageid) {
                            // Button to continue the lesson (the page to go is configured by the teacher).
                            this.processDataButtons.push({
                                label: 'addon.mod_lesson.reviewquestioncontinue',
                                pageId: result.newpageid,
                            });
                        }
                    }
                    else {
                        this.processDataButtons.push({
                            label: 'addon.mod_lesson.continue',
                            pageId: result.newpageid,
                        });
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error processing page');
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Review the lesson.
         *
         * @param pageId Page to load.
         */
        reviewLesson(pageId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loaded = false;
                this.review = true;
                this.offline = false; // Don't allow offline mode in review.
                try {
                    yield this.loadPage(pageId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading page');
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Submit a question.
         *
         * @param e Event.
         */
        submitQuestion(e) {
            e.preventDefault();
            e.stopPropagation();
            this.loaded = false;
            // Use getRawValue to include disabled values.
            const data = lesson_helper["a" /* AddonModLessonHelper */].prepareQuestionData(this.question, this.questionForm.getRawValue());
            this.processPage(data, true).finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Time up.
         */
        timeUp() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Time up called, hide the timer.
                this.endTime = undefined;
                this.loaded = false;
                try {
                    yield this.finishRetake(true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error finishing attempt');
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Show the navigation modal.
         *
         * @return Promise resolved when done.
         */
        showMenu() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.menuShown = true;
                yield dom["a" /* CoreDomUtils */].openSideModal({
                    component: menu_modal["a" /* AddonModLessonMenuModalPage */],
                    componentProps: {
                        pageInstance: this,
                    },
                });
                this.menuShown = false;
            });
        }
    }
    AddonModLessonPlayerPage.ɵfac = function AddonModLessonPlayerPage_Factory(t) { return new (t || AddonModLessonPlayerPage)(core["yc" /* ɵɵdirectiveInject */](core["j" /* ChangeDetectorRef */]), core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    AddonModLessonPlayerPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModLessonPlayerPage, selectors: [["page-addon-mod-lesson-player"]], viewQuery: function AddonModLessonPlayerPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 13, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "click", 4, "ngIf"], [3, "hideUntil"], ["class", "core-info-card", 4, "ngIf"], [3, "ngClass", "ngStyle", 4, "ngIf"], ["fill", "clear", 3, "click"], ["name", "fas-bookmark", "slot", "icon-only", "aria-hidden", "true"], [1, "core-info-card"], ["name", "fas-info-circle", "slot", "start", "aria-hidden", "true"], [3, "ngClass", "ngStyle"], [3, "endTime", "timerText", "finished", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "addon-mod_lesson-ongoingscore ion-text-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "core-warning-card", 4, "ngIf"], [3, "endTime", "timerText", "finished"], [1, "ion-text-wrap"], [1, "addon-mod_lesson-ongoingscore", "ion-text-wrap"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"], [3, "formGroup", "ngSubmit"], ["questionFormEl", ""], [3, "ngSwitch"], ["class", "ion-text-wrap", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["expand", "block", "type", "submit", 1, "ion-text-wrap", "ion-margin", "button-no-uppercase"], ["type", "submit", 1, "core-submit-hidden-enter"], ["autocorrect", "off", 3, "type", "placeholder", "id", "formControlName", "maxlength"], ["contextLevel", "module", "elementId", "answer_editor", 3, "placeholder", "control", "component", "componentId", "autoSave", "contextInstanceId"], [1, "item-heading"], [3, "formControlName", 4, "ngIf"], [3, "formControlName"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], ["slot", "end", 3, "id", "value", "disabled"], ["slot", "end", 3, "id", "formControlName"], ["contextLevel", "module", 3, "id", "component", "componentId", "text", "contextInstanceId", "courseId"], ["interface", "action-sheet", 3, "id", "formControlName"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "ion-text-wrap addon-mod_lesson-pagebuttons", 4, "ngIf"], [1, "ion-text-wrap", "addon-mod_lesson-pagebuttons"], [1, "ion-align-items-center"], ["size", "12", "size-md", "6", "size-lg", "3", "col-xl", "", 4, "ngFor", "ngForOf"], ["size", "12", "size-md", "6", "size-lg", "3", "col-xl", ""], ["expand", "block", "fill", "outline", 1, "ion-text-wrap", "button-no-uppercase", 3, "id", "click"], [3, "id"], [3, "progress", "ariaDescribedBy"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], ["class", "ion-text-wrap", "lines", "none", 4, "ngIf"], ["expand", "block", "class", "ion-text-wrap ion-margin button-no-uppercase", 3, "click", 4, "ngIf"], ["expand", "block", "color", "light", "core-link", "", "class", "ion-text-wrap ion-margin button-no-uppercase", 3, "href", "capture", 4, "ngIf"], ["lines", "none", 1, "ion-text-wrap"], [3, "innerHTML"], ["expand", "block", 1, "ion-text-wrap", "ion-margin", "button-no-uppercase", 3, "click"], ["expand", "block", "color", "light", "core-link", "", 1, "ion-text-wrap", "ion-margin", "button-no-uppercase", 3, "href", "capture"], ["expand", "block", "class", "ion-text-wrap ion-margin", "color", "light", 3, "click", 4, "ngIf"], ["expand", "block", "class", "ion-text-wrap ion-margin", "color", "light", 3, "click", 4, "ngFor", "ngForOf"], ["expand", "block", "color", "light", 1, "ion-text-wrap", "ion-margin", 3, "click"]], template: function AddonModLessonPlayerPage_Template(rf, ctx) {
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
                core["nd" /* ɵɵtemplate */](8, AddonModLessonPlayerPage_ion_button_8_Template, 3, 3, "ion-button", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonModLessonPlayerPage_ion_card_11_Template, 5, 1, "ion-card", 6);
                core["nd" /* ɵɵtemplate */](12, AddonModLessonPlayerPage_div_12_Template, 9, 15, "div", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.lesson == null ? null : ctx.lesson.coursemodule)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.displayMenu || ctx.mediaFile);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.lesson && (ctx.messages == null ? null : ctx.messages.length));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.lesson);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["q" /* NgClass */], common["w" /* NgStyle */], timer["a" /* CoreTimerComponent */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], common["x" /* NgSwitch */], common["y" /* NgSwitchCase */], ionic_angular["I" /* IonItemDivider */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], fesm2015_forms["n" /* MaxLengthValidator */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["Nb" /* SelectValueAccessor */], common["s" /* NgForOf */], ionic_angular["X" /* IonRadio */], ionic_angular["Lb" /* RadioValueAccessor */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */], ionic_angular["kb" /* IonSelect */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["O" /* IonList */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], progress_bar["a" /* CoreProgressBarComponent */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], directives_link["a" /* CoreLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]{--background-odd:var(--gray-lighter)}body.dark[_nghost-%COMP%], body.dark   [_nghost-%COMP%]{--background-odd:var(--gray-darker)}[_nghost-%COMP%]     .addon-mod_lesson-slideshow{max-width:100%;max-height:100%;margin:0 auto}[_nghost-%COMP%]     .studentanswer{-webkit-padding-start:8px;padding-inline-start:8px}[_nghost-%COMP%]     table{width:100%;margin-top:1.5rem}[_nghost-%COMP%]     table tr:nth-child(odd){background-color:var(--background-odd)}[_nghost-%COMP%]     table tr:last-child td{border-bottom:0}[_nghost-%COMP%]     table td{padding:5px;line-height:1.5;border-bottom:1px solid var(--gray)}"] });
    return AddonModLessonPlayerPage;
})();

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// CONCATENATED MODULE: ./src/addons/mod/lesson/pages/player/player.module.ts
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
        component: player_page_AddonModLessonPlayerPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let player_module_AddonModLessonPlayerPageModule = /*@__PURE__*/ (() => {
    class AddonModLessonPlayerPageModule {
    }
    AddonModLessonPlayerPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModLessonPlayerPageModule });
    AddonModLessonPlayerPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModLessonPlayerPageModule_Factory(t) { return new (t || AddonModLessonPlayerPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreEditorComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModLessonPlayerPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](player_module_AddonModLessonPlayerPageModule, { declarations: [player_page_AddonModLessonPlayerPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreEditorComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);