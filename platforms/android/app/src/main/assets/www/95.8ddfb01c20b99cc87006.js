(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "dxjp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginEmailSignupPageModule", function() { return /* binding */ email_signup_module_CoreLoginEmailSignupPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/user/components/components.module.ts
var components_module = __webpack_require__("5aQ+");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/ws.ts + 1 modules
var ws = __webpack_require__("JFK0");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/features/user/services/user-profile-field-delegate.ts
var user_profile_field_delegate = __webpack_require__("Smo8");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/core/components/recaptcha/recaptcha.ts
var recaptcha = __webpack_require__("whRm");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/components/mark-required/mark-required.ts
var mark_required = __webpack_require__("FasJ");

// EXTERNAL MODULE: ./src/core/components/input-errors/input-errors.ts
var input_errors = __webpack_require__("FTxb");

// EXTERNAL MODULE: ./src/core/components/show-password/show-password.ts
var show_password = __webpack_require__("lqoc");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/features/user/components/user-profile-field/user-profile-field.ts
var user_profile_field = __webpack_require__("f1LK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/email-signup/email-signup.ts

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





























const _c0 = ["ageForm"];
const _c1 = ["signupFormEl"];
function CoreLoginEmailSignupPage_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 8);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginEmailSignupPage_ion_button_9_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.showAuthInstructions(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.login.instructions"));
    }
}
function CoreLoginEmailSignupPage_core_loading_14_ion_list_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-button", 13);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.login.signuprequiredfieldnotsupported"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r5.signupUrl);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.openinbrowser"), " ");
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_2_ion_select_option_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 24);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const country_r10 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", country_r10.code);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](country_r10.name);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 14, 15);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginEmailSignupPage_core_loading_14_form_2_Template_form_ngSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](2); return ctx_r11.verifyAge($event); });
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h3");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](8, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](9, "span", 17);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](12, "ion-input", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](14, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](15, "span", 17);
        core["pd" /* ɵɵtext */](16);
        core["Pc" /* ɵɵpipe */](17, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](18, "ion-select", 19);
        core["Pc" /* ɵɵpipe */](19, "translate");
        core["Ec" /* ɵɵelementStart */](20, "ion-select-option", 20);
        core["pd" /* ɵɵtext */](21);
        core["Pc" /* ɵɵpipe */](22, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](23, CoreLoginEmailSignupPage_core_loading_14_form_2_ion_select_option_23_Template, 2, 2, "ion-select-option", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](24, "ion-button", 22);
        core["pd" /* ɵɵtext */](25);
        core["Pc" /* ɵɵpipe */](26, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](27, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](28, "ion-label");
        core["Ec" /* ɵɵelementStart */](29, "h3", 23);
        core["pd" /* ɵɵtext */](30);
        core["Pc" /* ɵɵpipe */](31, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](32, "p");
        core["pd" /* ɵɵtext */](33);
        core["Pc" /* ɵɵpipe */](34, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r6.ageVerificationForm);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 11, "core.agelocationverification"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 13, "core.whatisyourage"));
        core["lc" /* ɵɵadvance */](6);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 15, "core.wheredoyoulive"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](19, 17, "core.login.selectacountry"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 19, "core.login.selectacountry"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r6.countries);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r6.ageVerificationForm.valid);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](26, 21, "core.proceed"), " ");
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](31, 23, "core.whyisthisrequired"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](34, 25, "core.explanationdigitalminor"));
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 42);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r14.siteUrl);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 42);
        core["zc" /* ɵɵelement */](1, "core-format-text", 43);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r15 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r15.siteName)("filter", false);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r16.siteUrl);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_p_28_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 44);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r17 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", ctx_r17.settings.passwordpolicy, " ");
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ion_item_51_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](2, "span", 17);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "ion-input", 45);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["zc" /* ɵɵelement */](7, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const nameField_r23 = ctx.$implicit;
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.user." + nameField_r23));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 7, "core.user." + nameField_r23));
        core["Wc" /* ɵɵpropertyInterpolate */]("formControlName", nameField_r23);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r18.signupForm.controls[nameField_r23])("errorMessages", ctx_r18.namefieldsErrors[nameField_r23]);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ion_select_option_67_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 24);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const country_r24 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", country_r24.code);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](country_r24.name);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_68_core_user_profile_field_5_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-profile-field", 47);
    }
    if (rf & 2) {
        const field_r27 = ctx.$implicit;
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](4);
        core["Vc" /* ɵɵproperty */]("field", field_r27)("edit", true)("signup", true)("form", ctx_r26.signupForm);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_68_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 23);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_68_core_user_profile_field_5_Template, 1, 4, "core-user-profile-field", 46);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const category_r25 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](category_r25.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", category_r25.fields);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_69_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h3");
        core["Ec" /* ɵɵelementStart */](4, "span", 48);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "core-recaptcha", 49);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "core.login.security_question"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("publicKey", ctx_r21.settings.recaptchapublickey)("model", ctx_r21.captcha)("siteUrl", ctx_r21.siteUrl);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_70_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h3");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "a", 50);
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](12, "ion-label");
        core["Ec" /* ɵɵelementStart */](13, "span", 48);
        core["pd" /* ɵɵtext */](14);
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](16, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](17, "ion-checkbox", 51);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 7, "core.login.policyagreement"));
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("href", ctx_r22.settings.sitepolicy, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 9, "core.login.policyagreementclick"), " ");
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("core-mark-required", true);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](15, 11, "core.login.policyaccept"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r22.signupForm.controls.policyagreed)("errorMessages", ctx_r22.policyErrors);
    }
}
function CoreLoginEmailSignupPage_core_loading_14_form_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 14, 25);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginEmailSignupPage_core_loading_14_form_3_Template_form_ngSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r29); const ctx_r28 = core["Oc" /* ɵɵnextContext */](2); return ctx_r28.create($event); });
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 26);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, CoreLoginEmailSignupPage_core_loading_14_form_3_p_4_Template, 2, 1, "p", 27);
        core["nd" /* ɵɵtemplate */](5, CoreLoginEmailSignupPage_core_loading_14_form_3_p_5_Template, 2, 2, "p", 27);
        core["nd" /* ɵɵtemplate */](6, CoreLoginEmailSignupPage_core_loading_14_form_3_p_6_Template, 2, 1, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](8, "ion-label");
        core["Ec" /* ɵɵelementStart */](9, "h3");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](13, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](14, "span", 17);
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](17, "ion-input", 28);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["zc" /* ɵɵelement */](19, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](21, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](22, "span", 17);
        core["pd" /* ɵɵtext */](23);
        core["Pc" /* ɵɵpipe */](24, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](25, "core-show-password", 30);
        core["zc" /* ɵɵelement */](26, "ion-input", 31);
        core["Pc" /* ɵɵpipe */](27, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](28, CoreLoginEmailSignupPage_core_loading_14_form_3_p_28_Template, 2, 1, "p", 32);
        core["zc" /* ɵɵelement */](29, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](30, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](31, "ion-label");
        core["Ec" /* ɵɵelementStart */](32, "h3");
        core["pd" /* ɵɵtext */](33);
        core["Pc" /* ɵɵpipe */](34, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](35, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](36, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](37, "span", 17);
        core["pd" /* ɵɵtext */](38);
        core["Pc" /* ɵɵpipe */](39, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](40, "ion-input", 33);
        core["Pc" /* ɵɵpipe */](41, "translate");
        core["zc" /* ɵɵelement */](42, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](43, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](44, "ion-label", 16);
        core["Ec" /* ɵɵelementStart */](45, "span", 17);
        core["pd" /* ɵɵtext */](46);
        core["Pc" /* ɵɵpipe */](47, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](48, "ion-input", 34);
        core["Pc" /* ɵɵpipe */](49, "translate");
        core["zc" /* ɵɵelement */](50, "core-input-errors", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](51, CoreLoginEmailSignupPage_core_loading_14_form_3_ion_item_51_Template, 8, 9, "ion-item", 35);
        core["Ec" /* ɵɵelementStart */](52, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](53, "ion-label", 16);
        core["pd" /* ɵɵtext */](54);
        core["Pc" /* ɵɵpipe */](55, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](56, "ion-input", 36);
        core["Pc" /* ɵɵpipe */](57, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](58, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](59, "ion-label", 37);
        core["pd" /* ɵɵtext */](60);
        core["Pc" /* ɵɵpipe */](61, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](62, "ion-select", 38);
        core["Pc" /* ɵɵpipe */](63, "translate");
        core["Ec" /* ɵɵelementStart */](64, "ion-select-option", 20);
        core["pd" /* ɵɵtext */](65);
        core["Pc" /* ɵɵpipe */](66, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](67, CoreLoginEmailSignupPage_core_loading_14_form_3_ion_select_option_67_Template, 2, 2, "ion-select-option", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](68, CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_68_Template, 6, 2, "ng-container", 39);
        core["nd" /* ɵɵtemplate */](69, CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_69_Template, 8, 7, "ng-container", 7);
        core["nd" /* ɵɵtemplate */](70, CoreLoginEmailSignupPage_core_loading_14_form_3_ng_container_70_Template, 18, 13, "ng-container", 7);
        core["Ec" /* ɵɵelementStart */](71, "ion-button", 40);
        core["pd" /* ɵɵtext */](72);
        core["Pc" /* ɵɵpipe */](73, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](74, "input", 41);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r7.signupForm);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r7.siteName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.siteName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.siteName);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 36, "core.login.createuserandpass"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 38, "core.login.username"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](18, 40, "core.login.username"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r7.signupForm.controls.username)("errorMessages", ctx_r7.usernameErrors);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 42, "core.login.password"));
        core["lc" /* ɵɵadvance */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](27, 44, "core.login.password"));
        core["Vc" /* ɵɵproperty */]("clearOnEdit", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.settings.passwordpolicy);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("control", ctx_r7.signupForm.controls.password)("errorMessages", ctx_r7.passwordErrors);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](34, 46, "core.login.supplyinfo"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](39, 48, "core.user.email"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](41, 50, "core.user.email"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r7.signupForm.controls.email)("errorMessages", ctx_r7.emailErrors);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](47, 52, "core.user.emailagain"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](49, 54, "core.user.emailagain"));
        core["Vc" /* ɵɵproperty */]("pattern", ctx_r7.escapeMail(ctx_r7.signupForm.controls.email.value));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r7.signupForm.controls.email2)("errorMessages", ctx_r7.email2Errors);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.settings.namefields);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](55, 56, "core.user.city"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](57, 58, "core.user.city"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](61, 60, "core.user.country"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](63, 62, "core.login.selectacountry"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](66, 64, "core.login.selectacountry"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.countries);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.categories);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.settings.recaptchapublickey);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.settings.sitepolicy);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](73, 66, "core.login.createaccount"));
    }
}
function CoreLoginEmailSignupPage_core_loading_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-loading", 10);
        core["nd" /* ɵɵtemplate */](1, CoreLoginEmailSignupPage_core_loading_14_ion_list_1_Template, 8, 7, "ion-list", 7);
        core["nd" /* ɵɵtemplate */](2, CoreLoginEmailSignupPage_core_loading_14_form_2_Template, 35, 27, "form", 11);
        core["nd" /* ɵɵtemplate */](3, CoreLoginEmailSignupPage_core_loading_14_form_3_Template, 75, 68, "form", 11);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("hideUntil", ctx_r1.settingsLoaded);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.allRequiredSupported);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.allRequiredSupported && ctx_r1.settingsLoaded && ctx_r1.settings && ctx_r1.ageDigitalConsentVerification);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.allRequiredSupported && ctx_r1.settingsLoaded && ctx_r1.settings && !ctx_r1.ageDigitalConsentVerification);
    }
}
function CoreLoginEmailSignupPage_ion_list_15_h3_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h3", 55);
        core["zc" /* ɵɵelement */](1, "core-format-text", 43);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r30 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r30.siteName)("filter", false);
    }
}
function CoreLoginEmailSignupPage_ion_list_15_p_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r31 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r31.supportName);
    }
}
function CoreLoginEmailSignupPage_ion_list_15_p_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r32 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r32.supportEmail);
    }
}
function CoreLoginEmailSignupPage_ion_list_15_ion_button_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 56);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginEmailSignupPage_ion_list_15_ion_button_14_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r35); const ctx_r34 = core["Oc" /* ɵɵnextContext */](2); return ctx_r34.showContactOnSite(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.openinbrowser"), " ");
    }
}
function CoreLoginEmailSignupPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 12);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["nd" /* ɵɵtemplate */](3, CoreLoginEmailSignupPage_ion_list_15_h3_3_Template, 2, 2, "h3", 52);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-item", 53);
        core["Ec" /* ɵɵelementStart */](5, "ion-label");
        core["Ec" /* ɵɵelementStart */](6, "h3", 23);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](12, CoreLoginEmailSignupPage_ion_list_15_p_12_Template, 2, 1, "p", 7);
        core["nd" /* ɵɵtemplate */](13, CoreLoginEmailSignupPage_ion_list_15_p_13_Template, 2, 1, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](14, CoreLoginEmailSignupPage_ion_list_15_ion_button_14_Template, 3, 3, "ion-button", 54);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.siteName);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 6, "core.considereddigitalminor"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 8, "core.digitalminor_desc"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.supportName);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.supportEmail);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.supportName && !ctx_r2.supportEmail);
    }
}
/**
 * Page to signup using email.
 */
