(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "YHcW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarEditEventPageModule", function() { return /* binding */ edit_event_module_AddonCalendarEditEventPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var services_courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar.ts
var calendar = __webpack_require__("SmTL");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-offline.ts
var calendar_offline = __webpack_require__("Lc7R");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-helper.ts
var calendar_helper = __webpack_require__("n6RP");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-sync.ts
var calendar_sync = __webpack_require__("+lfu");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/features/filter/services/filter-helper.ts
var filter_helper = __webpack_require__("D2MD");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/mark-required/mark-required.ts
var mark_required = __webpack_require__("FasJ");

// EXTERNAL MODULE: ./src/core/components/input-errors/input-errors.ts
var input_errors = __webpack_require__("FTxb");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/calendar/pages/edit-event/edit-event.page.ts

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































const _c0 = ["editEventForm"];
function AddonCalendarEditEventPage_form_13_p_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 37);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r2.eventTypes[0].name));
    }
}
function AddonCalendarEditEventPage_form_13_ion_select_24_ion_select_option_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 40);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const type_r15 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", type_r15.value);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, type_r15.name), " ");
    }
}
const _c1 = function (a0) { return { header: a0 }; };
function AddonCalendarEditEventPage_form_13_ion_select_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select", 38);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, AddonCalendarEditEventPage_form_13_ion_select_24_ion_select_option_2_Template, 3, 4, "ion-select-option", 39);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](4, _c1, core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.calendar.eventkind")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.eventTypes);
    }
}
function AddonCalendarEditEventPage_form_13_ion_item_25_ion_select_option_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 40);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const category_r17 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", category_r17.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", category_r17.name, " ");
    }
}
function AddonCalendarEditEventPage_form_13_ion_item_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-select", 41);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["nd" /* ɵɵtemplate */](8, AddonCalendarEditEventPage_form_13_ion_item_25_ion_select_option_8_Template, 2, 2, "ion-select-option", 39);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.category"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 7, "core.noselection"))("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](11, _c1, core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.category")));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.categories);
    }
}
function AddonCalendarEditEventPage_form_13_ion_item_26_ion_select_option_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 40);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r19 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", course_r19.id);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](course_r19.fullname);
    }
}
function AddonCalendarEditEventPage_form_13_ion_item_26_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-select", 42);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["nd" /* ɵɵtemplate */](8, AddonCalendarEditEventPage_form_13_ion_item_26_ion_select_option_8_Template, 2, 2, "ion-select-option", 39);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.course"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 7, "core.noselection"))("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](11, _c1, core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.course")));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r5.courses);
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_select_option_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 40);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r24 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", course_r24.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", course_r24.fullname, " ");
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 45);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.coursenogroups"));
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_11_ion_select_option_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 40);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const group_r26 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", group_r26.id);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](group_r26.name);
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 10);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-select", 46);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["nd" /* ɵɵtemplate */](8, AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_11_ion_select_option_8_Template, 2, 2, "ion-select-option", 39);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.group"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 7, "core.noselection"))("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](11, _c1, core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.group")));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r22.groups);
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_12_ion_spinner_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner");
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.loading"));
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_12_ion_spinner_2_Template, 2, 3, "ion-spinner", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r23 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r23.loadingGroups);
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 10);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-select", 43);
        core["Mc" /* ɵɵlistener */]("ionChange", function AddonCalendarEditEventPage_form_13_ng_container_27_Template_ion_select_ionChange_6_listener() { core["gd" /* ɵɵrestoreView */](_r29); const ctx_r28 = core["Oc" /* ɵɵnextContext */](2); return ctx_r28.groupCourseSelected(); });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["nd" /* ɵɵtemplate */](9, AddonCalendarEditEventPage_form_13_ng_container_27_ion_select_option_9_Template, 2, 2, "ion-select-option", 39);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_10_Template, 5, 3, "ion-item", 44);
        core["nd" /* ɵɵtemplate */](11, AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_11_Template, 9, 13, "ion-item", 17);
        core["nd" /* ɵɵtemplate */](12, AddonCalendarEditEventPage_form_13_ng_container_27_ion_item_12_Template, 3, 1, "ion-item", 17);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 8, "core.course"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](7, 10, "core.noselection"))("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](14, _c1, core["Qc" /* ɵɵpipeBind1 */](8, 12, "core.course")));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r6.courses);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r6.loadingGroups && ctx_r6.courseGroupSet && !ctx_r6.groups.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r6.loadingGroups && ctx_r6.groups.length > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.loadingGroups);
    }
}
function AddonCalendarEditEventPage_form_13_ion_icon_29_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 47);
    }
}
function AddonCalendarEditEventPage_form_13_ion_icon_30_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 48);
    }
}
function AddonCalendarEditEventPage_form_13_p_32_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 24);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.showmore"));
    }
}
function AddonCalendarEditEventPage_form_13_p_33_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 24);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.showless"));
    }
}
function AddonCalendarEditEventPage_form_13_ng_container_85_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 49);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 24);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](6, "ion-checkbox", 50);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](8, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](12, "ion-input", 51);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.calendar.repeatevent"));
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 5, "addon.calendar.repeatweeksl"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r11.form.controls.repeat.value);
    }
}
const _c2 = function (a0) { return { $a: a0 }; };
function AddonCalendarEditEventPage_form_13_div_86_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 27);
        core["Ec" /* ɵɵelementStart */](1, "ion-radio-group", 52);
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider", 29);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 24);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-item");
        core["Ec" /* ɵɵelementStart */](8, "ion-label");
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](12, "ion-radio", 53);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-item");
        core["Ec" /* ɵɵelementStart */](14, "ion-label");
        core["Ec" /* ɵɵelementStart */](15, "p");
        core["pd" /* ɵɵtext */](16);
        core["Pc" /* ɵɵpipe */](17, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](18, "ion-radio", 54);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 3, "addon.calendar.repeatedevents"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](11, 5, "addon.calendar.repeateditall", core["ad" /* ɵɵpureFunction1 */](10, _c2, ctx_r12.otherEventsCount)));
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 8, "addon.calendar.repeateditthis"));
    }
}
function AddonCalendarEditEventPage_form_13_ion_col_94_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 55);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarEditEventPage_form_13_ion_col_94_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r31); const ctx_r30 = core["Oc" /* ɵɵnextContext */](2); return ctx_r30.discard(); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.discard"), " ");
    }
}
function AddonCalendarEditEventPage_form_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 6, 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](3, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](4, "p", 10);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "ion-input", 11);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["zc" /* ɵɵelement */](9, "core-input-errors", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](11, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](12, "p", 10);
        core["pd" /* ɵɵtext */](13);
        core["Pc" /* ɵɵpipe */](14, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](15, "ion-datetime", 13);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["zc" /* ɵɵelement */](17, "core-input-errors", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](18, "ion-item", 14);
        core["Ec" /* ɵɵelementStart */](19, "ion-label");
        core["Ec" /* ɵɵelementStart */](20, "p", 10);
        core["pd" /* ɵɵtext */](21);
        core["Pc" /* ɵɵpipe */](22, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](23, AddonCalendarEditEventPage_form_13_p_23_Template, 3, 3, "p", 15);
        core["nd" /* ɵɵtemplate */](24, AddonCalendarEditEventPage_form_13_ion_select_24_Template, 3, 6, "ion-select", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](25, AddonCalendarEditEventPage_form_13_ion_item_25_Template, 9, 13, "ion-item", 17);
        core["nd" /* ɵɵtemplate */](26, AddonCalendarEditEventPage_form_13_ion_item_26_Template, 9, 13, "ion-item", 17);
        core["nd" /* ɵɵtemplate */](27, AddonCalendarEditEventPage_form_13_ng_container_27_Template, 13, 16, "ng-container", 18);
        core["Ec" /* ɵɵelementStart */](28, "ion-item", 19);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarEditEventPage_form_13_Template_ion_item_click_28_listener() { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r32 = core["Oc" /* ɵɵnextContext */](); return ctx_r32.toggleAdvanced(); });
        core["nd" /* ɵɵtemplate */](29, AddonCalendarEditEventPage_form_13_ion_icon_29_Template, 1, 0, "ion-icon", 20);
        core["nd" /* ɵɵtemplate */](30, AddonCalendarEditEventPage_form_13_ion_icon_30_Template, 1, 0, "ion-icon", 21);
        core["Ec" /* ɵɵelementStart */](31, "ion-label");
        core["nd" /* ɵɵtemplate */](32, AddonCalendarEditEventPage_form_13_p_32_Template, 3, 3, "p", 22);
        core["nd" /* ɵɵtemplate */](33, AddonCalendarEditEventPage_form_13_p_33_Template, 3, 3, "p", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](34, "div", 23);
        core["Ec" /* ɵɵelementStart */](35, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](36, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](37, "p", 24);
        core["pd" /* ɵɵtext */](38);
        core["Pc" /* ɵɵpipe */](39, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](40, "core-rich-text-editor", 25);
        core["Pc" /* ɵɵpipe */](41, "translate");
        core["Pc" /* ɵɵpipe */](42, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](43, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](44, "ion-label", 9);
        core["Ec" /* ɵɵelementStart */](45, "p", 24);
        core["pd" /* ɵɵtext */](46);
        core["Pc" /* ɵɵpipe */](47, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](48, "ion-input", 26);
        core["Pc" /* ɵɵpipe */](49, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](50, "div", 27);
        core["Ec" /* ɵɵelementStart */](51, "ion-radio-group", 28);
        core["Ec" /* ɵɵelementStart */](52, "ion-item-divider", 29);
        core["Ec" /* ɵɵelementStart */](53, "ion-label");
        core["Ec" /* ɵɵelementStart */](54, "p", 24);
        core["pd" /* ɵɵtext */](55);
        core["Pc" /* ɵɵpipe */](56, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](57, "ion-item");
        core["Ec" /* ɵɵelementStart */](58, "ion-label");
        core["Ec" /* ɵɵelementStart */](59, "p");
        core["pd" /* ɵɵtext */](60);
        core["Pc" /* ɵɵpipe */](61, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](62, "ion-radio", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](63, "ion-item", 31);
        core["Ec" /* ɵɵelementStart */](64, "ion-label");
        core["Ec" /* ɵɵelementStart */](65, "p");
        core["pd" /* ɵɵtext */](66);
        core["Pc" /* ɵɵpipe */](67, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](68, "ion-radio", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](69, "ion-item");
        core["zc" /* ɵɵelement */](70, "ion-label", 9);
        core["zc" /* ɵɵelement */](71, "ion-datetime", 32);
        core["Pc" /* ɵɵpipe */](72, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](73, "ion-item", 31);
        core["Ec" /* ɵɵelementStart */](74, "ion-label");
        core["Ec" /* ɵɵelementStart */](75, "p");
        core["pd" /* ɵɵtext */](76);
        core["Pc" /* ɵɵpipe */](77, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](78, "ion-radio", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](79, "ion-item");
        core["Ec" /* ɵɵelementStart */](80, "ion-label", 33);
        core["pd" /* ɵɵtext */](81);
        core["Pc" /* ɵɵpipe */](82, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](83, "ion-input", 34);
        core["Pc" /* ɵɵpipe */](84, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](85, AddonCalendarEditEventPage_form_13_ng_container_85_Template, 13, 7, "ng-container", 18);
        core["nd" /* ɵɵtemplate */](86, AddonCalendarEditEventPage_form_13_div_86_Template, 19, 12, "div", 35);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](87, "ion-item");
        core["Ec" /* ɵɵelementStart */](88, "ion-label");
        core["Ec" /* ɵɵelementStart */](89, "ion-row");
        core["Ec" /* ɵɵelementStart */](90, "ion-col");
        core["Ec" /* ɵɵelementStart */](91, "ion-button", 36);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarEditEventPage_form_13_Template_ion_button_click_91_listener() { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r34 = core["Oc" /* ɵɵnextContext */](); return ctx_r34.submit(); });
        core["pd" /* ɵɵtext */](92);
        core["Pc" /* ɵɵpipe */](93, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](94, AddonCalendarEditEventPage_form_13_ion_col_94_Template, 4, 3, "ion-col", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r0.form);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 55, "addon.calendar.eventname"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](8, 57, "addon.calendar.eventname"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r0.form.controls.name)("errorMessages", ctx_r0.errors);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](14, 59, "core.date"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](16, 61, "core.date"))("displayFormat", ctx_r0.dateFormat)("max", ctx_r0.maxDate)("min", ctx_r0.minDate);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r0.form.controls.timestart)("errorMessages", ctx_r0.errors);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 63, "addon.calendar.eventkind"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.eventTypes.length == 1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.eventTypes.length > 1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.typeControl.value == "category");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.typeControl.value == "course");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.typeControl.value == "group");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("hidden", !ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](39, 65, "core.description"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r0.descriptionControl)("placeholder", core["Qc" /* ɵɵpipeBind1 */](42, 69, "core.description"))("component", ctx_r0.component)("componentId", ctx_r0.eventId)("autoSave", false);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](41, 67, "core.description"));
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](47, 71, "core.location"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](49, 73, "core.location"));
        core["lc" /* ɵɵadvance */](7);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](56, 75, "addon.calendar.eventduration"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](61, 77, "addon.calendar.durationnone"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 0);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](67, 79, "addon.calendar.durationuntil"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 1);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("max", ctx_r0.maxDate)("min", ctx_r0.minDate)("placeholder", core["Qc" /* ɵɵpipeBind1 */](72, 81, "addon.calendar.durationuntil"))("displayFormat", ctx_r0.dateFormat)("disabled", ctx_r0.form.controls.duration.value != 1);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](77, 83, "addon.calendar.durationminutes"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](82, 85, "addon.calendar.durationminutes"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](84, 87, "addon.calendar.durationminutes"))("disabled", ctx_r0.form.controls.duration.value != 2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.eventId || ctx_r0.eventId < 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.eventRepeatId);
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r0.form.valid);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](93, 89, "core.save"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.hasOffline && ctx_r0.eventId && ctx_r0.eventId < 0);
    }
}
/**
 * Page that displays a form to create/edit an event.
 */
