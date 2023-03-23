(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "RDa7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreUserProfilePageModule", function() { return /* binding */ profile_module_CoreUserProfilePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/mimetype.ts
var mimetype = __webpack_require__("vbeB");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/features/user/services/user-helper.ts
var user_helper = __webpack_require__("F9j1");

// EXTERNAL MODULE: ./src/core/features/user/services/user-delegate.ts
var user_delegate = __webpack_require__("+jPs");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader-helper.ts
var fileuploader_helper = __webpack_require__("2tv+");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/user/pages/profile/profile.page.ts

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





















function CoreUserProfilePage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.title);
    }
}
function CoreUserProfilePage_ion_list_11_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 17);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserProfilePage_ion_list_11_ion_button_3_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r13); const ctx_r12 = core["Oc" /* ɵɵnextContext */](2); return ctx_r12.changeProfilePicture(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 18);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.user.newpicture"));
    }
}
function CoreUserProfilePage_ion_list_11_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r6.user.address);
    }
}
function CoreUserProfilePage_ion_list_11_p_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 19);
        core["Ec" /* ɵɵelementStart */](1, "strong");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 3, "core.user.roles"));
        core["lc" /* ɵɵadvance */](2);
        core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.labelsep"), " ", ctx_r7.rolesFormatted, " ");
    }
}
function CoreUserProfilePage_ion_list_11_div_9_ion_item_1_ion_button_2_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 24);
    }
    if (rf & 2) {
        const handler_r17 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", handler_r17.icon);
    }
}
const _c0 = function (a1) { return ["core-user-profile-handler", a1]; };
function CoreUserProfilePage_ion_list_11_div_9_ion_item_1_ion_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 22);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserProfilePage_ion_list_11_div_9_ion_item_1_ion_button_2_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r21); const handler_r17 = ctx.$implicit; const ctx_r20 = core["Oc" /* ɵɵnextContext */](4); return ctx_r20.handlerClicked($event, handler_r17); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_div_9_ion_item_1_ion_button_2_ion_icon_2_Template, 1, 1, "ion-icon", 23);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r17 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](10, _c0, handler_r17.class || ""))("hidden", handler_r17.hidden)("disabled", handler_r17.spinner);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 6, handler_r17.title));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r17.icon);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 8, handler_r17.title), " ");
    }
}
function CoreUserProfilePage_ion_list_11_div_9_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_div_9_ion_item_1_ion_button_2_Template, 5, 12, "ion-button", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r14 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r14.communicationHandlers);
    }
}
function CoreUserProfilePage_ion_list_11_div_9_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 25);
        core["zc" /* ɵɵelement */](1, "ion-spinner");
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loading"));
    }
}
function CoreUserProfilePage_ion_list_11_div_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 20);
        core["nd" /* ɵɵtemplate */](1, CoreUserProfilePage_ion_list_11_div_9_ion_item_1_Template, 3, 1, "ion-item", 2);
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_div_9_div_2_Template, 3, 3, "div", 15);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.communicationHandlers && ctx_r8.communicationHandlers.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.isLoadingHandlers);
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "ion-spinner");
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.loading"));
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_18_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 24);
    }
    if (rf & 2) {
        const handler_r22 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", handler_r22.icon);
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 26);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserProfilePage_ion_list_11_ion_item_18_Template_ion_item_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r26); const handler_r22 = ctx.$implicit; const ctx_r25 = core["Oc" /* ɵɵnextContext */](2); return ctx_r25.handlerClicked($event, handler_r22); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_ion_item_18_ion_icon_2_Template, 1, 1, "ion-icon", 23);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 14);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r22 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](9, _c0, handler_r22.class || ""))("hidden", handler_r22.hidden);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 5, handler_r22.title));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r22.icon);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 7, handler_r22.title));
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 24);
    }
    if (rf & 2) {
        const handler_r28 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", handler_r28.icon);
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_ion_spinner_5_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner", 30);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.loading"));
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 28);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r33); const handler_r28 = ctx.$implicit; const ctx_r32 = core["Oc" /* ɵɵnextContext */](3); return ctx_r32.handlerClicked($event, handler_r28); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_ion_icon_2_Template, 1, 1, "ion-icon", 23);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["nd" /* ɵɵtemplate */](5, CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_ion_spinner_5_Template, 2, 3, "ion-spinner", 29);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r28 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](11, _c0, handler_r28.class || ""))("hidden", handler_r28.hidden)("disabled", handler_r28.spinner);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 7, handler_r28.title));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r28.icon);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 9, handler_r28.title), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r28.spinner);
    }
}
function CoreUserProfilePage_ion_list_11_ion_item_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, CoreUserProfilePage_ion_list_11_ion_item_19_ion_button_2_Template, 6, 13, "ion-button", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r11.actionHandlers);
    }
}
function CoreUserProfilePage_ion_list_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 7);
        core["Ec" /* ɵɵelementStart */](2, "core-user-avatar", 8);
        core["nd" /* ɵɵtemplate */](3, CoreUserProfilePage_ion_list_11_ion_button_3_Template, 3, 3, "ion-button", 9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "h2");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, CoreUserProfilePage_ion_list_11_p_7_Template, 2, 1, "p", 2);
        core["nd" /* ɵɵtemplate */](8, CoreUserProfilePage_ion_list_11_p_8_Template, 6, 7, "p", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, CoreUserProfilePage_ion_list_11_div_9_Template, 3, 2, "div", 11);
        core["Ec" /* ɵɵelementStart */](10, "ion-item", 12);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserProfilePage_ion_list_11_Template_ion_item_click_10_listener() { core["gd" /* ɵɵrestoreView */](_r35); const ctx_r34 = core["Oc" /* ɵɵnextContext */](); return ctx_r34.openUserDetails(); });
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["zc" /* ɵɵelement */](12, "ion-icon", 13);
        core["Ec" /* ɵɵelementStart */](13, "ion-label");
        core["Ec" /* ɵɵelementStart */](14, "p", 14);
        core["pd" /* ɵɵtext */](15);
        core["Pc" /* ɵɵpipe */](16, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](17, CoreUserProfilePage_ion_list_11_ion_item_17_Template, 4, 3, "ion-item", 15);
        core["nd" /* ɵɵtemplate */](18, CoreUserProfilePage_ion_list_11_ion_item_18_Template, 7, 11, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](19, CoreUserProfilePage_ion_list_11_ion_item_19_Template, 3, 1, "ion-item", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.user)("userId", ctx_r1.user.id)("linkProfile", false)("checkOnline", true);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.canChangeProfilePicture);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.user.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.user.address);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.rolesFormatted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.communicationHandlers && ctx_r1.communicationHandlers.length || ctx_r1.isLoadingHandlers);
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](11, 14, "core.user.details"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 16, "core.user.details"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.isLoadingHandlers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.newPageHandlers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.actionHandlers && ctx_r1.actionHandlers.length);
    }
}
function CoreUserProfilePage_core_empty_box_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 31);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.user.detailsnotavailable"));
    }
}
function CoreUserProfilePage_core_empty_box_13_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 31);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.userdeleted"));
    }
}
function CoreUserProfilePage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 31);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.notenrolledprofile"));
    }
}
let profile_page_CoreUserProfilePage = /*@__PURE__*/ (() => {
    class CoreUserProfilePage {
        constructor() {
            this.userLoaded = false;
            this.isLoadingHandlers = false;
            this.isDeleted = false;
            this.isEnrolled = true;
            this.canChangeProfilePicture = false;
            this.actionHandlers = [];
            this.newPageHandlers = [];
            this.communicationHandlers = [];
            this.obsProfileRefreshed = events["b" /* CoreEvents */].on(services_user["b" /* CoreUserProvider */].PROFILE_REFRESHED, (data) => {
                if (!this.user || !data.user) {
                    return;
                }
                this.user.email = data.user.email;
                this.user.address = user_helper["a" /* CoreUserHelper */].formatAddress('', data.user.city, data.user.country);
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * On init.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.site = sites["b" /* CoreSites */].getCurrentSite();
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                const userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
                if (!this.site) {
                    return;
                }
                if (userId === undefined) {
                    dom["a" /* CoreDomUtils */].showErrorModal('User ID not supplied');
                    services_navigator["a" /* CoreNavigator */].back();
                    return;
                }
                this.userId = userId;
                // Allow to change the profile image only in the app profile page.
                this.canChangeProfilePicture =
                    (!this.courseId || this.courseId == this.site.getSiteHomeId()) &&
                        this.userId == this.site.getUserId() &&
                        this.site.canUploadFiles() &&
                        services_user["a" /* CoreUser */].canUpdatePictureInSite(this.site) &&
                        !services_user["a" /* CoreUser */].isUpdatePictureDisabledInSite(this.site);
                try {
                    yield this.fetchUser();
                    try {
                        yield services_user["a" /* CoreUser */].logView(this.userId, this.courseId, this.user.fullname);
                    }
                    catch (error) {
                        this.isDeleted = (error === null || error === void 0 ? void 0 : error.errorcode) === 'userdeleted';
                        this.isEnrolled = (error === null || error === void 0 ? void 0 : error.errorcode) !== 'notenrolledprofile';
                    }
                }
                finally {
                    this.userLoaded = true;
                }
            });
        }
        /**
         * Fetches the user and updates the view.
         */
        fetchUser() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const user = yield services_user["a" /* CoreUser */].getProfile(this.userId, this.courseId);
                    user.address = user_helper["a" /* CoreUserHelper */].formatAddress('', user.city, user.country);
                    this.rolesFormatted = 'roles' in user ? user_helper["a" /* CoreUserHelper */].formatRoleList(user.roles) : '';
                    this.user = user;
                    this.title = user.fullname;
                    // If there's already a subscription, unsubscribe because we'll get a new one.
                    (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                    this.subscription = user_delegate["a" /* CoreUserDelegate */].getProfileHandlersFor(user, this.courseId).subscribe((handlers) => {
                        this.actionHandlers = [];
                        this.newPageHandlers = [];
                        this.communicationHandlers = [];
                        handlers.forEach((handler) => {
                            switch (handler.type) {
                                case user_delegate["b" /* CoreUserDelegateService */].TYPE_COMMUNICATION:
                                    this.communicationHandlers.push(handler.data);
                                    break;
                                case user_delegate["b" /* CoreUserDelegateService */].TYPE_ACTION:
                                    this.actionHandlers.push(handler.data);
                                    break;
                                case user_delegate["b" /* CoreUserDelegateService */].TYPE_NEW_PAGE:
                                default:
                                    this.newPageHandlers.push(handler.data);
                                    break;
                            }
                        });
                        this.isLoadingHandlers = !user_delegate["a" /* CoreUserDelegate */].areHandlersLoaded(user.id);
                    });
                    yield this.checkUserImageUpdated();
                }
                catch (error) {
                    // Error is null for deleted users, do not show the modal.
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
            });
        }
        /**
         * Check if current user image has changed.
         *
         * @return Promise resolved when done.
         */
        checkUserImageUpdated() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.site || !this.site.getInfo() || !this.user) {
                    return;
                }
                if (this.userId != this.site.getUserId() || !this.isUserAvatarDirty()) {
                    // Not current user or hasn't changed.
                    return;
                }
                // The current user image received is different than the one stored in site info. Assume the image was updated.
                // Update the site info to get the right avatar in there.
                try {
                    yield sites["b" /* CoreSites */].updateSiteInfo(this.site.getId());
                }
                catch (_a) {
                    // Cannot update site info. Assume the profile image is the right one.
                    events["b" /* CoreEvents */].trigger(services_user["b" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                        userId: this.userId,
                        picture: this.user.profileimageurl,
                    }, this.site.getId());
                }
                if (this.isUserAvatarDirty()) {
                    // The image is still different, this means that the good one is the one in site info.
                    yield this.refreshUser();
                }
                else {
                    // Now they're the same, send event to use the right avatar in the rest of the app.
                    events["b" /* CoreEvents */].trigger(services_user["b" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                        userId: this.userId,
                        picture: this.user.profileimageurl,
                    }, this.site.getId());
                }
            });
        }
        /**
         * Opens dialog to change profile picture.
         */
        changeProfilePicture() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const maxSize = -1;
                const title = singletons["L" /* Translate */].instant('core.user.newpicture');
                const mimetypes = mimetype["a" /* CoreMimetypeUtils */].getGroupMimeInfo('image', 'mimetypes');
                let modal;
                try {
                    const result = yield fileuploader_helper["a" /* CoreFileUploaderHelper */].selectAndUploadFile(maxSize, title, mimetypes);
                    modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    const profileImageURL = yield services_user["a" /* CoreUser */].changeProfilePicture(result.itemid, this.userId, this.site.getId());
                    events["b" /* CoreEvents */].trigger(services_user["b" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                        userId: this.userId,
                        picture: profileImageURL,
                    }, this.site.getId());
                    sites["b" /* CoreSites */].updateSiteInfo(this.site.getId());
                    this.refreshUser();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                }
            });
        }
        /**
         * Refresh the user.
         *
         * @param event Event.
         * @return Promise resolved when done.
         */
        refreshUser(event) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all([
                    services_user["a" /* CoreUser */].invalidateUserCache(this.userId),
                    courses["a" /* CoreCourses */].invalidateUserNavigationOptions(),
                    courses["a" /* CoreCourses */].invalidateUserAdministrationOptions(),
                ]));
                yield this.fetchUser();
                event === null || event === void 0 ? void 0 : event.complete();
                if (this.user) {
                    events["b" /* CoreEvents */].trigger(services_user["b" /* CoreUserProvider */].PROFILE_REFRESHED, {
                        courseId: this.courseId,
                        userId: this.userId,
                        user: this.user,
                    }, (_a = this.site) === null || _a === void 0 ? void 0 : _a.getId());
                }
            });
        }
        /**
         * Open the page with the user details.
         */
        openUserDetails() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('user/about', {
                params: {
                    courseId: this.courseId,
                    userId: this.userId,
                },
            });
        }
        /**
         * A handler was clicked.
         *
         * @param event Click event.
         * @param handler Handler that was clicked.
         */
        handlerClicked(event, handler) {
            handler.action(event, this.user, this.courseId);
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.obsProfileRefreshed.off();
        }
        /**
         * Check whether the user avatar is not up to date with site info.
         *
         * @return Whether the user avatar differs from site info cache.
         */
        isUserAvatarDirty() {
            var _a;
            if (!this.user || !this.site) {
                return false;
            }
            const courseAvatarUrl = this.normalizeAvatarUrl(this.user.profileimageurl);
            const siteAvatarUrl = this.normalizeAvatarUrl((_a = this.site.getInfo()) === null || _a === void 0 ? void 0 : _a.userpictureurl);
            return courseAvatarUrl !== siteAvatarUrl;
        }
        /**
         * Normalize an avatar url regardless of theme.
         *
         * Given that the default image is the only one that can be changed per theme, any other url will stay the same. Note that
         * the values returned by this function may not be valid urls, given that they are intended for string comparison.
         *
         * @param avatarUrl Avatar url.
         * @return Normalized avatar string (may not be a valid url).
         */
        normalizeAvatarUrl(avatarUrl) {
            var _a;
            if (!avatarUrl) {
                return 'undefined';
            }
            if (avatarUrl.startsWith(`${(_a = this.site) === null || _a === void 0 ? void 0 : _a.siteUrl}/theme/image.php`)) {
                return 'default';
            }
            return avatarUrl;
        }
    }
    CoreUserProfilePage.ɵfac = function CoreUserProfilePage_Factory(t) { return new (t || CoreUserProfilePage)(); };
    CoreUserProfilePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreUserProfilePage, selectors: [["page-core-user-profile"]], decls: 15, vars: 13, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "far-user", 3, "message", 4, "ngIf"], [1, "ion-text-center", "core-user-profile-maininfo"], [3, "user", "userId", "linkProfile", "checkOnline"], ["class", "edit-avatar", "fill", "clear", "color", "dark", 3, "click", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "core-user-communication-handlers", 4, "ngIf"], ["button", "", "detail", "true", 1, "ion-text-wrap", "core-user-profile-handler", 3, "click"], ["name", "fas-user", "slot", "start", "aria-hidden", "true"], [1, "item-heading"], ["class", "ion-text-center core-loading-handlers", 4, "ngIf"], ["button", "", "class", "ion-text-wrap", "detail", "true", 3, "ngClass", "hidden", "click", 4, "ngFor", "ngForOf"], ["fill", "clear", "color", "dark", 1, "edit-avatar", 3, "click"], ["slot", "icon-only", "name", "fas-pen", "aria-hidden", "true"], [1, "ion-text-wrap"], [1, "core-user-communication-handlers"], ["expand", "block", "size", "default", 3, "ngClass", "hidden", "disabled", "click", 4, "ngFor", "ngForOf"], ["expand", "block", "size", "default", 3, "ngClass", "hidden", "disabled", "click"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name"], [1, "ion-text-center", "core-loading-handlers"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "ngClass", "hidden", "click"], ["expand", "block", "fill", "outline", "size", "default", 3, "ngClass", "hidden", "disabled", "click", 4, "ngFor", "ngForOf"], ["expand", "block", "fill", "outline", "size", "default", 3, "ngClass", "hidden", "disabled", "click"], ["slot", "end", 4, "ngIf"], ["slot", "end"], ["icon", "far-user", 3, "message"]], template: function CoreUserProfilePage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, CoreUserProfilePage_h1_5_Template, 2, 1, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreUserProfilePage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.refreshUser($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, CoreUserProfilePage_ion_list_11_Template, 20, 18, "ion-list", 2);
                core["nd" /* ɵɵtemplate */](12, CoreUserProfilePage_core_empty_box_12_Template, 2, 3, "core-empty-box", 6);
                core["nd" /* ɵɵtemplate */](13, CoreUserProfilePage_core_empty_box_13_Template, 2, 3, "core-empty-box", 6);
                core["nd" /* ɵɵtemplate */](14, CoreUserProfilePage_core_empty_box_14_Template, 2, 3, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.userLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.userLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user && !ctx.isDeleted && ctx.isEnrolled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.user && !ctx.isDeleted && ctx.isEnrolled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.isDeleted);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isEnrolled);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], common["s" /* NgForOf */], ionic_angular["k" /* IonButton */], common["q" /* NgClass */], ionic_angular["pb" /* IonSpinner */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .core-user-profile-maininfo[_ngcontent-%COMP%]::part(native){flex-direction:column}[_nghost-%COMP%]     core-user-avatar{display:block;--core-avatar-size:var(--core-large-avatar-size);height:calc(var(--core-avatar-size) + 16px)}[_nghost-%COMP%]     core-user-avatar img{margin:8px auto}[_nghost-%COMP%]     core-user-avatar .contact-status{width:24px!important;height:24px!important;right:calc(50% - 12px - var(--core-avatar-size) / 2)!important}[_nghost-%COMP%]     core-user-avatar .edit-avatar{position:absolute;right:calc(50% - 15px - var(--core-avatar-size) / 2);bottom:-12px}[dir=rtl][_nghost-%COMP%]   [_nghost-%COMP%]     core-user-avatar .edit-avatar, [dir=rtl]   [_nghost-%COMP%]   [_nghost-%COMP%]     core-user-avatar .edit-avatar{left:0;right:unset}[_nghost-%COMP%]     core-user-avatar .edit-avatar::part(native){border-radius:50%;background:var(--ion-item-background)}[dir=rtl][_nghost-%COMP%]     core-user-avatar .edit-avatar, [dir=rtl]   [_nghost-%COMP%]     core-user-avatar .edit-avatar{left:-24px;right:unset}"] });
    return CoreUserProfilePage;
})();

// CONCATENATED MODULE: ./src/core/features/user/pages/profile/profile.module.ts
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
        component: profile_page_CoreUserProfilePage,
    },
];
let profile_module_CoreUserProfilePageModule = /*@__PURE__*/ (() => {
    class CoreUserProfilePageModule {
    }
    CoreUserProfilePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreUserProfilePageModule });
    CoreUserProfilePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreUserProfilePageModule_Factory(t) { return new (t || CoreUserProfilePageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreUserProfilePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](profile_module_CoreUserProfilePageModule, { declarations: [profile_page_CoreUserProfilePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);