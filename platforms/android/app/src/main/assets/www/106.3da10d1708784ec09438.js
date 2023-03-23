(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "86GQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSettingsGeneralPageModule", function() { return /* binding */ general_module_CoreSettingsGeneralPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/config.ts + 1 modules
var config = __webpack_require__("BBqZ");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/lang.ts
var lang = __webpack_require__("Ao69");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/pushnotifications.ts
var pushnotifications = __webpack_require__("Afn4");

// EXTERNAL MODULE: ./src/core/features/settings/services/settings-helper.ts
var settings_helper = __webpack_require__("1gmh");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/utils/iframe.ts
var iframe = __webpack_require__("41gC");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/settings/pages/general/general.ts

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
















function CoreSettingsGeneralPage_ion_select_option_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 12);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", entry_r6.code);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](entry_r6.name);
    }
}
const _c0 = function (a0) { return { "font-size.px": a0 }; };
function CoreSettingsGeneralPage_ion_segment_button_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-segment-button", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["zc" /* ɵɵelement */](4, "span", 14);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const zoomLevel_r7 = ctx.$implicit;
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("value", zoomLevel_r7.value)("ngStyle", core["ad" /* ɵɵpureFunction1 */](6, _c0, zoomLevel_r7.style));
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 4, "core.settings.fontsizecharacter"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngStyle", core["ad" /* ɵɵpureFunction1 */](8, _c0, ctx_r1.zoomLevels[ctx_r1.zoomLevels.length - 1].style));
    }
}
function CoreSettingsGeneralPage_ion_item_24_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 18);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.forcedsetting"));
    }
}
function CoreSettingsGeneralPage_ion_item_24_ion_select_option_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 12);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const scheme_r10 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", scheme_r10);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.settings.colorscheme-" + scheme_r10), "");
    }
}
const _c1 = function (a0) { return { header: a0 }; };
function CoreSettingsGeneralPage_ion_item_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 15);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, CoreSettingsGeneralPage_ion_item_24_p_5_Template, 3, 3, "p", 16);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-select", 17);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_ion_item_24_Template_ion_select_ngModelChange_6_listener($event) { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.selectedScheme = $event; })("ionChange", function CoreSettingsGeneralPage_ion_item_24_Template_ion_select_ionChange_6_listener() { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.colorSchemeChanged(); });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["nd" /* ɵɵtemplate */](8, CoreSettingsGeneralPage_ion_item_24_ion_select_option_8_Template, 3, 4, "ion-select-option", 4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("lines", ctx_r2.selectedScheme == "system" && ctx_r2.isAndroid ? "none" : "inset");
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.settings.colorscheme"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.colorSchemeDisabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r2.selectedScheme)("disabled", ctx_r2.colorSchemeDisabled)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](11, _c1, core["Qc" /* ɵɵpipeBind1 */](7, 9, "core.settings.colorscheme")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.colorSchemes);
    }
}
function CoreSettingsGeneralPage_ion_item_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.settings.colorscheme-system-notice"));
    }
}
function CoreSettingsGeneralPage_ion_item_35_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 2);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 20);
        core["Mc" /* ɵɵlistener */]("click", function CoreSettingsGeneralPage_ion_item_35_Template_ion_button_click_8_listener() { core["gd" /* ɵɵrestoreView */](_r15); const ctx_r14 = core["Oc" /* ɵɵnextContext */](); return ctx_r14.openNativeSettings(); });
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.settings.ioscookies"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.settings.ioscookiesdescription"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 7, "core.opensettings"), " ");
    }
}
function CoreSettingsGeneralPage_ion_item_45_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 2);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_ion_item_45_Template_ion_toggle_ngModelChange_8_listener($event) { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r16 = core["Oc" /* ɵɵnextContext */](); return ctx_r16.analyticsEnabled = $event; })("ionChange", function CoreSettingsGeneralPage_ion_item_45_Template_ion_toggle_ionChange_8_listener() { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r18 = core["Oc" /* ɵɵnextContext */](); return ctx_r18.analyticsEnabledChanged(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "core.settings.enablefirebaseanalytics"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.settings.enablefirebaseanalyticsdescription"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r5.analyticsEnabled);
    }
}
/**
 * Page that displays the general settings.
 */
let general_CoreSettingsGeneralPage = /*@__PURE__*/ (() => {
    class CoreSettingsGeneralPage {
        constructor() {
            this.languages = [];
            this.selectedLanguage = '';
            this.zoomLevels = [];
            this.selectedZoomLevel = "normal" /* NORMAL */;
            this.richTextEditor = true;
            this.debugDisplay = false;
            this.analyticsSupported = false;
            this.analyticsEnabled = false;
            this.colorSchemes = [];
            this.selectedScheme = "light" /* LIGHT */;
            this.colorSchemeDisabled = false;
            this.isAndroid = false;
            this.displayIframeHelp = false;
            this.asyncInit();
        }
        /**
         * Async part of the constructor.
         */
        asyncInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the supported languages.
                const languages = constants["a" /* CoreConstants */].CONFIG.languages;
                for (const code in languages) {
                    this.languages.push({
                        code: code,
                        name: languages[code],
                    });
                }
                // Sort them by name.
                this.languages.sort((a, b) => a.name.localeCompare(b.name));
                this.selectedLanguage = yield lang["a" /* CoreLang */].getCurrentLanguage();
                // Configure color schemes.
                if (!constants["a" /* CoreConstants */].CONFIG.forceColorScheme) {
                    this.colorSchemeDisabled = settings_helper["a" /* CoreSettingsHelper */].isColorSchemeDisabledInSite();
                    if (this.colorSchemeDisabled) {
                        this.colorSchemes.push("light" /* LIGHT */);
                        this.selectedScheme = this.colorSchemes[0];
                    }
                    else {
                        this.isAndroid = app["a" /* CoreApp */].isAndroid();
                        this.colorSchemes = settings_helper["a" /* CoreSettingsHelper */].getAllowedColorSchemes();
                        this.selectedScheme = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_COLOR_SCHEME, "light" /* LIGHT */);
                    }
                }
                this.selectedZoomLevel = yield settings_helper["a" /* CoreSettingsHelper */].getZoomLevel();
                this.zoomLevels = Object.keys(constants["a" /* CoreConstants */].CONFIG.zoomlevels).map((value) => ({
                    value,
                    // Absolute pixel size based on 1.4rem body text when this size is selected.
                    style: Math.round(constants["a" /* CoreConstants */].CONFIG.zoomlevels[value] * 16 / 100),
                    selected: value === this.selectedZoomLevel,
                }));
                this.richTextEditor = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, true);
                this.debugDisplay = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_DEBUG_DISPLAY, false);
                this.analyticsSupported = constants["a" /* CoreConstants */].CONFIG.enableanalytics;
                if (this.analyticsSupported) {
                    this.analyticsEnabled = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_ANALYTICS_ENABLED, true);
                }
                this.displayIframeHelp = iframe["a" /* CoreIframeUtils */].shouldDisplayHelp();
            });
        }
        /**
         * Called when a new language is selected.
         */
        languageChanged() {
            lang["a" /* CoreLang */].changeCurrentLanguage(this.selectedLanguage).finally(() => {
                events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].LANGUAGE_CHANGED, this.selectedLanguage);
            });
        }
        /**
         * Called when a new zoom level is selected.
         */
        zoomLevelChanged() {
            this.zoomLevels = this.zoomLevels.map((fontSize) => {
                fontSize.selected = fontSize.value === this.selectedZoomLevel;
                return fontSize;
            });
            settings_helper["a" /* CoreSettingsHelper */].applyZoomLevel(this.selectedZoomLevel);
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_ZOOM_LEVEL, this.selectedZoomLevel);
        }
        /**
         * Called when a new color scheme is selected.
         */
        colorSchemeChanged() {
            settings_helper["a" /* CoreSettingsHelper */].setColorScheme(this.selectedScheme);
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_COLOR_SCHEME, this.selectedScheme);
        }
        /**
         * Called when the rich text editor is enabled or disabled.
         */
        richTextEditorChanged() {
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_RICH_TEXT_EDITOR, this.richTextEditor ? 1 : 0);
        }
        /**
         * Called when the debug display setting is enabled or disabled.
         */
        debugDisplayChanged() {
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_DEBUG_DISPLAY, this.debugDisplay ? 1 : 0);
            dom["a" /* CoreDomUtils */].setDebugDisplay(this.debugDisplay);
        }
        /**
         * Called when the analytics setting is enabled or disabled.
         */
        analyticsEnabledChanged() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield pushnotifications["a" /* CorePushNotifications */].enableAnalytics(this.analyticsEnabled);
                config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_ANALYTICS_ENABLED, this.analyticsEnabled ? 1 : 0);
            });
        }
        /**
         * Open native settings.
         */
        openNativeSettings() {
            singletons["j" /* Diagnostic */].switchToSettings();
        }
    }
    CoreSettingsGeneralPage.ɵfac = function CoreSettingsGeneralPage_Factory(t) { return new (t || CoreSettingsGeneralPage)(); };
    CoreSettingsGeneralPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSettingsGeneralPage, selectors: [["page-core-app-settings-general"]], decls: 46, vars: 39, consts: [["slot", "start"], [3, "text"], [1, "ion-text-wrap"], ["interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap", "core-settings-general-font-size", "item-interactive"], ["color", "primary", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", "ngStyle", 4, "ngFor", "ngForOf"], ["class", "ion-text-wrap core-settings-general-color-scheme", 3, "lines", 4, "ngIf"], ["text-wrap", "", 4, "ngIf"], [3, "ngModel", "ngModelChange", "ionChange"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "value"], [3, "value", "ngStyle"], [3, "ngStyle"], [1, "ion-text-wrap", "core-settings-general-color-scheme", 3, "lines"], ["class", "text-danger", 4, "ngIf"], ["interface", "action-sheet", 3, "ngModel", "disabled", "interfaceOptions", "ngModelChange", "ionChange"], [1, "text-danger"], ["text-wrap", ""], ["expand", "block", 3, "click"]], template: function CoreSettingsGeneralPage_Template(rf, ctx) {
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
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "ion-select", 3);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_Template_ion_select_ngModelChange_14_listener($event) { return ctx.selectedLanguage = $event; })("ionChange", function CoreSettingsGeneralPage_Template_ion_select_ionChange_14_listener() { return ctx.languageChanged(); });
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["nd" /* ɵɵtemplate */](16, CoreSettingsGeneralPage_ion_select_option_16_Template, 2, 2, "ion-select-option", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "ion-item", 5);
                core["Ec" /* ɵɵelementStart */](18, "ion-label");
                core["Ec" /* ɵɵelementStart */](19, "h2");
                core["pd" /* ɵɵtext */](20);
                core["Pc" /* ɵɵpipe */](21, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](22, "ion-segment", 6);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_Template_ion_segment_ngModelChange_22_listener($event) { return ctx.selectedZoomLevel = $event; })("ionChange", function CoreSettingsGeneralPage_Template_ion_segment_ionChange_22_listener() { return ctx.zoomLevelChanged(); });
                core["nd" /* ɵɵtemplate */](23, CoreSettingsGeneralPage_ion_segment_button_23_Template, 5, 10, "ion-segment-button", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](24, CoreSettingsGeneralPage_ion_item_24_Template, 9, 13, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](25, CoreSettingsGeneralPage_ion_item_25_Template, 5, 3, "ion-item", 9);
                core["Ec" /* ɵɵelementStart */](26, "ion-item", 2);
                core["Ec" /* ɵɵelementStart */](27, "ion-label");
                core["Ec" /* ɵɵelementStart */](28, "h2");
                core["pd" /* ɵɵtext */](29);
                core["Pc" /* ɵɵpipe */](30, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](31, "p");
                core["pd" /* ɵɵtext */](32);
                core["Pc" /* ɵɵpipe */](33, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](34, "ion-toggle", 10);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_Template_ion_toggle_ngModelChange_34_listener($event) { return ctx.richTextEditor = $event; })("ionChange", function CoreSettingsGeneralPage_Template_ion_toggle_ionChange_34_listener() { return ctx.richTextEditorChanged(); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](35, CoreSettingsGeneralPage_ion_item_35_Template, 11, 9, "ion-item", 11);
                core["Ec" /* ɵɵelementStart */](36, "ion-item", 2);
                core["Ec" /* ɵɵelementStart */](37, "ion-label");
                core["Ec" /* ɵɵelementStart */](38, "h2");
                core["pd" /* ɵɵtext */](39);
                core["Pc" /* ɵɵpipe */](40, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](41, "p");
                core["pd" /* ɵɵtext */](42);
                core["Pc" /* ɵɵpipe */](43, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](44, "ion-toggle", 10);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreSettingsGeneralPage_Template_ion_toggle_ngModelChange_44_listener($event) { return ctx.debugDisplay = $event; })("ionChange", function CoreSettingsGeneralPage_Template_ion_toggle_ionChange_44_listener() { return ctx.debugDisplayChanged(); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](45, CoreSettingsGeneralPage_ion_item_45_Template, 9, 7, "ion-item", 11);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 19, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 21, "core.settings.general"));
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](13, 23, "core.settings.language"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.selectedLanguage)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](37, _c1, core["Qc" /* ɵɵpipeBind1 */](15, 25, "core.settings.language")));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.languages);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 27, "core.settings.fontsize"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.selectedZoomLevel);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.zoomLevels);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.colorSchemes.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.colorSchemes.length > 0 && ctx.selectedScheme == "system" && ctx.isAndroid);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](30, 29, "core.settings.enablerichtexteditor"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](33, 31, "core.settings.enablerichtexteditordescription"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.richTextEditor);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.displayIframeHelp);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](40, 33, "core.settings.debugdisplay"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](43, 35, "core.settings.debugdisplaydescription"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.debugDisplay);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.analyticsSupported);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["ib" /* IonSegment */], common["t" /* NgIf */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["jb" /* IonSegmentButton */], common["w" /* NgStyle */], ionic_angular["k" /* IonButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .core-settings-general-font-size[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{max-width:250px}"] });
    return CoreSettingsGeneralPage;
})();

// CONCATENATED MODULE: ./src/core/features/settings/pages/general/general.module.ts
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
        component: general_CoreSettingsGeneralPage,
    },
];
let general_module_CoreSettingsGeneralPageModule = /*@__PURE__*/ (() => {
    class CoreSettingsGeneralPageModule {
    }
    CoreSettingsGeneralPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSettingsGeneralPageModule });
    CoreSettingsGeneralPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSettingsGeneralPageModule_Factory(t) { return new (t || CoreSettingsGeneralPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSettingsGeneralPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](general_module_CoreSettingsGeneralPageModule, { declarations: [general_CoreSettingsGeneralPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);