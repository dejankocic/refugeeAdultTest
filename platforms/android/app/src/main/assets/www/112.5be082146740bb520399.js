(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "OccN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSitePluginsCourseOptionModule", function() { return /* binding */ course_option_module_CoreSitePluginsCourseOptionModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/plugin-content/plugin-content.ts
var plugin_content = __webpack_require__("BTA1");

// EXTERNAL MODULE: ./src/core/features/siteplugins/services/siteplugins.ts
var siteplugins = __webpack_require__("TSsE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/course-option/course-option.ts

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










function CoreSitePluginsCourseOptionPage_core_site_plugins_plugin_content_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-site-plugins-plugin-content", 3);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("component", ctx_r0.component)("method", ctx_r0.method)("args", ctx_r0.args)("initResult", ctx_r0.initResult);
    }
}
/**
 * Page that displays the index of a course option site plugin.
 */
let course_option_CoreSitePluginsCourseOptionPage = /*@__PURE__*/ (() => {
    class CoreSitePluginsCourseOptionPage {
        constructor() {
            this.ptrEnabled = true;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.handlerUniqueName = services_navigator["a" /* CoreNavigator */].getRouteParam('handlerUniqueName');
            if (!this.handlerUniqueName) {
                return;
            }
            const handler = siteplugins["a" /* CoreSitePlugins */].getSitePluginHandler(this.handlerUniqueName);
            if (!handler) {
                return;
            }
            this.component = handler.plugin.component;
            this.method = handler.handlerSchema.method;
            this.args = {
                courseid: this.courseId,
            };
            this.initResult = handler.initResult;
            this.ptrEnabled = !('ptrenabled' in handler.handlerSchema) ||
                !utils["a" /* CoreUtils */].isFalseOrZero(handler.handlerSchema.ptrenabled);
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshData(refresher) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.refreshContent(false));
                }
                finally {
                    refresher.complete();
                }
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
    CoreSitePluginsCourseOptionPage.ɵfac = function CoreSitePluginsCourseOptionPage_Factory(t) { return new (t || CoreSitePluginsCourseOptionPage)(); };
    CoreSitePluginsCourseOptionPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSitePluginsCourseOptionPage, selectors: [["core-site-plugins-course-option"]], viewQuery: function CoreSitePluginsCourseOptionPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](plugin_content["a" /* CoreSitePluginsPluginContentComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 5, vars: 5, consts: [["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "component", "method", "args", "initResult", 4, "ngIf"], [3, "component", "method", "args", "initResult"]], template: function CoreSitePluginsCourseOptionPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-content");
                core["Ec" /* ɵɵelementStart */](1, "ion-refresher", 0);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSitePluginsCourseOptionPage_Template_ion_refresher_ionRefresh_1_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](2, "ion-refresher-content", 1);
                core["Pc" /* ɵɵpipe */](3, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](4, CoreSitePluginsCourseOptionPage_core_site_plugins_plugin_content_4_Template, 1, 4, "core-site-plugins-plugin-content", 2);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.ptrEnabled || !ctx.content || !ctx.content.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](3, 3, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.component && ctx.method);
            }
        }, directives: [ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], common["t" /* NgIf */], plugin_content["a" /* CoreSitePluginsPluginContentComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSitePluginsCourseOptionPage;
})();

// EXTERNAL MODULE: ./src/core/features/siteplugins/components/components.module.ts
var components_module = __webpack_require__("w9Bf");

// CONCATENATED MODULE: ./src/core/features/siteplugins/pages/course-option/course-option.module.ts
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
        component: course_option_CoreSitePluginsCourseOptionPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
/**
 * Module to lazy load the page.
 */
let course_option_module_CoreSitePluginsCourseOptionModule = /*@__PURE__*/ (() => {
    class CoreSitePluginsCourseOptionModule {
    }
    CoreSitePluginsCourseOptionModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSitePluginsCourseOptionModule });
    CoreSitePluginsCourseOptionModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSitePluginsCourseOptionModule_Factory(t) { return new (t || CoreSitePluginsCourseOptionModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSitePluginsComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSitePluginsCourseOptionModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](course_option_module_CoreSitePluginsCourseOptionModule, { declarations: [course_option_CoreSitePluginsCourseOptionPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSitePluginsComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);