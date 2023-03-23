(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "mgCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return /* binding */ about_module_CoreSettingsAboutPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/settings/pages/about/about.ts
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










function CoreSettingsAboutPage_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["zc" /* ɵɵelement */](1, "ion-icon", 9);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("href", ctx_r0.privacyPolicy);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.privacypolicy"));
    }
}
function CoreSettingsAboutPage_ion_item_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 10);
        core["zc" /* ɵɵelement */](1, "ion-icon", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("href", ctx_r1.feedbackFormUrl);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.settings.helpusimprove"));
    }
}
/**
 * App settings about menu page.
 */
let about_CoreSettingsAboutPage = /*@__PURE__*/ (() => {
    class CoreSettingsAboutPage {
        constructor() {
            var _a;
            this.feedbackFormUrl = (_a = constants["a" /* CoreConstants */].CONFIG.feedbackFormUrl) !== null && _a !== void 0 ? _a : 'https://feedback.moodle.org/mobileapp';
            const currentSite = sites["b" /* CoreSites */].getCurrentSite();
            this.appName = constants["a" /* CoreConstants */].CONFIG.appname;
            this.versionName = constants["a" /* CoreConstants */].CONFIG.versionname;
            // Calculate the privacy policy to use.
            this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
                currentSite.getStoredConfig('sitepolicy'))) || constants["a" /* CoreConstants */].CONFIG.privacypolicy;
        }
        /**
         * Opens a page.
         *
         * @param page The component deeplink name you want to push onto the navigation stack.
         */
        openPage(page) {
            // const navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
            // navCtrl.push(page);
            services_navigator["a" /* CoreNavigator */].navigate(page);
        }
    }
    CoreSettingsAboutPage.ɵfac = function CoreSettingsAboutPage_Factory(t) { return new (t || CoreSettingsAboutPage)(); };
    CoreSettingsAboutPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsAboutPage, selectors: [["page-core-app-settings-about"]], decls: 25, vars: 16, consts: [["slot", "start"], [3, "text"], [1, "ion-text-wrap"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["name", "fas-mobile", "slot", "start", "aria-hidden", "true"], ["name", "far-copyright", "slot", "start", "aria-hidden", "true"], ["class", "ion-text-wrap", "button", "", "core-link", "", "auto-login", "no", "detail", "true", "detailIcon", "open-outline", 3, "href", 4, "ngIf"], ["class", "ion-text-wrap", "button", "", "core-link", "", "detail", "true", "detailIcon", "open-outline", 3, "href", 4, "ngIf"], ["button", "", "core-link", "", "auto-login", "no", "detail", "true", "detailIcon", "open-outline", 1, "ion-text-wrap", 3, "href"], ["name", "fas-user-shield", "slot", "start", "aria-hidden", "true"], ["button", "", "core-link", "", "detail", "true", "detailIcon", "open-outline", 1, "ion-text-wrap", 3, "href"], ["name", "fas-bullhorn", "slot", "start", "aria-hidden", "true"]], template: function CoreSettingsAboutPage_Template(rf, ctx) {
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
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-item", 2);
                core["Ec" /* ɵɵelementStart */](10, "ion-label");
                core["Ec" /* ɵɵelementStart */](11, "h2");
                core["pd" /* ɵɵtext */](12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-item", 3);
                core["Mc" /* ɵɵlistener */]("click", function CoreSettingsAboutPage_Template_ion_item_click_13_listener() { return ctx.openPage("deviceinfo"); });
                core["zc" /* ɵɵelement */](14, "ion-icon", 4);
                core["Ec" /* ɵɵelementStart */](15, "ion-label");
                core["pd" /* ɵɵtext */](16);
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "ion-item", 3);
                core["Mc" /* ɵɵlistener */]("click", function CoreSettingsAboutPage_Template_ion_item_click_18_listener() { return ctx.openPage("licenses"); });
                core["zc" /* ɵɵelement */](19, "ion-icon", 5);
                core["Ec" /* ɵɵelementStart */](20, "ion-label");
                core["pd" /* ɵɵtext */](21);
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](23, CoreSettingsAboutPage_ion_item_23_Template, 5, 4, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](24, CoreSettingsAboutPage_ion_item_24_Template, 5, 4, "ion-item", 7);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 10, "core.settings.about"), " ");
                core["lc" /* ɵɵadvance */](6);
                core["sd" /* ɵɵtextInterpolate2 */]("", ctx.appName, " ", ctx.versionName, "");
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 12, "core.settings.deviceinfo"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 14, "core.settings.opensourcelicenses"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.privacyPolicy);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.feedbackFormUrl);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], common["t" /* NgIf */], directives_link["a" /* CoreLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSettingsAboutPage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/about/about.module.ts
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
        component: about_CoreSettingsAboutPage,
    },
];
let about_module_CoreSettingsAboutPageModule = /*@__PURE__*/ (() => {
    class CoreSettingsAboutPageModule {
    }
    CoreSettingsAboutPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsAboutPageModule });
    CoreSettingsAboutPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsAboutPageModule_Factory(t) { return new (t || CoreSettingsAboutPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsAboutPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](about_module_CoreSettingsAboutPageModule, { declarations: [about_CoreSettingsAboutPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);