(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "zzwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursesDashboardPageModule", function() { return /* binding */ dashboard_module_CoreCoursesDashboardPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/block/components/components.module.ts
var components_module = __webpack_require__("5p9q");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/features/courses/services/dashboard.ts
var dashboard = __webpack_require__("OYIH");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/block/components/block/block.ts
var block = __webpack_require__("mSZx");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/courses/pages/dashboard/dashboard.ts

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



















function CoreCoursesDashboardPage_ion_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 9);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursesDashboardPage_ion_button_1_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.openSearch(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 10);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.searchcourses"));
    }
}
function CoreCoursesDashboardPage_core_context_menu_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 11);
        core["Mc" /* ɵɵlistener */]("action", function CoreCoursesDashboardPage_core_context_menu_item_3_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.toggleDownload(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("priority", 1000)("content", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.settings.showdownloadoptions"))("iconAction", ctx_r1.downloadEnabledIcon);
    }
}
function CoreCoursesDashboardPage_core_context_menu_item_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 12);
        core["Mc" /* ɵɵlistener */]("action", function CoreCoursesDashboardPage_core_context_menu_item_4_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.manageCoursesStorage(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 500)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.storagemanager.managestorage"));
    }
}
const _c0 = function (a0) { return { "downloadEnabled": a0 }; };
function CoreCoursesDashboardPage_ng_container_11_core_block_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-block", 14);
    }
    if (rf & 2) {
        const block_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("block", block_r11)("instanceId", ctx_r12.userId)("extraData", core["ad" /* ɵɵpureFunction1 */](3, _c0, ctx_r12.downloadEnabled));
    }
}
function CoreCoursesDashboardPage_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCoursesDashboardPage_ng_container_11_core_block_1_Template, 1, 5, "core-block", 13);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const block_r11 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", block_r11.visible);
    }
}
function CoreCoursesDashboardPage_core_empty_box_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 15);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.course.nocontentavailable"));
    }
}
/**
 * Page that displays the dashboard page.
 */
