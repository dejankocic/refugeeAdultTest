(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "JUGB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursePreviewPageModule", function() { return /* binding */ preview_module_CoreCoursePreviewPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/features/course/services/course-options-delegate.ts
var course_options_delegate = __webpack_require__("nxay");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var services_course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/features/courses/components/self-enrol-password/self-enrol-password.ts
var self_enrol_password = __webpack_require__("HXC5");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/core/features/course/pages/preview/preview.page.ts

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



























function CoreCoursePreviewPage_div_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 8);
        core["Ec" /* ɵɵelementStart */](1, "div", 9);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_12_Template_div_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.openCourse(); });
        core["zc" /* ɵɵelement */](2, "img", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.courseImageUrl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function CoreCoursePreviewPage_div_13_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r4.course.categoryname)("contextInstanceId", ctx_r4.course.categoryid);
    }
}
function CoreCoursePreviewPage_div_13_p_7_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" - ", core["Rc" /* ɵɵpipeBind2 */](2, 1, ctx_r14.course.enddate * 1000, "strftimedatefullshort"), "");
    }
}
function CoreCoursePreviewPage_div_13_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["nd" /* ɵɵtemplate */](3, CoreCoursePreviewPage_div_13_p_7_span_3_Template, 3, 4, "span", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 2, ctx_r5.course.startdate * 1000, "strftimedatefullshort"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r5.course.enddate);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 23);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r6.course.summary)("contextInstanceId", ctx_r6.course.id);
    }
}
function CoreCoursePreviewPage_div_13_ng_container_9_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 27);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 28);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 29);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const contact_r16 = ctx.$implicit;
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("userId", contact_r16.id)("courseId", ctx_r15.isEnrolled ? ctx_r15.course.id : null);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 7, "core.viewprofile"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("user", contact_r16)("userId", contact_r16.id)("courseId", ctx_r15.isEnrolled ? ctx_r15.course.id : null);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](contact_r16.fullname);
    }
}
function CoreCoursePreviewPage_div_13_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0, 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreCoursePreviewPage_div_13_ng_container_9_ion_item_6_Template, 6, 9, "ion-item", 26);
        core["zc" /* ɵɵelement */](7, "core-spacer");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.teachers"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.course.contacts);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_10_ng_container_2_div_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "span", 32);
        core["zc" /* ɵɵelement */](2, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "span", 33);
        core["pd" /* ɵɵtext */](4, ": ");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "span", 34);
        core["zc" /* ɵɵelement */](6, "core-format-text", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const field_r18 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](3);
        core["pc" /* ɵɵclassMapInterpolate2 */]("core-customfield core-customfield_", field_r18.type, " core-customfield_", field_r18.shortname, "");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", field_r18.name)("contextInstanceId", ctx_r19.course.id);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", field_r18.value)("contextInstanceId", ctx_r19.course.id);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_10_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCoursePreviewPage_div_13_ion_item_10_ng_container_2_div_1_Template, 7, 8, "div", 31);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const field_r18 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", field_r18.value);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, CoreCoursePreviewPage_div_13_ion_item_10_ng_container_2_Template, 2, 1, "ng-container", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r8.course.customfields);
    }
}
function CoreCoursePreviewPage_div_13_div_11_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 29);
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 37);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_13_div_11_ion_item_1_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r24); const instance_r22 = ctx.$implicit; const ctx_r23 = core["Oc" /* ɵɵnextContext */](3); return ctx_r23.selfEnrolClicked(instance_r22.id); });
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const instance_r22 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](instance_r22.name);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 2, "core.courses.enrolme"), " ");
    }
}
function CoreCoursePreviewPage_div_13_div_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 35);
        core["nd" /* ɵɵtemplate */](1, CoreCoursePreviewPage_div_13_div_11_ion_item_1_Template, 7, 4, "ion-item", 36);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r9.selfEnrolInstances);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_12_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 37);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_13_ion_item_12_ion_button_8_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r27); const ctx_r26 = core["Oc" /* ɵɵnextContext */](3); return ctx_r26.paypalEnrol(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.courses.sendpaymentbutton"), " ");
    }
}
function CoreCoursePreviewPage_div_13_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, CoreCoursePreviewPage_div_13_ion_item_12_ion_button_8_Template, 3, 3, "ion-button", 38);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.courses.paypalaccepted"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.paymentinstant"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r10.isMobile);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.courses.notenrollable"));
    }
}
function CoreCoursePreviewPage_div_13_ion_item_14_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 43);
    }
    if (rf & 2) {
        const ctx_r28 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("name", ctx_r28.prefetchCourseData.icon);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_14_ion_icon_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 44);
    }
    if (rf & 2) {
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("name", ctx_r29.prefetchCourseData.icon);
    }
}
function CoreCoursePreviewPage_div_13_ion_item_14_ion_spinner_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner", 0);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.loading"));
    }
}
function CoreCoursePreviewPage_div_13_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r32 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 39);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_13_ion_item_14_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r32); const ctx_r31 = core["Oc" /* ɵɵnextContext */](2); return ctx_r31.prefetchCourse(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreCoursePreviewPage_div_13_ion_item_14_ion_icon_2_Template, 1, 1, "ion-icon", 40);
        core["nd" /* ɵɵtemplate */](3, CoreCoursePreviewPage_div_13_ion_item_14_ion_icon_3_Template, 1, 1, "ion-icon", 41);
        core["nd" /* ɵɵtemplate */](4, CoreCoursePreviewPage_div_13_ion_item_14_ion_spinner_4_Template, 2, 3, "ion-spinner", 42);
        core["Ec" /* ɵɵelementStart */](5, "ion-label");
        core["Ec" /* ɵɵelementStart */](6, "h2");
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 5, ctx_r12.prefetchCourseData.statusTranslatable));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.prefetchCourseData.status != ctx_r12.statusDownloaded && !ctx_r12.prefetchCourseData.loading);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.prefetchCourseData.status == ctx_r12.statusDownloaded && !ctx_r12.prefetchCourseData.loading);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.prefetchCourseData.loading);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 7, "core.course.downloadcourse"));
    }
}
function CoreCoursePreviewPage_div_13_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 45);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_13_ion_item_15_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r34); const ctx_r33 = core["Oc" /* ɵɵnextContext */](2); return ctx_r33.openCourse(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 46);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r13.course.fullname);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.course.contents"));
    }
}
function CoreCoursePreviewPage_div_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 12);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursePreviewPage_div_13_Template_ion_item_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r36); const ctx_r35 = core["Oc" /* ɵɵnextContext */](); return ctx_r35.openCourse(); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 13);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["zc" /* ɵɵelement */](5, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreCoursePreviewPage_div_13_p_6_Template, 2, 2, "p", 14);
        core["nd" /* ɵɵtemplate */](7, CoreCoursePreviewPage_div_13_p_7_Template, 4, 5, "p", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, CoreCoursePreviewPage_div_13_ion_item_8_Template, 3, 2, "ion-item", 15);
        core["nd" /* ɵɵtemplate */](9, CoreCoursePreviewPage_div_13_ng_container_9_Template, 8, 4, "ng-container", 16);
        core["nd" /* ɵɵtemplate */](10, CoreCoursePreviewPage_div_13_ion_item_10_Template, 3, 1, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](11, CoreCoursePreviewPage_div_13_div_11_Template, 2, 1, "div", 17);
        core["nd" /* ɵɵtemplate */](12, CoreCoursePreviewPage_div_13_ion_item_12_Template, 9, 7, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](13, CoreCoursePreviewPage_div_13_ion_item_13_Template, 5, 3, "ion-item", 14);
        core["nd" /* ɵɵtemplate */](14, CoreCoursePreviewPage_div_13_ion_item_14_Template, 9, 9, "ion-item", 18);
        core["nd" /* ɵɵtemplate */](15, CoreCoursePreviewPage_div_13_ion_item_15_Template, 6, 4, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](16, "ion-item", 20);
        core["zc" /* ɵɵelement */](17, "ion-icon", 21);
        core["Ec" /* ɵɵelementStart */](18, "ion-label");
        core["Ec" /* ɵɵelementStart */](19, "h2");
        core["pd" /* ɵɵtext */](20);
        core["Pc" /* ɵɵpipe */](21, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("detail", !ctx_r1.avoidOpenCourse && ctx_r1.canAccessCourse)("button", !ctx_r1.avoidOpenCourse && ctx_r1.canAccessCourse);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r1.course.fullname);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", ctx_r1.course.fullname)("contextInstanceId", ctx_r1.course.id);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.course.categoryname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.course.startdate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.course.summary);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.course.contacts && ctx_r1.course.contacts.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.course.customfields);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.isEnrolled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.isEnrolled && ctx_r1.paypalEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.isEnrolled && !ctx_r1.selfEnrolInstances.length && !ctx_r1.paypalEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.canAccessCourse && ctx_r1.downloadCourseEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.avoidOpenCourse && ctx_r1.canAccessCourse);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("href", ctx_r1.courseUrl);
        core["mc" /* ɵɵattribute */]("aria-label", ctx_r1.course.fullname);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 18, "core.openinbrowser"));
    }
}
/**
 * Page that allows "previewing" a course and enrolling in it if enabled and not enrolled.
 */
