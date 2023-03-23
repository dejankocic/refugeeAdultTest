(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "R12+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsDeviceInfoPageModule", function() { return /* binding */ deviceinfo_module_CoreSettingsDeviceInfoPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/lang.ts
var services_lang = __webpack_require__("Ao69");

// EXTERNAL MODULE: ./src/core/services/file.ts
var file = __webpack_require__("EmGO");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/pushnotifications.ts
var pushnotifications = __webpack_require__("Afn4");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/long-press.ts
var long_press = __webpack_require__("iJls");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/core/features/settings/pages/deviceinfo/deviceinfo.ts

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


















function CoreSettingsDeviceInfoPage_p_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Sc" /* ɵɵpipeBind3 */](2, 1, ctx_r0.deviceInfo.compilationTime, "LLL Z", false));
    }
}
function CoreSettingsDeviceInfoPage_p_26_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.deviceInfo.lastCommit);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_27_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1, " *");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
}
function CoreSettingsDeviceInfoPage_ion_item_27_p_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r18.deviceInfo.siteVersion);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_27_p_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r19 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r19.deviceInfo.siteId);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_27_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_27_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r21); const ctx_r20 = core["Oc" /* ɵɵnextContext */](); return ctx_r20.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["nd" /* ɵɵtemplate */](5, CoreSettingsDeviceInfoPage_ion_item_27_ng_container_5_Template, 2, 0, "ng-container", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["Ec" /* ɵɵelementStart */](7, "a", 9);
        core["pd" /* ɵɵtext */](8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, CoreSettingsDeviceInfoPage_ion_item_27_p_9_Template, 2, 1, "p", 7);
        core["nd" /* ɵɵtemplate */](10, CoreSettingsDeviceInfoPage_ion_item_27_p_10_Template, 2, 1, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.settings.siteinfo"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.deviceInfo.isPrefixedUrl);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r2.deviceInfo.siteUrl, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r2.deviceInfo.siteUrl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.deviceInfo.siteVersion);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.deviceInfo.siteId);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_28_a_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "a", 11);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r22.deviceInfo.fileSystemRoot, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r22.deviceInfo.fileSystemRoot);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_28_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r23 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r23.deviceInfo.fileSystemRoot);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_28_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_28_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r25); const ctx_r24 = core["Oc" /* ɵɵnextContext */](); return ctx_r24.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["nd" /* ɵɵtemplate */](6, CoreSettingsDeviceInfoPage_ion_item_28_a_6_Template, 2, 2, "a", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, CoreSettingsDeviceInfoPage_ion_item_28_p_7_Template, 2, 1, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.settings.filesystemroot"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.fsClickable);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r3.fsClickable);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_29_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r27); const ctx_r26 = core["Oc" /* ɵɵnextContext */](); return ctx_r26.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.navigatoruseragent"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r4.deviceInfo.userAgent);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_30_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r29); const ctx_r28 = core["Oc" /* ɵɵnextContext */](); return ctx_r28.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.navigatorlanguage"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r5.deviceInfo.browserLanguage);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_31_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r31); const ctx_r30 = core["Oc" /* ɵɵnextContext */](); return ctx_r30.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.settings.currentlanguage"));
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", ctx_r6.currentLangName, " (", ctx_r6.deviceInfo.currentLanguage, ")");
    }
}
function CoreSettingsDeviceInfoPage_ion_item_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_32_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r32 = core["Oc" /* ɵɵnextContext */](); return ctx_r32.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r7 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.locationhref"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r7.deviceInfo.locationHref);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_33_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r35); const ctx_r34 = core["Oc" /* ɵɵnextContext */](); return ctx_r34.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.displayformat"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, "core." + ctx_r8.deviceInfo.deviceType));
    }
}
function CoreSettingsDeviceInfoPage_ion_item_34_Template(rf, ctx) {
    if (rf & 1) {
        const _r37 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_34_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r37); const ctx_r36 = core["Oc" /* ɵɵnextContext */](); return ctx_r36.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r9 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.deviceos"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r9.deviceOsTranslated);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_35_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r39); const ctx_r38 = core["Oc" /* ɵɵnextContext */](); return ctx_r38.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r10 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.screen"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r10.deviceInfo.screen);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_52_Template(rf, ctx) {
    if (rf & 1) {
        const _r41 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_52_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r41); const ctx_r40 = core["Oc" /* ɵɵnextContext */](); return ctx_r40.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r11 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.cordovaversion"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r11.deviceInfo.cordovaVersion);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_53_Template(rf, ctx) {
    if (rf & 1) {
        const _r43 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_53_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r43); const ctx_r42 = core["Oc" /* ɵɵnextContext */](); return ctx_r42.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r12 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.cordovadeviceplatform"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r12.deviceInfo.platform);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_54_Template(rf, ctx) {
    if (rf & 1) {
        const _r45 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_54_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r45); const ctx_r44 = core["Oc" /* ɵɵnextContext */](); return ctx_r44.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r13 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.cordovadeviceosversion"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r13.deviceInfo.osVersion);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_55_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_55_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r47); const ctx_r46 = core["Oc" /* ɵɵnextContext */](); return ctx_r46.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r14 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.cordovadevicemodel"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r14.deviceInfo.model);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_56_Template(rf, ctx) {
    if (rf & 1) {
        const _r49 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_56_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r49); const ctx_r48 = core["Oc" /* ɵɵnextContext */](); return ctx_r48.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r15 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.cordovadeviceuuid"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r15.deviceInfo.uuid);
    }
}
function CoreSettingsDeviceInfoPage_ion_item_57_Template(rf, ctx) {
    if (rf & 1) {
        const _r51 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_ion_item_57_Template_ion_item_longPress_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r51); const ctx_r50 = core["Oc" /* ɵɵnextContext */](); return ctx_r50.copyItemInfo($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 6);
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
        const ctx_r16 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.pushid"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r16.deviceInfo.pushId);
    }
}
/**
 * Page that displays the device information.
 */
