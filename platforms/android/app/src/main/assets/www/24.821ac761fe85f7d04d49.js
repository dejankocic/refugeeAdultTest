(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "+qIv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonBadgesLazyModule", function() { return /* binding */ badges_lazy_module_AddonBadgesLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/addons/badges/services/badges.ts
var services_badges = __webpack_require__("N1VN");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

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

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/badges/pages/issued-badge/issued-badge.page.ts

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



















function AddonBadgesIssuedBadgePage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.badge.name);
    }
}
function AddonBadgesIssuedBadgePage_h1_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.badges.badges"));
    }
}
function AddonBadgesIssuedBadgePage_ion_item_group_12_img_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 9);
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("src", ctx_r5.badge.badgeurl, core["jd" /* ɵɵsanitizeUrl */])("alt", ctx_r5.badge.name);
    }
}
function AddonBadgesIssuedBadgePage_ion_item_group_12_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 10);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.badges.expired"), " ");
    }
}
function AddonBadgesIssuedBadgePage_ion_item_group_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["nd" /* ɵɵtemplate */](3, AddonBadgesIssuedBadgePage_ion_item_group_12_img_3_Template, 1, 2, "img", 7);
        core["nd" /* ɵɵtemplate */](4, AddonBadgesIssuedBadgePage_ion_item_group_12_ion_badge_4_Template, 3, 3, "ion-badge", 8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.badge.badgeurl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.badge.dateexpire && ctx_r2.currentTime >= ctx_r2.badge.dateexpire);
    }
}
function AddonBadgesIssuedBadgePage_ion_item_group_13_Template(rf, ctx) {
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
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "h2");
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "p");
        core["pd" /* ɵɵtext */](12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.badges.recipientdetails"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](10, 5, "core.name"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r3.user.fullname);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_7_Template(rf, ctx) {
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
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.issuername"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r7.badge.issuername);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.contact"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "mailto:", ctx_r8.badge.issuercontact, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r8.badge.issuercontact, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_15_Template(rf, ctx) {
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
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.name"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r9.badge.name);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_16_Template(rf, ctx) {
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.version"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r10.badge.version);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_17_Template(rf, ctx) {
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.language"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r11.badge.language);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_18_Template(rf, ctx) {
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.description"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r12.badge.description);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_19_Template(rf, ctx) {
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.imageauthorname"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r13.badge.imageauthorname);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.imageauthoremail"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "mailto:", ctx_r14.badge.imageauthoremail, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r14.badge.imageauthoremail, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.imageauthorurl"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r15.badge.imageauthorurl, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r15.badge.imageauthorurl, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_22_Template(rf, ctx) {
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
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.imagecaption"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r16.badge.imagecaption);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r17 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.course"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r17.course.fullname)("contextInstanceId", ctx_r17.courseId);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_30_Template(rf, ctx) {
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
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.dateawarded"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, ctx_r18.badge.dateissued * 1000));
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_31_span_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 16);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.badges.warnexpired"), " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_31_Template(rf, ctx) {
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
        core["nd" /* ɵɵtemplate */](8, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_31_span_8_Template, 3, 3, "span", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.expirydate"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 5, ctx_r19.badge.dateexpire * 1000), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r19.currentTime >= ctx_r19.badge.dateexpire);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_6_Template(rf, ctx) {
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
        const ctx_r24 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.issuername"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r24.badge.endorsement.issuername);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r25 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.issueremail"));
        core["lc" /* ɵɵadvance */](3);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("href", "mailto:", ctx_r25.badge.endorsement.issueremail, "", core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r25.badge.endorsement.issueremail, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.issuerurl"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r26.badge.endorsement.issuerurl, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r26.badge.endorsement.issuerurl, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_9_Template(rf, ctx) {
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
        const ctx_r27 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.dateawarded"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, ctx_r27.badge.endorsement.dateissued * 1000));
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["Ec" /* ɵɵelementStart */](6, "a", 13);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r28 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.badges.claimid"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("href", ctx_r28.badge.endorsement.claimid, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r28.badge.endorsement.claimid, " ");
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_11_Template(rf, ctx) {
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
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.badges.claimcomment"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r29.badge.endorsement.claimcomment);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_Template(rf, ctx) {
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
        core["nd" /* ɵɵtemplate */](6, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_6_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](7, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_7_Template, 8, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](8, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_8_Template, 8, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](9, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_9_Template, 8, 6, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](10, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_10_Template, 8, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](11, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_ion_item_11_Template, 7, 4, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 7, "addon.badges.bendorsement"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.issuername);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.issueremail);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.issuerurl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.dateissued);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.claimid);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.badge.endorsement.claimcomment);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const relatedBadge_r32 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](relatedBadge_r32.name);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.badges.norelated"));
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_Template(rf, ctx) {
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
        core["nd" /* ɵɵtemplate */](6, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_ion_item_6_Template, 4, 1, "ion-item", 17);
        core["nd" /* ɵɵtemplate */](7, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_ion_item_7_Template, 5, 3, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.badges.relatedbages"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r21.badge.relatedbadges);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r21.badge.relatedbadges.length == 0);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const alignment_r35 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("href", alignment_r35.targeturl);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](alignment_r35.targetname);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.badges.noalignment"));
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_Template(rf, ctx) {
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
        core["nd" /* ɵɵtemplate */](6, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_ion_item_6_Template, 4, 2, "ion-item", 18);
        core["nd" /* ɵɵtemplate */](7, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_ion_item_7_Template, 5, 3, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.badges.alignment"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r22.badge.alignment);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r22.badge.alignment.length == 0);
    }
}
function AddonBadgesIssuedBadgePage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_7_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](8, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_8_Template, 8, 5, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](10, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](11, "ion-label");
        core["Ec" /* ɵɵelementStart */](12, "h2");
        core["pd" /* ɵɵtext */](13);
        core["Pc" /* ɵɵpipe */](14, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](15, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_15_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](16, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_16_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](17, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_17_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](18, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_18_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](19, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_19_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](20, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_20_Template, 8, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](21, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_21_Template, 8, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](22, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_22_Template, 7, 4, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](23, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_23_Template, 7, 5, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](24, "ion-item-group");
        core["Ec" /* ɵɵelementStart */](25, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](26, "ion-label");
        core["Ec" /* ɵɵelementStart */](27, "h2");
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](30, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_30_Template, 8, 6, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](31, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_31_Template, 9, 7, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](32, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_32_Template, 12, 9, "ion-item-group", 2);
        core["nd" /* ɵɵtemplate */](33, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_33_Template, 8, 5, "ion-item-group", 2);
        core["nd" /* ɵɵtemplate */](34, AddonBadgesIssuedBadgePage_ng_container_14_ion_item_group_34_Template, 8, 5, "ion-item-group", 2);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 19, "addon.badges.issuerdetails"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.issuername);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.issuercontact);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](14, 21, "addon.badges.badgedetails"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.version);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.language);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.description);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.imageauthorname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.imageauthoremail);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.imageauthorurl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.imagecaption);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.course);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](29, 23, "addon.badges.issuancedetails"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.dateissued);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.dateexpire);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.endorsement);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.relatedbadges);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.badge.alignment);
    }
}
/**
 * Page that displays the list of calendar events.
 */
