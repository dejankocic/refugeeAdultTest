(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "bQj9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCourseUnsupportedModulePageModule", function() { return /* binding */ unsupported_module_module_CoreCourseUnsupportedModulePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/features/course/components/unsupported-module/unsupported-module.ts
var unsupported_module = __webpack_require__("5Yqf");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/course/pages/unsupported-module/unsupported-module.page.ts
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












function CoreCourseUnsupportedModulePage_core_context_menu_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-context-menu-item", 7);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("priority", 900)("href", ctx_r0.module.url)("content", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.openinbrowser"));
    }
}
function CoreCourseUnsupportedModulePage_core_context_menu_item_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 8);
        core["Mc" /* ɵɵlistener */]("action", function CoreCourseUnsupportedModulePage_core_context_menu_item_10_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r3); const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.expandDescription(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 800)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.moduleintro"));
    }
}
/**
 * Page that displays info about an unsupported module.
 */
let unsupported_module_page_CoreCourseUnsupportedModulePage = /*@__PURE__*/ (() => {
    class CoreCourseUnsupportedModulePage {
        /**
         * @inheritDoc
         */
        ngOnInit() {
            this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
        }
        /**
         * Expand the description.
         */
        expandDescription() {
            utils_text["a" /* CoreTextUtils */].viewText(singletons["L" /* Translate */].instant('core.description'), this.module.description, {
                filter: true,
                contextLevel: 'module',
                instanceId: this.module.id,
                courseId: this.courseId,
            });
        }
    }
    CoreCourseUnsupportedModulePage.ɵfac = function CoreCourseUnsupportedModulePage_Factory(t) { return new (t || CoreCourseUnsupportedModulePage)(); };
    CoreCourseUnsupportedModulePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCourseUnsupportedModulePage, selectors: [["page-core-course-unsupported-module"]], decls: 13, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["iconAction", "fas-external-link-alt", 3, "priority", "href", "content", 4, "ngIf"], ["iconAction", "fas-arrow-right", 3, "priority", "content", "action", 4, "ngIf"], [3, "module", "courseId"], ["iconAction", "fas-external-link-alt", 3, "priority", "href", "content"], ["iconAction", "fas-arrow-right", 3, "priority", "content", "action"]], template: function CoreCourseUnsupportedModulePage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["Ec" /* ɵɵelementStart */](8, "core-context-menu");
                core["nd" /* ɵɵtemplate */](9, CoreCourseUnsupportedModulePage_core_context_menu_item_9_Template, 2, 5, "core-context-menu-item", 4);
                core["nd" /* ɵɵtemplate */](10, CoreCourseUnsupportedModulePage_core_context_menu_item_10_Template, 2, 4, "core-context-menu-item", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "ion-content");
                core["zc" /* ɵɵelement */](12, "core-course-unsupported-module", 6);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.module == null ? null : ctx.module.name)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.module == null ? null : ctx.module.url);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.module == null ? null : ctx.module.description);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], context_menu["a" /* CoreContextMenuComponent */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], unsupported_module["a" /* CoreCourseUnsupportedModuleComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCourseUnsupportedModulePage;
})();

// EXTERNAL MODULE: ./src/core/features/course/components/components.module.ts
var components_module = __webpack_require__("Fjfc");

// CONCATENATED MODULE: ./src/core/features/course/pages/unsupported-module/unsupported-module.module.ts
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
        component: unsupported_module_page_CoreCourseUnsupportedModulePage,
    },
];
let unsupported_module_module_CoreCourseUnsupportedModulePageModule = /*@__PURE__*/ (() => {
    class CoreCourseUnsupportedModulePageModule {
    }
    CoreCourseUnsupportedModulePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCourseUnsupportedModulePageModule });
    CoreCourseUnsupportedModulePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCourseUnsupportedModulePageModule_Factory(t) { return new (t || CoreCourseUnsupportedModulePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCourseComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCourseUnsupportedModulePageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](unsupported_module_module_CoreCourseUnsupportedModulePageModule, { declarations: [unsupported_module_page_CoreCourseUnsupportedModulePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCourseComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);