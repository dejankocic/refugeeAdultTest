(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "o7gM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return /* binding */ discussion_module_AddonMessagesDiscussionPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

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

// EXTERNAL MODULE: ./src/addons/messages/services/messages-sync.ts
var messages_sync = __webpack_require__("fTjU");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/logger.ts + 1 modules
var logger = __webpack_require__("3j9v");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./node_modules/ts-md5/dist/md5.js
var md5 = __webpack_require__("kScs");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/core/components/animations.ts
var animations = __webpack_require__("MUy3");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/external-content.ts
var external_content = __webpack_require__("NcPy");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/messages/components/conversation-info/conversation-info.ts

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















function AddonMessagesConversationInfoComponent_ion_item_14_core_format_text_7_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-format-text", 12);
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.conversation.subname)("contextInstanceId", 0);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonMessagesConversationInfoComponent_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "div", 10);
        core["zc" /* ɵɵelement */](3, "img", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["zc" /* ɵɵelement */](5, "core-format-text", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p");
        core["nd" /* ɵɵtemplate */](7, AddonMessagesConversationInfoComponent_ion_item_14_core_format_text_7_Template, 1, 2, "core-format-text", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "p");
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.conversation.imageurl, core["jd" /* ɵɵsanitizeUrl */])("alt", ctx_r0.conversation.name);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.conversation.name)("contextInstanceId", 0);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.conversation.subname);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](10, 6, "addon.messages.numparticipants", core["ad" /* ɵɵpureFunction1 */](9, _c0, ctx_r0.conversation.membercount)));
    }
}
function AddonMessagesConversationInfoComponent_ion_item_15_ion_icon_5_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 18);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.contactblocked"));
    }
}
function AddonMessagesConversationInfoComponent_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 14);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesConversationInfoComponent_ion_item_15_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const member_r3 = ctx.$implicit; const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.closeModal(member_r3.id); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 15);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 16);
        core["pd" /* ɵɵtext */](4);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesConversationInfoComponent_ion_item_15_ion_icon_5_Template, 2, 3, "ion-icon", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const member_r3 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", member_r3)("linkProfile", false)("checkOnline", member_r3.showonlinestatus);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", member_r3.fullname, " ");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", member_r3.isblocked);
    }
}
/**
 * Component that displays the list of conversations, including group conversations.
 */
