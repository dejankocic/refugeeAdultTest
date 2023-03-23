(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "Ct/I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsLazyModule", function() { return /* binding */ settings_lazy_module_CoreSettingsLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/features/sharedfiles/sharedfiles.module.ts + 2 modules
var sharedfiles_module = __webpack_require__("0Gfa");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/settings/pages/index/index.ts
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












function CoreSettingsIndexPage_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 4);
        core["Mc" /* ɵɵlistener */]("click", function CoreSettingsIndexPage_ion_item_12_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r3); const section_r1 = ctx.$implicit; const ctx_r2 = core["Oc" /* ɵɵnextContext */](); return ctx_r2.sections.select(section_r1); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 5);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const section_r1 = ctx.$implicit;
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r0.sections.getItemAriaCurrent(section_r1));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("name", section_r1.icon);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, section_r1.name));
    }
}
let index_CoreSettingsIndexPage = /*@__PURE__*/ (() => {
    class CoreSettingsIndexPage {
        constructor() {
            this.sections = new index_CoreSettingsSectionsManager(CoreSettingsIndexPage);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            this.sections.setItems(this.getSections());
            this.sections.start(this.splitView);
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.sections.destroy();
        }
        /**
         * Get the sections.
         *
         * @returns Sections.
         */
        getSections() {
            const sections = [
                {
                    name: 'core.settings.general',
                    path: 'general',
                    icon: 'fas-wrench',
                },
                {
                    name: 'core.settings.spaceusage',
                    path: 'spaceusage',
                    icon: 'fas-tasks',
                },
                {
                    name: 'core.settings.synchronization',
                    path: 'sync',
                    icon: constants["a" /* CoreConstants */].ICON_SYNC,
                },
            ];
            if (app["a" /* CoreApp */].isIOS()) {
                sections.push({
                    name: 'core.sharedfiles.sharedfiles',
                    path: sharedfiles_module["c" /* SHAREDFILES_PAGE_NAME */] + '/list/root',
                    icon: 'fas-folder',
                    params: { manage: true },
                });
            }
            sections.push({
                name: 'core.settings.about',
                path: 'about',
                icon: 'fas-id-card',
            });
            return sections;
        }
    }
    CoreSettingsIndexPage.ɵfac = function CoreSettingsIndexPage_Factory(t) { return new (t || CoreSettingsIndexPage)(); };
    CoreSettingsIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsIndexPage, selectors: [["page-core-settings-index"]], viewQuery: function CoreSettingsIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 13, vars: 7, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 3, "click"], ["slot", "start", "aria-hidden", "true", 3, "name"]], template: function CoreSettingsIndexPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Pc" /* ɵɵpipe */](7, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](8, "ion-buttons", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "core-split-view");
                core["Ec" /* ɵɵelementStart */](11, "ion-list");
                core["nd" /* ɵɵtemplate */](12, CoreSettingsIndexPage_ion_item_12_Template, 5, 5, "ion-item", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.settings.appsettings"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sections.items);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSettingsIndexPage;
})();
/**
 * Helper class to manage sections.
 */
class index_CoreSettingsSectionsManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    /**
     * @inheritdoc
     */
    getItemPath(section) {
        return section.path;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(section) {
        return section.params || {};
    }
}

// CONCATENATED MODULE: ./src/core/features/settings/settings-lazy.module.ts
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









const sectionRoutes = [
    {
        path: 'general',
        loadChildren: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(null, "86GQ")).then(m => m.CoreSettingsGeneralPageModule),
    },
    {
        path: 'spaceusage',
        loadChildren: () => __webpack_require__.e(/* import() */ 109).then(__webpack_require__.bind(null, "IcH5")).then(m => m.CoreSettingsSpaceUsagePageModule),
    },
    {
        path: 'sync',
        loadChildren: () => __webpack_require__.e(/* import() */ 110).then(__webpack_require__.bind(null, "OQUD"))
            .then(m => m.CoreSettingsSynchronizationPageModule),
    },
    {
        path: sharedfiles_module["c" /* SHAREDFILES_PAGE_NAME */],
        loadChildren: () => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "agZB")).then(m => m.CoreSharedFilesLazyModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/* import() */ 104).then(__webpack_require__.bind(null, "mgCc")).then(m => m.CoreSettingsAboutPageModule),
    },
];
const mobileRoutes = [
    {
        path: '',
        component: index_CoreSettingsIndexPage,
    },
    ...sectionRoutes,
];
const tabletRoutes = [
    {
        path: '',
        component: index_CoreSettingsIndexPage,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'general',
            },
            ...sectionRoutes,
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
    {
        path: 'about/deviceinfo',
        loadChildren: () => __webpack_require__.e(/* import() */ 105).then(__webpack_require__.bind(null, "R12+")).then(m => m.CoreSettingsDeviceInfoPageModule),
    },
    {
        path: 'about/licenses',
        loadChildren: () => __webpack_require__.e(/* import() */ 107).then(__webpack_require__.bind(null, "9XWE")).then(m => m.CoreSettingsLicensesPageModule),
    },
];
let settings_lazy_module_CoreSettingsLazyModule = /*@__PURE__*/ (() => {
    class CoreSettingsLazyModule {
    }
    CoreSettingsLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsLazyModule });
    CoreSettingsLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsLazyModule_Factory(t) { return new (t || CoreSettingsLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ]] });
    return CoreSettingsLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](settings_lazy_module_CoreSettingsLazyModule, { declarations: [index_CoreSettingsIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]] }); })();


/***/ })

}]);