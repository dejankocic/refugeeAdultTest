(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "LfF/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarEventPageModule", function() { return /* binding */ event_module_AddonCalendarEventPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/calendar/components/components.module.ts
var components_module = __webpack_require__("9Xwr");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar.ts
var calendar = __webpack_require__("SmTL");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-helper.ts
var calendar_helper = __webpack_require__("n6RP");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-offline.ts
var calendar_offline = __webpack_require__("Lc7R");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-sync.ts
var calendar_sync = __webpack_require__("+lfu");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var services_course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/lang.ts
var lang = __webpack_require__("Ao69");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/calendar/pages/event/event.page.ts

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




































function AddonCalendarEventPage_h1_5_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 18);
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("src", ctx_r4.event.moduleIcon, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonCalendarEventPage_h1_5_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 19);
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("name", ctx_r5.event.eventIcon);
    }
}
function AddonCalendarEventPage_h1_5_span_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 15);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r6.event.iconTitle);
    }
}
function AddonCalendarEventPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["nd" /* ɵɵtemplate */](1, AddonCalendarEventPage_h1_5_img_1_Template, 1, 1, "img", 13);
        core["nd" /* ɵɵtemplate */](2, AddonCalendarEventPage_h1_5_ion_icon_2_Template, 1, 1, "ion-icon", 14);
        core["Ec" /* ɵɵelementStart */](3, "span", 15);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonCalendarEventPage_h1_5_span_6_Template, 2, 1, "span", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "core-format-text", 17);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.event.moduleIcon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.event.eventIcon && !ctx_r0.event.moduleIcon);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 7, "addon.calendar.type" + ctx_r0.event.formattedType), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.event.moduleIcon && ctx_r0.event.iconTitle);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.event.name)("contextLevel", ctx_r0.event.contextLevel)("contextInstanceId", ctx_r0.event.contextInstanceId);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonCalendarEventPage_ion_card_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 21);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.hasdatatosync", core["ad" /* ɵɵpureFunction1 */](6, _c0, core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.calendar.calendarevent"))));
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_1_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 28);
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("src", ctx_r15.event.moduleIcon, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_1_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 29);
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("name", ctx_r16.event.eventIcon);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_1_span_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 15);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r17 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r17.event.iconTitle);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_1_ion_note_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 3);
        core["zc" /* ɵɵelement */](1, "ion-icon", 30);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.deletedoffline"), " ");
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["nd" /* ɵɵtemplate */](1, AddonCalendarEventPage_ion_card_content_24_ion_item_1_img_1_Template, 1, 1, "img", 26);
        core["nd" /* ɵɵtemplate */](2, AddonCalendarEventPage_ion_card_content_24_ion_item_1_ion_icon_2_Template, 1, 1, "ion-icon", 27);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "span", 15);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["nd" /* ɵɵtemplate */](7, AddonCalendarEventPage_ion_card_content_24_ion_item_1_span_7_Template, 2, 1, "span", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "h2");
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "p");
        core["zc" /* ɵɵelement */](12, "core-format-text", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](13, AddonCalendarEventPage_ion_card_content_24_ion_item_1_ion_note_13_Template, 4, 3, "ion-note", 23);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.event.moduleIcon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.event.eventIcon && !ctx_r7.event.moduleIcon);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 9, "addon.calendar.type" + ctx_r7.event.formattedType), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.event.moduleIcon && ctx_r7.event.iconTitle);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](10, 11, "addon.calendar.eventname"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r7.event.name)("contextLevel", ctx_r7.event.contextLevel)("contextInstanceId", ctx_r7.event.contextInstanceId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.event.deleted);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_note_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 3);
        core["zc" /* ɵɵelement */](1, "ion-icon", 30);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.deletedoffline"), " ");
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 31);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 32);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r9.courseUrl);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.course"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r9.courseName)("contextInstanceId", ctx_r9.courseId);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.group"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r10.groupName);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
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
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.category"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r11.categoryPath)("contextInstanceId", ctx_r11.event.categoryid);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.description"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r12.event.description)("contextLevel", ctx_r12.event.contextLevel)("contextInstanceId", ctx_r12.event.contextInstanceId);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 34);
        core["zc" /* ɵɵelement */](7, "core-format-text", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.location"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r13.event.encodedLocation, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r13.event.location)("contextLevel", ctx_r13.event.contextLevel)("contextInstanceId", ctx_r13.event.contextInstanceId);
    }
}
function AddonCalendarEventPage_ion_card_content_24_ion_item_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "ion-button", 35);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r14.moduleUrl);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.calendar.gotoactivity"), " ");
    }
}
function AddonCalendarEventPage_ion_card_content_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card-content");
        core["nd" /* ɵɵtemplate */](1, AddonCalendarEventPage_ion_card_content_24_ion_item_1_Template, 14, 13, "ion-item", 22);
        core["Ec" /* ɵɵelementStart */](2, "ion-item");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "core-format-text", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonCalendarEventPage_ion_card_content_24_ion_note_8_Template, 4, 3, "ion-note", 23);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-item");
        core["Ec" /* ɵɵelementStart */](10, "ion-label");
        core["Ec" /* ɵɵelementStart */](11, "h2");
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "p");
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](17, AddonCalendarEventPage_ion_card_content_24_ion_item_17_Template, 7, 6, "ion-item", 24);
        core["nd" /* ɵɵtemplate */](18, AddonCalendarEventPage_ion_card_content_24_ion_item_18_Template, 7, 4, "ion-item", 22);
        core["nd" /* ɵɵtemplate */](19, AddonCalendarEventPage_ion_card_content_24_ion_item_19_Template, 7, 5, "ion-item", 22);
        core["nd" /* ɵɵtemplate */](20, AddonCalendarEventPage_ion_card_content_24_ion_item_20_Template, 7, 6, "ion-item", 22);
        core["nd" /* ɵɵtemplate */](21, AddonCalendarEventPage_ion_card_content_24_ion_item_21_Template, 8, 7, "ion-item", 22);
        core["nd" /* ɵɵtemplate */](22, AddonCalendarEventPage_ion_card_content_24_ion_item_22_Template, 5, 4, "ion-item", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.isSplitViewOn);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 14, "addon.calendar.when"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.event.formattedtime)("contextLevel", ctx_r2.event.contextLevel)("contextInstanceId", ctx_r2.event.contextInstanceId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.isSplitViewOn && ctx_r2.event.deleted);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 16, "addon.calendar.eventtype"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 18, "addon.calendar.type" + ctx_r2.event.formattedType));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.courseName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.groupName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.categoryPath);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.event.description);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.event.location);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.moduleUrl);
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Pc" /* ɵɵpipe */](3, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r23 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "core.defaultvalue", core["ad" /* ɵɵpureFunction1 */](6, _c0, core["Qc" /* ɵɵpipeBind1 */](3, 4, (ctx_r23.event.timestart - ctx_r23.defaultTime) * 1000))), " ");
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const reminder_r21 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, reminder_r21.time * 1000));
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_ion_button_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 40);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_ion_button_4_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r29); const reminder_r21 = core["Oc" /* ɵɵnextContext */](2).$implicit; const ctx_r27 = core["Oc" /* ɵɵnextContext */](2); return ctx_r27.cancelNotification(reminder_r21.id, $event); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 41);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.delete"));
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_p_2_Template, 4, 8, "p", 2);
        core["nd" /* ɵɵtemplate */](3, AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_p_3_Template, 3, 3, "p", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_ion_button_4_Template, 3, 3, "ion-button", 39);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const reminder_r21 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](2);
        core["qc" /* ɵɵclassProp */]("item-dimmed", (reminder_r21.time == 0 - 1 ? ctx_r22.event.timestart - ctx_r22.defaultTime : reminder_r21.time) <= ctx_r22.currentTime);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", reminder_r21.time == 0 - 1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", reminder_r21.time > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", (reminder_r21.time == 0 - 1 ? ctx_r22.event.timestart - ctx_r22.defaultTime : reminder_r21.time) > ctx_r22.currentTime);
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonCalendarEventPage_ion_card_25_ng_container_6_ion_item_1_Template, 5, 5, "ion-item", 38);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const reminder_r21 = ctx.$implicit;
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", reminder_r21.time > 0 || ctx_r19.defaultTime > 0);
    }
}
function AddonCalendarEventPage_ion_card_25_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "ion-button", 42);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarEventPage_ion_card_25_ng_container_7_Template_ion_button_click_3_listener() { core["gd" /* ɵɵrestoreView */](_r33); const _r31 = core["fd" /* ɵɵreference */](7); return _r31.open(); });
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-datetime", 43, 44);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonCalendarEventPage_ion_card_25_ng_container_7_Template_ion_datetime_ngModelChange_6_listener($event) { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r34 = core["Oc" /* ɵɵnextContext */](2); return ctx_r34.notificationTimeText = $event; })("ionChange", function AddonCalendarEventPage_ion_card_25_ng_container_7_Template_ion_datetime_ionChange_6_listener() { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r35 = core["Oc" /* ɵɵnextContext */](2); return ctx_r35.addNotificationTime(); });
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 7, "addon.calendar.setnewreminder"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r20.notificationTimeText)("displayFormat", ctx_r20.notificationFormat)("min", ctx_r20.notificationMin)("max", ctx_r20.notificationMax)("doneText", core["Qc" /* ɵɵpipeBind1 */](8, 9, "core.add"))("monthNames", ctx_r20.monthNames);
    }
}
function AddonCalendarEventPage_ion_card_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 36);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonCalendarEventPage_ion_card_25_ng_container_6_Template, 2, 1, "ng-container", 37);
        core["nd" /* ɵɵtemplate */](7, AddonCalendarEventPage_ion_card_25_ng_container_7_Template, 9, 11, "ng-container", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.calendar.reminders"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.reminders);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.event.timestart + ctx_r3.event.timeduration > ctx_r3.currentTime);
    }
}
/**
 * Page that displays a single calendar event.
 */
