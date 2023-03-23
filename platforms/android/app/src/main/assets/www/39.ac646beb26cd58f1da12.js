(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "617G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesContactsPageModule", function() { return /* binding */ contacts_module_AddonMessagesContactsPageModule; });

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

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var messages = __webpack_require__("KMk0");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/components/tabs/tabs.ts
var tabs = __webpack_require__("vWwc");

// EXTERNAL MODULE: ./src/core/components/tabs/tab.ts
var tab = __webpack_require__("JYLr");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/messages/pages/contacts/contacts.page.ts

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





















function AddonMessagesContactsPage_ng_template_18_ion_item_5_ion_icon_5_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 19);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.contactblocked"));
    }
}
function AddonMessagesContactsPage_ng_template_18_ion_item_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 14);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesContactsPage_ng_template_18_ion_item_5_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r7); const contact_r4 = ctx.$implicit; const ctx_r6 = core["Oc" /* ɵɵnextContext */](2); return ctx_r6.selectUser(contact_r4.id); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 15);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 16);
        core["zc" /* ɵɵelement */](4, "core-format-text", 17);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesContactsPage_ng_template_18_ion_item_5_ion_icon_5_Template, 2, 3, "ion-icon", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const contact_r4 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", contact_r4.fullname)("aria-current", contact_r4.id == ctx_r2.selectedUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", contact_r4)("checkOnline", contact_r4.showonlinestatus)("linkProfile", false);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", contact_r4.fullname)("contextInstanceId", 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", contact_r4.isblocked);
    }
}
function AddonMessagesContactsPage_ng_template_18_core_empty_box_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 20);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.nocontactsgetstarted"));
    }
}
function AddonMessagesContactsPage_ng_template_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-refresher", 8);
        core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesContactsPage_ng_template_18_Template_ion_refresher_ionRefresh_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r9); const ctx_r8 = core["Oc" /* ɵɵnextContext */](); return ctx_r8.refreshData($event.target); });
        core["zc" /* ɵɵelement */](1, "ion-refresher-content", 9);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "core-loading", 5);
        core["Ec" /* ɵɵelementStart */](4, "ion-list", 10);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesContactsPage_ng_template_18_ion_item_5_Template, 6, 8, "ion-item", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonMessagesContactsPage_ng_template_18_core_empty_box_6_Template, 2, 3, "core-empty-box", 12);
        core["Ec" /* ɵɵelementStart */](7, "core-infinite-loading", 13);
        core["Mc" /* ɵɵlistener */]("action", function AddonMessagesContactsPage_ng_template_18_Template_core_infinite_loading_action_7_listener($event) { core["gd" /* ɵɵrestoreView */](_r9); const ctx_r10 = core["Oc" /* ɵɵnextContext */](); return ctx_r10.loadMore($event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r0.confirmedLoaded);
        core["lc" /* ɵɵadvance */](1);
        core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](2, 7, "core.pulltorefresh"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("hideUntil", ctx_r0.confirmedLoaded);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.confirmedContacts);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.confirmedContacts.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("enabled", ctx_r0.confirmedCanLoadMore)("error", ctx_r0.confirmedLoadMoreError);
    }
}
function AddonMessagesContactsPage_ng_template_21_ion_item_5_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.messages.wouldliketocontactyou"), " ");
    }
}
function AddonMessagesContactsPage_ng_template_21_ion_item_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 14);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesContactsPage_ng_template_21_ion_item_5_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r16); const request_r13 = ctx.$implicit; const ctx_r15 = core["Oc" /* ɵɵnextContext */](2); return ctx_r15.selectUser(request_r13.id); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 21);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["zc" /* ɵɵelement */](3, "core-format-text", 17);
        core["nd" /* ɵɵtemplate */](4, AddonMessagesContactsPage_ng_template_21_ion_item_5_p_4_Template, 3, 3, "p", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const request_r13 = ctx.$implicit;
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-label", request_r13.fullname)("aria-current", request_r13.id == ctx_r11.selectedUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", request_r13)("linkProfile", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", request_r13.fullname)("contextInstanceId", 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !request_r13.iscontact);
    }
}
function AddonMessagesContactsPage_ng_template_21_core_empty_box_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 20);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.nocontactrequests"));
    }
}
function AddonMessagesContactsPage_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-refresher", 8);
        core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesContactsPage_ng_template_21_Template_ion_refresher_ionRefresh_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r17 = core["Oc" /* ɵɵnextContext */](); return ctx_r17.refreshData($event.target); });
        core["zc" /* ɵɵelement */](1, "ion-refresher-content", 9);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "core-loading", 5);
        core["Ec" /* ɵɵelementStart */](4, "ion-list", 10);
        core["nd" /* ɵɵtemplate */](5, AddonMessagesContactsPage_ng_template_21_ion_item_5_Template, 5, 7, "ion-item", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonMessagesContactsPage_ng_template_21_core_empty_box_6_Template, 2, 3, "core-empty-box", 12);
        core["Ec" /* ɵɵelementStart */](7, "core-infinite-loading", 13);
        core["Mc" /* ɵɵlistener */]("action", function AddonMessagesContactsPage_ng_template_21_Template_core_infinite_loading_action_7_listener($event) { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r19 = core["Oc" /* ɵɵnextContext */](); return ctx_r19.loadMore($event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r1.requestsLoaded);
        core["lc" /* ɵɵadvance */](1);
        core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](2, 7, "core.pulltorefresh"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("hideUntil", ctx_r1.requestsLoaded);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.requests);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.requests.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("enabled", ctx_r1.requestsCanLoadMore)("error", ctx_r1.requestsLoadMoreError);
    }
}
/**
 * Page that displays contacts and contact requests.
 */
