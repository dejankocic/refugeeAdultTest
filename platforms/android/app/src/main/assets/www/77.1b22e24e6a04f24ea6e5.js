(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "5z80":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonNotificationsSettingsPageModule", function() { return /* binding */ settings_module_AddonNotificationsSettingsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/config.ts + 1 modules
var config = __webpack_require__("BBqZ");

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/addons/messageoutput/services/messageoutput-delegate.ts
var messageoutput_delegate = __webpack_require__("c6ZJ");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/notifications/services/notifications.ts
var notifications = __webpack_require__("yjU1");

// EXTERNAL MODULE: ./src/addons/notifications/services/notifications-helper.ts
var notifications_helper = __webpack_require__("ssuw");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/combobox/combobox.ts
var combobox = __webpack_require__("rf3J");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/notifications/pages/settings/settings.ts

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
























function AddonNotificationsSettingsPage_core_context_menu_item_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 8);
        core["Mc" /* ɵɵlistener */]("action", function AddonNotificationsSettingsPage_core_context_menu_item_11_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r5); const handler_r3 = ctx.$implicit; const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.openExtraPreferences(handler_r3); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r3 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("priority", handler_r3.priority)("content", core["Qc" /* ɵɵpipeBind1 */](1, 3, handler_r3.label))("iconAction", handler_r3.icon);
    }
}
function AddonNotificationsSettingsPage_ion_item_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 9);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonNotificationsSettingsPage_ion_item_17_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.notificationSound = $event; })("ngModelChange", function AddonNotificationsSettingsPage_ion_item_17_Template_ion_toggle_ngModelChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r8 = core["Oc" /* ɵɵnextContext */](); return ctx_r8.changeNotificationSound(ctx_r8.notificationSound); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.notifications.playsound"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.notificationSound);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 9);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_item_2_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](2); return ctx_r13.preferences.enableall = $event; })("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_item_2_Template_ion_toggle_ngModelChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r15 = core["Oc" /* ɵɵnextContext */](2); return ctx_r15.enableAll(ctx_r15.preferences.enableall); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.notifications.notifications"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r9.preferences.enableall);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 9);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_item_3_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r16 = core["Oc" /* ɵɵnextContext */](2); return ctx_r16.notificationSound = $event; })("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_item_3_Template_ion_toggle_ngModelChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r18 = core["Oc" /* ɵɵnextContext */](2); return ctx_r18.changeNotificationSound(ctx_r18.notificationSound); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.notifications.playsound"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r10.notificationSound);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_core_combobox_4_ion_select_option_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 16);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const processor_r20 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", processor_r20.name);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", processor_r20.displayname, " ");
    }
}
function AddonNotificationsSettingsPage_ng_container_18_core_combobox_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-combobox", 14);
        core["Mc" /* ɵɵlistener */]("onChange", function AddonNotificationsSettingsPage_ng_container_18_core_combobox_4_Template_core_combobox_onChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r22); const ctx_r21 = core["Oc" /* ɵɵnextContext */](2); return ctx_r21.changeProcessor($event); });
        core["nd" /* ɵɵtemplate */](1, AddonNotificationsSettingsPage_ng_container_18_core_combobox_4_ion_select_option_1_Template, 2, 2, "ion-select-option", 15);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("selection", ctx_r11.currentProcessor.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r11.preferences.processors);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_ion_toggle_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r34 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toggle", 31);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_ion_toggle_2_Template_ion_toggle_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r34); const state_r28 = core["Oc" /* ɵɵnextContext */]().$implicit; const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r32 = core["Oc" /* ɵɵnextContext */](3); return notification_r25.processorsByName[ctx_r32.currentProcessor.name][state_r28].checked = $event; })("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_ion_toggle_2_Template_ion_toggle_ngModelChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r34); const state_r28 = core["Oc" /* ɵɵnextContext */]().$implicit; const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r36 = core["Oc" /* ɵɵnextContext */](3); return ctx_r36.changePreference(notification_r25, state_r28); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r28 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("ngModel", notification_r25.processorsByName[ctx_r29.currentProcessor.name][state_r28].checked)("disabled", notification_r25.processorsByName[ctx_r29.currentProcessor.name][state_r28].updating);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 32);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.locked"), " ");
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_span_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.disabled"));
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 27);
        core["zc" /* ɵɵelement */](1, "ion-spinner", 28);
        core["nd" /* ɵɵtemplate */](2, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_ion_toggle_2_Template, 1, 2, "ion-toggle", 29);
        core["nd" /* ɵɵtemplate */](3, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_span_3_Template, 3, 3, "span", 30);
        core["nd" /* ɵɵtemplate */](4, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_span_4_Template, 3, 3, "span", 7);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r28 = ctx.$implicit;
        const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r26 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("hidden", !ctx_r26.preferences.enableall || !(notification_r25.processorsByName[ctx_r26.currentProcessor.name][state_r28] && notification_r25.processorsByName[ctx_r26.currentProcessor.name][state_r28].updating));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r26.preferences.enableall && !notification_r25.processorsByName[ctx_r26.currentProcessor.name].locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r26.preferences.enableall && notification_r25.processorsByName[ctx_r26.currentProcessor.name].locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r26.preferences.enableall);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_spinner_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner", 2);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_toggle_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r49 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toggle", 37);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_toggle_5_Template_ion_toggle_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r49); const state_r42 = core["Oc" /* ɵɵnextContext */]().$implicit; const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r47 = core["Oc" /* ɵɵnextContext */](3); return notification_r25.processorsByName[ctx_r47.currentProcessor.name][state_r42].checked = $event; })("ngModelChange", function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_toggle_5_Template_ion_toggle_ngModelChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r49); const state_r42 = core["Oc" /* ɵɵnextContext */]().$implicit; const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r51 = core["Oc" /* ɵɵnextContext */](3); return ctx_r51.changePreference(notification_r25, state_r42); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r42 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r44 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("ngModel", notification_r25.processorsByName[ctx_r44.currentProcessor.name][state_r42].checked)("disabled", notification_r25.processorsByName[ctx_r44.currentProcessor.name][state_r42].updating);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_span_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 38);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.locked"), " ");
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_note_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 2);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.disabled"));
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 33);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_spinner_4_Template, 1, 0, "ion-spinner", 34);
        core["nd" /* ɵɵtemplate */](5, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_toggle_5_Template, 1, 2, "ion-toggle", 35);
        core["nd" /* ɵɵtemplate */](6, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_span_6_Template, 3, 3, "span", 36);
        core["nd" /* ɵɵtemplate */](7, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_ion_note_7_Template, 3, 3, "ion-note", 34);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r42 = ctx.$implicit;
        const notification_r25 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r27 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 5, "core.settings." + state_r42));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r27.preferences.enableall && (notification_r25.processorsByName[ctx_r27.currentProcessor.name][state_r42] && notification_r25.processorsByName[ctx_r27.currentProcessor.name][state_r42].updating));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r27.preferences.enableall && !notification_r25.processorsByName[ctx_r27.currentProcessor.name].locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r27.preferences.enableall && notification_r25.processorsByName[ctx_r27.currentProcessor.name].locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r27.preferences.enableall);
    }
}
const _c0 = function () { return ["loggedin", "loggedoff"]; };
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-grid", 21);
        core["Ec" /* ɵɵelementStart */](2, "ion-row", 22);
        core["Ec" /* ɵɵelementStart */](3, "ion-col", 23);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_col_5_Template, 5, 4, "ion-col", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-list-header", 25);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_ion_item_8_Template, 8, 7, "ion-item", 26);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const notification_r25 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](notification_r25.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", core["Zc" /* ɵɵpureFunction0 */](4, _c0));
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", notification_r25.displayname, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", core["Zc" /* ɵɵpureFunction0 */](5, _c0));
    }
}
function AddonNotificationsSettingsPage_ng_container_18_ion_card_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 13);
        core["Ec" /* ɵɵelementStart */](2, "ion-grid", 18);
        core["Ec" /* ɵɵelementStart */](3, "ion-row", 18);
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 18);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-col", 19);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-col", 19);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](12, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_ng_container_12_Template, 9, 6, "ng-container", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const component_r23 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](component_r23.displayname);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](8, 4, "core.settings.loggedin"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](11, 6, "core.settings.loggedoff"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", component_r23.notifications);
    }
}
function AddonNotificationsSettingsPage_ng_container_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-card");
        core["nd" /* ɵɵtemplate */](2, AddonNotificationsSettingsPage_ng_container_18_ion_item_2_Template, 5, 4, "ion-item", 10);
        core["nd" /* ɵɵtemplate */](3, AddonNotificationsSettingsPage_ng_container_18_ion_item_3_Template, 5, 4, "ion-item", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonNotificationsSettingsPage_ng_container_18_core_combobox_4_Template, 2, 2, "core-combobox", 11);
        core["nd" /* ɵɵtemplate */](5, AddonNotificationsSettingsPage_ng_container_18_ion_card_5_Template, 13, 8, "ion-card", 12);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.preferences);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.canChangeSound);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.preferences && ctx_r2.preferences.processors && ctx_r2.preferences.processors.length > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.components);
    }
}
/**
 * Page that displays notifications settings.
 */
