(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ "Pgjy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginSitesPageModule", function() { return /* binding */ sites_module_CoreLoginSitesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var services_sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/singletons/logger.ts + 1 modules
var logger = __webpack_require__("3j9v");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/pushnotifications.ts
var pushnotifications = __webpack_require__("Afn4");

// EXTERNAL MODULE: ./src/core/features/filter/services/filter.ts
var filter = __webpack_require__("tS8V");

// EXTERNAL MODULE: ./src/core/components/animations.ts
var animations = __webpack_require__("MUy3");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/login/pages/sites/sites.ts

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


















function CoreLoginSitesPage_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 10);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitesPage_ion_button_9_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.toggleDelete(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 11);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.delete"));
    }
}
const _c0 = function (a0) { return { count: a0 }; };
function CoreLoginSitesPage_ion_item_15_ion_badge_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 2);
        core["Ec" /* ɵɵelementStart */](1, "span", 18);
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "span", 9);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r4 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](site_r4.badge);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 2, "core.login.sitebadgedescription", core["ad" /* ɵɵpureFunction1 */](5, _c0, site_r4.badge)));
    }
}
function CoreLoginSitesPage_ion_item_15_ion_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 19);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitesPage_ion_item_15_ion_button_12_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r9); const site_r4 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r8 = core["Oc" /* ɵɵnextContext */](); return ctx_r8.deleteSite($event, site_r4); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", "fromRight");
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.delete"));
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function CoreLoginSitesPage_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitesPage_ion_item_15_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r12); const site_r4 = ctx.$implicit; const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.login(site_r4.id); });
        core["Ec" /* ɵɵelementStart */](1, "ion-avatar", 0);
        core["zc" /* ɵɵelement */](2, "img", 13);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "p", 14);
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["zc" /* ɵɵelement */](8, "core-format-text", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["pd" /* ɵɵtext */](10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](11, CoreLoginSitesPage_ion_item_15_ion_badge_11_Template, 6, 7, "ion-badge", 16);
        core["nd" /* ɵɵtemplate */](12, CoreLoginSitesPage_ion_item_15_ion_button_12_Template, 3, 4, "ion-button", 17);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r4 = ctx.$implicit;
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("alt", core["Rc" /* ɵɵpipeBind2 */](3, 9, "core.pictureof", core["ad" /* ɵɵpureFunction1 */](12, _c1, site_r4.fullName)));
        core["Vc" /* ɵɵproperty */]("src", site_r4.avatar, core["jd" /* ɵɵsanitizeUrl */])("siteId", site_r4.id);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](site_r4.fullName);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", site_r4.siteName)("siteId", site_r4.id);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](site_r4.siteUrl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.showDelete && site_r4.badge);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.showDelete);
    }
}
/**
 * Page that displays a "splash screen" while the app is being initialized.
 */
