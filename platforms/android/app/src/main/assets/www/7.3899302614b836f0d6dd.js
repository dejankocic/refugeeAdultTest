(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "7MVA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesSettingsPageModule", function() { return /* binding */ settings_module_AddonMessagesSettingsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var messages = __webpack_require__("KMk0");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/config.ts + 1 modules
var config = __webpack_require__("BBqZ");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/messages/pages/settings/settings.page.ts

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
















function AddonMessagesSettingsPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_ion_item_14_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.contactablePrivacy = $event; })("ngModelChange", function AddonMessagesSettingsPage_ion_item_14_Template_ion_toggle_ngModelChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.saveContactablePrivacy(ctx_r5.contactablePrivacy); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.messages.blocknoncontacts"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.contactablePrivacy);
    }
}
function AddonMessagesSettingsPage_ion_list_15_ion_item_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "ion-radio", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.messages.contactableprivacy_site"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", ctx_r6.siteValue);
    }
}
function AddonMessagesSettingsPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 7);
        core["Ec" /* ɵɵelementStart */](1, "ion-radio-group", 11);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_ion_list_15_Template_ion_radio_group_ngModelChange_1_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.contactablePrivacy = $event; })("ionChange", function AddonMessagesSettingsPage_ion_list_15_Template_ion_radio_group_ionChange_1_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.saveContactablePrivacy(ctx_r9.contactablePrivacy); });
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-item");
        core["Ec" /* ɵɵelementStart */](8, "ion-label");
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](11, "ion-radio", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-item");
        core["Ec" /* ɵɵelementStart */](13, "ion-label");
        core["pd" /* ɵɵtext */](14);
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](16, "ion-radio", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](17, AddonMessagesSettingsPage_ion_list_15_ion_item_17_Template, 5, 4, "ion-item", 5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.contactablePrivacy);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 7, "addon.messages.contactableprivacy"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](10, 9, "addon.messages.contactableprivacy_onlycontacts"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", ctx_r1.onlyContactsValue);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](15, 11, "addon.messages.contactableprivacy_coursemember"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("value", ctx_r1.courseMemberValue);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.allowSiteMessaging);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ion_row_3_ion_col_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 18);
        core["Ec" /* ɵɵelementStart */](1, "h2");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.settings.loggedoff"));
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ion_row_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-row", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-col", 17);
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 18);
        core["Ec" /* ɵɵelementStart */](5, "h2");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ion_row_3_ion_col_8_Template, 4, 3, "ion-col", 19);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](notification_r13.displayname);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 3, "core.settings.loggedin"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r14.groupMessagingEnabled);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.notifications.notificationpreferences"));
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_toggle_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r28); const processor_r19 = core["Oc" /* ɵɵnextContext */](3).$implicit; return processor_r19.checked = $event; })("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r28); const processor_r19 = core["Oc" /* ɵɵnextContext */](3).$implicit; const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r29 = core["Oc" /* ɵɵnextContext */](3); return ctx_r29.changePreference(notification_r13, "", processor_r19); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const processor_r19 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["Vc" /* ɵɵproperty */]("ngModel", processor_r19.checked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_note_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const processor_r19 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", processor_r19.lockedmessage, " ");
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-button-with-spinner", 22);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_toggle_1_Template, 1, 1, "ion-toggle", 23);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_ion_note_2_Template, 2, 1, "ion-note", 5);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("loading", !!notification_r13.updating);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !processor_r19.locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", processor_r19.locked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_ion_note_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 24);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.disabled"), " ");
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_core_button_with_spinner_4_Template, 3, 3, "core-button-with-spinner", 20);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_ion_note_5_Template, 3, 3, "ion-note", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const processor_r19 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](processor_r19.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r20.preferences.disableall);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r20.preferences.disableall);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_ion_toggle_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r46 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r46); const state_r39 = core["Oc" /* ɵɵnextContext */](2).$implicit; const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit; return processor_r19[state_r39].checked = $event; })("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r46); const state_r39 = core["Oc" /* ɵɵnextContext */](2).$implicit; const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit; const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r48 = core["Oc" /* ɵɵnextContext */](3); return ctx_r48.changePreference(notification_r13, state_r39, processor_r19); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r39 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Vc" /* ɵɵproperty */]("ngModel", processor_r19[state_r39].checked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 34);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.locked"), " ");
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-button-with-spinner", 32);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_ion_toggle_1_Template, 1, 1, "ion-toggle", 23);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_div_2_Template, 3, 3, "div", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r39 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("loading", notification_r13.updating && notification_r13.updating[state_r39]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !processor_r19.locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", processor_r19.locked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_span_2_Template(rf, ctx) {
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
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 30);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_core_button_with_spinner_1_Template, 3, 3, "core-button-with-spinner", 31);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_span_2_Template, 3, 3, "span", 5);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r37 = core["Oc" /* ɵɵnextContext */](6);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r37.preferences.disableall);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r37.preferences.disableall);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_toggle_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r64 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r64); const state_r57 = core["Oc" /* ɵɵnextContext */](2).$implicit; const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit; return processor_r19[state_r57].checked = $event; })("ngModelChange", function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_toggle_1_Template_ion_toggle_ngModelChange_0_listener() { core["gd" /* ɵɵrestoreView */](_r64); const state_r57 = core["Oc" /* ɵɵnextContext */](2).$implicit; const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit; const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r66 = core["Oc" /* ɵɵnextContext */](3); return ctx_r66.changePreference(notification_r13, state_r57, processor_r19); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r57 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Vc" /* ɵɵproperty */]("ngModel", processor_r19[state_r57].checked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_note_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.locked"), " ");
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-button-with-spinner", 22);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_toggle_1_Template, 1, 1, "ion-toggle", 23);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_ion_note_2_Template, 3, 3, "ion-note", 5);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r57 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const processor_r19 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const notification_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("loading", notification_r13.updating && notification_r13.updating[state_r57]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !processor_r19.locked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", processor_r19.locked);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_ion_note_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 24);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.settings.disabled"), " ");
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 28);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_core_button_with_spinner_4_Template, 3, 3, "core-button-with-spinner", 20);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_ion_note_5_Template, 3, 3, "ion-note", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const state_r57 = ctx.$implicit;
        const ctx_r38 = core["Oc" /* ɵɵnextContext */](6);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "core.settings." + state_r57));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r38.preferences.disableall);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r38.preferences.disableall);
    }
}
const _c0 = function () { return ["loggedin", "loggedoff"]; };
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-row", 25);
        core["Ec" /* ɵɵelementStart */](2, "ion-col", 26);
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_col_4_Template, 3, 2, "ion-col", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-list-header", 28);
        core["Ec" /* ɵɵelementStart */](6, "ion-label");
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_ion_item_8_Template, 6, 5, "ion-item", 29);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const processor_r19 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](processor_r19.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", core["Zc" /* ɵɵpureFunction0 */](4, _c0));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](processor_r19.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", core["Zc" /* ɵɵpureFunction0 */](5, _c0));
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_1_Template, 6, 3, "ng-container", 5);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_ng_container_2_Template, 9, 6, "ng-container", 5);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r16 = core["Oc" /* ɵɵnextContext */](4);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r16.groupMessagingEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r16.groupMessagingEnabled);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 15);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["nd" /* ɵɵtemplate */](3, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ion_row_3_Template, 9, 5, "ion-row", 16);
        core["nd" /* ɵɵtemplate */](4, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_h2_4_Template, 3, 3, "h2", 5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_ng_container_5_Template, 3, 2, "ng-container", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const notification_r13 = ctx.$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r12.groupMessagingEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r12.groupMessagingEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", notification_r13.processors);
    }
}
function AddonMessagesSettingsPage_ng_container_16_div_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_ion_card_1_Template, 6, 3, "ion-card", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const component_r11 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", component_r11.notifications);
    }
}
function AddonMessagesSettingsPage_ng_container_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSettingsPage_ng_container_16_div_1_Template, 2, 1, "div", 13);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.preferences.components);
    }
}
/**
 * Page that displays the messages settings page.
 */
