(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ "Jn5w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreTagIndexPageModule", function() { return /* binding */ index_page_module_CoreTagIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/features/tag/tag-lazy.module.ts
var tag_lazy_module = __webpack_require__("fg4u");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag.ts
var tag = __webpack_require__("kWmn");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag-area-delegate.ts
var tag_area_delegate = __webpack_require__("J82s");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/tag/pages/index/index.page.ts

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














function CoreTagIndexPage_ion_list_14_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["zc" /* ɵɵelement */](1, "ion-icon", 10);
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 11);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.tag.warningareasnotsupported"));
    }
}
const _c0 = function (a0) { return { count: a0 }; };
function CoreTagIndexPage_ion_list_14_ion_item_2_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 14);
        core["Ec" /* ɵɵelementStart */](1, "span", 15);
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "span", 16);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const area_r4 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](area_r4.badge);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 2, "core.tag.tagareabadgedescription", core["ad" /* ɵɵpureFunction1 */](5, _c0, area_r4.badge)));
    }
}
function CoreTagIndexPage_ion_list_14_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["Mc" /* ɵɵlistener */]("click", function CoreTagIndexPage_ion_list_14_ion_item_2_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r8); const area_r4 = ctx.$implicit; const ctx_r7 = core["Oc" /* ɵɵnextContext */](2); return ctx_r7.openArea(area_r4); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreTagIndexPage_ion_list_14_ion_item_2_ion_badge_6_Template, 6, 7, "ion-badge", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const area_r4 = ctx.$implicit;
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 4, area_r4.nameKey))("aria-current", area_r4.id == ctx_r3.selectedAreaId ? "page" : "false");
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 6, area_r4.nameKey));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", area_r4.badge);
    }
}
function CoreTagIndexPage_ion_list_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, CoreTagIndexPage_ion_list_14_ion_item_1_Template, 5, 3, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](2, CoreTagIndexPage_ion_list_14_ion_item_2_Template, 7, 8, "ion-item", 8);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.hasUnsupportedAreas);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.areas);
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function CoreTagIndexPage_core_empty_box_15_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 17);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("message", core["Rc" /* ɵɵpipeBind2 */](1, 1, "core.tag.noresultsfor", core["ad" /* ɵɵpureFunction1 */](4, _c1, ctx_r1.tagName)));
    }
}
/**
 * Page that displays the tag index.
 */
let index_page_CoreTagIndexPage = /*@__PURE__*/ (() => {
    class CoreTagIndexPage {
        constructor() {
            this.tagId = 0;
            this.tagName = '';
            this.collectionId = 0;
            this.areaId = 0;
            this.fromContextId = 0;
            this.contextId = 0;
            this.recursive = true;
            this.loaded = false;
            this.hasUnsupportedAreas = false;
            this.areas = [];
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.tagId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('tagId') || this.tagId;
                this.tagName = services_navigator["a" /* CoreNavigator */].getRouteParam('tagName') || this.tagName;
                this.collectionId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('collectionId') || this.collectionId;
                this.areaId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('areaId') || this.areaId;
                this.fromContextId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('fromContextId') || this.fromContextId;
                this.contextId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('contextId') || this.contextId;
                this.recursive = (_a = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
                try {
                    yield this.fetchData();
                    if (screen["a" /* CoreScreen */].isTablet && this.areas && this.areas.length > 0) {
                        const area = this.areas.find((area) => area.id == this.areaId);
                        this.openArea(area || this.areas[0]);
                    }
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Fetch first page of tag index per area.
         *
         * @return Resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const areas = yield tag["a" /* CoreTag */].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0);
                    this.areas = [];
                    this.hasUnsupportedAreas = false;
                    const areasDisplay = [];
                    yield Promise.all(areas.map((area) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                        const items = yield tag_area_delegate["a" /* CoreTagAreaDelegate */].parseContent(area.component, area.itemtype, area.content);
                        if (!items || !items.length) {
                            // Tag area not supported, skip.
                            this.hasUnsupportedAreas = true;
                            return;
                        }
                        areasDisplay.push({
                            id: area.ta,
                            componentName: area.component,
                            itemType: area.itemtype,
                            nameKey: tag_area_delegate["a" /* CoreTagAreaDelegate */].getDisplayNameKey(area.component, area.itemtype),
                            items,
                            canLoadMore: !!area.nextpageurl,
                            badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                        });
                    })));
                    this.areas = areasDisplay;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading tag index');
                }
            });
        }
        /**
         * Refresh data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            tag["a" /* CoreTag */].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive).finally(() => {
                this.fetchData().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Navigate to an index area.
         *
         * @param area Area.
         */
        openArea(area) {
            this.selectedAreaId = area.id;
            const params = {
                tagId: this.tagId,
                tagName: this.tagName,
                collectionId: this.collectionId,
                areaId: area.id,
                fromContextId: this.fromContextId,
                contextId: this.contextId,
                recursive: this.recursive,
                areaNameKey: area.nameKey,
                componentName: area.componentName,
                itemType: area.itemType,
                items: area.items.slice(),
                canLoadMore: area.canLoadMore,
                nextPage: 1,
            };
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/tag/index/index-area');
            const path = (splitViewLoaded ? '../' : '') + 'index-area';
            services_navigator["a" /* CoreNavigator */].navigate(path, { params });
        }
    }
    CoreTagIndexPage.ɵfac = function CoreTagIndexPage_Factory(t) { return new (t || CoreTagIndexPage)(); };
    CoreTagIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreTagIndexPage, selectors: [["page-core-tag-index"]], decls: 16, vars: 14, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["icon", "fas-tag", 3, "message", 4, "ngIf"], ["class", "core-warning-item", 4, "ngIf"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], [1, "core-warning-item"], ["slot", "start", "name", "fas-exclamation-triangle", "color", "warning", "aria-hidden", "true"], [1, "ion-text-wrap"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["slot", "end", 4, "ngIf"], ["slot", "end"], ["aria-hidden", "true"], [1, "sr-only"], ["icon", "fas-tag", 3, "message"]], template: function CoreTagIndexPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreTagIndexPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, CoreTagIndexPage_ion_list_14_Template, 3, 2, "ion-list", 5);
                core["nd" /* ɵɵtemplate */](15, CoreTagIndexPage_core_empty_box_15_Template, 2, 6, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](7, 10, "core.tag.tag"), ": ", ctx.tagName, "");
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasUnsupportedAreas || ctx.areas.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.hasUnsupportedAreas && (!ctx.areas || !ctx.areas.length));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["j" /* IonBadge */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreTagIndexPage;
})();

// CONCATENATED MODULE: ./src/core/features/tag/pages/index/index.page.module.ts
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









const mobileRoutes = [
    {
        path: '',
        component: index_page_CoreTagIndexPage,
    },
    tag_lazy_module["CoreTagIndexAreaRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: index_page_CoreTagIndexPage,
        children: [
            tag_lazy_module["CoreTagIndexAreaRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let index_page_module_CoreTagIndexPageModule = /*@__PURE__*/ (() => {
    class CoreTagIndexPageModule {
    }
    CoreTagIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreTagIndexPageModule });
    CoreTagIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreTagIndexPageModule_Factory(t) { return new (t || CoreTagIndexPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreTagIndexPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_page_module_CoreTagIndexPageModule, { declarations: [index_page_CoreTagIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);