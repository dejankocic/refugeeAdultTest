(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "EOZX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPageModule", function() { return /* binding */ change_password_module_CoreLoginChangePasswordPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/change-password/change-password.ts
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











function CoreLoginChangePasswordPage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p", 8);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-button", 9);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginChangePasswordPage_ng_container_14_Template_ion_button_click_9_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.openChangePasswordPage(); });
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.login.forcepasswordchangenotice"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 5, "core.login.changepasswordinstructions"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](11, 7, "core.login.changepasswordbutton"), " ");
    }
}
function CoreLoginChangePasswordPage_ng_container_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-button", 9);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginChangePasswordPage_ng_container_15_Template_ion_button_click_6_listener() { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.login(); });
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.login.changepasswordreconnectinstructions"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](8, 4, "core.login.reconnect"), " ");
    }
}
/**
 * Page that shows instructions to change the password.
 */
let change_password_CoreLoginChangePasswordPage = /*@__PURE__*/ (() => {
    class CoreLoginChangePasswordPage {
        constructor() {
            this.changingPassword = false;
            this.logoutLabel = login_helper["a" /* CoreLoginHelper */].getLogoutLabel();
        }
        /**
         * Show a help modal.
         */
        showHelp() {
            dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.help'), singletons["L" /* Translate */].instant('core.login.changepasswordhelp'));
        }
        /**
         * Open the change password page in a browser.
         */
        openChangePasswordPage() {
            login_helper["a" /* CoreLoginHelper */].openInAppForEdit(sites["b" /* CoreSites */].getCurrentSiteId(), '/login/change_password.php', undefined, true);
            this.changingPassword = true;
        }
        /**
         * Login the user.
         */
        login() {
            services_navigator["a" /* CoreNavigator */].navigateToSiteHome();
            this.changingPassword = false;
        }
        /**
         * Logout the user.
         */
        logout() {
            sites["b" /* CoreSites */].logout();
            this.changingPassword = false;
        }
    }
    CoreLoginChangePasswordPage.ɵfac = function CoreLoginChangePasswordPage_Factory(t) { return new (t || CoreLoginChangePasswordPage)(); };
    CoreLoginChangePasswordPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginChangePasswordPage, selectors: [["page-core-login-change-password"]], decls: 24, vars: 17, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "far-question-circle", "aria-hidden", "true"], [4, "ngIf"], ["lines", "none", 1, "ion-text-wrap"], ["expand", "block", "color", "light", 1, "ion-text-wrap", "ion-margin", 3, "click"], [1, "ion-padding-top"], ["expand", "block", 1, "ion-text-wrap", "ion-margin", 3, "click"]], template: function CoreLoginChangePasswordPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginChangePasswordPage_Template_ion_button_click_9_listener() { return ctx.showHelp(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content");
                core["Ec" /* ɵɵelementStart */](13, "ion-list");
                core["nd" /* ɵɵtemplate */](14, CoreLoginChangePasswordPage_ng_container_14_Template, 12, 9, "ng-container", 5);
                core["nd" /* ɵɵtemplate */](15, CoreLoginChangePasswordPage_ng_container_15_Template, 9, 6, "ng-container", 5);
                core["Ec" /* ɵɵelementStart */](16, "ion-item", 6);
                core["Ec" /* ɵɵelementStart */](17, "ion-label");
                core["Ec" /* ɵɵelementStart */](18, "p");
                core["pd" /* ɵɵtext */](19);
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "ion-button", 7);
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginChangePasswordPage_Template_ion_button_click_21_listener() { return ctx.logout(); });
                core["pd" /* ɵɵtext */](22);
                core["Pc" /* ɵɵpipe */](23, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.login.changepassword"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 11, "core.help"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.changingPassword);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.changingPassword);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](20, 13, "core.login.changepasswordlogoutinstructions"));
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](23, 15, ctx.logoutLabel), " ");
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreLoginChangePasswordPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/change-password/change-password.module.ts
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
        component: change_password_CoreLoginChangePasswordPage,
    },
];
let change_password_module_CoreLoginChangePasswordPageModule = /*@__PURE__*/ (() => {
    class CoreLoginChangePasswordPageModule {
    }
    CoreLoginChangePasswordPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginChangePasswordPageModule });
    CoreLoginChangePasswordPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginChangePasswordPageModule_Factory(t) { return new (t || CoreLoginChangePasswordPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginChangePasswordPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](change_password_module_CoreLoginChangePasswordPageModule, { declarations: [change_password_CoreLoginChangePasswordPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);