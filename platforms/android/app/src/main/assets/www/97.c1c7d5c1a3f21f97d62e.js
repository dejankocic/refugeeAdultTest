(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "QXg6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginReconnectPageModule", function() { return /* binding */ reconnect_module_CoreLoginReconnectPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/show-password/show-password.ts
var show_password = __webpack_require__("lqoc");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/reconnect/reconnect.ts

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




















const _c0 = ["reconnectForm"];
const _c1 = function (a0) { return { $a: a0 }; };
function CoreLoginReconnectPage_img_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 13);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Wc" /* ɵɵpropertyInterpolate */]("alt", core["Rc" /* ɵɵpipeBind2 */](1, 3, "core.pictureof", core["ad" /* ɵɵpureFunction1 */](6, _c1, ctx_r0.userFullName)));
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.userAvatar, core["jd" /* ɵɵsanitizeUrl */])("siteId", ctx_r0.siteId);
    }
}
function CoreLoginReconnectPage_div_11_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 17);
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("src", ctx_r8.logoUrl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function CoreLoginReconnectPage_div_11_img_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 18);
    }
}
function CoreLoginReconnectPage_div_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 14);
        core["nd" /* ɵɵtemplate */](1, CoreLoginReconnectPage_div_11_img_1_Template, 1, 1, "img", 15);
        core["nd" /* ɵɵtemplate */](2, CoreLoginReconnectPage_div_11_img_2_Template, 1, 0, "img", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.logoUrl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.logoUrl);
    }
}
function CoreLoginReconnectPage_p_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 19);
        core["zc" /* ɵɵelement */](1, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.siteName)("filter", false);
    }
}
function CoreLoginReconnectPage_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["Ec" /* ɵɵelementStart */](3, "ion-label", 23);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.login.reconnectdescription"));
    }
}
function CoreLoginReconnectPage_form_16_ng_container_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "div", 34);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 35);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginReconnectPage_form_16_ng_container_23_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r13); const ctx_r12 = core["Oc" /* ɵɵnextContext */](2); return ctx_r12.showInstructionsAndScanQR(); });
        core["zc" /* ɵɵelement */](5, "ion-icon", 36);
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
function CoreLoginReconnectPage_form_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", 24, 25);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function CoreLoginReconnectPage_form_16_Template_form_ngSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r15); const ctx_r14 = core["Oc" /* ɵɵnextContext */](); return ctx_r14.login($event); });
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 26);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 27);
        core["Ec" /* ɵɵelementStart */](7, "ion-label", 28);
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "core-show-password", 29);
        core["zc" /* ɵɵelement */](11, "ion-input", 30);
        core["Pc" /* ɵɵpipe */](12, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-grid", 31);
        core["Ec" /* ɵɵelementStart */](14, "ion-row");
        core["Ec" /* ɵɵelementStart */](15, "ion-col");
        core["Ec" /* ɵɵelementStart */](16, "ion-button", 32);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginReconnectPage_form_16_Template_ion_button_click_16_listener($event) { core["gd" /* ɵɵrestoreView */](_r15); const ctx_r16 = core["Oc" /* ɵɵnextContext */](); return ctx_r16.cancel($event); });
        core["pd" /* ɵɵtext */](17);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](19, "ion-col");
        core["Ec" /* ɵɵelementStart */](20, "ion-button", 33);
        core["pd" /* ɵɵtext */](21);
        core["Pc" /* ɵɵpipe */](22, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](23, CoreLoginReconnectPage_form_16_ng_container_23_Template, 9, 6, "ng-container", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r4.credForm);
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](ctx_r4.username);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](9, 9, "core.login.password"));
        core["lc" /* ɵɵadvance */](3);
        core["Wc" /* ɵɵpropertyInterpolate */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](12, 11, "core.login.password"));
        core["Vc" /* ɵɵproperty */]("clearOnEdit", false);
        core["lc" /* ɵɵadvance */](6);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](18, 13, "core.login.cancel"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r4.credForm.valid);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](22, 15, "core.login.loginbutton"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.showScanQR);
    }
}
function CoreLoginReconnectPage_ion_button_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 37);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginReconnectPage_ion_button_17_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r17 = core["Oc" /* ɵɵnextContext */](); return ctx_r17.forgottenPassword(); });
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
function CoreLoginReconnectPage_ion_list_18_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 42);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginReconnectPage_ion_list_18_ion_item_6_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r22); const provider_r20 = ctx.$implicit; const ctx_r21 = core["Oc" /* ɵɵnextContext */](2); return ctx_r21.oauthClicked(provider_r20); });
        core["zc" /* ɵɵelement */](1, "img", 43);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const provider_r20 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("src", provider_r20.iconurl, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](provider_r20.name);
    }
}
function CoreLoginReconnectPage_ion_list_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 38);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 39);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h3", 40);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreLoginReconnectPage_ion_list_18_ion_item_6_Template, 4, 2, "ion-item", 41);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.login.potentialidps"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r6.identityProviders);
    }
}
function CoreLoginReconnectPage_ion_list_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 44);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginReconnectPage_ion_list_19_Template_ion_button_click_1_listener($event) { core["gd" /* ɵɵrestoreView */](_r24); const ctx_r23 = core["Oc" /* ɵɵnextContext */](); return ctx_r23.cancel($event); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.login.cancel"), " ");
    }
}
const _c2 = function (a0) { return { "item-avatar-center": a0 }; };
/**
 * Page to enter the user password to reconnect to a site.
 */
