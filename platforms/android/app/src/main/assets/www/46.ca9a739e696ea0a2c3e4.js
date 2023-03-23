(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "IODR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModChatLazyModule", function() { return /* binding */ chat_lazy_module_AddonModChatLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/chat/components/components.module.ts
var components_module = __webpack_require__("ef6k");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/chat/components/index/index.ts
var components_index = __webpack_require__("e1dt");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/chat/pages/index/index.ts
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








/**
 * Page that displays a chat.
 */
let index_AddonModChatIndexPage = /*@__PURE__*/ (() => {
    class AddonModChatIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
    }
    AddonModChatIndexPage.ɵfac = function AddonModChatIndexPage_Factory(t) { return ɵAddonModChatIndexPage_BaseFactory(t || AddonModChatIndexPage); };
    AddonModChatIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModChatIndexPage, selectors: [["page-addon-mod-chat-index"]], viewQuery: function AddonModChatIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](components_index["a" /* AddonModChatIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "dataRetrieved"]], template: function AddonModChatIndexPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](7, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModChatIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-chat-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModChatIndexPage_Template_addon_mod_chat_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], components_index["a" /* AddonModChatIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModChatIndexPage;
})();
const ɵAddonModChatIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModChatIndexPage);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/components/animations.ts
var animations = __webpack_require__("MUy3");

// EXTERNAL MODULE: ./src/core/components/send-message-form/send-message-form.ts
var send_message_form = __webpack_require__("O4u7");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/chat/components/users-modal/users-modal.ts
var users_modal = __webpack_require__("5E3q");

// EXTERNAL MODULE: ./src/addons/mod/chat/services/chat.ts
var chat = __webpack_require__("g4DX");

// EXTERNAL MODULE: ./src/addons/mod/chat/services/chat-helper.ts
var chat_helper = __webpack_require__("btSF");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/on-resize.ts
var on_resize = __webpack_require__("8PoL");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/chat/pages/chat/chat.ts

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


























function AddonModChatChatPage_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModChatChatPage_ion_button_8_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.showChatUsers(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.users"));
    }
}
function AddonModChatChatPage_ng_container_12_p_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 20);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, message_r8.timestamp * 1000, "strftimedayshort"), " ");
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 27);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 28);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r8.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageenter", core["ad" /* ɵɵpureFunction1 */](8, _c0, message_r8.userfullname)), " ");
    }
}
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 29);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 30);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r8.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageexit", core["ad" /* ɵɵpureFunction1 */](8, _c0, message_r8.userfullname)), " ");
    }
}
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 31);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r8.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messagebeepseveryone", core["ad" /* ɵɵpureFunction1 */](8, _c0, message_r8.userfullname)), " ");
    }
}
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 31);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r8.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messagebeepsyou", core["ad" /* ɵɵpureFunction1 */](8, _c0, message_r8.userfullname)), " ");
    }
}
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 33);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r8.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageyoubeep", core["ad" /* ɵɵpureFunction1 */](8, _c0, message_r8.beepWho)), " ");
    }
}
function AddonModChatChatPage_ng_container_12_div_2_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 34);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 35);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Ec" /* ɵɵelementStart */](5, "strong");
        core["pd" /* ɵɵtext */](6);
        core["Ec" /* ɵɵelementStart */](7, "core-format-text", 36);
        core["Mc" /* ɵɵlistener */]("afterRender", function AddonModChatChatPage_ng_container_12_div_2_ion_badge_6_Template_core_format_text_afterRender_7_listener() { core["gd" /* ɵɵrestoreView */](_r28); const last_r10 = core["Oc" /* ɵɵnextContext */](2).last; const ctx_r26 = core["Oc" /* ɵɵnextContext */](); return last_r10 && ctx_r26.scrollToBottom(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r20 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 5, message_r8.timestamp * 1000, "strftimetime"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", message_r8.userfullname, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", message_r8.message)("contextInstanceId", ctx_r20.cmId)("courseId", ctx_r20.courseId);
    }
}
function AddonModChatChatPage_ng_container_12_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 21);
        core["nd" /* ɵɵtemplate */](1, AddonModChatChatPage_ng_container_12_div_2_ion_badge_1_Template, 6, 10, "ion-badge", 22);
        core["nd" /* ɵɵtemplate */](2, AddonModChatChatPage_ng_container_12_div_2_ion_badge_2_Template, 6, 10, "ion-badge", 23);
        core["nd" /* ɵɵtemplate */](3, AddonModChatChatPage_ng_container_12_div_2_ion_badge_3_Template, 6, 10, "ion-badge", 24);
        core["nd" /* ɵɵtemplate */](4, AddonModChatChatPage_ng_container_12_div_2_ion_badge_4_Template, 6, 10, "ion-badge", 24);
        core["nd" /* ɵɵtemplate */](5, AddonModChatChatPage_ng_container_12_div_2_ion_badge_5_Template, 6, 10, "ion-badge", 25);
        core["nd" /* ɵɵtemplate */](6, AddonModChatChatPage_ng_container_12_div_2_ion_badge_6_Template, 8, 8, "ion-badge", 26);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.system && message_r8.message == "enter");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.system && message_r8.message == "exit");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.beep == "all");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.userid != ctx_r12.currentUserId && message_r8.beep == ctx_r12.currentUserId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.userid == ctx_r12.currentUserId && message_r8.beep && message_r8.beep != "all");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r8.system && !message_r8.beep);
    }
}
function AddonModChatChatPage_ng_container_12_ion_item_3_h2_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2", 41);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 42);
        core["Ec" /* ɵɵelementStart */](2, "div");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", message_r8)("linkProfile", false);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](message_r8.userfullname);
    }
}
function AddonModChatChatPage_ng_container_12_ion_item_3_div_8_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "div", 43);
    }
}
function AddonModChatChatPage_ng_container_12_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r36 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 37);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, AddonModChatChatPage_ng_container_12_ion_item_3_h2_2_Template, 4, 3, "h2", 38);
        core["Ec" /* ɵɵelementStart */](3, "p", 39);
        core["Ec" /* ɵɵelementStart */](4, "core-format-text", 36);
        core["Mc" /* ɵɵlistener */]("afterRender", function AddonModChatChatPage_ng_container_12_ion_item_3_Template_core_format_text_afterRender_4_listener() { core["gd" /* ɵɵrestoreView */](_r36); const last_r10 = core["Oc" /* ɵɵnextContext */]().last; const ctx_r34 = core["Oc" /* ɵɵnextContext */](); return last_r10 && ctx_r34.scrollToBottom(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-note");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonModChatChatPage_ng_container_12_ion_item_3_div_8_Template, 1, 0, "div", 40);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r13 = core["Oc" /* ɵɵnextContext */]();
        core["qc" /* ɵɵclassProp */]("addon-message-mine", message_r8.userid == ctx_r13.currentUserId)("addon-message-not-mine", message_r8.userid != ctx_r13.currentUserId)("addon-message-no-user", !message_r8.showUserData);
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", message_r8.userid == ctx_r13.currentUserId ? "" : "fromLeft");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.showUserData);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", message_r8.message)("contextInstanceId", ctx_r13.cmId)("courseId", ctx_r13.courseId);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](7, 13, message_r8.timestamp * 1000, "strftimetime"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.showTail);
    }
}
function AddonModChatChatPage_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModChatChatPage_ng_container_12_p_1_Template, 3, 4, "p", 17);
        core["nd" /* ɵɵtemplate */](2, AddonModChatChatPage_ng_container_12_div_2_Template, 7, 6, "div", 18);
        core["nd" /* ɵɵtemplate */](3, AddonModChatChatPage_ng_container_12_ion_item_3_Template, 9, 16, "ion-item", 19);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const message_r8 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.showDate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r8.special);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r8.special);
    }
}
function AddonModChatChatPage_core_empty_box_13_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 44);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_chat.nomessages"));
    }
}
function AddonModChatChatPage_p_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 45);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_chat.mustbeonlinetosendmessages"), " ");
    }
}
function AddonModChatChatPage_core_send_message_form_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-send-message-form", 46);
        core["Mc" /* ɵɵlistener */]("onSubmit", function AddonModChatChatPage_core_send_message_form_17_Template_core_send_message_form_onSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r39); const ctx_r38 = core["Oc" /* ɵɵnextContext */](); return ctx_r38.sendMessage($event); })("onResize", function AddonModChatChatPage_core_send_message_form_17_Template_core_send_message_form_onResize_0_listener() { core["gd" /* ɵɵrestoreView */](_r39); const ctx_r40 = core["Oc" /* ɵɵnextContext */](); return ctx_r40.resizeContent(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("sendDisabled", ctx_r4.sending)("message", ctx_r4.newMessage)("placeholder", core["Qc" /* ɵɵpipeBind1 */](1, 3, "addon.messages.newmessage"));
    }
}
function AddonModChatChatPage_ion_button_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r42 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 47);
        core["Mc" /* ɵɵlistener */]("click", function AddonModChatChatPage_ion_button_18_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r42); const ctx_r41 = core["Oc" /* ɵɵnextContext */](); return ctx_r41.reconnect(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.login.reconnect"), " ");
    }
}
/**
 * Page that displays a chat session.
 */