let issued_badge_page_AddonBadgesIssuedBadgePage = /*@__PURE__*/ (() => {
    class AddonBadgesIssuedBadgePage {
        constructor(route) {
            this.route = route;
            this.badgeHash = '';
            this.courseId = 0;
            this.badgeLoaded = false;
            this.currentTime = 0;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId') || this.courseId; // Use 0 for site badges.
            this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || sites["b" /* CoreSites */].getCurrentSite().getUserId();
            this.badgeHash = services_navigator["a" /* CoreNavigator */].getRouteParam('badgeHash') || '';
            this.fetchIssuedBadge().finally(() => {
                this.badgeLoaded = true;
            });
        }
        /**
         * Fetch the issued badge required for the view.
         *
         * @return Promise resolved when done.
         */
        fetchIssuedBadge() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.currentTime = time["a" /* CoreTimeUtils */].timestamp();
                this.user = yield user["a" /* CoreUser */].getProfile(this.userId, this.courseId, true);
                try {
                    const badges = yield services_badges["a" /* AddonBadges */].getUserBadges(this.courseId, this.userId);
                    const badge = badges.find((badge) => this.badgeHash == badge.uniquehash);
                    if (!badge) {
                        return;
                    }
                    this.badge = badge;
                    if (badge.courseid) {
                        try {
                            this.course = yield courses["a" /* CoreCourses */].getUserCourse(badge.courseid, true);
                        }
                        catch (_a) {
                            // Maybe an old deleted course.
                            this.course = undefined;
                        }
                    }
                }
                catch (message) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'Error getting badge data.');
                }
            });
        }
        /**
         * Refresh the badges.
         *
         * @param refresher Refresher.
         */
        refreshBadges(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all([
                    services_badges["a" /* AddonBadges */].invalidateUserBadges(this.courseId, this.userId),
                ]));
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all([
                    this.fetchIssuedBadge(),
                ]));
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
    }
    AddonBadgesIssuedBadgePage.ɵfac = function AddonBadgesIssuedBadgePage_Factory(t) { return new (t || AddonBadgesIssuedBadgePage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonBadgesIssuedBadgePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonBadgesIssuedBadgePage, selectors: [["page-addon-badges-issued-badge"]], decls: 15, vars: 13, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [1, "ion-text-wrap", "ion-text-center"], ["class", "large-avatar", "core-external-content", "", 3, "src", "alt", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["core-external-content", "", 1, "large-avatar", 3, "src", "alt"], ["color", "danger"], [1, "ion-text-wrap"], ["class", "ion-text-wrap", 4, "ngIf"], ["core-link", "", "auto-login", "no", 3, "href"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], ["class", "ion-text-wrap", "core-link", "", "auto-login", "no", 3, "href", 4, "ngFor", "ngForOf"], ["core-link", "", "auto-login", "no", 1, "ion-text-wrap", 3, "href"]], template: function AddonBadgesIssuedBadgePage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonBadgesIssuedBadgePage_h1_5_Template, 2, 1, "h1", 2);
                core["nd" /* ɵɵtemplate */](6, AddonBadgesIssuedBadgePage_h1_6_Template, 3, 3, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonBadgesIssuedBadgePage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshBadges($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, AddonBadgesIssuedBadgePage_ion_item_group_12_Template, 5, 2, "ion-item-group", 2);
                core["nd" /* ɵɵtemplate */](13, AddonBadgesIssuedBadgePage_ion_item_group_13_Template, 13, 7, "ion-item-group", 2);
                core["nd" /* ɵɵtemplate */](14, AddonBadgesIssuedBadgePage_ng_container_14_Template, 35, 25, "ng-container", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.badge);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.badge);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.badgeLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.badgeLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.badge);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.badge);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["J" /* IonItemGroup */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], external_content["a" /* CoreExternalContentDirective */], ionic_angular["j" /* IonBadge */], ionic_angular["I" /* IonItemDivider */], directives_link["a" /* CoreLinkDirective */], format_text["a" /* CoreFormatTextDirective */], common["s" /* NgForOf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonBadgesIssuedBadgePage;
})();

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// CONCATENATED MODULE: ./src/addons/badges/pages/user-badges/user-badges.page.ts

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


















function AddonBadgesUserBadgesPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.badges.nobadges"));
    }
}
function AddonBadgesUserBadgesPage_ion_list_15_ion_item_1_ion_badge_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 14);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.badges.expired"), " ");
    }
}
function AddonBadgesUserBadgesPage_ion_list_15_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 10);
        core["Mc" /* ɵɵlistener */]("click", function AddonBadgesUserBadgesPage_ion_list_15_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const badge_r3 = ctx.$implicit; const ctx_r5 = core["Oc" /* ɵɵnextContext */](2); return ctx_r5.badges.select(badge_r3); });
        core["Ec" /* ɵɵelementStart */](1, "ion-avatar", 0);
        core["zc" /* ɵɵelement */](2, "img", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 12);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonBadgesUserBadgesPage_ion_list_15_ion_item_1_ion_badge_9_Template, 3, 3, "ion-badge", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const badge_r3 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", badge_r3.name)("aria-current", ctx_r2.badges.getItemAriaCurrent(badge_r3));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("src", badge_r3.badgeurl, core["jd" /* ɵɵsanitizeUrl */])("alt", badge_r3.name);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](badge_r3.name);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](8, 7, badge_r3.dateissued * 1000, "strftimedatetimeshort"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", badge_r3.dateexpire && ctx_r2.currentTime >= badge_r3.dateexpire);
    }
}
function AddonBadgesUserBadgesPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 8);
        core["nd" /* ɵɵtemplate */](1, AddonBadgesUserBadgesPage_ion_list_15_ion_item_1_Template, 10, 10, "ion-item", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.badges.items);
    }
}
/**
 * Page that displays the list of calendar events.
 */
