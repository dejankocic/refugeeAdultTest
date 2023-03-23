(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "uFKL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return /* binding */ site_module_CoreLoginSitePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/config.ts + 1 modules
var config = __webpack_require__("BBqZ");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var services_sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/classes/site.ts
var classes_site = __webpack_require__("kxYv");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/url.ts
var singletons_url = __webpack_require__("oZnq");

// EXTERNAL MODULE: ./src/core/services/utils/url.ts
var utils_url = __webpack_require__("mvS9");

// EXTERNAL MODULE: ./src/core/features/login/components/site-help/site-help.ts
var site_help = __webpack_require__("JpIC");

// EXTERNAL MODULE: ./src/core/features/login/components/site-onboarding/site-onboarding.ts
var site_onboarding = __webpack_require__("m2Ry");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/urlschemes.ts
var urlschemes = __webpack_require__("y9BN");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/auto-focus.ts
var auto_focus = __webpack_require__("6uVz");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/site/site.ts

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


























const _c0 = ["siteFormEl"];
function CoreLoginSitePage_form_15_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 15);
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](6, "ion-input", 16);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.login.siteaddress"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.login.siteaddressplaceholder"));
        core["Vc" /* ɵɵproperty */]("core-auto-focus", ctx_r6.showKeyboard && !ctx_r6.showScanQR);
    }
}
function CoreLoginSitePage_form_15_ng_container_3_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 26);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePage_form_15_ng_container_3_ion_item_14_Template_ion_item_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](3); return ctx_r13.connect($event, ctx_r13.enteredSiteUrl.url); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Ec" /* ɵɵelementStart */](2, "ion-thumbnail", 27);
        core["zc" /* ɵɵelement */](3, "ion-icon", 28);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "h2", 29);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["pd" /* ɵɵtext */](9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](3);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.login.connect"));
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.login.yourenteredsite"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r9.enteredSiteUrl.noProtocolUrl);
    }
}
function CoreLoginSitePage_form_15_ng_container_3_div_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 30);
        core["zc" /* ɵɵelement */](1, "ion-spinner");
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loading"));
    }
}
function CoreLoginSitePage_form_15_ng_container_3_ng_container_17_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
const _c1 = function (a0) { return { site: a0 }; };
function CoreLoginSitePage_form_15_ng_container_3_ng_container_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreLoginSitePage_form_15_ng_container_3_ng_container_17_ng_container_1_Template, 1, 0, "ng-container", 31);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const site_r15 = ctx.$implicit;
        core["Oc" /* ɵɵnextContext */](3);
        const _r3 = core["fd" /* ɵɵreference */](23);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, site_r15));
    }
}
function CoreLoginSitePage_form_15_ng_container_3_div_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 32);
        core["zc" /* ɵɵelement */](1, "ion-spinner");
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loading"));
    }
}
function CoreLoginSitePage_form_15_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 15);
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-input", 17);
        core["Mc" /* ɵɵlistener */]("ionChange", function CoreLoginSitePage_form_15_ng_container_3_Template_ion_input_ionChange_6_listener($event) { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r17 = core["Oc" /* ɵɵnextContext */](2); return ctx_r17.searchSite($event, ctx_r17.siteForm.value.siteUrl); });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-list", 18);
        core["Ec" /* ɵɵelementStart */](9, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](10, "ion-label");
        core["Ec" /* ɵɵelementStart */](11, "h2", 20);
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](14, CoreLoginSitePage_form_15_ng_container_3_ion_item_14_Template, 10, 7, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](15, "div", 22);
        core["nd" /* ɵɵtemplate */](16, CoreLoginSitePage_form_15_ng_container_3_div_16_Template, 3, 3, "div", 23);
        core["nd" /* ɵɵtemplate */](17, CoreLoginSitePage_form_15_ng_container_3_ng_container_17_Template, 2, 4, "ng-container", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](18, CoreLoginSitePage_form_15_ng_container_3_div_18_Template, 3, 3, "div", 25);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 14, "core.login.siteaddress"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](7, 16, "core.login.siteaddressplaceholder"));
        core["Vc" /* ɵɵproperty */]("core-auto-focus", ctx_r7.showKeyboard && !ctx_r7.showScanQR);
        core["lc" /* ɵɵadvance */](2);
        core["qc" /* ɵɵclassProp */]("hidden", !ctx_r7.hasSites && !ctx_r7.enteredSiteUrl);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 18, "core.login.selectsite"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.enteredSiteUrl);
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("hidden", !ctx_r7.hasSites)("dimmed", ctx_r7.loadingSites);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.loadingSites);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.sites);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r7.hasSites && ctx_r7.loadingSites);
    }
}
function CoreLoginSitePage_form_15_ion_item_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 33);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "ion-button", 34);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r8.siteForm.valid);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.login.connect"), " ");
    }
}
function CoreLoginSitePage_form_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 12, 13);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginSitePage_form_15_Template_form_ngSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r20); const ctx_r19 = core["Oc" /* ɵɵnextContext */](); return ctx_r19.connect($event, ctx_r19.siteForm.value.siteUrl); });
        core["nd" /* ɵɵtemplate */](2, CoreLoginSitePage_form_15_ng_container_2_Template, 8, 7, "ng-container", 9);
        core["nd" /* ɵɵtemplate */](3, CoreLoginSitePage_form_15_ng_container_3_Template, 19, 20, "ng-container", 9);
        core["nd" /* ɵɵtemplate */](4, CoreLoginSitePage_form_15_ion_item_4_Template, 5, 4, "ion-item", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r0.siteForm);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.siteSelector == "url");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.siteSelector != "url");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.siteSelector == "url");
    }
}
function CoreLoginSitePage_ng_container_16_ion_list_1_ion_searchbar_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-searchbar", 36);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreLoginSitePage_ng_container_16_ion_list_1_ion_searchbar_6_Template_ion_searchbar_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r25); const ctx_r24 = core["Oc" /* ɵɵnextContext */](3); return ctx_r24.filter = $event; })("ionInput", function CoreLoginSitePage_ng_container_16_ion_list_1_ion_searchbar_6_Template_ion_searchbar_ionInput_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r25); const ctx_r26 = core["Oc" /* ɵɵnextContext */](3); return ctx_r26.filterChanged($event); })("ionCancel", function CoreLoginSitePage_ng_container_16_ion_list_1_ion_searchbar_6_Template_ion_searchbar_ionCancel_0_listener() { core["gd" /* ɵɵrestoreView */](_r25); const ctx_r27 = core["Oc" /* ɵɵnextContext */](3); return ctx_r27.filterChanged(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r22.filter)("placeholder", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.login.findyoursite"));
    }
}
function CoreLoginSitePage_ng_container_16_ion_list_1_ng_container_7_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function CoreLoginSitePage_ng_container_16_ion_list_1_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreLoginSitePage_ng_container_16_ion_list_1_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 31);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const site_r28 = ctx.$implicit;
        core["Oc" /* ɵɵnextContext */](3);
        const _r3 = core["fd" /* ɵɵreference */](23);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, site_r28));
    }
}
function CoreLoginSitePage_ng_container_16_ion_list_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 33);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2", 20);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreLoginSitePage_ng_container_16_ion_list_1_ion_searchbar_6_Template, 2, 4, "ion-searchbar", 35);
        core["nd" /* ɵɵtemplate */](7, CoreLoginSitePage_ng_container_16_ion_list_1_ng_container_7_Template, 2, 4, "ng-container", 24);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.login.selectsite"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r21.fixedSites.length > 4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r21.filteredSites);
    }
}
function CoreLoginSitePage_ng_container_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreLoginSitePage_ng_container_16_ion_list_1_Template, 8, 5, "ion-list", 9);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.siteSelector == "list");
    }
}
function CoreLoginSitePage_ng_container_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "div", 37);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 38);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePage_ng_container_17_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r31); const ctx_r30 = core["Oc" /* ɵɵnextContext */](); return ctx_r30.showInstructionsAndScanQR(); });
        core["zc" /* ɵɵelement */](5, "ion-icon", 39);
        core["Ec" /* ɵɵelementStart */](6, "ion-label");
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "core.login.or"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 4, "core.scanqr"));
    }
}
function CoreLoginSitePage_ng_template_22_ion_thumbnail_1_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 45);
    }
    if (rf & 2) {
        const site_r32 = core["Oc" /* ɵɵnextContext */](2).site;
        core["Vc" /* ɵɵproperty */]("src", site_r32.imageurl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function CoreLoginSitePage_ng_template_22_ion_thumbnail_1_img_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 46);
    }
}
function CoreLoginSitePage_ng_template_22_ion_thumbnail_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-thumbnail", 0);
        core["nd" /* ɵɵtemplate */](1, CoreLoginSitePage_ng_template_22_ion_thumbnail_1_img_1_Template, 1, 1, "img", 43);
        core["nd" /* ɵɵtemplate */](2, CoreLoginSitePage_ng_template_22_ion_thumbnail_1_img_2_Template, 1, 0, "img", 44);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r32 = core["Oc" /* ɵɵnextContext */]().site;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", site_r32.imageurl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !site_r32.imageurl);
    }
}
function CoreLoginSitePage_ng_template_22_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 47);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r32 = core["Oc" /* ɵɵnextContext */]().site;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](site_r32.title);
    }
}
function CoreLoginSitePage_ng_template_22_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r32 = core["Oc" /* ɵɵnextContext */]().site;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](site_r32.noProtocolUrl);
    }
}
function CoreLoginSitePage_ng_template_22_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r32 = core["Oc" /* ɵɵnextContext */]().site;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](site_r32.location);
    }
}
function CoreLoginSitePage_ng_template_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r45 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 40);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePage_ng_template_22_Template_ion_item_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r45); const site_r32 = ctx.site; const ctx_r44 = core["Oc" /* ɵɵnextContext */](); return ctx_r44.connect($event, site_r32.url, site_r32); });
        core["nd" /* ɵɵtemplate */](1, CoreLoginSitePage_ng_template_22_ion_thumbnail_1_Template, 3, 2, "ion-thumbnail", 41);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["nd" /* ɵɵtemplate */](3, CoreLoginSitePage_ng_template_22_p_3_Template, 2, 1, "p", 42);
        core["nd" /* ɵɵtemplate */](4, CoreLoginSitePage_ng_template_22_p_4_Template, 2, 1, "p", 9);
        core["nd" /* ɵɵtemplate */](5, CoreLoginSitePage_ng_template_22_p_5_Template, 2, 1, "p", 9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r32 = ctx.site;
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["mc" /* ɵɵattribute */]("aria-label", site_r32.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.siteFinderSettings.displayimage);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", site_r32.title);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", site_r32.noProtocolUrl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", site_r32.location);
    }
}
/**
 * Page that displays a "splash screen" while the app is being initialized.
 */
