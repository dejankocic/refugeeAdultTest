(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "p+py":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModGlossaryLazyModule", function() { return /* binding */ glossary_lazy_module_AddonModGlossaryLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/glossary/components/components.module.ts
var components_module = __webpack_require__("LP+a");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/glossary/components/index/index.ts
var index = __webpack_require__("uQoB");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/glossary/pages/index/index.ts
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
 * Page that displays a glossary.
 */
let index_AddonModGlossaryIndexPage = /*@__PURE__*/ (() => {
    class AddonModGlossaryIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
    }
    AddonModGlossaryIndexPage.ɵfac = function AddonModGlossaryIndexPage_Factory(t) { return ɵAddonModGlossaryIndexPage_BaseFactory(t || AddonModGlossaryIndexPage); };
    AddonModGlossaryIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModGlossaryIndexPage, selectors: [["page-addon-mod-glossary-index"]], viewQuery: function AddonModGlossaryIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModGlossaryIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 10, vars: 8, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], [3, "module", "courseId", "dataRetrieved"]], template: function AddonModGlossaryIndexPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "addon-mod-glossary-index", 4);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModGlossaryIndexPage_Template_addon_mod_glossary_index_dataRetrieved_9_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], index["a" /* AddonModGlossaryIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModGlossaryIndexPage;
})();
const ɵAddonModGlossaryIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModGlossaryIndexPage);

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// CONCATENATED MODULE: ./src/addons/mod/glossary/glossary-lazy.module.ts
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









const mobileRoutes = [
    {
        path: ':courseId/:cmId',
        component: index_AddonModGlossaryIndexPage,
    },
    {
        path: ':courseId/:cmId/entry/:entryId',
        loadChildren: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "/g6Q")).then(m => m.AddonModGlossaryEntryPageModule),
    },
    {
        path: ':courseId/:cmId/edit/:timecreated',
        loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "+uFs")).then(m => m.AddonModGlossaryEditPageModule),
    },
];
const tabletRoutes = [
    {
        path: ':courseId/:cmId',
        component: index_AddonModGlossaryIndexPage,
        children: [
            {
                path: 'entry/:entryId',
                loadChildren: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "/g6Q")).then(m => m.AddonModGlossaryEntryPageModule),
            },
            {
                path: 'edit/:timecreated',
                loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "+uFs")).then(m => m.AddonModGlossaryEditPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let glossary_lazy_module_AddonModGlossaryLazyModule = /*@__PURE__*/ (() => {
    class AddonModGlossaryLazyModule {
    }
    AddonModGlossaryLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModGlossaryLazyModule });
    AddonModGlossaryLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModGlossaryLazyModule_Factory(t) { return new (t || AddonModGlossaryLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModGlossaryComponentsModule */],
            ]] });
    return AddonModGlossaryLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](glossary_lazy_module_AddonModGlossaryLazyModule, { declarations: [index_AddonModGlossaryIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModGlossaryComponentsModule */]] });
})();


/***/ })

}]);