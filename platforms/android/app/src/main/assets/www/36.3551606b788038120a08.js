(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "FguK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessageOutputAirnotifierDevicesPageModule", function() { return /* binding */ devices_module_AddonMessageOutputAirnotifierDevicesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/pushnotifications.ts
var pushnotifications = __webpack_require__("Afn4");

// EXTERNAL MODULE: ./src/addons/messageoutput/airnotifier/services/airnotifier.ts
var airnotifier = __webpack_require__("FEUt");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/messageoutput/airnotifier/pages/devices/devices.ts

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












function AddonMessageOutputAirnotifierDevicesPage_ion_item_14_span_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */]("(", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.currentdevice"), ")");
    }
}
function AddonMessageOutputAirnotifierDevicesPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 7);
        core["pd" /* ɵɵtext */](3);
        core["nd" /* ɵɵtemplate */](4, AddonMessageOutputAirnotifierDevicesPage_ion_item_14_span_4_Template, 3, 3, "span", 8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "core-button-with-spinner", 9);
        core["Ec" /* ɵɵelementStart */](8, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessageOutputAirnotifierDevicesPage_ion_item_14_Template_ion_toggle_ngModelChange_8_listener($event) { core["gd" /* ɵɵrestoreView */](_r4); const device_r1 = ctx.$implicit; return device_r1.enable = $event; })("ngModelChange", function AddonMessageOutputAirnotifierDevicesPage_ion_item_14_Template_ion_toggle_ngModelChange_8_listener() { core["gd" /* ɵɵrestoreView */](_r4); const device_r1 = ctx.$implicit; const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.enableDevice(device_r1, device_r1.enable); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const device_r1 = ctx.$implicit;
        core["qc" /* ɵɵclassProp */]("item-current", device_r1.current);
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("core-bold", device_r1.current);
        core["lc" /* ɵɵadvance */](2);
        core["sd" /* ɵɵtextInterpolate2 */](" ", device_r1.name, " ", device_r1.model, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", device_r1.current);
        core["lc" /* ɵɵadvance */](2);
        core["sd" /* ɵɵtextInterpolate2 */]("", device_r1.platform, " ", device_r1.version, "");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("loading", device_r1.updating);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", device_r1.enable);
    }
}
/**
 * Page that displays the list of devices.
 */
let devices_AddonMessageOutputAirnotifierDevicesPage = /*@__PURE__*/ (() => {
    class AddonMessageOutputAirnotifierDevicesPage {
        constructor() {
            this.devices = [];
            this.devicesLoaded = false;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.fetchDevices();
        }
        /**
         * Fetches the list of devices.
         *
         * @return Promise resolved when done.
         */
        fetchDevices() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const devices = yield airnotifier["a" /* AddonMessageOutputAirnotifier */].getUserDevices();
                    this.devices = this.formatDevices(devices);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    this.devicesLoaded = true;
                }
            });
        }
        /**
         * Add some calculated data for devices.
         *
         * @param devices Devices to format.
         * @return Formatted devices.
         */
        formatDevices(devices) {
            const formattedDevices = devices;
            const pushId = pushnotifications["a" /* CorePushNotifications */].getPushId();
            // Convert enabled to boolean and search current device.
            formattedDevices.forEach((device) => {
                device.enable = !!device.enable;
                device.current = !!(pushId && pushId == device.pushid);
            });
            return formattedDevices.sort((a, b) => {
                const compareA = a.name.toLowerCase();
                const compareB = b.name.toLowerCase();
                return compareA.localeCompare(compareB);
            });
        }
        /**
         * Update list of devices after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
         */
        updateDevicesAfterDelay() {
            // Cancel pending updates.
            if (this.updateTimeout) {
                clearTimeout(this.updateTimeout);
            }
            this.updateTimeout = window.setTimeout(() => {
                this.updateTimeout = undefined;
                this.updateDevices();
            }, 5000);
        }
        /**
         * Fetch devices. The purpose is to store the updated data, it won't be reflected in the view.
         */
        updateDevices() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(airnotifier["a" /* AddonMessageOutputAirnotifier */].invalidateUserDevices());
                yield airnotifier["a" /* AddonMessageOutputAirnotifier */].getUserDevices();
            });
        }
        /**
         * Refresh the list of devices.
         *
         * @param refresher Refresher.
         */
        refreshDevices(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(airnotifier["a" /* AddonMessageOutputAirnotifier */].invalidateUserDevices());
                    yield this.fetchDevices();
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Enable or disable a certain device.
         *
         * @param device The device object.
         * @param enable True to enable the device, false to disable it.
         */
        enableDevice(device, enable) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                device.updating = true;
                try {
                    yield airnotifier["a" /* AddonMessageOutputAirnotifier */].enableDevice(device.id, enable);
                    // Update the list of devices since it was modified.
                    this.updateDevicesAfterDelay();
                }
                catch (error) {
                    // Show error and revert change.
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                    device.enable = !device.enable;
                }
                finally {
                    device.updating = false;
                }
            });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            // If there is a pending action to update devices, execute it right now.
            if (this.updateTimeout) {
                clearTimeout(this.updateTimeout);
                this.updateDevices();
            }
        }
    }
    AddonMessageOutputAirnotifierDevicesPage.ɵfac = function AddonMessageOutputAirnotifierDevicesPage_Factory(t) { return new (t || AddonMessageOutputAirnotifierDevicesPage)(); };
    AddonMessageOutputAirnotifierDevicesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessageOutputAirnotifierDevicesPage, selectors: [["page-addon-message-output-airnotifier-devices"]], decls: 15, vars: 12, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 3, "item-current", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], [1, "item-heading"], [4, "ngIf"], ["slot", "end", 3, "loading"], [3, "ngModel", "ngModelChange"]], template: function AddonMessageOutputAirnotifierDevicesPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessageOutputAirnotifierDevicesPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshDevices($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-list");
                core["nd" /* ɵɵtemplate */](14, AddonMessageOutputAirnotifierDevicesPage_ion_item_14_Template, 9, 11, "ion-item", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "addon.messageoutput_airnotifier.processorsettingsdesc"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.devicesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.devicesLoaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.devices);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["t" /* NgIf */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonMessageOutputAirnotifierDevicesPage;
})();

// CONCATENATED MODULE: ./src/addons/messageoutput/airnotifier/pages/devices/devices.module.ts
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
        component: devices_AddonMessageOutputAirnotifierDevicesPage,
    },
];
let devices_module_AddonMessageOutputAirnotifierDevicesPageModule = /*@__PURE__*/ (() => {
    class AddonMessageOutputAirnotifierDevicesPageModule {
    }
    AddonMessageOutputAirnotifierDevicesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessageOutputAirnotifierDevicesPageModule });
    AddonMessageOutputAirnotifierDevicesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessageOutputAirnotifierDevicesPageModule_Factory(t) { return new (t || AddonMessageOutputAirnotifierDevicesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessageOutputAirnotifierDevicesPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](devices_module_AddonMessageOutputAirnotifierDevicesPageModule, { declarations: [devices_AddonMessageOutputAirnotifierDevicesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);