let chat_AddonModChatChatPage = /*@__PURE__*/ (() => {
    class AddonModChatChatPage {
        constructor() {
            this.loaded = false;
            this.title = '';
            this.messages = [];
            this.sending = false;
            this.lastTime = 0;
            this.oldContentHeight = 0;
            this.viewDestroyed = false;
            this.pollingRunning = false;
            this.users = [];
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.isOnline = app["a" /* CoreApp */].isOnline();
            this.onlineSubscription = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.isOnline = app["a" /* CoreApp */].isOnline();
                });
            });
            // Recalculate footer position when keyboard is shown or hidden.
            this.keyboardObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].KEYBOARD_CHANGE, () => {
                // @todo probably not needed.
                // this.content.resize();
            });
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.chatId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('chatId');
                this.title = services_navigator["a" /* CoreNavigator */].getRouteParam('title') || '';
                try {
                    yield this.loginUser();
                    yield this.fetchMessages();
                    this.startPolling();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_chat.errorwhileconnecting', true);
                    services_navigator["a" /* CoreNavigator */].back();
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Runs when the page has fully entered and is now the active page.
         * This event will fire, whether it was the first load or a cached page.
         */
        ionViewDidEnter() {
            this.startPolling();
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'chat' });
            this.stopPolling();
        }
        /**
         * Convenience function to login the user.
         *
         * @return Promise resolved when done.
         */
        loginUser() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.sessionId = yield chat["a" /* AddonModChat */].loginUser(this.chatId);
            });
        }
        /**
         * Convenience function to fetch chat messages.
         *
         * @return Promise resolved when done.
         */
        fetchMessages() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const messagesInfo = yield chat["a" /* AddonModChat */].getLatestMessages(this.sessionId, this.lastTime);
                this.lastTime = messagesInfo.chatnewlasttime || 0;
                const messages = yield chat["a" /* AddonModChat */].getMessagesUserData(messagesInfo.messages, this.courseId);
                if (!messages.length) {
                    // No messages yet, nothing else to do.
                    return;
                }
                const previousLength = this.messages.length;
                this.messages = this.messages.concat(messages);
                // Calculate which messages need to display the date or user data.
                for (let index = previousLength; index < this.messages.length; index++) {
                    const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                    this.messages[index] = chat_helper["a" /* AddonModChatHelper */].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                    const message = this.messages[index];
                    if (message.beep && message.beep != String(this.currentUserId)) {
                        this.loadMessageBeepWho(message);
                    }
                }
                this.messages[this.messages.length - 1].showTail = true;
                // New messages or beeps, scroll to bottom.
                setTimeout(() => this.scrollToBottom());
            });
        }
        loadMessageBeepWho(message) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                message.beepWho = yield this.getUserFullname(message.beep);
            });
        }
        /**
         * Display the chat users modal.
         */
        showChatUsers() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Create the toc modal.
                const modalData = yield dom["a" /* CoreDomUtils */].openSideModal({
                    component: users_modal["a" /* AddonModChatUsersModalComponent */],
                    componentProps: {
                        sessionId: this.sessionId,
                        cmId: this.cmId,
                    },
                });
                if (modalData) {
                    if (modalData.talkTo) {
                        this.newMessage = `To ${modalData.talkTo}: ` + (((_a = this.sendMessageForm) === null || _a === void 0 ? void 0 : _a.message) || '');
                    }
                    if (modalData.beepTo) {
                        this.sendMessage('', modalData.beepTo);
                    }
                    this.users = modalData.users;
                }
            });
        }
        /**
         * Get the user fullname for a beep.
         *
         * @param id User Id before parsing.
         * @return User fullname.
         */
        getUserFullname(id) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const idNumber = parseInt(id, 10);
                if (isNaN(idNumber)) {
                    return id;
                }
                const user = this.users.find((user) => user.id == idNumber);
                if (user) {
                    return user.fullname;
                }
                try {
                    const data = yield chat["a" /* AddonModChat */].getChatUsers(this.sessionId, { cmId: this.cmId });
                    this.users = data.users;
                    const user = this.users.find((user) => user.id == idNumber);
                    if (user) {
                        return user.fullname;
                    }
                    return id;
                }
                catch (error) {
                    // Ignore errors.
                    return id;
                }
            });
        }
        /**
         * Start the polling to get chat messages periodically.
         */
        startPolling() {
            // We already have the polling in place.
            if (this.polling) {
                return;
            }
            // Start polling.
            this.polling = window.setInterval(() => {
                utils["a" /* CoreUtils */].ignoreErrors(this.fetchMessagesInterval());
            }, chat["b" /* AddonModChatProvider */].POLL_INTERVAL);
        }
        /**
         * Stop polling for messages.
         */
        stopPolling() {
            clearInterval(this.polling);
            this.polling = undefined;
        }
        /**
         * Convenience function to be called every certain time to fetch chat messages.
         *
         * @return Promise resolved when done.
         */
        fetchMessagesInterval() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.isOnline || this.pollingRunning) {
                    // Obviously we cannot check for new messages when the app is offline.
                    return;
                }
                this.pollingRunning = true;
                try {
                    yield this.fetchMessages();
                }
                catch (_a) {
                    try {
                        // Try to login, it might have failed because the session expired.
                        yield this.loginUser();
                        yield this.fetchMessages();
                    }
                    catch (error) {
                        // Fail again. Stop polling if needed.
                        this.stopPolling();
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_chat.errorwhileretrievingmessages', true);
                        throw error;
                    }
                }
                finally {
                    this.pollingRunning = false;
                }
            });
        }
        /**
         * Send a message to the chat.
         *
         * @param text Text of the nessage.
         * @param beep ID of the user to beep.
         */
        sendMessage(text, beep = 0) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.isOnline) {
                    // Silent error, the view should prevent this.
                    return;
                }
                else if (beep === 0 && !text.trim()) {
                    // Silent error.
                    return;
                }
                this.sending = true;
                try {
                    yield chat["a" /* AddonModChat */].sendMessage(this.sessionId, text, beep);
                    // Update messages to show the sent message.
                    utils["a" /* CoreUtils */].ignoreErrors(this.fetchMessagesInterval());
                }
                catch (error) {
                    // Only close the keyboard if an error happens, we want the user to be able to send multiple
                    // messages without the keyboard being closed.
                    app["a" /* CoreApp */].closeKeyboard();
                    this.newMessage = text;
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_chat.errorwhilesendingmessage', true);
                }
                finally {
                    this.sending = false;
                }
            });
        }
        /**
         * Try to reconnect.
         *
         * @return Promise resolved when done.
         */
        reconnect() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    // Call startPolling would take a while for the first execution, so we'll execute it manually to check if it works now.
                    yield this.fetchMessagesInterval();
                    // It works, start the polling again.
                    this.startPolling();
                }
                catch (_a) {
                    // Ignore errors.
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Scroll bottom when render has finished.
         */
        scrollToBottom() {
            // Need a timeout to leave time to the view to be rendered.
            setTimeout(() => {
                var _a;
                if (!this.viewDestroyed) {
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
                }
            });
        }
        /**
         * Content or scroll has been resized. For content, only call it if it's been added on top.
         */
        resizeContent() {
            // @todo probably not needed.
            // let top = this.content.getContentDimensions().scrollTop;
            // this.content.resize();
            // // Wait for new content height to be calculated.
            // setTimeout(() => {
            //     // Visible content size changed, maintain the bottom position.
            //     if (!this.viewDestroyed && this.content && this.domUtils.getContentHeight(this.content) != this.oldContentHeight) {
            //         if (!top) {
            //             top = this.content.getContentDimensions().scrollTop;
            //         }
            //         top += this.oldContentHeight - this.domUtils.getContentHeight(this.content);
            //         this.oldContentHeight = this.domUtils.getContentHeight(this.content);
            //         this.content.scrollTo(0, top, 0);
            //     }
            // });
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved with true if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.messages.some((message) => !message.special)) {
                    return true;
                }
                // Modified, confirm user wants to go back.
                yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('addon.mod_chat.confirmloss'));
                return true;
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.onlineSubscription && this.onlineSubscription.unsubscribe();
            this.keyboardObserver && this.keyboardObserver.off();
            this.stopPolling();
            this.viewDestroyed = true;
        }
    }
    AddonModChatChatPage.ɵfac = function AddonModChatChatPage_Factory(t) { return new (t || AddonModChatChatPage)(); };
    AddonModChatChatPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModChatChatPage, selectors: [["page-addon-mod-chat-chat"]], viewQuery: function AddonModChatChatPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](send_message_form["a" /* CoreSendMessageFormComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.sendMessageForm = _t.first);
            }
        }, decls: 19, vars: 13, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "click", 4, "ngIf"], [1, "has-footer"], [1, "safe-area-page", 3, "hideUntil"], ["aria-live", "polite", 1, "addon-messages-discussion-container"], [4, "ngFor", "ngForOf"], ["icon", "far-comments", 3, "message", 4, "ngIf"], ["color", "light", 1, "footer-adjustable"], ["color", "light"], ["class", "ion-text-center", 4, "ngIf"], [3, "sendDisabled", "message", "placeholder", "onSubmit", "onResize", 4, "ngIf"], ["expand", "block", "color", "light", 3, "click", 4, "ngIf"], ["fill", "clear", 3, "click"], ["name", "fas-users", "slot", "icon-only", "aria-hidden", "true"], ["class", "ion-text-center addon-messages-date", 4, "ngIf"], ["class", "ion-text-center addon-mod_chat-notice", 4, "ngIf"], ["class", "ion-text-wrap addon-message", 3, "addon-message-mine", "addon-message-not-mine", "addon-message-no-user", 4, "ngIf"], [1, "ion-text-center", "addon-messages-date"], [1, "ion-text-center", "addon-mod_chat-notice"], ["class", "ion-text-wrap", "color", "success", 4, "ngIf"], ["class", "ion-text-wrap", "color", "danger", 4, "ngIf"], ["class", "ion-text-wrap", "color", "primary", 4, "ngIf"], ["class", "ion-text-wrap", "color", "light", 4, "ngIf"], ["class", "ion-text-wrap", "color", "info", 4, "ngIf"], ["color", "success", 1, "ion-text-wrap"], ["name", "fas-sign-in-alt", "aria-hidden", "true"], ["color", "danger", 1, "ion-text-wrap"], ["name", "fas-sign-out-alt", "aria-hidden", "true"], ["color", "primary", 1, "ion-text-wrap"], ["name", "fas-bell", "aria-hidden", "true"], ["color", "light", 1, "ion-text-wrap"], ["color", "info", 1, "ion-text-wrap"], ["name", "fas-asterisk", "aria-hidden", "true"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId", "afterRender"], [1, "ion-text-wrap", "addon-message"], ["class", "addon-message-user", 4, "ngIf"], [1, "addon-message-text"], ["class", "tail", 4, "ngIf"], [1, "addon-message-user"], ["slot", "start", 3, "user", "linkProfile"], [1, "tail"], ["icon", "far-comments", 3, "message"], [1, "ion-text-center"], [3, "sendDisabled", "message", "placeholder", "onSubmit", "onResize"], ["expand", "block", "color", "light", 3, "click"]], template: function AddonModChatChatPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["nd" /* ɵɵtemplate */](8, AddonModChatChatPage_ion_button_8_Template, 3, 3, "ion-button", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content", 5);
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 6);
                core["Ec" /* ɵɵelementStart */](11, "ion-list", 7);
                core["nd" /* ɵɵtemplate */](12, AddonModChatChatPage_ng_container_12_Template, 4, 3, "ng-container", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](13, AddonModChatChatPage_core_empty_box_13_Template, 2, 3, "core-empty-box", 9);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "ion-footer", 10);
                core["Ec" /* ɵɵelementStart */](15, "ion-toolbar", 11);
                core["nd" /* ɵɵtemplate */](16, AddonModChatChatPage_p_16_Template, 3, 3, "p", 12);
                core["nd" /* ɵɵtemplate */](17, AddonModChatChatPage_core_send_message_form_17_Template, 2, 5, "core-send-message-form", 13);
                core["nd" /* ɵɵtemplate */](18, AddonModChatChatPage_ion_button_18_Template, 3, 3, "ion-button", 14);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.cmId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.messages);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.messages || ctx.messages.length <= 0);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isOnline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.isOnline && ctx.polling && ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.isOnline && !ctx.polling && ctx.loaded);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["z" /* IonFooter */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["j" /* IonBadge */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["V" /* IonNote */], user_avatar["a" /* CoreUserAvatarComponent */], empty_box["a" /* CoreEmptyBoxComponent */], send_message_form["a" /* CoreSendMessageFormComponent */], on_resize["a" /* CoreOnResizeDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--background-alternative)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:0!important}[_nghost-%COMP%]   .addon-messages-discussion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:15px;background:var(--background-alternative)}[_nghost-%COMP%]   .addon-messages-date[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]{border:0;border-radius:4px;padding:0 8px;margin:10px 8px 0;--background:var(--addon-messages-message-bg);background:var(--background);align-self:flex-start;width:90%;max-width:90%;--min-height:var(--a11y-min-target-size);position:relative;transition:width .5s ease-in-out;overflow:visible}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]::part(native){--inner-border-width:0;--inner-padding-end:0;padding:0;margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:only-child{display:inline}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:.5rem;margin-top:0;color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   core-user-avatar[_ngcontent-%COMP%]{display:block;--core-avatar-size:var(--addon-messages-avatar-size);margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-weight:500;flex-grow:1;padding-left:.5rem;padding-right:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;-webkit-padding-start:.5rem;padding-inline-start:.5rem;-webkit-padding-end:.5rem;padding-inline-end:.5rem}}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{color:var(--addon-messages-message-note-text);font-size:var(--addon-messages-message-note-font-size);margin:0;padding:0 0 8px;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;padding:8px 0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{content:\"\";width:0;height:0;border:.5rem solid transparent;position:absolute;touch-action:none;bottom:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]{--background:var(--addon-messages-message-mine-bg);align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:right;margin:2px -3px -2px 5px}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:left}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:-3px;margin-inline-end:-3px}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{right:-8px;margin-right:-.5rem;border-bottom-color:var(--addon-messages-message-mine-bg)}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;left:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:-.5rem;margin-inline-end:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-bg);left:-8px;margin-left:-.5rem}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;right:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:-.5rem;margin-inline-start:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message[tappable].addon-message-not-mine.activated[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]{min-height:0;line-height:normal;margin-top:0;margin-bottom:0;height:var(--a11y-min-target-size)!important;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.4em;line-height:normal;color:var(--ion-color-danger)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-no-user[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-bottom:0}.ios[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child, .ios   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child{padding-bottom:4px;min-height:0}[_nghost-%COMP%]   .addon-mod_chat-notice[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"], data: { animation: [animations["a" /* CoreAnimations */].SLIDE_IN_OUT] } });
    return AddonModChatChatPage;
})();

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// CONCATENATED MODULE: ./src/addons/mod/chat/pages/session-messages/session-messages.ts

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

















