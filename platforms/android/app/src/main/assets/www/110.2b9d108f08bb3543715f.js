(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "OQUD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModule", function() { return /* binding */ synchronization_module_CoreSettingsSynchronizationPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/config.ts + 1 modules
var config = __webpack_require__("BBqZ");

// EXTERNAL MODULE: ./src/core/features/settings/services/settings-helper.ts
var settings_helper = __webpack_require__("1gmh");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/settings/pages/synchronization/synchronization.ts

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


















function CoreSettingsSynchronizationPage_ion_item_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 9);
        core["zc" /* ɵɵelement */](3, "core-format-text", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "core-button-with-spinner", 11);
        core["Ec" /* ɵɵelementStart */](9, "ion-button", 12);
        core["Mc" /* ɵɵlistener */]("click", function CoreSettingsSynchronizationPage_ion_item_30_Template_ion_button_click_9_listener() { core["gd" /* ɵɵrestoreView */](_r3); const site_r1 = ctx.$implicit; const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.synchronize(site_r1.id); });
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["zc" /* ɵɵelement */](11, "ion-icon", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r1 = ctx.$implicit;
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["mc" /* ɵɵattribute */]("aria-current", site_r1.id == ctx_r0.currentSiteId ? "page" : "false");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", site_r1.siteName)("siteId", site_r1.id);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](site_r1.fullName);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](site_r1.siteUrl);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("loading", ctx_r0.isSynchronizing(site_r1.id));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("title", site_r1.siteName);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 8, "core.settings.synchronizenow"));
    }
}
/**
 * Page that displays the synchronization settings.
 */
let synchronization_CoreSettingsSynchronizationPage = /*@__PURE__*/ (() => {
    class CoreSettingsSynchronizationPage {
        constructor() {
            this.sites = [];
            this.sitesLoaded = false;
            this.currentSiteId = '';
            this.syncOnlyOnWifi = false;
            this.isDestroyed = false;
            this.currentSiteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.sitesObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, (data) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const site = yield sites["b" /* CoreSites */].getSite(data.siteId);
                const siteEntry = this.sites.find((siteEntry) => siteEntry.id == site.id);
                if (siteEntry) {
                    const siteInfo = site.getInfo();
                    siteEntry.siteName = site.getSiteName();
                    if (siteInfo) {
                        siteEntry.siteUrl = siteInfo.siteurl;
                        siteEntry.fullName = siteInfo.fullname;
                    }
                }
            }));
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.sites = yield sites["b" /* CoreSites */].getSortedSites();
                }
                catch (_a) {
                    // Ignore errors.
                }
                this.sitesLoaded = true;
                this.syncOnlyOnWifi = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, true);
            });
        }
        /**
         * Called when sync only on wifi setting is enabled or disabled.
         */
        syncOnlyOnWifiChanged() {
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
        }
        /**
         * Syncrhonizes a site.
         *
         * @param siteId Site ID.
         */
        synchronize(siteId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Using syncOnlyOnWifi false to force manual sync.
                try {
                    yield settings_helper["a" /* CoreSettingsHelper */].synchronizeSite(false, siteId);
                }
                catch (error) {
                    if (this.isDestroyed) {
                        return;
                    }
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
                }
            });
        }
        /**
         * Returns true if site is beeing synchronized.
         *
         * @param siteId Site ID.
         * @return True if site is beeing synchronized, false otherwise.
         */
        isSynchronizing(siteId) {
            return !!settings_helper["a" /* CoreSettingsHelper */].getSiteSyncPromise(siteId);
        }
        /**
         * Show information about sync actions.
         */
        showInfo() {
            dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.help'), singletons["L" /* Translate */].instant('core.settings.synchronizenowhelp'));
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            this.isDestroyed = true;
            (_a = this.sitesObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    CoreSettingsSynchronizationPage.ɵfac = function CoreSettingsSynchronizationPage_Factory(t) { return new (t || CoreSettingsSynchronizationPage)(); };
    CoreSettingsSynchronizationPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsSynchronizationPage, selectors: [["page-core-app-settings-synchronization"]], decls: 31, vars: 21, consts: [["slot", "start"], [3, "text"], ["slot", "end"], [3, "click"], ["name", "fas-info-circle", "slot", "icon-only", "aria-hidden", "true"], [3, "hideUntil"], [1, "ion-text-wrap"], ["slot", "end", 3, "ngModel", "ngModelChange"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], [1, "item-heading"], ["clean", "true", 3, "text", "siteId"], ["slot", "end", 3, "loading"], ["fill", "clear", 3, "title", "click"], ["name", "fas-sync-alt", "slot", "icon-only", "aria-hidden", "true"]], template: function CoreSettingsSynchronizationPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-navbar-buttons");
                core["Ec" /* ɵɵelementStart */](10, "ion-button", 3);
                core["Mc" /* ɵɵlistener */]("click", function CoreSettingsSynchronizationPage_Template_ion_button_click_10_listener() { return ctx.showInfo(); });
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["zc" /* ɵɵelement */](12, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "core-loading", 5);
                core["Ec" /* ɵɵelementStart */](15, "ion-item-divider");
                core["Ec" /* ɵɵelementStart */](16, "ion-label");
                core["Ec" /* ɵɵelementStart */](17, "h2");
                core["pd" /* ɵɵtext */](18);
                core["Pc" /* ɵɵpipe */](19, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](20, "ion-item", 6);
                core["Ec" /* ɵɵelementStart */](21, "ion-label");
                core["pd" /* ɵɵtext */](22);
                core["Pc" /* ɵɵpipe */](23, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](24, "ion-toggle", 7);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsSynchronizationPage_Template_ion_toggle_ngModelChange_24_listener($event) { return ctx.syncOnlyOnWifi = $event; })("ngModelChange", function CoreSettingsSynchronizationPage_Template_ion_toggle_ngModelChange_24_listener() { return ctx.syncOnlyOnWifiChanged(); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](25, "ion-item-divider");
                core["Ec" /* ɵɵelementStart */](26, "ion-label");
                core["Ec" /* ɵɵelementStart */](27, "h2");
                core["pd" /* ɵɵtext */](28);
                core["Pc" /* ɵɵpipe */](29, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](30, CoreSettingsSynchronizationPage_ion_item_30_Template, 12, 10, "ion-item", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 11, "core.settings.synchronization"));
                core["lc" /* ɵɵadvance */](4);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](11, 13, "core.info"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.sitesLoaded);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](19, 15, "core.settings.syncsettings"));
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](23, 17, "core.settings.enablesyncwifi"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.syncOnlyOnWifi);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](29, 19, "core.settings.sites"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sites);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], ionic_angular["H" /* IonItem */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSettingsSynchronizationPage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/synchronization/synchronization.module.ts
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
        component: synchronization_CoreSettingsSynchronizationPage,
    },
];
let synchronization_module_CoreSettingsSynchronizationPageModule = /*@__PURE__*/ (() => {
    class CoreSettingsSynchronizationPageModule {
    }
    CoreSettingsSynchronizationPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsSynchronizationPageModule });
    CoreSettingsSynchronizationPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsSynchronizationPageModule_Factory(t) { return new (t || CoreSettingsSynchronizationPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsSynchronizationPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](synchronization_module_CoreSettingsSynchronizationPageModule, { declarations: [synchronization_CoreSettingsSynchronizationPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);