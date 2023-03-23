(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "37jC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPageModule", function() { return /* binding */ settings_module_AddonCalendarSettingsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar.ts
var calendar = __webpack_require__("SmTL");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/duration.ts
var duration = __webpack_require__("llyR");

// CONCATENATED MODULE: ./src/addons/calendar/pages/settings/settings.ts

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










const _c0 = function (a0) { return { header: a0 }; };
function AddonCalendarSettingsPage_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 3);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonCalendarSettingsPage_ion_item_10_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r2); const ctx_r1 = core["Oc" /* ɵɵnextContext */](); return ctx_r1.defaultTime = $event; })("ionChange", function AddonCalendarSettingsPage_ion_item_10_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r2); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.updateDefaultTime(ctx_r3.defaultTime); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Ec" /* ɵɵelementStart */](6, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](13);
        core["Pc" /* ɵɵpipe */](14, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](15, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](16);
        core["Pc" /* ɵɵpipe */](17, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](18, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](19);
        core["Pc" /* ɵɵpipe */](20, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](21, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](22);
        core["Pc" /* ɵɵpipe */](23, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](24, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](25);
        core["Pc" /* ɵɵpipe */](26, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](27, "ion-select-option", 4);
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 19, "addon.calendar.defaultnotificationtime"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.defaultTime)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](39, _c0, core["Qc" /* ɵɵpipeBind1 */](5, 21, "addon.calendar.defaultnotificationtime")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 0);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 23, "core.settings.disabled"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 10);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 25, 600));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 30);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](14, 27, 1800));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 60);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 29, 3600));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 120);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](20, 31, 7200));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 360);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](23, 33, 21600));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 720);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](26, 35, 43200));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", 1440);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](29, 37, 86400));
    }
}
/**
 * Page that displays the calendar settings.
 */
let settings_AddonCalendarSettingsPage = /*@__PURE__*/ (() => {
    class AddonCalendarSettingsPage {
        constructor() {
            this.defaultTime = -1;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.defaultTime = yield calendar["a" /* AddonCalendar */].getDefaultNotificationTime();
            });
        }
        /**
         * Update default time.
         *
         * @param newTime New time.
         */
        updateDefaultTime(newTime) {
            calendar["a" /* AddonCalendar */].setDefaultNotificationTime(newTime);
            events["b" /* CoreEvents */].trigger(calendar["c" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, { time: newTime }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
    }
    AddonCalendarSettingsPage.ɵfac = function AddonCalendarSettingsPage_Factory(t) { return new (t || AddonCalendarSettingsPage)(); };
    AddonCalendarSettingsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarSettingsPage, selectors: [["page-addon-calendar-settings"]], decls: 11, vars: 7, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value"]], template: function AddonCalendarSettingsPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "ion-list");
                core["nd" /* ɵɵtemplate */](10, AddonCalendarSettingsPage_ion_item_10_Template, 30, 41, "ion-item", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.settings.settings"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.defaultTime != 0 - 1);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], ionic_angular["lb" /* IonSelectOption */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], duration["a" /* CoreDurationPipe */]], encapsulation: 2 });
    return AddonCalendarSettingsPage;
})();

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// CONCATENATED MODULE: ./src/addons/calendar/pages/settings/settings.module.ts
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
        component: settings_AddonCalendarSettingsPage,
    },
];
let settings_module_AddonCalendarSettingsPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarSettingsPageModule {
    }
    AddonCalendarSettingsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarSettingsPageModule });
    AddonCalendarSettingsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarSettingsPageModule_Factory(t) { return new (t || AddonCalendarSettingsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarSettingsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](settings_module_AddonCalendarSettingsPageModule, { declarations: [settings_AddonCalendarSettingsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);