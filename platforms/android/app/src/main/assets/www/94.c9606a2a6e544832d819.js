(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "jnyO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginCredentialsPageModule", function() { return /* binding */ credentials_module_CoreLoginCredentialsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subscriber.js
var Subscriber = __webpack_require__("7o/Q");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/scheduler/async.js
var scheduler_async = __webpack_require__("D0XW");

// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js


function debounceTime(dueTime, scheduler = scheduler_async["a" /* async */]) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new debounceTime_DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class debounceTime_DebounceTimeSubscriber extends Subscriber["a" /* Subscriber */] {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/show-password/show-password.ts
var show_password = __webpack_require__("lqoc");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/credentials/credentials.ts

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





















const _c0 = ["credentialsForm"];
function CoreLoginCredentialsPage_img_16_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 22);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.logoUrl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function CoreLoginCredentialsPage_img_17_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 23);
    }
}
function CoreLoginCredentialsPage_h3_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h3", 24);
        core["zc" /* ɵɵelement */](1, "core-format-text", 25);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.siteName)("filter", false);
    }
}
function CoreLoginCredentialsPage_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 26);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "ion-input", 27);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "core.login.username"));
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](5, 4, "core.login.username"));
    }
}
function CoreLoginCredentialsPage_ion_item_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 28);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 26);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "core-show-password", 29);
        core["zc" /* ɵɵelement */](5, "ion-input", 30);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "core.login.password"));
        core["lc" /* ɵɵadvance */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](6, 5, "core.login.password"));
        core["Vc" /* ɵɵproperty */]("clearOnEdit", false);
    }
}
function CoreLoginCredentialsPage_ng_container_29_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "div", 31);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 32);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginCredentialsPage_ng_container_29_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r11); const ctx_r10 = core["Oc" /* ɵɵnextContext */](); return ctx_r10.showInstructionsAndScanQR(); });
        core["zc" /* ɵɵelement */](5, "ion-icon", 33);
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
function CoreLoginCredentialsPage_ion_button_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 34);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginCredentialsPage_ion_button_30_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r13); const ctx_r12 = core["Oc" /* ɵɵnextContext */](); return ctx_r12.forgottenPassword(); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.login.forgotten"));
    }
}
function CoreLoginCredentialsPage_ion_list_31_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 39);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginCredentialsPage_ion_list_31_ion_item_6_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r17); const provider_r15 = ctx.$implicit; const ctx_r16 = core["Oc" /* ɵɵnextContext */](2); return ctx_r16.oauthClicked(provider_r15); });
        core["zc" /* ɵɵelement */](1, "img", 40);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const provider_r15 = ctx.$implicit;
        core["mc" /* ɵɵattribute */]("aria-label", provider_r15.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("src", provider_r15.iconurl, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](provider_r15.name);
    }
}
function CoreLoginCredentialsPage_ion_list_31_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 35);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 36);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h3", 37);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreLoginCredentialsPage_ion_list_31_ion_item_6_Template, 4, 3, "ion-item", 38);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.login.potentialidps"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r8.identityProviders);
    }
}
function CoreLoginCredentialsPage_ion_list_32_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 36);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["zc" /* ɵɵelement */](3, "core-format-text", 25);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r18 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r18.authInstructions)("filter", false);
    }
}
function CoreLoginCredentialsPage_ion_list_32_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 41);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 36);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h3", 37);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreLoginCredentialsPage_ion_list_32_ion_item_6_Template, 4, 2, "ion-item", 42);
        core["Ec" /* ɵɵelementStart */](7, "ion-button", 43);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginCredentialsPage_ion_list_32_Template_ion_button_click_7_listener() { core["gd" /* ɵɵrestoreView */](_r20); const ctx_r19 = core["Oc" /* ɵɵnextContext */](); return ctx_r19.openEmailSignup(); });
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.login.firsttime"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.authInstructions);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](9, 5, "core.login.startsignup"), " ");
    }
}
/**
 * Page to enter the user credentials.
 */