let dashboard_CoreCoursesDashboardPage = /*@__PURE__*/ (() => {
    class CoreCoursesDashboardPage {
        constructor() {
            this.searchEnabled = false;
            this.downloadEnabled = false;
            this.downloadCourseEnabled = false;
            this.downloadCoursesEnabled = false;
            this.downloadEnabledIcon = 'far-square';
            this.blocks = [];
            this.loaded = false;
        }
        /**
         * Initialize the component.
         */
        ngOnInit() {
            this.searchEnabled = !courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !courses["a" /* CoreCourses */].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
            // Refresh the enabled flags if site is updated.
            this.updateSiteObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, () => {
                this.searchEnabled = !courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
                this.downloadCourseEnabled = !courses["a" /* CoreCourses */].isDownloadCourseDisabledInSite();
                this.downloadCoursesEnabled = !courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
                this.switchDownload(this.downloadEnabled && this.downloadCourseEnabled && this.downloadCoursesEnabled);
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            this.loadContent();
        }
        /**
         * Convenience function to fetch the dashboard data.
         *
         * @return Promise resolved when done.
         */
        loadContent() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const available = yield dashboard["a" /* CoreCoursesDashboard */].isAvailable();
                if (available) {
                    this.userId = sites["b" /* CoreSites */].getCurrentSiteUserId();
                    try {
                        this.blocks = yield dashboard["a" /* CoreCoursesDashboard */].getDashboardBlocks();
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModal(error);
                        // Cannot get the blocks, just show dashboard if needed.
                        this.loadFallbackBlocks();
                    }
                }
                else if (!dashboard["a" /* CoreCoursesDashboard */].isDisabledInSite()) {
                    // Not available, but not disabled either. Use fallback.
                    this.loadFallbackBlocks();
                }
                else {
                    // Disabled.
                    this.blocks = [];
                }
                // this.dashboardEnabled = this.blockDelegate.hasSupportedBlock(this.blocks);
                this.loaded = true;
            });
        }
        /**
         * Load fallback blocks to shown before 3.6 when dashboard blocks are not supported.
         */
        loadFallbackBlocks() {
            this.blocks = [
                {
                    name: 'myoverview',
                    visible: true,
                },
                {
                    name: 'timeline',
                    visible: true,
                },
            ];
        }
        /**
         * Refresh the dashboard data.
         *
         * @param refresher Refresher.
         */
        refreshDashboard(refresher) {
            var _a;
            const promises = [];
            promises.push(dashboard["a" /* CoreCoursesDashboard */].invalidateDashboardBlocks());
            // Invalidate the blocks.
            (_a = this.blocksComponents) === null || _a === void 0 ? void 0 : _a.forEach((blockComponent) => {
                promises.push(blockComponent.invalidate().catch(() => {
                    // Ignore errors.
                }));
            });
            Promise.all(promises).finally(() => {
                this.loadContent().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Toggle download enabled.
         */
        toggleDownload() {
            this.switchDownload(!this.downloadEnabled);
        }
        /**
         * Convenience function to switch download enabled.
         *
         * @param enable If enable or disable.
         */
        switchDownload(enable) {
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
            this.downloadEnabledIcon = this.downloadEnabled ? 'far-check-square' : 'far-square';
            events["b" /* CoreEvents */].trigger(courses["b" /* CoreCoursesProvider */].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
        }
        /**
         * Open page to manage courses storage.
         */
        manageCoursesStorage() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/storage');
        }
        /**
         * Go to search courses.
         */
        openSearch() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                services_navigator["a" /* CoreNavigator */].navigateToSitePath('/courses/search');
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    CoreCoursesDashboardPage.ɵfac = function CoreCoursesDashboardPage_Factory(t) { return new (t || CoreCoursesDashboardPage)(); };
    CoreCoursesDashboardPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursesDashboardPage, selectors: [["page-core-courses-dashboard"]], viewQuery: function CoreCoursesDashboardPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](block["a" /* CoreBlockComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.blocksComponents = _t);
            }
        }, decls: 13, vars: 10, consts: [["slot", "end"], [3, "click", 4, "ngIf"], [3, "priority", "content", "iconAction", "action", 4, "ngIf"], ["iconAction", "fas-archive", 3, "priority", "content", "action", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngFor", "ngForOf"], ["icon", "fas-th-large", 3, "message", 4, "ngIf"], [3, "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], [3, "priority", "content", "iconAction", "action"], ["iconAction", "fas-archive", 3, "priority", "content", "action"], ["contextLevel", "user", 3, "block", "instanceId", "extraData", 4, "ngIf"], ["contextLevel", "user", 3, "block", "instanceId", "extraData"], ["icon", "fas-th-large", 3, "message"]], template: function CoreCoursesDashboardPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "core-navbar-buttons", 0);
                core["nd" /* ɵɵtemplate */](1, CoreCoursesDashboardPage_ion_button_1_Template, 3, 3, "ion-button", 1);
                core["Ec" /* ɵɵelementStart */](2, "core-context-menu");
                core["nd" /* ɵɵtemplate */](3, CoreCoursesDashboardPage_core_context_menu_item_3_Template, 2, 5, "core-context-menu-item", 2);
                core["nd" /* ɵɵtemplate */](4, CoreCoursesDashboardPage_core_context_menu_item_4_Template, 2, 4, "core-context-menu-item", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "ion-content");
                core["Ec" /* ɵɵelementStart */](6, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCoursesDashboardPage_Template_ion_refresher_ionRefresh_6_listener($event) { return ctx.refreshDashboard($event.target); });
                core["zc" /* ɵɵelement */](7, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](8, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 6);
                core["Ec" /* ɵɵelementStart */](10, "ion-list");
                core["nd" /* ɵɵtemplate */](11, CoreCoursesDashboardPage_ng_container_11_Template, 2, 1, "ng-container", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](12, CoreCoursesDashboardPage_core_empty_box_12_Template, 2, 3, "core-empty-box", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.searchEnabled);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.downloadCourseEnabled || ctx.downloadCoursesEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.downloadCourseEnabled || ctx.downloadCoursesEnabled);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](8, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.blocks);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.blocks.length == 0);
            }
        }, directives: [navbar_buttons["a" /* CoreNavBarButtonsComponent */], common["t" /* NgIf */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu_item["a" /* CoreContextMenuItemComponent */], block["a" /* CoreBlockComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: [""] });
    return CoreCoursesDashboardPage;
})();

// CONCATENATED MODULE: ./src/core/features/courses/pages/dashboard/dashboard.module.ts
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
        component: dashboard_CoreCoursesDashboardPage,
    },
];
let dashboard_module_CoreCoursesDashboardPageModule = /*@__PURE__*/ (() => {
    class CoreCoursesDashboardPageModule {
    }
    CoreCoursesDashboardPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursesDashboardPageModule });
    CoreCoursesDashboardPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursesDashboardPageModule_Factory(t) { return new (t || CoreCoursesDashboardPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreBlockComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursesDashboardPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](dashboard_module_CoreCoursesDashboardPageModule, { declarations: [dashboard_CoreCoursesDashboardPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreBlockComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);