function AddonModChatSessionMessagesPage_ng_container_14_div_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 10);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, message_r1.timestamp * 1000, "strftimedayshort"), " ");
    }
}
const session_messages_c0 = function (a0) { return { $a: a0 }; };
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 17);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 18);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r1.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageenter", core["ad" /* ɵɵpureFunction1 */](8, session_messages_c0, message_r1.userfullname)), " ");
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 19);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 20);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r1.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageexit", core["ad" /* ɵɵpureFunction1 */](8, session_messages_c0, message_r1.userfullname)), " ");
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 21);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r1.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messagebeepseveryone", core["ad" /* ɵɵpureFunction1 */](8, session_messages_c0, message_r1.userfullname)), " ");
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 21);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r1.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messagebeepsyou", core["ad" /* ɵɵpureFunction1 */](8, session_messages_c0, message_r1.userfullname)), " ");
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 23);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 2, message_r1.timestamp * 1000, "strftimetime"), " ", core["Rc" /* ɵɵpipeBind2 */](5, 5, "addon.mod_chat.messageyoubeep", core["ad" /* ɵɵpureFunction1 */](8, session_messages_c0, message_r1.beepWho)), " ");
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 24);
        core["Ec" /* ɵɵelementStart */](1, "span");
        core["zc" /* ɵɵelement */](2, "ion-icon", 25);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Ec" /* ɵɵelementStart */](5, "strong");
        core["pd" /* ɵɵtext */](6);
        core["zc" /* ɵɵelement */](7, "core-format-text", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 5, message_r1.timestamp * 1000, "strftimetime"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", message_r1.userfullname, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", message_r1.message)("contextInstanceId", ctx_r12.cmId)("courseId", ctx_r12.courseId);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 11);
        core["nd" /* ɵɵtemplate */](1, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_1_Template, 6, 10, "ion-badge", 12);
        core["nd" /* ɵɵtemplate */](2, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_2_Template, 6, 10, "ion-badge", 13);
        core["nd" /* ɵɵtemplate */](3, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_3_Template, 6, 10, "ion-badge", 14);
        core["nd" /* ɵɵtemplate */](4, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_4_Template, 6, 10, "ion-badge", 14);
        core["nd" /* ɵɵtemplate */](5, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_5_Template, 6, 10, "ion-badge", 15);
        core["nd" /* ɵɵtemplate */](6, AddonModChatSessionMessagesPage_ng_container_14_div_2_ion_badge_6_Template, 8, 8, "ion-badge", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.issystem && message_r1.message == "enter");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.issystem && message_r1.message == "exit");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.beep == "all");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.userid != ctx_r4.currentUserId && message_r1.beep == ctx_r4.currentUserId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.userid == ctx_r4.currentUserId && message_r1.beep && message_r1.beep != "all");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r1.issystem && !message_r1.beep);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_core_user_avatar_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 33);
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Vc" /* ɵɵproperty */]("user", message_r1)("linkProfile", false);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_div_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](message_r1.userfullname);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_div_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "div", 34);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 27);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2", 28);
        core["nd" /* ɵɵtemplate */](3, AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_core_user_avatar_3_Template, 1, 2, "core-user-avatar", 29);
        core["nd" /* ɵɵtemplate */](4, AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_div_4_Template, 2, 1, "div", 30);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p", 31);
        core["zc" /* ɵɵelement */](6, "core-format-text", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-note");
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_div_10_Template, 1, 0, "div", 32);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["qc" /* ɵɵclassProp */]("addon-message-mine", message_r1.userid == ctx_r5.currentUserId)("addon-message-not-mine", message_r1.userid != ctx_r5.currentUserId)("addon-message-no-user", !message_r1.showUserData);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.showUserData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.showUserData);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", message_r1.message)("contextInstanceId", ctx_r5.cmId)("courseId", ctx_r5.courseId);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](9, 13, message_r1.timestamp * 1000, "strftimetime"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.showTail);
    }
}
function AddonModChatSessionMessagesPage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModChatSessionMessagesPage_ng_container_14_div_1_Template, 3, 4, "div", 7);
        core["nd" /* ɵɵtemplate */](2, AddonModChatSessionMessagesPage_ng_container_14_div_2_Template, 7, 6, "div", 8);
        core["nd" /* ɵɵtemplate */](3, AddonModChatSessionMessagesPage_ng_container_14_ion_item_3_Template, 11, 16, "ion-item", 9);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const message_r1 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.showDate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r1.special);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r1.special);
    }
}
/**
 * Page that displays list of chat session messages.
 */
