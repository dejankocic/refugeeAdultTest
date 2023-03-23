(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[114],{

/***/ "1evO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreTagIndexAreaPageModule", function() { return /* binding */ index_area_page_module_CoreTagIndexAreaPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

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

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

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

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/components/dynamic-component/dynamic-component.ts
var dynamic_component = __webpack_require__("w+Pn");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/tag/pages/index-area/index-area.page.ts

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














const _c0 = function (a0) { return { items: a0 }; };
function CoreTagIndexAreaPage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["zc" /* ɵɵelement */](1, "core-dynamic-component", 7);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r0.areaComponent)("data", core["ad" /* ɵɵpureFunction1 */](2, _c0, ctx_r0.items));
    }
}
const _c1 = function (a0, a1) { return { tagarea: a0, tag: a1 }; };
const _c2 = function (a0) { return { $a: a0 }; };
/**
 * Page that displays the tag index area.
 *
 * @todo testing.
 */
let index_area_page_CoreTagIndexAreaPage = /*@__PURE__*/ (() => {
    class CoreTagIndexAreaPage {
        constructor(route) {
            this.route = route;
            this.tagId = 0;
            this.tagName = '';
            this.collectionId = 0;
            this.areaId = 0;
            this.fromContextId = 0;
            this.contextId = 0;
            this.recursive = true;
            this.areaNameKey = '';
            this.loaded = false;
            this.items = [];
            this.nextPage = 0;
            this.canLoadMore = false;
            this.loadMoreError = false;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.route.queryParams.subscribe(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    var _a;
                    this.loaded = false;
                    this.tagId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('tagId') || this.tagId;
                    this.tagName = services_navigator["a" /* CoreNavigator */].getRouteParam('tagName') || this.tagName;
                    this.collectionId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('collectionId') || this.collectionId;
                    this.areaId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('areaId') || this.areaId;
                    this.fromContextId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('fromContextId') || this.fromContextId;
                    this.contextId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('contextId') || this.contextId;
                    this.recursive = (_a = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('recursive')) !== null && _a !== void 0 ? _a : true;
                    this.areaNameKey = services_navigator["a" /* CoreNavigator */].getRouteParam('areaNameKey') || '';
                    // Pass the the following parameters to avoid fetching the first page.
                    this.componentName = services_navigator["a" /* CoreNavigator */].getRouteParam('componentName');
                    this.itemType = services_navigator["a" /* CoreNavigator */].getRouteParam('itemType');
                    this.items = services_navigator["a" /* CoreNavigator */].getRouteParam('items') || [];
                    this.nextPage = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('nextPage') || 0;
                    this.canLoadMore = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('canLoadMore') || false;
                    try {
                        if (!this.componentName || !this.itemType || !this.items.length || this.nextPage == 0) {
                            yield this.fetchData(true);
                        }
                        this.areaComponent = yield tag_area_delegate["a" /* CoreTagAreaDelegate */].getComponent(this.componentName, this.itemType);
                    }
                    finally {
                        this.loaded = true;
                    }
                }));
            });
        }
        /**
         * Fetch next page of the tag index area.
         *
         * @param refresh Whether to refresh the data or fetch a new page.
         * @return Resolved when done.
         */
        fetchData(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                const page = refresh ? 0 : this.nextPage;
                try {
                    const areas = yield tag["a" /* CoreTag */].getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, page);
                    const area = areas[0];
                    const items = yield tag_area_delegate["a" /* CoreTagAreaDelegate */].parseContent(area.component, area.itemtype, area.content);
                    if (!items || !items.length) {
                        // Tag area not supported.
                        throw singletons["L" /* Translate */].instant('core.tag.errorareanotsupported');
                    }
                    if (page == 0) {
                        this.items = items;
                    }
                    else {
                        this.items.push(...items);
                    }
                    this.componentName = area.component;
                    this.itemType = area.itemtype;
                    this.areaNameKey = tag_area_delegate["a" /* CoreTagAreaDelegate */].getDisplayNameKey(area.component, area.itemtype);
                    this.canLoadMore = !!area.nextpageurl;
                    this.nextPage = page + 1;
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading tag index');
                }
            });
        }
        /**
         * Load more items.
         *
         * @param infiniteComplete Infinite scroll complete function.
         * @return Resolved when done.
         */
        loadMore(infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchData();
                }
                finally {
                    infiniteComplete === null || infiniteComplete === void 0 ? void 0 : infiniteComplete();
                }
            });
        }
        /**
         * Refresh data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield tag["a" /* CoreTag */].invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive);
                }
                finally {
                    try {
                        yield this.fetchData(true);
                    }
                    finally {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                }
            });
        }
    }
    CoreTagIndexAreaPage.ɵfac = function CoreTagIndexAreaPage_Factory(t) { return new (t || CoreTagIndexAreaPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    CoreTagIndexAreaPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreTagIndexAreaPage, selectors: [["page-core-tag-index-area"]], decls: 16, vars: 22, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], [3, "enabled", "error", "action"], [3, "component", "data"]], template: function CoreTagIndexAreaPage_Template(rf, ctx) {
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
                core["Pc" /* ɵɵpipe */](8, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreTagIndexAreaPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, CoreTagIndexAreaPage_ng_container_14_Template, 2, 4, "ng-container", 5);
                core["Ec" /* ɵɵelementStart */](15, "core-infinite-loading", 6);
                core["Mc" /* ɵɵlistener */]("action", function CoreTagIndexAreaPage_Template_core_infinite_loading_action_15_listener($event) { return ctx.loadMore($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](7, 10, "core.tag.itemstaggedwith", core["ad" /* ɵɵpureFunction1 */](20, _c2, core["bd" /* ɵɵpureFunction2 */](17, _c1, core["Qc" /* ɵɵpipeBind1 */](8, 13, ctx.areaNameKey), ctx.tagName))), " ");
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 15, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], dynamic_component["a" /* CoreDynamicComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreTagIndexAreaPage;
})();

// CONCATENATED MODULE: ./src/core/features/tag/pages/index-area/index-area.page.module.ts
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
        component: index_area_page_CoreTagIndexAreaPage,
    },
];
let index_area_page_module_CoreTagIndexAreaPageModule = /*@__PURE__*/ (() => {
    class CoreTagIndexAreaPageModule {
    }
    CoreTagIndexAreaPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreTagIndexAreaPageModule });
    CoreTagIndexAreaPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreTagIndexAreaPageModule_Factory(t) { return new (t || CoreTagIndexAreaPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreTagIndexAreaPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_area_page_module_CoreTagIndexAreaPageModule, { declarations: [index_area_page_CoreTagIndexAreaPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);