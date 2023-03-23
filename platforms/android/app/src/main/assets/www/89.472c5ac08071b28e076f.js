(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "1mzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursesCategoriesPageModule", function() { return /* binding */ categories_module_CoreCoursesCategoriesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/courses/components/components.module.ts
var components_module = __webpack_require__("oV7r");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/features/courses/components/course-list-item/course-list-item.ts
var course_list_item = __webpack_require__("Y7jA");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/courses/pages/categories/categories.ts

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
















function CoreCoursesCategoriesPage_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["zc" /* ɵɵelement */](1, "ion-icon", 10);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["zc" /* ɵɵelement */](5, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 3, "core.category"));
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.currentCategory.name)("contextInstanceId", ctx_r0.currentCategory.id);
    }
}
function CoreCoursesCategoriesPage_ion_item_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["zc" /* ɵɵelement */](3, "core-format-text", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r1.currentCategory.description)("contextInstanceId", ctx_r1.currentCategory.id);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function CoreCoursesCategoriesPage_div_14_section_6_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 15);
        core["Ec" /* ɵɵelementStart */](1, "span", 16);
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "span", 17);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const category_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](category_r6.coursecount);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 2, "core.courses.therearecourses", core["ad" /* ɵɵpureFunction1 */](5, _c0, category_r6.coursecount)));
    }
}
function CoreCoursesCategoriesPage_div_14_section_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "section");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 13);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursesCategoriesPage_div_14_section_6_Template_ion_item_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r10); const category_r6 = ctx.$implicit; const ctx_r9 = core["Oc" /* ɵɵnextContext */](2); return ctx_r9.openCategory(category_r6.id); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 10);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "h2");
        core["zc" /* ɵɵelement */](6, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, CoreCoursesCategoriesPage_div_14_section_6_ion_badge_7_Template, 6, 7, "ion-badge", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const category_r6 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", category_r6.name);
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 5, "core.category"));
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", category_r6.name)("contextInstanceId", category_r6.id);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", category_r6.coursecount > 0);
    }
}
function CoreCoursesCategoriesPage_div_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreCoursesCategoriesPage_div_14_section_6_Template, 8, 7, "section", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.courses.categories"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.categories);
    }
}
function CoreCoursesCategoriesPage_div_15_core_courses_course_list_item_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-courses-course-list-item", 19);
    }
    if (rf & 2) {
        const course_r12 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("course", course_r12);
    }
}
function CoreCoursesCategoriesPage_div_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreCoursesCategoriesPage_div_15_core_courses_course_list_item_6_Template, 1, 1, "core-courses-course-list-item", 18);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 2, "core.courses.courses"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.courses);
    }
}
function CoreCoursesCategoriesPage_core_empty_box_16_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 20);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.nocoursesyet"));
    }
}
/**
 * Page that displays a list of categories and the courses in the current category if any.
 */