let edit_event_page_AddonCalendarEditEventPage = /*@__PURE__*/ (() => {
    class AddonCalendarEditEventPage {
        constructor(fb, svComponent) {
            this.fb = fb;
            this.svComponent = svComponent;
            this.title = 'addon.calendar.newevent';
            this.component = calendar["c" /* AddonCalendarProvider */].COMPONENT;
            this.loaded = false;
            this.hasOffline = false;
            this.eventTypes = [];
            this.categories = [];
            this.courses = [];
            this.groups = [];
            this.loadingGroups = false;
            this.courseGroupSet = false;
            this.advanced = false;
            this.error = false;
            this.otherEventsCount = 0;
            this.types = {}; // Object with the supported types.
            this.showAll = false;
            this.isDestroyed = false;
            this.gotEventData = false;
            this.currentSite = sites["b" /* CoreSites */].getCurrentSite();
            this.errors = {
                required: singletons["L" /* Translate */].instant('core.required'),
            };
            // Calculate format to use. ion-datetime doesn't support escaping characters ([]), so we remove them.
            this.dateFormat = time["a" /* CoreTimeUtils */].convertPHPToMoment(singletons["L" /* Translate */].instant('core.strftimedatetimeshort'))
                .replace(/[[\]]/g, '');
            this.form = new fesm2015_forms["j" /* FormGroup */]({});
            // Initialize form variables.
            this.typeControl = this.fb.control('', fesm2015_forms["F" /* Validators */].required);
            this.groupControl = this.fb.control('');
            this.descriptionControl = this.fb.control('');
            this.form.addControl('name', this.fb.control('', fesm2015_forms["F" /* Validators */].required));
            this.form.addControl('eventtype', this.typeControl);
            this.form.addControl('categoryid', this.fb.control(''));
            this.form.addControl('groupcourseid', this.fb.control(''));
            this.form.addControl('groupid', this.groupControl);
            this.form.addControl('description', this.descriptionControl);
            this.form.addControl('location', this.fb.control(''));
            this.form.addControl('duration', this.fb.control(0));
            this.form.addControl('timedurationminutes', this.fb.control(''));
            this.form.addControl('repeat', this.fb.control(false));
            this.form.addControl('repeats', this.fb.control('1'));
            this.form.addControl('repeateditall', this.fb.control(1));
            this.maxDate = time["a" /* CoreTimeUtils */].getDatetimeDefaultMax();
            this.minDate = time["a" /* CoreTimeUtils */].getDatetimeDefaultMin();
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.eventId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('eventId') || undefined;
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId') || 0;
            this.title = this.eventId ? 'addon.calendar.editevent' : 'addon.calendar.newevent';
            const timestamp = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('timestamp');
            const currentDate = time["a" /* CoreTimeUtils */].toDatetimeFormat(timestamp);
            this.form.addControl('timestart', this.fb.control(currentDate, fesm2015_forms["F" /* Validators */].required));
            this.form.addControl('timedurationuntil', this.fb.control(currentDate));
            this.form.addControl('courseid', this.fb.control(this.courseId));
            this.fetchData().finally(() => {
                this.originalData = utils["a" /* CoreUtils */].clone(this.form.value);
                this.loaded = true;
            });
        }
        /**
         * Fetch the data needed to render the form.
         *
         * @param refresh Whether it's refreshing data.
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let accessInfo;
                this.error = false;
                // Get access info.
                try {
                    accessInfo = yield calendar["a" /* AddonCalendar */].getAccessInformation(this.courseId);
                    this.types = yield calendar["a" /* AddonCalendar */].getAllowedEventTypes(this.courseId);
                    const promises = [];
                    const eventTypes = calendar_helper["b" /* AddonCalendarHelper */].getEventTypeOptions(this.types);
                    if (!eventTypes.length) {
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.calendar.nopermissiontoupdatecalendar'));
                    }
                    if (this.eventId && !this.gotEventData) {
                        // Editing an event, get the event data. Wait for sync first.
                        promises.push(calendar_sync["a" /* AddonCalendarSync */].waitForSync(calendar_sync["b" /* AddonCalendarSyncProvider */].SYNC_ID).then(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                            // Do not block if the scope is already destroyed.
                            if (!this.isDestroyed && this.eventId) {
                                sync["a" /* CoreSync */].blockOperation(calendar["c" /* AddonCalendarProvider */].COMPONENT, this.eventId);
                            }
                            let eventForm;
                            // Get the event offline data if there's any.
                            try {
                                eventForm = yield calendar_offline["a" /* AddonCalendarOffline */].getEvent(this.eventId);
                                this.hasOffline = true;
                            }
                            catch (_a) {
                                // No offline data.
                                this.hasOffline = false;
                            }
                            if (this.eventId > 0) {
                                // It's an online event. get its data from server.
                                const event = yield calendar["a" /* AddonCalendar */].getEventById(this.eventId);
                                if (!eventForm) {
                                    eventForm = event; // Use offline data first.
                                }
                                this.eventRepeatId = event === null || event === void 0 ? void 0 : event.repeatid;
                                if (this.eventRepeatId) {
                                    this.otherEventsCount = event.eventcount ? event.eventcount - 1 : 0;
                                }
                            }
                            this.gotEventData = true;
                            if (eventForm) {
                                // Load the data in the form.
                                return this.loadEventData(eventForm, this.hasOffline);
                            }
                            return;
                        })));
                    }
                    if (this.types.category) {
                        // Get the categories.
                        promises.push(this.fetchCategories());
                    }
                    this.showAll = utils["a" /* CoreUtils */].isTrueOrOne(this.currentSite.getStoredConfig('calendar_adminseesall')) &&
                        accessInfo.canmanageentries;
                    if (this.types.course || this.types.groups) {
                        promises.push(this.fetchCourses());
                    }
                    yield Promise.all(promises);
                    if (!this.typeControl.value) {
                        // Initialize event type value. If course is allowed, select it first.
                        if (this.types.course) {
                            this.typeControl.setValue(calendar["b" /* AddonCalendarEventType */].COURSE);
                        }
                        else {
                            this.typeControl.setValue(eventTypes[0].value);
                        }
                    }
                    this.eventTypes = eventTypes;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting data.');
                    this.error = true;
                }
            });
        }
        fetchCategories() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.categories = yield services_courses["a" /* CoreCourses */].getCategories(0, true);
            });
        }
        fetchCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the courses.
                let courses = yield (this.showAll ? services_courses["a" /* CoreCourses */].getCoursesByField() : services_courses["a" /* CoreCourses */].getUserCourses());
                if (courses.length < 0) {
                    this.courses = [];
                    return;
                }
                const courseFillterFullname = (course) => filter_helper["a" /* CoreFilterHelper */].getFiltersAndFormatText(course.fullname, 'course', course.id)
                    .then((result) => {
                    course.fullname = result.text;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
                if (this.showAll) {
                    // Remove site home from the list of courses.
                    const siteHomeId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
                    if ('contacts' in courses[0]) {
                        courses = courses.filter((course) => course.id != siteHomeId);
                    }
                    else {
                        courses = courses.filter((course) => course.id != siteHomeId);
                    }
                }
                // Format the name of the courses.
                if ('contacts' in courses[0]) {
                    yield Promise.all(courses.map(courseFillterFullname));
                }
                else {
                    yield Promise.all(courses.map(courseFillterFullname));
                }
                // Sort courses by name.
                this.courses = courses.sort((a, b) => {
                    const compareA = a.fullname.toLowerCase();
                    const compareB = b.fullname.toLowerCase();
                    return compareA.localeCompare(compareB);
                });
            });
        }
        /**
         * Load an event data into the form.
         *
         * @param event Event data.
         * @param isOffline Whether the data is from offline or not.
         * @return Promise resolved when done.
         */
        loadEventData(event, isOffline) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!event) {
                    return;
                }
                const offlineEvent = event;
                const onlineEvent = event;
                const courseId = isOffline ? offlineEvent.courseid : (_a = onlineEvent.course) === null || _a === void 0 ? void 0 : _a.id;
                this.form.controls.name.setValue(event.name);
                this.form.controls.timestart.setValue(time["a" /* CoreTimeUtils */].toDatetimeFormat(event.timestart * 1000));
                this.form.controls.eventtype.setValue(event.eventtype);
                this.form.controls.categoryid.setValue(event.categoryid || '');
                this.form.controls.courseid.setValue(courseId || '');
                this.form.controls.groupcourseid.setValue(courseId || '');
                this.form.controls.groupid.setValue(event.groupid || '');
                this.form.controls.description.setValue(event.description);
                this.form.controls.location.setValue(event.location);
                if (isOffline) {
                    // It's an offline event, use the data as it is.
                    this.form.controls.duration.setValue(offlineEvent.duration);
                    this.form.controls.timedurationuntil.setValue(time["a" /* CoreTimeUtils */].toDatetimeFormat(((offlineEvent.timedurationuntil || 0) * 1000) || Date.now()));
                    this.form.controls.timedurationminutes.setValue(offlineEvent.timedurationminutes || '');
                    this.form.controls.repeat.setValue(!!offlineEvent.repeat);
                    this.form.controls.repeats.setValue(offlineEvent.repeats || '1');
                    this.form.controls.repeateditall.setValue(offlineEvent.repeateditall || 1);
                }
                else {
                    // Online event, we'll have to calculate the data.
                    if (onlineEvent.timeduration > 0) {
                        this.form.controls.duration.setValue(1);
                        this.form.controls.timedurationuntil.setValue(time["a" /* CoreTimeUtils */].toDatetimeFormat((onlineEvent.timestart + onlineEvent.timeduration) * 1000));
                    }
                    else {
                        // No duration.
                        this.form.controls.duration.setValue(0);
                        this.form.controls.timedurationuntil.setValue(time["a" /* CoreTimeUtils */].toDatetimeFormat());
                    }
                    this.form.controls.timedurationminutes.setValue('');
                    this.form.controls.repeat.setValue(!!onlineEvent.repeatid);
                    this.form.controls.repeats.setValue(onlineEvent.eventcount || '1');
                    this.form.controls.repeateditall.setValue(1);
                }
                if (event.eventtype == calendar["b" /* AddonCalendarEventType */].GROUP && courseId) {
                    yield this.loadGroups(courseId);
                }
            });
        }
        /**
         * Pull to refresh.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            const promises = [
                calendar["a" /* AddonCalendar */].invalidateAccessInformation(this.courseId),
                calendar["a" /* AddonCalendar */].invalidateAllowedEventTypes(this.courseId),
            ];
            if (this.types) {
                if (this.types.category) {
                    promises.push(services_courses["a" /* CoreCourses */].invalidateCategories(0, true));
                }
                if (this.types.course || this.types.groups) {
                    if (this.showAll) {
                        promises.push(services_courses["a" /* CoreCourses */].invalidateCoursesByField());
                    }
                    else {
                        promises.push(services_courses["a" /* CoreCourses */].invalidateUserCourses());
                    }
                }
            }
            Promise.all(promises).finally(() => {
                this.fetchData().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * A course was selected, get its groups.
         */
        groupCourseSelected() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const courseId = this.form.controls.groupcourseid.value;
                if (!courseId) {
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    yield this.loadGroups(courseId);
                    this.groupControl.setValue('');
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting data.');
                }
                modal.dismiss();
            });
        }
        /**
         * Load groups of a certain course.
         *
         * @param courseId Course ID.
         * @return Promise resolved when done.
         */
        loadGroups(courseId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadingGroups = true;
                try {
                    this.groups = yield groups["a" /* CoreGroups */].getUserGroupsInCourse(courseId);
                    this.courseGroupSet = true;
                }
                finally {
                    this.loadingGroups = false;
                }
            });
        }
        /**
         * Show or hide advanced form fields.
         */
        toggleAdvanced() {
            this.advanced = !this.advanced;
        }
        selectDuration(duration) {
            this.form.controls.duration.setValue(duration);
        }
        /**
         * Create the event.
         */
        submit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Validate data.
                const formData = this.form.value;
                const timeStartDate = time["a" /* CoreTimeUtils */].convertToTimestamp(formData.timestart, true);
                const timeUntilDate = time["a" /* CoreTimeUtils */].convertToTimestamp(formData.timedurationuntil, true);
                const timeDurationMinutes = parseInt(formData.timedurationminutes || '', 10);
                let error;
                if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].COURSE && !formData.courseid) {
                    error = 'core.selectacourse';
                }
                else if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].GROUP && !formData.groupcourseid) {
                    error = 'core.selectacourse';
                }
                else if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].GROUP && !formData.groupid) {
                    error = 'core.selectagroup';
                }
                else if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].CATEGORY && !formData.categoryid) {
                    error = 'core.selectacategory';
                }
                else if (formData.duration == 1 && timeStartDate > timeUntilDate) {
                    error = 'addon.calendar.invalidtimedurationuntil';
                }
                else if (formData.duration == 2 && (isNaN(timeDurationMinutes) || timeDurationMinutes < 1)) {
                    error = 'addon.calendar.invalidtimedurationminutes';
                }
                if (error) {
                    // Show error and stop.
                    dom["a" /* CoreDomUtils */].showErrorModal(singletons["L" /* Translate */].instant(error));
                    return;
                }
                // Format the data to send.
                const data = {
                    name: formData.name,
                    eventtype: formData.eventtype,
                    timestart: timeStartDate,
                    description: {
                        text: formData.description || '',
                        format: 1,
                    },
                    location: formData.location,
                    duration: formData.duration,
                    repeat: formData.repeat,
                };
                if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].COURSE) {
                    data.courseid = formData.courseid;
                }
                else if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].GROUP) {
                    data.groupcourseid = formData.groupcourseid;
                    data.groupid = formData.groupid;
                }
                else if (formData.eventtype == calendar["b" /* AddonCalendarEventType */].CATEGORY) {
                    data.categoryid = formData.categoryid;
                }
                if (formData.duration == 1) {
                    data.timedurationuntil = timeUntilDate;
                }
                else if (formData.duration == 2) {
                    data.timedurationminutes = formData.timedurationminutes;
                }
                if (formData.repeat) {
                    data.repeats = Number(formData.repeats);
                }
                if (this.eventRepeatId) {
                    data.repeatid = this.eventRepeatId;
                    data.repeateditall = formData.repeateditall;
                }
                // Send the data.
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                let event;
                try {
                    const result = yield calendar["a" /* AddonCalendar */].submitEvent(this.eventId, data);
                    event = result.event;
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, result.sent, this.currentSite.getId());
                    if (result.sent) {
                        // Event created or edited, invalidate right days & months.
                        const numberOfRepetitions = formData.repeat ? formData.repeats :
                            (data.repeateditall && this.otherEventsCount ? this.otherEventsCount + 1 : 1);
                        try {
                            yield calendar_helper["b" /* AddonCalendarHelper */].refreshAfterChangeEvent(result.event, numberOfRepetitions);
                        }
                        catch (_a) {
                            // Ignore errors.
                        }
                    }
                    this.returnToList(event);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error sending data.');
                }
                modal.dismiss();
            });
        }
        /**
         * Convenience function to update or return to event list depending on device.
         *
         * @param event Event.
         */
        returnToList(event) {
            var _a;
            // Unblock the sync because the view will be destroyed and the sync process could be triggered before ngOnDestroy.
            this.unblockSync();
            if (this.eventId && this.eventId > 0) {
                // Editing an event.
                events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, { eventId: this.eventId }, this.currentSite.getId());
            }
            else {
                if (event) {
                    events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_EVENT, { eventId: event.id }, this.currentSite.getId());
                }
                else {
                    events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, {}, this.currentSite.getId());
                }
            }
            if ((_a = this.svComponent) === null || _a === void 0 ? void 0 : _a.outletActivated) {
                // Empty form.
                this.hasOffline = false;
                this.form.reset(this.originalData);
                this.originalData = utils["a" /* CoreUtils */].clone(this.form.value);
            }
            else {
                this.originalData = undefined; // Avoid asking for confirmation.
                services_navigator["a" /* CoreNavigator */].back();
            }
        }
        /**
         * Discard an offline saved discussion.
         */
        discard() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.areyousure'));
                    try {
                        yield calendar_offline["a" /* AddonCalendarOffline */].deleteEvent(this.eventId);
                        singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
                        this.returnToList();
                    }
                    catch (_a) {
                        // Shouldn't happen.
                        dom["a" /* CoreDomUtils */].showErrorModal('Error discarding event.');
                    }
                }
                catch (_b) {
                    // Ignore errors
                }
            });
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved with true if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (calendar_helper["b" /* AddonCalendarHelper */].hasEventDataChanged(this.form.value, this.originalData)) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, this.currentSite.getId());
                return true;
            });
        }
        /**
         * Unblock sync.
         */
        unblockSync() {
            if (this.eventId) {
                sync["a" /* CoreSync */].unblockOperation(calendar["c" /* AddonCalendarProvider */].COMPONENT, this.eventId);
            }
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            this.unblockSync();
            this.isDestroyed = true;
        }
    }
    AddonCalendarEditEventPage.ɵfac = function AddonCalendarEditEventPage_Factory(t) { return new (t || AddonCalendarEditEventPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */]), core["yc" /* ɵɵdirectiveInject */](split_view["a" /* CoreSplitViewComponent */], 8)); };
    AddonCalendarEditEventPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarEditEventPage, selectors: [["page-addon-calendar-edit-event"]], viewQuery: function AddonCalendarEditEventPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.descriptionEditor = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["editEventForm", ""], [1, "ion-text-wrap"], ["position", "stacked"], [1, "item-heading", 3, "core-mark-required"], ["type", "text", "name", "name", "formControlName", "name", 3, "placeholder"], [3, "control", "errorMessages"], ["formControlName", "timestart", "display-timezone", "utc", 3, "placeholder", "displayFormat", "max", "min"], [1, "ion-text-wrap", "addon-calendar-eventtype-container"], ["slot", "end", 4, "ngIf"], ["formControlName", "eventtype", "interface", "action-sheet", 3, "interfaceOptions", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngIf"], ["button", "", "detail", "false", 1, "ion-text-wrap", "divider", 3, "click"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["class", "item-heading", 4, "ngIf"], [3, "hidden"], [1, "item-heading"], ["name", "description", 3, "control", "placeholder", "component", "componentId", "autoSave"], ["type", "text", "name", "location", "formControlName", "location", 3, "placeholder"], [1, "ion-text-wrap", "addon-calendar-radio-container"], ["formControlName", "duration"], [1, "addon-calendar-radio-title"], ["slot", "end", 3, "value"], ["lines", "none"], ["formControlName", "timedurationuntil", "display-timezone", "utc", 3, "max", "min", "placeholder", "displayFormat", "disabled"], [1, "sr-only"], ["type", "number", "name", "timedurationminutes", "slot", "end", "formControlName", "timedurationminutes", 3, "placeholder", "disabled"], ["class", "ion-text-wrap addon-calendar-radio-container", 4, "ngIf"], ["expand", "block", "type", "submit", 3, "disabled", "click"], ["slot", "end"], ["formControlName", "eventtype", "interface", "action-sheet", 3, "interfaceOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "categoryid", "interface", "action-sheet", 3, "placeholder", "interfaceOptions"], ["formControlName", "courseid", "interface", "action-sheet", 3, "placeholder", "interfaceOptions"], ["formControlName", "groupcourseid", "interface", "action-sheet", 3, "placeholder", "interfaceOptions", "ionChange"], ["class", "ion-text-wrap core-danger-item", 4, "ngIf"], [1, "ion-text-wrap", "core-danger-item"], ["formControlName", "groupid", "interface", "action-sheet", 3, "placeholder", "interfaceOptions"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true"], ["lines", "none", 1, "ion-text-wrap", "divider"], ["slot", "end", "formControlName", "repeat"], ["type", "number", "name", "repeats", "formControlName", "repeats", 3, "disabled"], ["formControlName", "repeateditall"], ["slot", "end", "value", "1"], ["slot", "end", "value", "0"], ["expand", "block", "color", "light", 3, "click"]], template: function AddonCalendarEditEventPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCalendarEditEventPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, AddonCalendarEditEventPage_form_13_Template, 95, 91, "form", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, ctx.title));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.error);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], mark_required["a" /* CoreMarkRequiredComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], input_errors["a" /* CoreInputErrorsComponent */], ionic_angular["v" /* IonDatetime */], ionic_angular["Nb" /* SelectValueAccessor */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["I" /* IonItemDivider */], ionic_angular["X" /* IonRadio */], ionic_angular["Lb" /* RadioValueAccessor */], ionic_angular["Ib" /* NumericValueAccessor */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */], ionic_angular["kb" /* IonSelect */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["pb" /* IonSpinner */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-calendar-eventtype-container.item-select-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-calendar-eventtype-container.item-select-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{opacity:1}[_nghost-%COMP%]   .addon-calendar-eventtype-container.item-select-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(icon){display:none}"] });
    return AddonCalendarEditEventPage;
})();

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// CONCATENATED MODULE: ./src/addons/calendar/pages/edit-event/edit-event.module.ts
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
        component: edit_event_page_AddonCalendarEditEventPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let edit_event_module_AddonCalendarEditEventPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarEditEventPageModule {
    }
    AddonCalendarEditEventPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarEditEventPageModule });
    AddonCalendarEditEventPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarEditEventPageModule_Factory(t) { return new (t || AddonCalendarEditEventPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreEditorComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarEditEventPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](edit_event_module_AddonCalendarEditEventPageModule, { declarations: [edit_event_page_AddonCalendarEditEventPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreEditorComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);