let email_signup_CoreLoginEmailSignupPage = /*@__PURE__*/ (() => {
    class CoreLoginEmailSignupPage {
        constructor(fb, elementRef, changeDetector) {
            this.fb = fb;
            this.elementRef = elementRef;
            this.changeDetector = changeDetector;
            this.settingsLoaded = false;
            this.allRequiredSupported = true;
            this.captcha = {
                recaptcharesponse: '',
            };
            this.isMinor = false; // Whether the user is minor age.
            // Create the ageVerificationForm.
            this.ageVerificationForm = this.fb.group({
                age: ['', fesm2015_forms["F" /* Validators */].required],
            });
            this.countryControl = this.fb.control('', fesm2015_forms["F" /* Validators */].required);
            this.ageVerificationForm.addControl('country', this.countryControl);
            // Create the signupForm with the basic controls. More controls will be added later.
            this.signupForm = this.fb.group({
                username: ['', fesm2015_forms["F" /* Validators */].required],
                password: ['', fesm2015_forms["F" /* Validators */].required],
                email: ['', fesm2015_forms["F" /* Validators */].compose([fesm2015_forms["F" /* Validators */].required, fesm2015_forms["F" /* Validators */].email])],
                email2: ['', fesm2015_forms["F" /* Validators */].compose([fesm2015_forms["F" /* Validators */].required, fesm2015_forms["F" /* Validators */].email])],
            });
            // Setup validation errors.
            this.usernameErrors = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.usernamerequired');
            this.passwordErrors = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.passwordrequired');
            this.emailErrors = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.missingemail');
            this.policyErrors = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.policyagree');
            this.email2Errors = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.missingemail', undefined, 'core.login.emailnotmatch');
        }
        /**
         * Component initialized.
         */
        ngOnInit() {
            const siteUrl = services_navigator["a" /* CoreNavigator */].getRouteParam('siteUrl');
            if (!siteUrl) {
                dom["a" /* CoreDomUtils */].showErrorModal('Site URL not supplied.');
                services_navigator["a" /* CoreNavigator */].back();
                return;
            }
            this.siteUrl = siteUrl;
            // Fetch the data.
            this.fetchData().finally(() => {
                this.settingsLoaded = true;
            });
        }
        /**
         * Complete the FormGroup using the settings received from server.
         */
        completeFormGroup() {
            var _a, _b, _c, _d, _e;
            this.signupForm.addControl('city', this.fb.control(((_a = this.settings) === null || _a === void 0 ? void 0 : _a.defaultcity) || ''));
            this.signUpCountryControl = this.fb.control(((_b = this.settings) === null || _b === void 0 ? void 0 : _b.country) || '');
            this.signupForm.addControl('country', this.signUpCountryControl);
            // Add the name fields.
            for (const i in (_c = this.settings) === null || _c === void 0 ? void 0 : _c.namefields) {
                this.signupForm.addControl((_d = this.settings) === null || _d === void 0 ? void 0 : _d.namefields[i], this.fb.control('', fesm2015_forms["F" /* Validators */].required));
            }
            if ((_e = this.settings) === null || _e === void 0 ? void 0 : _e.sitepolicy) {
                this.signupForm.addControl('policyagreed', this.fb.control(false, fesm2015_forms["F" /* Validators */].requiredTrue));
            }
        }
        /**
         * Fetch the required data from the server.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    // Get site config.
                    this.siteConfig = yield sites["b" /* CoreSites */].getSitePublicConfig(this.siteUrl);
                    this.signupUrl = utils_text["a" /* CoreTextUtils */].concatenatePaths(this.siteConfig.httpswwwroot, 'login/signup.php');
                    if (this.treatSiteConfig()) {
                        // Check content verification.
                        if (typeof this.ageDigitalConsentVerification == 'undefined') {
                            const result = yield utils["a" /* CoreUtils */].ignoreErrors(ws["a" /* CoreWS */].callAjax('core_auth_is_age_digital_consent_verification_enabled', {}, { siteUrl: this.siteUrl }));
                            this.ageDigitalConsentVerification = !!(result === null || result === void 0 ? void 0 : result.status);
                        }
                        yield this.getSignupSettings();
                    }
                    this.completeFormGroup();
                }
                catch (error) {
                    if (this.allRequiredSupported) {
                        dom["a" /* CoreDomUtils */].showErrorModal(error);
                    }
                }
            });
        }
        /**
         * Get signup settings from server.
         *
         * @return Promise resolved when done.
         */
        getSignupSettings() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.settings = yield ws["a" /* CoreWS */].callAjax('auth_email_get_signup_settings', {}, { siteUrl: this.siteUrl });
                if (user_profile_field_delegate["a" /* CoreUserProfileFieldDelegate */].hasRequiredUnsupportedField(this.settings.profilefields)) {
                    this.allRequiredSupported = false;
                    throw new Error(singletons["L" /* Translate */].instant('core.login.signuprequiredfieldnotsupported'));
                }
                this.categories = login_helper["a" /* CoreLoginHelper */].formatProfileFieldsForSignup(this.settings.profilefields);
                if (this.settings.recaptchapublickey) {
                    this.captcha.recaptcharesponse = ''; // Reset captcha.
                }
                if (!this.countryControl.value) {
                    this.countryControl.setValue(this.settings.country || '');
                }
                this.namefieldsErrors = {};
                if (this.settings.namefields) {
                    this.settings.namefields.forEach((field) => {
                        this.namefieldsErrors[field] = login_helper["a" /* CoreLoginHelper */].getErrorMessages('core.login.missing' + field);
                    });
                }
                this.countries = yield utils["a" /* CoreUtils */].getCountryListSorted();
            });
        }
        /**
         * Treat the site config, checking if it's valid and extracting the data we're interested in.
         *
         * @return True if success.
         */
        treatSiteConfig() {
            var _a;
            if (((_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.registerauth) == 'email' && !login_helper["a" /* CoreLoginHelper */].isEmailSignupDisabled(this.siteConfig)) {
                this.siteName = constants["a" /* CoreConstants */].CONFIG.sitename ? constants["a" /* CoreConstants */].CONFIG.sitename : this.siteConfig.sitename;
                this.authInstructions = this.siteConfig.authinstructions;
                this.ageDigitalConsentVerification = this.siteConfig.agedigitalconsentverification;
                this.supportName = this.siteConfig.supportname;
                this.supportEmail = this.siteConfig.supportemail;
                this.countryControl.setValue(this.siteConfig.country || '');
                return true;
            }
            else {
                dom["a" /* CoreDomUtils */].showErrorModal(singletons["L" /* Translate */].instant('core.login.signupplugindisabled', { $a: singletons["L" /* Translate */].instant('core.login.auth_email') }));
                services_navigator["a" /* CoreNavigator */].back();
                return false;
            }
        }
        /**
         * Pull to refresh.
         *
         * @param event Event.
         */
        refreshSettings(event) {
            this.fetchData().finally(() => {
                event === null || event === void 0 ? void 0 : event.complete();
            });
        }
        /**
         * Create account.
         *
         * @param e Event.
         * @return Promise resolved when done.
         */
        create(e) {
            var _a, _b, _c, _d, _e, _f;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                if (!this.signupForm.valid || (((_a = this.settings) === null || _a === void 0 ? void 0 : _a.recaptchapublickey) && !this.captcha.recaptcharesponse)) {
                    // Form not valid. Mark all controls as dirty to display errors.
                    for (const name in this.signupForm.controls) {
                        this.signupForm.controls[name].markAsDirty();
                    }
                    this.changeDetector.detectChanges();
                    // Scroll to the first element with errors.
                    const errorFound = dom["a" /* CoreDomUtils */].scrollToInputError(this.elementRef.nativeElement, this.content);
                    if (!errorFound) {
                        // Input not found, show an error modal.
                        dom["a" /* CoreDomUtils */].showErrorModal('core.errorinvalidform', true);
                    }
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                const params = {
                    username: this.signupForm.value.username.trim().toLowerCase(),
                    password: this.signupForm.value.password,
                    firstname: utils_text["a" /* CoreTextUtils */].cleanTags(this.signupForm.value.firstname),
                    lastname: utils_text["a" /* CoreTextUtils */].cleanTags(this.signupForm.value.lastname),
                    email: this.signupForm.value.email.trim(),
                    city: utils_text["a" /* CoreTextUtils */].cleanTags(this.signupForm.value.city),
                    country: this.signupForm.value.country,
                };
                if ((_b = this.siteConfig) === null || _b === void 0 ? void 0 : _b.launchurl) {
                    const service = sites["b" /* CoreSites */].determineService(this.siteUrl);
                    params.redirect = login_helper["a" /* CoreLoginHelper */].prepareForSSOLogin(this.siteUrl, service, this.siteConfig.launchurl);
                }
                // Get the recaptcha response (if needed).
                if (((_c = this.settings) === null || _c === void 0 ? void 0 : _c.recaptchapublickey) && this.captcha.recaptcharesponse) {
                    params.recaptcharesponse = this.captcha.recaptcharesponse;
                }
                try {
                    // Get the data for the custom profile fields.
                    params.customprofilefields = yield user_profile_field_delegate["a" /* CoreUserProfileFieldDelegate */].getDataForFields((_d = this.settings) === null || _d === void 0 ? void 0 : _d.profilefields, true, 'email', this.signupForm.value);
                    const result = yield ws["a" /* CoreWS */].callAjax('auth_email_signup_user', params, { siteUrl: this.siteUrl });
                    if (result.success) {
                        singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.signupFormElement, true);
                        // Show alert and ho back.
                        const message = singletons["L" /* Translate */].instant('core.login.emailconfirmsent', { $a: params.email });
                        dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.success'), message);
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                    else {
                        (_e = this.recaptchaComponent) === null || _e === void 0 ? void 0 : _e.expireRecaptchaAnswer();
                        const warning = (_f = result.warnings) === null || _f === void 0 ? void 0 : _f[0];
                        if (warning) {
                            let error = warning.message;
                            if (error == 'incorrect-captcha-sol' || (!error && warning.item == 'recaptcharesponse')) {
                                error = singletons["L" /* Translate */].instant('core.login.recaptchaincorrect');
                            }
                            dom["a" /* CoreDomUtils */].showErrorModal(error);
                        }
                        else {
                            dom["a" /* CoreDomUtils */].showErrorModal('core.login.usernotaddederror', true);
                        }
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.login.usernotaddederror', true);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Escape mail to avoid special characters to be treated as a RegExp.
         *
         * @param text Initial mail.
         * @return Escaped mail.
         */
        escapeMail(text) {
            return utils_text["a" /* CoreTextUtils */].escapeForRegex(text);
        }
        /**
         * Show authentication instructions.
         */
        showAuthInstructions() {
            utils_text["a" /* CoreTextUtils */].viewText(singletons["L" /* Translate */].instant('core.login.instructions'), this.authInstructions);
        }
        /**
         * Show contact information on site (we have to display again the age verification form).
         */
        showContactOnSite() {
            utils["a" /* CoreUtils */].openInBrowser(utils_text["a" /* CoreTextUtils */].concatenatePaths(this.siteUrl, '/login/verify_age_location.php'));
        }
        /**
         * Verify Age.
         *
         * @param e Event.
         * @return Promise resolved when done.
         */
        verifyAge(e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                if (!this.ageVerificationForm.valid) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.errorinvalidform', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                const params = this.ageVerificationForm.value;
                params.age = parseInt(params.age, 10); // Use just the integer part.
                try {
                    const result = yield ws["a" /* CoreWS */].callAjax('core_auth_is_minor', params, { siteUrl: this.siteUrl });
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.ageFormElement, true);
                    if (!result.status) {
                        if (this.countryControl.value) {
                            this.signUpCountryControl.setValue(this.countryControl.value);
                        }
                        // Not a minor, go ahead.
                        this.ageDigitalConsentVerification = false;
                    }
                    else {
                        // Is a minor.
                        this.isMinor = true;
                    }
                }
                catch (error) {
                    // Something wrong, redirect to the site.
                    dom["a" /* CoreDomUtils */].showErrorModal('There was an error verifying your age, please try again using the browser.');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
    }
    CoreLoginEmailSignupPage.ɵfac = function CoreLoginEmailSignupPage_Factory(t) { return new (t || CoreLoginEmailSignupPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */]), core["yc" /* ɵɵdirectiveInject */](core["r" /* ElementRef */]), core["yc" /* ɵɵdirectiveInject */](core["j" /* ChangeDetectorRef */])); };
    CoreLoginEmailSignupPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginEmailSignupPage, selectors: [["page-core-login-email-signup"]], viewQuery: function CoreLoginEmailSignupPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](recaptcha["a" /* CoreRecaptchaComponent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
                core["ud" /* ɵɵviewQuery */](_c1, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.recaptchaComponent = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.ageFormElement = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.signupFormElement = _t.first);
            }
        }, decls: 16, vars: 13, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil", 4, "ngIf"], [4, "ngIf"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "far-question-circle", "aria-hidden", "true"], [3, "hideUntil"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "ion-text-wrap"], ["expand", "block", "core-link", "", "autoLogin", "no", 1, "ion-margin", 3, "href"], [3, "formGroup", "ngSubmit"], ["ageForm", ""], ["position", "stacked"], ["core-mark-required", "true"], ["type", "number", "name", "age", "placeholder", "0", "formControlName", "age", "autocapitalize", "none", "autocorrect", "off"], ["name", "country", "formControlName", "country", 3, "placeholder"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["expand", "block", "type", "submit", 1, "ion-margin", 3, "disabled"], [1, "item-heading"], [3, "value"], ["signupFormEl", ""], [1, "ion-text-wrap", "ion-text-center"], ["class", "ion-padding item-heading", 4, "ngIf"], ["type", "text", "name", "username", "formControlName", "username", "autocapitalize", "none", "autocorrect", "off", 3, "placeholder"], [3, "control", "errorMessages"], ["name", "password"], ["name", "password", "type", "password", "formControlName", "password", "autocomplete", "new-password", "required", "true", 3, "placeholder", "clearOnEdit"], ["class", "core-input-footnote", 4, "ngIf"], ["type", "email", "name", "email", "formControlName", "email", "autocapitalize", "none", "autocorrect", "off", 3, "placeholder"], ["type", "email", "name", "email2", "autocapitalize", "none", "formControlName", "email2", "autocorrect", "off", 3, "placeholder", "pattern"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], ["type", "text", "name", "city", "formControlName", "city", "autocorrect", "off", 3, "placeholder"], ["position", "stacked", "id", "core-login-signup-country"], ["name", "country", "formControlName", "country", "aria-labelledby", "core-login-signup-country", 3, "placeholder"], [4, "ngFor", "ngForOf"], ["expand", "block", "type", "submit", 1, "ion-margin"], ["type", "submit", 1, "core-submit-hidden-enter"], [1, "ion-padding", "item-heading"], [3, "text", "filter"], [1, "core-input-footnote"], ["type", "text", "name", "nameField", "autocorrect", "off", 3, "placeholder", "formControlName"], ["registerAuth", "email", 3, "field", "edit", "signup", "form", 4, "ngFor", "ngForOf"], ["registerAuth", "email", 3, "field", "edit", "signup", "form"], [3, "core-mark-required"], [3, "publicKey", "model", "siteUrl"], ["core-link", "", "capture", "false", 3, "href"], ["slot", "end", "name", "policyagreed", "formControlName", "policyagreed"], ["class", "item-heading ion-padding", 4, "ngIf"], ["lines", "none", 1, "ion-text-wrap"], ["expand", "block", "class", "ion-margin", 3, "click", 4, "ngIf"], [1, "item-heading", "ion-padding"], ["expand", "block", 1, "ion-margin", 3, "click"]], template: function CoreLoginEmailSignupPage_Template(rf, ctx) {
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
                core["nd" /* ɵɵtemplate */](9, CoreLoginEmailSignupPage_ion_button_9_Template, 3, 3, "ion-button", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "ion-content");
                core["Ec" /* ɵɵelementStart */](11, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreLoginEmailSignupPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.refreshSettings($event.target); });
                core["zc" /* ɵɵelement */](12, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](14, CoreLoginEmailSignupPage_core_loading_14_Template, 4, 4, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](15, CoreLoginEmailSignupPage_ion_list_15_Template, 15, 10, "ion-list", 7);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.login.newaccount"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.authInstructions);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.settingsLoaded || ctx.isMinor);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](13, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isMinor);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.allRequiredSupported && ctx.isMinor);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], directives_link["a" /* CoreLinkDirective */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["I" /* IonItemDivider */], mark_required["a" /* CoreMarkRequiredComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ib" /* NumericValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], ionic_angular["lb" /* IonSelectOption */], common["s" /* NgForOf */], ionic_angular["Ob" /* TextValueAccessor */], input_errors["a" /* CoreInputErrorsComponent */], show_password["a" /* CoreShowPasswordComponent */], fesm2015_forms["C" /* RequiredValidator */], fesm2015_forms["y" /* PatternValidator */], format_text["a" /* CoreFormatTextDirective */], user_profile_field["a" /* CoreUserProfileFieldComponent */], recaptcha["a" /* CoreRecaptchaComponent */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.9em;--background:var(--core-login-input-background)}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"] });
    return CoreLoginEmailSignupPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/email-signup/email-signup.module.ts
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
        component: email_signup_CoreLoginEmailSignupPage,
    },
];
let email_signup_module_CoreLoginEmailSignupPageModule = /*@__PURE__*/ (() => {
    class CoreLoginEmailSignupPageModule {
    }
    CoreLoginEmailSignupPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginEmailSignupPageModule });
    CoreLoginEmailSignupPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginEmailSignupPageModule_Factory(t) { return new (t || CoreLoginEmailSignupPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreUserComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginEmailSignupPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](email_signup_module_CoreLoginEmailSignupPageModule, { declarations: [email_signup_CoreLoginEmailSignupPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreUserComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);