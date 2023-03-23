(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "ZmPN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return /* binding */ site_module_CoreSitePreferencesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/settings/services/settings-delegate.ts
var settings_delegate = __webpack_require__("YEzr");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/settings/services/settings-helper.ts
var settings_helper = __webpack_require__("1gmh");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__("1iFe");

// CONCATENATED MODULE: ./src/core/features/settings/pages/site/site.ts

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






















function CoreSitePreferencesPage_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 9);
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p");
        core["zc" /* ɵɵelement */](5, "core-format-text", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.siteInfo.fullname);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.siteName)("contextInstanceId", 0)("wsNotFiltered", true);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.siteUrl);
    }
}
function CoreSitePreferencesPage_ion_item_18_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 18);
    }
    if (rf & 2) {
        const handler_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", handler_r3.icon);
    }
}
const _c0 = function (a1) { return ["core-settings-handler", a1]; };
function CoreSitePreferencesPage_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function CoreSitePreferencesPage_ion_item_18_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r7); const handler_r3 = ctx.$implicit; const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.handlers.select(handler_r3); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreSitePreferencesPage_ion_item_18_ion_icon_2_Template, 1, 1, "ion-icon", 17);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 9);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r3 = ctx.$implicit;
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](9, _c0, handler_r3.class));
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 5, handler_r3.title))("aria-current", ctx_r1.handlers.getItemAriaCurrent(handler_r3));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r3.icon);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 7, handler_r3.title));
    }
}
function CoreSitePreferencesPage_ion_item_20_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreBytesToSize");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r8.spaceUsage.spaceUsage));
    }
}
function CoreSitePreferencesPage_ion_item_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 19);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, CoreSitePreferencesPage_ion_item_20_p_5_Template, 3, 3, "p", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-button", 10);
        core["Mc" /* ɵɵlistener */]("click", function CoreSitePreferencesPage_ion_item_20_Template_ion_button_click_6_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.showSpaceInfo(); });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["zc" /* ɵɵelement */](8, "ion-icon", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-button", 21);
        core["Mc" /* ɵɵlistener */]("click", function CoreSitePreferencesPage_ion_item_20_Template_ion_button_click_9_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.deleteSiteStorage(); });
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["zc" /* ɵɵelement */](11, "ion-icon", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.settings.spaceusage"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.spaceUsage.spaceUsage);
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](7, 7, "core.info"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("hidden", ctx_r2.spaceUsage.spaceUsage + ctx_r2.spaceUsage.cacheEntries <= 0);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 9, "core.settings.deletesitefilestitle"));
    }
}
/**
 * Page that displays the list of site settings pages.
 */