let site_CoreLoginSitePage = /*@__PURE__*/ (() => {
    class CoreLoginSitePage {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.siteSelector = 'sitefinder';
            this.showKeyboard = false;
            this.filter = '';
            this.sites = [];
            this.hasSites = false;
            this.loadingSites = false;
            let url = '';
            this.siteSelector = constants["a" /* CoreConstants */].CONFIG.multisitesdisplay;
            const siteFinderSettings = constants["a" /* CoreConstants */].CONFIG.sitefindersettings || {};
            this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
            // Load fixed sites if they're set.
            if (login_helper["a" /* CoreLoginHelper */].hasSeveralFixedSites()) {
                url = this.initSiteSelector();
            }
            else if (constants["a" /* CoreConstants */].CONFIG.enableonboarding && !app["a" /* CoreApp */].isIOS()) {
                this.initOnboarding();
            }
            this.showScanQR = login_helper["a" /* CoreLoginHelper */].displayQRInSiteScreen();
            this.siteForm = this.formBuilder.group({
                siteUrl: [url, this.moodleUrlValidator()],
            });
            this.searchFunction = utils["a" /* CoreUtils */].debounce((search) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                search = search.trim();
                if (search.length >= 3) {
                    // Update the sites list.
                    const sites = yield services_sites["b" /* CoreSites */].findSites(search);
                    // Add UI tweaks.
                    this.sites = this.extendCoreLoginSiteInfo(sites);
                    this.hasSites = !!this.sites.length;
                }
                else {
                    // Not reseting the array to allow animation to be displayed.
                    this.hasSites = false;
                }
                this.loadingSites = false;
            }), 1000);
        }
        /**
         * Initialize the component.
         */
        ngOnInit() {
            this.showKeyboard = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('showKeyboard');
        }
        /**
         * Initialize the site selector.
         *
         * @return URL of the first site.
         */
        initSiteSelector() {
            this.fixedSites = this.extendCoreLoginSiteInfo(login_helper["a" /* CoreLoginHelper */].getFixedSites());
            this.siteSelector = 'list'; // In case it's not defined
            // Do not show images if none are set.
            if (!this.fixedSites.some((site) => !!site.imageurl)) {
                this.siteFinderSettings.displayimage = false;
            }
            this.filteredSites = this.fixedSites;
            return this.fixedSites[0].url;
        }
        /**
         * Initialize and show onboarding if needed.
         *
         * @return Promise resolved when done.
         */
        initOnboarding() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const onboardingDone = yield config["a" /* CoreConfig */].get(login_helper["b" /* CoreLoginHelperProvider */].ONBOARDING_DONE, false);
                if (!onboardingDone) {
                    // Check onboarding.
                    this.showOnboarding();
                }
            });
        }
        /**
         * Extend info of Login Site Info to get UI tweaks.
         *
         * @param sites Sites list.
         * @return Sites list with extended info.
         */
        extendCoreLoginSiteInfo(sites) {
            return sites.map((site) => {
                site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? singletons_url["a" /* CoreUrl */].removeProtocol(site.url) : '';
                const name = this.siteFinderSettings.displaysitename ? site.name : '';
                const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
                // Set title with parenthesis if both name and alias are present.
                site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
                const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                    utils["a" /* CoreUtils */].getCountryName(site.countrycode) : '';
                const city = this.siteFinderSettings.displaycity && site.city ?
                    site.city : '';
                // Separate location with hiphen if both country and city are present.
                site.location = city && country ? city + ' - ' + country : city + country;
                return site;
            });
        }
        /**
         * Validate Url.
         *
         * @return {ValidatorFn} Validation results.
         */
        moodleUrlValidator() {
            return (control) => {
                const value = control.value.trim();
                let valid = value.length >= 3 && singletons_url["a" /* CoreUrl */].isValidMoodleUrl(value);
                if (!valid) {
                    const demo = !!services_sites["b" /* CoreSites */].getDemoSiteData(value);
                    if (demo) {
                        valid = true;
                    }
                }
                return valid ? null : { siteUrl: { value: control.value } };
            };
        }
        /**
         * Show a help modal.
         */
        showHelp() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield dom["a" /* CoreDomUtils */].openModal({
                    component: site_help["a" /* CoreLoginSiteHelpComponent */],
                    cssClass: 'core-modal-fullscreen',
                });
            });
        }
        /**
         * Show an onboarding modal.
         */
        showOnboarding() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield dom["a" /* CoreDomUtils */].openModal({
                    component: site_onboarding["a" /* CoreLoginSiteOnboardingComponent */],
                    cssClass: 'core-modal-fullscreen',
                });
            });
        }
        /**
         * Try to connect to a site.
         *
         * @param e Event.
         * @param url The URL to connect to.
         * @param foundSite The site clicked, if any, from the found sites list.
         * @return Promise resolved when done.
         */
        connect(e, url, foundSite) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                app["a" /* CoreApp */].closeKeyboard();
                if (!url) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.login.siteurlrequired', true);
                    return;
                }
                if (!app["a" /* CoreApp */].isOnline()) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.networkerrormsg', true);
                    return;
                }
                url = url.trim();
                if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                    this.showLoginIssue(null, new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('core.login.errorexampleurl')));
                    return;
                }
                const siteData = services_sites["b" /* CoreSites */].getDemoSiteData(url);
                if (siteData) {
                    // It's a demo site.
                    yield this.loginDemoSite(siteData);
                }
                else {
                    // Not a demo site.
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                    let checkResult;
                    try {
                        checkResult = yield services_sites["b" /* CoreSites */].checkSite(url);
                    }
                    catch (error) {
                        // Attempt guessing the domain if the initial check failed
                        const domain = singletons_url["a" /* CoreUrl */].guessMoodleDomain(url);
                        if (domain && domain != url) {
                            try {
                                checkResult = yield services_sites["b" /* CoreSites */].checkSite(domain);
                            }
                            catch (secondError) {
                                // Try to use the first error.
                                modal.dismiss();
                                return this.showLoginIssue(url, error || secondError);
                            }
                        }
                        else {
                            modal.dismiss();
                            return this.showLoginIssue(url, error);
                        }
                    }
                    yield this.login(checkResult, foundSite);
                    modal.dismiss();
                }
            });
        }
        /**
         * Authenticate in a demo site.
         *
         * @param siteData Site data.
         * @return Promise resolved when done.
         */
        loginDemoSite(siteData) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    const data = yield services_sites["b" /* CoreSites */].getUserToken(siteData.url, siteData.username, siteData.password);
                    yield services_sites["b" /* CoreSites */].newSite(data.siteUrl, data.token, data.privateToken);
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true);
                    yield services_navigator["a" /* CoreNavigator */].navigateToSiteHome();
                    return;
                }
                catch (error) {
                    login_helper["a" /* CoreLoginHelper */].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                    if (error.loggedout) {
                        services_navigator["a" /* CoreNavigator */].navigate('/login/sites', { reset: true });
                    }
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Process login to a site.
         *
         * @param response Response obtained from the site check request.
         * @param foundSite The site clicked, if any, from the found sites list.
         *
         * @return Promise resolved after logging in.
         */
        login(response, foundSite) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield services_sites["b" /* CoreSites */].checkApplication(response.config);
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true);
                    if (response.warning) {
                        dom["a" /* CoreDomUtils */].showErrorModal(response.warning, true, 4000);
                    }
                    if (login_helper["a" /* CoreLoginHelper */].isSSOLoginNeeded(response.code)) {
                        // SSO. User needs to authenticate in a browser.
                        login_helper["a" /* CoreLoginHelper */].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                    }
                    else {
                        const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                        if (foundSite && !this.fixedSites) {
                            pageParams['siteName'] = foundSite.name;
                            pageParams['logoUrl'] = foundSite.imageurl;
                        }
                        services_navigator["a" /* CoreNavigator */].navigate('/login/credentials', {
                            params: pageParams,
                        });
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Show an error that aims people to solve the issue.
         *
         * @param url The URL the user was trying to connect to.
         * @param error Error to display.
         */
        showLoginIssue(url, error) {
            let errorMessage = dom["a" /* CoreDomUtils */].getErrorMessage(error);
            if (errorMessage == singletons["L" /* Translate */].instant('core.cannotconnecttrouble')) {
                const found = this.sites.find((site) => site.url == url);
                if (!found) {
                    errorMessage += ' ' + singletons["L" /* Translate */].instant('core.cannotconnectverify');
                }
            }
            let message = '<p>' + errorMessage + '</p>';
            if (url) {
                const fullUrl = utils_url["a" /* CoreUrlUtils */].isAbsoluteURL(url) ? url : 'https://' + url;
                message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
            }
            const buttons = [
                {
                    text: singletons["L" /* Translate */].instant('core.needhelp'),
                    handler: () => {
                        this.showHelp();
                    },
                },
                {
                    text: singletons["L" /* Translate */].instant('core.tryagain'),
                    role: 'cancel',
                },
            ];
            // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
            dom["a" /* CoreDomUtils */].showAlertWithOptions({
                header: singletons["L" /* Translate */].instant('core.cannotconnect', { $a: classes_site["a" /* CoreSite */].MINIMUM_MOODLE_VERSION }),
                message,
                buttons,
            });
        }
        /**
         * The filter has changed.
         *
         * @param event Received Event.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filterChanged(event) {
            var _a;
            const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
            if (!newValue || !this.fixedSites) {
                this.filteredSites = this.fixedSites;
            }
            else {
                this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                    site.location.toLowerCase().indexOf(newValue) > -1);
            }
        }
        /**
         * Find a site on the backend.
         *
         * @param e Event.
         * @param search Text to search.
         */
        searchSite(e, search) {
            this.loadingSites = true;
            search = search.trim();
            if (this.siteForm.valid && search.length >= 3) {
                this.enteredSiteUrl = {
                    url: search,
                    name: 'connect',
                    title: '',
                    location: '',
                    noProtocolUrl: singletons_url["a" /* CoreUrl */].removeProtocol(search),
                };
            }
            else {
                this.enteredSiteUrl = undefined;
            }
            this.searchFunction(search.trim());
        }
        /**
         * Show instructions and scan QR code.
         *
         * @return Promise resolved when done.
         */
        showInstructionsAndScanQR() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield login_helper["a" /* CoreLoginHelper */].showScanQRInstructions();
                    yield this.scanQR();
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Scan a QR code and put its text in the URL input.
         *
         * @return Promise resolved when done.
         */
        scanQR() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Scan for a QR code.
                const text = yield utils["a" /* CoreUtils */].scanQR();
                if (!text) {
                    return;
                }
                if (urlschemes["a" /* CoreCustomURLSchemes */].isCustomURL(text)) {
                    try {
                        yield urlschemes["a" /* CoreCustomURLSchemes */].handleCustomURL(text);
                    }
                    catch (error) {
                        if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                            // An error ocurred, but it's an authentication URL and we have the site URL.
                            this.treatErrorInAuthenticationCustomURL(text, error);
                        }
                        else {
                            urlschemes["a" /* CoreCustomURLSchemes */].treatHandleCustomURLError(error);
                        }
                    }
                    return;
                }
                // Not a custom URL scheme, check if it's a URL scheme to another app.
                const scheme = utils_url["a" /* CoreUrlUtils */].getUrlProtocol(text);
                if (scheme && scheme != 'http' && scheme != 'https') {
                    dom["a" /* CoreDomUtils */].showErrorModal(singletons["L" /* Translate */].instant('core.errorurlschemeinvalidscheme', { $a: text }));
                }
                else if (login_helper["a" /* CoreLoginHelper */].isSiteUrlAllowed(text)) {
                    // Put the text in the field (if present).
                    this.siteForm.controls.siteUrl.setValue(text);
                    this.connect(new Event('click'), text);
                }
                else {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.errorurlschemeinvalidsite', true);
                }
            });
        }
        /**
         * Treat an error while handling a custom URL meant to perform an authentication.
         * If the site doesn't use SSO, the user will be sent to the credentials screen.
         *
         * @param customURL Custom URL handled.
         * @param error Error data.
         * @return Promise resolved when done.
         */
        treatErrorInAuthenticationCustomURL(customURL, error) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                // Set the site URL in the input.
                this.siteForm.controls.siteUrl.setValue(siteUrl);
                try {
                    // Check if site uses SSO.
                    const response = yield services_sites["b" /* CoreSites */].checkSite(siteUrl);
                    yield services_sites["b" /* CoreSites */].checkApplication(response.config);
                    if (!login_helper["a" /* CoreLoginHelper */].isSSOLoginNeeded(response.code)) {
                        // No SSO, go to credentials page.
                        yield services_navigator["a" /* CoreNavigator */].navigate('/login/credentials', {
                            params: {
                                siteUrl: response.siteUrl,
                                siteConfig: response.config,
                            },
                        });
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
                finally {
                    modal.dismiss();
                }
                // Now display the error.
                error.error = utils_text["a" /* CoreTextUtils */].addTextToError(error.error, '<br><br>' + singletons["L" /* Translate */].instant('core.login.youcanstillconnectwithcredentials'));
                urlschemes["a" /* CoreCustomURLSchemes */].treatHandleCustomURLError(error);
            });
        }
        /**
         * Open settings page.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigate('/settings');
        }
    }
    CoreLoginSitePage.ɵfac = function CoreLoginSitePage_Factory(t) { return new (t || CoreLoginSitePage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    CoreLoginSitePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginSitePage, selectors: [["page-core-login-site"]], viewQuery: function CoreLoginSitePage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 24, vars: 17, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-cog", "aria-hidden", "true"], [1, "ion-padding"], [1, "ion-text-center", "ion-padding", "ion-margin-bottom", "core-login-site-logo"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", "", 1, "avatar-full", "login-logo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["aria-haspopup", "dialog", "expand", "block", "fill", "clear", "color", "dark", 1, "ion-margin-top", "core-login-need-help", "core-button-as-link", "ion-text-wrap", 3, "click"], ["sitelisting", ""], [3, "formGroup", "ngSubmit"], ["siteFormEl", ""], ["lines", "none", 4, "ngIf"], ["position", "stacked"], ["name", "url", "type", "url", "formControlName", "siteUrl", 3, "placeholder", "core-auto-focus"], ["name", "url", "formControlName", "siteUrl", 3, "placeholder", "core-auto-focus", "ionChange"], [1, "core-login-site-list"], ["lines", "none", 1, "core-login-site-list-title"], [1, "item-heading"], ["button", "", "detail", "true", "class", "core-login-entered-site", 3, "click", 4, "ngIf"], [1, "core-login-site-list-found"], ["class", "core-login-site-list-loading", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "core-login-site-nolist-loading", 4, "ngIf"], ["button", "", "detail", "true", 1, "core-login-entered-site", 3, "click"], ["slot", "start", "aria-hidden", "true"], ["name", "fas-pen", "aria-hidden", "true"], [1, "ion-text-wrap"], [1, "core-login-site-list-loading"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "core-login-site-nolist-loading"], ["lines", "none"], ["expand", "block", "type", "submit", 1, "ion-text-wrap", 3, "disabled"], [3, "ngModel", "placeholder", "ngModelChange", "ionInput", "ionCancel", 4, "ngIf"], [3, "ngModel", "placeholder", "ngModelChange", "ionInput", "ionCancel"], [1, "ion-text-center", "ion-padding", "ion-margin-top"], ["expand", "block", "color", "light", "lines", "none", "aria-haspopup", "dialog", 1, "ion-margin", 3, "click"], ["slot", "start", "name", "fas-qrcode", "aria-hidden", "true"], ["button", "", "detail", "true", 3, "click"], ["slot", "start", 4, "ngIf"], ["class", "item-heading ion-text-wrap", 4, "ngIf"], ["onError", "this.src='assets/icon/icon.png'", "alt", "", "role", "presentation", 3, "src", 4, "ngIf"], ["src", "assets/icon/icon.png", "class", "core-login-default-icon", "alt", "", "role", "presentation", 4, "ngIf"], ["onError", "this.src='assets/icon/icon.png'", "alt", "", "role", "presentation", 3, "src"], ["src", "assets/icon/icon.png", "alt", "", "role", "presentation", 1, "core-login-default-icon"], [1, "item-heading", "ion-text-wrap"]], template: function CoreLoginSitePage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePage_Template_ion_button_click_9_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content", 5);
                core["Ec" /* ɵɵelementStart */](13, "div", 6);
                core["zc" /* ɵɵelement */](14, "img", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](15, CoreLoginSitePage_form_15_Template, 5, 4, "form", 8);
                core["nd" /* ɵɵtemplate */](16, CoreLoginSitePage_ng_container_16_Template, 2, 1, "ng-container", 9);
                core["nd" /* ɵɵtemplate */](17, CoreLoginSitePage_ng_container_17_Template, 9, 6, "ng-container", 9);
                core["Ec" /* ɵɵelementStart */](18, "ion-button", 10);
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePage_Template_ion_button_click_18_listener() { return ctx.showHelp(); });
                core["Ec" /* ɵɵelementStart */](19, "ion-label");
                core["pd" /* ɵɵtext */](20);
                core["Pc" /* ɵɵpipe */](21, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](22, CoreLoginSitePage_ng_template_22_Template, 6, 5, "ng-template", null, 11, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 11, "core.login.connecttomoodle"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 13, "core.settings.appsettings"));
                core["lc" /* ɵɵadvance */](4);
                core["qc" /* ɵɵclassProp */]("hidden", ctx.hasSites || ctx.enteredSiteUrl);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.fixedSites);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.fixedSites);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showScanQR && !ctx.hasSites && !ctx.enteredSiteUrl);
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 15, "core.needhelp"));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], common["t" /* NgIf */], ionic_angular["N" /* IonLabel */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["H" /* IonItem */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], auto_focus["a" /* CoreAutoFocusDirective */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["wb" /* IonThumbnail */], ionic_angular["pb" /* IonSpinner */], common["A" /* NgTemplateOutlet */], ionic_angular["hb" /* IonSearchbar */], fesm2015_forms["u" /* NgModel */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: [".item-input[_ngcontent-%COMP%]:last-child{margin-bottom:20px}.item.core-login-need-help[_ngcontent-%COMP%]{margin-top:16px}.item.core-login-site-qrcode[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border-bottom:0}.core-login-site-connect[_ngcontent-%COMP%]{margin-top:1.4rem}.item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{min-width:50px;min-height:50px;width:50px;height:50px;border-radius:20%;box-shadow:0 0 4px #eee;text-align:center;overflow:hidden}.item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50px;max-width:-webkit-fit-content;max-width:fit-content;width:auto;height:auto;margin:0 auto 0 50%;transform:translateX(-50%);object-fit:cover;object-position:50% 50%}.item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0 auto;font-size:35px;height:50px}.core-login-site-list[_ngcontent-%COMP%], .core-login-site-list-found[_ngcontent-%COMP%], .core-login-site-logo[_ngcontent-%COMP%]{transition-delay:0s;visibility:visible;opacity:1;transition:all .7s ease-in-out;max-height:9999px}.core-login-site-list-found.hidden[_ngcontent-%COMP%], .core-login-site-list.hidden[_ngcontent-%COMP%], .core-login-site-logo.hidden[_ngcontent-%COMP%]{opacity:0;visibility:hidden;margin-top:0;margin-bottom:0;padding:0;max-height:0}.core-login-site-list-found.dimmed[_ngcontent-%COMP%]{pointer-events:none;position:relative}.core-login-site-list-loading[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;display:flex;align-content:center;align-items:center;background-color:hsla(0,0%,100%,.5);z-index:1}.core-login-site-list-loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin:0 auto}.core-login-site-nolist-loading[_ngcontent-%COMP%]{margin-top:16px;text-align:center}.item.core-login-site-list-title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .item.core-login-site-list-title[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2.item-heading[_ngcontent-%COMP%]{margin-top:0}@media (min-width:768px){ion-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{max-width:600px;margin:0 auto;width:100%}ion-content[_ngcontent-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{margin-top:20%}ion-content[_ngcontent-%COMP%]   .core-login-site-logo.hidden[_ngcontent-%COMP%]{margin-top:0}}.core-login-entered-site[_ngcontent-%COMP%]{background-color:var(--gray-lighter)}.core-login-entered-site[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{box-shadow:0 0 4px #ddd}.core-login-default-icon[_ngcontent-%COMP%]{filter:grayscale(100%)}", "[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.9em;--background:var(--core-login-input-background)}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"] });
    return CoreLoginSitePage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/site/site.module.ts
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
        component: site_CoreLoginSitePage,
    },
];
let site_module_CoreLoginSitePageModule = /*@__PURE__*/ (() => {
    class CoreLoginSitePageModule {
    }
    CoreLoginSitePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginSitePageModule });
    CoreLoginSitePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginSitePageModule_Factory(t) { return new (t || CoreLoginSitePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginSitePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](site_module_CoreLoginSitePageModule, { declarations: [site_CoreLoginSitePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);