let deviceinfo_CoreSettingsDeviceInfoPage = /*@__PURE__*/ (() => {
    class CoreSettingsDeviceInfoPage {
        constructor() {
            var _a;
            this.fsClickable = false;
            const appProvider = app["a" /* CoreApp */].instance;
            const sitesProvider = sites["b" /* CoreSites */].instance;
            const device = singletons["i" /* Device */].instance;
            const translate = singletons["L" /* Translate */].instance;
            const navigator = window.navigator;
            this.deviceInfo = {
                versionName: constants["a" /* CoreConstants */].CONFIG.versionname,
                versionCode: constants["a" /* CoreConstants */].CONFIG.versioncode,
                compilationTime: constants["a" /* CoreConstants */].BUILD.compilationTime || 0,
                lastCommit: constants["a" /* CoreConstants */].BUILD.lastCommitHash || '',
                networkStatus: appProvider.isOnline() ? 'online' : 'offline',
                wifiConnection: appProvider.isWifi() ? 'yes' : 'no',
                localNotifAvailable: local_notifications["a" /* CoreLocalNotifications */].isAvailable() ? 'yes' : 'no',
                pushId: pushnotifications["a" /* CorePushNotifications */].getPushId(),
                deviceType: '',
            };
            if (window.location && window.location.href) {
                const url = window.location.href;
                this.deviceInfo.locationHref = url.indexOf('#') > 0 ? url.substr(0, url.indexOf('#')) : url;
            }
            if (window.screen) {
                this.deviceInfo.screen = window.innerWidth + 'x' + window.innerHeight +
                    ' (' + window.screen.width + 'x' + window.screen.height + ')';
            }
            if (appProvider.isMobile()) {
                this.deviceInfo.deviceType = singletons["C" /* Platform */].is('tablet') ? 'tablet' : 'phone';
                if (appProvider.isAndroid()) {
                    this.deviceInfo.deviceOs = 'android';
                    this.deviceOsTranslated = 'Android';
                }
                else if (appProvider.isIOS()) {
                    this.deviceInfo.deviceOs = 'ios';
                    this.deviceOsTranslated = 'iOS';
                }
                else {
                    const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                    if (matches && matches.length > 1) {
                        this.deviceInfo.deviceOs = matches[1];
                        this.deviceOsTranslated = matches[1];
                    }
                    else {
                        this.deviceInfo.deviceOs = 'unknown';
                        this.deviceOsTranslated = translate.instant('core.unknown');
                    }
                }
            }
            else {
                this.deviceInfo.deviceType = 'browser';
                const matches = navigator.userAgent.match(/\(([^)]*)\)/);
                if (matches && matches.length > 1) {
                    this.deviceInfo.deviceOs = matches[1];
                    this.deviceOsTranslated = matches[1];
                }
                else {
                    this.deviceInfo.deviceOs = 'unknown';
                    this.deviceOsTranslated = translate.instant('core.unknown');
                }
            }
            if (navigator) {
                if (navigator.userAgent) {
                    this.deviceInfo.userAgent = navigator.userAgent;
                }
                if (navigator.language) {
                    this.deviceInfo.browserLanguage = navigator.language;
                }
            }
            if (device) {
                if (device.cordova) {
                    this.deviceInfo.cordovaVersion = device.cordova;
                }
                if (device.platform) {
                    this.deviceInfo.platform = device.platform;
                }
                if (device.version) {
                    this.deviceInfo.osVersion = device.version;
                }
                if (device.model) {
                    this.deviceInfo.model = device.model;
                }
                if (device.uuid) {
                    this.deviceInfo.uuid = device.uuid;
                }
            }
            const currentSite = sitesProvider.getCurrentSite();
            this.deviceInfo.siteUrl = (currentSite === null || currentSite === void 0 ? void 0 : currentSite.getURL()) ||
                (typeof constants["a" /* CoreConstants */].CONFIG.siteurl == 'string' && constants["a" /* CoreConstants */].CONFIG.siteurl) || undefined;
            this.deviceInfo.isPrefixedUrl = !!constants["a" /* CoreConstants */].CONFIG.siteurl;
            this.deviceInfo.siteId = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getId();
            this.deviceInfo.siteVersion = (_a = currentSite === null || currentSite === void 0 ? void 0 : currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.release;
            // Refresh online status when changes.
            this.onlineObserver = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.deviceInfo.networkStatus = appProvider.isOnline() ? 'online' : 'offline';
                });
            });
            this.asyncInit();
        }
        /**
         * Async part of the constructor.
         */
        asyncInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const fileProvider = file["a" /* CoreFile */].instance;
                const lang = yield services_lang["a" /* CoreLang */].getCurrentLanguage();
                this.deviceInfo.currentLanguage = lang;
                this.currentLangName = constants["a" /* CoreConstants */].CONFIG.languages[lang];
                if (fileProvider.isAvailable()) {
                    const basepath = yield fileProvider.getBasePath();
                    this.deviceInfo.fileSystemRoot = basepath;
                    this.fsClickable = fileProvider.usesHTMLAPI();
                }
            });
        }
        /**
         * Copies device info into the clipboard.
         */
        copyInfo() {
            utils["a" /* CoreUtils */].copyToClipboard(JSON.stringify(this.deviceInfo));
        }
        /**
         * Copies device info item into the clipboard.
         *
         * @param e Event.
         */
        copyItemInfo(e) {
            var _a, _b;
            const el = e.target;
            const text = (_b = (_a = el === null || el === void 0 ? void 0 : el.closest('ion-item')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
            text && utils["a" /* CoreUtils */].copyToClipboard(text);
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            this.onlineObserver && this.onlineObserver.unsubscribe();
        }
    }
    CoreSettingsDeviceInfoPage.ɵfac = function CoreSettingsDeviceInfoPage_Factory(t) { return new (t || CoreSettingsDeviceInfoPage)(); };
    CoreSettingsDeviceInfoPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsDeviceInfoPage, selectors: [["page-core-app-settings-deviceinfo"]], decls: 66, vars: 52, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-clipboard", "aria-hidden", "true"], [3, "longPress"], [1, "ion-text-wrap"], [4, "ngIf"], [3, "longPress", 4, "ngIf"], ["core-link", "", "auto-login", "yes", 3, "href"], ["core-link", "", "auto-login", "no", 3, "href", 4, "ngIf"], ["core-link", "", "auto-login", "no", 3, "href"]], template: function CoreSettingsDeviceInfoPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-buttons", 2);
                core["Ec" /* ɵɵelementStart */](9, "ion-button", 3);
                core["Mc" /* ɵɵlistener */]("click", function CoreSettingsDeviceInfoPage_Template_ion_button_click_9_listener() { return ctx.copyInfo(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content");
                core["Ec" /* ɵɵelementStart */](13, "ion-item", 5);
                core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_Template_ion_item_longPress_13_listener($event) { return ctx.copyItemInfo($event); });
                core["Ec" /* ɵɵelementStart */](14, "ion-label", 6);
                core["Ec" /* ɵɵelementStart */](15, "h2");
                core["pd" /* ɵɵtext */](16);
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "p");
                core["pd" /* ɵɵtext */](19);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](20, "ion-item", 5);
                core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_Template_ion_item_longPress_20_listener($event) { return ctx.copyItemInfo($event); });
                core["Ec" /* ɵɵelementStart */](21, "ion-label", 6);
                core["Ec" /* ɵɵelementStart */](22, "h2");
                core["pd" /* ɵɵtext */](23);
                core["Pc" /* ɵɵpipe */](24, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](25, CoreSettingsDeviceInfoPage_p_25_Template, 3, 5, "p", 7);
                core["nd" /* ɵɵtemplate */](26, CoreSettingsDeviceInfoPage_p_26_Template, 2, 1, "p", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](27, CoreSettingsDeviceInfoPage_ion_item_27_Template, 11, 8, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](28, CoreSettingsDeviceInfoPage_ion_item_28_Template, 8, 5, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](29, CoreSettingsDeviceInfoPage_ion_item_29_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](30, CoreSettingsDeviceInfoPage_ion_item_30_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](31, CoreSettingsDeviceInfoPage_ion_item_31_Template, 7, 5, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](32, CoreSettingsDeviceInfoPage_ion_item_32_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](33, CoreSettingsDeviceInfoPage_ion_item_33_Template, 8, 6, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](34, CoreSettingsDeviceInfoPage_ion_item_34_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](35, CoreSettingsDeviceInfoPage_ion_item_35_Template, 7, 4, "ion-item", 8);
                core["Ec" /* ɵɵelementStart */](36, "ion-item", 5);
                core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_Template_ion_item_longPress_36_listener($event) { return ctx.copyItemInfo($event); });
                core["Ec" /* ɵɵelementStart */](37, "ion-label", 6);
                core["Ec" /* ɵɵelementStart */](38, "h2");
                core["pd" /* ɵɵtext */](39);
                core["Pc" /* ɵɵpipe */](40, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](41, "p");
                core["pd" /* ɵɵtext */](42);
                core["Pc" /* ɵɵpipe */](43, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](44, "ion-item", 5);
                core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_Template_ion_item_longPress_44_listener($event) { return ctx.copyItemInfo($event); });
                core["Ec" /* ɵɵelementStart */](45, "ion-label", 6);
                core["Ec" /* ɵɵelementStart */](46, "h2");
                core["pd" /* ɵɵtext */](47);
                core["Pc" /* ɵɵpipe */](48, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](49, "p");
                core["pd" /* ɵɵtext */](50);
                core["Pc" /* ɵɵpipe */](51, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](52, CoreSettingsDeviceInfoPage_ion_item_52_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](53, CoreSettingsDeviceInfoPage_ion_item_53_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](54, CoreSettingsDeviceInfoPage_ion_item_54_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](55, CoreSettingsDeviceInfoPage_ion_item_55_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](56, CoreSettingsDeviceInfoPage_ion_item_56_Template, 7, 4, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](57, CoreSettingsDeviceInfoPage_ion_item_57_Template, 7, 4, "ion-item", 8);
                core["Ec" /* ɵɵelementStart */](58, "ion-item", 5);
                core["Mc" /* ɵɵlistener */]("longPress", function CoreSettingsDeviceInfoPage_Template_ion_item_longPress_58_listener($event) { return ctx.copyItemInfo($event); });
                core["Ec" /* ɵɵelementStart */](59, "ion-label", 6);
                core["Ec" /* ɵɵelementStart */](60, "h2");
                core["pd" /* ɵɵtext */](61);
                core["Pc" /* ɵɵpipe */](62, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](63, "p");
                core["pd" /* ɵɵtext */](64);
                core["Pc" /* ɵɵpipe */](65, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 30, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 32, "core.settings.deviceinfo"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 34, "core.settings.copyinfo"));
                core["lc" /* ɵɵadvance */](7);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 36, "core.settings.appversion"));
                core["lc" /* ɵɵadvance */](3);
                core["sd" /* ɵɵtextInterpolate2 */]("", ctx.deviceInfo.versionName, " (", ctx.deviceInfo.versionCode, ")");
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 38, "core.settings.compilationinfo"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.compilationTime);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.lastCommit);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.siteUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.fileSystemRoot);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.userAgent);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.browserLanguage);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.currentLanguage);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.locationHref);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.deviceType);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.deviceOs && ctx.deviceOsTranslated);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.screen);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](40, 40, "core.settings.networkstatus"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](43, 42, "core." + ctx.deviceInfo.networkStatus));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](48, 44, "core.settings.wificonnection"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](51, 46, "core." + ctx.deviceInfo.wifiConnection));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.cordovaVersion);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.platform);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.osVersion);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.model);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.uuid);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.deviceInfo.pushId);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](62, 48, "core.settings.localnotifavailable"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](65, 50, "core." + ctx.deviceInfo.localNotifAvailable));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], ionic_angular["H" /* IonItem */], long_press["a" /* CoreLongPressDirective */], ionic_angular["N" /* IonLabel */], common["t" /* NgIf */], directives_link["a" /* CoreLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: [".item[_ngcontent-%COMP%]{-webkit-user-select:text;user-select:text;cursor:text}"] });
    return CoreSettingsDeviceInfoPage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/deviceinfo/deviceinfo.module.ts
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
        component: deviceinfo_CoreSettingsDeviceInfoPage,
    },
];
let deviceinfo_module_CoreSettingsDeviceInfoPageModule = /*@__PURE__*/ (() => {
    class CoreSettingsDeviceInfoPageModule {
    }
    CoreSettingsDeviceInfoPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsDeviceInfoPageModule });
    CoreSettingsDeviceInfoPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsDeviceInfoPageModule_Factory(t) { return new (t || CoreSettingsDeviceInfoPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsDeviceInfoPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](deviceinfo_module_CoreSettingsDeviceInfoPageModule, { declarations: [deviceinfo_CoreSettingsDeviceInfoPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);