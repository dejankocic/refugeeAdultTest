(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "+hPx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreMainMenuHomePageModule", function() { return /* binding */ home_module_CoreMainMenuHomePageModule; });

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

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/components/tabs-outlet/tabs-outlet.ts
var tabs_outlet = __webpack_require__("NhJP");

// EXTERNAL MODULE: ./src/core/features/mainmenu/services/home-delegate.ts
var home_delegate = __webpack_require__("TkC7");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-delegate.ts
var contentlinks_delegate = __webpack_require__("mbU7");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-helper.ts
var contentlinks_helper = __webpack_require__("vnm2");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/mainmenu/pages/home/home.ts

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




















function CoreMainMenuHomePage_core_empty_box_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 8);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.nocourses"));
    }
}
function CoreMainMenuHomePage_core_tabs_outlet_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-tabs-outlet", 9);
        core["Mc" /* ɵɵlistener */]("ionChange", function CoreMainMenuHomePage_core_tabs_outlet_11_Template_core_tabs_outlet_ionChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.tabSelected(); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("selectedIndex", ctx_r1.selectedTab)("hideUntil", ctx_r1.loaded)("tabs", ctx_r1.tabs);
    }
}
/**
 * Page that displays the Home.
 */
let home_CoreMainMenuHomePage = /*@__PURE__*/ (() => {
    class CoreMainMenuHomePage {
        constructor(route) {
            this.route = route;
            this.tabs = [];
            this.loaded = false;
        }
        /**
         * Initialize the component.
         */
        ngOnInit() {
            this.route.queryParams.subscribe((params) => {
                var _a;
                this.urlToOpen = (_a = params.urlToOpen) !== null && _a !== void 0 ? _a : this.urlToOpen;
                if (params.redirectPath) {
                    this.pendingRedirect = {
                        redirectPath: params.redirectPath,
                        redirectOptions: params.redirectOptions,
                    };
                }
            });
            this.loadSiteName();
            this.subscription = home_delegate["a" /* CoreMainMenuHomeDelegate */].getHandlersObservable().subscribe((handlers) => {
                handlers && this.initHandlers(handlers);
            });
            // Refresh the enabled flags if site is updated.
            this.updateSiteObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, () => {
                this.loadSiteName();
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Init handlers on change (size or handlers).
         */
        initHandlers(handlers) {
            // Re-build the list of tabs.
            const loaded = home_delegate["a" /* CoreMainMenuHomeDelegate */].areHandlersLoaded();
            const handlersMap = utils["a" /* CoreUtils */].arrayToObject(handlers, 'title');
            const newTabs = handlers.map((handler) => {
                const tab = this.tabs.find(tab => tab.title == handler.title);
                // If a handler is already in the list, use existing object to prevent re-creating the tab.
                if (tab) {
                    return tab;
                }
                return {
                    page: `/main/home/${handler.page}`,
                    pageParams: handler.pageParams,
                    title: handler.title,
                    class: handler.class,
                    icon: handler.icon,
                    badge: handler.badge,
                };
            });
            // Sort them by priority so new handlers are in the right position.
            newTabs.sort((a, b) => (handlersMap[b.title].priority || 0) - (handlersMap[a.title].priority || 0));
            if (typeof this.selectedTab == 'undefined' && newTabs.length > 0) {
                let maxPriority = 0;
                this.selectedTab = Object.entries(newTabs).reduce((maxIndex, [index, tab]) => {
                    var _a;
                    const selectPriority = (_a = handlersMap[tab.title].selectPriority) !== null && _a !== void 0 ? _a : 0;
                    if (selectPriority > maxPriority) {
                        maxPriority = selectPriority;
                        maxIndex = Number(index);
                    }
                    return maxIndex;
                }, 0);
            }
            this.tabs = newTabs;
            // Try to prevent empty box displayed for an instant when it shouldn't.
            setTimeout(() => {
                this.loaded = loaded;
            }, 50);
        }
        /**
         * Load the site name.
         */
        loadSiteName() {
            this.siteName = sites["b" /* CoreSites */].getCurrentSite().getSiteName();
        }
        /**
         * Handle a redirect.
         *
         * @param data Data received.
         */
        handleRedirect(data) {
            var _a;
            const params = (_a = data.redirectOptions) === null || _a === void 0 ? void 0 : _a.params;
            const coursePathMatches = data.redirectPath.match(/^course\/(\d+)\/?$/);
            if (coursePathMatches) {
                if (!(params === null || params === void 0 ? void 0 : params.course)) {
                    course_helper["a" /* CoreCourseHelper */].getAndOpenCourse(Number(coursePathMatches[1]), params);
                }
                else {
                    course["a" /* CoreCourse */].openCourse(params.course, params);
                }
            }
            else {
                services_navigator["a" /* CoreNavigator */].navigateToSitePath(data.redirectPath, Object.assign(Object.assign({}, data.redirectOptions), { preferCurrentTab: false }));
            }
        }
        /**
         * Handle a URL to open.
         *
         * @param url URL to open.
         */
        handleUrlToOpen(url) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const actions = yield contentlinks_delegate["a" /* CoreContentLinksDelegate */].getActionsFor(url, undefined);
                const action = contentlinks_helper["a" /* CoreContentLinksHelper */].getFirstValidAction(actions);
                if (action) {
                    action.action(action.sites[0]);
                }
            });
        }
        /**
         * Tab was selected.
         */
        tabSelected() {
            if (this.pendingRedirect) {
                this.handleRedirect(this.pendingRedirect);
            }
            else if (this.urlToOpen) {
                this.handleUrlToOpen(this.urlToOpen);
            }
            delete this.pendingRedirect;
            delete this.urlToOpen;
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
    CoreMainMenuHomePage.ɵfac = function CoreMainMenuHomePage_Factory(t) { return new (t || CoreMainMenuHomePage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    CoreMainMenuHomePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreMainMenuHomePage, selectors: [["page-core-mainmenu-home"]], viewQuery: function CoreMainMenuHomePage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](tabs_outlet["a" /* CoreTabsOutletComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.tabsComponent = _t.first);
            }
        }, decls: 12, vars: 9, consts: [["slot", "start"], [3, "text"], ["contextLevel", "system", 3, "text", "contextInstanceId"], ["src", "assets/img/top_logo.png", 1, "core-header-logo", 3, "alt"], ["slot", "end"], [3, "hideUntil"], ["icon", "fas-home", 3, "message", 4, "ngIf"], [3, "selectedIndex", "hideUntil", "tabs", "ionChange", 4, "ngIf"], ["icon", "fas-home", 3, "message"], [3, "selectedIndex", "hideUntil", "tabs", "ionChange"]], template: function CoreMainMenuHomePage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["zc" /* ɵɵelement */](7, "img", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](8, "ion-buttons", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](10, CoreMainMenuHomePage_core_empty_box_10_Template, 2, 3, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](11, CoreMainMenuHomePage_core_tabs_outlet_11_Template, 1, 3, "core-tabs-outlet", 7);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.siteName)("contextInstanceId", 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("alt", ctx.siteName);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.tabs.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.tabs.length > 0);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], empty_box["a" /* CoreEmptyBoxComponent */], tabs_outlet["a" /* CoreTabsOutletComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: [".in-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .core-header-logo[_ngcontent-%COMP%]{display:none}"] });
    return CoreMainMenuHomePage;
})();

// EXTERNAL MODULE: ./src/core/features/mainmenu/pages/home/home-routing.module.ts
var home_routing_module = __webpack_require__("Rqnc");

// EXTERNAL MODULE: ./src/core/features/mainmenu/mainmenu-tab-routing.module.ts
var mainmenu_tab_routing_module = __webpack_require__("wG2S");

// EXTERNAL MODULE: ./src/core/features/mainmenu/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("u7qe");

// CONCATENATED MODULE: ./src/core/features/mainmenu/pages/home/home.module.ts
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
    const routes = Object(app_routing_module["d" /* resolveModuleRoutes */])(injector, home_routing_module["b" /* MAIN_MENU_HOME_ROUTES */]);
    return [
        ...Object(mainmenu_tab_routing_module["b" /* buildTabMainRoutes */])(injector, {
            path: '',
            data: {
                mainMenuTabRoot: mainmenu["b" /* CoreMainMenuHomeHandlerService */].PAGE_NAME,
            },
            component: home_CoreMainMenuHomePage,
            children: routes.children,
        }),
        ...routes.siblings,
    ];
}
let home_module_CoreMainMenuHomePageModule = /*@__PURE__*/ (() => {
    class CoreMainMenuHomePageModule {
    }
    CoreMainMenuHomePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreMainMenuHomePageModule });
    CoreMainMenuHomePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreMainMenuHomePageModule_Factory(t) { return new (t || CoreMainMenuHomePageModule)(); }, providers: [
            { provide: router["g" /* ROUTES */], multi: true, useFactory: buildRoutes, deps: [core["x" /* Injector */]] },
        ], imports: [[
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreMainMenuHomePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](home_module_CoreMainMenuHomePageModule, { declarations: [home_CoreMainMenuHomePage], imports: [shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);