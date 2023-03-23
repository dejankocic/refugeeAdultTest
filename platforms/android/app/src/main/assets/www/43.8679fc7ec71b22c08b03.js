(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "+T7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesSearchPageModule", function() { return /* binding */ search_module_AddonMessagesSearchPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/addons/messages/messages-lazy.module.ts + 1 modules
var messages_lazy_module = __webpack_require__("muSn");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/search/components/components.module.ts
var components_module = __webpack_require__("PM4H");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var messages = __webpack_require__("KMk0");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// CONCATENATED MODULE: ./src/addons/messages/pages/search/search.page.ts

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






















function AddonMessagesSearchPage_ion_list_15_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonMessagesSearchPage_ion_list_15_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonMessagesSearchPage_ion_list_15_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
const _c0 = function (a0) { return { item: a0 }; };
function AddonMessagesSearchPage_ion_list_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSearchPage_ion_list_15_ng_container_1_Template, 1, 0, "ng-container", 8);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSearchPage_ion_list_15_ng_container_2_Template, 1, 0, "ng-container", 8);
        core["nd" /* ɵɵtemplate */](3, AddonMessagesSearchPage_ion_list_15_ng_container_3_Template, 1, 0, "ng-container", 8);
        core["Ec" /* ɵɵelementStart */](4, "core-infinite-loading", 9);
        core["Mc" /* ɵɵlistener */]("action", function AddonMessagesSearchPage_ion_list_15_Template_core_infinite_loading_action_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.search(ctx_r7.query, "messages", $event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        const _r2 = core["fd" /* ɵɵreference */](18);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](8, _c0, ctx_r0.contacts));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](10, _c0, ctx_r0.nonContacts));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](12, _c0, ctx_r0.messages));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("enabled", ctx_r0.messages.canLoadMore)("error", ctx_r0.messages.loadMoreError);
    }
}
function AddonMessagesSearchPage_core_empty_box_16_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 10);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.noresults"));
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_icon_5_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 21);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.contactblocked"));
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_note_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, result_r13.lastmessagedate), " ");
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_span_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 22);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.you"), " ");
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 13);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r19); const result_r13 = ctx.$implicit; const ctx_r18 = core["Oc" /* ɵɵnextContext */](3); return ctx_r18.openConversation(result_r13); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 14);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 15);
        core["zc" /* ɵɵelement */](4, "core-format-text", 16);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_icon_5_Template, 2, 3, "ion-icon", 17);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_ion_note_6_Template, 3, 3, "ion-note", 5);
        core["Ec" /* ɵɵelementStart */](7, "p", 18);
        core["nd" /* ɵɵtemplate */](8, AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_span_8_Template, 3, 3, "span", 19);
        core["zc" /* ɵɵelement */](9, "core-format-text", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r13 = ctx.$implicit;
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](3);
        core["mc" /* ɵɵattribute */]("aria-label", result_r13.fullname)("aria-current", result_r13 == ctx_r11.selectedResult ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", result_r13)("checkOnline", true)("linkProfile", false);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", result_r13.fullname)("highlight", result_r13.highlightName)("filter", false);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r13.isblocked);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r13.lastmessagedate > 0);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", result_r13.sentfromcurrentuser);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", result_r13.lastmessage)("highlight", result_r13.highlightMessage)("contextInstanceId", 0);
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 26);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r23); const item_r9 = core["Oc" /* ɵɵnextContext */](3).item; const ctx_r22 = core["Oc" /* ɵɵnextContext */](); return ctx_r22.search(ctx_r22.query, item_r9.type); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.loadmore"), " ");
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 27);
        core["zc" /* ɵɵelement */](1, "ion-spinner");
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loading"));
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_1_Template, 4, 3, "div", 23);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_div_2_Template, 3, 3, "div", 24);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r9 = core["Oc" /* ɵɵnextContext */](2).item;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r9.canLoadMore && !item_r9.loadingMore);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r9.loadingMore);
    }
}
function AddonMessagesSearchPage_ng_template_17_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider", 11);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonMessagesSearchPage_ng_template_17_ng_container_0_ion_item_6_Template, 10, 14, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](7, AddonMessagesSearchPage_ng_template_17_ng_container_0_ng_container_7_Template, 3, 2, "ng-container", 5);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r9 = core["Oc" /* ɵɵnextContext */]().item;
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, item_r9.titleString));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", item_r9.results);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r9.type != "messages");
    }
}
function AddonMessagesSearchPage_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, AddonMessagesSearchPage_ng_template_17_ng_container_0_Template, 8, 5, "ng-container", 5);
    }
    if (rf & 2) {
        const item_r9 = ctx.item;
        core["Vc" /* ɵɵproperty */]("ngIf", item_r9.results.length > 0);
    }
}
/**
 * Page for searching users.
 */