let contacts_page_AddonMessagesContactsPage = /*@__PURE__*/ (() => {
    class AddonMessagesContactsPage {
        constructor() {
            this.selected = 'confirmed';
            this.requestsBadge = '';
            this.confirmedLoaded = false;
            this.confirmedInitialising = false;
            this.confirmedCanLoadMore = false;
            this.confirmedLoadMoreError = false;
            this.confirmedContacts = [];
            this.requestsLoaded = false;
            this.requestsInitialising = false;
            this.requestsCanLoadMore = false;
            this.requestsLoadMoreError = false;
            this.requests = [];
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            // Update the contact requests badge.
            this.contactRequestsCountObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].CONTACT_REQUESTS_COUNT_EVENT, (data) => {
                this.requestsBadge = data.count > 0 ? String(data.count) : '';
            }, this.siteId);
            // Update block status of a user.
            this.memberInfoObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, (data) => {
                if (data.userBlocked || data.userUnblocked) {
                    const user = this.confirmedContacts.find((user) => user.id == data.userId);
                    if (user) {
                        user.isblocked = !!data.userBlocked;
                    }
                }
                else if (data.contactRemoved) {
                    const index = this.confirmedContacts.findIndex((contact) => contact.id == data.userId);
                    if (index >= 0) {
                        this.confirmedContacts.splice(index, 1);
                    }
                }
                else if (data.contactRequestConfirmed) {
                    this.confirmedFetchData(true);
                }
                if (data.contactRequestConfirmed || data.contactRequestDeclined) {
                    const index = this.requests.findIndex((request) => request.id == data.userId);
                    if (index >= 0) {
                        this.requests.splice(index, 1);
                    }
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Page being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                messages["a" /* AddonMessages */].getContactRequestsCount(this.siteId); // Badge already updated by the observer.
                this.selected === 'confirmed'
                    ? yield this.initConfirmed()
                    : yield this.initRequests();
            });
        }
        /**
         * Initialise confirmed contacts.
         */
        initConfirmed() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.confirmedInitialising) {
                    return;
                }
                try {
                    this.confirmedInitialising = true;
                    yield this.confirmedFetchData();
                    if (this.confirmedContacts.length && screen["a" /* CoreScreen */].isTablet) {
                        this.selectUser(this.confirmedContacts[0].id, true);
                    }
                }
                finally {
                    this.confirmedInitialising = false;
                    this.confirmedLoaded = true;
                }
            });
        }
        /**
         * Initialise contact requests.
         */
        initRequests() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.requestsInitialising) {
                    return;
                }
                try {
                    this.requestsInitialising = true;
                    yield this.requestsFetchData();
                    if (this.requests.length && screen["a" /* CoreScreen */].isTablet) {
                        this.selectUser(this.requests[0].id, true);
                    }
                }
                finally {
                    this.requestsInitialising = false;
                    this.requestsLoaded = true;
                }
            });
        }
        /**
         * Fetch contacts.
         *
         * @param refresh True if we are refreshing contacts, false if we are loading more.
         * @return Promise resolved when done.
         */
        confirmedFetchData(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.confirmedLoadMoreError = false;
                const limitFrom = refresh ? 0 : this.confirmedContacts.length;
                if (limitFrom === 0) {
                    // Always try to get latest data from server.
                    yield messages["a" /* AddonMessages */].invalidateUserContacts();
                }
                try {
                    const result = yield messages["a" /* AddonMessages */].getUserContacts(limitFrom);
                    this.confirmedContacts = refresh ? result.contacts : this.confirmedContacts.concat(result.contacts);
                    this.confirmedCanLoadMore = result.canLoadMore;
                }
                catch (error) {
                    this.confirmedLoadMoreError = true;
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
                }
            });
        }
        /**
         * Fetch contact requests.
         *
         * @param refresh True if we are refreshing contact requests, false if we are loading more.
         * @return Promise resolved when done.
         */
        requestsFetchData(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.requestsLoadMoreError = false;
                const limitFrom = refresh ? 0 : this.requests.length;
                if (limitFrom === 0) {
                    // Always try to get latest data from server.
                    yield messages["a" /* AddonMessages */].invalidateContactRequestsCache();
                }
                try {
                    const result = yield messages["a" /* AddonMessages */].getContactRequests(limitFrom);
                    this.requests = refresh ? result.requests : this.requests.concat(result.requests);
                    this.requestsCanLoadMore = result.canLoadMore;
                }
                catch (error) {
                    this.requestsLoadMoreError = true;
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
                }
            });
        }
        /**
         * Refresh contacts or requests.
         *
         * @param refresher Refresher.
         * @return Promise resolved when done.
         */
        refreshData(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.selected == 'confirmed') {
                        // No need to invalidate contacts, we always try to get the latest.
                        yield this.confirmedFetchData(true);
                    }
                    else {
                        // Refresh the number of contacts requests to update badges.
                        messages["a" /* AddonMessages */].refreshContactRequestsCount();
                        // No need to invalidate contact requests, we always try to get the latest.
                        yield this.requestsFetchData(true);
                    }
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Load more contacts or requests.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadMore(infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.selected == 'confirmed') {
                        // No need to invalidate contacts, we always try to get the latest.
                        yield this.confirmedFetchData();
                    }
                    else {
                        yield this.requestsFetchData();
                    }
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            });
        }
        /**
         * Navigate to the search page.
         */
        gotoSearch() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('search');
        }
        selectTab(selected) {
            if (selected !== 'confirmed' && selected !== 'requests') {
                return;
            }
            this.selected = selected;
            if (this.selected == 'confirmed' && !this.confirmedLoaded) {
                this.initConfirmed();
            }
            if (this.selected == 'requests' && !this.requestsLoaded) {
                this.initRequests();
            }
        }
        /**
         * Set the selected user and open the conversation in the split view if needed.
         *
         * @param userId Id of the selected user, undefined to use the last selected user in the tab.
         * @param onInit Whether the contact was selected on initial load.
         */
        selectUser(userId, onInit = false) {
            if (userId == this.selectedUserId && screen["a" /* CoreScreen */].isTablet) {
                // No user conversation to open or it is already opened.
                return;
            }
            if (onInit && screen["a" /* CoreScreen */].isMobile) {
                // Do not open a conversation by default when split view is not visible.
                return;
            }
            this.selectedUserId = userId;
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/contacts/discussion');
            const path = (splitViewLoaded ? '../' : '') + 'discussion';
            services_navigator["a" /* CoreNavigator */].navigate(path, { params: { userId } });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.contactRequestsCountObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    AddonMessagesContactsPage.ɵfac = function AddonMessagesContactsPage_Factory(t) { return new (t || AddonMessagesContactsPage)(); };
    AddonMessagesContactsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesContactsPage, selectors: [["page-addon-messages-contacts"]], decls: 22, vars: 17, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], [3, "hideUntil"], [3, "title", "ionSelect"], ["badgeA11yText", "addon.messages.pendingcontactrequests", 3, "title", "badge", "ionSelect"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [1, "ion-no-margin"], ["class", "ion-text-wrap addon-messages-conversation-item", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["icon", "far-address-book", 3, "message", 4, "ngIf"], ["position", "bottom", 3, "enabled", "error", "action"], ["button", "", "detail", "true", 1, "ion-text-wrap", "addon-messages-conversation-item", 3, "click"], ["slot", "start", 3, "user", "checkOnline", "linkProfile"], [1, "item-heading"], ["contextLevel", "system", 3, "text", "contextInstanceId"], ["name", "fas-user-slash", "slot", "end", 4, "ngIf"], ["name", "fas-user-slash", "slot", "end"], ["icon", "far-address-book", 3, "message"], ["slot", "start", 3, "user", "linkProfile"], [4, "ngIf"]], template: function AddonMessagesContactsPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function AddonMessagesContactsPage_Template_ion_button_click_9_listener() { return ctx.gotoSearch(); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](12, "core-context-menu");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "core-split-view");
                core["Ec" /* ɵɵelementStart */](15, "core-tabs", 5);
                core["Ec" /* ɵɵelementStart */](16, "core-tab", 6);
                core["Mc" /* ɵɵlistener */]("ionSelect", function AddonMessagesContactsPage_Template_core_tab_ionSelect_16_listener() { return ctx.selectTab("confirmed"); });
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["nd" /* ɵɵtemplate */](18, AddonMessagesContactsPage_ng_template_18_Template, 8, 9, "ng-template");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](19, "core-tab", 7);
                core["Mc" /* ɵɵlistener */]("ionSelect", function AddonMessagesContactsPage_Template_core_tab_ionSelect_19_listener() { return ctx.selectTab("requests"); });
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["nd" /* ɵɵtemplate */](21, AddonMessagesContactsPage_ng_template_21_Template, 8, 9, "ng-template");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 9, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 11, "addon.messages.searchcombined"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("hideUntil", true);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("title", core["Qc" /* ɵɵpipeBind1 */](17, 13, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("title", core["Qc" /* ɵɵpipeBind1 */](20, 15, "addon.messages.requests"))("badge", ctx.requestsBadge);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], tabs["a" /* CoreTabsComponent */], tab["a" /* CoreTabComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], common["t" /* NgIf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-right:0;margin-left:0}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-start;margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:3px;align-self:flex-end}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{white-space:nowrap;color:var(--ion-text-color);margin-right:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:2px;margin-left:0}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{margin-left:2px;margin-right:0}"] });
    return AddonMessagesContactsPage;
})();

// CONCATENATED MODULE: ./src/addons/messages/pages/contacts/contacts.module.ts
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
        component: contacts_page_AddonMessagesContactsPage,
    },
    messages_lazy_module["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: contacts_page_AddonMessagesContactsPage,
        children: [
            messages_lazy_module["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let contacts_module_AddonMessagesContactsPageModule = /*@__PURE__*/ (() => {
    class AddonMessagesContactsPageModule {
    }
    AddonMessagesContactsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesContactsPageModule });
    AddonMessagesContactsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesContactsPageModule_Factory(t) { return new (t || AddonMessagesContactsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesContactsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](contacts_module_AddonMessagesContactsPageModule, { declarations: [contacts_page_AddonMessagesContactsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);