let categories_CoreCoursesCategoriesPage = /*@__PURE__*/ (() => {
    class CoreCoursesCategoriesPage {
        constructor() {
            this.categories = [];
            this.courses = [];
            this.categoriesLoaded = false;
            this.categoryId = 0;
            this.title = singletons["L" /* Translate */].instant('core.courses.categories');
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.categoryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('id') || 0;
            this.fetchCategories().finally(() => {
                this.categoriesLoaded = true;
            });
        }
        /**
         * Fetch the categories.
         *
         * @return Promise resolved when done.
         */
        fetchCategories() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const categories = yield courses["a" /* CoreCourses */].getCategories(this.categoryId, true);
                    this.currentCategory = undefined;
                    const index = categories.findIndex((category) => category.id == this.categoryId);
                    if (index >= 0) {
                        this.currentCategory = categories[index];
                        // Delete current Category to avoid problems with the formatTree.
                        delete categories[index];
                    }
                    // Sort by depth and sortorder to avoid problems formatting Tree.
                    categories.sort((a, b) => {
                        if (a.depth == b.depth) {
                            return (a.sortorder > b.sortorder) ? 1 : ((b.sortorder > a.sortorder) ? -1 : 0);
                        }
                        return a.depth > b.depth ? 1 : -1;
                    });
                    this.categories = utils["a" /* CoreUtils */].formatTree(categories, 'parent', 'id', this.categoryId);
                    if (this.currentCategory) {
                        this.title = this.currentCategory.name;
                        try {
                            this.courses = yield courses["a" /* CoreCourses */].getCoursesByField('category', this.categoryId);
                        }
                        catch (error) {
                            dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                        }
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorloadcategories', true);
                }
            });
        }
        /**
         * Refresh the categories.
         *
         * @param refresher Refresher.
         */
        refreshCategories(refresher) {
            const promises = [];
            promises.push(courses["a" /* CoreCourses */].invalidateUserCourses());
            promises.push(courses["a" /* CoreCourses */].invalidateCategories(this.categoryId, true));
            promises.push(courses["a" /* CoreCourses */].invalidateCoursesByField('category', this.categoryId));
            promises.push(sites["b" /* CoreSites */].getCurrentSite().invalidateConfig());
            Promise.all(promises).finally(() => {
                this.fetchCategories().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Open a category.
         *
         * @param categoryId Category Id.
         */
        openCategory(categoryId) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/categories/' + categoryId);
        }
    }
    CoreCoursesCategoriesPage.ɵfac = function CoreCoursesCategoriesPage_Factory(t) { return new (t || CoreCoursesCategoriesPage)(); };
    CoreCoursesCategoriesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursesCategoriesPage, selectors: [["page-core-courses-categories"]], decls: 17, vars: 15, consts: [["slot", "start"], [3, "text"], ["contextLevel", "coursecat", 3, "text", "contextInstanceId"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngIf"], ["icon", "fas-graduation-cap", 3, "message", 4, "ngIf"], [1, "ion-text-wrap"], ["name", "fas-folder", "slot", "start"], ["maxHeight", "60", "contextLevel", "coursecat", 3, "text", "contextInstanceId"], [4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["slot", "end", "color", "light", 4, "ngIf"], ["slot", "end", "color", "light"], ["aria-hidden", "true"], [1, "sr-only"], [3, "course", 4, "ngFor", "ngForOf"], [3, "course"], ["icon", "fas-graduation-cap", 3, "message"]], template: function CoreCoursesCategoriesPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCoursesCategoriesPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshCategories($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, CoreCoursesCategoriesPage_ion_item_12_Template, 6, 5, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](13, CoreCoursesCategoriesPage_ion_item_13_Template, 4, 2, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](14, CoreCoursesCategoriesPage_div_14_Template, 7, 4, "div", 7);
                core["nd" /* ɵɵtemplate */](15, CoreCoursesCategoriesPage_div_15_Template, 7, 4, "div", 7);
                core["nd" /* ɵɵtemplate */](16, CoreCoursesCategoriesPage_core_empty_box_16_Template, 2, 3, "core-empty-box", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.currentCategory && ctx.currentCategory.id);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.categoriesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.categoriesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.currentCategory);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.currentCategory && ctx.currentCategory.description);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.categories.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.courses.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.categories.length && !ctx.courses.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["I" /* IonItemDivider */], common["s" /* NgForOf */], ionic_angular["j" /* IonBadge */], course_list_item["a" /* CoreCoursesCourseListItemComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCoursesCategoriesPage;
})();

// CONCATENATED MODULE: ./src/core/features/courses/pages/categories/categories.module.ts
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
        component: categories_CoreCoursesCategoriesPage,
    },
];
let categories_module_CoreCoursesCategoriesPageModule = /*@__PURE__*/ (() => {
    class CoreCoursesCategoriesPageModule {
    }
    CoreCoursesCategoriesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursesCategoriesPageModule });
    CoreCoursesCategoriesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursesCategoriesPageModule_Factory(t) { return new (t || CoreCoursesCategoriesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursesCategoriesPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](categories_module_CoreCoursesCategoriesPageModule, { declarations: [categories_CoreCoursesCategoriesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCoursesComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);