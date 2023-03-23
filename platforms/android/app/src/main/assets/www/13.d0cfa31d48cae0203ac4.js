(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "agZB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSharedFilesLazyModule", function() { return /* binding */ sharedfiles_lazy_module_CoreSharedFilesLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/sharedfiles/components/components.module.ts
var components_module = __webpack_require__("x1oG");

// EXTERNAL MODULE: ./src/core/services/file.ts
var file = __webpack_require__("EmGO");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/features/sharedfiles/components/list/list.ts
var list = __webpack_require__("XDEJ");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/sharedfiles/pages/list/list.ts
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
 * Page to display the list of shared files.
 */
let list_CoreSharedFilesListPage = /*@__PURE__*/ (() => {
    class CoreSharedFilesListPage {
        constructor() {
            this.manage = false;
            this.showSitePicker = false;
            this.path = '';
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.siteId = services_navigator["a" /* CoreNavigator */].getRouteParam('siteId');
            this.mimetypes = services_navigator["a" /* CoreNavigator */].getRouteParam('mimetypes');
            this.manage = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('manage');
            this.path = services_navigator["a" /* CoreNavigator */].getRouteParam('path') || '';
            this.showSitePicker = !services_navigator["a" /* CoreNavigator */].getRouteParam('hideSitePicker');
            this.calculateTitle(this.path);
        }
        /**
         * Calculate the title.
         *
         * @param path Path to use.
         */
        calculateTitle(path) {
            if (path) {
                this.title = file["a" /* CoreFile */].getFileAndDirectoryFromPath(path).name;
            }
            else {
                this.title = singletons["L" /* Translate */].instant('core.sharedfiles.sharedfiles');
            }
        }
    }
    CoreSharedFilesListPage.ɵfac = function CoreSharedFilesListPage_Factory(t) { return new (t || CoreSharedFilesListPage)(); };
    CoreSharedFilesListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSharedFilesListPage, selectors: [["page-core-shared-files-list"]], decls: 9, vars: 11, consts: [["slot", "start"], [3, "text"], [3, "siteId", "mimetypes", "isModal", "manage", "pick", "path", "showSitePicker", "onPathChanged"]], template: function CoreSharedFilesListPage_Template(rf, ctx) {
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
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "core-shared-files-list", 2);
                core["Mc" /* ɵɵlistener */]("onPathChanged", function CoreSharedFilesListPage_Template_core_shared_files_list_onPathChanged_8_listener($event) { return ctx.calculateTitle($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("siteId", ctx.siteId)("mimetypes", ctx.mimetypes)("isModal", false)("manage", ctx.manage)("pick", false)("path", ctx.path)("showSitePicker", ctx.showSitePicker);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], list["a" /* CoreSharedFilesListComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSharedFilesListPage;
})();

// EXTERNAL MODULE: ./src/core/features/sharedfiles/pages/choose-site/choose-site.ts
var choose_site = __webpack_require__("5Ol/");

// CONCATENATED MODULE: ./src/core/features/sharedfiles/sharedfiles-lazy.module.ts
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
        path: 'choosesite',
        component: choose_site["a" /* CoreSharedFilesChooseSitePage */],
    },
    {
        path: 'list/:hash',
        component: list_CoreSharedFilesListPage,
    },
];
let sharedfiles_lazy_module_CoreSharedFilesLazyModule = /*@__PURE__*/ (() => {
    class CoreSharedFilesLazyModule {
    }
    CoreSharedFilesLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSharedFilesLazyModule });
    CoreSharedFilesLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSharedFilesLazyModule_Factory(t) { return new (t || CoreSharedFilesLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSharedFilesComponentsModule */],
            ]] });
    return CoreSharedFilesLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](sharedfiles_lazy_module_CoreSharedFilesLazyModule, { declarations: [list_CoreSharedFilesListPage,
            choose_site["a" /* CoreSharedFilesChooseSitePage */]], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSharedFilesComponentsModule */]] });
})();


/***/ })

}]);