(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ "us9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreTagSearchPageModule", function() { return /* binding */ search_page_module_CoreTagSearchPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/search/components/components.module.ts
var components_module = __webpack_require__("PM4H");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag.ts
var services_tag = __webpack_require__("kWmn");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-helper.ts
var contentlinks_helper = __webpack_require__("vnm2");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/combobox/combobox.ts
var combobox = __webpack_require__("rf3J");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/tag/pages/search/search.page.ts

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

















function CoreTagSearchPage_ion_col_16_ion_select_option_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 13);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const collection_r4 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", collection_r4.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", collection_r4.name, "");
    }
}
function CoreTagSearchPage_ion_col_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 11);
        core["Ec" /* ɵɵelementStart */](1, "core-combobox", 12);
        core["Mc" /* ɵɵlistener */]("onChange", function CoreTagSearchPage_ion_col_16_Template_core_combobox_onChange_1_listener($event) { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.searchTags($event); });
        core["Ec" /* ɵɵelementStart */](2, "ion-select-option", 13);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, CoreTagSearchPage_ion_col_16_ion_select_option_5_Template, 2, 2, "ion-select-option", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("selection", ctx_r0.collectionId)("disabled", ctx_r0.searching);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("value", 0);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.tag.inalltagcoll"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.collections);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function CoreTagSearchPage_core_empty_box_18_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 15);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("message", core["Rc" /* ɵɵpipeBind2 */](1, 1, "core.tag.notagsfound", core["ad" /* ɵɵpureFunction1 */](4, _c0, ctx_r1.query)));
    }
}
function CoreTagSearchPage_ng_container_19_ion_badge_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 19);
        core["Mc" /* ɵɵlistener */]("click", function CoreTagSearchPage_ng_container_19_ion_badge_2_Template_ion_badge_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r11); const tag_r9 = ctx.$implicit; const ctx_r10 = core["Oc" /* ɵɵnextContext */](2); return ctx_r10.openTag(tag_r9); });
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const tag_r9 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["nc" /* ɵɵclassMap */]("size" + tag_r9.size);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](tag_r9.name);
    }
}
function CoreTagSearchPage_ng_container_19_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 20);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "core.tag.showingfirsttags", core["ad" /* ɵɵpureFunction1 */](4, _c0, ctx_r8.cloud.tags.length)), " ");
    }
}
function CoreTagSearchPage_ng_container_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "div", 16);
        core["nd" /* ɵɵtemplate */](2, CoreTagSearchPage_ng_container_19_ion_badge_2_Template, 3, 3, "ion-badge", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](3, CoreTagSearchPage_ng_container_19_p_3_Template, 3, 6, "p", 18);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.cloud.tags);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.cloud.tags.length < ctx_r2.cloud.totalcount);
    }
}
/**
 * Page that displays most used tags and allows searching.
 */
