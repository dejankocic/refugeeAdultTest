(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "eYVI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreViewerIframePageModule", function() { return /* binding */ iframe_module_CoreViewerIframePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/iframe/iframe.ts
var iframe = __webpack_require__("qNqN");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/viewer/pages/iframe/iframe.ts

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









function CoreViewerIframePage_core_iframe_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-iframe", 4);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.finalUrl);
    }
}
/**
 * Page to display a URL in an iframe.
 */
let iframe_CoreViewerIframePage = /*@__PURE__*/ (() => {
    class CoreViewerIframePage {
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title');
                this.url = services_navigator["a" /* CoreNavigator */].getRouteParam('url');
                this.autoLogin = services_navigator["a" /* CoreNavigator */].getRouteParam('autoLogin') || 'check';
                if (!this.url) {
                    return;
                }
                const currentSite = sites["b" /* CoreSites */].getCurrentSite();
                if (currentSite && (this.autoLogin == 'yes' || (this.autoLogin == 'check' && currentSite.containsUrl(this.url)))) {
                    // Format the URL to add auto-login.
                    this.finalUrl = yield currentSite.getAutoLoginUrl(this.url, false);
                }
                else {
                    this.finalUrl = this.url;
                }
            });
        }
    }
    CoreViewerIframePage.ɵfac = function CoreViewerIframePage_Factory(t) { return new (t || CoreViewerIframePage)(); };
    CoreViewerIframePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreViewerIframePage, selectors: [["core-viewer-iframe"]], decls: 10, vars: 6, consts: [["slot", "start"], [3, "text"], [1, "core-loading-fullheight", 3, "hideUntil"], [3, "src", 4, "ngIf"], [3, "src"]], template: function CoreViewerIframePage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "core-loading", 2);
                core["nd" /* ɵɵtemplate */](9, CoreViewerIframePage_core_iframe_9_Template, 1, 1, "core-iframe", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.finalUrl);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.finalUrl);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], iframe["a" /* CoreIframeComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreViewerIframePage;
})();

// CONCATENATED MODULE: ./src/core/features/viewer/pages/iframe/iframe.module.ts
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
        component: iframe_CoreViewerIframePage,
    },
];
let iframe_module_CoreViewerIframePageModule = /*@__PURE__*/ (() => {
    class CoreViewerIframePageModule {
    }
    CoreViewerIframePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreViewerIframePageModule });
    CoreViewerIframePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreViewerIframePageModule_Factory(t) { return new (t || CoreViewerIframePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreViewerIframePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](iframe_module_CoreViewerIframePageModule, { declarations: [iframe_CoreViewerIframePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);