let conversation_info_AddonMessagesConversationInfoComponent = /*@__PURE__*/ (() => {
    class AddonMessagesConversationInfoComponent {
        constructor(route) {
            this.route = route;
            this.conversationId = 0;
            this.loaded = false;
            this.members = [];
            this.canLoadMore = false;
            this.loadMoreError = false;
        }
        /**
         * Component loaded.
         */
        ngOnInit() {
            this.fetchData().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Fetch the required data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the conversation data first.
                try {
                    const conversation = yield services_messages["a" /* AddonMessages */].getConversation(this.conversationId, false, true, 0, 0);
                    this.conversation = conversation;
                    // Now get the members.
                    yield this.fetchMembers();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting members.');
                }
            });
        }
        /**
         * Get conversation members.
         *
         * @param loadingMore Whether we are loading more data or just the first ones.
         * @return Promise resolved when done.
         */
        fetchMembers(loadingMore) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                const limitFrom = loadingMore ? this.members.length : 0;
                const data = yield services_messages["a" /* AddonMessages */].getConversationMembers(this.conversationId, limitFrom);
                if (loadingMore) {
                    this.members = this.members.concat(data.members);
                }
                else {
                    this.members = data.members;
                }
                this.canLoadMore = data.canLoadMore;
            });
        }
        /**
         * Function to load more members.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadMoreMembers(infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchMembers(true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting members.');
                    this.loadMoreError = true;
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @return Promise resolved when done.
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(services_messages["a" /* AddonMessages */].invalidateConversation(this.conversationId));
                promises.push(services_messages["a" /* AddonMessages */].invalidateConversationMembers(this.conversationId));
                yield Promise.all(promises);
                yield this.fetchData().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Close modal.
         *
         * @param userId User conversation to load.
         */
        closeModal(userId) {
            singletons["x" /* ModalController */].dismiss(userId);
        }
    }
    AddonMessagesConversationInfoComponent.ɵfac = function AddonMessagesConversationInfoComponent_Factory(t) { return new (t || AddonMessagesConversationInfoComponent)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonMessagesConversationInfoComponent.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesConversationInfoComponent, selectors: [["page-addon-messages-conversation-info"]], inputs: { conversationId: "conversationId" }, decls: 17, vars: 15, consts: [["slot", "end"], ["fill", "clear", 3, "click"], ["name", "fas-times", "slot", "icon-only", "aria-hidden", "true"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-center", 4, "ngIf"], ["class", "ion-text-wrap addon-messages-conversation-item", "detail", "true", "button", "", 3, "click", 4, "ngFor", "ngForOf"], [3, "enabled", "error", "action"], [1, "ion-text-center"], [1, "large-avatar"], ["core-external-content", "", "onError", "this.src='assets/img/group-avatar.png'", 1, "avatar", 3, "src", "alt"], ["contextLevel", "system", 3, "text", "contextInstanceId"], ["contextLevel", "system", 3, "text", "contextInstanceId", 4, "ngIf"], ["detail", "true", "button", "", 1, "ion-text-wrap", "addon-messages-conversation-item", 3, "click"], ["slot", "start", 3, "user", "linkProfile", "checkOnline"], [1, "item-heading"], ["name", "fas-user-slash", 4, "ngIf"], ["name", "fas-user-slash"]], template: function AddonMessagesConversationInfoComponent_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "h2");
                core["pd" /* ɵɵtext */](3);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "ion-buttons", 0);
                core["Ec" /* ɵɵelementStart */](6, "ion-button", 1);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesConversationInfoComponent_Template_ion_button_click_6_listener() { return ctx.closeModal(); });
                core["Pc" /* ɵɵpipe */](7, "translate");
                core["zc" /* ɵɵelement */](8, "ion-icon", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesConversationInfoComponent_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](14, AddonMessagesConversationInfoComponent_ion_item_14_Template, 11, 11, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](15, AddonMessagesConversationInfoComponent_ion_item_15_Template, 6, 5, "ion-item", 7);
                core["Ec" /* ɵɵelementStart */](16, "core-infinite-loading", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesConversationInfoComponent_Template_core_infinite_loading_action_16_listener($event) { return ctx.loadMoreMembers($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 9, "addon.messages.groupinfo"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](7, 11, "core.close"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.conversation);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.members);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], common["s" /* NgForOf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], external_content["a" /* CoreExternalContentDirective */], format_text["a" /* CoreFormatTextDirective */], user_avatar["a" /* CoreUserAvatarComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonMessagesConversationInfoComponent;
})();

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/directives/long-press.ts
var long_press = __webpack_require__("iJls");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./src/core/components/send-message-form/send-message-form.ts
var send_message_form = __webpack_require__("O4u7");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/messages/pages/discussion/discussion.page.ts

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









































function AddonMessagesDiscussionPage_img_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 23);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("src", ctx_r0.conversationImage, core["jd" /* ɵɵsanitizeUrl */])("siteId", ctx_r0.siteId || null);
    }
}
function AddonMessagesDiscussionPage_core_user_avatar_7_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 24);
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("user", ctx_r1.otherMember)("linkProfile", false)("checkOnline", ctx_r1.otherMember.showonlinestatus);
    }
}
function AddonMessagesDiscussionPage_ion_icon_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 25);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.favourites"));
    }
}
function AddonMessagesDiscussionPage_ion_icon_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 26);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.mutedconversation"));
    }
}
function AddonMessagesDiscussionPage_ng_container_38_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "p", 27);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "p", 27);
        core["Ec" /* ɵɵelementStart */](5, "i");
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.messages.selfconversation"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 4, "addon.messages.selfconversationdefaultmessage"));
    }
}
function AddonMessagesDiscussionPage_ng_container_42_h3_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h3", 38);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, message_r9.timecreated, "strftimedayshort"), " ");
    }
}
function AddonMessagesDiscussionPage_ng_container_42_ion_chip_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-chip", 39);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "ion-icon", 40);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.messages.newmessages"));
    }
}
function AddonMessagesDiscussionPage_ng_container_42_div_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 41);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 42);
        core["Ec" /* ɵɵelementStart */](2, "div");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r14 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r14.members[message_r9.useridfrom])("linkProfile", false);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r14.members[message_r9.useridfrom].fullname);
    }
}
function AddonMessagesDiscussionPage_ng_container_42_div_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 17);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r15 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", message_r9.useridfrom == ctx_r15.currentUserId ? core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.you") : ctx_r15.members[message_r9.useridfrom].fullname, " ");
    }
}
function AddonMessagesDiscussionPage_ng_container_42_ion_note_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 7);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](2, 1, message_r9.timecreated, "strftimetime"));
    }
}
function AddonMessagesDiscussionPage_ng_container_42_ion_note_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 7);
        core["zc" /* ɵɵelement */](1, "ion-icon", 43);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.notsent"));
    }
}
function AddonMessagesDiscussionPage_ng_container_42_ion_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 44);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ng_container_42_ion_button_11_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r26); const ctx_r25 = core["Oc" /* ɵɵnextContext */](); const message_r9 = ctx_r25.$implicit; const index_r10 = ctx_r25.index; const ctx_r24 = core["Oc" /* ɵɵnextContext */](); return ctx_r24.deleteMessage(message_r9, index_r10); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 45);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", "fromRight");
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.messages.deletemessage"));
    }
}
function AddonMessagesDiscussionPage_ng_container_42_div_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "div", 46);
    }
}
function AddonMessagesDiscussionPage_ng_container_42_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesDiscussionPage_ng_container_42_h3_1_Template, 3, 4, "h3", 28);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesDiscussionPage_ng_container_42_ion_chip_2_Template, 5, 3, "ion-chip", 29);
        core["Ec" /* ɵɵelementStart */](3, "ion-item", 30);
        core["Mc" /* ɵɵlistener */]("longPress", function AddonMessagesDiscussionPage_ng_container_42_Template_ion_item_longPress_3_listener() { core["gd" /* ɵɵrestoreView */](_r28); const message_r9 = ctx.$implicit; const ctx_r27 = core["Oc" /* ɵɵnextContext */](); return ctx_r27.copyMessage(message_r9); });
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["nd" /* ɵɵtemplate */](5, AddonMessagesDiscussionPage_ng_container_42_div_5_Template, 4, 3, "div", 31);
        core["nd" /* ɵɵtemplate */](6, AddonMessagesDiscussionPage_ng_container_42_div_6_Template, 3, 3, "div", 32);
        core["Ec" /* ɵɵelementStart */](7, "p", 33);
        core["Ec" /* ɵɵelementStart */](8, "core-format-text", 34);
        core["Mc" /* ɵɵlistener */]("afterRender", function AddonMessagesDiscussionPage_ng_container_42_Template_core_format_text_afterRender_8_listener() { core["gd" /* ɵɵrestoreView */](_r28); const last_r11 = ctx.last; const ctx_r29 = core["Oc" /* ɵɵnextContext */](); return last_r11 && ctx_r29.scrollToBottom(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonMessagesDiscussionPage_ng_container_42_ion_note_9_Template, 3, 4, "ion-note", 35);
        core["nd" /* ɵɵtemplate */](10, AddonMessagesDiscussionPage_ng_container_42_ion_note_10_Template, 3, 3, "ion-note", 35);
        core["nd" /* ɵɵtemplate */](11, AddonMessagesDiscussionPage_ng_container_42_ion_button_11_Template, 3, 4, "ion-button", 36);
        core["nd" /* ɵɵtemplate */](12, AddonMessagesDiscussionPage_ng_container_42_div_12_Template, 1, 0, "div", 37);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const message_r9 = ctx.$implicit;
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r9.showDate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r5.unreadMessageFrom && message_r9.id == ctx_r5.unreadMessageFrom);
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("addon-message-mine", message_r9.useridfrom == ctx_r5.currentUserId)("addon-message-not-mine", message_r9.useridfrom != ctx_r5.currentUserId)("addon-message-no-user", !message_r9.showUserData);
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", message_r9.useridfrom == ctx_r5.currentUserId ? "" : "fromLeft");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r9.showUserData);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r9.showUserData);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", message_r9.text)("contextInstanceId", 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r9.pending);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r9.pending);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !message_r9.sending && ctx_r5.showDelete);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", message_r9.showTail);
    }
}
function AddonMessagesDiscussionPage_core_empty_box_43_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 47);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.nomessagesfound"));
    }
}
function AddonMessagesDiscussionPage_ion_fab_44_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 48);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 49);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ion_fab_44_Template_ion_fab_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r31); const ctx_r30 = core["Oc" /* ɵɵnextContext */](); return ctx_r30.scrollToFirstUnreadMessage(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 40);
        core["Ec" /* ɵɵelementStart */](4, "span", 17);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "span", 50);
        core["pd" /* ɵɵtext */](8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 3, "addon.messages.newmessages"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.messages.newmessages"));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r7.newMessages);
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 56);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.unabletomessage"), " ");
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r39 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 57);
        core["Ec" /* ɵɵelementStart */](1, "p", 27);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 58);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ion_footer_45_div_3_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r39); const ctx_r38 = core["Oc" /* ɵɵnextContext */](2); return ctx_r38.unblockUser(); });
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.messages.youhaveblockeduser"));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.messages.unblockuser"), " ");
    }
}
const discussion_page_c0 = function (a0) { return { $a: a0 }; };
function AddonMessagesDiscussionPage_ion_footer_45_div_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r41 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 57);
        core["Ec" /* ɵɵelementStart */](1, "p", 27);
        core["Ec" /* ɵɵelementStart */](2, "strong");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p", 27);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 58);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ion_footer_45_div_4_Template_ion_button_click_8_listener() { core["gd" /* ɵɵrestoreView */](_r41); const ctx_r40 = core["Oc" /* ɵɵnextContext */](2); return ctx_r40.createContactRequest(); });
        core["pd" /* ɵɵtext */](9);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r34 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](4, 3, "addon.messages.isnotinyourcontacts", core["ad" /* ɵɵpureFunction1 */](11, discussion_page_c0, ctx_r34.otherMember.fullname)));
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](7, 6, "addon.messages.requirecontacttomessage", core["ad" /* ɵɵpureFunction1 */](13, discussion_page_c0, ctx_r34.otherMember.fullname)));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 9, "addon.messages.sendcontactrequest"), " ");
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r43 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 57);
        core["Ec" /* ɵɵelementStart */](1, "p", 27);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-button", 58);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ion_footer_45_div_5_Template_ion_button_click_4_listener() { core["gd" /* ɵɵrestoreView */](_r43); const ctx_r42 = core["Oc" /* ɵɵnextContext */](2); return ctx_r42.confirmContactRequest(); });
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-button", 59);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussionPage_ion_footer_45_div_5_Template_ion_button_click_7_listener() { core["gd" /* ɵɵrestoreView */](_r43); const ctx_r44 = core["Oc" /* ɵɵnextContext */](2); return ctx_r44.declineContactRequest(); });
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r35 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](3, 3, "addon.messages.userwouldliketocontactyou", core["ad" /* ɵɵpureFunction1 */](10, discussion_page_c0, ctx_r35.otherMember.fullname)));
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 6, "addon.messages.acceptandaddcontact"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](9, 8, "addon.messages.decline"), " ");
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_div_6_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 27);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r45 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "addon.messages.yourcontactrequestpending", core["ad" /* ɵɵpureFunction1 */](4, discussion_page_c0, ctx_r45.otherMember.fullname)), " ");
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_div_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 57);
        core["Ec" /* ɵɵelementStart */](1, "p", 27);
        core["Ec" /* ɵɵelementStart */](2, "strong");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonMessagesDiscussionPage_ion_footer_45_div_6_p_5_Template, 3, 6, "p", 60);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r36 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.messages.contactrequestsent"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r36.otherMember);
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_core_send_message_form_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-send-message-form", 61);
        core["Mc" /* ɵɵlistener */]("onSubmit", function AddonMessagesDiscussionPage_ion_footer_45_core_send_message_form_7_Template_core_send_message_form_onSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r47); const ctx_r46 = core["Oc" /* ɵɵnextContext */](2); return ctx_r46.sendMessage($event); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r37 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("showKeyboard", ctx_r37.showKeyboard)("placeholder", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.messages.newmessage"));
    }
}
function AddonMessagesDiscussionPage_ion_footer_45_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-footer", 51);
        core["Ec" /* ɵɵelementStart */](1, "ion-toolbar", 52);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesDiscussionPage_ion_footer_45_p_2_Template, 3, 3, "p", 53);
        core["nd" /* ɵɵtemplate */](3, AddonMessagesDiscussionPage_ion_footer_45_div_3_Template, 7, 6, "div", 54);
        core["nd" /* ɵɵtemplate */](4, AddonMessagesDiscussionPage_ion_footer_45_div_4_Template, 11, 15, "div", 54);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesDiscussionPage_ion_footer_45_div_5_Template, 10, 12, "div", 54);
        core["nd" /* ɵɵtemplate */](6, AddonMessagesDiscussionPage_ion_footer_45_div_6_Template, 6, 4, "div", 54);
        core["nd" /* ɵɵtemplate */](7, AddonMessagesDiscussionPage_ion_footer_45_core_send_message_form_7_Template, 2, 4, "core-send-message-form", 55);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "unable");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "blocked");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "requiresContact" && ctx_r8.otherMember);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "requestReceived" && ctx_r8.otherMember);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "requestSent" || ctx_r8.footerType == "message" && ctx_r8.requestContactSent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r8.footerType == "message");
    }
}
/**
 * Page that displays a message discussion page.
 */