let sites_CoreLoginSitesPage = /*@__PURE__*/ (() => {
    class CoreLoginSitesPage {
        constructor() {
            this.sites = [];
            this.showDelete = false;
            this.logger = logger["a" /* CoreLogger */].getInstance('CoreLoginSitesPage');
        }
        /**
         * Component being initialized.
         *
         * @return Promise resolved when done.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const sites = yield utils["a" /* CoreUtils */].ignoreErrors(services_sites["b" /* CoreSites */].getSortedSites(), []);
                // Remove protocol from the url to show more url text.
                this.sites = yield Promise.all(sites.map((site) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    site.siteUrl = site.siteUrl.replace(/^https?:\/\//, '');
                    site.badge = (yield utils["a" /* CoreUtils */].ignoreErrors(pushnotifications["a" /* CorePushNotifications */].getSiteCounter(site.id))) || 0;
                    return site;
                })));
                this.showDelete = false;
            });
        }
        /**
         * Go to the page to add a site.
         */
        add() {
            login_helper["a" /* CoreLoginHelper */].goToAddSite(false, true);
        }
        /**
         * Delete a site.
         *
         * @param e Click event.
         * @param site Site to delete.
         * @return Promise resolved when done.
         */
        deleteSite(e, site) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.stopPropagation();
                let siteName = site.siteName || '';
                siteName = yield filter["a" /* CoreFilter */].formatText(siteName, { clean: true, singleLine: true, filter: false }, [], site.id);
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.login.confirmdeletesite', { sitename: siteName });
                }
                catch (error) {
                    // User cancelled, stop.
                    return;
                }
                try {
                    yield services_sites["b" /* CoreSites */].deleteSite(site.id);
                    const index = this.sites.findIndex((listedSite) => listedSite.id == site.id);
                    index >= 0 && this.sites.splice(index, 1);
                    this.showDelete = false;
                    // If there are no sites left, go to add site.
                    const hasSites = yield services_sites["b" /* CoreSites */].hasSites();
                    if (!hasSites) {
                        login_helper["a" /* CoreLoginHelper */].goToAddSite(true, true);
                    }
                }
                catch (error) {
                    this.logger.error('Error deleting site ' + site.id, error);
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.login.errordeletesite', true);
                }
            });
        }
        /**
         * Login in a site.
         *
         * @param siteId The site ID.
         * @return Promise resolved when done.
         */
        login(siteId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    const loggedIn = yield services_sites["b" /* CoreSites */].loadSite(siteId);
                    if (loggedIn) {
                        yield services_navigator["a" /* CoreNavigator */].navigateToSiteHome();
                        return;
                    }
                }
                catch (error) {
                    this.logger.error('Error loading site ' + siteId, error);
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading site.');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Toggle delete.
         */
        toggleDelete() {
            this.showDelete = !this.showDelete;
        }
        /**
         * Open settings page.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigate('/settings');
        }
    }
    CoreLoginSitesPage.ɵfac = function CoreLoginSitesPage_Factory(t) { return new (t || CoreLoginSitesPage)(); };
    CoreLoginSitesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreLoginSitesPage, selectors: [["page-core-login-sites"]], decls: 23, vars: 17, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click", 4, "ngIf"], [3, "click"], ["slot", "icon-only", "name", "fas-cog", "aria-hidden", "true"], ["button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], ["name", "fas-plus", "aria-hidden", "true"], [1, "sr-only"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-pen", "aria-hidden", "true"], ["button", "", "detail", "true", 3, "click"], ["core-external-content", "", "onError", "this.src='assets/img/user-avatar.png'", 3, "src", "siteId", "alt"], [1, "item-heading"], ["clean", "true", 3, "text", "siteId"], ["slot", "end", 4, "ngIf"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click", 4, "ngIf"], ["aria-hidden", "true"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click"], ["name", "fas-trash", "slot", "icon-only", "aria-hidden", "true"]], template: function CoreLoginSitesPage_Template(rf, ctx) {
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
                core["nd" /* ɵɵtemplate */](9, CoreLoginSitesPage_ion_button_9_Template, 3, 3, "ion-button", 3);
                core["Ec" /* ɵɵelementStart */](10, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitesPage_Template_ion_button_click_10_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["zc" /* ɵɵelement */](12, "ion-icon", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "ion-list");
                core["nd" /* ɵɵtemplate */](15, CoreLoginSitesPage_ion_item_15_Template, 13, 14, "ion-item", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "ion-fab", 7);
                core["Ec" /* ɵɵelementStart */](17, "ion-fab-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function CoreLoginSitesPage_Template_ion_fab_button_click_17_listener() { return ctx.add(); });
                core["Pc" /* ɵɵpipe */](18, "translate");
                core["zc" /* ɵɵelement */](19, "ion-icon", 8);
                core["Ec" /* ɵɵelementStart */](20, "span", 9);
                core["pd" /* ɵɵtext */](21);
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.settings.sites"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.sites && ctx.sites.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](11, 11, "core.settings.appsettings"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sites);
                core["lc" /* ɵɵadvance */](2);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](18, 13, "core.add"));
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 15, "core.add"));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */], ionic_angular["H" /* IonItem */], ionic_angular["f" /* IonAvatar */], external_content["a" /* CoreExternalContentDirective */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2, data: { animation: [animations["a" /* CoreAnimations */].SLIDE_IN_OUT] } });
    return CoreLoginSitesPage;
})();

// CONCATENATED MODULE: ./src/core/features/login/pages/sites/sites.module.ts
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
        component: sites_CoreLoginSitesPage,
    },
];
let sites_module_CoreLoginSitesPageModule = /*@__PURE__*/ (() => {
    class CoreLoginSitesPageModule {
    }
    CoreLoginSitesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginSitesPageModule });
    CoreLoginSitesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginSitesPageModule_Factory(t) { return new (t || CoreLoginSitesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreLoginSitesPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](sites_module_CoreLoginSitesPageModule, { declarations: [sites_CoreLoginSitesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);