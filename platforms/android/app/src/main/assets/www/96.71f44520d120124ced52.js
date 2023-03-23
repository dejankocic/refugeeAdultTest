(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "aDgO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPageModule", function() { return /* binding */ forgotten_password_module_CoreLoginForgottenPasswordPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/auto-focus.ts
var auto_focus = __webpack_require__("6uVz");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/forgotten-password/forgotten-password.ts

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












const _c0 = ["resetPasswordForm"];
/**
 * Page to recover a forgotten password.
 */
let forgotten_password_CoreLoginForgottenPasswordPage = /*@__PURE__*/ (() => {
    class CoreLoginForgottenPasswordPage {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
        }
        /**
         * Initialize the component.
         */
        ngOnInit() {
            const siteUrl = services_navigator["a" /* CoreNavigator */].getRouteParam('siteUrl');
            if (!siteUrl) {
                dom["a" /* CoreDomUtils */].showErrorModal('Site URL not supplied.');
                services_navigator["a" /* CoreNavigator */].back();
                return;
            }
            this.siteUrl = siteUrl;
            this.autoFocus = singletons["C" /* Platform */].is('tablet');
            this.myForm = this.formBuilder.group({
                field: ['username', fesm2015_forms["F" /* Validators */].required],
                value: [services_navigator["a" /* CoreNavigator */].getRouteParam('username') || '', fesm2015_forms["F" /* Validators */].required],
            });
        }
        /**
         * Request to reset the password.
         *
         * @param e Event.
         */
        resetPassword(e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                const field = this.myForm.value.field;
                const value = this.myForm.value.value;
                if (!value) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.login.usernameoremail', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                const isMail = field == 'email';
                try {
                    const response = yield login_helper["a" /* CoreLoginHelper */].requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '');
                    if (response.status == 'dataerror') {
                        // Error in the data sent.
                        this.showError(isMail, response.warnings);
                    }
                    else if (response.status == 'emailpasswordconfirmnotsent' || response.status == 'emailpasswordconfirmnoemail') {
                        // Error, not found.
                        dom["a" /* CoreDomUtils */].showErrorModal(response.notice);
                    }
                    else {
                        // Success.
                        singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true);
                        dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.success'), response.notice);
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        // Show an error from the warnings.
        showError(isMail, warnings) {
            for (let i = 0; i < warnings.length; i++) {
                const warning = warnings[i];
                if ((warning.item == 'email' && isMail) || (warning.item == 'username' && !isMail)) {
                    dom["a" /* CoreDomUtils */].showErrorModal(warning.message);
                    break;
                }
            }
        }
    }
    CoreLoginForgottenPasswordPage.ɵfac = function CoreLoginForgottenPasswordPage_Factory(t) { return new (t || CoreLoginForgottenPasswordPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    CoreLoginForgottenPasswordPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginForgottenPasswordPage, selectors: [["page-core-login-forgotten-password"]], viewQuery: function CoreLoginForgottenPasswordPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 42, vars: 30, consts: [["slot", "start"], [3, "text"], ["lines", "none"], [1, "ion-text-wrap"], [3, "formGroup", "ngSubmit"], ["resetPasswordForm", ""], ["formControlName", "field"], ["slot", "end", "value", "username"], ["slot", "end", "value", "email"], [1, "sr-only"], ["type", "text", "name", "value", "formControlName", "value", "autocapitalize", "none", "autocorrect", "off", 3, "placeholder", "core-auto-focus"], ["type", "submit", "expand", "block", 1, "ion-margin", 3, "disabled"]], template: function CoreLoginForgottenPasswordPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "ion-list", 2);
                core["Ec" /* ɵɵelementStart */](10, "ion-item", 3);
                core["Ec" /* ɵɵelementStart */](11, "ion-label");
                core["pd" /* ɵɵtext */](12);
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "ion-card");
                core["Ec" /* ɵɵelementStart */](15, "form", 4, 5);
                core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginForgottenPasswordPage_Template_form_ngSubmit_15_listener($event) { return ctx.resetPassword($event); });
                core["Ec" /* ɵɵelementStart */](17, "ion-item-divider", 3);
                core["Ec" /* ɵɵelementStart */](18, "ion-label");
                core["Ec" /* ɵɵelementStart */](19, "h2");
                core["pd" /* ɵɵtext */](20);
                core["Pc" /* ɵɵpipe */](21, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](22, "ion-radio-group", 6);
                core["Ec" /* ɵɵelementStart */](23, "ion-item");
                core["Ec" /* ɵɵelementStart */](24, "ion-label");
                core["pd" /* ɵɵtext */](25);
                core["Pc" /* ɵɵpipe */](26, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](27, "ion-radio", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](28, "ion-item");
                core["Ec" /* ɵɵelementStart */](29, "ion-label");
                core["pd" /* ɵɵtext */](30);
                core["Pc" /* ɵɵpipe */](31, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](32, "ion-radio", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](33, "ion-item");
                core["Ec" /* ɵɵelementStart */](34, "ion-label", 9);
                core["pd" /* ɵɵtext */](35);
                core["Pc" /* ɵɵpipe */](36, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](37, "ion-input", 10);
                core["Pc" /* ɵɵpipe */](38, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](39, "ion-button", 11);
                core["pd" /* ɵɵtext */](40);
                core["Pc" /* ɵɵpipe */](41, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 12, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 14, "core.login.passwordforgotten"));
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 16, "core.login.passwordforgotteninstructions2"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("formGroup", ctx.myForm);
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 18, "core.login.searchby"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](26, 20, "core.login.username"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](31, 22, "core.user.email"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](36, 24, "core.login.usernameoremail"));
                core["lc" /* ɵɵadvance */](2);
                core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](38, 26, "core.login.usernameoremail"));
                core["Vc" /* ɵɵproperty */]("core-auto-focus", ctx.autoFocus);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.myForm.valid);
                core["lc" /* ɵɵadvance */](1);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](41, 28, "core.courses.search"), " ");
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["m" /* IonCard */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["I" /* IonItemDivider */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], ionic_angular["X" /* IonRadio */], ionic_angular["Lb" /* RadioValueAccessor */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], auto_focus["a" /* CoreAutoFocusDirective */], ionic_angular["k" /* IonButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreLoginForgottenPasswordPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/forgotten-password/forgotten-password.module.ts
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
        component: forgotten_password_CoreLoginForgottenPasswordPage,
    },
];
let forgotten_password_module_CoreLoginForgottenPasswordPageModule = /*@__PURE__*/ (() => {
    class CoreLoginForgottenPasswordPageModule {
    }
    CoreLoginForgottenPasswordPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginForgottenPasswordPageModule });
    CoreLoginForgottenPasswordPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginForgottenPasswordPageModule_Factory(t) { return new (t || CoreLoginForgottenPasswordPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginForgottenPasswordPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](forgotten_password_module_CoreLoginForgottenPasswordPageModule, { declarations: [forgotten_password_CoreLoginForgottenPasswordPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);