let search_page_AddonMessagesSearchPage = /*@__PURE__*/ (() => {
    class AddonMessagesSearchPage {
        constructor() {
            this.disableSearch = false;
            this.displaySearching = false;
            this.displayResults = false;
            this.query = '';
            this.contacts = {
                type: 'contacts',
                titleString: 'addon.messages.contacts',
                results: [],
                canLoadMore: false,
                loadingMore: false,
            };
            this.nonContacts = {
                type: 'noncontacts',
                titleString: 'addon.messages.noncontacts',
                results: [],
                canLoadMore: false,
                loadingMore: false,
            };
            this.messages = {
                type: 'messages',
                titleString: 'addon.messages.messages',
                results: [],
                canLoadMore: false,
                loadingMore: false,
                loadMoreError: false,
            };
            // Update block status of a user.
            this.memberInfoObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, (data) => {
                if (!data.userBlocked && !data.userUnblocked) {
                    // The block status has not changed, ignore.
                    return;
                }
                const contact = this.contacts.results.find((user) => user.id == data.userId);
                if (contact) {
                    contact.isblocked = !!data.userBlocked;
                }
                else {
                    const nonContact = this.nonContacts.results.find((user) => user.id == data.userId);
                    if (nonContact) {
                        nonContact.isblocked = !!data.userBlocked;
                    }
                }
                this.messages.results.forEach((message) => {
                    if (message.userid == data.userId) {
                        message.isblocked = !!data.userBlocked;
                    }
                });
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Clear search.
         */
        clearSearch() {
            this.query = '';
            this.displayResults = false;
            // Empty details.
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/search/discussion');
            if (splitViewLoaded) {
                services_navigator["a" /* CoreNavigator */].navigate('../');
            }
        }
        /**
         * Start a new search or load more results.
         *
         * @param query Text to search for.
         * @param loadMore Load more contacts, noncontacts or messages. If undefined, start a new search.
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        search(query, loadMore, infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                app["a" /* CoreApp */].closeKeyboard();
                this.query = query;
                this.disableSearch = true;
                this.displaySearching = !loadMore;
                const promises = [];
                let newContacts = [];
                let newNonContacts = [];
                let newMessages = [];
                let canLoadMoreContacts = false;
                let canLoadMoreNonContacts = false;
                let canLoadMoreMessages = false;
                if (!loadMore || loadMore == 'contacts' || loadMore == 'noncontacts') {
                    const limitNum = loadMore ? messages["b" /* AddonMessagesProvider */].LIMIT_SEARCH : messages["b" /* AddonMessagesProvider */].LIMIT_INITIAL_USER_SEARCH;
                    let limitFrom = 0;
                    if (loadMore == 'contacts') {
                        limitFrom = this.contacts.results.length;
                        this.contacts.loadingMore = true;
                    }
                    else if (loadMore == 'noncontacts') {
                        limitFrom = this.nonContacts.results.length;
                        this.nonContacts.loadingMore = true;
                    }
                    promises.push(messages["a" /* AddonMessages */].searchUsers(query, limitFrom, limitNum).then((result) => {
                        if (!loadMore || loadMore == 'contacts') {
                            newContacts = result.contacts;
                            canLoadMoreContacts = result.canLoadMoreContacts;
                        }
                        if (!loadMore || loadMore == 'noncontacts') {
                            newNonContacts = result.nonContacts;
                            canLoadMoreNonContacts = result.canLoadMoreNonContacts;
                        }
                        return;
                    }));
                }
                if (!loadMore || loadMore == 'messages') {
                    let limitFrom = 0;
                    if (loadMore == 'messages') {
                        limitFrom = this.messages.results.length;
                        this.messages.loadingMore = true;
                    }
                    promises.push(messages["a" /* AddonMessages */].searchMessages(query, undefined, limitFrom).then((result) => {
                        newMessages = result.messages;
                        canLoadMoreMessages = result.canLoadMore;
                        return;
                    }));
                }
                try {
                    yield Promise.all(promises);
                    if (!loadMore) {
                        this.contacts.results = [];
                        this.nonContacts.results = [];
                        this.messages.results = [];
                    }
                    this.displayResults = true;
                    if (!loadMore || loadMore == 'contacts') {
                        this.contacts.results.push(...newContacts);
                        this.contacts.canLoadMore = canLoadMoreContacts;
                        this.setHighlight(newContacts, true);
                    }
                    if (!loadMore || loadMore == 'noncontacts') {
                        this.nonContacts.results.push(...newNonContacts);
                        this.nonContacts.canLoadMore = canLoadMoreNonContacts;
                        this.setHighlight(newNonContacts, true);
                    }
                    if (!loadMore || loadMore == 'messages') {
                        this.messages.results.push(...newMessages);
                        this.messages.canLoadMore = canLoadMoreMessages;
                        this.messages.loadMoreError = false;
                        this.setHighlight(newMessages, false);
                    }
                    if (!loadMore) {
                        if (this.contacts.results.length > 0) {
                            this.openConversation(this.contacts.results[0], true);
                        }
                        else if (this.nonContacts.results.length > 0) {
                            this.openConversation(this.nonContacts.results[0], true);
                        }
                        else if (this.messages.results.length > 0) {
                            this.openConversation(this.messages.results[0], true);
                        }
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingusers', true);
                    if (loadMore == 'messages') {
                        this.messages.loadMoreError = true;
                    }
                }
                finally {
                    this.disableSearch = false;
                    this.displaySearching = false;
                    if (loadMore == 'contacts') {
                        this.contacts.loadingMore = false;
                    }
                    else if (loadMore == 'noncontacts') {
                        this.nonContacts.loadingMore = false;
                    }
                    else if (loadMore == 'messages') {
                        this.messages.loadingMore = false;
                    }
                    infiniteComplete && infiniteComplete();
                }
            });
        }
        /**
         * Open a conversation in the split view.
         *
         * @param result User or message.
         * @param onInit Whether the tser was selected on initial load.
         */
        openConversation(result, onInit = false) {
            if (!onInit || screen["a" /* CoreScreen */].isTablet) {
                this.selectedResult = result;
                const params = {};
                if ('conversationid' in result) {
                    params.conversationId = result.conversationid;
                }
                else {
                    params.userId = result.id;
                }
                const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/search/discussion');
                const path = (splitViewLoaded ? '../' : '') + 'discussion';
                services_navigator["a" /* CoreNavigator */].navigate(path, { params });
            }
        }
        /**
         * Set the highlight values for each entry.
         *
         * @param results Results to highlight.
         * @param isUser Whether the results are from a user search or from a message search.
         */
        setHighlight(results, isUser = false) {
            results.forEach((result) => {
                result.highlightName = isUser ? this.query : undefined;
                result.highlightMessage = !isUser ? this.query : undefined;
            });
        }
        /**
         * Component destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    AddonMessagesSearchPage.ɵfac = function AddonMessagesSearchPage_Factory(t) { return new (t || AddonMessagesSearchPage)(); };
    AddonMessagesSearchPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesSearchPage, selectors: [["page-addon-messages-search"]], decls: 19, vars: 16, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["autocorrect", "off", "searchArea", "AddonMessagesSearch", 3, "disabled", "spellcheck", "autoFocus", "lengthCheck", "onSubmit", "onClear"], [3, "hideUntil", "message"], [4, "ngIf"], ["icon", "fas-search", 3, "message", 4, "ngIf"], ["resultsTemplate", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "enabled", "error", "action"], ["icon", "fas-search", 3, "message"], [1, "ion-text-wrap"], ["class", "addon-message-discussion ion-text-wrap", "detail", "true", "button", "", 3, "click", 4, "ngFor", "ngForOf"], ["detail", "true", "button", "", 1, "addon-message-discussion", "ion-text-wrap", 3, "click"], ["slot", "start", 3, "user", "checkOnline", "linkProfile"], [1, "item-heading"], [3, "text", "highlight", "filter"], ["name", "fas-ban", 4, "ngIf"], [1, "addon-message-last-message"], ["class", "addon-message-last-message-user", 4, "ngIf"], ["clean", "true", "singleLine", "true", "contextLevel", "system", 1, "addon-message-last-message-text", 3, "text", "highlight", "contextInstanceId"], ["name", "fas-ban"], [1, "addon-message-last-message-user"], ["class", "ion-padding-horizontal", 4, "ngIf"], ["class", "ion-padding ion-text-center", 4, "ngIf"], [1, "ion-padding-horizontal"], ["expand", "block", "color", "light", 3, "click"], [1, "ion-padding", "ion-text-center"]], template: function AddonMessagesSearchPage_Template(rf, ctx) {
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
                core["zc" /* ɵɵelement */](9, "core-context-menu");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "ion-content");
                core["Ec" /* ɵɵelementStart */](11, "core-split-view");
                core["Ec" /* ɵɵelementStart */](12, "core-search-box", 3);
                core["Mc" /* ɵɵlistener */]("onSubmit", function AddonMessagesSearchPage_Template_core_search_box_onSubmit_12_listener($event) { return ctx.search($event); })("onClear", function AddonMessagesSearchPage_Template_core_search_box_onClear_12_listener() { return ctx.clearSearch(); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["nd" /* ɵɵtemplate */](15, AddonMessagesSearchPage_ion_list_15_Template, 5, 14, "ion-list", 5);
                core["nd" /* ɵɵtemplate */](16, AddonMessagesSearchPage_core_empty_box_16_Template, 2, 3, "core-empty-box", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](17, AddonMessagesSearchPage_ng_template_17_Template, 1, 1, "ng-template", null, 7, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, "addon.messages.searchcombined"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("disabled", ctx.disableSearch)("spellcheck", false)("autoFocus", true)("lengthCheck", 1);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", !ctx.displaySearching)("message", core["Qc" /* ɵɵpipeBind1 */](14, 14, "core.searching"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.displayResults);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.displayResults && !ctx.contacts.results.length && !ctx.nonContacts.results.length && !ctx.messages.results.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], search_box["a" /* CoreSearchBoxComponent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], common["A" /* NgTemplateOutlet */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["V" /* IonNote */], ionic_angular["k" /* IonButton */], ionic_angular["pb" /* IonSpinner */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */]], encapsulation: 2 });
    return AddonMessagesSearchPage;
})();

// CONCATENATED MODULE: ./src/addons/messages/pages/search/search.module.ts
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
        component: search_page_AddonMessagesSearchPage,
    },
    messages_lazy_module["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: search_page_AddonMessagesSearchPage,
        children: [
            messages_lazy_module["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let search_module_AddonMessagesSearchPageModule = /*@__PURE__*/ (() => {
    class AddonMessagesSearchPageModule {
    }
    AddonMessagesSearchPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesSearchPageModule });
    AddonMessagesSearchPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesSearchPageModule_Factory(t) { return new (t || AddonMessagesSearchPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSearchComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesSearchPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](search_module_AddonMessagesSearchPageModule, { declarations: [search_page_AddonMessagesSearchPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSearchComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);