let credentials_CoreLoginCredentialsPage = /*@__PURE__*/ (() => {
    class CoreLoginCredentialsPage {
        constructor(fb) {
            this.fb = fb;
            this.siteChecked = false;
            this.pageLoaded = false;
            this.isBrowserSSO = false;
            this.isFixedUrlSet = false;
            this.showForgottenPassword = true;
            this.showScanQR = false;
            this.eventThrown = false;
            this.viewLeft = false;
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
            this.siteName = services_navigator["a" /* CoreNavigator */].getRouteParam('siteName');
            this.logoUrl = !constants["a" /* CoreConstants */].CONFIG.forceLoginLogo && services_navigator["a" /* CoreNavigator */].getRouteParam('logoUrl') || undefined;
            this.siteConfig = services_navigator["a" /* CoreNavigator */].getRouteParam('siteConfig');
            this.urlToOpen = services_navigator["a" /* CoreNavigator */].getRouteParam('urlToOpen');
            this.showScanQR = login_helper["a" /* CoreLoginHelper */].displayQRInCredentialsScreen();
            this.credForm = this.fb.group({
                username: [services_navigator["a" /* CoreNavigator */].getRouteParam('username') || '', fesm2015_forms["F" /* Validators */].required],
                password: ['', fesm2015_forms["F" /* Validators */].required],
            });
            this.treatSiteConfig();
            this.isFixedUrlSet = login_helper["a" /* CoreLoginHelper */].isFixedUrlSet();
            if (this.isFixedUrlSet) {
                // Fixed URL, we need to check if it uses browser SSO login.
                this.checkSite(this.siteUrl);
            }
            else {
                this.siteChecked = true;
                this.pageLoaded = true;
            }
            if (app["a" /* CoreApp */].isIOS()) {
                // Make iOS auto-fill work. The field that isn't focused doesn't get updated, do it manually.
                // Debounce it to prevent triggering this function too often when the user is typing.
                this.valueChangeSubscription = this.credForm.valueChanges.pipe(debounceTime(1000)).subscribe((changes) => {
                    var _a, _b;
                    if (!this.formElement || !this.formElement.nativeElement) {
                        return;
                    }
                    const usernameInput = this.formElement.nativeElement.querySelector('input[name="username"]');
                    const passwordInput = this.formElement.nativeElement.querySelector('input[name="password"]');
                    const usernameValue = usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.value;
                    const passwordValue = passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.value;
                    if (usernameValue !== undefined && usernameValue !== changes.username) {
                        (_a = this.credForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue(usernameValue);
                    }
                    if (passwordValue !== undefined && passwordValue !== changes.password) {
                        (_b = this.credForm.get('password')) === null || _b === void 0 ? void 0 : _b.setValue(passwordValue);
                    }
                });
            }
        }
        /**
         * Check if a site uses local_mobile, requires SSO login, etc.
         * This should be used only if a fixed URL is set, otherwise this check is already performed in CoreLoginSitePage.
         *
         * @param siteUrl Site URL to check.
         * @return Promise resolved when done.
         */
        checkSite(siteUrl) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.pageLoaded = false;
                // If the site is configured with http:// protocol we force that one, otherwise we use default mode.
                const protocol = siteUrl.indexOf('http://') === 0 ? 'http://' : undefined;
                try {
                    const result = yield sites["b" /* CoreSites */].checkSite(siteUrl, protocol);
                    this.siteChecked = true;
                    this.siteUrl = result.siteUrl;
                    this.siteConfig = result.config;
                    this.treatSiteConfig();
                    if (result && result.warning) {
                        dom["a" /* CoreDomUtils */].showErrorModal(result.warning, true, 4000);
                    }
                    if (login_helper["a" /* CoreLoginHelper */].isSSOLoginNeeded(result.code)) {
                        // SSO. User needs to authenticate in a browser.
                        this.isBrowserSSO = true;
                        // Check that there's no SSO authentication ongoing and the view hasn't changed.
                        if (!app["a" /* CoreApp */].isSSOAuthenticationOngoing() && !this.viewLeft) {
                            login_helper["a" /* CoreLoginHelper */].confirmAndOpenBrowserForSSOLogin(result.siteUrl, result.code, result.service, (_a = result.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                        }
                    }
                    else {
                        this.isBrowserSSO = false;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    this.pageLoaded = true;
                }
            });
        }
        /**
         * Treat the site configuration (if it exists).
         */
        treatSiteConfig() {
            if (this.siteConfig) {
                this.siteName = constants["a" /* CoreConstants */].CONFIG.sitename ? constants["a" /* CoreConstants */].CONFIG.sitename : this.siteConfig.sitename;
                this.logoUrl = login_helper["a" /* CoreLoginHelper */].getLogoUrl(this.siteConfig);
                this.authInstructions = this.siteConfig.authinstructions || singletons["L" /* Translate */].instant('core.login.loginsteps');
                const disabledFeatures = login_helper["a" /* CoreLoginHelper */].getDisabledFeatures(this.siteConfig);
                this.identityProviders = login_helper["a" /* CoreLoginHelper */].getValidIdentityProviders(this.siteConfig, disabledFeatures);
                this.canSignup = this.siteConfig.registerauth == 'email' &&
                    !login_helper["a" /* CoreLoginHelper */].isEmailSignupDisabled(this.siteConfig, disabledFeatures);
                this.showForgottenPassword = !login_helper["a" /* CoreLoginHelper */].isForgottenPasswordDisabled(this.siteConfig, disabledFeatures);
                if (!this.eventThrown && !this.viewLeft) {
                    this.eventThrown = true;
                    events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].LOGIN_SITE_CHECKED, { config: this.siteConfig });
                }
            }
            else {
                this.authInstructions = undefined;
                this.canSignup = false;
                this.identityProviders = [];
            }
        }
        /**
         * Tries to authenticate the user.
         *
         * @param e Event.
         * @return Promise resolved when done.
         */
        login(e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                app["a" /* CoreApp */].closeKeyboard();
                // Get input data.
                const siteUrl = this.siteUrl;
                const username = this.credForm.value.username;
                const password = this.credForm.value.password;
                if (!this.siteChecked || this.isBrowserSSO) {
                    // Site wasn't checked (it failed) or a previous check determined it was SSO. Let's check again.
                    yield this.checkSite(siteUrl);
                    if (!this.isBrowserSSO) {
                        // Site doesn't use browser SSO, throw app's login again.
                        return this.login();
                    }
                    return;
                }
                if (!username) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.login.usernamerequired', true);
                    return;
                }
                if (!password) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.login.passwordrequired', true);
                    return;
                }
                if (!app["a" /* CoreApp */].isOnline()) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.networkerrormsg', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                // Start the authentication process.
                try {
                    const data = yield sites["b" /* CoreSites */].getUserToken(siteUrl, username, password);
                    const id = yield sites["b" /* CoreSites */].newSite(data.siteUrl, data.token, data.privateToken);
                    // Reset fields so the data is not in the view anymore.
                    this.credForm.controls['username'].reset();
                    this.credForm.controls['password'].reset();
                    this.siteId = id;
                    yield services_navigator["a" /* CoreNavigator */].navigateToSiteHome({ params: { urlToOpen: this.urlToOpen } });
                }
                catch (error) {
                    login_helper["a" /* CoreLoginHelper */].treatUserTokenError(siteUrl, error, username, password);
                    if (error.loggedout) {
                        services_navigator["a" /* CoreNavigator */].navigate('/login/sites', { reset: true });
                    }
                    else if (error.errorcode == 'forcepasswordchangenotice') {
                        // Reset password field.
                        this.credForm.controls.password.reset();
                    }
                }
                finally {
                    modal.dismiss();
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true);
                }
            });
        }
        /**
         * Forgotten password button clicked.
         */
        forgottenPassword() {
            login_helper["a" /* CoreLoginHelper */].forgottenPasswordClicked(this.siteUrl, this.credForm.value.username, this.siteConfig);
        }
        /**
         * An OAuth button was clicked.
         *
         * @param provider The provider that was clicked.
         */
        oauthClicked(provider) {
            var _a;
            if (!login_helper["a" /* CoreLoginHelper */].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl)) {
                dom["a" /* CoreDomUtils */].showErrorModal('Invalid data.');
            }
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
                    yield login_helper["a" /* CoreLoginHelper */].scanQR();
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Open email signup page.
         */
        openEmailSignup() {
            services_navigator["a" /* CoreNavigator */].navigate('/login/emailsignup', { params: { siteUrl: this.siteUrl } });
        }
        /**
         * Open settings page.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigate('/settings');
        }
        /**
         * View destroyed.
         */
        ngOnDestroy() {
            var _a;
            this.viewLeft = true;
            events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
            (_a = this.valueChangeSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
    }
    CoreLoginCredentialsPage.ɵfac = function CoreLoginCredentialsPage_Factory(t) { return new (t || CoreLoginCredentialsPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    CoreLoginCredentialsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginCredentialsPage, selectors: [["page-core-login-credentials"]], viewQuery: function CoreLoginCredentialsPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 33, vars: 25, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-cog", "aria-hidden", "true"], [1, "ion-padding"], [3, "hideUntil"], [1, "ion-text-wrap", "ion-text-center", "ion-margin-bottom"], [1, "core-login-site-logo"], ["role", "presentation", "alt", "", "onError", "this.src='assets/img/login_logo.png'", 3, "src", 4, "ngIf"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", "", 4, "ngIf"], ["class", "ion-padding core-sitename", 4, "ngIf"], [1, "core-siteurl"], [1, "core-login-form", 3, "formGroup", "ngSubmit"], ["credentialsForm", ""], [4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngIf"], ["expand", "block", "type", "submit", 1, "ion-margin", "core-login-login-button", 3, "disabled"], ["type", "submit", 1, "core-submit-hidden-enter"], ["expand", "block", "fill", "clear", "color", "dark", "class", "core-login-forgotten-password core-button-as-link ion-text-wrap", 3, "click", 4, "ngIf"], ["class", "ion-padding-top core-login-identity-providers", 4, "ngIf"], ["class", "ion-padding-top core-login-sign-up", 4, "ngIf"], ["role", "presentation", "alt", "", "onError", "this.src='assets/img/login_logo.png'", 3, "src"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", ""], [1, "ion-padding", "core-sitename"], [3, "text", "filter"], [1, "sr-only"], ["type", "text", "name", "username", "formControlName", "username", "autocapitalize", "none", "autocorrect", "off", "autocomplete", "username", "enterkeyhint", "next", "required", "true", 3, "placeholder"], [1, "ion-margin-bottom"], ["name", "password"], ["name", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "enterkeyhint", "go", "required", "true", 3, "placeholder", "clearOnEdit"], [1, "ion-text-center", "ion-padding"], ["expand", "block", "color", "light", "lines", "none", 1, "ion-margin", 3, "click"], ["slot", "start", "name", "fas-qrcode", "aria-hidden", "true"], ["expand", "block", "fill", "clear", "color", "dark", 1, "core-login-forgotten-password", "core-button-as-link", "ion-text-wrap", 3, "click"], [1, "ion-padding-top", "core-login-identity-providers"], ["lines", "none", 1, "ion-text-wrap"], [1, "item-heading"], ["button", "", "class", "ion-text-wrap core-oauth-icon", "detail", "false", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", 1, "ion-text-wrap", "core-oauth-icon", 3, "click"], ["alt", "", "width", "32", "height", "32", "slot", "start", 3, "src"], [1, "ion-padding-top", "core-login-sign-up"], ["class", "ion-text-wrap", "lines", "none", 4, "ngIf"], ["expand", "block", "color", "light", 1, "ion-margin", "ion-text-wrap", 3, "click"]], template: function CoreLoginCredentialsPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginCredentialsPage_Template_ion_button_click_9_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content", 5);
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 6);
                core["Ec" /* ɵɵelementStart */](14, "div", 7);
                core["Ec" /* ɵɵelementStart */](15, "div", 8);
                core["nd" /* ɵɵtemplate */](16, CoreLoginCredentialsPage_img_16_Template, 1, 1, "img", 9);
                core["nd" /* ɵɵtemplate */](17, CoreLoginCredentialsPage_img_17_Template, 1, 0, "img", 10);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](18, CoreLoginCredentialsPage_h3_18_Template, 2, 2, "h3", 11);
                core["Ec" /* ɵɵelementStart */](19, "p", 12);
                core["pd" /* ɵɵtext */](20);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "form", 13, 14);
                core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginCredentialsPage_Template_form_ngSubmit_21_listener($event) { return ctx.login($event); });
                core["nd" /* ɵɵtemplate */](23, CoreLoginCredentialsPage_ion_item_23_Template, 6, 6, "ion-item", 15);
                core["nd" /* ɵɵtemplate */](24, CoreLoginCredentialsPage_ion_item_24_Template, 7, 7, "ion-item", 16);
                core["Ec" /* ɵɵelementStart */](25, "ion-button", 17);
                core["pd" /* ɵɵtext */](26);
                core["Pc" /* ɵɵpipe */](27, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](28, "input", 18);
                core["nd" /* ɵɵtemplate */](29, CoreLoginCredentialsPage_ng_container_29_Template, 9, 6, "ng-container", 15);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](30, CoreLoginCredentialsPage_ion_button_30_Template, 4, 3, "ion-button", 19);
                core["nd" /* ɵɵtemplate */](31, CoreLoginCredentialsPage_ion_list_31_Template, 7, 4, "ion-list", 20);
                core["nd" /* ɵɵtemplate */](32, CoreLoginCredentialsPage_ion_list_32_Template, 10, 7, "ion-list", 21);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 17, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 19, "core.login.login"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 21, "core.settings.appsettings"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.pageLoaded);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.logoUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.logoUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteName);
                core["lc" /* ɵɵadvance */](2);
                core["qd" /* ɵɵtextInterpolate */](ctx.siteUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("formGroup", ctx.credForm);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteChecked && !ctx.isBrowserSSO);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteChecked && !ctx.isBrowserSSO);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("disabled", ctx.siteChecked && !ctx.isBrowserSSO && !ctx.credForm.valid);
                core["lc" /* ɵɵadvance */](1);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](27, 23, "core.login.loginbutton"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showScanQR);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showForgottenPassword);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.identityProviders && ctx.identityProviders.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canSignup);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], fesm2015_forms["C" /* RequiredValidator */], show_password["a" /* CoreShowPasswordComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.9em;--background:var(--core-login-input-background)}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"] });
    return CoreLoginCredentialsPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/credentials/credentials.module.ts
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
        component: credentials_CoreLoginCredentialsPage,
    },
];
let credentials_module_CoreLoginCredentialsPageModule = /*@__PURE__*/ (() => {
    class CoreLoginCredentialsPageModule {
    }
    CoreLoginCredentialsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginCredentialsPageModule });
    CoreLoginCredentialsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginCredentialsPageModule_Factory(t) { return new (t || CoreLoginCredentialsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginCredentialsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](credentials_module_CoreLoginCredentialsPageModule, { declarations: [credentials_CoreLoginCredentialsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);