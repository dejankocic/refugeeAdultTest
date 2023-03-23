(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "twN0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesGroupConversationsPageModule", function() { return /* binding */ group_conversations_module_AddonMessagesGroupConversationsPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/addons/messages/messages-lazy.module.ts + 1 modules
var messages_lazy_module = __webpack_require__("muSn");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var services_messages = __webpack_require__("KMk0");

// EXTERNAL MODULE: ./src/addons/messages/services/messages-offline.ts
var messages_offline = __webpack_require__("nopL");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/push-delegate.ts
var push_delegate = __webpack_require__("2eZG");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// CONCATENATED MODULE: ./src/addons/messages/pages/group-conversations/group-conversations.page.ts

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



























const _c0 = ["favlist"];
const _c1 = ["grouplist"];
const _c2 = ["indlist"];
function AddonMessagesGroupConversationsPage_ion_badge_29_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 30);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.contactRequestsCount);
    }
}
const _c3 = function (a0) { return { $a: a0 }; };
function AddonMessagesGroupConversationsPage_span_30_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.pendingcontactrequests", core["ad" /* ɵɵpureFunction1 */](4, _c3, ctx_r1.contactRequestsCount)), " ");
    }
}
function AddonMessagesGroupConversationsPage_ion_icon_33_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 32);
    }
}
function AddonMessagesGroupConversationsPage_ion_icon_34_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 33);
    }
}
function AddonMessagesGroupConversationsPage_ion_badge_39_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 30);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r4.favourites.unread);
    }
}
function AddonMessagesGroupConversationsPage_span_40_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.unreadconversations", core["ad" /* ɵɵpureFunction1 */](4, _c3, ctx_r5.favourites.unread)), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_container_43_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonMessagesGroupConversationsPage_ion_item_45_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 34);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.messages.nofavourites"));
    }
}
function AddonMessagesGroupConversationsPage_ion_item_46_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
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
function AddonMessagesGroupConversationsPage_ion_icon_49_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 32);
    }
}
function AddonMessagesGroupConversationsPage_ion_icon_50_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 33);
    }
}
function AddonMessagesGroupConversationsPage_ion_badge_55_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 30);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r12.group.unread);
    }
}
function AddonMessagesGroupConversationsPage_span_56_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r13 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.unreadconversations", core["ad" /* ɵɵpureFunction1 */](4, _c3, ctx_r13.group.unread)), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_container_59_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonMessagesGroupConversationsPage_ion_item_61_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 34);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.messages.nogroupconversations"));
    }
}
function AddonMessagesGroupConversationsPage_ion_item_62_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
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
function AddonMessagesGroupConversationsPage_ion_icon_65_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 32);
    }
}
function AddonMessagesGroupConversationsPage_ion_icon_66_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 33);
    }
}
function AddonMessagesGroupConversationsPage_ion_badge_71_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 30);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r20 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r20.individual.unread);
    }
}
function AddonMessagesGroupConversationsPage_span_72_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r21 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.unreadconversations", core["ad" /* ɵɵpureFunction1 */](4, _c3, ctx_r21.individual.unread)), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_container_75_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonMessagesGroupConversationsPage_ion_item_77_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 34);
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
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.messages.noindividualconversations"));
    }
}
function AddonMessagesGroupConversationsPage_ion_item_78_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
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
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_avatar_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-avatar", 0);
        core["zc" /* ɵɵelement */](1, "img", 49);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("src", conversation_r30.imageurl, core["jd" /* ɵɵsanitizeUrl */])("alt", conversation_r30.name);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_core_user_avatar_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 50);
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("user", conversation_r30.otherUser)("linkProfile", false)("checkOnline", conversation_r30.showonlinestatus);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_icon_7_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 51);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("title", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.contactblocked"));
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_icon_8_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 52);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("title", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.mutedconversation"));
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_span_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 55);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, conversation_r30.lastmessagedate), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_ion_badge_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 56);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](conversation_r30.unreadcount);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.unreadmessages", core["ad" /* ɵɵpureFunction1 */](4, _c3, conversation_r30.unreadcount)), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note");
        core["nd" /* ɵɵtemplate */](1, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_span_1_Template, 3, 3, "span", 53);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_ion_badge_2_Template, 2, 1, "ion-badge", 54);
        core["nd" /* ɵɵtemplate */](3, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_span_3_Template, 3, 6, "span", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.lastmessagedate > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.unreadcount > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.unreadcount > 0);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_p_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "core-format-text", 42);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", conversation_r30.subname)("contextInstanceId", 0);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_span_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 57);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.you"), " ");
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_span_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 57);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](conversation_r30.members[0].fullname + ":");
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r51 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 37);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r51); const conversation_r30 = ctx.$implicit; const ctx_r50 = core["Oc" /* ɵɵnextContext */](2); return ctx_r50.gotoConversation(conversation_r30.id, conversation_r30.userid); });
        core["nd" /* ɵɵtemplate */](1, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_avatar_1_Template, 2, 2, "ion-avatar", 38);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_core_user_avatar_2_Template, 1, 3, "core-user-avatar", 39);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "div", 40);
        core["Ec" /* ɵɵelementStart */](5, "p", 41);
        core["zc" /* ɵɵelement */](6, "core-format-text", 42);
        core["nd" /* ɵɵtemplate */](7, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_icon_7_Template, 2, 3, "ion-icon", 43);
        core["nd" /* ɵɵtemplate */](8, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_icon_8_Template, 2, 3, "ion-icon", 44);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_ion_note_9_Template, 4, 3, "ion-note", 45);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_p_10_Template, 2, 2, "p", 45);
        core["Ec" /* ɵɵelementStart */](11, "p", 46);
        core["nd" /* ɵɵtemplate */](12, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_span_12_Template, 3, 3, "span", 47);
        core["nd" /* ɵɵtemplate */](13, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_span_13_Template, 2, 1, "span", 47);
        core["zc" /* ɵɵelement */](14, "core-format-text", 48);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const conversation_r30 = ctx.$implicit;
        const ctx_r29 = core["Oc" /* ɵɵnextContext */](2);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-message-conversation-", conversation_r30.id ? conversation_r30.id : "user-" + conversation_r30.userid, "");
        core["mc" /* ɵɵattribute */]("aria-label", conversation_r30.name)("aria-current", conversation_r30.id && conversation_r30.id == ctx_r29.selectedConversationId || conversation_r30.userid && conversation_r30.userid == ctx_r29.selectedUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.type == ctx_r29.typeGroup);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.type != ctx_r29.typeGroup);
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", conversation_r30.name)("contextInstanceId", 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.isblocked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.ismuted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.lastmessagedate > 0 || conversation_r30.unreadcount);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.subname);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", conversation_r30.sentfromcurrentuser);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !conversation_r30.sentfromcurrentuser && conversation_r30.type == ctx_r29.typeGroup && conversation_r30.members[0]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", conversation_r30.lastmessage)("contextInstanceId", 0);
    }
}
function AddonMessagesGroupConversationsPage_ng_template_79_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, AddonMessagesGroupConversationsPage_ng_template_79_ion_item_0_Template, 15, 15, "ion-item", 36);
    }
    if (rf & 2) {
        const conversations_r28 = ctx.conversations;
        core["Vc" /* ɵɵproperty */]("ngForOf", conversations_r28);
    }
}
const _c4 = function (a0) { return { conversations: a0 }; };
/**
 * Page that displays the list of conversations, including group conversations.
 */