let settings_AddonNotificationsSettingsPage = /*@__PURE__*/ (() => {
    class AddonNotificationsSettingsPage {
        constructor() {
            this.preferencesLoaded = false;
            this.notificationSound = false;
            this.processorHandlers = [];
            this.notifPrefsEnabled = notifications["a" /* AddonNotifications */].isNotificationPreferencesEnabled();
            this.canChangeSound = local_notifications["a" /* CoreLocalNotifications */].canDisableSound();
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.canChangeSound) {
                    this.notificationSound = yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, true);
                }
                if (this.notifPrefsEnabled) {
                    this.fetchPreferences();
                }
                else {
                    this.preferencesLoaded = true;
                }
            });
        }
        /**
         * Fetches preferences data.
         *
         * @return Resolved when done.
         */
        fetchPreferences() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const preferences = yield notifications["a" /* AddonNotifications */].getNotificationPreferences();
                    if (!this.currentProcessor) {
                        // Initialize current processor. Load "Mobile" (airnotifier) if available.
                        this.currentProcessor = notifications_helper["a" /* AddonNotificationsHelper */].getProcessor(preferences.processors, 'airnotifier');
                    }
                    if (!this.currentProcessor) {
                        // Shouldn't happen.
                        throw new errors_error["a" /* CoreError */]('No processor found');
                    }
                    preferences.enableall = !preferences.disableall;
                    this.preferences = notifications_helper["a" /* AddonNotificationsHelper */].formatPreferences(preferences);
                    this.loadProcessor(this.currentProcessor);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    this.preferencesLoaded = true;
                }
            });
        }
        /**
         * Load a processor.
         *
         * @param processor Processor object.
         */
        loadProcessor(processor) {
            var _a;
            if (!processor) {
                return;
            }
            this.currentProcessor = processor;
            this.processorHandlers = [];
            this.components = notifications_helper["a" /* AddonNotificationsHelper */].getProcessorComponents(processor.name, ((_a = this.preferences) === null || _a === void 0 ? void 0 : _a.components) || []);
            if (!processor.hassettings || !processor.supported) {
                return;
            }
            const handlerData = messageoutput_delegate["a" /* AddonMessageOutputDelegate */].getDisplayData(processor);
            if (handlerData) {
                this.processorHandlers.push(handlerData);
            }
        }
        /**
         * Update preferences after a certain time. The purpose is to store the updated data, it won't be reflected in the view.
         */
        updatePreferencesAfterDelay() {
            // Cancel pending updates.
            clearTimeout(this.updateTimeout);
            this.updateTimeout = window.setTimeout(() => {
                this.updateTimeout = undefined;
                this.updatePreferences();
            }, 5000);
        }
        /**
         * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
         *
         * @return Promise resolved when done.
         */
        updatePreferences() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(notifications["a" /* AddonNotifications */].invalidateNotificationPreferences());
                yield notifications["a" /* AddonNotifications */].getNotificationPreferences();
            });
        }
        /**
         * The selected processor was changed.
         *
         * @param name Name of the selected processor.
         */
        changeProcessor(name) {
            const processor = this.preferences.processors.find((processor) => processor.name == name);
            if (processor) {
                this.loadProcessor(processor);
            }
        }
        /**
         * Refresh the list of preferences.
         *
         * @param refresher Refresher.
         */
        refreshPreferences(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(notifications["a" /* AddonNotifications */].invalidateNotificationPreferences());
                    yield this.fetchPreferences();
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Open extra preferences.
         *
         * @param handlerData
         */
        openExtraPreferences(handlerData) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(handlerData.page, { params: handlerData.pageParams });
        }
        /**
         * Change the value of a certain preference.
         *
         * @param notification Notification object.
         * @param state State name, ['loggedin', 'loggedoff'].
         * @return Promise resolved when done.
         */
        changePreference(notification, state) {
            var _a, _b;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const processor = (_a = notification.processorsByName) === null || _a === void 0 ? void 0 : _a[((_b = this.currentProcessor) === null || _b === void 0 ? void 0 : _b.name) || ''];
                if (!processor) {
                    return;
                }
                const processorState = processor[state];
                const preferenceName = notification.preferencekey + '_' + processorState.name;
                let value;
                notification.processors.forEach((processor) => {
                    if (processor[state].checked) {
                        if (!value) {
                            value = processor.name;
                        }
                        else {
                            value += ',' + processor.name;
                        }
                    }
                });
                if (!value) {
                    value = 'none';
                }
                processorState.updating = true;
                try {
                    yield user["a" /* CoreUser */].updateUserPreference(preferenceName, value);
                    // Update the preferences since they were modified.
                    this.updatePreferencesAfterDelay();
                }
                catch (error) {
                    // Show error and revert change.
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                    processor[state].checked = !processor[state].checked;
                }
                finally {
                    processorState.updating = false;
                }
            });
        }
        /**
         * Enable all notifications changed.
         *
         * @param enable Whether to enable or disable.
         * @return Promise resolved when done.
         */
        enableAll(enable) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    user["a" /* CoreUser */].updateUserPreferences([], !enable);
                    // Update the preferences since they were modified.
                    this.updatePreferencesAfterDelay();
                }
                catch (error) {
                    // Show error and revert change.
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                    this.preferences.enableall = !this.preferences.enableall;
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Change the notification sound setting.
         *
         * @param enabled True to enable the notification sound, false to disable it.
         */
        changeNotificationSound(enabled) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_NOTIFICATION_SOUND, enabled ? 1 : 0));
                const siteId = sites["b" /* CoreSites */].getCurrentSiteId();
                events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].NOTIFICATION_SOUND_CHANGED, { enabled }, siteId);
                local_notifications["a" /* CoreLocalNotifications */].rescheduleAll();
            });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            // If there is a pending action to update preferences, execute it right now.
            if (this.updateTimeout) {
                clearTimeout(this.updateTimeout);
                this.updatePreferences();
            }
        }
    }
    AddonNotificationsSettingsPage.ɵfac = function AddonNotificationsSettingsPage_Factory(t) { return new (t || AddonNotificationsSettingsPage)(); };
    AddonNotificationsSettingsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonNotificationsSettingsPage, selectors: [["page-addon-notifications-settings"]], decls: 19, vars: 14, consts: [["slot", "start"], [3, "text"], ["slot", "end"], [3, "priority", "content", "iconAction", "action", 4, "ngFor", "ngForOf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], [3, "priority", "content", "iconAction", "action"], [3, "ngModel", "ngModelChange"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "selection", "onChange", 4, "ngIf"], ["list", "", "class", "ion-margin-top", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], [3, "selection", "onChange"], ["class", "ion-text-wrap", 3, "value", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap", 3, "value"], ["list", "", 1, "ion-margin-top"], [1, "ion-no-padding"], ["size", "2", 1, "ion-text-center", "ion-no-padding", "ion-hide-md-down"], [4, "ngFor", "ngForOf"], [1, "ion-text-wrap", "ion-hide-md-down", "addon-notifications-table-content"], [1, "ion-align-items-center"], [1, "ion-margin-horizontal"], ["size", "2", "class", "ion-text-center", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap", "ion-no-margin", "ion-hide-md-up"], ["class", "ion-text-wrap ion-hide-md-up", "lines", "none", 4, "ngFor", "ngForOf"], ["size", "2", 1, "ion-text-center"], [3, "hidden"], [3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["class", "text-gray", 4, "ngIf"], [3, "ngModel", "disabled", "ngModelChange"], [1, "text-gray"], ["lines", "none", 1, "ion-text-wrap", "ion-hide-md-up"], ["slot", "end", 4, "ngIf"], ["slot", "end", 3, "ngModel", "disabled", "ngModelChange", 4, "ngIf"], ["slot", "end", "class", "text-gray", 4, "ngIf"], ["slot", "end", 3, "ngModel", "disabled", "ngModelChange"], ["slot", "end", 1, "text-gray"]], template: function AddonNotificationsSettingsPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-navbar-buttons", 2);
                core["Ec" /* ɵɵelementStart */](10, "core-context-menu");
                core["nd" /* ɵɵtemplate */](11, AddonNotificationsSettingsPage_core_context_menu_item_11_Template, 2, 5, "core-context-menu-item", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content");
                core["Ec" /* ɵɵelementStart */](13, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonNotificationsSettingsPage_Template_ion_refresher_ionRefresh_13_listener($event) { return ctx.refreshPreferences($event.target); });
                core["zc" /* ɵɵelement */](14, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](17, AddonNotificationsSettingsPage_ion_item_17_Template, 5, 4, "ion-item", 7);
                core["nd" /* ɵɵtemplate */](18, AddonNotificationsSettingsPage_ng_container_18_Template, 6, 4, "ng-container", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 10, "addon.notifications.notifications"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.processorHandlers);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.preferencesLoaded || !ctx.notifPrefsEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](15, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.preferencesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canChangeSound && !ctx.notifPrefsEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.notifPrefsEnabled);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], context_menu["a" /* CoreContextMenuComponent */], common["s" /* NgForOf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], ionic_angular["m" /* IonCard */], combobox["a" /* CoreComboboxComponent */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["I" /* IonItemDivider */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["P" /* IonListHeader */], ionic_angular["pb" /* IonSpinner */], ionic_angular["V" /* IonNote */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-notifications-table-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{min-height:35px}"] });
    return AddonNotificationsSettingsPage;
})();

// CONCATENATED MODULE: ./src/addons/notifications/pages/settings/settings.module.ts
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
        component: settings_AddonNotificationsSettingsPage,
    },
];
let settings_module_AddonNotificationsSettingsPageModule = /*@__PURE__*/ (() => {
    class AddonNotificationsSettingsPageModule {
    }
    AddonNotificationsSettingsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonNotificationsSettingsPageModule });
    AddonNotificationsSettingsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonNotificationsSettingsPageModule_Factory(t) { return new (t || AddonNotificationsSettingsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonNotificationsSettingsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](settings_module_AddonNotificationsSettingsPageModule, { declarations: [settings_AddonNotificationsSettingsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);