let reconnect_CoreLoginReconnectPage = /*@__PURE__*/ (() => {
    class CoreLoginReconnectPage {
        constructor(fb) {
            this.fb = fb;
            this.showForgottenPassword = true;
            this.showSiteAvatar = false;
            this.isOAuth = false;
            this.showScanQR = false;
            this.viewLeft = false;
            this.eventThrown = false;
            const currentSite = sites["b" /* CoreSites */].getCurrentSite();
            this.isLoggedOut = !!(currentSite === null || currentSite === void 0 ? void 0 : currentSite.isLoggedOut());
            this.credForm = fb.group({
                password: ['', fesm2015_forms["F" /* Validators */].required],
            });
        }
        /**
         * Initialize the component.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const siteId = services_navigator["a" /* CoreNavigator */].getRouteParam('siteId');
                if (!siteId) {
                    return this.cancel();
                }
                this.siteId = siteId;
                this.page = services_navigator["a" /* CoreNavigator */].getRouteParam('pageName');
                this.pageOptions = services_navigator["a" /* CoreNavigator */].getRouteParam('pageOptions');
                this.showScanQR = login_helper["a" /* CoreLoginHelper */].displayQRInSiteScreen() || login_helper["a" /* CoreLoginHelper */].displayQRInCredentialsScreen();
                try {
                    const site = yield sites["b" /* CoreSites */].getSite(this.siteId);
                    if (!site.infos) {
                        throw new errors_error["a" /* CoreError */]('Invalid site');
                    }
                    this.username = site.infos.username;
                    this.userFullName = site.infos.fullname;
                    this.userAvatar = site.infos.userpictureurl;
                    this.siteUrl = site.infos.siteurl;
                    this.siteName = site.getSiteName();
                    // If login was OAuth we should only reach this page if the OAuth method ID has changed.
                    this.isOAuth = site.isOAuth();
                    // Show logo instead of avatar if it's a fixed site.
                    this.showSiteAvatar = !!this.userAvatar && !login_helper["a" /* CoreLoginHelper */].getFixedSites();
                    const config = yield utils["a" /* CoreUtils */].ignoreErrors(site.getPublicConfig());
                    if (!config) {
                        return;
                    }
                    this.siteConfig = config;
                    yield sites["b" /* CoreSites */].checkApplication(config);
                    // Check logoURL if user avatar is not set.
                    if (this.userAvatar.startsWith(this.siteUrl + '/theme/image.php')) {
                        this.showSiteAvatar = false;
                    }
                    this.logoUrl = login_helper["a" /* CoreLoginHelper */].getLogoUrl(config);
                    this.getDataFromConfig(this.siteConfig);
                }
                catch (error) {
                    // Just leave the view.
                    this.cancel();
                }
            });
        }
        /**
         * Component destroyed.
         */
        ngOnDestroy() {
            this.viewLeft = true;
            events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].LOGIN_SITE_UNCHECKED, { config: this.siteConfig }, this.siteId);
        }
        /**
         * Get some data (like identity providers) from the site config.
         *
         * @param config Config to use.
         */
        getDataFromConfig(config) {
            const disabledFeatures = login_helper["a" /* CoreLoginHelper */].getDisabledFeatures(config);
            this.identityProviders = login_helper["a" /* CoreLoginHelper */].getValidIdentityProviders(config, disabledFeatures);
            this.showForgottenPassword = !login_helper["a" /* CoreLoginHelper */].isForgottenPasswordDisabled(config);
            if (!this.eventThrown && !this.viewLeft) {
                this.eventThrown = true;
                events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].LOGIN_SITE_CHECKED, { config: config });
            }
        }
        /**
         * Cancel reconnect.
         *
         * @param e Event.
         */
        cancel(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            sites["b" /* CoreSites */].logout();
        }
        /**
         * Tries to authenticate the user.
         *
         * @param e Event.
         */
        login(e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                app["a" /* CoreApp */].closeKeyboard();
                // Get input data.
                const password = this.credForm.value.password;
                if (!password) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.login.passwordrequired', true);
                    return;
                }
                if (!app["a" /* CoreApp */].isOnline()) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.networkerrormsg', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    // Start the authentication process.
                    const data = yield sites["b" /* CoreSites */].getUserToken(this.siteUrl, this.username, password);
                    yield sites["b" /* CoreSites */].updateSiteToken(this.siteUrl, this.username, data.token, data.privateToken);
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true);
                    // Update site info too.
                    yield sites["b" /* CoreSites */].updateSiteInfoByUrl(this.siteUrl, this.username);
                    // Reset fields so the data is not in the view anymore.
                    this.credForm.controls['password'].reset();
                    // Go to the site initial page.
                    this.page
                        ? yield services_navigator["a" /* CoreNavigator */].navigateToSitePath(this.page, { params: this.pageOptions })
                        : yield services_navigator["a" /* CoreNavigator */].navigateToSiteHome();
                }
                catch (error) {
                    login_helper["a" /* CoreLoginHelper */].treatUserTokenError(this.siteUrl, error, this.username, password);
                    if (error.loggedout) {
                        this.cancel();
                    }
                    else if (error.errorcode == 'forcepasswordchangenotice') {
                        // Reset password field.
                        this.credForm.controls.password.reset();
                    }
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Forgotten password button clicked.
         */
        forgottenPassword() {
            login_helper["a" /* CoreLoginHelper */].forgottenPasswordClicked(this.siteUrl, this.username, this.siteConfig);
        }
        /**
         * An OAuth button was clicked.
         *
         * @param provider The provider that was clicked.
         */
        oauthClicked(provider) {
            var _a;
            const result = login_helper["a" /* CoreLoginHelper */].openBrowserForOAuthLogin(this.siteUrl, provider, (_a = this.siteConfig) === null || _a === void 0 ? void 0 : _a.launchurl, this.page, this.pageOptions);
            if (!result) {
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
         * A11y key functionality that prevents keyDown events.
         *
         * @param e Event.
         */
        keyDown(e) {
            if (e.key == 'Escape') {
                e.preventDefault();
                e.stopPropagation();
            }
        }
        /**
         * Cancel reconnect.
         *
         * @param e Event.
         */
        keyUp(e) {
            if (e.key == 'Escape') {
                this.cancel(e);
            }
        }
    }
    CoreLoginReconnectPage.ɵfac = function CoreLoginReconnectPage_Factory(t) { return new (t || CoreLoginReconnectPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    CoreLoginReconnectPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginReconnectPage, selectors: [["page-core-login-reconnect"]], viewQuery: function CoreLoginReconnectPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 20, vars: 18, consts: [["slot", "start"], [3, "text"], [1, "ion-padding", 3, "keydown", "keyup"], [1, "ion-text-wrap", "ion-text-center", "ion-margin-bottom", 3, "ngClass"], ["class", "large-avatar", "core-external-content", "", "onError", "this.src='assets/img/user-avatar.png'", 3, "src", "siteId", "alt", 4, "ngIf"], ["class", "core-login-site-logo", 4, "ngIf"], ["class", "ion-padding core-sitename", 4, "ngIf"], [1, "core-siteurl"], ["class", "core-danger-card core-login-reconnect-warning", 4, "ngIf"], ["class", "core-login-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["expand", "block", "fill", "clear", "color", "dark", "class", "core-login-forgotten-password core-button-as-link ion-text-wrap", 3, "click", 4, "ngIf"], ["class", "ion-padding-top core-login-identity-providers", 4, "ngIf"], [4, "ngIf"], ["core-external-content", "", "onError", "this.src='assets/img/user-avatar.png'", 1, "large-avatar", 3, "src", "siteId", "alt"], [1, "core-login-site-logo"], ["role", "presentation", "onError", "this.src='assets/img/login_logo.png'", "alt", "", 3, "src", 4, "ngIf"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", "", 4, "ngIf"], ["role", "presentation", "onError", "this.src='assets/img/login_logo.png'", "alt", "", 3, "src"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", ""], [1, "ion-padding", "core-sitename"], [3, "text", "filter"], [1, "core-danger-card", "core-login-reconnect-warning"], ["name", "fas-exclamation-circle", "slot", "start", "aria-hidden", "true"], ["color", "danger"], [1, "core-login-form", 3, "formGroup", "ngSubmit"], ["reconnectForm", ""], [1, "ion-text-wrap", "core-username", "item-interactive"], [1, "ion-margin-bottom"], [1, "sr-only"], ["name", "password"], ["name", "password", "type", "password", "formControlName", "password", "autocomplete", "current-password", "enterkeyhint", "go", "required", "true", 1, "core-ioninput-password", 3, "placeholder", "clearOnEdit"], [1, "ion-padding"], ["expand", "block", "color", "light", 3, "click"], ["type", "submit", "expand", "block", 3, "disabled"], [1, "ion-text-center", "ion-padding"], ["expand", "block", "color", "light", "lines", "none", 1, "ion-margin", 3, "click"], ["slot", "start", "name", "fas-qrcode", "aria-hidden", "true"], ["expand", "block", "fill", "clear", "color", "dark", 1, "core-login-forgotten-password", "core-button-as-link", "ion-text-wrap", 3, "click"], [1, "ion-padding-top", "core-login-identity-providers"], ["lines", "none", 1, "ion-text-wrap"], [1, "item-heading"], ["button", "", "class", "ion-text-wrap core-oauth-icon", "detail", "false", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", 1, "ion-text-wrap", "core-oauth-icon", 3, "click"], ["alt", "", "role", "presentation", "width", "32", "height", "32", "slot", "start", 3, "src"], ["expand", "block", "color", "light", 1, "ion-margin", 3, "click"]], template: function CoreLoginReconnectPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-content", 2);
                core["Mc" /* ɵɵlistener */]("keydown", function CoreLoginReconnectPage_Template_ion_content_keydown_8_listener($event) { return ctx.keyDown($event); })("keyup", function CoreLoginReconnectPage_Template_ion_content_keyup_8_listener($event) { return ctx.keyUp($event); });
                core["Ec" /* ɵɵelementStart */](9, "div", 3);
                core["nd" /* ɵɵtemplate */](10, CoreLoginReconnectPage_img_10_Template, 2, 8, "img", 4);
                core["nd" /* ɵɵtemplate */](11, CoreLoginReconnectPage_div_11_Template, 3, 2, "div", 5);
                core["nd" /* ɵɵtemplate */](12, CoreLoginReconnectPage_p_12_Template, 2, 2, "p", 6);
                core["Ec" /* ɵɵelementStart */](13, "p", 7);
                core["pd" /* ɵɵtext */](14);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](15, CoreLoginReconnectPage_ion_card_15_Template, 6, 3, "ion-card", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](16, CoreLoginReconnectPage_form_16_Template, 24, 17, "form", 9);
                core["nd" /* ɵɵtemplate */](17, CoreLoginReconnectPage_ion_button_17_Template, 4, 3, "ion-button", 10);
                core["nd" /* ɵɵtemplate */](18, CoreLoginReconnectPage_ion_list_18_Template, 7, 4, "ion-list", 11);
                core["nd" /* ɵɵtemplate */](19, CoreLoginReconnectPage_ion_list_19_Template, 4, 3, "ion-list", 12);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 12, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 14, "core.login.reconnect"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](16, _c2, ctx.showSiteAvatar));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showSiteAvatar);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.showSiteAvatar);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteName);
                core["lc" /* ɵɵadvance */](2);
                core["qd" /* ɵɵtextInterpolate */](ctx.siteUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isLoggedOut);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isOAuth);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showForgottenPassword && !ctx.isOAuth);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.identityProviders && ctx.identityProviders.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.isOAuth);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], common["q" /* NgClass */], common["t" /* NgIf */], external_content["a" /* CoreExternalContentDirective */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], show_password["a" /* CoreShowPasswordComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], fesm2015_forms["C" /* RequiredValidator */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.9em;--background:var(--core-login-input-background)}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"] });
    return CoreLoginReconnectPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/reconnect/reconnect.module.ts
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
        component: reconnect_CoreLoginReconnectPage,
    },
];
let reconnect_module_CoreLoginReconnectPageModule = /*@__PURE__*/ (() => {
    class CoreLoginReconnectPageModule {
    }
    CoreLoginReconnectPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginReconnectPageModule });
    CoreLoginReconnectPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginReconnectPageModule_Factory(t) { return new (t || CoreLoginReconnectPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginReconnectPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](reconnect_module_CoreLoginReconnectPageModule, { declarations: [reconnect_CoreLoginReconnectPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);