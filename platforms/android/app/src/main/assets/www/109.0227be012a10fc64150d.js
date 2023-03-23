(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ "IcH5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModule", function() { return /* binding */ space_usage_module_CoreSettingsSpaceUsagePageModule; });

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

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/features/settings/services/settings-helper.ts
var settings_helper = __webpack_require__("1gmh");

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

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__("1iFe");

// CONCATENATED MODULE: ./src/core/features/settings/pages/space-usage/space-usage.ts

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















function CoreSettingsSpaceUsagePage_ion_item_18_p_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 2);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreBytesToSize");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const site_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, site_r1.spaceUsage), " ");
    }
}
function CoreSettingsSpaceUsagePage_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 10);
        core["Ec" /* ɵɵelementStart */](2, "p", 11);
        core["zc" /* ɵɵelement */](3, "core-format-text", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p", 10);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, CoreSettingsSpaceUsagePage_ion_item_18_p_8_Template, 3, 3, "p", 13);
        core["Ec" /* ɵɵelementStart */](9, "ion-button", 14);
        core["Mc" /* ɵɵlistener */]("click", function CoreSettingsSpaceUsagePage_ion_item_18_Template_ion_button_click_9_listener() { core["gd" /* ɵɵrestoreView */](_r5); const site_r1 = ctx.$implicit; const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.deleteSiteStorage(site_r1); });
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["zc" /* ɵɵelement */](11, "ion-icon", 15);
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
        core["Vc" /* ɵɵproperty */]("ngIf", site_r1.spaceUsage !== undefined);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("hidden", site_r1.spaceUsage + site_r1.cacheEntries <= 0);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 8, "core.settings.deletesitefilestitle"));
    }
}
/**
 * Page that displays the space usage settings.
 */
let space_usage_CoreSettingsSpaceUsagePage = /*@__PURE__*/ (() => {
    class CoreSettingsSpaceUsagePage {
        constructor() {
            this.loaded = false;
            this.sites = [];
            this.currentSiteId = '';
            this.totals = {
                cacheEntries: 0,
                spaceUsage: 0,
            };
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
            this.loadSiteData().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Convenience function to load site data/usage and calculate the totals.
         *
         * @return Resolved when done.
         */
        loadSiteData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Calculate total usage.
                let totalSize = 0;
                let totalEntries = 0;
                this.sites = yield sites["b" /* CoreSites */].getSortedSites();
                const settingsHelper = settings_helper["a" /* CoreSettingsHelper */].instance;
                // Get space usage.
                yield Promise.all(this.sites.map((site) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    const siteInfo = yield settingsHelper.getSiteSpaceUsage(site.id);
                    site.cacheEntries = siteInfo.cacheEntries;
                    site.spaceUsage = siteInfo.spaceUsage;
                    totalSize += site.spaceUsage || 0;
                    totalEntries += site.cacheEntries || 0;
                })));
                this.totals.spaceUsage = totalSize;
                this.totals.cacheEntries = totalEntries;
            });
        }
        /**
         * Refresh the data.
         *
         * @param event Refresher event.
         */
        refreshData(refresher) {
            this.loadSiteData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Deletes files of a site and the tables that can be cleared.
         *
         * @param siteData Site object with space usage.
         */
        deleteSiteStorage(siteData) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const newInfo = yield settings_helper["a" /* CoreSettingsHelper */].deleteSiteStorage(siteData.siteName || '', siteData.id);
                    this.totals.spaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
                    this.totals.spaceUsage -= siteData.cacheEntries - newInfo.cacheEntries;
                    siteData.spaceUsage = newInfo.spaceUsage;
                    siteData.cacheEntries = newInfo.cacheEntries;
                }
                catch (_a) {
                    // Ignore cancelled confirmation modal.
                }
            });
        }
        /**
         * Show information about space usage actions.
         */
        showInfo() {
            dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.help'), singletons["L" /* Translate */].instant('core.settings.spaceusagehelp'));
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.sitesObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    CoreSettingsSpaceUsagePage.ɵfac = function CoreSettingsSpaceUsagePage_Factory(t) { return new (t || CoreSettingsSpaceUsagePage)(); };
    CoreSettingsSpaceUsagePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsSpaceUsagePage, selectors: [["page-core-app-settings-space-usage"]], decls: 27, vars: 21, consts: [["slot", "start"], [3, "text"], ["slot", "end"], [3, "click"], ["name", "fas-info-circle", "slot", "icon-only", "aria-hidden", "true"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngFor", "ngForOf"], ["slot", "end", 1, "ion-margin-end"], [1, "ion-text-wrap"], [1, "item-heading"], ["clean", "true", 3, "text", "siteId"], ["slot", "end", 4, "ngIf"], ["fill", "clear", "color", "danger", "slot", "end", 3, "hidden", "click"], ["name", "fas-trash", "slot", "icon-only", "aria-hidden", "true"]], template: function CoreSettingsSpaceUsagePage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function CoreSettingsSpaceUsagePage_Template_ion_button_click_10_listener() { return ctx.showInfo(); });
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["zc" /* ɵɵelement */](12, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "ion-refresher", 5);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSettingsSpaceUsagePage_Template_ion_refresher_ionRefresh_14_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](15, "ion-refresher-content", 6);
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-loading", 7);
                core["nd" /* ɵɵtemplate */](18, CoreSettingsSpaceUsagePage_ion_item_18_Template, 12, 10, "ion-item", 8);
                core["Ec" /* ɵɵelementStart */](19, "ion-item-divider");
                core["Ec" /* ɵɵelementStart */](20, "ion-label");
                core["Ec" /* ɵɵelementStart */](21, "h2");
                core["pd" /* ɵɵtext */](22);
                core["Pc" /* ɵɵpipe */](23, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](24, "p", 9);
                core["pd" /* ɵɵtext */](25);
                core["Pc" /* ɵɵpipe */](26, "coreBytesToSize");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 11, "core.settings.spaceusage"));
                core["lc" /* ɵɵadvance */](4);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](11, 13, "core.info"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](16, 15, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sites);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](23, 17, "core.settings.total"));
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](26, 19, ctx.totals.spaceUsage), " ");
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["s" /* NgForOf */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], ionic_angular["H" /* IonItem */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], bytes_to_size["a" /* CoreBytesToSizePipe */]], encapsulation: 2 });
    return CoreSettingsSpaceUsagePage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/space-usage/space-usage.module.ts
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
        component: space_usage_CoreSettingsSpaceUsagePage,
    },
];
let space_usage_module_CoreSettingsSpaceUsagePageModule = /*@__PURE__*/ (() => {
    class CoreSettingsSpaceUsagePageModule {
    }
    CoreSettingsSpaceUsagePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsSpaceUsagePageModule });
    CoreSettingsSpaceUsagePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsSpaceUsagePageModule_Factory(t) { return new (t || CoreSettingsSpaceUsagePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsSpaceUsagePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](space_usage_module_CoreSettingsSpaceUsagePageModule, { declarations: [space_usage_CoreSettingsSpaceUsagePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);