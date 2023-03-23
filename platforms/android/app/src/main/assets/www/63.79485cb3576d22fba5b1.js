(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "6YYW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModPageLazyModule", function() { return /* binding */ page_lazy_module_AddonModPageLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/page/components/components.module.ts
var components_module = __webpack_require__("drNk");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/page/components/index/index.ts
var index = __webpack_require__("bV99");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/page/pages/index/index.page.ts
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
 * Page that displays a page.
 */
let index_page_AddonModPageIndexPage = /*@__PURE__*/ (() => {
    class AddonModPageIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
    }
    AddonModPageIndexPage.ɵfac = function AddonModPageIndexPage_Factory(t) { return ɵAddonModPageIndexPage_BaseFactory(t || AddonModPageIndexPage); };
    AddonModPageIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModPageIndexPage, selectors: [["page-addon-mod-page-index"]], viewQuery: function AddonModPageIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModPageIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "dataRetrieved"]], template: function AddonModPageIndexPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModPageIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-page-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModPageIndexPage_Template_addon_mod_page_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModPageIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModPageIndexPage;
})();
const ɵAddonModPageIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_page_AddonModPageIndexPage);

// CONCATENATED MODULE: ./src/addons/mod/page/page-lazy.module.ts
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
        path: ':courseId/:cmId',
        component: index_page_AddonModPageIndexPage,
    },
];
let page_lazy_module_AddonModPageLazyModule = /*@__PURE__*/ (() => {
    class AddonModPageLazyModule {
    }
    AddonModPageLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModPageLazyModule });
    AddonModPageLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModPageLazyModule_Factory(t) { return new (t || AddonModPageLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModPageComponentsModule */],
            ]] });
    return AddonModPageLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](page_lazy_module_AddonModPageLazyModule, { declarations: [index_page_AddonModPageIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModPageComponentsModule */]] });
})();


/***/ })

}]);