let site_CoreSitePreferencesPage = /*@__PURE__*/ (() => {
    class CoreSitePreferencesPage {
        constructor() {
            this.spaceUsage = {
                cacheEntries: 0,
                spaceUsage: 0,
            };
            this.isDestroyed = false;
            this.isIOS = app["a" /* CoreApp */].isIOS();
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.handlers = new site_CoreSettingsSitePreferencesManager(CoreSitePreferencesPage);
            this.sitesObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, (data) => {
                if (data.siteId == this.siteId) {
                    this.refreshData();
                }
            });
        }
        /**
         * View loaded.
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const pageToOpen = services_navigator["a" /* CoreNavigator */].getRouteParam('page');
                try {
                    yield this.fetchData();
                }
                finally {
                    const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                    if (handler) {
                        this.handlers.select(handler);
                        this.handlers.watchSplitViewOutlet(this.splitView);
                    }
                    else {
                        this.handlers.start(this.splitView);
                    }
                }
            });
        }
        /**
         * Fetch Data.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.handlers.setItems(settings_delegate["a" /* CoreSettingsDelegate */].getHandlers());
                const currentSite = sites["b" /* CoreSites */].getCurrentSite();
                this.siteInfo = currentSite.getInfo();
                this.siteName = currentSite.getSiteName();
                this.siteUrl = currentSite.getURL();
                this.spaceUsage = yield settings_helper["a" /* CoreSettingsHelper */].getSiteSpaceUsage(this.siteId);
            });
        }
        /**
         * Syncrhonizes the site.
         */
        synchronize() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    // Using syncOnlyOnWifi false to force manual sync.
                    yield settings_helper["a" /* CoreSettingsHelper */].synchronizeSite(false, this.siteId);
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
         * @return True if site is beeing synchronized, false otherwise.
         */
        isSynchronizing() {
            return !!settings_helper["a" /* CoreSettingsHelper */].getSiteSyncPromise(this.siteId);
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Deletes files of a site and the tables that can be cleared.
         *
         * @param siteData Site object with space usage.
         */
        deleteSiteStorage() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.spaceUsage = yield settings_helper["a" /* CoreSettingsHelper */].deleteSiteStorage(this.siteName || '', this.siteId);
                }
                catch (_a) {
                    // Ignore cancelled confirmation modal.
                }
            });
        }
        /**
         * Show information about space usage actions.
         */
        showSpaceInfo() {
            dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.help'), singletons["L" /* Translate */].instant('core.settings.spaceusagehelp'));
        }
        /**
         * Show information about sync actions.
         */
        showSyncInfo() {
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
    CoreSitePreferencesPage.ɵfac = function CoreSitePreferencesPage_Factory(t) { return new (t || CoreSitePreferencesPage)(); };
    CoreSitePreferencesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSitePreferencesPage, selectors: [["page-core-site-preferences"]], viewQuery: function CoreSitePreferencesPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 33, vars: 24, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], ["detail", "true", "button", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], [1, "item-heading"], ["fill", "clear", "slot", "end", 3, "click"], ["name", "fas-info-circle", "color", "info", "slot", "icon-only"], ["slot", "end", 3, "loading"], ["fill", "clear", 3, "click"], ["name", "fas-sync-alt", "slot", "icon-only", "aria-hidden", "true"], ["contextLevel", "system", 3, "text", "contextInstanceId", "wsNotFiltered"], ["detail", "true", "button", "", 3, "ngClass", "click"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name"], [1, "item-heading", "ion-text-wrap"], [4, "ngIf"], ["fill", "clear", "color", "danger", "slot", "end", 3, "hidden", "click"], ["name", "fas-trash", "slot", "icon-only", "aria-hidden", "true"]], template: function CoreSitePreferencesPage_Template(rf, ctx) {
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
                core["zc" /* ɵɵelement */](8, "ion-buttons", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "core-split-view");
                core["Ec" /* ɵɵelementStart */](11, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSitePreferencesPage_Template_ion_refresher_ionRefresh_11_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](12, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "core-loading", 5);
                core["Ec" /* ɵɵelementStart */](15, "ion-list");
                core["nd" /* ɵɵtemplate */](16, CoreSitePreferencesPage_ion_item_16_Template, 8, 5, "ion-item", 6);
                core["zc" /* ɵɵelement */](17, "core-spacer");
                core["nd" /* ɵɵtemplate */](18, CoreSitePreferencesPage_ion_item_18_Template, 7, 11, "ion-item", 7);
                core["Ec" /* ɵɵelementStart */](19, "ion-card");
                core["nd" /* ɵɵtemplate */](20, CoreSitePreferencesPage_ion_item_20_Template, 12, 11, "ion-item", 6);
                core["Ec" /* ɵɵelementStart */](21, "ion-item", 8);
                core["Ec" /* ɵɵelementStart */](22, "ion-label");
                core["Ec" /* ɵɵelementStart */](23, "p", 9);
                core["pd" /* ɵɵtext */](24);
                core["Pc" /* ɵɵpipe */](25, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](26, "ion-button", 10);
                core["Mc" /* ɵɵlistener */]("click", function CoreSitePreferencesPage_Template_ion_button_click_26_listener() { return ctx.showSyncInfo(); });
                core["Pc" /* ɵɵpipe */](27, "translate");
                core["zc" /* ɵɵelement */](28, "ion-icon", 11);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](29, "core-button-with-spinner", 12);
                core["Ec" /* ɵɵelementStart */](30, "ion-button", 13);
                core["Mc" /* ɵɵlistener */]("click", function CoreSitePreferencesPage_Template_ion_button_click_30_listener() { return ctx.synchronize(); });
                core["Pc" /* ɵɵpipe */](31, "translate");
                core["zc" /* ɵɵelement */](32, "ion-icon", 14);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 12, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 14, "core.settings.preferences"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.handlers.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](13, 16, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.handlers.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteInfo);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.handlers.items);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.spaceUsage);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](25, 18, "core.settings.synchronizenow"));
                core["lc" /* ɵɵadvance */](2);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](27, 20, "core.info"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("loading", ctx.isSynchronizing());
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](31, 22, "core.settings.synchronizenow"));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], spacer["a" /* CoreSpacerComponent */], common["s" /* NgForOf */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */], format_text["a" /* CoreFormatTextDirective */], common["q" /* NgClass */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], bytes_to_size["a" /* CoreBytesToSizePipe */]], encapsulation: 2 });
    return CoreSitePreferencesPage;
})();
/**
 * Helper class to manage sections.
 */
class site_CoreSettingsSitePreferencesManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/features/settings/pages/site/site-routing.ts
var site_routing = __webpack_require__("X9cG");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// CONCATENATED MODULE: ./src/core/features/settings/pages/site/site.module.ts
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








function buildRoutes(injector) {
    const routes = Object(app_routing_module["d" /* resolveModuleRoutes */])(injector, site_routing["b" /* SITE_PREFERENCES_ROUTES */]);
    const mobileRoutes = [
        {
            path: '',
            component: site_CoreSitePreferencesPage,
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: site_CoreSitePreferencesPage,
            children: routes.siblings,
        },
    ];
    return [
        ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
        ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
    ];
}
let site_module_CoreSitePreferencesPageModule = /*@__PURE__*/ (() => {
    class CoreSitePreferencesPageModule {
    }
    CoreSitePreferencesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSitePreferencesPageModule });
    CoreSitePreferencesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSitePreferencesPageModule_Factory(t) { return new (t || CoreSitePreferencesPageModule)(); }, providers: [
            { provide: router["g" /* ROUTES */], multi: true, useFactory: buildRoutes, deps: [core["x" /* Injector */]] },
        ], imports: [[
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSitePreferencesPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](site_module_CoreSitePreferencesPageModule, { declarations: [site_CoreSitePreferencesPage], imports: [shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);