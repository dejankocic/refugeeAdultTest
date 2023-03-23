(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "ABl/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCourseIndexPageModule", function() { return /* binding */ index_module_CoreCourseIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/components/tabs-outlet/tabs-outlet.ts
var tabs_outlet = __webpack_require__("NhJP");

// EXTERNAL MODULE: ./src/core/features/course/services/format-delegate.ts + 1 modules
var format_delegate = __webpack_require__("blhJ");

// EXTERNAL MODULE: ./src/core/features/course/services/course-options-delegate.ts
var course_options_delegate = __webpack_require__("nxay");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/features/course/course.module.ts + 12 modules
var course_module = __webpack_require__("fxbH");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/course/pages/index/index.page.ts

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

















/**
 * Page that displays the list of courses the user is enrolled in.
 */
let index_page_CoreCourseIndexPage = /*@__PURE__*/ (() => {
    class CoreCourseIndexPage {
        constructor(route) {
            this.route = route;
            this.tabs = [];
            this.loaded = false;
            this.currentPagePath = '';
            this.contentsTab = {
                page: course_module["a" /* CONTENTS_PAGE_NAME */],
                title: 'core.course.contents',
                pageParams: {},
            };
            this.selectTabObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SELECT_COURSE_TAB, (data) => {
                var _a, _b;
                if (!data.name) {
                    // If needed, set sectionId and sectionNumber. They'll only be used if the content tabs hasn't been loaded yet.
                    if (data.sectionId) {
                        this.contentsTab.pageParams.sectionId = data.sectionId;
                    }
                    if (data.sectionNumber) {
                        this.contentsTab.pageParams.sectionNumber = data.sectionNumber;
                    }
                    // Select course contents.
                    (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(0);
                }
                else if (this.tabs) {
                    const index = this.tabs.findIndex((tab) => tab.name == data.name);
                    if (index >= 0) {
                        (_b = this.tabsComponent) === null || _b === void 0 ? void 0 : _b.selectByIndex(index);
                    }
                }
            });
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Increase route depth.
                const path = services_navigator["a" /* CoreNavigator */].getRouteFullPath(this.route.snapshot);
                services_navigator["a" /* CoreNavigator */].increaseRouteDepth(path.replace(/(\/deep)+/, ''));
                // Get params.
                this.course = services_navigator["a" /* CoreNavigator */].getRouteParam('course');
                this.firstTabName = services_navigator["a" /* CoreNavigator */].getRouteParam('selectedTab');
                this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
                this.modParams = services_navigator["a" /* CoreNavigator */].getRouteParam('modParams');
                this.currentPagePath = services_navigator["a" /* CoreNavigator */].getCurrentPath();
                this.contentsTab.page = utils_text["a" /* CoreTextUtils */].concatenatePaths(this.currentPagePath, this.contentsTab.page);
                this.contentsTab.pageParams = {
                    course: this.course,
                    sectionId: services_navigator["a" /* CoreNavigator */].getRouteNumberParam('sectionId'),
                    sectionNumber: services_navigator["a" /* CoreNavigator */].getRouteNumberParam('sectionNumber'),
                };
                if (this.module) {
                    this.contentsTab.pageParams.moduleId = this.module.id;
                }
                this.tabs.push(this.contentsTab);
                this.loaded = true;
                yield Promise.all([
                    this.loadCourseHandlers(),
                    this.loadTitle(),
                ]);
            });
        }
        /**
         * A tab was selected.
         */
        tabSelected() {
            if (this.module) {
                // Now that the first tab has been selected we can load the module.
                course_helper["a" /* CoreCourseHelper */].openModule(this.module, this.course.id, this.contentsTab.pageParams.sectionId, this.modParams);
                delete this.module;
            }
        }
        /**
         * Load course option handlers.
         *
         * @return Promise resolved when done.
         */
        loadCourseHandlers() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Load the course handlers.
                const handlers = yield course_options_delegate["a" /* CoreCourseOptionsDelegate */].getHandlersToDisplay(this.course, false, false);
                let tabToLoad;
                // Create the full path.
                handlers.forEach((handler, index) => {
                    handler.data.page = utils_text["a" /* CoreTextUtils */].concatenatePaths(this.currentPagePath, handler.data.page);
                    handler.data.pageParams = handler.data.pageParams || {};
                    // Check if this handler should be the first selected tab.
                    if (this.firstTabName && handler.name == this.firstTabName) {
                        tabToLoad = index + 1;
                    }
                });
                this.tabs = [...this.tabs, ...handlers.map(handler => (Object.assign(Object.assign({}, handler.data), { name: handler.name })))];
                // Select the tab if needed.
                this.firstTabName = undefined;
                if (tabToLoad) {
                    setTimeout(() => {
                        var _a;
                        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(tabToLoad);
                    });
                }
            });
        }
        /**
         * Load title for the page.
         *
         * @return Promise resolved when done.
         */
        loadTitle() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the title to display initially.
                this.title = format_delegate["a" /* CoreCourseFormatDelegate */].getCourseTitle(this.course);
                // Load sections.
                const sections = yield utils["a" /* CoreUtils */].ignoreErrors(course["a" /* CoreCourse */].getSections(this.course.id, false, true));
                if (!sections) {
                    return;
                }
                // Get the title again now that we have sections.
                this.title = format_delegate["a" /* CoreCourseFormatDelegate */].getCourseTitle(this.course, sections);
            });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            const path = services_navigator["a" /* CoreNavigator */].getRouteFullPath(this.route.snapshot);
            services_navigator["a" /* CoreNavigator */].decreaseRouteDepth(path.replace(/(\/deep)+/, ''));
            (_a = this.selectTabObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
        /**
         * User entered the page.
         */
        ionViewDidEnter() {
            var _a;
            (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
        }
        /**
         * User left the page.
         */
        ionViewDidLeave() {
            var _a;
            (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
        }
    }
    CoreCourseIndexPage.ɵfac = function CoreCourseIndexPage_Factory(t) { return new (t || CoreCourseIndexPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    CoreCourseIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCourseIndexPage, selectors: [["page-core-course-index"]], viewQuery: function CoreCourseIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](tabs_outlet["a" /* CoreTabsOutletComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.tabsComponent = _t.first);
            }
        }, decls: 9, vars: 7, consts: [["slot", "start"], [3, "text"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["slot", "end"], [3, "tabs", "hideUntil", "ionChange"]], template: function CoreCourseIndexPage_Template(rf, ctx) {
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
                core["zc" /* ɵɵelement */](7, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "core-tabs-outlet", 4);
                core["Mc" /* ɵɵlistener */]("ionChange", function CoreCourseIndexPage_Template_core_tabs_outlet_ionChange_8_listener() { return ctx.tabSelected(); });
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.course == null ? null : ctx.course.id);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("tabs", ctx.tabs)("hideUntil", ctx.loaded);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], tabs_outlet["a" /* CoreTabsOutletComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCourseIndexPage;
})();

// EXTERNAL MODULE: ./src/core/features/course/pages/index/index-routing.module.ts
var index_routing_module = __webpack_require__("8jEl");

// CONCATENATED MODULE: ./src/core/features/course/pages/index/index.module.ts
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
    const routes = Object(app_routing_module["d" /* resolveModuleRoutes */])(injector, index_routing_module["a" /* COURSE_INDEX_ROUTES */]);
    return [
        {
            path: '',
            component: index_page_CoreCourseIndexPage,
            data: {
                isCourseIndex: true,
            },
            children: routes.children,
        },
        ...routes.siblings,
    ];
}
let index_module_CoreCourseIndexPageModule = /*@__PURE__*/ (() => {
    class CoreCourseIndexPageModule {
    }
    CoreCourseIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCourseIndexPageModule });
    CoreCourseIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCourseIndexPageModule_Factory(t) { return new (t || CoreCourseIndexPageModule)(); }, providers: [
            { provide: router["g" /* ROUTES */], multi: true, useFactory: buildRoutes, deps: [core["x" /* Injector */]] },
        ], imports: [[
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCourseIndexPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_module_CoreCourseIndexPageModule, { declarations: [index_page_CoreCourseIndexPage], imports: [shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);