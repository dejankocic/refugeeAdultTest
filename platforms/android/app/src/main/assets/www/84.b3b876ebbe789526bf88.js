(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "Ievp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCourseListModTypePageModule", function() { return /* binding */ list_mod_type_module_CoreCourseListModTypePageModule; });

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

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/course/services/module-delegate.ts + 1 modules
var module_delegate = __webpack_require__("yQ+R");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/features/course/components/module/module.ts
var module_module = __webpack_require__("1Y1L");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/course/pages/list-mod-type/list-mod-type.page.ts

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
















function CoreCourseListModTypePage_core_empty_box_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.course.nocontentavailable"));
    }
}
function CoreCourseListModTypePage_ng_container_14_ng_container_1_core_course_module_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-course-module", 9);
    }
    if (rf & 2) {
        const module_r4 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const section_r2 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("module", module_r4)("section", section_r2)("courseId", ctx_r5.courseId)("downloadEnabled", ctx_r5.downloadEnabled);
    }
}
function CoreCourseListModTypePage_ng_container_14_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCourseListModTypePage_ng_container_14_ng_container_1_core_course_module_1_Template, 1, 4, "core-course-module", 8);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const module_r4 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", module_r4.visibleoncoursepage !== 0);
    }
}
function CoreCourseListModTypePage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCourseListModTypePage_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 6);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const section_r2 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", section_r2.modules);
    }
}
/**
 * Page that displays all modules of a certain type in a course.
 */
let list_mod_type_page_CoreCourseListModTypePage = /*@__PURE__*/ (() => {
    class CoreCourseListModTypePage {
        constructor() {
            this.sections = [];
            this.title = '';
            this.loaded = false;
            this.downloadEnabled = false;
            this.archetypes = {}; // To speed up the check of modules.
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title') || '';
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.modName = services_navigator["a" /* CoreNavigator */].getRouteParam('modName');
                this.downloadEnabled = !((_a = sites["b" /* CoreSites */].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isOfflineDisabled());
                try {
                    yield this.fetchData();
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Fetches the data.
         *
         * @return Resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.courseId) {
                    return;
                }
                try {
                    // Get all the modules in the course.
                    let sections = yield course["a" /* CoreCourse */].getSections(this.courseId, false, true);
                    sections = sections.filter((section) => {
                        if (!section.modules) {
                            return false;
                        }
                        section.modules = section.modules.filter((mod) => {
                            if (mod.uservisible === false || !course["a" /* CoreCourse */].moduleHasView(mod)) {
                                // Ignore this module.
                                return false;
                            }
                            if (this.modName === 'resources') {
                                // Check that the module is a resource.
                                if (typeof this.archetypes[mod.modname] == 'undefined') {
                                    this.archetypes[mod.modname] = module_delegate["a" /* CoreCourseModuleDelegate */].supportsFeature(mod.modname, constants["a" /* CoreConstants */].FEATURE_MOD_ARCHETYPE, constants["a" /* CoreConstants */].MOD_ARCHETYPE_OTHER);
                                }
                                if (this.archetypes[mod.modname] == constants["a" /* CoreConstants */].MOD_ARCHETYPE_RESOURCE) {
                                    return true;
                                }
                            }
                            else if (mod.modname == this.modName) {
                                return true;
                            }
                        });
                        return section.modules.length > 0;
                    });
                    const result = course_helper["a" /* CoreCourseHelper */].addHandlerDataForModules(sections, this.courseId);
                    this.sections = result.sections;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting data');
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @return Promise resolved when done.
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(course["a" /* CoreCourse */].invalidateSections(this.courseId || 0));
                try {
                    yield this.fetchData();
                }
                finally {
                    refresher.complete();
                }
            });
        }
    }
    CoreCourseListModTypePage.ɵfac = function CoreCourseListModTypePage_Factory(t) { return new (t || CoreCourseListModTypePage)(); };
    CoreCourseListModTypePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCourseListModTypePage, selectors: [["page-core-course-list-mod-type"]], decls: 15, vars: 11, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-box-open", 3, "message", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["icon", "fas-box-open", 3, "message"], [3, "module", "section", "courseId", "downloadEnabled", 4, "ngIf"], [3, "module", "section", "courseId", "downloadEnabled"]], template: function CoreCourseListModTypePage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCourseListModTypePage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](12, CoreCourseListModTypePage_core_empty_box_12_Template, 2, 3, "core-empty-box", 5);
                core["Ec" /* ɵɵelementStart */](13, "ion-list");
                core["nd" /* ɵɵtemplate */](14, CoreCourseListModTypePage_ng_container_14_Template, 2, 1, "ng-container", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 9, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.sections || !ctx.sections.length);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sections);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], empty_box["a" /* CoreEmptyBoxComponent */], module_module["a" /* CoreCourseModuleComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCourseListModTypePage;
})();

// EXTERNAL MODULE: ./src/core/features/course/components/components.module.ts
var components_module = __webpack_require__("Fjfc");

// CONCATENATED MODULE: ./src/core/features/course/pages/list-mod-type/list-mod-type.module.ts
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
        component: list_mod_type_page_CoreCourseListModTypePage,
    },
];
let list_mod_type_module_CoreCourseListModTypePageModule = /*@__PURE__*/ (() => {
    class CoreCourseListModTypePageModule {
    }
    CoreCourseListModTypePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCourseListModTypePageModule });
    CoreCourseListModTypePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCourseListModTypePageModule_Factory(t) { return new (t || CoreCourseListModTypePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCourseComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCourseListModTypePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](list_mod_type_module_CoreCourseListModTypePageModule, { declarations: [list_mod_type_page_CoreCourseListModTypePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCourseComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);