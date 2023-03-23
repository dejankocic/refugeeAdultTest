(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "/C9y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSitePluginsModuleIndexPageModule", function() { return /* binding */ module_index_module_CoreSitePluginsModuleIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/module-index/module-index.ts
var module_index = __webpack_require__("2vUU");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/module-index/module-index.ts

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
 * Page to render the index page of a module site plugin.
 */
let module_index_CoreSitePluginsModuleIndexPage = /*@__PURE__*/ (() => {
    class CoreSitePluginsModuleIndexPage {
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title');
            this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.doRefresh().finally(() => {
                refresher.complete();
            });
        }
        /**
         * The page is about to enter and become the active page.
         */
        ionViewWillEnter() {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillEnter');
        }
        /**
         * The page has fully entered and is now the active page. This event will fire, whether it was the first load or a cached page.
         */
        ionViewDidEnter() {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewDidEnter');
        }
        /**
         * The page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillLeave');
        }
        /**
         * The page has finished leaving and is no longer the active page.
         */
        ionViewDidLeave() {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewDidLeave');
        }
        /**
         * The page is about to be destroyed and have its elements removed.
         */
        ionViewWillUnload() {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.callComponentFunction('ionViewWillUnload');
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.content) {
                    return true;
                }
                const result = yield this.content.callComponentFunction('canLeave');
                return result === undefined || result === null ? true : !!result;
            });
        }
    }
    CoreSitePluginsModuleIndexPage.ɵfac = function CoreSitePluginsModuleIndexPage_Factory(t) { return new (t || CoreSitePluginsModuleIndexPage)(); };
    CoreSitePluginsModuleIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSitePluginsModuleIndexPage, selectors: [["page-core-site-plugins-module-index"]], viewQuery: function CoreSitePluginsModuleIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](module_index["a" /* CoreSitePluginsModuleIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 13, vars: 11, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "pageTitle"]], template: function CoreSitePluginsModuleIndexPage_Template(rf, ctx) {
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
                core["zc" /* ɵɵelement */](7, "ion-buttons", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSitePluginsModuleIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](12, "core-site-plugins-module-index", 5);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.content || !ctx.content.ptrEnabled || !ctx.content.content || !ctx.content.content.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 9, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("pageTitle", ctx.title);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], module_index["a" /* CoreSitePluginsModuleIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSitePluginsModuleIndexPage;
})();

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/components.module.ts
var components_module = __webpack_require__("w9Bf");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/module-index/module-index.module.ts
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
        component: module_index_CoreSitePluginsModuleIndexPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
/**
 * Module to lazy load the page.
 */
let module_index_module_CoreSitePluginsModuleIndexPageModule = /*@__PURE__*/ (() => {
    class CoreSitePluginsModuleIndexPageModule {
    }
    CoreSitePluginsModuleIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSitePluginsModuleIndexPageModule });
    CoreSitePluginsModuleIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSitePluginsModuleIndexPageModule_Factory(t) { return new (t || CoreSitePluginsModuleIndexPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSitePluginsComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSitePluginsModuleIndexPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](module_index_module_CoreSitePluginsModuleIndexPageModule, { declarations: [module_index_CoreSitePluginsModuleIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSitePluginsComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);