let preview_page_CoreCoursePreviewPage = /*@__PURE__*/ (() => {
    class CoreCoursePreviewPage {
        constructor(zone) {
            this.zone = zone;
            this.isEnrolled = false;
            this.canAccessCourse = true;
            this.selfEnrolInstances = [];
            this.paypalEnabled = false;
            this.dataLoaded = false;
            this.avoidOpenCourse = false;
            this.prefetchCourseData = {
                icon: '',
                statusTranslatable: 'core.loading',
                status: '',
                loading: true,
            };
            this.statusDownloaded = constants["a" /* CoreConstants */].DOWNLOADED;
            this.courseUrl = '';
            this.isGuestEnabled = false;
            this.enrolmentMethods = [];
            this.waitStart = 0;
            this.enrolUrl = '';
            this.paypalReturnUrl = '';
            this.pageDestroyed = false;
            this.isMobile = app["a" /* CoreApp */].isMobile();
            this.downloadCourseEnabled = !courses["a" /* CoreCourses */].isDownloadCourseDisabledInSite();
            if (this.downloadCourseEnabled) {
                // Listen for status change in course.
                this.courseStatusObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].COURSE_STATUS_CHANGED, (data) => {
                    if (data.courseId == this.course.id || data.courseId == services_course["b" /* CoreCourseProvider */].ALL_COURSES_CLEARED) {
                        this.updateCourseStatus(data.status);
                    }
                }, sites["b" /* CoreSites */].getCurrentSiteId());
            }
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.course = services_navigator["a" /* CoreNavigator */].getRouteParam('course');
                this.avoidOpenCourse = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('avoidOpenCourse');
                if (!this.course) {
                    services_navigator["a" /* CoreNavigator */].back();
                    return;
                }
                const currentSite = sites["b" /* CoreSites */].getCurrentSite();
                const currentSiteUrl = currentSite && currentSite.getURL();
                this.paypalEnabled = ((_a = this.course.enrollmentmethods) === null || _a === void 0 ? void 0 : _a.indexOf('paypal')) > -1;
                this.enrolUrl = utils_text["a" /* CoreTextUtils */].concatenatePaths(currentSiteUrl, 'enrol/index.php?id=' + this.course.id);
                this.courseUrl = utils_text["a" /* CoreTextUtils */].concatenatePaths(currentSiteUrl, 'course/view.php?id=' + this.course.id);
                this.paypalReturnUrl = utils_text["a" /* CoreTextUtils */].concatenatePaths(currentSiteUrl, 'enrol/paypal/return.php');
                if (this.course.overviewfiles.length > 0) {
                    this.courseImageUrl = this.course.overviewfiles[0].fileurl;
                }
                try {
                    yield this.getCourse();
                }
                finally {
                    if (this.downloadCourseEnabled) {
                        // Determine course prefetch icon.
                        this.prefetchCourseData = yield course_helper["a" /* CoreCourseHelper */].getCourseStatusIconAndTitle(this.course.id);
                        if (this.prefetchCourseData.loading) {
                            // Course is being downloaded. Get the download promise.
                            const promise = course_helper["a" /* CoreCourseHelper */].getCourseDownloadPromise(this.course.id);
                            if (promise) {
                                // There is a download promise. If it fails, show an error.
                                promise.catch((error) => {
                                    if (!this.pageDestroyed) {
                                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                                    }
                                });
                            }
                            else {
                                // No download, this probably means that the app was closed while downloading. Set previous status.
                                services_course["a" /* CoreCourse */].setCoursePreviousStatus(this.course.id);
                            }
                        }
                    }
                }
            });
        }
        /**
         * Check if the user can access as guest.
         *
         * @return Promise resolved if can access as guest, rejected otherwise. Resolve param indicates if
         *         password is required for guest access.
         */
        canAccessAsGuest() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.isGuestEnabled) {
                    throw Error('Guest access is not enabled.');
                }
                // Search instance ID of guest enrolment method.
                const method = this.enrolmentMethods.find((method) => method.type == 'guest');
                this.guestInstanceId = method === null || method === void 0 ? void 0 : method.id;
                if (this.guestInstanceId) {
                    const info = yield courses["a" /* CoreCourses */].getCourseGuestEnrolmentInfo(this.guestInstanceId);
                    if (!info.status) {
                        // Not active, reject.
                        throw Error('Guest access is not enabled.');
                    }
                    return info.passwordrequired;
                }
                throw Error('Guest enrollment method not found.');
            });
        }
        /**
         * Convenience function to get course. We use this to determine if a user can see the course or not.
         */
        getCourse() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get course enrolment methods.
                this.selfEnrolInstances = [];
                try {
                    this.enrolmentMethods = yield courses["a" /* CoreCourses */].getCourseEnrolmentMethods(this.course.id);
                    this.enrolmentMethods.forEach((method) => {
                        if (method.type === 'self') {
                            this.selfEnrolInstances.push(method);
                        }
                        else if (method.type === 'guest') {
                            this.isGuestEnabled = true;
                        }
                    });
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting enrolment data');
                }
                try {
                    let course;
                    // Check if user is enrolled in the course.
                    try {
                        course = yield courses["a" /* CoreCourses */].getUserCourse(this.course.id);
                        this.isEnrolled = true;
                    }
                    catch (_b) {
                        // The user is not enrolled in the course. Use getCourses to see if it's an admin/manager and can see the course.
                        this.isEnrolled = false;
                        course = yield courses["a" /* CoreCourses */].getCourse(this.course.id);
                    }
                    // Success retrieving the course, we can assume the user has permissions to view it.
                    this.course.fullname = course.fullname || this.course.fullname;
                    this.course.summary = course.summary || this.course.summary;
                    this.canAccessCourse = true;
                }
                catch (_c) {
                    // The user is not an admin/manager. Check if we can provide guest access to the course.
                    try {
                        this.canAccessCourse = !(yield this.canAccessAsGuest());
                    }
                    catch (_d) {
                        this.canAccessCourse = false;
                    }
                }
                if (!((_a = sites["b" /* CoreSites */].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isVersionGreaterEqualThan('3.7'))) {
                    try {
                        const available = yield courses["a" /* CoreCourses */].isGetCoursesByFieldAvailableInSite();
                        if (available) {
                            const course = yield courses["a" /* CoreCourses */].getCourseByField('id', this.course.id);
                            this.course.customfields = course.customfields;
                        }
                    }
                    catch (_e) {
                        // Ignore errors.
                    }
                }
                this.dataLoaded = true;
            });
        }
        /**
         * Open the course.
         */
        openCourse() {
            if (!this.canAccessCourse || this.avoidOpenCourse) {
                // Course cannot be opened or we are avoiding opening because we accessed from inside a course.
                return;
            }
            course_helper["a" /* CoreCourseHelper */].openCourse(this.course);
        }
        /**
         * Enrol using PayPal.
         */
        paypalEnrol() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // We cannot control browser in browser.
                if (!this.isMobile || !sites["b" /* CoreSites */].getCurrentSite()) {
                    return;
                }
                let hasReturnedFromPaypal = false;
                const urlLoaded = (event) => {
                    if (event.url.indexOf(this.paypalReturnUrl) != -1) {
                        hasReturnedFromPaypal = true;
                    }
                    else if (event.url.indexOf(this.courseUrl) != -1 && hasReturnedFromPaypal) {
                        // User reached the course index page after returning from PayPal, close the InAppBrowser.
                        inAppClosed();
                        window.close();
                    }
                };
                const inAppClosed = () => {
                    // InAppBrowser closed, refresh data.
                    unsubscribeAll();
                    if (!this.dataLoaded) {
                        return;
                    }
                    this.dataLoaded = false;
                    this.refreshData();
                };
                const unsubscribeAll = () => {
                    inAppLoadSubscription === null || inAppLoadSubscription === void 0 ? void 0 : inAppLoadSubscription.unsubscribe();
                    inAppExitSubscription === null || inAppExitSubscription === void 0 ? void 0 : inAppExitSubscription.unsubscribe();
                };
                // Open the enrolment page in InAppBrowser.
                const window = yield sites["b" /* CoreSites */].getCurrentSite().openInAppWithAutoLogin(this.enrolUrl);
                // Observe loaded pages in the InAppBrowser to check if the enrol process has ended.
                const inAppLoadSubscription = window.on('loadstart').subscribe((event) => {
                    // Execute the callback in the Angular zone, so change detection doesn't stop working.
                    this.zone.run(() => urlLoaded(event));
                });
                // Observe window closed.
                const inAppExitSubscription = window.on('exit').subscribe(() => {
                    // Execute the callback in the Angular zone, so change detection doesn't stop working.
                    this.zone.run(inAppClosed);
                });
            });
        }
        /**
         * User clicked in a self enrol button.
         *
         * @param instanceId The instance ID of the enrolment method.
         */
        selfEnrolClicked(instanceId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.courses.confirmselfenrol'));
                    this.selfEnrolInCourse('', instanceId);
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Self enrol in a course.
         *
         * @param password Password to use.
         * @param instanceId The instance ID.
         * @return Promise resolved when self enrolled.
         */
        selfEnrolInCourse(password, instanceId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.loading', true);
                try {
                    yield courses["a" /* CoreCourses */].selfEnrol(this.course.id, password, instanceId);
                    // Close modal and refresh data.
                    this.isEnrolled = true;
                    this.dataLoaded = false;
                    // Sometimes the list of enrolled courses takes a while to be updated. Wait for it.
                    yield this.waitForEnrolled(true);
                    yield this.refreshData().finally(() => {
                        // My courses have been updated, trigger event.
                        events["b" /* CoreEvents */].trigger(courses["b" /* CoreCoursesProvider */].EVENT_MY_COURSES_UPDATED, {
                            courseId: this.course.id,
                            course: this.course,
                            action: courses["b" /* CoreCoursesProvider */].ACTION_ENROL,
                        }, sites["b" /* CoreSites */].getCurrentSiteId());
                    });
                    this.openCourse();
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                }
                catch (error) {
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                    if (error && error.errorcode === courses["b" /* CoreCoursesProvider */].ENROL_INVALID_KEY) {
                        // Initialize the self enrol modal.
                        // Invalid password, show the modal to enter the password.
                        const modalData = yield dom["a" /* CoreDomUtils */].openModal({
                            component: self_enrol_password["a" /* CoreCoursesSelfEnrolPasswordComponent */],
                            componentProps: { password },
                        });
                        if (typeof modalData != 'undefined') {
                            this.selfEnrolInCourse(modalData, instanceId);
                            return;
                        }
                        if (!password) {
                            // No password entered, don't show error.
                            return;
                        }
                    }
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorselfenrol', true);
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher The refresher if this was triggered by a Pull To Refresh.
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(courses["a" /* CoreCourses */].invalidateUserCourses());
                promises.push(courses["a" /* CoreCourses */].invalidateCourse(this.course.id));
                promises.push(courses["a" /* CoreCourses */].invalidateCourseEnrolmentMethods(this.course.id));
                promises.push(course_options_delegate["a" /* CoreCourseOptionsDelegate */].clearAndInvalidateCoursesOptions(this.course.id));
                if (sites["b" /* CoreSites */].getCurrentSite() && !sites["b" /* CoreSites */].getCurrentSite().isVersionGreaterEqualThan('3.7')) {
                    promises.push(courses["a" /* CoreCourses */].invalidateCoursesByField('id', this.course.id));
                }
                if (this.guestInstanceId) {
                    promises.push(courses["a" /* CoreCourses */].invalidateCourseGuestEnrolmentInfo(this.guestInstanceId));
                }
                yield Promise.all(promises).finally(() => this.getCourse()).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Update the course status icon and title.
         *
         * @param status Status to show.
         */
        updateCourseStatus(status) {
            const statusData = course_helper["a" /* CoreCourseHelper */].getCoursePrefetchStatusInfo(status);
            this.prefetchCourseData.status = statusData.status;
            this.prefetchCourseData.icon = statusData.icon;
            this.prefetchCourseData.statusTranslatable = statusData.statusTranslatable;
            this.prefetchCourseData.loading = statusData.loading;
        }
        /**
         * Wait for the user to be enrolled in the course.
         *
         * @param first If it's the first call (true) or it's a recursive call (false).
         * @return Promise resolved when enrolled or timeout.
         */
        waitForEnrolled(first) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (first) {
                    this.waitStart = Date.now();
                }
                // Check if user is enrolled in the course.
                try {
                    courses["a" /* CoreCourses */].invalidateUserCourses();
                }
                catch (_a) {
                    // Ignore errors.
                }
                try {
                    yield courses["a" /* CoreCourses */].getUserCourse(this.course.id);
                }
                catch (_b) {
                    // Not enrolled, wait a bit and try again.
                    if (this.pageDestroyed || (Date.now() - this.waitStart > 60000)) {
                        // Max time reached or the user left the view, stop.
                        return;
                    }
                    return new Promise((resolve) => {
                        setTimeout(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                            if (!this.pageDestroyed) {
                                // Wait again.
                                yield this.waitForEnrolled();
                            }
                            resolve();
                        }), 5000);
                    });
                }
            });
        }
        /**
         * Prefetch the course.
         */
        prefetchCourse() {
            course_helper["a" /* CoreCourseHelper */].confirmAndPrefetchCourse(this.prefetchCourseData, this.course).catch((error) => {
                if (!this.pageDestroyed) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                }
            });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            this.pageDestroyed = true;
            if (this.courseStatusObserver) {
                this.courseStatusObserver.off();
            }
        }
    }
    CoreCoursePreviewPage.ɵfac = function CoreCoursePreviewPage_Factory(t) { return new (t || CoreCoursePreviewPage)(core["yc" /* ɵɵdirectiveInject */](core["I" /* NgZone */])); };
    CoreCoursePreviewPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursePreviewPage, selectors: [["page-core-course-preview"]], decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-course-thumb-parallax", 4, "ngIf"], ["class", "core-course-thumb-parallax-content", 4, "ngIf"], [1, "core-course-thumb-parallax"], [1, "core-course-thumb", 3, "click"], ["core-external-content", "", "alt", "", 3, "src"], [1, "core-course-thumb-parallax-content"], [1, "ion-text-wrap", 3, "detail", "button", "click"], ["name", "fas-graduation-cap", "fixed-width", "", "slot", "start", "aria-hidden", "true"], [4, "ngIf"], ["class", "ion-text-wrap", "detail", "false", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["detail", "false", 4, "ngIf"], ["detail", "false", "button", "", 3, "click", 4, "ngIf"], ["button", "", "detail", "true", 3, "click", 4, "ngIf"], ["core-link", "", "button", "", "detail", "false", 3, "href"], ["name", "fas-external-link-alt", "slot", "start", "aria-hidden", "true"], ["contextLevel", "coursecat", 3, "text", "contextInstanceId"], ["detail", "false", 1, "ion-text-wrap"], ["maxHeight", "120", "contextLevel", "course", 3, "text", "contextInstanceId"], [1, "ion-text-wrap"], ["class", "ion-text-wrap", "core-user-link", "", "detail", "true", 3, "userId", "courseId", 4, "ngFor", "ngForOf"], ["core-user-link", "", "detail", "true", 1, "ion-text-wrap", 3, "userId", "courseId"], ["slot", "start", 3, "user", "userId", "courseId"], [1, "item-heading"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [1, "core-customfieldname"], [1, "core-customfieldseparator"], [1, "core-customfieldvalue"], ["detail", "false"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], ["expand", "block", 1, "ion-margin-top", 3, "click"], ["expand", "block", "class", "ion-margin-top", 3, "click", 4, "ngIf"], ["detail", "false", "button", "", 3, "click"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], ["slot", "start", "color", "success", "aria-hidden", "true", "role", "status", 3, "name", 4, "ngIf"], ["slot", "start", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name"], ["slot", "start", "color", "success", "aria-hidden", "true", "role", "status", 3, "name"], ["button", "", "detail", "true", 3, "click"], ["name", "fas-briefcase", "slot", "start", "aria-hidden", "true"]], template: function CoreCoursePreviewPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCoursePreviewPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, CoreCoursePreviewPage_div_12_Template, 3, 1, "div", 6);
                core["nd" /* ɵɵtemplate */](13, CoreCoursePreviewPage_div_13_Template, 22, 20, "div", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.course == null ? null : ctx.course.fullname)("contextInstanceId", ctx.course == null ? null : ctx.course.id);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.courseImageUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.course);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], external_content["a" /* CoreExternalContentDirective */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], directives_link["a" /* CoreLinkDirective */], ionic_angular["I" /* IonItemDivider */], common["s" /* NgForOf */], spacer["a" /* CoreSpacerComponent */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["k" /* IonButton */], ionic_angular["pb" /* IonSpinner */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]{--scroll-factor:0.5;--translate-z:calc(-2 * var(--scroll-factor))px;--scale:calc(1 + var(--scroll-factor) * 2);perspective:1px;perspective-origin:top;transform-style:preserve-3d}[_nghost-%COMP%]   .core-course-thumb[_ngcontent-%COMP%]{overflow:hidden;text-align:center;cursor:pointer;pointer-events:auto;transform-origin:center top}[_nghost-%COMP%]   .core-customfieldvalue[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{display:inline}"] });
    return CoreCoursePreviewPage;
})();

// CONCATENATED MODULE: ./src/core/features/course/pages/preview/preview.module.ts
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
        component: preview_page_CoreCoursePreviewPage,
    },
];
let preview_module_CoreCoursePreviewPageModule = /*@__PURE__*/ (() => {
    class CoreCoursePreviewPageModule {
    }
    CoreCoursePreviewPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursePreviewPageModule });
    CoreCoursePreviewPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursePreviewPageModule_Factory(t) { return new (t || CoreCoursePreviewPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursePreviewPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](preview_module_CoreCoursePreviewPageModule, { declarations: [preview_page_CoreCoursePreviewPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);