let group_conversations_page_AddonMessagesGroupConversationsPage = /*@__PURE__*/ (() => {
    class AddonMessagesGroupConversationsPage {
        constructor(route) {
            this.route = route;
            this.loaded = false;
            this.contactRequestsCount = 0;
            this.favourites = {
                type: undefined,
                favourites: true,
                count: 0,
                unread: 0,
                conversations: [],
            };
            this.group = {
                type: services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_GROUP,
                favourites: false,
                count: 0,
                unread: 0,
                conversations: [],
            };
            this.individual = {
                type: services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                favourites: false,
                count: 0,
                unread: 0,
                conversations: [],
            };
            this.typeGroup = services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_GROUP;
            this.loadingMessage = singletons["L" /* Translate */].instant('core.loading');
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            // Update conversations when new message is received.
            this.newMessagesObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, (data) => {
                var _a;
                // Check if the new message belongs to the option that is currently expanded.
                const expandedOption = this.getExpandedOption();
                const messageOption = this.getConversationOption(data);
                if (expandedOption != messageOption) {
                    return; // Message doesn't belong to current list, stop.
                }
                // Search the conversation to update.
                const conversation = this.findConversation(data.conversationId, data.userId, expandedOption);
                if (typeof conversation == 'undefined') {
                    // Probably a new conversation, refresh the list.
                    this.loaded = false;
                    this.refreshData().finally(() => {
                        this.loaded = true;
                    });
                    return;
                }
                if (conversation.lastmessage != data.message || conversation.lastmessagedate != data.timecreated / 1000) {
                    const isNewer = data.timecreated / 1000 > (conversation.lastmessagedate || 0);
                    // An existing conversation has a new message, update the last message.
                    conversation.lastmessage = data.message;
                    conversation.lastmessagedate = data.timecreated / 1000;
                    // Sort the affected list.
                    const option = this.getConversationOption(conversation);
                    option.conversations = services_messages["a" /* AddonMessages */].sortConversations(option.conversations || []);
                    if (isNewer) {
                        // The last message is newer than the previous one, scroll to top to keep viewing the conversation.
                        (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                    }
                }
            }, this.siteId);
            // Update conversations when a message is read.
            this.readChangedObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].READ_CHANGED_EVENT, (data) => {
                if (data.conversationId) {
                    const conversation = this.findConversation(data.conversationId);
                    if (typeof conversation != 'undefined') {
                        // A conversation has been read reset counter.
                        conversation.unreadcount = 0;
                        // Conversations changed, invalidate them and refresh unread counts.
                        services_messages["a" /* AddonMessages */].invalidateConversations(this.siteId);
                        services_messages["a" /* AddonMessages */].refreshUnreadConversationCounts(this.siteId);
                    }
                }
            }, this.siteId);
            // Load a discussion if we receive an event to do so.
            this.openConversationObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].OPEN_CONVERSATION_EVENT, (data) => {
                if (data.conversationId || data.userId) {
                    this.gotoConversation(data.conversationId, data.userId);
                }
            }, this.siteId);
            // Refresh the view when the app is resumed.
            this.appResumeSubscription = singletons["C" /* Platform */].resume.subscribe(() => {
                if (!this.loaded) {
                    return;
                }
                this.loaded = false;
                this.refreshData().finally(() => {
                    this.loaded = true;
                });
            });
            // Update conversations if we receive an event to do so.
            this.updateConversationListObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, (data) => {
                if (data && data.action == 'mute') {
                    // If the conversation is displayed, change its muted value.
                    const expandedOption = this.getExpandedOption();
                    if (expandedOption && expandedOption.conversations) {
                        const conversation = this.findConversation(data.conversationId, undefined, expandedOption);
                        if (conversation) {
                            conversation.ismuted = !!data.value;
                        }
                    }
                    return;
                }
                this.refreshData();
            }, this.siteId);
            // If a message push notification is received, refresh the view.
            this.pushObserver = push_delegate["a" /* CorePushNotificationsDelegate */].on('receive')
                .subscribe((notification) => {
                // New message received. If it's from current site, refresh the data.
                if (utils["a" /* CoreUtils */].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                    // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                    this.refreshData(undefined, false);
                }
            });
            // Update unread conversation counts.
            this.cronObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].UNREAD_CONVERSATION_COUNTS_EVENT, (data) => {
                this.favourites.unread = data.favourites;
                this.individual.unread = data.individual + data.self; // Self is only returned if it's not favourite.
                this.group.unread = data.group;
            }, this.siteId);
            // Update the contact requests badge.
            this.contactRequestsCountObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
                this.contactRequestsCount = data.count;
            }, this.siteId);
            // Update block status of a user.
            this.memberInfoObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, (data) => {
                if (!data.userBlocked && !data.userUnblocked) {
                    // The block status has not changed, ignore.
                    return;
                }
                const expandedOption = this.getExpandedOption();
                if (expandedOption == this.individual || expandedOption == this.favourites) {
                    if (!expandedOption.conversations || expandedOption.conversations.length <= 0) {
                        return;
                    }
                    const conversation = this.findConversation(undefined, data.userId, expandedOption);
                    if (conversation) {
                        conversation.isblocked = data.userBlocked;
                    }
                }
            }, this.siteId);
        }
        /**
         * Component loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.route.queryParams.subscribe((params) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    // When a child page loads this callback is triggered too.
                    const conversationId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('conversationId', { params });
                    const userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId', { params });
                    if (conversationId || userId) {
                        // Update the selected ones.
                        this.selectedConversationId = conversationId;
                        this.selectedUserId = userId;
                    }
                }));
                yield this.fetchData();
                if (!this.selectedConversationId && !this.selectedUserId && screen["a" /* CoreScreen */].isTablet) {
                    // Load the first conversation.
                    let conversation;
                    const expandedOption = this.getExpandedOption();
                    if (expandedOption && expandedOption.conversations.length) {
                        conversation = expandedOption.conversations[0];
                        if (conversation) {
                            this.gotoConversation(conversation.id);
                        }
                    }
                }
            });
        }
        /**
         * Fetch conversations.
         *
         * @param refreshUnreadCounts Whether to refresh unread counts.
         * @return Promise resolved when done.
         */
        fetchData(refreshUnreadCounts = true) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Load the amount of conversations and contact requests.
                const promises = [];
                promises.push(this.fetchConversationCounts());
                // View updated by the events observers.
                promises.push(services_messages["a" /* AddonMessages */].getContactRequestsCount(this.siteId));
                if (refreshUnreadCounts) {
                    promises.push(services_messages["a" /* AddonMessages */].refreshUnreadConversationCounts(this.siteId));
                }
                try {
                    yield Promise.all(promises);
                    // The expanded status hasn't been initialized. Do it now.
                    if (typeof this.favourites.expanded == 'undefined' && (this.selectedConversationId || this.selectedUserId)) {
                        // A certain conversation should be opened.
                        // We don't know which option it belongs to, so we need to fetch the data for all of them.
                        const promises = [];
                        promises.push(this.fetchDataForOption(this.favourites, false));
                        promises.push(this.fetchDataForOption(this.group, false));
                        promises.push(this.fetchDataForOption(this.individual, false));
                        yield Promise.all(promises);
                        // All conversations have been loaded, find the one we need to load and expand its option.
                        const conversation = this.findConversation(this.selectedConversationId, this.selectedUserId);
                        if (conversation) {
                            const option = this.getConversationOption(conversation);
                            yield this.expandOption(option);
                            this.loaded = true;
                            return;
                        }
                    }
                    // Load the data for the expanded option.
                    yield this.fetchDataForExpandedOption();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                }
                this.loaded = true;
            });
        }
        /**
         * Fetch data for the expanded option.
         *
         * @return Promise resolved when done.
         */
        fetchDataForExpandedOption() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (typeof this.favourites.expanded == 'undefined') {
                    // Calculate which option should be expanded initially.
                    this.favourites.expanded = this.favourites.count != 0 && !this.group.unread && !this.individual.unread;
                    this.group.expanded = !this.favourites.expanded && this.group.count != 0 && !this.individual.unread;
                    this.individual.expanded = !this.favourites.expanded && !this.group.expanded;
                }
                this.loadCurrentListElement();
                const expandedOption = this.getExpandedOption();
                if (expandedOption) {
                    yield this.fetchDataForOption(expandedOption, false);
                }
            });
        }
        /**
         * Fetch data for a certain option.
         *
         * @param option The option to fetch data for.
         * @param loadingMore Whether we are loading more data or just the first ones.
         * @param getCounts Whether to get counts data.
         * @return Promise resolved when done.
         */
        fetchDataForOption(option, loadingMore = false, getCounts = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                option.loadMoreError = false;
                const limitFrom = loadingMore ? option.conversations.length : 0;
                const promises = [];
                let data = {
                    conversations: [],
                    canLoadMore: false,
                };
                let offlineMessages = [];
                // Get the conversations and, if needed, the offline messages. Always try to get the latest data.
                promises.push(services_messages["a" /* AddonMessages */].invalidateConversations(this.siteId).then(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    data = yield services_messages["a" /* AddonMessages */].getConversations(option.type, option.favourites, limitFrom, this.siteId);
                    return;
                })));
                if (!loadingMore) {
                    promises.push(messages_offline["a" /* AddonMessagesOffline */].getAllMessages().then((messages) => {
                        offlineMessages = messages;
                        return;
                    }));
                }
                if (getCounts) {
                    promises.push(this.fetchConversationCounts());
                    promises.push(services_messages["a" /* AddonMessages */].refreshUnreadConversationCounts(this.siteId));
                }
                yield Promise.all(promises);
                if (loadingMore) {
                    option.conversations = option.conversations.concat(data.conversations);
                    option.canLoadMore = data.canLoadMore;
                }
                else {
                    option.conversations = data.conversations;
                    option.canLoadMore = data.canLoadMore;
                    if (offlineMessages && offlineMessages.length) {
                        yield this.loadOfflineMessages(option, offlineMessages);
                        // Sort the conversations, the offline messages could affect the order.
                        option.conversations = services_messages["a" /* AddonMessages */].sortConversations(option.conversations);
                    }
                }
            });
        }
        /**
         * Fetch conversation counts.
         *
         * @return Promise resolved when done.
         */
        fetchConversationCounts() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Always try to get the latest data.
                yield services_messages["a" /* AddonMessages */].invalidateConversationCounts(this.siteId);
                const counts = yield services_messages["a" /* AddonMessages */].getConversationCounts(this.siteId);
                this.favourites.count = counts.favourites;
                this.individual.count = counts.individual + counts.self; // Self is only returned if it's not favourite.
                this.group.count = counts.group;
            });
        }
        /**
         * Find a conversation in the list of loaded conversations.
         *
         * @param conversationId The conversation ID to search.
         * @param userId User ID to search (if no conversationId).
         * @param option The option to search in. If not defined, search in all options.
         * @return Conversation.
         */
        findConversation(conversationId, userId, option) {
            if (conversationId) {
                const conversations = option
                    ? option.conversations
                    : (this.favourites.conversations.concat(this.group.conversations).concat(this.individual.conversations));
                return conversations.find((conv) => conv.id == conversationId);
            }
            const conversations = option
                ? option.conversations
                : this.favourites.conversations.concat(this.individual.conversations);
            return conversations.find((conv) => conv.userid == userId);
        }
        /**
         * Get the option that is currently expanded, undefined if they are all collapsed.
         *
         * @return Option currently expanded.
         */
        getExpandedOption() {
            if (this.favourites.expanded) {
                return this.favourites;
            }
            else if (this.group.expanded) {
                return this.group;
            }
            else if (this.individual.expanded) {
                return this.individual;
            }
        }
        /**
         * Navigate to contacts view.
         */
        gotoContacts() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('contacts');
        }
        /**
         * Navigate to a particular conversation.
         *
         * @param conversationId Conversation Id to load.
         * @param userId User of the conversation. Only if there is no conversationId.
         * @param messageId Message to scroll after loading the discussion. Used when searching.
         */
        gotoConversation(conversationId, userId, messageId) {
            this.selectedConversationId = conversationId;
            this.selectedUserId = userId;
            const params = {};
            if (conversationId) {
                params.conversationId = conversationId;
            }
            if (userId) {
                params.userId = userId;
            }
            if (messageId) {
                params.message = messageId;
            }
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/group-conversations/discussion');
            const path = (splitViewLoaded ? '../' : '') + 'discussion';
            services_navigator["a" /* CoreNavigator */].navigate(path, { params });
        }
        /**
         * Navigate to message settings.
         */
        gotoSettings() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('../preferences');
        }
        /**
         * Function to load more conversations.
         *
         * @param option The option to fetch data for.
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Promise resolved when done.
         */
        loadMoreConversations(option, infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchDataForOption(option, true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                    option.loadMoreError = true;
                }
                infiniteComplete && infiniteComplete();
            });
        }
        /**
         * Load offline messages into the conversations.
         *
         * @param option The option where the messages should be loaded.
         * @param messages Offline messages.
         * @return Promise resolved when done.
         */
        loadOfflineMessages(option, messages) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                messages.forEach((message) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    if ('conversationid' in message) {
                        // It's an existing conversation. Search it in the current option.
                        let conversation = this.findConversation(message.conversationid, undefined, option);
                        if (conversation) {
                            // Check if it's the last message. Offline messages are considered more recent than sent messages.
                            if (typeof conversation.lastmessage === 'undefined' || conversation.lastmessage === null ||
                                !conversation.lastmessagepending || (conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                                this.addLastOfflineMessage(conversation, message);
                            }
                        }
                        else {
                            // Conversation not found, it could be an old one or the message could belong to another option.
                            conversation = {
                                id: message.conversationid,
                                type: ((_a = message.conversation) === null || _a === void 0 ? void 0 : _a.type) || services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                                membercount: ((_b = message.conversation) === null || _b === void 0 ? void 0 : _b.membercount) || 0,
                                ismuted: ((_c = message.conversation) === null || _c === void 0 ? void 0 : _c.ismuted) || false,
                                isfavourite: ((_d = message.conversation) === null || _d === void 0 ? void 0 : _d.isfavourite) || false,
                                isread: ((_e = message.conversation) === null || _e === void 0 ? void 0 : _e.isread) || false,
                                members: ((_f = message.conversation) === null || _f === void 0 ? void 0 : _f.members) || [],
                                messages: ((_g = message.conversation) === null || _g === void 0 ? void 0 : _g.messages) || [],
                                candeletemessagesforallusers: ((_h = message.conversation) === null || _h === void 0 ? void 0 : _h.candeletemessagesforallusers) || false,
                                userid: 0,
                                name: (_j = message.conversation) === null || _j === void 0 ? void 0 : _j.name,
                                imageurl: ((_k = message.conversation) === null || _k === void 0 ? void 0 : _k.imageurl) || '',
                            };
                            if (this.getConversationOption(conversation) == option) {
                                // Message belongs to current option, add the conversation.
                                this.addLastOfflineMessage(conversation, message);
                                this.addOfflineConversation(conversation);
                            }
                        }
                    }
                    else if (option.type == services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL) {
                        // It's a new conversation. Check if we already created it (there is more than one message for the same user).
                        const conversation = this.findConversation(undefined, message.touserid, option);
                        message.text = message.smallmessage;
                        if (conversation) {
                            // Check if it's the last message. Offline messages are considered more recent than sent messages.
                            if ((conversation.lastmessagedate || 0) <= message.timecreated / 1000) {
                                this.addLastOfflineMessage(conversation, message);
                            }
                        }
                        else {
                            // Get the user data and create a new conversation if it belongs to the current option.
                            promises.push(services_user["a" /* CoreUser */].getProfile(message.touserid, undefined, true).catch(() => {
                                // User not found.
                            }).then((user) => {
                                const conversation = {
                                    id: 0,
                                    type: services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_INDIVIDUAL,
                                    membercount: 0,
                                    ismuted: false,
                                    isfavourite: false,
                                    isread: false,
                                    members: [],
                                    messages: [],
                                    candeletemessagesforallusers: false,
                                    userid: message.touserid,
                                    name: user ? user.fullname : String(message.touserid),
                                    imageurl: user ? user.profileimageurl : '',
                                };
                                this.addLastOfflineMessage(conversation, message);
                                this.addOfflineConversation(conversation);
                                return;
                            }));
                        }
                    }
                });
                yield Promise.all(promises);
            });
        }
        /**
         * Add an offline conversation into the right list of conversations.
         *
         * @param conversation Offline conversation to add.
         */
        addOfflineConversation(conversation) {
            const option = this.getConversationOption(conversation);
            option.conversations.unshift(conversation);
        }
        /**
         * Add a last offline message into a conversation.
         *
         * @param conversation Conversation where to put the last message.
         * @param message Offline message to add.
         */
        addLastOfflineMessage(conversation, message) {
            conversation.lastmessage = message.text;
            conversation.lastmessagedate = message.timecreated / 1000;
            conversation.lastmessagepending = true;
            conversation.sentfromcurrentuser = true;
        }
        /**
         * Given a conversation, return its option (favourites, group, individual).
         *
         * @param conversation Conversation to check.
         * @return Option object.
         */
        getConversationOption(conversation) {
            if (conversation.isfavourite) {
                return this.favourites;
            }
            if (conversation.type == services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_GROUP) {
                return this.group;
            }
            return this.individual;
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param refreshUnreadCounts Whether to refresh unread counts.
         * @return Promise resolved when done.
         */
        refreshData(refresher, refreshUnreadCounts = true) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Don't invalidate conversations and so, they always try to get latest data.
                try {
                    yield services_messages["a" /* AddonMessages */].invalidateContactRequestsCountCache(this.siteId);
                }
                finally {
                    try {
                        yield this.fetchData(refreshUnreadCounts);
                    }
                    finally {
                        if (refresher) {
                            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                        }
                    }
                }
            });
        }
        /**
         * Toogle the visibility of an option (expand/collapse).
         *
         * @param option The option to expand/collapse.
         */
        toggle(option) {
            if (option.expanded) {
                // Already expanded, close it.
                option.expanded = false;
                this.loadCurrentListElement();
            }
            else {
                // Pass getCounts=true to update the counts everytime the user expands an option.
                this.expandOption(option, true).catch((error) => {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                });
            }
        }
        /**
         * Expand a certain option.
         *
         * @param option The option to expand.
         * @param getCounts Whether to get counts data.
         * @return Promise resolved when done.
         */
        expandOption(option, getCounts = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Collapse all and expand the right one.
                this.favourites.expanded = false;
                this.group.expanded = false;
                this.individual.expanded = false;
                option.expanded = true;
                option.loading = true;
                try {
                    yield this.fetchDataForOption(option, false, getCounts);
                    this.loadCurrentListElement();
                }
                catch (error) {
                    option.expanded = false;
                    throw error;
                }
                finally {
                    option.loading = false;
                }
            });
        }
        /**
         * Load the current list element based on the expanded list.
         */
        loadCurrentListElement() {
            if (this.favourites.expanded) {
                this.currentListEl = this.favListEl && this.favListEl.nativeElement;
            }
            else if (this.group.expanded) {
                this.currentListEl = this.groupListEl && this.groupListEl.nativeElement;
            }
            else if (this.individual.expanded) {
                this.currentListEl = this.indListEl && this.indListEl.nativeElement;
            }
            else {
                this.currentListEl = undefined;
            }
        }
        /**
         * Navigate to the search page.
         */
        gotoSearch() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('search');
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.appResumeSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
            (_c = this.pushObserver) === null || _c === void 0 ? void 0 : _c.unsubscribe();
            (_d = this.readChangedObserver) === null || _d === void 0 ? void 0 : _d.off();
            (_e = this.cronObserver) === null || _e === void 0 ? void 0 : _e.off();
            (_f = this.openConversationObserver) === null || _f === void 0 ? void 0 : _f.off();
            (_g = this.updateConversationListObserver) === null || _g === void 0 ? void 0 : _g.off();
            (_h = this.contactRequestsCountObserver) === null || _h === void 0 ? void 0 : _h.off();
            (_j = this.memberInfoObserver) === null || _j === void 0 ? void 0 : _j.off();
        }
    }
    AddonMessagesGroupConversationsPage.ɵfac = function AddonMessagesGroupConversationsPage_Factory(t) { return new (t || AddonMessagesGroupConversationsPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonMessagesGroupConversationsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesGroupConversationsPage, selectors: [["page-addon-messages-group-conversations"]], viewQuery: function AddonMessagesGroupConversationsPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
                core["ud" /* ɵɵviewQuery */](_c1, true);
                core["ud" /* ɵɵviewQuery */](_c2, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.favListEl = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.groupListEl = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.indListEl = _t.first);
            }
        }, decls: 81, vars: 86, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], [3, "click"], ["name", "fas-cog", "slot", "icon-only", "aria-hidden", "true"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil", "message"], ["detail", "true", "button", "", 1, "ion-text-wrap", "addon-message-discussion", 3, "click"], ["name", "fas-address-book", "slot", "start", "aria-hidden", "true"], ["slot", "end", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], ["button", "", "sticky", "true", "aria-controls", "addon-messages-groupconversations-favourite", "role", "heading", "detail", "false", 1, "ion-text-wrap", "divider", 3, "click"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["id", "addon-messages-groupconversations-favourite", 3, "hidden"], ["favlist", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "enabled", "error", "action"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["button", "", "sticky", "true", "aria-controls", "addon-messages-groupconversations-group", "role", "heading", "detail", "false", 1, "divider", "ion-text-wrap", 3, "click"], ["id", "addon-messages-groupconversations-group", 3, "hidden"], ["grouplist", ""], ["button", "", "sticky", "true", "aria-controls", "addon-messages-groupconversations-individual", "role", "heading", "detail", "false", 1, "divider", "ion-text-wrap", 3, "click"], ["id", "addon-messages-groupconversations-individual", 3, "hidden"], ["indlist", ""], ["conversationsTemplate", ""], ["slot", "end", "aria-hidden", "true"], [1, "sr-only"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true"], [1, "ion-text-wrap"], [1, "ion-text-center"], ["class", "ion-text-wrap addon-message-discussion", "button", "", "detail", "false", 3, "id", "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", 1, "ion-text-wrap", "addon-message-discussion", 3, "id", "click"], ["slot", "start", 4, "ngIf"], ["core-user-avatar", "", "slot", "start", 3, "user", "linkProfile", "checkOnline", 4, "ngIf"], [1, "flex-row", "ion-justify-content-between"], [1, "item-heading"], ["contextLevel", "system", 3, "text", "contextInstanceId"], ["name", "fas-user-slash", 3, "title", 4, "ngIf"], ["name", "fas-volume-mute", 3, "title", 4, "ngIf"], [4, "ngIf"], [1, "addon-message-last-message"], ["class", "addon-message-last-message-user", 4, "ngIf"], ["clean", "true", "singleLine", "true", "contextLevel", "system", 1, "addon-message-last-message-text", 3, "text", "contextInstanceId"], ["core-external-content", "", "onError", "this.src='assets/img/group-avatar.png'", 3, "src", "alt"], ["core-user-avatar", "", "slot", "start", 3, "user", "linkProfile", "checkOnline"], ["name", "fas-user-slash", 3, "title"], ["name", "fas-volume-mute", 3, "title"], ["class", "addon-message-last-message-date", 4, "ngIf"], ["aria-label", "true", 4, "ngIf"], [1, "addon-message-last-message-date"], ["aria-label", "true"], [1, "addon-message-last-message-user"]], template: function AddonMessagesGroupConversationsPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-buttons", 2);
                core["Ec" /* ɵɵelementStart */](9, "ion-button", 3);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_button_click_9_listener() { return ctx.gotoSearch(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-button", 5);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_button_click_12_listener() { return ctx.gotoSettings(); });
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["zc" /* ɵɵelement */](14, "ion-icon", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](15, "core-context-menu");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "ion-content");
                core["Ec" /* ɵɵelementStart */](17, "core-split-view");
                core["Ec" /* ɵɵelementStart */](18, "ion-refresher", 7);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesGroupConversationsPage_Template_ion_refresher_ionRefresh_18_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](19, "ion-refresher-content", 8);
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "core-loading", 9);
                core["Ec" /* ɵɵelementStart */](22, "ion-list");
                core["Ec" /* ɵɵelementStart */](23, "ion-item", 10);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_item_click_23_listener() { return ctx.gotoContacts(); });
                core["zc" /* ɵɵelement */](24, "ion-icon", 11);
                core["Ec" /* ɵɵelementStart */](25, "ion-label");
                core["Ec" /* ɵɵelementStart */](26, "h2");
                core["pd" /* ɵɵtext */](27);
                core["Pc" /* ɵɵpipe */](28, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](29, AddonMessagesGroupConversationsPage_ion_badge_29_Template, 2, 1, "ion-badge", 12);
                core["nd" /* ɵɵtemplate */](30, AddonMessagesGroupConversationsPage_span_30_Template, 3, 6, "span", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](31, "ion-item", 14);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_item_click_31_listener() { return ctx.toggle(ctx.favourites); });
                core["Pc" /* ɵɵpipe */](32, "translate");
                core["nd" /* ɵɵtemplate */](33, AddonMessagesGroupConversationsPage_ion_icon_33_Template, 1, 0, "ion-icon", 15);
                core["nd" /* ɵɵtemplate */](34, AddonMessagesGroupConversationsPage_ion_icon_34_Template, 1, 0, "ion-icon", 16);
                core["Ec" /* ɵɵelementStart */](35, "ion-label");
                core["Ec" /* ɵɵelementStart */](36, "h2");
                core["pd" /* ɵɵtext */](37);
                core["Pc" /* ɵɵpipe */](38, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](39, AddonMessagesGroupConversationsPage_ion_badge_39_Template, 2, 1, "ion-badge", 12);
                core["nd" /* ɵɵtemplate */](40, AddonMessagesGroupConversationsPage_span_40_Template, 3, 6, "span", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](41, "div", 17, 18);
                core["nd" /* ɵɵtemplate */](43, AddonMessagesGroupConversationsPage_ng_container_43_Template, 1, 0, "ng-container", 19);
                core["Ec" /* ɵɵelementStart */](44, "core-infinite-loading", 20);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesGroupConversationsPage_Template_core_infinite_loading_action_44_listener($event) { return ctx.loadMoreConversations(ctx.favourites, $event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](45, AddonMessagesGroupConversationsPage_ion_item_45_Template, 5, 3, "ion-item", 21);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](46, AddonMessagesGroupConversationsPage_ion_item_46_Template, 4, 3, "ion-item", 22);
                core["Ec" /* ɵɵelementStart */](47, "ion-item", 23);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_item_click_47_listener() { return ctx.toggle(ctx.group); });
                core["Pc" /* ɵɵpipe */](48, "translate");
                core["nd" /* ɵɵtemplate */](49, AddonMessagesGroupConversationsPage_ion_icon_49_Template, 1, 0, "ion-icon", 15);
                core["nd" /* ɵɵtemplate */](50, AddonMessagesGroupConversationsPage_ion_icon_50_Template, 1, 0, "ion-icon", 16);
                core["Ec" /* ɵɵelementStart */](51, "ion-label");
                core["Ec" /* ɵɵelementStart */](52, "h2");
                core["pd" /* ɵɵtext */](53);
                core["Pc" /* ɵɵpipe */](54, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](55, AddonMessagesGroupConversationsPage_ion_badge_55_Template, 2, 1, "ion-badge", 12);
                core["nd" /* ɵɵtemplate */](56, AddonMessagesGroupConversationsPage_span_56_Template, 3, 6, "span", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](57, "div", 24, 25);
                core["nd" /* ɵɵtemplate */](59, AddonMessagesGroupConversationsPage_ng_container_59_Template, 1, 0, "ng-container", 19);
                core["Ec" /* ɵɵelementStart */](60, "core-infinite-loading", 20);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesGroupConversationsPage_Template_core_infinite_loading_action_60_listener($event) { return ctx.loadMoreConversations(ctx.group, $event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](61, AddonMessagesGroupConversationsPage_ion_item_61_Template, 5, 3, "ion-item", 21);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](62, AddonMessagesGroupConversationsPage_ion_item_62_Template, 4, 3, "ion-item", 22);
                core["Ec" /* ɵɵelementStart */](63, "ion-item", 26);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesGroupConversationsPage_Template_ion_item_click_63_listener() { return ctx.toggle(ctx.individual); });
                core["Pc" /* ɵɵpipe */](64, "translate");
                core["nd" /* ɵɵtemplate */](65, AddonMessagesGroupConversationsPage_ion_icon_65_Template, 1, 0, "ion-icon", 15);
                core["nd" /* ɵɵtemplate */](66, AddonMessagesGroupConversationsPage_ion_icon_66_Template, 1, 0, "ion-icon", 16);
                core["Ec" /* ɵɵelementStart */](67, "ion-label");
                core["Ec" /* ɵɵelementStart */](68, "h2");
                core["pd" /* ɵɵtext */](69);
                core["Pc" /* ɵɵpipe */](70, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](71, AddonMessagesGroupConversationsPage_ion_badge_71_Template, 2, 1, "ion-badge", 12);
                core["nd" /* ɵɵtemplate */](72, AddonMessagesGroupConversationsPage_span_72_Template, 3, 6, "span", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](73, "div", 27, 28);
                core["nd" /* ɵɵtemplate */](75, AddonMessagesGroupConversationsPage_ng_container_75_Template, 1, 0, "ng-container", 19);
                core["Ec" /* ɵɵelementStart */](76, "core-infinite-loading", 20);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesGroupConversationsPage_Template_core_infinite_loading_action_76_listener($event) { return ctx.loadMoreConversations(ctx.individual, $event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](77, AddonMessagesGroupConversationsPage_ion_item_77_Template, 5, 3, "ion-item", 21);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](78, AddonMessagesGroupConversationsPage_ion_item_78_Template, 4, 3, "ion-item", 22);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](79, AddonMessagesGroupConversationsPage_ng_template_79_Template, 1, 1, "ng-template", null, 29, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                const _r26 = core["fd" /* ɵɵreference */](80);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 56, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 58, "addon.messages.messages"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 60, "addon.messages.searchcombined"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](13, 62, "addon.messages.messagepreferences"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded || !ctx.currentListEl);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](20, 64, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded)("message", ctx.loadingMessage);
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](28, 66, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.contactRequestsCount > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.contactRequestsCount > 0);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](32, 68, ctx.favourites.expanded ? "core.collapse" : "core.expand"))("aria-expanded", ctx.favourites.expanded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.favourites.expanded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.favourites.expanded);
                core["lc" /* ɵɵadvance */](3);
                core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](38, 70, "core.favourites"), " (", ctx.favourites.count, ")");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.favourites.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.favourites.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.favourites.conversations || !ctx.favourites.expanded || ctx.favourites.loading);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](80, _c4, ctx.favourites.conversations));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.favourites.canLoadMore)("error", ctx.favourites.loadMoreError);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.favourites.conversations && ctx.favourites.conversations.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.favourites.loading);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](48, 72, ctx.group.expanded ? "core.collapse" : "core.expand"))("aria-expanded", ctx.group.expanded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.group.expanded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.group.expanded);
                core["lc" /* ɵɵadvance */](3);
                core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](54, 74, "addon.messages.groupconversations"), " (", ctx.group.count, ")");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.group.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.group.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.group.conversations || !ctx.group.expanded || ctx.group.loading);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](82, _c4, ctx.group.conversations));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.group.canLoadMore)("error", ctx.group.loadMoreError);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.group.conversations && ctx.group.conversations.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.group.loading);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](64, 76, ctx.individual.expanded ? "core.collapse" : "core.expand"))("aria-expanded", ctx.individual.expanded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.individual.expanded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.individual.expanded);
                core["lc" /* ɵɵadvance */](3);
                core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](70, 78, "addon.messages.individualconversations"), " (", ctx.individual.count, ")");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.individual.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.individual.unread);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.individual.conversations || !ctx.individual.expanded || ctx.individual.loading);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r26)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](84, _c4, ctx.individual.conversations));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.individual.canLoadMore)("error", ctx.individual.loadMoreError);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.individual.conversations && ctx.individual.conversations.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.individual.loading);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["t" /* NgIf */], common["A" /* NgTemplateOutlet */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["j" /* IonBadge */], ionic_angular["pb" /* IonSpinner */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["f" /* IonAvatar */], external_content["a" /* CoreExternalContentDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["V" /* IonNote */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */]], styles: ["[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-right:0;margin-left:0}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-start;margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:3px;align-self:flex-end}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{white-space:nowrap;color:var(--ion-text-color);margin-right:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:2px;margin-left:0}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{margin-left:2px;margin-right:0}"] });
    return AddonMessagesGroupConversationsPage;
})();

// EXTERNAL MODULE: ./src/addons/messages/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("OQOI");

// CONCATENATED MODULE: ./src/addons/messages/pages/group-conversations/group-conversations.module.ts
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










const mobileRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* AddonMessagesMainMenuHandlerService */].PAGE_NAME,
        },
        component: group_conversations_page_AddonMessagesGroupConversationsPage,
    },
    messages_lazy_module["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* AddonMessagesMainMenuHandlerService */].PAGE_NAME,
        },
        component: group_conversations_page_AddonMessagesGroupConversationsPage,
        children: [
            messages_lazy_module["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let group_conversations_module_AddonMessagesGroupConversationsPageModule = /*@__PURE__*/ (() => {
    class AddonMessagesGroupConversationsPageModule {
    }
    AddonMessagesGroupConversationsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesGroupConversationsPageModule });
    AddonMessagesGroupConversationsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesGroupConversationsPageModule_Factory(t) { return new (t || AddonMessagesGroupConversationsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesGroupConversationsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](group_conversations_module_AddonMessagesGroupConversationsPageModule, { declarations: [group_conversations_page_AddonMessagesGroupConversationsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);