let discussion_page_AddonMessagesDiscussionPage = /*@__PURE__*/ (() => {
    class AddonMessagesDiscussionPage {
        constructor(route, elementRef) {
            this.route = route;
            this.elementRef = elementRef;
            this.fetching = false;
            this.messagesBeingSent = 0;
            this.pagesLoaded = 1;
            this.lastMessage = { text: '', timecreated: 0 };
            this.keepMessageMap = {};
            this.oldContentHeight = 0;
            this.scrollBottom = true;
            this.viewDestroyed = false;
            this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
            this.showInfo = false;
            this.loaded = false;
            this.showKeyboard = false;
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.messages = [];
            this.showDelete = false;
            this.canDelete = false;
            this.isGroup = false;
            this.members = {}; // Members that wrote a message, indexed by ID.
            this.favouriteIcon = 'fa-star';
            this.deleteIcon = 'fas-trash';
            this.blockIcon = 'fas-user-lock';
            this.addRemoveIcon = 'fas-user-plus';
            this.muteIcon = 'fas-bell-slash';
            this.favouriteIconSlash = false;
            this.muteEnabled = false;
            this.footerType = 'unable';
            this.requestContactSent = false;
            this.requestContactReceived = false;
            this.isSelf = false;
            this.newMessages = 0;
            this.unreadMessageFrom = 0;
            this.initialized = false;
            this.hostElement = elementRef.nativeElement;
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.groupMessagingEnabled = services_messages["a" /* AddonMessages */].isGroupMessagingEnabled();
            this.muteEnabled = services_messages["a" /* AddonMessages */].isMuteConversationEnabled();
            this.logger = logger["a" /* CoreLogger */].getInstance('AddonMessagesDiscussionPage');
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(messages_sync["b" /* AddonMessagesSyncProvider */].AUTO_SYNCED, (data) => {
                if ((data.userId && data.userId == this.userId) ||
                    (data.conversationId && data.conversationId == this.conversationId)) {
                    // Fetch messages.
                    this.fetchMessages();
                    // Show first warning if any.
                    if (data.warnings && data.warnings[0]) {
                        dom["a" /* CoreDomUtils */].showErrorModal(data.warnings[0]);
                    }
                }
            }, this.siteId);
            // Refresh data if info of a mamber of the conversation have changed.
            this.memberInfoObserver = events["b" /* CoreEvents */].on(services_messages["b" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, (data) => {
                if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                    this.fetchData();
                }
            }, this.siteId);
            // Recalculate footer position when keyboard is shown or hidden.
            this.keyboardObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].KEYBOARD_CHANGE, () => {
                // @todo probably not needed.
                // this.content.resize();
            });
        }
        /**
         * Runs when the page has loaded. This event only happens once per page being created.
         * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
         * Setup code for the page.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.route.queryParams.subscribe((params) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    const oldConversationId = this.conversationId;
                    const oldUserId = this.userId;
                    let forceScrollToBottom = false;
                    this.conversationId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('conversationId', { params }) || undefined;
                    this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId', { params }) || undefined;
                    this.showInfo = !params.hideInfo;
                    if (oldConversationId != this.conversationId || oldUserId != this.userId) {
                        // Showing reload again can break animations.
                        this.loaded = false;
                        this.initialized = false;
                        forceScrollToBottom = true;
                    }
                    this.showKeyboard = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('showKeyboard', { params }) || false;
                    yield this.fetchData();
                    this.scrollToBottom(forceScrollToBottom);
                }));
            });
        }
        /**
         * View has been initialized.
         */
        ngAfterViewInit() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
            });
        }
        /**
         * Adds a new message to the message list.
         *
         * @param message Message to be added.
         * @param keep If set the keep flag or not.
         * @return If message is not mine and was recently added.
         */
        addMessage(message, keep = true) {
            /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
               like VideoJS ID. Try to use id and fallback to text for offline messages. */
            const id = 'id' in message ? message.id : '';
            message.hash = md5["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
                message.useridfrom;
            let added = false;
            if (typeof this.keepMessageMap[message.hash] === 'undefined') {
                // Message not added to the list. Add it now.
                this.messages.push(message);
                added = message.useridfrom != this.currentUserId;
            }
            // Message needs to be kept in the list.
            this.keepMessageMap[message.hash] = keep;
            return added;
        }
        /**
         * Remove a message if it shouldn't be in the list anymore.
         *
         * @param hash Hash of the message to be removed.
         */
        removeMessage(hash) {
            if (this.keepMessageMap[hash]) {
                // Selected to keep it, clear the flag.
                this.keepMessageMap[hash] = false;
                return;
            }
            delete this.keepMessageMap[hash];
            const position = this.messages.findIndex((message) => message.hash == hash);
            if (position >= 0) {
                this.messages.splice(position, 1);
            }
        }
        /**
         * Convenience function to fetch the conversation data.
         *
         * @return Resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let loader;
                if (this.showLoadingModal) {
                    loader = yield dom["a" /* CoreDomUtils */].showModalLoading();
                }
                if (!this.groupMessagingEnabled && this.userId) {
                    // Get the user profile to retrieve the user fullname and image.
                    services_user["a" /* CoreUser */].getProfile(this.userId, undefined, true).then((user) => {
                        if (!this.title) {
                            this.title = user.fullname;
                        }
                        this.conversationImage = user.profileimageurl;
                        this.members[user.id] = user;
                        return;
                    }).catch(() => {
                        // Ignore errors.
                    });
                }
                // Synchronize messages if needed.
                try {
                    const syncResult = yield messages_sync["a" /* AddonMessagesSync */].syncDiscussion(this.conversationId, this.userId);
                    if (syncResult.warnings && syncResult.warnings[0]) {
                        dom["a" /* CoreDomUtils */].showErrorModal(syncResult.warnings[0]);
                    }
                }
                catch (_a) {
                    // Ignore errors;
                }
                try {
                    const promises = [];
                    if (this.groupMessagingEnabled) {
                        // Get the conversation ID if it exists and we don't have it yet.
                        const exists = yield this.getConversation(this.conversationId, this.userId);
                        if (exists) {
                            // Fetch the messages for the first time.
                            promises.push(this.fetchMessages());
                        }
                        if (this.userId) {
                            // Get the member info. Invalidate first to make sure we get the latest status.
                            promises.push(services_messages["a" /* AddonMessages */].invalidateMemberInfo(this.userId).then(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                                this.otherMember = yield services_messages["a" /* AddonMessages */].getMemberInfo(this.userId);
                                if (!exists && this.otherMember) {
                                    this.conversationImage = this.otherMember.profileimageurl;
                                    this.title = this.otherMember.fullname;
                                }
                                this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                                return;
                            })));
                        }
                        else {
                            this.otherMember = undefined;
                        }
                    }
                    else {
                        if (this.userId) {
                            // Fake the user member info.
                            promises.push(services_user["a" /* CoreUser */].getProfile(this.userId).then((user) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                                this.otherMember = {
                                    id: user.id,
                                    fullname: user.fullname,
                                    profileurl: '',
                                    profileimageurl: user.profileimageurl || '',
                                    profileimageurlsmall: user.profileimageurlsmall || '',
                                    isonline: false,
                                    showonlinestatus: false,
                                    isblocked: false,
                                    iscontact: false,
                                    isdeleted: false,
                                    canmessageevenifblocked: true,
                                    canmessage: true,
                                    requirescontact: false,
                                };
                                this.otherMember.isblocked = yield services_messages["a" /* AddonMessages */].isBlocked(this.userId);
                                this.otherMember.iscontact = yield services_messages["a" /* AddonMessages */].isContact(this.userId);
                                this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                                return;
                            })));
                        }
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages().then(() => {
                            if (!this.title && this.messages.length) {
                                // Didn't receive the fullname via argument. Try to get it from messages.
                                // It's possible that name cannot be resolved when no messages were yet exchanged.
                                const firstMessage = this.messages[0];
                                if ('usertofullname' in firstMessage) {
                                    if (firstMessage.useridto != this.currentUserId) {
                                        this.title = firstMessage.usertofullname || '';
                                    }
                                    else {
                                        this.title = firstMessage.userfromfullname || '';
                                    }
                                }
                            }
                            return;
                        }));
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    this.checkCanDelete();
                    this.loaded = true;
                    this.setPolling(); // Make sure we're polling messages.
                    this.setContactRequestInfo();
                    this.setFooterType();
                    loader && loader.dismiss();
                }
            });
        }
        /**
         * Runs when the page has fully entered and is now the active page.
         * This event will fire, whether it was the first load or a cached page.
         */
        ionViewDidEnter() {
            this.setPolling();
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            this.unsetPolling();
        }
        /**
         * Convenience function to fetch messages.
         *
         * @param messagesAreNew If messages loaded are new messages.
         * @return Resolved when done.
         */
        fetchMessages(messagesAreNew = true) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                if (this.messagesBeingSent > 0) {
                    // We do not poll while a message is being sent or we could confuse the user.
                    // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                    return;
                }
                else if (this.fetching) {
                    // Already fetching.
                    return;
                }
                else if (this.groupMessagingEnabled && !this.conversationId) {
                    // Don't have enough data to fetch messages.
                    throw new errors_error["a" /* CoreError */]('No enough data provided to fetch messages');
                }
                if (this.conversationId) {
                    this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
                }
                else if (this.userId) {
                    this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
                }
                else {
                    // Should not happen.
                    throw new errors_error["a" /* CoreError */]('No enough data provided to fetch messages');
                }
                this.fetching = true;
                try {
                    // Wait for synchronization process to finish.
                    yield messages_sync["a" /* AddonMessagesSync */].waitForSyncConversation(this.conversationId, this.userId);
                    let messages = [];
                    // Fetch messages. Invalidate the cache before fetching.
                    if (this.groupMessagingEnabled) {
                        yield services_messages["a" /* AddonMessages */].invalidateConversationMessages(this.conversationId);
                        messages = yield this.getConversationMessages(this.pagesLoaded);
                    }
                    else {
                        yield services_messages["a" /* AddonMessages */].invalidateDiscussionCache(this.userId);
                        messages = yield this.getDiscussionMessages(this.pagesLoaded);
                    }
                    this.loadMessages(messages, messagesAreNew);
                }
                finally {
                    this.fetching = false;
                }
            });
        }
        /**
         * Format and load a list of messages into the view.
         *
         * @param messagesAreNew If messages loaded are new messages.
         * @param messages Messages to load.
         */
        loadMessages(messages, messagesAreNew = true) {
            var _a, _b;
            if (this.viewDestroyed) {
                return;
            }
            // Don't use domUtils.getScrollHeight because it gives an outdated value after receiving a new message.
            const scrollHeight = this.scrollElement ? this.scrollElement.scrollHeight : 0;
            // Check if we are at the bottom to scroll it after render.
            // Use a 5px error margin because in iOS there is 1px difference for some reason.
            this.scrollBottom = Math.abs(scrollHeight - (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) -
                (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0)) < 5;
            if (this.messagesBeingSent > 0) {
                // Ignore polling due to a race condition.
                return;
            }
            // Add new messages to the list and mark the messages that should still be displayed.
            const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
            // Set the new badges message if we're loading new messages.
            if (messagesAreNew) {
                this.setNewMessagesBadge(this.newMessages + newMessages);
            }
            // Remove messages that shouldn't be in the list anymore.
            for (const hash in this.keepMessageMap) {
                this.removeMessage(hash);
            }
            // Sort the messages.
            services_messages["a" /* AddonMessages */].sortMessages(this.messages);
            // Calculate which messages need to display the date or user data.
            this.messages.forEach((message, index) => {
                message.showDate = this.showDate(message, this.messages[index - 1]);
                message.showUserData = this.showUserData(message, this.messages[index - 1]);
                message.showTail = this.showTail(message, this.messages[index + 1]);
            });
            // If we received a new message while using group messaging, force mark messages as read.
            const last = this.messages[this.messages.length - 1];
            const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
                && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
            // Notify that there can be a new message.
            this.notifyNewMessage();
            // Mark retrieved messages as read if they are not.
            this.markMessagesAsRead(forceMark);
        }
        /**
         * Set the new message badge number and set scroll listener if needed.
         *
         * @param addMessages NUmber of messages still to be read.
         */
        setNewMessagesBadge(addMessages) {
            if (this.newMessages == 0 && addMessages > 0) {
                // Setup scrolling.
                this.content.scrollEvents = true;
                this.scrollFunction();
            }
            else if (this.newMessages > 0 && addMessages == 0) {
                // Remove scrolling.
                this.content.scrollEvents = false;
            }
            this.newMessages = addMessages;
        }
        /**
         * The scroll was moved. Update new messages count.
         */
        scrollFunction() {
            var _a, _b, _c, _d;
            if (this.newMessages > 0) {
                const scrollBottom = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) + (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0);
                const scrollHeight = (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollHeight) || 0);
                if (scrollBottom > scrollHeight - 40) {
                    // At the bottom, reset.
                    this.setNewMessagesBadge(0);
                    return;
                }
                const scrollElRect = (_d = this.scrollElement) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect();
                const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
                if (scrollBottomPos == 0) {
                    return;
                }
                const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'))
                    .slice(-this.newMessages)
                    .reverse();
                const newMessagesUnread = messages.findIndex((message) => {
                    const elementRect = message.getBoundingClientRect();
                    if (!elementRect) {
                        return false;
                    }
                    return elementRect.bottom <= scrollBottomPos;
                });
                if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
                    this.setNewMessagesBadge(newMessagesUnread);
                }
            }
        }
        /**
         * Get the conversation.
         *
         * @param conversationId Conversation ID.
         * @param userId User ID.
         * @return Promise resolved with a boolean: whether the conversation exists or not.
         */
        getConversation(conversationId, userId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let fallbackConversation;
                // Try to get the conversationId if we don't have it.
                if (!conversationId && userId) {
                    try {
                        if (userId == this.currentUserId && services_messages["a" /* AddonMessages */].isSelfConversationEnabled()) {
                            fallbackConversation = yield services_messages["a" /* AddonMessages */].getSelfConversation();
                        }
                        else {
                            fallbackConversation = yield services_messages["a" /* AddonMessages */].getConversationBetweenUsers(userId, undefined, true);
                        }
                        conversationId = fallbackConversation.id;
                    }
                    catch (error) {
                        // Probably conversation does not exist or user is offline. Try to load offline messages.
                        this.isSelf = userId == this.currentUserId;
                        const messages = yield messages_offline["a" /* AddonMessagesOffline */].getMessages(userId);
                        if (messages && messages.length) {
                            // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                            messages.forEach((message) => {
                                message.pending = true;
                                message.text = message.smallmessage;
                            });
                            this.loadMessages(messages);
                        }
                        else if (error.errorcode != 'errorconversationdoesnotexist') {
                            // Display the error.
                            throw error;
                        }
                        return false;
                    }
                }
                // Retrieve the conversation. Invalidate data first to get the right unreadcount.
                yield services_messages["a" /* AddonMessages */].invalidateConversation(conversationId);
                try {
                    this.conversation = yield services_messages["a" /* AddonMessages */].getConversation(conversationId, undefined, true);
                }
                catch (error) {
                    // Get conversation failed, use the fallback one if we have it.
                    if (fallbackConversation) {
                        this.conversation = fallbackConversation;
                    }
                    else {
                        throw error;
                    }
                }
                if (this.conversation) {
                    this.conversationId = this.conversation.id;
                    this.title = this.conversation.name;
                    this.conversationImage = this.conversation.imageurl;
                    this.isGroup = this.conversation.type == services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_GROUP;
                    this.favouriteIcon = 'fas-star';
                    this.favouriteIconSlash = this.conversation.isfavourite;
                    this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                    if (!this.isGroup) {
                        this.userId = this.conversation.userid;
                    }
                    this.isSelf = this.conversation.type == services_messages["b" /* AddonMessagesProvider */].MESSAGE_CONVERSATION_TYPE_SELF;
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        /**
         * Get the messages of the conversation. Used if group messaging is supported.
         *
         * @param pagesToLoad Number of "pages" to load.
         * @param offset Offset for message list.
         * @return Promise resolved with the list of messages.
         */
        getConversationMessages(pagesToLoad, offset = 0) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.conversationId) {
                    return [];
                }
                const excludePending = offset > 0;
                const result = yield services_messages["a" /* AddonMessages */].getConversationMessages(this.conversationId, {
                    excludePending: excludePending,
                    limitFrom: offset,
                });
                pagesToLoad--;
                // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
                if (result.members) {
                    result.members.forEach((member) => {
                        this.members[member.id] = member;
                    });
                }
                const messages = result.messages;
                if (pagesToLoad > 0 && result.canLoadMore) {
                    offset += services_messages["b" /* AddonMessagesProvider */].LIMIT_MESSAGES;
                    // Get more messages.
                    const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                    return messages.concat(nextMessages);
                }
                // No more messages to load, return them.
                this.canLoadMore = !!result.canLoadMore;
                return messages;
            });
        }
        /**
         * Get a discussion. Can load several "pages".
         *
         * @param pagesToLoad Number of pages to load.
         * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
         * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
         * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
         * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
         * @return Resolved when done.
         */
        getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Only get offline messages if we're loading the first "page".
                const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
                // Get next messages.
                const result = yield services_messages["a" /* AddonMessages */].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                pagesToLoad--;
                if (pagesToLoad > 0 && result.canLoadMore) {
                    // More pages to load. Calculate new limit froms.
                    result.messages.forEach((message) => {
                        if (!message.pending && 'read' in message) {
                            if (message.useridfrom == this.userId) {
                                if (message.read) {
                                    lfReceivedRead++;
                                }
                                else {
                                    lfReceivedUnread++;
                                }
                            }
                            else {
                                if (message.read) {
                                    lfSentRead++;
                                }
                                else {
                                    lfSentUnread++;
                                }
                            }
                        }
                    });
                    // Get next messages.
                    const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                    return result.messages.concat(nextMessages);
                }
                else {
                    // No more messages to load, return them.
                    this.canLoadMore = result.canLoadMore;
                    return result.messages;
                }
            });
        }
        /**
         * Mark messages as read.
         */
        markMessagesAsRead(forceMark) {
            var _a, _b;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let readChanged = false;
                if (services_messages["a" /* AddonMessages */].isMarkAllMessagesReadEnabled()) {
                    let messageUnreadFound = false;
                    // Mark all messages at a time if there is any unread message.
                    if (forceMark) {
                        messageUnreadFound = true;
                    }
                    else if (this.groupMessagingEnabled) {
                        messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                            (this.conversationId && this.conversationId > 0));
                    }
                    else {
                        // If an unread message is found, mark all messages as read.
                        messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
                    }
                    if (messageUnreadFound) {
                        this.setUnreadLabelPosition();
                        if (this.groupMessagingEnabled) {
                            yield services_messages["a" /* AddonMessages */].markAllConversationMessagesRead(this.conversationId);
                        }
                        else {
                            yield services_messages["a" /* AddonMessages */].markAllMessagesRead(this.userId);
                            // Mark all messages as read.
                            this.messages.forEach((message) => {
                                if ('read' in message) {
                                    message.read = true;
                                }
                            });
                        }
                        readChanged = true;
                    }
                }
                else {
                    this.setUnreadLabelPosition();
                    const promises = [];
                    // Mark each message as read one by one.
                    this.messages.forEach((message) => {
                        // If the message is unread, call AddonMessages.markMessageRead.
                        if (message.useridfrom != this.currentUserId && 'read' in message && !message.read) {
                            promises.push(services_messages["a" /* AddonMessages */].markMessageRead(message.id).then(() => {
                                readChanged = true;
                                message.read = true;
                                return;
                            }));
                        }
                    });
                    yield Promise.all(promises);
                }
                if (readChanged) {
                    events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].READ_CHANGED_EVENT, {
                        conversationId: this.conversationId,
                        userId: this.userId,
                    }, this.siteId);
                }
            });
        }
        /**
         * Notify the last message found so discussions list controller can tell if last message should be updated.
         */
        notifyNewMessage() {
            var _a, _b;
            const last = this.messages[this.messages.length - 1];
            let trigger = false;
            if (!last) {
                this.lastMessage = { text: '', timecreated: 0 };
                trigger = true;
            }
            else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
                this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
                trigger = true;
            }
            if (trigger) {
                // Update discussions last message.
                events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                    message: this.lastMessage.text,
                    timecreated: this.lastMessage.timecreated,
                    isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                    type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
                }, this.siteId);
                // Update navBar links and buttons.
                const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
                if (this.canDelete != newCanDelete) {
                    this.checkCanDelete();
                }
            }
        }
        /**
         * Set the place where the unread label position has to be.
         */
        setUnreadLabelPosition() {
            var _a, _b;
            if (this.unreadMessageFrom != 0) {
                return;
            }
            if (this.groupMessagingEnabled) {
                // Use the unreadcount from the conversation to calculate where should the label be placed.
                if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                    // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                    let found = 0;
                    for (let i = this.messages.length - 1; i >= 0; i--) {
                        const message = this.messages[i];
                        if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                            found++;
                            if (found == this.conversation.unreadcount) {
                                this.unreadMessageFrom = Number(message.id);
                                break;
                            }
                        }
                    }
                }
            }
            else {
                let previousMessageRead = false;
                for (const x in this.messages) {
                    const message = this.messages[x];
                    if (message.useridfrom != this.currentUserId && 'read' in message) {
                        const unreadFrom = !message.read && previousMessageRead;
                        if (unreadFrom) {
                            // Save where the label is placed.
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                        previousMessageRead = !!message.read;
                    }
                }
            }
            // Do not update the message unread from label on next refresh.
            if (this.unreadMessageFrom == 0) {
                // Using negative to indicate the label is not placed but should not be placed.
                this.unreadMessageFrom = -1;
            }
        }
        /**
         * Check if there's any message in the list that can be deleted.
         */
        checkCanDelete() {
            // All messages being sent should be at the end of the list.
            const first = this.messages[0];
            this.canDelete = first && !first.sending;
        }
        /**
         * Hide unread label when sending messages.
         */
        hideUnreadLabel() {
            if (this.unreadMessageFrom > 0) {
                this.unreadMessageFrom = -1;
            }
        }
        /**
         * Wait until fetching is false.
         *
         * @return Resolved when done.
         */
        waitForFetch() {
            if (!this.fetching) {
                return Promise.resolve();
            }
            const deferred = utils["a" /* CoreUtils */].promiseDefer();
            setTimeout(() => this.waitForFetch().finally(() => {
                deferred.resolve();
            }), 400);
            return deferred.promise;
        }
        /**
         * Set a polling to get new messages every certain time.
         */
        setPolling() {
            if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to poll messages.
                return;
            }
            if (!this.polling) {
                // Start polling.
                this.polling = window.setInterval(() => {
                    this.fetchMessages().catch(() => {
                        // Ignore errors.
                    });
                }, services_messages["b" /* AddonMessagesProvider */].POLL_INTERVAL);
            }
        }
        /**
         * Unset polling.
         */
        unsetPolling() {
            if (this.polling) {
                this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
                clearInterval(this.polling);
                this.polling = undefined;
            }
        }
        /**
         * Copy message to clipboard.
         *
         * @param message Message to be copied.
         */
        copyMessage(message) {
            const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
            utils["a" /* CoreUtils */].copyToClipboard(utils_text["a" /* CoreTextUtils */].decodeHTMLEntities(text));
        }
        /**
         * Function to delete a message.
         *
         * @param message Message object to delete.
         * @param index Index where the message is to delete it from the view.
         */
        deleteMessage(message, index) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
                const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                    'addon.messages.deletemessageconfirmation';
                const options = {};
                if (canDeleteAll && !message.pending) {
                    // Show delete for all checkbox.
                    options.inputs = [{
                            type: 'checkbox',
                            name: 'deleteforall',
                            checked: false,
                            value: true,
                            label: singletons["L" /* Translate */].instant('addon.messages.deleteforeveryone'),
                        }];
                }
                try {
                    const data = yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant(langKey), undefined, undefined, undefined, options);
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.deleting', true);
                    try {
                        yield services_messages["a" /* AddonMessages */].deleteMessage(message, data && data[0]);
                        // Remove message from the list without having to wait for re-fetch.
                        this.messages.splice(index, 1);
                        this.removeMessage(message.hash);
                        this.notifyNewMessage();
                        this.fetchMessages(); // Re-fetch messages to update cached data.
                    }
                    finally {
                        modal.dismiss();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
                }
            });
        }
        /**
         * Function to load previous messages.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadPrevious(infiniteComplete) {
            var _a, _b, _c, _d;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.initialized) {
                    // Don't load previous if the view isn't fully initialized.
                    // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                    // the scroll height changes when it appears.
                    infiniteComplete && infiniteComplete();
                    return;
                }
                let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
                const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
                // If there is an ongoing fetch, wait for it to finish.
                try {
                    yield this.waitForFetch();
                }
                finally {
                    this.pagesLoaded++;
                    try {
                        yield this.fetchMessages(false);
                        // Try to keep the scroll position.
                        const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                        const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                        if (this.canLoadMore && infiniteHeight && this.infinite) {
                            // The height of the infinite is different while spinner is shown. Add that difference.
                            infiniteHeight = infiniteHeight - height;
                        }
                        else if (!this.canLoadMore) {
                            // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                            infiniteHeight = infiniteHeight || height;
                        }
                        this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                    }
                    catch (error) {
                        this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                        this.pagesLoaded--;
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                    }
                    finally {
                        infiniteComplete && infiniteComplete();
                    }
                }
            });
        }
        /**
         * Keep scroll position after loading previous messages.
         */
        keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                if (newScrollHeight == oldScrollHeight) {
                    // Height hasn't changed yet. Retry if max retries haven't been reached.
                    if (retries <= 10) {
                        this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                    }
                    return;
                }
                // Scroll has changed, but maybe it hasn't reached the full height yet.
                setTimeout(() => {
                    var _a;
                    const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                    const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                    this.content.scrollToPoint(0, scrollTo, 0);
                }, 30);
            }, 30);
        }
        /**
         * Scroll bottom when render has finished.
         *
         * @param force Whether to force scroll to bottom.
         */
        scrollToBottom(force = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
                if (this.scrollBottom || force) {
                    this.scrollBottom = false;
                    // Reset the badge.
                    this.setNewMessagesBadge(0);
                    // Leave time for the view to be rendered.
                    yield utils["a" /* CoreUtils */].nextTicks(5);
                    if (!this.viewDestroyed) {
                        this.content.scrollToBottom(0);
                    }
                    if (force) {
                        this.initialized = true;
                    }
                }
            });
        }
        /**
         * Scroll to the first new unread message.
         */
        scrollToFirstUnreadMessage() {
            if (this.newMessages > 0) {
                const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'));
                dom["a" /* CoreDomUtils */].scrollToElement(this.content, messages[messages.length - this.newMessages]);
            }
        }
        /**
         * Sends a message to the server.
         *
         * @param text Message text.
         */
        sendMessage(text) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.hideUnreadLabel();
                this.showDelete = false;
                this.scrollBottom = true;
                this.setNewMessagesBadge(0);
                const message = {
                    id: -1,
                    pending: true,
                    sending: true,
                    useridfrom: this.currentUserId,
                    smallmessage: text,
                    text: text,
                    timecreated: new Date().getTime(),
                };
                message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
                this.addMessage(message, false);
                this.messagesBeingSent++;
                // If there is an ongoing fetch, wait for it to finish.
                // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
                try {
                    yield this.waitForFetch();
                }
                finally {
                    try {
                        let data;
                        if (this.conversationId) {
                            data = yield services_messages["a" /* AddonMessages */].sendMessageToConversation(this.conversation, text);
                        }
                        else {
                            data = yield services_messages["a" /* AddonMessages */].sendMessage(this.userId, text);
                        }
                        this.messagesBeingSent--;
                        let failure = false;
                        if (data.sent) {
                            try {
                                if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                    // Message sent to a new conversation, try to load the conversation.
                                    yield this.getConversation(data.message.conversationid, this.userId);
                                    // Now fetch messages.
                                    try {
                                        yield this.fetchMessages();
                                    }
                                    finally {
                                        // Start polling messages now that the conversation exists.
                                        this.setPolling();
                                    }
                                }
                                else {
                                    // Message was sent, fetch messages right now.
                                    yield this.fetchMessages();
                                }
                            }
                            catch (_a) {
                                failure = true;
                            }
                        }
                        if (failure || !data.sent) {
                            // Fetch failed or is offline message, mark the message as sent.
                            // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                            message.sending = false;
                            if (data.sent) {
                                // Message sent to server, not pending anymore.
                                message.pending = false;
                            }
                            else if (data.message) {
                                message.timecreated = data.message.timecreated || 0;
                            }
                            this.notifyNewMessage();
                        }
                    }
                    catch (error) {
                        this.messagesBeingSent--;
                        // Only close the keyboard if an error happens.
                        // We want the user to be able to send multiple messages without the keyboard being closed.
                        app["a" /* CoreApp */].closeKeyboard();
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                        this.removeMessage(message.hash);
                    }
                }
            });
        }
        /**
         * Check date should be shown on message list for the current message.
         * If date has changed from previous to current message it should be shown.
         *
         * @param message Current message where to show the date.
         * @param prevMessage Previous message where to compare the date with.
         * @return If date has changed and should be shown.
         */
        showDate(message, prevMessage) {
            if (!prevMessage) {
                // First message, show it.
                return true;
            }
            // Check if day has changed.
            return !moment_default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
        }
        /**
         * Check if the user info should be displayed for the current message.
         * User data is only displayed for group conversations if the previous message was from another user.
         *
         * @param message Current message where to show the user info.
         * @param prevMessage Previous message.
         * @return Whether user data should be shown.
         */
        showUserData(message, prevMessage) {
            return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
                (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
        }
        /**
         * Check if a css tail should be shown.
         *
         * @param message Current message where to show the user info.
         * @param nextMessage Next message.
         * @return Whether user data should be shown.
         */
        showTail(message, nextMessage) {
            return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
        }
        /**
         * Toggles delete state.
         */
        toggleDelete() {
            this.showDelete = !this.showDelete;
        }
        /**
         * View info. If it's an individual conversation, go to the user profile.
         * If it's a group conversation, view info about the group.
         */
        viewInfo() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.isGroup) {
                    // Display the group information.
                    const userId = yield dom["a" /* CoreDomUtils */].openSideModal({
                        component: conversation_info_AddonMessagesConversationInfoComponent,
                        componentProps: {
                            conversationId: this.conversationId,
                        },
                    });
                    if (typeof userId != 'undefined') {
                        const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/**/discussion');
                        // Open user conversation.
                        if (splitViewLoaded) {
                            // Notify the left pane to load it, this way the right conversation will be highlighted.
                            events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                        }
                        else {
                            // Open the discussion in a new view.
                            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/messages/discussion', { params: { userId } });
                        }
                    }
                }
                else {
                    // Open the user profile.
                    services_navigator["a" /* CoreNavigator */].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
                }
            });
        }
        /**
         * Change the favourite state of the current conversation.
         *
         * @param done Function to call when done.
         */
        changeFavourite(done) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.conversation) {
                    return;
                }
                this.favouriteIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                try {
                    yield services_messages["a" /* AddonMessages */].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                    this.conversation.isfavourite = !this.conversation.isfavourite;
                    // Get the conversation data so it's cached. Don't block the user for this.
                    services_messages["a" /* AddonMessages */].getConversation(this.conversation.id, undefined, true);
                    events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                        conversationId: this.conversation.id,
                        action: 'favourite',
                        value: this.conversation.isfavourite,
                    }, this.siteId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error changing favourite state.');
                }
                finally {
                    this.favouriteIcon = 'fas-star';
                    this.favouriteIconSlash = this.conversation.isfavourite;
                    done && done();
                }
            });
        }
        /**
         * Change the mute state of the current conversation.
         *
         * @param done Function to call when done.
         */
        changeMute(done) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.conversation) {
                    return;
                }
                this.muteIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                try {
                    yield services_messages["a" /* AddonMessages */].muteConversation(this.conversation.id, !this.conversation.ismuted);
                    this.conversation.ismuted = !this.conversation.ismuted;
                    // Get the conversation data so it's cached. Don't block the user for this.
                    services_messages["a" /* AddonMessages */].getConversation(this.conversation.id, undefined, true);
                    events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                        conversationId: this.conversation.id,
                        action: 'mute',
                        value: this.conversation.ismuted,
                    }, this.siteId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error changing muted state.');
                }
                finally {
                    this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                    done && done();
                }
            });
        }
        /**
         * Calculate whether there are pending contact requests.
         */
        setContactRequestInfo() {
            var _a, _b;
            this.requestContactSent = false;
            this.requestContactReceived = false;
            if (this.otherMember && !this.otherMember.iscontact) {
                this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
                this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
            }
        }
        /**
         * Calculate what to display in the footer.
         */
        setFooterType() {
            if (!this.otherMember) {
                // Group conversation or group messaging not available.
                this.footerType = 'message';
            }
            else if (this.otherMember.isblocked) {
                this.footerType = 'blocked';
            }
            else if (this.requestContactReceived) {
                this.footerType = 'requestReceived';
            }
            else if (this.otherMember.canmessage) {
                this.footerType = 'message';
            }
            else if (this.requestContactSent) {
                this.footerType = 'requestSent';
            }
            else if (this.otherMember.requirescontact) {
                this.footerType = 'requiresContact';
            }
            else {
                this.footerType = 'unable';
            }
        }
        /**
         * Displays a confirmation modal to block the user of the individual conversation.
         *
         * @return Promise resolved when user is blocked or dialog is cancelled.
         */
        blockUser() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be blocked.');
                }
                if (this.otherMember.canmessageevenifblocked) {
                    dom["a" /* CoreDomUtils */].showErrorModal(singletons["L" /* Translate */].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                    return;
                }
                const template = singletons["L" /* Translate */].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
                const okText = singletons["L" /* Translate */].instant('addon.messages.blockuser');
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(template, undefined, okText);
                    this.blockIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    this.showLoadingModal = true;
                    try {
                        try {
                            yield services_messages["a" /* AddonMessages */].blockContact(this.otherMember.id);
                        }
                        finally {
                            modal.dismiss();
                            this.showLoadingModal = false;
                        }
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                    }
                    finally {
                        this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                    }
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Delete the conversation.
         *
         * @param done Function to call when done.
         */
        deleteConversation(done) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.conversation) {
                    return;
                }
                const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm(confirmMessage);
                    this.deleteIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    try {
                        try {
                            yield services_messages["a" /* AddonMessages */].deleteConversation(this.conversation.id);
                            events["b" /* CoreEvents */].trigger(services_messages["b" /* AddonMessagesProvider */].UPDATE_CONVERSATION_LIST_EVENT, {
                                conversationId: this.conversation.id,
                                action: 'delete',
                            }, this.siteId);
                            this.messages = [];
                        }
                        finally {
                            done && done();
                        }
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error deleting conversation.');
                    }
                    finally {
                        this.deleteIcon = 'fas-trash';
                    }
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Displays a confirmation modal to unblock the user of the individual conversation.
         *
         * @return Promise resolved when user is unblocked or dialog is cancelled.
         */
        unblockUser() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be unblocked.');
                }
                const template = singletons["L" /* Translate */].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
                const okText = singletons["L" /* Translate */].instant('addon.messages.unblockuser');
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(template, undefined, okText);
                    this.blockIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    this.showLoadingModal = true;
                    try {
                        try {
                            yield services_messages["a" /* AddonMessages */].unblockContact(this.otherMember.id);
                        }
                        finally {
                            modal.dismiss();
                            this.showLoadingModal = false;
                        }
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                    }
                    finally {
                        this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                    }
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
         *
         * @return Promise resolved when the request is sent or the dialog is cancelled.
         */
        createContactRequest() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be requested.');
                }
                const template = singletons["L" /* Translate */].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
                const okText = singletons["L" /* Translate */].instant('core.add');
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(template, undefined, okText);
                    this.addRemoveIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    this.showLoadingModal = true;
                    try {
                        try {
                            yield services_messages["a" /* AddonMessages */].createContactRequest(this.otherMember.id);
                        }
                        finally {
                            modal.dismiss();
                            this.showLoadingModal = false;
                        }
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                    }
                    finally {
                        this.addRemoveIcon = 'fas-user-plus';
                    }
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Confirms the contact request of the other user of the individual conversation.
         *
         * @return Promise resolved when the request is confirmed.
         */
        confirmContactRequest() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be confirmed.');
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield services_messages["a" /* AddonMessages */].confirmContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                }
            });
        }
        /**
         * Declines the contact request of the other user of the individual conversation.
         *
         * @return Promise resolved when the request is confirmed.
         */
        declineContactRequest() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be declined.');
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield services_messages["a" /* AddonMessages */].declineContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                }
            });
        }
        /**
         * Displays a confirmation modal to remove the other user of the conversation from contacts.
         *
         * @return Promise resolved when the request is sent or the dialog is cancelled.
         */
        removeContact() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.otherMember) {
                    // Should never happen.
                    throw new errors_error["a" /* CoreError */]('No member selected to be removed.');
                }
                const template = singletons["L" /* Translate */].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
                const okText = singletons["L" /* Translate */].instant('core.remove');
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(template, undefined, okText);
                    this.addRemoveIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    this.showLoadingModal = true;
                    try {
                        try {
                            yield services_messages["a" /* AddonMessages */].removeContact(this.otherMember.id);
                        }
                        finally {
                            modal.dismiss();
                            this.showLoadingModal = false;
                        }
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                    }
                    finally {
                        this.addRemoveIcon = 'fas-user-plus';
                    }
                }
                catch (_a) {
                    // User cancelled.
                }
            });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c;
            // Unset again, just in case.
            this.unsetPolling();
            (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.keyboardObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.memberInfoObserver) === null || _c === void 0 ? void 0 : _c.off();
            this.viewDestroyed = true;
        }
    }
    AddonMessagesDiscussionPage.ɵfac = function AddonMessagesDiscussionPage_Factory(t) { return new (t || AddonMessagesDiscussionPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */]), core["yc" /* ɵɵdirectiveInject */](core["r" /* ElementRef */])); };
    AddonMessagesDiscussionPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesDiscussionPage, selectors: [["page-addon-messages-discussion"]], viewQuery: function AddonMessagesDiscussionPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](infinite_loading["a" /* CoreInfiniteLoadingComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.infinite = _t.first);
            }
        }, decls: 46, vars: 87, consts: [["slot", "start"], [3, "text"], ["class", "core-bar-button-image", "alt", "", "onError", "this.src='assets/img/group-avatar.png'", "core-external-content", "", "role", "presentation", 3, "src", "siteId", 4, "ngIf"], ["class", "core-bar-button-image", 3, "user", "linkProfile", "checkOnline", 4, "ngIf"], ["contextLevel", "system", 3, "text", "contextInstanceId"], ["name", "fas-star", 4, "ngIf"], ["name", "fas-bell-slash", 4, "ngIf"], ["slot", "end"], ["iconAction", "fas-info-circle", 3, "hidden", "priority", "content", "action"], [3, "hidden", "priority", "content", "closeOnClick", "iconAction", "iconSlash", "action"], [3, "hidden", "priority", "content", "iconAction", "action"], [3, "hidden", "priority", "content", "closeOnClick", "iconAction", "action"], [3, "hidden", "priority", "content", "iconAction", "iconSlash", "action"], [1, "has-footer", 3, "ionScroll"], [1, "safe-area-page", 3, "hideUntil"], ["position", "top", 3, "enabled", "error", "action"], [4, "ngIf"], [1, "sr-only"], [1, "addon-messages-discussion-container"], [4, "ngFor", "ngForOf"], ["icon", "far-comments", 3, "message", 4, "ngIf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["color", "light", "class", "footer-adjustable", 4, "ngIf"], ["alt", "", "onError", "this.src='assets/img/group-avatar.png'", "core-external-content", "", "role", "presentation", 1, "core-bar-button-image", 3, "src", "siteId"], [1, "core-bar-button-image", 3, "user", "linkProfile", "checkOnline"], ["name", "fas-star"], ["name", "fas-bell-slash"], [1, "ion-text-center"], ["class", "ion-text-center addon-messages-date", 4, "ngIf"], ["class", "addon-messages-unreadfrom", "color", "light", 4, "ngIf"], [1, "ion-text-wrap", "addon-message", 3, "longPress"], ["class", "item-heading addon-message-user", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "addon-message-text"], ["contextLevel", "system", 3, "text", "contextInstanceId", "afterRender"], ["slot", "end", 4, "ngIf"], ["fill", "clear", "class", "addon-messages-delete-button", "slot", "end", 3, "click", 4, "ngIf"], ["class", "tail", 4, "ngIf"], [1, "ion-text-center", "addon-messages-date"], ["color", "light", 1, "addon-messages-unreadfrom"], ["name", "fas-arrow-down", "aria-hidden", "true"], [1, "item-heading", "addon-message-user"], ["slot", "start", "aria-hidden", "true", 3, "user", "linkProfile"], ["name", "fas-clock", "role", "status"], ["fill", "clear", "slot", "end", 1, "addon-messages-delete-button", 3, "click"], ["name", "fas-trash", "color", "danger", "slot", "icon-only", "aria-hidden", "true"], [1, "tail"], ["icon", "far-comments", 3, "message"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], ["size", "small", "color", "light", 3, "click"], [1, "core-discussion-messages-badge"], ["color", "light", 1, "footer-adjustable"], ["color", "light"], ["class", "ion-text-center ion-margin-horizontal", 4, "ngIf"], ["class", "ion-padding-horizontal", 4, "ngIf"], [3, "showKeyboard", "placeholder", "onSubmit", 4, "ngIf"], [1, "ion-text-center", "ion-margin-horizontal"], [1, "ion-padding-horizontal"], ["expand", "block", 1, "ion-text-wrap", "ion-margin-bottom", 3, "click"], ["expand", "block", "color", "light", 1, "ion-text-wrap", "ion-margin-bottom", 3, "click"], ["class", "ion-text-center", 4, "ngIf"], [3, "showKeyboard", "placeholder", "onSubmit"]], template: function AddonMessagesDiscussionPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonMessagesDiscussionPage_img_6_Template, 1, 2, "img", 2);
                core["nd" /* ɵɵtemplate */](7, AddonMessagesDiscussionPage_core_user_avatar_7_Template, 1, 3, "core-user-avatar", 3);
                core["zc" /* ɵɵelement */](8, "core-format-text", 4);
                core["nd" /* ɵɵtemplate */](9, AddonMessagesDiscussionPage_ion_icon_9_Template, 2, 3, "ion-icon", 5);
                core["nd" /* ɵɵtemplate */](10, AddonMessagesDiscussionPage_ion_icon_10_Template, 2, 3, "ion-icon", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](11, "ion-buttons", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-navbar-buttons", 7);
                core["Ec" /* ɵɵelementStart */](13, "core-context-menu");
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Ec" /* ɵɵelementStart */](15, "core-context-menu-item", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_15_listener() { return ctx.viewInfo(); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-context-menu-item", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_17_listener() { return ctx.viewInfo(); });
                core["Pc" /* ɵɵpipe */](18, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](19, "core-context-menu-item", 9);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_19_listener($event) { return ctx.changeFavourite($event); });
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "core-context-menu-item", 10);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_21_listener() { return ctx.blockUser(); });
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](23, "core-context-menu-item", 10);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_23_listener() { return ctx.unblockUser(); });
                core["Pc" /* ɵɵpipe */](24, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](25, "core-context-menu-item", 11);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_25_listener($event) { return ctx.changeMute($event); });
                core["Pc" /* ɵɵpipe */](26, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](27, "core-context-menu-item", 10);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_27_listener() { return ctx.toggleDelete(); });
                core["Pc" /* ɵɵpipe */](28, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](29, "core-context-menu-item", 11);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_29_listener($event) { return ctx.deleteConversation($event); });
                core["Pc" /* ɵɵpipe */](30, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](31, "core-context-menu-item", 10);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_31_listener() { return ctx.createContactRequest(); });
                core["Pc" /* ɵɵpipe */](32, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](33, "core-context-menu-item", 12);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_context_menu_item_action_33_listener() { return ctx.removeContact(); });
                core["Pc" /* ɵɵpipe */](34, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](35, "ion-content", 13);
                core["Mc" /* ɵɵlistener */]("ionScroll", function AddonMessagesDiscussionPage_Template_ion_content_ionScroll_35_listener() { return ctx.scrollFunction(); });
                core["Ec" /* ɵɵelementStart */](36, "core-loading", 14);
                core["Ec" /* ɵɵelementStart */](37, "core-infinite-loading", 15);
                core["Mc" /* ɵɵlistener */]("action", function AddonMessagesDiscussionPage_Template_core_infinite_loading_action_37_listener($event) { return ctx.loadPrevious($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](38, AddonMessagesDiscussionPage_ng_container_38_Template, 8, 6, "ng-container", 16);
                core["Ec" /* ɵɵelementStart */](39, "h2", 17);
                core["pd" /* ɵɵtext */](40);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](41, "ion-list", 18);
                core["nd" /* ɵɵtemplate */](42, AddonMessagesDiscussionPage_ng_container_42_Template, 13, 17, "ng-container", 19);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](43, AddonMessagesDiscussionPage_core_empty_box_43_Template, 2, 3, "core-empty-box", 20);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](44, AddonMessagesDiscussionPage_ion_fab_44_Template, 9, 7, "ion-fab", 21);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](45, AddonMessagesDiscussionPage_ion_footer_45_Template, 8, 6, "ion-footer", 22);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 63, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && !ctx.otherMember && ctx.conversationImage);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && ctx.otherMember);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.conversation && ctx.conversation.isfavourite);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.conversation && ctx.conversation.ismuted);
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](14, 65, "addon.messages.conversationactions"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.showInfo || ctx.isGroup)("priority", 1000)("content", core["Qc" /* ɵɵpipeBind1 */](16, 67, "addon.messages.info"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.showInfo || !ctx.isGroup)("priority", 1000)("content", core["Qc" /* ɵɵpipeBind1 */](18, 69, "addon.messages.groupinfo"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.groupMessagingEnabled || !ctx.conversation)("priority", 800)("content", core["Qc" /* ɵɵpipeBind1 */](20, 71, ctx.conversation && ctx.conversation.isfavourite ? "addon.messages.removefromfavourites" : "addon.messages.addtofavourites"))("closeOnClick", false)("iconAction", ctx.favouriteIcon)("iconSlash", ctx.favouriteIconSlash);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.otherMember || ctx.otherMember.isblocked)("priority", 700)("content", core["Qc" /* ɵɵpipeBind1 */](22, 73, "addon.messages.blockuser"))("iconAction", ctx.blockIcon);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.otherMember || !ctx.otherMember.isblocked)("priority", 700)("content", core["Qc" /* ɵɵpipeBind1 */](24, 75, "addon.messages.unblockuser"))("iconAction", ctx.blockIcon);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.muteEnabled || !ctx.conversation)("priority", 600)("content", core["Qc" /* ɵɵpipeBind1 */](26, 77, ctx.conversation && ctx.conversation.ismuted ? "addon.messages.unmuteconversation" : "addon.messages.muteconversation"))("closeOnClick", false)("iconAction", ctx.muteIcon);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.canDelete || !ctx.messages || !ctx.messages.length)("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](28, 79, "addon.messages.showdeletemessages"))("iconAction", ctx.showDelete ? "far-check-square" : "far-square");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.groupMessagingEnabled || !ctx.conversationId || ctx.isGroup || !ctx.messages || !ctx.messages.length)("priority", 200)("content", core["Qc" /* ɵɵpipeBind1 */](30, 81, "addon.messages.deleteconversation"))("closeOnClick", false)("iconAction", ctx.deleteIcon);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.otherMember || ctx.otherMember.iscontact || ctx.requestContactSent || ctx.requestContactReceived)("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](32, 83, "addon.messages.addtoyourcontacts"))("iconAction", ctx.addRemoveIcon);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.isSelf || !ctx.otherMember || !ctx.otherMember.iscontact)("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](34, 85, "addon.messages.removefromyourcontacts"))("iconAction", ctx.addRemoveIcon)("iconSlash", true);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.isSelf && !ctx.canLoadMore);
                core["lc" /* ɵɵadvance */](2);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](1);
                core["qc" /* ɵɵclassProp */]("addon-messages-discussion-group", ctx.isGroup);
                core["mc" /* ɵɵattribute */]("aria-live", "polite");
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.messages);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.messages || ctx.messages.length <= 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && ctx.newMessages > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && (!ctx.conversationId || ctx.conversation));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], format_text["a" /* CoreFormatTextDirective */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], external_content["a" /* CoreExternalContentDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["H" /* IonItem */], long_press["a" /* CoreLongPressDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["s" /* IonChip */], ionic_angular["V" /* IonNote */], ionic_angular["k" /* IonButton */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */], ionic_angular["z" /* IonFooter */], send_message_form["a" /* CoreSendMessageFormComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--background-alternative)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:0!important}[_nghost-%COMP%]   .addon-messages-discussion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:15px;background:var(--background-alternative)}[_nghost-%COMP%]   .addon-messages-date[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]{border:0;border-radius:4px;padding:0 8px;margin:10px 8px 0;--background:var(--addon-messages-message-bg);background:var(--background);align-self:flex-start;width:90%;max-width:90%;--min-height:var(--a11y-min-target-size);position:relative;transition:width .5s ease-in-out;overflow:visible}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]::part(native){--inner-border-width:0;--inner-padding-end:0;padding:0;margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:only-child{display:inline}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:.5rem;margin-top:0;color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   core-user-avatar[_ngcontent-%COMP%]{display:block;--core-avatar-size:var(--addon-messages-avatar-size);margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-weight:500;flex-grow:1;padding-left:.5rem;padding-right:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;-webkit-padding-start:.5rem;padding-inline-start:.5rem;-webkit-padding-end:.5rem;padding-inline-end:.5rem}}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{color:var(--addon-messages-message-note-text);font-size:var(--addon-messages-message-note-font-size);margin:0;padding:0 0 8px;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;padding:8px 0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{content:\"\";width:0;height:0;border:.5rem solid transparent;position:absolute;touch-action:none;bottom:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]{--background:var(--addon-messages-message-mine-bg);align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:right;margin:2px -3px -2px 5px}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:left}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:-3px;margin-inline-end:-3px}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{right:-8px;margin-right:-.5rem;border-bottom-color:var(--addon-messages-message-mine-bg)}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;left:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:-.5rem;margin-inline-end:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-bg);left:-8px;margin-left:-.5rem}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;right:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:-.5rem;margin-inline-start:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message[tappable].addon-message-not-mine.activated[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]{min-height:0;line-height:normal;margin-top:0;margin-bottom:0;height:var(--a11y-min-target-size)!important;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.4em;line-height:normal;color:var(--ion-color-danger)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-no-user[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-bottom:0}.ios[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child, .ios   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child{padding-bottom:4px;min-height:0}[_nghost-%COMP%]   .addon-messages-unreadfrom[_ngcontent-%COMP%]{margin-top:6px;margin-left:auto;margin-right:auto}[_nghost-%COMP%]   .addon-messages-unreadfrom[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-unreadfrom[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);background-color:initial}[_nghost-%COMP%]   .has-fab[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%]{padding-bottom:0}[_nghost-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]::part(native){contain:unset;overflow:visible}[_nghost-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   .core-discussion-messages-badge[_ngcontent-%COMP%]{position:absolute;border-radius:50%;color:var(--addon-messages-discussion-badge-text);background-color:var(--addon-messages-discussion-badge);display:block;line-height:20px;height:20px;width:20px;right:-6px;top:-6px}[dir=rtl]   [_nghost-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   .core-discussion-messages-badge[_ngcontent-%COMP%]{left:unset;right:unset;left:-6px}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .core-bar-button-image[_ngcontent-%COMP%]{margin-right:6px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .core-bar-button-image[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:6px;margin-inline-end:6px}}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1}[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:6px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:6px;margin-inline-start:6px}}.ios[_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ios   [_nghost-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{justify-content:center}"], data: { animation: [animations["a" /* CoreAnimations */].SLIDE_IN_OUT] } });
    return AddonMessagesDiscussionPage;
})();

