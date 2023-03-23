(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "9XWE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsLicensesPageModule", function() { return /* binding */ licenses_module_CoreSettingsLicensesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/settings/pages/licenses/licenses.ts

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









function CoreSettingsLicensesPage_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 5);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 6);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("href", ctx_r0.licensesUrl);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 4, "core.settings.opensourcelicenses"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r0.licensesUrl);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 6, "core.view"), "");
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "a", 13);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("href", license_r3.repository, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](license_r3.name);
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](license_r3.name);
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 9);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["td" /* ɵɵtextInterpolate3 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 3, "core.settings.publisher"), "", core["Qc" /* ɵɵpipeBind1 */](3, 5, "core.labelsep"), " ", license_r3.publisher, " ");
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "a", 13);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("href", license_r3.url, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](license_r3.url);
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "a", 13);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("href", "mailto:" + license_r3.email, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](license_r3.email);
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_ion_button_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 6);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("href", license_r3.licenseUrl);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.view"));
    }
}
function CoreSettingsLicensesPage_ng_container_11_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 9);
        core["nd" /* ɵɵtemplate */](3, CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_3_Template, 2, 2, "a", 10);
        core["nd" /* ɵɵtemplate */](4, CoreSettingsLicensesPage_ng_container_11_ion_item_1_ng_container_4_Template, 2, 1, "ng-container", 4);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, CoreSettingsLicensesPage_ng_container_11_ion_item_1_p_6_Template, 4, 7, "p", 11);
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "p");
        core["nd" /* ɵɵtemplate */](12, CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_12_Template, 2, 2, "a", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "p");
        core["nd" /* ɵɵtemplate */](14, CoreSettingsLicensesPage_ng_container_11_ion_item_1_a_14_Template, 2, 2, "a", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](15, CoreSettingsLicensesPage_ng_container_11_ion_item_1_ion_button_15_Template, 3, 4, "ion-button", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const license_r3 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", license_r3.repository);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !license_r3.repository);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" - ", license_r3.version, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", license_r3.publisher);
        core["lc" /* ɵɵadvance */](2);
        core["td" /* ɵɵtextInterpolate3 */]("", core["Qc" /* ɵɵpipeBind1 */](9, 10, "core.settings.license"), "", core["Qc" /* ɵɵpipeBind1 */](10, 12, "core.labelsep"), " ", license_r3.licenses, "");
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("ngIf", license_r3.url);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", license_r3.email);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", license_r3.licenseUrl);
    }
}
function CoreSettingsLicensesPage_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSettingsLicensesPage_ng_container_11_ion_item_1_Template, 16, 14, "ion-item", 7);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.licenses);
    }
}
/**
 * Page that displays the open source licenses information.
 */
let licenses_CoreSettingsLicensesPage = /*@__PURE__*/ (() => {
    class CoreSettingsLicensesPage {
        constructor() {
            this.loaded = false;
            this.licenses = [];
            this.error = false;
            let version = 'v' + constants["a" /* CoreConstants */].CONFIG.versionname;
            if (version.indexOf('-') > 0) {
                version = 'integration';
            }
            this.licensesUrl = 'https://raw.githubusercontent.com/moodlehq/moodleapp/' + version + '/licenses.json';
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const licenses = yield singletons["q" /* Http */].get(this.licensesUrl).toPromise();
                    this.licenses = Object.keys(licenses).map((name) => {
                        const license = licenses[name];
                        const nameSplit = name.lastIndexOf('@');
                        license.name = name.substring(0, nameSplit);
                        license.version = name.substring(nameSplit + 1);
                        if (license.repository) {
                            license.repository = license.repository.replace('git://', 'https://');
                            if (license.repository.indexOf('github.com') > 0) {
                                license.licenseUrl = license.repository + '/blob/' + license.version + '/' + license.licenseFile;
                            }
                        }
                        return license;
                    });
                    this.error = false;
                }
                catch (_a) {
                    this.error = true;
                }
                this.loaded = true;
            });
        }
    }
    CoreSettingsLicensesPage.ɵfac = function CoreSettingsLicensesPage_Factory(t) { return new (t || CoreSettingsLicensesPage)(); };
    CoreSettingsLicensesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsLicensesPage, selectors: [["page-core-app-settings-licenses"]], decls: 12, vars: 9, consts: [["slot", "start"], [3, "text"], [3, "hideUntil"], ["button", "", "class", "ion-text-wrap", "core-link", "", "auto-login", "no", 3, "href", 4, "ngIf"], [4, "ngIf"], ["button", "", "core-link", "", "auto-login", "no", 1, "ion-text-wrap", 3, "href"], ["target", "_blank", "fill", "clear", "slot", "end", "core-link", "", "auto-login", "no", 3, "href"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], [1, "item-heading"], ["core-link", "", "auto-login", "no", 3, "href", 4, "ngIf"], ["class", "item-heading", 4, "ngIf"], ["target", "_blank", "fill", "clear", "slot", "end", "core-link", "", "auto-login", "no", 3, "href", 4, "ngIf"], ["core-link", "", "auto-login", "no", 3, "href"]], template: function CoreSettingsLicensesPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 2);
                core["nd" /* ɵɵtemplate */](10, CoreSettingsLicensesPage_ion_item_10_Template, 7, 8, "ion-item", 3);
                core["nd" /* ɵɵtemplate */](11, CoreSettingsLicensesPage_ng_container_11_Template, 2, 1, "ng-container", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 7, "core.settings.opensourcelicenses"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.error);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.error);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], directives_link["a" /* CoreLinkDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["k" /* IonButton */], common["s" /* NgForOf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSettingsLicensesPage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/licenses/licenses.module.ts
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
        component: licenses_CoreSettingsLicensesPage,
    },
];
let licenses_module_CoreSettingsLicensesPageModule = /*@__PURE__*/ (() => {
    class CoreSettingsLicensesPageModule {
    }
    CoreSettingsLicensesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsLicensesPageModule });
    CoreSettingsLicensesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsLicensesPageModule_Factory(t) { return new (t || CoreSettingsLicensesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsLicensesPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](licenses_module_CoreSettingsLicensesPageModule, { declarations: [licenses_CoreSettingsLicensesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);