(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "Ag8G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursesSearchPageModule", function() { return /* binding */ search_module_CoreCoursesSearchPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/courses/components/components.module.ts
var components_module = __webpack_require__("oV7r");

// EXTERNAL MODULE: ./src/core/features/search/components/components.module.ts
var components_components_module = __webpack_require__("PM4H");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/features/courses/components/course-list-item/course-list-item.ts
var course_list_item = __webpack_require__("Y7jA");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/courses/pages/search/search.ts

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











function CoreCoursesSearchPage_ng_container_12_core_courses_course_list_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-courses-course-list-item", 7);
    }
    if (rf & 2) {
        const course_r3 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("course", course_r3);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function CoreCoursesSearchPage_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreCoursesSearchPage_ng_container_12_core_courses_course_list_item_6_Template, 1, 1, "core-courses-course-list-item", 5);
        core["Ec" /* ɵɵelementStart */](7, "core-infinite-loading", 6);
        core["Mc" /* ɵɵlistener */]("action", function CoreCoursesSearchPage_ng_container_12_Template_core_infinite_loading_action_7_listener($event) { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.loadMoreResults($event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 4, "core.courses.totalcoursesearchresults", core["ad" /* ɵɵpureFunction1 */](7, _c0, ctx_r0.total)));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.courses);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("enabled", ctx_r0.canLoadMore)("error", ctx_r0.loadMoreError);
    }
}
function CoreCoursesSearchPage_core_empty_box_13_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 8);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.nosearchresults"));
    }
}
/**
 * Page that allows searching for courses.
 */
let search_CoreCoursesSearchPage = /*@__PURE__*/ (() => {
    class CoreCoursesSearchPage {
        constructor() {
            this.total = 0;
            this.courses = [];
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.page = 0;
            this.currentSearch = '';
        }
        /**
         * Search a new text.
         *
         * @param text The text to search.
         */
        search(text) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.currentSearch = text;
                this.courses = [];
                this.page = 0;
                this.total = 0;
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.searching', true);
                this.searchCourses().finally(() => {
                    modal.dismiss();
                });
            });
        }
        /**
         * Clear search box.
         */
        clearSearch() {
            this.currentSearch = '';
            this.courses = [];
            this.page = 0;
            this.total = 0;
        }
        /**
         * Load more results.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         */
        loadMoreResults(infiniteComplete) {
            this.searchCourses().finally(() => {
                infiniteComplete && infiniteComplete();
            });
        }
        /**
         * Search courses or load the next page of current search.
         *
         * @return Promise resolved when done.
         */
        searchCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                try {
                    const response = yield courses["a" /* CoreCourses */].search(this.currentSearch, this.page);
                    if (this.page === 0) {
                        this.courses = response.courses;
                    }
                    else {
                        this.courses = this.courses.concat(response.courses);
                    }
                    this.total = response.total;
                    this.page++;
                    this.canLoadMore = this.courses.length < this.total;
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorsearching', true);
                }
            });
        }
    }
    CoreCoursesSearchPage.ɵfac = function CoreCoursesSearchPage_Factory(t) { return new (t || CoreCoursesSearchPage)(); };
    CoreCoursesSearchPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursesSearchPage, selectors: [["page-core-courses-search"]], decls: 14, vars: 14, consts: [["slot", "start"], [3, "text"], ["autoFocus", "true", "searchArea", "CoreCoursesSearch", 3, "placeholder", "searchLabel", "onSubmit", "onClear"], [4, "ngIf"], ["icon", "search", 3, "message", 4, "ngIf"], [3, "course", 4, "ngFor", "ngForOf"], [3, "enabled", "error", "action"], [3, "course"], ["icon", "search", 3, "message"]], template: function CoreCoursesSearchPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-search-box", 2);
                core["Mc" /* ɵɵlistener */]("onSubmit", function CoreCoursesSearchPage_Template_core_search_box_onSubmit_9_listener($event) { return ctx.search($event); })("onClear", function CoreCoursesSearchPage_Template_core_search_box_onClear_9_listener() { return ctx.clearSearch(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](12, CoreCoursesSearchPage_ng_container_12_Template, 8, 9, "ng-container", 3);
                core["nd" /* ɵɵtemplate */](13, CoreCoursesSearchPage_core_empty_box_13_Template, 2, 3, "core-empty-box", 4);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "core.courses.searchcourses"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](10, 10, "core.courses.search"))("searchLabel", core["Qc" /* ɵɵpipeBind1 */](11, 12, "core.courses.search"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.total > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.total == 0);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], search_box["a" /* CoreSearchBoxComponent */], common["t" /* NgIf */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], course_list_item["a" /* CoreCoursesCourseListItemComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCoursesSearchPage;
})();

// CONCATENATED MODULE: ./src/core/features/courses/pages/search/search.module.ts
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
        component: search_CoreCoursesSearchPage,
    },
];
let search_module_CoreCoursesSearchPageModule = /*@__PURE__*/ (() => {
    class CoreCoursesSearchPageModule {
    }
    CoreCoursesSearchPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursesSearchPageModule });
    CoreCoursesSearchPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursesSearchPageModule_Factory(t) { return new (t || CoreCoursesSearchPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
                components_components_module["a" /* CoreSearchComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursesSearchPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](search_module_CoreCoursesSearchPageModule, { declarations: [search_CoreCoursesSearchPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCoursesComponentsModule */],
            components_components_module["a" /* CoreSearchComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);