let session_messages_AddonModChatSessionMessagesPage = /*@__PURE__*/ (() => {
    class AddonModChatSessionMessagesPage {
        constructor() {
            this.messages = [];
            this.loaded = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.sessionStart = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('sessionStart');
            this.sessionEnd = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('sessionEnd');
            this.chatId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('chatId');
            this.groupId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('groupId') || 0;
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.fetchMessages();
        }
        /**
         * Fetch session messages.
         *
         * @return Promise resolved when done.
         */
        fetchMessages() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const messages = yield chat["a" /* AddonModChat */].getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId, { cmId: this.cmId });
                    this.messages = yield chat["a" /* AddonModChat */].getMessagesUserData(messages, this.courseId);
                    // Calculate which messages need to display the date or user data.
                    for (let index = 0; index < this.messages.length; index++) {
                        const prevMessage = index > 0 ? this.messages[index - 1] : undefined;
                        this.messages[index] = chat_helper["a" /* AddonModChatHelper */].formatMessage(this.currentUserId, this.messages[index], prevMessage);
                        const message = this.messages[index];
                        if (message.beep && message.beep != String(this.currentUserId)) {
                            this.loadMessageBeepWho(message);
                        }
                    }
                    this.messages[this.messages.length - 1].showTail = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorloadingcontent', true);
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        loadMessageBeepWho(message) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                message.beepWho = yield this.getUserFullname(message.beep);
            });
        }
        /**
         * Get the user fullname for a beep.
         *
         * @param id User Id before parsing.
         * @return User fullname.
         */
        getUserFullname(id) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const idNumber = parseInt(id, 10);
                if (isNaN(idNumber)) {
                    return id;
                }
                try {
                    const user = yield services_user["a" /* CoreUser */].getProfile(idNumber, this.courseId, true);
                    return user.fullname;
                }
                catch (_a) {
                    // Error getting profile.
                    return id;
                }
            });
        }
        /**
         * Refresh session messages.
         *
         * @param refresher Refresher.
         */
        refreshMessages(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(chat["a" /* AddonModChat */].invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId));
                    yield this.fetchMessages();
                }
                finally {
                    refresher.complete();
                }
            });
        }
    }
    AddonModChatSessionMessagesPage.ɵfac = function AddonModChatSessionMessagesPage_Factory(t) { return new (t || AddonModChatSessionMessagesPage)(); };
    AddonModChatSessionMessagesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModChatSessionMessagesPage, selectors: [["page-addon-mod-chat-session-messages"]], decls: 15, vars: 12, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [1, "safe-area-page", 3, "hideUntil"], [1, "addon-messages-discussion-container"], [4, "ngFor", "ngForOf"], ["class", "ion-text-center addon-messages-date", 4, "ngIf"], ["class", "ion-text-center addon-mod_chat-notice", 4, "ngIf"], ["class", "ion-text-wrap addon-message", 3, "addon-message-mine", "addon-message-not-mine", "addon-message-no-user", 4, "ngIf"], [1, "ion-text-center", "addon-messages-date"], [1, "ion-text-center", "addon-mod_chat-notice"], ["class", "ion-text-wrap", "color", "success", 4, "ngIf"], ["class", "ion-text-wrap", "color", "danger", 4, "ngIf"], ["class", "ion-text-wrap", "color", "primary", 4, "ngIf"], ["class", "ion-text-wrap", "color", "light", 4, "ngIf"], ["class", "ion-text-wrap", "color", "info", 4, "ngIf"], ["color", "success", 1, "ion-text-wrap"], ["name", "fas-sign-in-alt", "aria-hidden", "true"], ["color", "danger", 1, "ion-text-wrap"], ["name", "fas-sign-out-alt", "aria-hidden", "true"], ["color", "primary", 1, "ion-text-wrap"], ["name", "fas-bell", "aria-hidden", "true"], ["color", "light", 1, "ion-text-wrap"], ["color", "info", 1, "ion-text-wrap"], ["name", "fas-asterisk", "aria-hidden", "true"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], [1, "ion-text-wrap", "addon-message"], [1, "addon-message-user"], ["slot", "start", 3, "user", "linkProfile", 4, "ngIf"], [4, "ngIf"], [1, "addon-message-text"], ["class", "tail", 4, "ngIf"], ["slot", "start", 3, "user", "linkProfile"], [1, "tail"]], template: function AddonModChatSessionMessagesPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModChatSessionMessagesPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshMessages($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-list", 5);
                core["nd" /* ɵɵtemplate */](14, AddonModChatSessionMessagesPage_ng_container_14_Template, 4, 3, "ng-container", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "addon.mod_chat.messages"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.messages);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], common["t" /* NgIf */], ionic_angular["j" /* IonBadge */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["V" /* IonNote */], user_avatar["a" /* CoreUserAvatarComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--background-alternative)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:0!important}[_nghost-%COMP%]   .addon-messages-discussion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:15px;background:var(--background-alternative)}[_nghost-%COMP%]   .addon-messages-date[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]{border:0;border-radius:4px;padding:0 8px;margin:10px 8px 0;--background:var(--addon-messages-message-bg);background:var(--background);align-self:flex-start;width:90%;max-width:90%;--min-height:var(--a11y-min-target-size);position:relative;transition:width .5s ease-in-out;overflow:visible}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]::part(native){--inner-border-width:0;--inner-padding-end:0;padding:0;margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:only-child{display:inline}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:.5rem;margin-top:0;color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   core-user-avatar[_ngcontent-%COMP%]{display:block;--core-avatar-size:var(--addon-messages-avatar-size);margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-weight:500;flex-grow:1;padding-left:.5rem;padding-right:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;-webkit-padding-start:.5rem;padding-inline-start:.5rem;-webkit-padding-end:.5rem;padding-inline-end:.5rem}}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{color:var(--addon-messages-message-note-text);font-size:var(--addon-messages-message-note-font-size);margin:0;padding:0 0 8px;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;padding:8px 0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{content:\"\";width:0;height:0;border:.5rem solid transparent;position:absolute;touch-action:none;bottom:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]{--background:var(--addon-messages-message-mine-bg);align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:right;margin:2px -3px -2px 5px}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:left}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:-3px;margin-inline-end:-3px}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{right:-8px;margin-right:-.5rem;border-bottom-color:var(--addon-messages-message-mine-bg)}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;left:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:-.5rem;margin-inline-end:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-bg);left:-8px;margin-left:-.5rem}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;right:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:-.5rem;margin-inline-start:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message[tappable].addon-message-not-mine.activated[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]{min-height:0;line-height:normal;margin-top:0;margin-bottom:0;height:var(--a11y-min-target-size)!important;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.4em;line-height:normal;color:var(--ion-color-danger)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-no-user[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-bottom:0}.ios[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child, .ios   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child{padding-bottom:4px;min-height:0}[_nghost-%COMP%]   .addon-mod_chat-notice[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"] });
    return AddonModChatSessionMessagesPage;
})();

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/pipes/duration.ts
var duration = __webpack_require__("llyR");

// CONCATENATED MODULE: ./src/addons/mod/chat/pages/sessions/sessions.ts

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




















function AddonModChatSessionsPage_ion_item_14_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsseparate"));
    }
}
function AddonModChatSessionsPage_ion_item_14_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsvisible"));
    }
}
function AddonModChatSessionsPage_ion_item_14_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 14);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r6 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r6.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r6.name, " ");
    }
}
const sessions_c0 = function (a0) { return { header: a0 }; };
function AddonModChatSessionsPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 10);
        core["nd" /* ɵɵtemplate */](2, AddonModChatSessionsPage_ion_item_14_ng_container_2_Template, 3, 3, "ng-container", 11);
        core["nd" /* ɵɵtemplate */](3, AddonModChatSessionsPage_ion_item_14_ng_container_3_Template, 3, 3, "ng-container", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 12);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModChatSessionsPage_ion_item_14_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.groupId = $event; })("ionChange", function AddonModChatSessionsPage_ion_item_14_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.fetchSessions(true); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModChatSessionsPage_ion_item_14_ion_select_option_6_Template, 2, 2, "ion-select-option", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.groupInfo.separateGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.groupInfo.visibleGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.groupId)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, sessions_c0, core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.groupInfo.groups);
    }
}
function AddonModChatSessionsPage_ion_card_20_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDuration");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const session_r10 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, session_r10.duration));
    }
}
function AddonModChatSessionsPage_ion_card_20_ion_item_8_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const user_r15 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */]("(", user_r15.messagecount, ")");
    }
}
function AddonModChatSessionsPage_ion_card_20_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["nd" /* ɵɵtemplate */](3, AddonModChatSessionsPage_ion_card_20_ion_item_8_span_3_Template, 2, 1, "span", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const user_r15 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", user_r15.userfullname, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", user_r15.messagecount);
    }
}
function AddonModChatSessionsPage_ion_card_20_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 19);
        core["Mc" /* ɵɵlistener */]("click", function AddonModChatSessionsPage_ion_card_20_ion_button_9_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r20); const session_r10 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r18 = core["Oc" /* ɵɵnextContext */](); return ctx_r18.showMoreUsers(session_r10, $event); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.showmore"), " ");
    }
}
function AddonModChatSessionsPage_ion_card_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModChatSessionsPage_ion_card_20_Template_ion_card_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r22); const session_r10 = ctx.$implicit; const ctx_r21 = core["Oc" /* ɵɵnextContext */](); return ctx_r21.sessions.select(session_r10); });
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 16);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModChatSessionsPage_ion_card_20_p_6_Template, 3, 3, "p", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-card-content");
        core["nd" /* ɵɵtemplate */](8, AddonModChatSessionsPage_ion_card_20_ion_item_8_Template, 4, 2, "ion-item", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonModChatSessionsPage_ion_card_20_ion_button_9_Template, 3, 3, "ion-button", 18);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const session_r10 = ctx.$implicit;
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["qc" /* ɵɵclassProp */]("addon-mod-chat-session-show-more", session_r10.sessionusers.length < session_r10.allsessionusers.length);
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r1.sessions.getItemAriaCurrent(session_r10));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 7, session_r10.sessionstart * 1000));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", session_r10.duration);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", session_r10.sessionusers);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", session_r10.sessionusers.length < session_r10.allsessionusers.length);
    }
}
function AddonModChatSessionsPage_core_empty_box_21_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 20);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_chat.nosessionsfound"));
    }
}
/**
 * Page that displays list of chat sessions.
 */
