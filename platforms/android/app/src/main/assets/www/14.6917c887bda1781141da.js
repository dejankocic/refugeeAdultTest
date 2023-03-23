(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "4vxA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSitePluginsPluginPageModule", function() { return /* binding */ plugin_page_module_CoreSitePluginsPluginPageModule; });

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

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/plugin-content/plugin-content.ts
var plugin_content = __webpack_require__("BTA1");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/plugin-page/plugin-page.ts

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









function CoreSitePluginsPluginPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r0.title));
    }
}
/**
 * Page to render a site plugin page.
 */
let plugin_page_CoreSitePluginsPluginPage = /*@__PURE__*/ (() => {
    class CoreSitePluginsPluginPage {
        constructor() {
            this.ptrEnabled = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title');
            this.component = services_navigator["a" /* CoreNavigator */].getRouteParam('component');
            this.method = services_navigator["a" /* CoreNavigator */].getRouteParam('method');
            this.args = services_navigator["a" /* CoreNavigator */].getRouteParam('args');
            this.initResult = services_navigator["a" /* CoreNavigator */].getRouteParam('initResult');
            this.jsData = services_navigator["a" /* CoreNavigator */].getRouteParam('jsData');
            this.preSets = services_navigator["a" /* CoreNavigator */].getRouteParam('preSets');
            this.ptrEnabled = !utils["a" /* CoreUtils */].isFalseOrZero(services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('ptrEnabled'));
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            var _a;
            (_a = this.content) === null || _a === void 0 ? void 0 : _a.refreshContent(false).finally(() => {
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
    CoreSitePluginsPluginPage.ɵfac = function CoreSitePluginsPluginPage_Factory(t) { return new (t || CoreSitePluginsPluginPage)(); };
    CoreSitePluginsPluginPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSitePluginsPluginPage, selectors: [["page-core-site-plugins-plugin"]], viewQuery: function CoreSitePluginsPluginPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](plugin_content["a" /* CoreSitePluginsPluginContentComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 12, vars: 15, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "component", "method", "args", "preSets", "initResult", "data", "pageTitle"]], template: function CoreSitePluginsPluginPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, CoreSitePluginsPluginPage_h1_5_Template, 3, 3, "h1", 2);
                core["zc" /* ɵɵelement */](6, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSitePluginsPluginPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](11, "core-site-plugins-plugin-content", 6);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.title);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.ptrEnabled || !ctx.content || !ctx.content.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("component", ctx.component)("method", ctx.method)("args", ctx.args)("preSets", ctx.preSets)("initResult", ctx.initResult)("data", ctx.jsData)("pageTitle", ctx.title);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], plugin_content["a" /* CoreSitePluginsPluginContentComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSitePluginsPluginPage;
})();

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/components.module.ts
var components_module = __webpack_require__("w9Bf");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/plugin-page/plugin-page.module.ts
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
        component: plugin_page_CoreSitePluginsPluginPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
/**
 * Module to lazy load the page.
 */
let plugin_page_module_CoreSitePluginsPluginPageModule = /*@__PURE__*/ (() => {
    class CoreSitePluginsPluginPageModule {
    }
    CoreSitePluginsPluginPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSitePluginsPluginPageModule });
    CoreSitePluginsPluginPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSitePluginsPluginPageModule_Factory(t) { return new (t || CoreSitePluginsPluginPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSitePluginsComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSitePluginsPluginPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](plugin_page_module_CoreSitePluginsPluginPageModule, { declarations: [plugin_page_CoreSitePluginsPluginPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSitePluginsComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);