let user_badges_page_AddonBadgesUserBadgesPage = /*@__PURE__*/ (() => {
    class AddonBadgesUserBadgesPage {
        constructor() {
            var _a, _b;
            this.currentTime = 0;
            const courseId = (_a = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId')) !== null && _a !== void 0 ? _a : 0; // Use 0 for site badges.
            const userId = (_b = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId')) !== null && _b !== void 0 ? _b : sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.badges = new user_badges_page_AddonBadgesUserBadgesManager(AddonBadgesUserBadgesPage, courseId, userId);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchInitialBadges();
                this.badges.start(this.splitView);
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.badges.destroy();
        }
        /**
         * Refresh the badges.
         *
         * @param refresher Refresher.
         */
        refreshBadges(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(services_badges["a" /* AddonBadges */].invalidateUserBadges(this.badges.courseId, this.badges.userId));
                yield utils["a" /* CoreUtils */].ignoreErrors(this.fetchBadges());
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Obtain the initial list of badges.
         */
        fetchInitialBadges() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.currentTime = time["a" /* CoreTimeUtils */].timestamp();
                try {
                    yield this.fetchBadges();
                }
                catch (message) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'Error loading badges');
                    this.badges.setItems([]);
                }
            });
        }
        /**
         * Update the list of badges.
         */
        fetchBadges() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const badges = yield services_badges["a" /* AddonBadges */].getUserBadges(this.badges.courseId, this.badges.userId);
                this.badges.setItems(badges);
            });
        }
    }
    AddonBadgesUserBadgesPage.ɵfac = function AddonBadgesUserBadgesPage_Factory(t) { return new (t || AddonBadgesUserBadgesPage)(); };
    AddonBadgesUserBadgesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonBadgesUserBadgesPage, selectors: [["page-addon-badges-user-badges"]], viewQuery: function AddonBadgesUserBadgesPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 16, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-trophy", 3, "message", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], ["icon", "fas-trophy", 3, "message"], [1, "ion-no-margin"], ["button", "", "class", "ion-text-wrap", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["core-external-content", "", 3, "src", "alt"], [1, "item-heading"], ["slot", "end", "color", "danger", 4, "ngIf"], ["slot", "end", "color", "danger"]], template: function AddonBadgesUserBadgesPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonBadgesUserBadgesPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshBadges($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, AddonBadgesUserBadgesPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 5);
                core["nd" /* ɵɵtemplate */](15, AddonBadgesUserBadgesPage_ion_list_15_Template, 2, 1, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "addon.badges.badges"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.badges.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.badges.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.badges.empty);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.badges.empty);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["f" /* IonAvatar */], external_content["a" /* CoreExternalContentDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonBadgesUserBadgesPage;
})();
/**
 * Helper class to manage badges.
 */
class user_badges_page_AddonBadgesUserBadgesManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent, courseId, userId) {
        super(pageComponent);
        this.courseId = courseId;
        this.userId = userId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(badge) {
        return badge.uniquehash;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            courseId: this.courseId,
            userId: this.userId,
        };
    }
}

// CONCATENATED MODULE: ./src/addons/badges/badges-lazy.module.ts
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









const mobileRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: user_badges_page_AddonBadgesUserBadgesPage,
    },
    {
        path: ':badgeHash',
        component: issued_badge_page_AddonBadgesIssuedBadgePage,
    },
];
const tabletRoutes = [
    {
        path: '',
        component: user_badges_page_AddonBadgesUserBadgesPage,
        children: [
            {
                path: ':badgeHash',
                component: issued_badge_page_AddonBadgesIssuedBadgePage,
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let badges_lazy_module_AddonBadgesLazyModule = /*@__PURE__*/ (() => {
    class AddonBadgesLazyModule {
    }
    AddonBadgesLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonBadgesLazyModule });
    AddonBadgesLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonBadgesLazyModule_Factory(t) { return new (t || AddonBadgesLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ]] });
    return AddonBadgesLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](badges_lazy_module_AddonBadgesLazyModule, { declarations: [user_badges_page_AddonBadgesUserBadgesPage,
            issued_badge_page_AddonBadgesIssuedBadgePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]] });
})();


/***/ })

}]);