let search_page_CoreTagSearchPage = /*@__PURE__*/ (() => {
    class CoreTagSearchPage {
        constructor() {
            this.collections = [];
            this.loaded = false;
            this.searching = false;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.collectionId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('collectionId') || 0;
            this.query = services_navigator["a" /* CoreNavigator */].getRouteParam('query') || '';
            this.fetchData().finally(() => {
                this.loaded = true;
            });
        }
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield Promise.all([
                        this.fetchCollections(),
                        this.fetchTags(),
                    ]);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading tags.');
                }
            });
        }
        /**
         * Fetch tag collections.
         *
         * @return Resolved when done.
         */
        fetchCollections() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const collections = yield services_tag["a" /* CoreTag */].getTagCollections();
                collections.forEach((collection) => {
                    if (!collection.name && collection.isdefault) {
                        collection.name = singletons["L" /* Translate */].instant('core.tag.defautltagcoll');
                    }
                });
                this.collections = collections;
            });
        }
        /**
         * Fetch tags.
         *
         * @return Resolved when done.
         */
        fetchTags() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cloud = yield services_tag["a" /* CoreTag */].getTagCloud(this.collectionId, undefined, undefined, this.query);
            });
        }
        /**
         * Go to tag index page.
         */
        openTag(tag) {
            const url = utils_text["a" /* CoreTextUtils */].decodeURI(tag.viewurl);
            contentlinks_helper["a" /* CoreContentLinksHelper */].handleLink(url);
        }
        /**
         * Refresh data.
         *
         * @param refresher Refresher event.
         */
        refreshData(refresher) {
            utils["a" /* CoreUtils */].allPromises([
                services_tag["a" /* CoreTag */].invalidateTagCollections(),
                services_tag["a" /* CoreTag */].invalidateTagCloud(this.collectionId, undefined, undefined, this.query),
            ]).finally(() => this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }));
        }
        /**
         * Search tags.
         *
         * @param query Search query.
         * @return Resolved when done.
         */
        searchTags(query) {
            this.searching = true;
            this.query = query;
            app["a" /* CoreApp */].closeKeyboard();
            return this.fetchTags().catch((error) => {
                dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading tags.');
            }).finally(() => {
                this.searching = false;
            });
        }
    }
    CoreTagSearchPage.ɵfac = function CoreTagSearchPage_Factory(t) { return new (t || CoreTagSearchPage)(); };
    CoreTagSearchPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreTagSearchPage, selectors: [["page-core-tag-search"]], decls: 20, vars: 20, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [1, "safe-area-page"], ["size", "12"], ["autocorrect", "off", "searchArea", "CoreTag", 3, "initialSearch", "disabled", "spellcheck", "autoFocus", "lengthCheck", "onSubmit", "onClear"], ["size", "12", "size-sm", "6", 4, "ngIf"], [1, "safe-area-page", 3, "hideUntil"], ["icon", "fas-tags", 3, "message", 4, "ngIf"], [4, "ngIf"], ["size", "12", "size-sm", "6"], [3, "selection", "disabled", "onChange"], [1, "ion-text-wrap", 3, "value"], ["class", "ion-text-wrap", 3, "value", 4, "ngFor", "ngForOf"], ["icon", "fas-tags", 3, "message"], [1, "ion-text-center", "core-tag-cloud"], ["class", "ion-text-wrap", 3, "click", 4, "ngFor", "ngForOf"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-text-wrap", 3, "click"], [1, "ion-text-center"]], template: function CoreTagSearchPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreTagSearchPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-grid", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-row");
                core["Ec" /* ɵɵelementStart */](14, "ion-col", 5);
                core["Ec" /* ɵɵelementStart */](15, "core-search-box", 6);
                core["Mc" /* ɵɵlistener */]("onSubmit", function CoreTagSearchPage_Template_core_search_box_onSubmit_15_listener($event) { return ctx.searchTags($event); })("onClear", function CoreTagSearchPage_Template_core_search_box_onClear_15_listener() { return ctx.searchTags(""); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](16, CoreTagSearchPage_ion_col_16_Template, 6, 7, "ion-col", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-loading", 8);
                core["nd" /* ɵɵtemplate */](18, CoreTagSearchPage_core_empty_box_18_Template, 2, 6, "core-empty-box", 9);
                core["nd" /* ɵɵtemplate */](19, CoreTagSearchPage_ng_container_19_Template, 4, 2, "ng-container", 10);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 14, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 16, "core.tag.searchtags"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 18, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](4);
                core["mc" /* ɵɵattribute */]("col-sm-6", ctx.collections && ctx.collections.length > 1 ? "" : null);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("initialSearch", ctx.query)("disabled", ctx.searching)("spellcheck", false)("autoFocus", false)("lengthCheck", 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.collections && ctx.collections.length > 1);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded && !ctx.searching);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.cloud || !ctx.cloud.tags || !ctx.cloud.tags.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.cloud && ctx.cloud.tags && ctx.cloud.tags.length > 0);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], search_box["a" /* CoreSearchBoxComponent */], common["t" /* NgIf */], loading["a" /* CoreLoadingComponent */], combobox["a" /* CoreComboboxComponent */], ionic_angular["lb" /* IonSelectOption */], common["s" /* NgForOf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   core-search-box[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%!important;margin:0!important}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin:8px;cursor:pointer}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size20[_ngcontent-%COMP%]{font-size:3.4rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size19[_ngcontent-%COMP%]{font-size:3.3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size18[_ngcontent-%COMP%]{font-size:3.2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size17[_ngcontent-%COMP%]{font-size:3.1rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size16[_ngcontent-%COMP%]{font-size:3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size15[_ngcontent-%COMP%]{font-size:2.9rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size14[_ngcontent-%COMP%]{font-size:2.8rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size13[_ngcontent-%COMP%]{font-size:2.7rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size12[_ngcontent-%COMP%]{font-size:2.6rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size11[_ngcontent-%COMP%]{font-size:2.5rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size10[_ngcontent-%COMP%]{font-size:2.4rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size9[_ngcontent-%COMP%]{font-size:2.3rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size8[_ngcontent-%COMP%]{font-size:2.2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:2.1rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:2rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:1.9rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:1.8rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:1.7rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:1.6rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   .core-tag-cloud[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]   .size0[_ngcontent-%COMP%]{font-size:1.4rem}"] });
    return CoreTagSearchPage;
})();

// CONCATENATED MODULE: ./src/core/features/tag/pages/search/search.page.module.ts
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
        component: search_page_CoreTagSearchPage,
    },
];
let search_page_module_CoreTagSearchPageModule = /*@__PURE__*/ (() => {
    class CoreTagSearchPageModule {
    }
    CoreTagSearchPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreTagSearchPageModule });
    CoreTagSearchPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreTagSearchPageModule_Factory(t) { return new (t || CoreTagSearchPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSearchComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreTagSearchPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](search_page_module_CoreTagSearchPageModule, { declarations: [search_page_CoreTagSearchPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSearchComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);