let event_page_AddonCalendarEventPage = /*@__PURE__*/ (() => {
    class AddonCalendarEventPage {
        constructor(svComponent, route) {
            var _a;
            this.svComponent = svComponent;
            this.route = route;
            this.eventLoaded = false;
            this.courseName = '';
            this.courseUrl = '';
            this.notificationsEnabled = false;
            this.moduleUrl = '';
            this.categoryPath = '';
            this.defaultTime = 0;
            this.reminders = [];
            this.canEdit = false;
            this.canDelete = false;
            this.hasOffline = false;
            this.isOnline = false;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING; // Sync icon.
            this.isSplitViewOn = false;
            this.notificationsEnabled = local_notifications["a" /* CoreLocalNotifications */].isAvailable();
            this.siteHomeId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
            this.currentSiteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.isSplitViewOn = (_a = this.svComponent) === null || _a === void 0 ? void 0 : _a.outletActivated;
            // Check if site supports editing and deleting. No need to check allowed types, event.canedit already does it.
            this.canEdit = calendar["a" /* AddonCalendar */].canEditEventsInSite();
            this.canDelete = calendar["a" /* AddonCalendar */].canDeleteEventsInSite();
            // Listen for event edited. If current event is edited, reload the data.
            this.editEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, (data) => {
                if (data && data.eventId == this.eventId) {
                    this.eventLoaded = false;
                    this.refreshEvent(true, false);
                }
            }, this.currentSiteId);
            // Refresh data if this calendar event is synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].AUTO_SYNCED, this.checkSyncResult.bind(this, false), this.currentSiteId);
            // Refresh data if calendar events are synchronized manually but not by this page.
            this.manualSyncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, this.checkSyncResult.bind(this, true), this.currentSiteId);
            // Refresh online status when changes.
            this.onlineObserver = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.isOnline = app["a" /* CoreApp */].isOnline();
                });
            });
        }
        initReminders() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.notificationsEnabled) {
                    this.monthNames = lang["a" /* CoreLang */].getMonthNames();
                    this.reminders = yield calendar["a" /* AddonCalendar */].getEventReminders(this.eventId);
                    this.defaultTime = (yield calendar["a" /* AddonCalendar */].getDefaultNotificationTime()) * 60;
                    // Calculate format to use.
                    this.notificationFormat =
                        time["a" /* CoreTimeUtils */].fixFormatForDatetime(time["a" /* CoreTimeUtils */].convertPHPToMoment(singletons["L" /* Translate */].instant('core.strftimedatetime')));
                }
            });
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.eventId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('id');
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.fetchEvent();
            this.initReminders();
        }
        /**
         * Fetches the event and updates the view.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        fetchEvent(sync = false, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const currentSite = sites["b" /* CoreSites */].getCurrentSite();
                const canGetById = calendar["a" /* AddonCalendar */].isGetEventByIdAvailableInSite();
                let deleted = false;
                this.isOnline = app["a" /* CoreApp */].isOnline();
                if (sync) {
                    // Try to synchronize offline events.
                    try {
                        const result = yield calendar_sync["a" /* AddonCalendarSync */].syncEvents();
                        if (result.warnings && result.warnings.length) {
                            dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                        }
                        if (result.deleted && result.deleted.indexOf(this.eventId) != -1) {
                            // This event was deleted during the sync.
                            deleted = true;
                        }
                        if (result.updated) {
                            // Trigger a manual sync event.
                            result.source = 'event';
                            events["b" /* CoreEvents */].trigger(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, this.currentSiteId);
                        }
                    }
                    catch (error) {
                        if (showErrors) {
                            dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
                        }
                    }
                }
                if (deleted) {
                    return;
                }
                try {
                    let event;
                    // Get the event data.
                    if (canGetById) {
                        event = yield calendar["a" /* AddonCalendar */].getEventById(this.eventId);
                    }
                    else {
                        event = yield calendar["a" /* AddonCalendar */].getEvent(this.eventId);
                    }
                    this.event = calendar_helper["b" /* AddonCalendarHelper */].formatEventData(event);
                    try {
                        const offlineEvent = calendar_helper["b" /* AddonCalendarHelper */].formatOfflineEventData(yield calendar_offline["a" /* AddonCalendarOffline */].getEvent(this.eventId));
                        // There is offline data, apply it.
                        this.hasOffline = true;
                        this.event = Object.assign(this.event, offlineEvent);
                    }
                    catch (_a) {
                        // No offline data.
                        this.hasOffline = false;
                    }
                    this.currentTime = time["a" /* CoreTimeUtils */].timestamp();
                    this.notificationMin = time["a" /* CoreTimeUtils */].userDate(this.currentTime * 1000, 'YYYY-MM-DDTHH:mm', false);
                    this.notificationMax = time["a" /* CoreTimeUtils */].userDate((this.event.timestart + this.event.timeduration) * 1000, 'YYYY-MM-DDTHH:mm', false);
                    // Reset some of the calculated data.
                    this.categoryPath = '';
                    this.courseName = '';
                    this.courseUrl = '';
                    this.moduleUrl = '';
                    if (this.event.moduleIcon) {
                        // It's a module event, translate the module name to the current language.
                        const name = services_course["a" /* CoreCourse */].translateModuleName(this.event.modulename || '');
                        if (name.indexOf('core.mod_') === -1) {
                            this.event.modulename = name;
                        }
                        // Get the module URL.
                        if (canGetById) {
                            this.moduleUrl = this.event.url || '';
                        }
                    }
                    const promises = [];
                    const courseId = this.event.courseid;
                    if (courseId != this.siteHomeId) {
                        // If the event belongs to a course, get the course name and the URL to view it.
                        if (canGetById && this.event.course) {
                            this.courseId = this.event.course.id;
                            this.courseName = this.event.course.fullname;
                            this.courseUrl = this.event.course.viewurl;
                        }
                        else if (!canGetById && this.event.courseid) {
                            // Retrieve the course.
                            promises.push(courses["a" /* CoreCourses */].getUserCourse(this.event.courseid, true).then((course) => {
                                this.courseId = course.id;
                                this.courseName = course.fullname;
                                this.courseUrl = currentSite ? utils_text["a" /* CoreTextUtils */].concatenatePaths(currentSite.siteUrl, '/course/view.php?id=' + this.courseId) : '';
                                return;
                            }).catch(() => {
                                // Error getting course, just don't show the course name.
                            }));
                        }
                    }
                    // If it's a group event, get the name of the group.
                    if (courseId && this.event.groupid) {
                        promises.push(groups["a" /* CoreGroups */].getUserGroupsInCourse(courseId).then((groups) => {
                            const group = groups.find((group) => group.id == this.event.groupid);
                            this.groupName = group ? group.name : '';
                            return;
                        }).catch(() => {
                            // Error getting groups, just don't show the group name.
                            this.groupName = '';
                        }));
                    }
                    if (canGetById && this.event.iscategoryevent && this.event.category) {
                        this.categoryPath = this.event.category.nestedname;
                    }
                    if (this.event.location) {
                        // Build a link to open the address in maps.
                        this.event.location = utils_text["a" /* CoreTextUtils */].decodeHTML(this.event.location);
                        this.event.encodedLocation = utils_text["a" /* CoreTextUtils */].buildAddressURL(this.event.location);
                    }
                    // Check if event was deleted in offine.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].isEventDeleted(this.eventId).then((deleted) => {
                        this.event.deleted = deleted;
                        return;
                    }));
                    // Re-calculate the formatted time so it uses the device date.
                    promises.push(calendar["a" /* AddonCalendar */].getCalendarTimeFormat().then((timeFormat) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                        this.event.formattedtime = yield calendar["a" /* AddonCalendar */].formatEventTime(this.event, timeFormat);
                        return;
                    })));
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevent', true);
                }
                this.eventLoaded = true;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
            });
        }
        /**
         * Add a reminder for this event.
         */
        addNotificationTime() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.notificationTimeText && this.event && this.event.id) {
                    let notificationTime = time["a" /* CoreTimeUtils */].convertToTimestamp(this.notificationTimeText);
                    const currentTime = time["a" /* CoreTimeUtils */].timestamp();
                    const minute = Math.floor(currentTime / 60) * 60;
                    // Check if the notification time is in the same minute as we are, so the notification is triggered.
                    if (notificationTime >= minute && notificationTime < minute + 60) {
                        notificationTime = currentTime + 1;
                    }
                    yield calendar["a" /* AddonCalendar */].addEventReminder(this.event, notificationTime);
                    this.reminders = yield calendar["a" /* AddonCalendar */].getEventReminders(this.eventId);
                    this.notificationTimeText = undefined;
                }
            });
        }
        /**
         * Cancel the selected notification.
         *
         * @param id Reminder ID.
         * @param e Click event.
         */
        cancelNotification(id, e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm();
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.deleting', true);
                    try {
                        yield calendar["a" /* AddonCalendar */].deleteEventReminder(id);
                        this.reminders = yield calendar["a" /* AddonCalendar */].getEventReminders(this.eventId);
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error deleting reminder');
                    }
                    finally {
                        modal.dismiss();
                    }
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param done Function to call when done.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        doRefresh(refresher, done, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.eventLoaded) {
                    return;
                }
                yield this.refreshEvent(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            });
        }
        /**
         * Refresh the event.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        refreshEvent(sync = false, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                const promises = [];
                promises.push(calendar["a" /* AddonCalendar */].invalidateEvent(this.eventId));
                promises.push(calendar["a" /* AddonCalendar */].invalidateTimeFormat());
                yield utils["a" /* CoreUtils */].allPromisesIgnoringErrors(promises);
                yield this.fetchEvent(sync, showErrors);
            });
        }
        /**
         * Open the page to edit the event.
         */
        openEdit() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(`/calendar/edit/${this.eventId}`);
        }
        /**
         * Delete the event.
         */
        deleteEvent() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.event) {
                    return;
                }
                const title = singletons["L" /* Translate */].instant('addon.calendar.deleteevent');
                const options = {};
                let message;
                if (this.event.eventcount > 1) {
                    // It's a repeated event.
                    message = singletons["L" /* Translate */].instant('addon.calendar.confirmeventseriesdelete', { $a: { name: this.event.name, count: this.event.eventcount } });
                    options.inputs = [
                        {
                            type: 'radio',
                            name: 'deleteall',
                            checked: true,
                            value: false,
                            label: singletons["L" /* Translate */].instant('addon.calendar.deleteoneevent'),
                        },
                        {
                            type: 'radio',
                            name: 'deleteall',
                            checked: false,
                            value: true,
                            label: singletons["L" /* Translate */].instant('addon.calendar.deleteallevents'),
                        },
                    ];
                }
                else {
                    // Not repeated, display a simple confirm.
                    message = singletons["L" /* Translate */].instant('addon.calendar.confirmeventdelete', { $a: this.event.name });
                }
                let deleteAll = false;
                try {
                    deleteAll = yield dom["a" /* CoreDomUtils */].showConfirm(message, title, undefined, undefined, options);
                }
                catch (_a) {
                    // User canceled.
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    const sent = yield calendar["a" /* AddonCalendar */].deleteEvent(this.event.id, this.event.name, deleteAll);
                    if (sent) {
                        // Event deleted, invalidate right days & months.
                        try {
                            yield calendar_helper["b" /* AddonCalendarHelper */].refreshAfterChangeEvent(this.event, deleteAll ? this.event.eventcount : 1);
                        }
                        catch (_b) {
                            // Ignore errors.
                        }
                    }
                    // Trigger an event.
                    events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, {
                        eventId: this.eventId,
                        sent: sent,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    if (sent) {
                        dom["a" /* CoreDomUtils */].showToast('addon.calendar.eventcalendareventdeleted', true, 3000);
                        // Event deleted, close the view.
                        if (screen["a" /* CoreScreen */].isMobile) {
                            services_navigator["a" /* CoreNavigator */].back();
                        }
                    }
                    else {
                        // Event deleted in offline, just mark it as deleted.
                        this.event.deleted = true;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error deleting event.');
                }
                modal.dismiss();
            });
        }
        /**
         * Undo delete the event.
         */
        undoDelete() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.event) {
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield calendar_offline["a" /* AddonCalendarOffline */].unmarkDeleted(this.event.id);
                    // Trigger an event.
                    events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, {
                        eventId: this.eventId,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    this.event.deleted = false;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error undeleting event.');
                }
                modal.dismiss();
            });
        }
        /**
         * Check the result of an automatic sync or a manual sync not done by this page.
         *
         * @param isManual Whether it's a manual sync.
         * @param data Sync result.
         */
        checkSyncResult(isManual, data) {
            if (!data) {
                return;
            }
            if (data.deleted && data.deleted.indexOf(this.eventId) != -1) {
                dom["a" /* CoreDomUtils */].showToast('addon.calendar.eventcalendareventdeleted', true, 3000);
                // Event was deleted, close the view.
                if (screen["a" /* CoreScreen */].isMobile) {
                    services_navigator["a" /* CoreNavigator */].back();
                }
            }
            else if (data.events && (!isManual || data.source != 'event')) {
                const event = data.events.find((ev) => ev.id == this.eventId);
                if (event) {
                    this.eventLoaded = false;
                    this.refreshEvent();
                }
            }
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d;
            (_a = this.editEventObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.syncObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.manualSyncObserver) === null || _c === void 0 ? void 0 : _c.off();
            (_d = this.onlineObserver) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        }
    }
    AddonCalendarEventPage.ɵfac = function AddonCalendarEventPage_Factory(t) { return new (t || AddonCalendarEventPage)(core["yc" /* ɵɵdirectiveInject */](split_view["a" /* CoreSplitViewComponent */], 8), core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonCalendarEventPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarEventPage, selectors: [["page-addon-calendar-event"]], decls: 26, vars: 34, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "end"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["iconAction", "fas-edit", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-trash", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-undo-alt", 3, "hidden", "priority", "content", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["list", "", 4, "ngIf"], ["alt", "", "role", "presentation", "class", "core-module-icon", 3, "src", 4, "ngIf"], ["aria-hidden", "true", 3, "name", 4, "ngIf"], [1, "sr-only"], ["class", "sr-only", 4, "ngIf"], [3, "text", "contextLevel", "contextInstanceId"], ["alt", "", "role", "presentation", 1, "core-module-icon", 3, "src"], ["aria-hidden", "true", 3, "name"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], ["class", "ion-text-wrap", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["class", "ion-text-wrap", "core-link", "", "capture", "true", 3, "href", 4, "ngIf"], [1, "ion-text-wrap"], ["slot", "start", "alt", "", "role", "presentation", "class", "core-module-icon", 3, "src", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], ["slot", "start", "alt", "", "role", "presentation", 1, "core-module-icon", 3, "src"], ["slot", "start", "aria-hidden", "true", 3, "name"], ["name", "fas-trash", "aria-hidden", "true"], ["core-link", "", "capture", "true", 1, "ion-text-wrap", 3, "href"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["contextLevel", "coursecat", 3, "text", "contextInstanceId"], ["core-link", "", "auto-login", "no", 3, "href"], ["expand", "block", "color", "primary", "core-link", "", "capture", "true", 3, "href"], ["list", ""], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap", 3, "item-dimmed", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click"], ["name", "fas-trash", "color", "danger", "slot", "icon-only", "aria-hidden", "true"], ["expand", "block", "color", "primary", 3, "click"], ["hidden", "", 3, "ngModel", "displayFormat", "min", "max", "doneText", "monthNames", "ngModelChange", "ionChange"], ["notificationPicker", ""]], template: function AddonCalendarEventPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonCalendarEventPage_h1_5_Template, 8, 9, "h1", 2);
                core["zc" /* ɵɵelement */](6, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "core-navbar-buttons", 3);
                core["Ec" /* ɵɵelementStart */](8, "core-context-menu");
                core["Ec" /* ɵɵelementStart */](9, "core-context-menu-item", 4);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarEventPage_Template_core_context_menu_item_action_9_listener($event) { return ctx.doRefresh(undefined, $event, true); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarEventPage_Template_core_context_menu_item_action_11_listener() { return ctx.openEdit(); });
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-context-menu-item", 6);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarEventPage_Template_core_context_menu_item_action_13_listener() { return ctx.deleteEvent(); });
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](15, "core-context-menu-item", 7);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarEventPage_Template_core_context_menu_item_action_15_listener() { return ctx.undoDelete(); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "ion-content");
                core["Ec" /* ɵɵelementStart */](18, "ion-refresher", 8);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCalendarEventPage_Template_ion_refresher_ionRefresh_18_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](19, "ion-refresher-content", 9);
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "core-loading", 10);
                core["nd" /* ɵɵtemplate */](22, AddonCalendarEventPage_ion_card_22_Template, 7, 8, "ion-card", 11);
                core["Ec" /* ɵɵelementStart */](23, "ion-card");
                core["nd" /* ɵɵtemplate */](24, AddonCalendarEventPage_ion_card_content_24_Template, 23, 20, "ion-card-content", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](25, AddonCalendarEventPage_ion_card_25_Template, 8, 5, "ion-card", 12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 22, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.event);
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSplitViewOn || !ctx.eventLoaded || !ctx.hasOffline && ctx.event && !ctx.event.deleted || !ctx.isOnline)("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](10, 24, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.canEdit || !ctx.event || !ctx.event.canedit || ctx.event.deleted)("priority", 300)("content", core["Qc" /* ɵɵpipeBind1 */](12, 26, "core.edit"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.canDelete || !ctx.event || !ctx.event.candelete || ctx.event.deleted)("priority", 200)("content", core["Qc" /* ɵɵpipeBind1 */](14, 28, "core.delete"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.event || !ctx.event.deleted)("priority", 200)("content", core["Qc" /* ɵɵpipeBind1 */](16, 30, "core.restore"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.eventLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](20, 32, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.eventLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasOffline || ctx.event && ctx.event.deleted);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.event);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.notificationsEnabled && ctx.event);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["n" /* IonCardContent */], ionic_angular["V" /* IonNote */], directives_link["a" /* CoreLinkDirective */], ionic_angular["k" /* IonButton */], common["s" /* NgForOf */], ionic_angular["v" /* IonDatetime */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}"] });
    return AddonCalendarEventPage;
})();

// CONCATENATED MODULE: ./src/addons/calendar/pages/event/event.module.ts
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
        component: event_page_AddonCalendarEventPage,
    },
];
let event_module_AddonCalendarEventPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarEventPageModule {
    }
    AddonCalendarEventPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarEventPageModule });
    AddonCalendarEventPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarEventPageModule_Factory(t) { return new (t || AddonCalendarEventPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonCalendarComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarEventPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](event_module_AddonCalendarEventPageModule, { declarations: [event_page_AddonCalendarEventPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonCalendarComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);