(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "fArg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussions35PageModule", function() { return /* binding */ discussions_module_AddonMessagesDiscussions35PageModule; });

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

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/push-delegate.ts
var push_delegate = __webpack_require__("2eZG");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

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

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// CONCATENATED MODULE: ./src/addons/messages/pages/discussions-35/discussions.page.ts

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

























function AddonMessagesDiscussions35Page_core_search_box_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-search-box", 13);
        core["Mc" /* ɵɵlistener */]("onSubmit", function AddonMessagesDiscussions35Page_core_search_box_15_Template_core_search_box_onSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.searchMessage($event); })("onClear", function AddonMessagesDiscussions35Page_core_search_box_15_Template_core_search_box_onClear_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.clearSearch(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](1, 3, "addon.messages.message"))("disabled", !ctx_r0.loaded)("autoFocus", false);
    }
}
function AddonMessagesDiscussions35Page_ng_container_25_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussions35Page_ng_container_25_ion_item_9_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r11); const result_r9 = ctx.$implicit; const ctx_r10 = core["Oc" /* ɵɵnextContext */](2); return ctx_r10.gotoDiscussion(result_r9.userid, result_r9.messageid); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 17);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 18);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 19);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const result_r9 = ctx.$implicit;
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", result_r9.fullname)("aria-current", result_r9.userid == ctx_r8.discussionUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", result_r9)("checkOnline", result_r9.showonlinestatus);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](result_r9.fullname);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", result_r9.lastmessage)("contextInstanceId", 0);
    }
}
function AddonMessagesDiscussions35Page_ng_container_25_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-note", 14);
        core["Ec" /* ɵɵelementStart */](7, "ion-badge");
        core["pd" /* ɵɵtext */](8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonMessagesDiscussions35Page_ng_container_25_ion_item_9_Template, 7, 7, "ion-item", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "core.searchresults"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.search.results.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.search.results);
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_span_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 25);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const discussion_r13 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, discussion_r13.message.timecreated / 1000), " ");
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 26);
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 27);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.unreadmessages"), " ");
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note");
        core["nd" /* ɵɵtemplate */](1, AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_span_1_Template, 3, 3, "span", 22);
        core["nd" /* ɵɵtemplate */](2, AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_ion_icon_2_Template, 1, 0, "ion-icon", 23);
        core["nd" /* ɵɵtemplate */](3, AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_span_3_Template, 3, 3, "span", 24);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const discussion_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", discussion_r13.message.timecreated > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", discussion_r13.unread);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", discussion_r13.unread);
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r21); const discussion_r13 = ctx.$implicit; const ctx_r20 = core["Oc" /* ɵɵnextContext */](2); return ctx_r20.gotoDiscussion(discussion_r13.message.user); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 20);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "div", 21);
        core["Ec" /* ɵɵelementStart */](4, "p", 18);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_ion_note_6_Template, 4, 3, "ion-note", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p");
        core["zc" /* ɵɵelement */](8, "core-format-text", 19);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const discussion_r13 = ctx.$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", discussion_r13.fullname)("aria-current", discussion_r13.message.user == ctx_r12.discussionUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", discussion_r13);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](discussion_r13.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", discussion_r13.message.timecreated > 0 || discussion_r13.unread);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", discussion_r13.message.message)("contextInstanceId", 0);
    }
}
function AddonMessagesDiscussions35Page_ng_container_26_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesDiscussions35Page_ng_container_26_ion_item_1_Template, 9, 7, "ion-item", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.discussions);
    }
}
function AddonMessagesDiscussions35Page_core_empty_box_27_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 28);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.nomessagesfound"));
    }
}
function AddonMessagesDiscussions35Page_core_empty_box_28_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 29);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.noresults"));
    }
}
/**
 * Page that displays the list of discussions.
 */
