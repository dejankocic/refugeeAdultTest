(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "ICG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModLessonLazyModule", function() { return /* binding */ lesson_lazy_module_AddonModLessonLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/lesson/components/components.module.ts
var components_module = __webpack_require__("rSDf");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/mod/lesson/components/index/index.ts
var index = __webpack_require__("G8NF");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/lesson/pages/index/index.page.ts
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
 * Page that displays the lesson entry page.
 */
let index_page_AddonModLessonIndexPage = /*@__PURE__*/ (() => {
    class AddonModLessonIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
        /**
         * Component being initialized.
         */
        ngOnInit() {
            super.ngOnInit();
            this.group = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group');
            this.action = services_navigator["a" /* CoreNavigator */].getRouteParam('action');
        }
    }
    AddonModLessonIndexPage.ɵfac = function AddonModLessonIndexPage_Factory(t) { return ɵAddonModLessonIndexPage_BaseFactory(t || AddonModLessonIndexPage); };
    AddonModLessonIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModLessonIndexPage, selectors: [["page-addon-mod-lesson-index"]], viewQuery: function AddonModLessonIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModLessonIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 14, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "group", "action", "dataRetrieved"]], template: function AddonModLessonIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModLessonIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-lesson-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModLessonIndexPage_Template_addon_mod_lesson_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("group", ctx.group)("action", ctx.action);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModLessonIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModLessonIndexPage;
})();
const ɵAddonModLessonIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_page_AddonModLessonIndexPage);

// CONCATENATED MODULE: ./src/addons/mod/lesson/lesson-lazy.module.ts
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
        component: index_page_AddonModLessonIndexPage,
    },
    {
        path: ':courseId/:cmId/player',
        loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(60)]).then(__webpack_require__.bind(null, "TlsP")).then(m => m.AddonModLessonPlayerPageModule),
    },
    {
        path: ':courseId/:cmId/user-retake/:userId',
        loadChildren: () => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.bind(null, "N/A2")).then(m => m.AddonModLessonUserRetakePageModule),
    },
];
let lesson_lazy_module_AddonModLessonLazyModule = /*@__PURE__*/ (() => {
    class AddonModLessonLazyModule {
    }
    AddonModLessonLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModLessonLazyModule });
    AddonModLessonLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModLessonLazyModule_Factory(t) { return new (t || AddonModLessonLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModLessonComponentsModule */],
            ]] });
    return AddonModLessonLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](lesson_lazy_module_AddonModLessonLazyModule, { declarations: [index_page_AddonModLessonIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModLessonComponentsModule */]] });
})();


/***/ })

}]);