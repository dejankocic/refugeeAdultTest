(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "HBmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginSitePolicyPageModule", function() { return /* binding */ site_policy_module_CoreLoginSitePolicyPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/mimetype.ts
var mimetype = __webpack_require__("vbeB");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/components/iframe/iframe.ts
var iframe = __webpack_require__("qNqN");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/site-policy/site-policy.ts

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














function CoreLoginSitePolicyPage_ion_list_10_ion_card_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["zc" /* ɵɵelement */](1, "core-iframe", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("src", ctx_r1.sitePolicy);
    }
}
function CoreLoginSitePolicyPage_ion_list_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 4);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 4);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["Ec" /* ɵɵelementStart */](9, "a", 5);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](12, CoreLoginSitePolicyPage_ion_list_10_ion_card_12_Template, 2, 1, "ion-card", 3);
        core["Ec" /* ɵɵelementStart */](13, "ion-button", 6);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePolicyPage_ion_list_10_Template_ion_button_click_13_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.accept(); });
        core["pd" /* ɵɵtext */](14);
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](16, "ion-button", 7);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitePolicyPage_ion_list_10_Template_ion_button_click_16_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.cancel(); });
        core["pd" /* ɵɵtext */](17);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 7, "core.login.policyagree"));
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("href", ctx_r0.sitePolicy, core["jd" /* ɵɵsanitizeUrl */])("capture", false);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 9, "core.login.policyagreementclick"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.showInline);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](15, 11, "core.login.policyaccept"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](18, 13, "core.login.cancel"), " ");
    }
}
/**
 * Page to accept a site policy.
 */
let site_policy_CoreLoginSitePolicyPage = /*@__PURE__*/ (() => {
    class CoreLoginSitePolicyPage {
        /**
         * Component initialized.
         */
        ngOnInit() {
            this.siteId = services_navigator["a" /* CoreNavigator */].getRouteParam('siteId');
            this.currentSite = sites["b" /* CoreSites */].getCurrentSite();
            if (!this.currentSite) {
                // Not logged in, stop.
                this.cancel();
                return;
            }
            const currentSiteId = this.currentSite.id;
            this.siteId = this.siteId || currentSiteId;
            if (this.siteId != currentSiteId || !this.currentSite.wsAvailable('core_user_agree_site_policy')) {
                // Not current site or WS not available, stop.
                this.cancel();
                return;
            }
            this.fetchSitePolicy();
        }
        /**
         * Fetch the site policy URL.
         *
         * @return Promise resolved when done.
         */
        fetchSitePolicy() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.sitePolicy = yield login_helper["a" /* CoreLoginHelper */].getSitePolicy(this.siteId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting site policy.');
                    this.cancel();
                    return;
                }
                // Try to get the mime type.
                try {
                    const mimeType = yield utils["a" /* CoreUtils */].getMimeTypeFromUrl(this.sitePolicy);
                    const extension = mimetype["a" /* CoreMimetypeUtils */].getExtension(mimeType, this.sitePolicy);
                    this.showInline = extension == 'html' || extension == 'htm';
                }
                catch (error) {
                    // Unable to get mime type, assume it's not supported.
                    this.showInline = false;
                }
                finally {
                    this.policyLoaded = true;
                }
            });
        }
        /**
         * Cancel.
         *
         * @return Promise resolved when done.
         */
        cancel() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(sites["b" /* CoreSites */].logout());
                yield services_navigator["a" /* CoreNavigator */].navigate('/login/sites', { reset: true });
            });
        }
        /**
         * Accept the site policy.
         *
         * @return Promise resolved when done.
         */
        accept() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield login_helper["a" /* CoreLoginHelper */].acceptSitePolicy(this.siteId);
                    // Success accepting, go to site initial page.
                    // Invalidate cache since some WS don't return error if site policy is not accepted.
                    yield utils["a" /* CoreUtils */].ignoreErrors(this.currentSite.invalidateWsCache());
                    yield services_navigator["a" /* CoreNavigator */].navigateToSiteHome();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error accepting site policy.');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
    }
    CoreLoginSitePolicyPage.ɵfac = function CoreLoginSitePolicyPage_Factory(t) { return new (t || CoreLoginSitePolicyPage)(); };
    CoreLoginSitePolicyPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginSitePolicyPage, selectors: [["page-core-login-site-policy"]], decls: 11, vars: 8, consts: [["slot", "start"], [3, "text"], [3, "hideUntil"], [4, "ngIf"], [1, "ion-text-wrap"], ["core-link", "", 3, "href", "capture"], ["expand", "block", 1, "ion-text-wrap", "ion-margin", 3, "click"], ["expand", "block", "color", "light", 1, "ion-text-wrap", "ion-margin", 3, "click"], [3, "src"]], template: function CoreLoginSitePolicyPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 2);
                core["nd" /* ɵɵtemplate */](10, CoreLoginSitePolicyPage_ion_list_10_Template, 19, 15, "ion-list", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 6, "core.login.policyagreement"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.policyLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.sitePolicy);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], directives_link["a" /* CoreLinkDirective */], ionic_angular["k" /* IonButton */], ionic_angular["m" /* IonCard */], iframe["a" /* CoreIframeComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreLoginSitePolicyPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/site-policy/site-policy.module.ts
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
        component: site_policy_CoreLoginSitePolicyPage,
    },
];
let site_policy_module_CoreLoginSitePolicyPageModule = /*@__PURE__*/ (() => {
    class CoreLoginSitePolicyPageModule {
    }
    CoreLoginSitePolicyPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginSitePolicyPageModule });
    CoreLoginSitePolicyPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginSitePolicyPageModule_Factory(t) { return new (t || CoreLoginSitePolicyPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginSitePolicyPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](site_policy_module_CoreLoginSitePolicyPageModule, { declarations: [site_policy_CoreLoginSitePolicyPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);