let settings_page_AddonMessagesSettingsPage = /*@__PURE__*/ (() => {
    class AddonMessagesSettingsPage {
        constructor() {
            this.preferencesLoaded = false;
            this.advancedContactable = false; // Whether the site supports "advanced" contactable privacy.
            this.allowSiteMessaging = false;
            this.onlyContactsValue = messages["b" /* AddonMessagesProvider */].MESSAGE_PRIVACY_ONLYCONTACTS;
            this.courseMemberValue = messages["b" /* AddonMessagesProvider */].MESSAGE_PRIVACY_COURSEMEMBER;
            this.siteValue = messages["b" /* AddonMessagesProvider */].MESSAGE_PRIVACY_SITE;
            this.groupMessagingEnabled = false;
            this.sendOnEnter = false;
            const currentSite = sites["b" /* CoreSites */].getCurrentSite();
            this.advancedContactable = !!(currentSite === null || currentSite === void 0 ? void 0 : currentSite.isVersionGreaterEqualThan('3.6'));
            this.allowSiteMessaging = !!(currentSite === null || currentSite === void 0 ? void 0 : currentSite.canUseAdvancedFeature('messagingallusers'));
            this.groupMessagingEnabled = messages["a" /* AddonMessages */].isGroupMessagingEnabled();
            this.asyncInit();
        }
        asyncInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.sendOnEnter = !!(yield config["a" /* CoreConfig */].get(constants["a" /* CoreConstants */].SETTINGS_SEND_ON_ENTER, !app["a" /* CoreApp */].isMobile()));
            });
        }
        /**
         * Runs when the page has loaded. This event only happens once per page being created.
         * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
         * Setup code for the page.
         */
        ngOnInit() {
            this.fetchPreferences();
        }
        /**
         * Fetches preference data.
         *
         * @return Promise resolved when done.
         */
        fetchPreferences() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const preferences = yield messages["a" /* AddonMessages */].getMessagePreferences();
                    if (this.groupMessagingEnabled) {
                        // Simplify the preferences.
                        for (const component of preferences.components) {
                            // Only display get the notification preferences.
                            component.notifications = component.notifications.filter((notification) => notification.preferencekey == messages["b" /* AddonMessagesProvider */].NOTIFICATION_PREFERENCES_KEY);
                            component.notifications.forEach((notification) => {
                                notification.processors.forEach((processor) => {
                                    processor.checked = processor.loggedin.checked || processor.loggedoff.checked;
                                });
                            });
                        }
                    }
                    this.preferences = preferences;
                    this.contactablePrivacy = preferences.blocknoncontacts;
                    this.previousContactableValue = this.contactablePrivacy;
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
         * Update preferences. The purpose is to store the updated data, it won't be reflected in the view.
         */
        updatePreferences() {
            messages["a" /* AddonMessages */].invalidateMessagePreferences().finally(() => {
                this.fetchPreferences();
            });
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
         * Save the contactable privacy setting..
         *
         * @param value The value to set.
         */
        saveContactablePrivacy(value) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.contactablePrivacy == this.previousContactableValue) {
                    // Value hasn't changed from previous, it probably means that we just fetched the value from the server.
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                if (!this.advancedContactable) {
                    // Convert from boolean to number.
                    value = value ? 1 : 0;
                }
                try {
                    yield user["a" /* CoreUser */].updateUserPreference('message_blocknoncontacts', String(value));
                    // Update the preferences since they were modified.
                    this.updatePreferencesAfterDelay();
                    this.previousContactableValue = this.contactablePrivacy;
                }
                catch (message) {
                    // Show error and revert change.
                    dom["a" /* CoreDomUtils */].showErrorModal(message);
                    this.contactablePrivacy = this.previousContactableValue;
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Change the value of a certain preference.
         *
         * @param notification Notification object.
         * @param state State name, ['loggedin', 'loggedoff'].
         * @param processor Notification processor.
         */
        changePreference(notification, state, processor) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const valueArray = [];
                let value = 'none';
                if (this.groupMessagingEnabled) {
                    // Update both states at the same time.
                    const promises = [];
                    notification.processors.forEach((processor) => {
                        if (processor.checked) {
                            valueArray.push(processor.name);
                        }
                    });
                    if (value.length > 0) {
                        value = valueArray.join(',');
                    }
                    notification.updating = true;
                    promises.push(user["a" /* CoreUser */].updateUserPreference(notification.preferencekey + '_loggedin', value));
                    promises.push(user["a" /* CoreUser */].updateUserPreference(notification.preferencekey + '_loggedoff', value));
                    try {
                        yield Promise.all(promises);
                        // Update the preferences since they were modified.
                        this.updatePreferencesAfterDelay();
                    }
                    catch (error) {
                        // Show error and revert change.
                        dom["a" /* CoreDomUtils */].showErrorModal(error);
                        processor.checked = !processor.checked;
                    }
                    finally {
                        notification.updating = false;
                    }
                    return;
                }
                // Update only the specified state.
                const processorState = processor[state];
                const preferenceName = notification.preferencekey + '_' + processorState.name;
                notification.processors.forEach((processor) => {
                    if (processor[state].checked) {
                        valueArray.push(processor.name);
                    }
                });
                if (value.length > 0) {
                    value = valueArray.join(',');
                }
                if (!notification.updating) {
                    notification.updating = {};
                }
                notification.updating[state] = true;
                try {
                    yield user["a" /* CoreUser */].updateUserPreference(preferenceName, value);
                    // Update the preferences since they were modified.
                    this.updatePreferencesAfterDelay();
                }
                catch (error) {
                    // Show error and revert change.
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                    processorState.checked = !processorState.checked;
                }
                finally {
                    notification.updating[state] = false;
                }
            });
        }
        /**
         * Refresh the list of preferences.
         *
         * @param refresher Refresher.
         */
        refreshPreferences(refresher) {
            messages["a" /* AddonMessages */].invalidateMessagePreferences().finally(() => {
                this.fetchPreferences().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        sendOnEnterChanged() {
            // Save the value.
            config["a" /* CoreConfig */].set(constants["a" /* CoreConstants */].SETTINGS_SEND_ON_ENTER, this.sendOnEnter ? 1 : 0);
            // Notify the app.
            events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].SEND_ON_ENTER_CHANGED, { sendOnEnter: !!this.sendOnEnter }, sites["b" /* CoreSites */].getCurrentSiteId());
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
    AddonMessagesSettingsPage.ɵfac = function AddonMessagesSettingsPage_Factory(t) { return new (t || AddonMessagesSettingsPage)(); };
    AddonMessagesSettingsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesSettingsPage, selectors: [["page-addon-messages-settings"]], decls: 30, vars: 21, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "ion-text-wrap"], [1, "item-heading"], ["slot", "end", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange", "ionChange"], ["slot", "start", 3, "value"], [4, "ngFor", "ngForOf"], ["list", "", 4, "ngFor", "ngForOf"], ["list", ""], ["class", "ion-no-padding", 4, "ngIf"], [1, "ion-no-padding"], ["size", "2", 1, "ion-text-center", "ion-no-padding", "ion-hide-md-down"], ["size", "2", "class", "ion-text-center ion-no-padding\n                                    ion-hide-md-down", 4, "ngIf"], ["slot", "end", 3, "loading", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["slot", "end", 3, "loading"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["slot", "end"], [1, "ion-text-wrap", "ion-hide-md-down", "ion-align-items-center"], [1, "ion-margin-horizontal"], ["size", "2", "class", "ion-text-center", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap", "ion-hide-md-up"], ["class", "ion-text-wrap ion-hide-md-up", 4, "ngFor", "ngForOf"], ["size", "2", 1, "ion-text-center"], [3, "loading", 4, "ngIf"], [3, "loading"], ["class", "ion-padding text-gray", 4, "ngIf"], [1, "ion-padding", "text-gray"]], template: function AddonMessagesSettingsPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesSettingsPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshPreferences($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-card");
                core["nd" /* ɵɵtemplate */](14, AddonMessagesSettingsPage_ion_item_14_Template, 5, 4, "ion-item", 5);
                core["nd" /* ɵɵtemplate */](15, AddonMessagesSettingsPage_ion_list_15_Template, 18, 13, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](16, AddonMessagesSettingsPage_ng_container_16_Template, 2, 1, "ng-container", 5);
                core["Ec" /* ɵɵelementStart */](17, "ion-card");
                core["Ec" /* ɵɵelementStart */](18, "ion-list", 7);
                core["Ec" /* ɵɵelementStart */](19, "ion-item-divider");
                core["Ec" /* ɵɵelementStart */](20, "ion-label");
                core["Ec" /* ɵɵelementStart */](21, "h2");
                core["pd" /* ɵɵtext */](22);
                core["Pc" /* ɵɵpipe */](23, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](24, "ion-item", 7);
                core["Ec" /* ɵɵelementStart */](25, "ion-label");
                core["Ec" /* ɵɵelementStart */](26, "p", 8);
                core["pd" /* ɵɵtext */](27);
                core["Pc" /* ɵɵpipe */](28, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](29, "ion-toggle", 9);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonMessagesSettingsPage_Template_ion_toggle_ngModelChange_29_listener($event) { return ctx.sendOnEnter = $event; })("ngModelChange", function AddonMessagesSettingsPage_Template_ion_toggle_ngModelChange_29_listener() { return ctx.sendOnEnterChanged(); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 13, "addon.messages.messages"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.preferencesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 15, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.preferencesLoaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.advancedContactable);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.advancedContactable);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.preferences);
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](23, 17, "core.settings.general"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](28, 19, "addon.messages.useentertosend"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.sendOnEnter);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], ionic_angular["H" /* IonItem */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], ionic_angular["Y" /* IonRadioGroup */], ionic_angular["Nb" /* SelectValueAccessor */], ionic_angular["X" /* IonRadio */], ionic_angular["Lb" /* RadioValueAccessor */], common["s" /* NgForOf */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */], ionic_angular["V" /* IonNote */], ionic_angular["P" /* IonListHeader */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonMessagesSettingsPage;
})();

// CONCATENATED MODULE: ./src/addons/messages/pages/settings/settings.module.ts
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
        component: settings_page_AddonMessagesSettingsPage,
    },
];
let settings_module_AddonMessagesSettingsPageModule = /*@__PURE__*/ (() => {
    class AddonMessagesSettingsPageModule {
    }
    AddonMessagesSettingsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesSettingsPageModule });
    AddonMessagesSettingsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesSettingsPageModule_Factory(t) { return new (t || AddonMessagesSettingsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesSettingsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](settings_module_AddonMessagesSettingsPageModule, { declarations: [settings_page_AddonMessagesSettingsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);