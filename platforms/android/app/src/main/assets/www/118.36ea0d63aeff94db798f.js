(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "fJJ0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreUserAboutPageModule", function() { return /* binding */ about_module_CoreUserAboutPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/user/components/components.module.ts
var components_module = __webpack_require__("5aQ+");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/features/user/services/user-helper.ts
var user_helper = __webpack_require__("F9j1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/features/user/components/user-profile-field/user-profile-field.ts
var user_profile_field = __webpack_require__("f1LK");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/user/pages/about/about.page.ts

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


















function CoreUserAboutPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.title);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 9);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.user.email"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "mailto:", ctx_r6.user.email, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r6.user.email, " ");
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 9);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.user.phone1"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "tel:", ctx_r7.user.phone1, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r7.user.phone1, " ");
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 9);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.user.phone2"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "tel:", ctx_r8.user.phone2, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r8.user.phone2, " ");
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 9);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.user.address"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r9.encodedAddress, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r9.formattedAddress, " ");
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
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
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.user.city"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r10.user.city);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
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
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.user.country"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r11.user.country);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_6_Template, 8, 5, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](7, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_7_Template, 8, 5, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](8, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_8_Template, 8, 5, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](9, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_9_Template, 8, 5, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](10, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_10_Template, 7, 4, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](11, CoreUserAboutPage_ion_list_11_ion_item_group_1_ion_item_11_Template, 7, 4, "ion-item", 7);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 7, "core.user.contact"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.user.email);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.user.phone1);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.user.phone2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.formattedAddress);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.user.city && !ctx_r3.formattedAddress);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.user.country && !ctx_r3.formattedAddress);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_2_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 11);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.user.webpage"));
        core["lc" /* ɵɵadvance */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("href", ctx_r12.user.url, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r12.user.url, " ");
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_2_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
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
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.user.interests"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r13.user.interests);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_2_core_user_profile_field_8_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-profile-field", 12);
    }
    if (rf & 2) {
        const field_r15 = ctx.$implicit;
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("field", field_r15)("contextInstanceId", ctx_r14.courseId)("courseId", ctx_r14.courseId);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreUserAboutPage_ion_list_11_ion_item_group_2_ion_item_6_Template, 8, 5, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](7, CoreUserAboutPage_ion_list_11_ion_item_group_2_ion_item_7_Template, 7, 4, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](8, CoreUserAboutPage_ion_list_11_ion_item_group_2_core_user_profile_field_8_Template, 1, 3, "core-user-profile-field", 10);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 4, "core.userdetails"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.user.url);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.user.interests);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.user.customfields);
    }
}
function CoreUserAboutPage_ion_list_11_ion_item_group_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["zc" /* ɵɵelement */](9, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.user.description"));
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("text", ctx_r5.user.description)("contextInstanceId", ctx_r5.user.id);
    }
}
function CoreUserAboutPage_ion_list_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, CoreUserAboutPage_ion_list_11_ion_item_group_1_Template, 12, 9, "ion-item-group", 2);
        core["nd" /* ɵɵtemplate */](2, CoreUserAboutPage_ion_list_11_ion_item_group_2_Template, 9, 6, "ion-item-group", 2);
        core["nd" /* ɵɵtemplate */](3, CoreUserAboutPage_ion_list_11_ion_item_group_3_Template, 10, 5, "ion-item-group", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.hasContact);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.hasDetails);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.user.description);
    }
}
function CoreUserAboutPage_core_empty_box_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 14);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.user.detailsnotavailable"));
    }
}
/**
 * Page that displays info about a user.
 */
let about_page_CoreUserAboutPage = /*@__PURE__*/ (() => {
    class CoreUserAboutPage {
        constructor() {
            this.userLoaded = false;
            this.hasContact = false;
            this.hasDetails = false;
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
        }
        /**
         * On init.
         *
         * @return Promise resolved when done.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || 0;
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId') || 0;
                this.fetchUser().finally(() => {
                    this.userLoaded = true;
                });
            });
        }
        /**
         * Fetches the user data.
         *
         * @return Promise resolved when done.
         */
        fetchUser() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const user = yield services_user["a" /* CoreUser */].getProfile(this.userId, this.courseId);
                    if (user.address) {
                        this.formattedAddress = user_helper["a" /* CoreUserHelper */].formatAddress(user.address, user.city, user.country);
                        this.encodedAddress = utils_text["a" /* CoreTextUtils */].buildAddressURL(this.formattedAddress);
                    }
                    this.hasContact = !!(user.email || user.phone1 || user.phone2 || user.city || user.country || user.address);
                    this.hasDetails = !!(user.url || user.interests || (user.customfields && user.customfields.length > 0));
                    this.user = user;
                    this.title = user.fullname;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.user.errorloaduser', true);
                }
            });
        }
        /**
         * Refresh the user data.
         *
         * @param event Event.
         * @return Promise resolved when done.
         */
        refreshUser(event) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(services_user["a" /* CoreUser */].invalidateUserCache(this.userId));
                yield this.fetchUser();
                event === null || event === void 0 ? void 0 : event.complete();
                if (this.user) {
                    events["b" /* CoreEvents */].trigger(services_user["b" /* CoreUserProvider */].PROFILE_REFRESHED, {
                        courseId: this.courseId,
                        userId: this.userId,
                        user: this.user,
                    }, this.siteId);
                }
            });
        }
    }
    CoreUserAboutPage.ɵfac = function CoreUserAboutPage_Factory(t) { return new (t || CoreUserAboutPage)(); };
    CoreUserAboutPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreUserAboutPage, selectors: [["page-core-user-about"]], decls: 13, vars: 11, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-user", 3, "message", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "ion-text-wrap"], ["core-link", "", "auto-login", "no", 1, "core-anchor", 3, "href"], ["contextLevel", "course", 3, "field", "contextInstanceId", "courseId", 4, "ngFor", "ngForOf"], ["core-link", "", 1, "core-anchor", 3, "href"], ["contextLevel", "course", 3, "field", "contextInstanceId", "courseId"], ["contextLevel", "user", 3, "text", "contextInstanceId"], ["icon", "fas-user", 3, "message"]], template: function CoreUserAboutPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, CoreUserAboutPage_h1_5_Template, 2, 1, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreUserAboutPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refreshUser($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, CoreUserAboutPage_ion_list_11_Template, 4, 3, "ion-list", 2);
                core["nd" /* ɵɵtemplate */](12, CoreUserAboutPage_core_empty_box_12_Template, 2, 3, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.userLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 9, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.userLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.user || !ctx.hasContact && !ctx.hasDetails && !ctx.user.description);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["J" /* IonItemGroup */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], ionic_angular["H" /* IonItem */], directives_link["a" /* CoreLinkDirective */], common["s" /* NgForOf */], user_profile_field["a" /* CoreUserProfileFieldComponent */], format_text["a" /* CoreFormatTextDirective */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreUserAboutPage;
})();

// CONCATENATED MODULE: ./src/core/features/user/pages/about/about.module.ts
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
        component: about_page_CoreUserAboutPage,
    },
];
let about_module_CoreUserAboutPageModule = /*@__PURE__*/ (() => {
    class CoreUserAboutPageModule {
    }
    CoreUserAboutPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreUserAboutPageModule });
    CoreUserAboutPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreUserAboutPageModule_Factory(t) { return new (t || CoreUserAboutPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreUserComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreUserAboutPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](about_module_CoreUserAboutPageModule, { declarations: [about_page_CoreUserAboutPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreUserComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);