let discussions_page_AddonMessagesDiscussions35Page = /*@__PURE__*/ (() => {
    class AddonMessagesDiscussions35Page {
        constructor(route) {
            this.route = route;
            this.loaded = false;
            this.loadingMessage = '';
            this.discussions = [];
            this.search = {
                enabled: false,
                showResults: false,
                results: [],
                loading: '',
                text: '',
            };
            this.search.loading = singletons["L" /* Translate */].instant('core.searching');
            this.loadingMessages = singletons["L" /* Translate */].instant('core.loading');
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            // Update discussions when new message is received.
            this.newMessagesObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].NEW_MESSAGE_EVENT, (data) => {
                if (data.userId && this.discussions) {
                    const discussion = this.discussions.find((disc) => disc.message.user == data.userId);
                    if (typeof discussion == 'undefined') {
                        this.loaded = false;
                        this.refreshData().finally(() => {
                            this.loaded = true;
                        });
                    }
                    else {
                        // An existing discussion has a new message, update the last message.
                        discussion.message.message = data.message;
                        discussion.message.timecreated = data.timecreated;
                    }
                }
            }, this.siteId);
            // Update discussions when a message is read.
            this.readChangedObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].READ_CHANGED_EVENT, (data) => {
                if (data.userId && this.discussions) {
                    const discussion = this.discussions.find((disc) => disc.message.user == data.userId);
                    if (typeof discussion != 'undefined') {
                        // A discussion has been read reset counter.
                        discussion.unread = false;
                        // Conversations changed, invalidate them and refresh unread counts.
                        messages["a" /* AddonMessages */].invalidateConversations(this.siteId);
                        messages["a" /* AddonMessages */].refreshUnreadConversationCounts(this.siteId);
                    }
                }
            }, this.siteId);
            // Refresh the view when the app is resumed.
            this.appResumeSubscription = singletons["C" /* Platform */].resume.subscribe(() => {
                if (!this.loaded) {
                    return;
                }
                this.loaded = false;
                this.refreshData();
            });
            // If a message push notification is received, refresh the view.
            this.pushObserver = push_delegate["a" /* CorePushNotificationsDelegate */].on('receive')
                .subscribe((notification) => {
                // New message received. If it's from current site, refresh the data.
                if (utils["a" /* CoreUtils */].isFalseOrZero(notification.notif) && notification.site == this.siteId) {
                    // Don't refresh unread counts, it's refreshed from the main menu handler in this case.
                    this.refreshData(undefined, false);
                }
            });
        }
        /**
         * Component loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.route.queryParams.subscribe((params) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    var _a;
                    // When a child page loads this callback is triggered too.
                    this.discussionUserId = (_a = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId', { params })) !== null && _a !== void 0 ? _a : this.discussionUserId;
                }));
                yield this.fetchData();
                if (!this.discussionUserId && this.discussions.length > 0 && screen["a" /* CoreScreen */].isTablet) {
                    // Take first and load it.
                    this.gotoDiscussion(this.discussions[0].message.user);
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param refreshUnreadCounts Whteher to refresh unread counts.
         * @return Promise resolved when done.
         */
        refreshData(refresher, refreshUnreadCounts = true) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(messages["a" /* AddonMessages */].invalidateDiscussionsCache(this.siteId));
                if (refreshUnreadCounts) {
                    promises.push(messages["a" /* AddonMessages */].invalidateUnreadConversationCounts(this.siteId));
                }
                yield utils["a" /* CoreUtils */].allPromises(promises).finally(() => this.fetchData().finally(() => {
                    if (refresher) {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                }));
            });
        }
        /**
         * Fetch discussions.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadingMessage = this.loadingMessages;
                this.search.enabled = messages["a" /* AddonMessages */].isSearchMessagesEnabled();
                const promises = [];
                promises.push(messages["a" /* AddonMessages */].getDiscussions(this.siteId).then((discussions) => {
                    // Convert to an array for sorting.
                    const discussionsSorted = [];
                    for (const userId in discussions) {
                        discussions[userId].unread = !!discussions[userId].unread;
                        discussionsSorted.push(discussions[userId]);
                    }
                    this.discussions = discussionsSorted.sort((a, b) => { var _a, _b; return (((_a = b.message) === null || _a === void 0 ? void 0 : _a.timecreated) || 0) - (((_b = a.message) === null || _b === void 0 ? void 0 : _b.timecreated) || 0); });
                    return;
                }));
                promises.push(messages["a" /* AddonMessages */].getUnreadConversationCounts(this.siteId));
                try {
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingdiscussions', true);
                }
                this.loaded = true;
            });
        }
        /**
         * Clear search and show discussions again.
         */
        clearSearch() {
            this.loaded = false;
            this.search.showResults = false;
            this.search.text = ''; // Reset searched string.
            this.fetchData().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Search messages cotaining text.
         *
         * @param query Text to search for.
         * @return Resolved when done.
         */
        searchMessage(query) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                app["a" /* CoreApp */].closeKeyboard();
                this.loaded = false;
                this.loadingMessage = this.search.loading;
                try {
                    const searchResults = yield messages["a" /* AddonMessages */].searchMessages(query, undefined, undefined, undefined, this.siteId);
                    this.search.showResults = true;
                    this.search.results = searchResults.messages;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                this.loaded = true;
            });
        }
        /**
         * Navigate to a particular discussion.
         *
         * @param discussionUserId Discussion Id to load.
         * @param messageId Message to scroll after loading the discussion. Used when searching.
         * @param onlyWithSplitView Only go to Discussion if split view is on.
         */
        gotoDiscussion(discussionUserId, messageId) {
            this.discussionUserId = discussionUserId;
            const params = {
                userId: discussionUserId,
            };
            if (messageId) {
                params.message = messageId;
            }
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/index/discussion');
            const path = (splitViewLoaded ? '../' : '') + 'discussion';
            services_navigator["a" /* CoreNavigator */].navigate(path, { params });
        }
        /**
         * Navigate to contacts view.
         */
        gotoContacts() {
            const params = {};
            if (screen["a" /* CoreScreen */].isTablet && this.discussionUserId) {
                params.discussionUserId = this.discussionUserId;
            }
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('contacts-35', { params });
        }
        /**
         * Component destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d;
            (_a = this.newMessagesObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.readChangedObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.appResumeSubscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
            (_d = this.pushObserver) === null || _d === void 0 ? void 0 : _d.unsubscribe();
        }
    }
    AddonMessagesDiscussions35Page.ɵfac = function AddonMessagesDiscussions35Page_Factory(t) { return new (t || AddonMessagesDiscussions35Page)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonMessagesDiscussions35Page.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesDiscussions35Page, selectors: [["addon-messages-discussions"]], decls: 29, vars: 23, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], ["autocorrect", "off", "spellcheck", "false", "lengthCheck", "2", "searchArea", "AddonMessagesDiscussions", 3, "placeholder", "disabled", "autoFocus", "onSubmit", "onClear", 4, "ngIf"], [3, "hideUntil", "message"], [1, "ion-no-margin"], ["detail", "true", "button", "", 1, "ion-text-wrap", "addon-message-discussion", 3, "click"], ["name", "fas-address-book", "slot", "start", "aria-hidden", "true"], [4, "ngIf"], ["icon", "far-comments", 3, "message", 4, "ngIf"], ["icon", "fas-search", 3, "message", 4, "ngIf"], ["autocorrect", "off", "spellcheck", "false", "lengthCheck", "2", "searchArea", "AddonMessagesDiscussions", 3, "placeholder", "disabled", "autoFocus", "onSubmit", "onClear"], ["slot", "end", 1, "ion-padding-end"], ["class", "ion-text-wrap addon-message-discussion", "button", "", "detail", "false", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "false", 1, "ion-text-wrap", "addon-message-discussion", 3, "click"], ["slot", "start", 3, "user", "checkOnline"], [1, "item-heading"], ["clean", "true", "singleLine", "true", "contextLevel", "system", 3, "text", "contextInstanceId"], ["slot", "start", "checkOnline", "false", 3, "user"], [1, "flex-row", "ion-justify-content-between"], ["class", "addon-message-last-message-date", 4, "ngIf"], ["name", "fas-circle", "color", "primary", "aria-hidden", "true", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], [1, "addon-message-last-message-date"], ["name", "fas-circle", "color", "primary", "aria-hidden", "true"], [1, "sr-only"], ["icon", "far-comments", 3, "message"], ["icon", "fas-search", 3, "message"]], template: function AddonMessagesDiscussions35Page_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](12, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesDiscussions35Page_Template_ion_refresher_ionRefresh_12_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](13, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](15, AddonMessagesDiscussions35Page_core_search_box_15_Template, 2, 5, "core-search-box", 5);
                core["Ec" /* ɵɵelementStart */](16, "core-loading", 6);
                core["Ec" /* ɵɵelementStart */](17, "ion-list", 7);
                core["Ec" /* ɵɵelementStart */](18, "ion-item", 8);
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesDiscussions35Page_Template_ion_item_click_18_listener() { return ctx.gotoContacts(); });
                core["Pc" /* ɵɵpipe */](19, "translate");
                core["zc" /* ɵɵelement */](20, "ion-icon", 9);
                core["Ec" /* ɵɵelementStart */](21, "ion-label");
                core["Ec" /* ɵɵelementStart */](22, "h2");
                core["pd" /* ɵɵtext */](23);
                core["Pc" /* ɵɵpipe */](24, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](25, AddonMessagesDiscussions35Page_ng_container_25_Template, 10, 5, "ng-container", 10);
                core["nd" /* ɵɵtemplate */](26, AddonMessagesDiscussions35Page_ng_container_26_Template, 2, 1, "ng-container", 10);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](27, AddonMessagesDiscussions35Page_core_empty_box_27_Template, 2, 3, "core-empty-box", 11);
                core["nd" /* ɵɵtemplate */](28, AddonMessagesDiscussions35Page_core_empty_box_28_Template, 2, 3, "core-empty-box", 12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 13, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 15, "addon.messages.messages"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](14, 17, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.search.enabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded)("message", ctx.loadingMessage);
                core["lc" /* ɵɵadvance */](2);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](19, 19, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 21, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.search.showResults);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.search.showResults);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", (!ctx.discussions || ctx.discussions.length <= 0) && !ctx.search.showResults);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", (!ctx.search.results || ctx.search.results.length <= 0) && ctx.search.showResults);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], common["t" /* NgIf */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], search_box["a" /* CoreSearchBoxComponent */], ionic_angular["I" /* IonItemDivider */], ionic_angular["V" /* IonNote */], ionic_angular["j" /* IonBadge */], common["s" /* NgForOf */], user_avatar["a" /* CoreUserAvatarComponent */], format_text["a" /* CoreFormatTextDirective */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */]], styles: ["[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-right:0;margin-left:0}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-start;margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:3px;align-self:flex-end}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{white-space:nowrap;color:var(--ion-text-color);margin-right:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:2px;margin-left:0}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{margin-left:2px;margin-right:0}"] });
    return AddonMessagesDiscussions35Page;
})();

// EXTERNAL MODULE: ./src/addons/messages/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("OQOI");

// CONCATENATED MODULE: ./src/addons/messages/pages/discussions-35/discussions.module.ts
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
        component: discussions_page_AddonMessagesDiscussions35Page,
    },
    messages_lazy_module["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: mainmenu["b" /* AddonMessagesMainMenuHandlerService */].PAGE_NAME,
        },
        component: discussions_page_AddonMessagesDiscussions35Page,
        children: [
            messages_lazy_module["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let discussions_module_AddonMessagesDiscussions35PageModule = /*@__PURE__*/ (() => {
    class AddonMessagesDiscussions35PageModule {
    }
    AddonMessagesDiscussions35PageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesDiscussions35PageModule });
    AddonMessagesDiscussions35PageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesDiscussions35PageModule_Factory(t) { return new (t || AddonMessagesDiscussions35PageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSearchComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesDiscussions35PageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](discussions_module_AddonMessagesDiscussions35PageModule, { declarations: [discussions_page_AddonMessagesDiscussions35Page], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSearchComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);