let sessions_AddonModChatSessionsPage = /*@__PURE__*/ (() => {
    class AddonModChatSessionsPage {
        constructor() {
            this.showAll = false;
            this.groupId = 0;
            this.sessions = new sessions_AddonChatSessionsManager(AddonModChatSessionsPage);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.chatId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('chatId');
                this.sessions.setChatId(this.chatId);
                yield this.fetchSessions();
                this.sessions.start(this.splitView);
            });
        }
        /**
         * Fetch chat sessions.
         *
         * @param showLoading Display a loading modal.
         * @return Promise resolved when done.
         */
        fetchSessions(showLoading) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = showLoading ? yield dom["a" /* CoreDomUtils */].showModalLoading() : null;
                try {
                    this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.cmId, false);
                    this.groupId = groups["a" /* CoreGroups */].validateGroupId(this.groupId, this.groupInfo);
                    this.sessions.setGroupId(this.groupId);
                    const sessions = yield chat["a" /* AddonModChat */].getSessions(this.chatId, this.groupId, this.showAll, { cmId: this.cmId });
                    // Fetch user profiles.
                    const promises = [];
                    const formattedSessions = sessions.map((session) => {
                        session.duration = session.sessionend - session.sessionstart;
                        session.sessionusers.forEach((sessionUser) => {
                            // The WS does not return the user name, fetch user profile.
                            promises.push(this.loadUserFullname(sessionUser));
                        });
                        // If session has more than 4 users we display a "Show more" link.
                        session.allsessionusers = session.sessionusers;
                        if (session.sessionusers.length > 4) {
                            session.sessionusers = session.allsessionusers.slice(0, 3);
                        }
                        return session;
                    });
                    yield Promise.all(promises);
                    this.sessions.setItems(formattedSessions);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorloadingcontent', true);
                }
                finally {
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                }
            });
        }
        /**
         * Load the fullname of a user.
         *
         * @param id User ID.
         * @return Promise resolved when done.
         */
        loadUserFullname(sessionUser) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (sessionUser.userfullname) {
                    return;
                }
                try {
                    const user = yield services_user["a" /* CoreUser */].getProfile(sessionUser.userid, this.courseId, true);
                    sessionUser.userfullname = user.fullname;
                }
                catch (_a) {
                    // Error getting profile, most probably the user is deleted.
                    sessionUser.userfullname = singletons["L" /* Translate */].instant('core.deleteduser') + ' ' + sessionUser.userid;
                }
            });
        }
        /**
         * Refresh chat sessions.
         *
         * @param refresher Refresher.
         */
        refreshSessions(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(utils["a" /* CoreUtils */].allPromises([
                        groups["a" /* CoreGroups */].invalidateActivityGroupInfo(this.cmId),
                        chat["a" /* AddonModChat */].invalidateSessions(this.chatId, this.groupId, this.showAll),
                    ]));
                    yield this.fetchSessions();
                }
                finally {
                    refresher.complete();
                }
            });
        }
        /**
         * Show more session users.
         *
         * @param session Chat session.
         * @param event The event.
         */
        showMoreUsers(session, event) {
            session.sessionusers = session.allsessionusers;
            event.stopPropagation();
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.sessions.destroy();
        }
    }
    AddonModChatSessionsPage.ɵfac = function AddonModChatSessionsPage_Factory(t) { return new (t || AddonModChatSessionsPage)(); };
    AddonModChatSessionsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModChatSessionsPage, selectors: [["page-addon-mod-chat-sessions"]], viewQuery: function AddonModChatSessionsPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 22, vars: 18, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "ngModel", "ngModelChange", "ionChange"], ["button", "", 3, "addon-mod-chat-session-show-more", "click", 4, "ngFor", "ngForOf"], ["icon", "far-comments", 3, "message", 4, "ngIf"], [1, "ion-text-wrap"], ["id", "addon-chat-groupslabel"], [4, "ngIf"], ["aria-labelledby", "addon-chat-groupslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["button", "", 3, "click"], [1, "item-heading"], [4, "ngFor", "ngForOf"], ["fill", "clear", "expand", "block", 3, "click", 4, "ngIf"], ["fill", "clear", "expand", "block", 3, "click"], ["icon", "far-comments", 3, "message"]], template: function AddonModChatSessionsPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModChatSessionsPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshSessions($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](14, AddonModChatSessionsPage_ion_item_14_Template, 7, 9, "ion-item", 5);
                core["Ec" /* ɵɵelementStart */](15, "ion-item");
                core["Ec" /* ɵɵelementStart */](16, "ion-label");
                core["pd" /* ɵɵtext */](17);
                core["Pc" /* ɵɵpipe */](18, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](19, "ion-toggle", 6);
                core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModChatSessionsPage_Template_ion_toggle_ngModelChange_19_listener($event) { return ctx.showAll = $event; })("ionChange", function AddonModChatSessionsPage_Template_ion_toggle_ionChange_19_listener() { return ctx.fetchSessions(true); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](20, AddonModChatSessionsPage_ion_card_20_Template, 10, 9, "ion-card", 7);
                core["nd" /* ɵɵtemplate */](21, AddonModChatSessionsPage_core_empty_box_21_Template, 2, 3, "core-empty-box", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, "addon.mod_chat.chatreport"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.sessions.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 14, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.sessions.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo && (ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](18, 16, "addon.mod_chat.showincompletesessions"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngModel", ctx.showAll);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sessions.items);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.sessions.empty);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["m" /* IonCard */], ionic_angular["n" /* IonCardContent */], ionic_angular["k" /* IonButton */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */], duration["a" /* CoreDurationPipe */]], encapsulation: 2 });
    return AddonModChatSessionsPage;
})();
/**
 * Helper class to manage sessions.
 */
class sessions_AddonChatSessionsManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent) {
        super(pageComponent);
        this.chatId = -1;
        this.groupId = 0;
    }
    /**
     * Set chat ID.
     *
     * @param chatId Chat ID.
     */
    setChatId(chatId) {
        this.chatId = chatId;
    }
    /**
     * Set group ID.
     *
     * @param groupId Group ID.
     */
    setGroupId(groupId) {
        this.groupId = groupId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(session) {
        return `${session.sessionstart}/${session.sessionend}`;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            chatId: this.chatId,
            groupId: this.groupId,
        };
    }
}

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// CONCATENATED MODULE: ./src/addons/mod/chat/chat-lazy.module.ts
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













const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: index_AddonModChatIndexPage,
    },
    {
        path: ':courseId/:cmId/chat',
        component: chat_AddonModChatChatPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: sessions_AddonModChatSessionsPage,
    },
    {
        path: ':courseId/:cmId/sessions/:sessionStart/:sessionEnd',
        component: session_messages_AddonModChatSessionMessagesPage,
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/sessions',
        component: sessions_AddonModChatSessionsPage,
        children: [
            {
                path: ':sessionStart/:sessionEnd',
                component: session_messages_AddonModChatSessionMessagesPage,
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let chat_lazy_module_AddonModChatLazyModule = /*@__PURE__*/ (() => {
    class AddonModChatLazyModule {
    }
    AddonModChatLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModChatLazyModule });
    AddonModChatLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModChatLazyModule_Factory(t) { return new (t || AddonModChatLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModChatComponentsModule */],
            ]] });
    return AddonModChatLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](chat_lazy_module_AddonModChatLazyModule, { declarations: [index_AddonModChatIndexPage,
            chat_AddonModChatChatPage,
            sessions_AddonModChatSessionsPage,
            session_messages_AddonModChatSessionMessagesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModChatComponentsModule */]] });
})();


/***/ })

}]);