// CONCATENATED MODULE: ./src/addons/messages/components/components.module.ts
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




let components_module_AddonMessagesComponentsModule = /*@__PURE__*/ (() => {
    class AddonMessagesComponentsModule {
    }
    AddonMessagesComponentsModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesComponentsModule });
    AddonMessagesComponentsModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesComponentsModule_Factory(t) { return new (t || AddonMessagesComponentsModule)(); }, imports: [[
                shared_module["a" /* CoreSharedModule */],
            ]] });
    return AddonMessagesComponentsModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](components_module_AddonMessagesComponentsModule, { declarations: [conversation_info_AddonMessagesConversationInfoComponent], imports: [shared_module["a" /* CoreSharedModule */]] }); })();

// CONCATENATED MODULE: ./src/addons/messages/pages/discussion/discussion.module.ts
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
        component: discussion_page_AddonMessagesDiscussionPage,
    },
];
let discussion_module_AddonMessagesDiscussionPageModule = /*@__PURE__*/ (() => {
    class AddonMessagesDiscussionPageModule {
    }
    AddonMessagesDiscussionPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesDiscussionPageModule });
    AddonMessagesDiscussionPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesDiscussionPageModule_Factory(t) { return new (t || AddonMessagesDiscussionPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module_AddonMessagesComponentsModule,
            ], router["m" /* RouterModule */]] });
    return AddonMessagesDiscussionPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](discussion_module_AddonMessagesDiscussionPageModule, { declarations: [discussion_page_AddonMessagesDiscussionPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module_AddonMessagesComponentsModule], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);