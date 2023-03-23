(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "mD2T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModFolderLazyModule", function() { return /* binding */ folder_lazy_module_AddonModFolderLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/folder/components/components.module.ts
var components_module = __webpack_require__("DydB");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/mod/folder/components/index/index.ts
var index = __webpack_require__("riiZ");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/folder/pages/index/index.page.ts
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
 * Page that displays a folder.
 */
let index_page_AddonModFolderIndexPage = /*@__PURE__*/ (() => {
    class AddonModFolderIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
        /**
         * Component being initialized.
         */
        ngOnInit() {
            var _a;
            super.ngOnInit();
            this.folderInstance = services_navigator["a" /* CoreNavigator */].getRouteParam('folderInstance');
            this.subfolder = services_navigator["a" /* CoreNavigator */].getRouteParam('subfolder');
            this.title = ((_a = this.subfolder) === null || _a === void 0 ? void 0 : _a.filename) || this.module.name;
        }
    }
    AddonModFolderIndexPage.ɵfac = function AddonModFolderIndexPage_Factory(t) { return ɵAddonModFolderIndexPage_BaseFactory(t || AddonModFolderIndexPage); };
    AddonModFolderIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFolderIndexPage, selectors: [["page-addon-mod-folder-index"]], viewQuery: function AddonModFolderIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModFolderIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 14, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "folderInstance", "subfolder", "dataRetrieved"]], template: function AddonModFolderIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModFolderIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-folder-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModFolderIndexPage_Template_addon_mod_folder_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", ctx.subfolder || !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("folderInstance", ctx.folderInstance)("subfolder", ctx.subfolder);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModFolderIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModFolderIndexPage;
})();
const ɵAddonModFolderIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_page_AddonModFolderIndexPage);

// CONCATENATED MODULE: ./src/addons/mod/folder/folder-lazy.module.ts
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
        path: ':courseId/:cmId/:hash',
        component: index_page_AddonModFolderIndexPage,
    },
    {
        path: ':courseId/:cmId',
        redirectTo: ':courseId/:cmId/',
        pathMatch: 'full',
    },
];
let folder_lazy_module_AddonModFolderLazyModule = /*@__PURE__*/ (() => {
    class AddonModFolderLazyModule {
    }
    AddonModFolderLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModFolderLazyModule });
    AddonModFolderLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModFolderLazyModule_Factory(t) { return new (t || AddonModFolderLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModFolderComponentsModule */],
            ]] });
    return AddonModFolderLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](folder_lazy_module_AddonModFolderLazyModule, { declarations: [index_page_AddonModFolderIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModFolderComponentsModule */]] });
})();


/***/ })

}]);