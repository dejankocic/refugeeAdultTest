(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "bxKJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesContacts35PageModule", function() { return /* binding */ contacts_module_AddonMessagesContacts35PageModule; });

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

// EXTERNAL MODULE: ./src/core/features/search/components/components.module.ts
var components_module = __webpack_require__("PM4H");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var messages = __webpack_require__("KMk0");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

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

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/messages/pages/contacts-35/contacts.page.ts

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




















function AddonMessagesContacts35Page_core_empty_box_18_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 9);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.contactlistempty"));
    }
}
function AddonMessagesContacts35Page_core_empty_box_19_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 9);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.messages.nousersfound"));
    }
}
function AddonMessagesContacts35Page_ion_list_20_ng_container_1_ng_container_9_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonMessagesContacts35Page_ion_list_20_ng_container_1_ng_container_9_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r10); const contact_r6 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r8 = core["Oc" /* ɵɵnextContext */](3); return ctx_r8.gotoDiscussion(contact_r6.id); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 17);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 12);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const contact_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](3);
        core["mc" /* ɵɵattribute */]("aria-label", contact_r6.fullname)("aria-current", contact_r6.id == ctx_r7.discussionUserId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", contact_r6)("checkOnline", contact_r6.showonlinestatus);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](contact_r6.fullname);
    }
}
function AddonMessagesContacts35Page_ion_list_20_ng_container_1_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesContacts35Page_ion_list_20_ng_container_1_ng_container_9_ion_item_1_Template, 5, 5, "ion-item", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const contact_r6 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", contact_r6.profileimageurl || contact_r6.profileimageurlsmall);
    }
}
function AddonMessagesContacts35Page_ion_list_20_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 12);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-note", 13);
        core["Ec" /* ɵɵelementStart */](7, "ion-badge");
        core["pd" /* ɵɵtext */](8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonMessagesContacts35Page_ion_list_20_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 14);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const contactType_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 3, "addon.messages.type_" + contactType_r3));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](ctx_r4.contacts[contactType_r3].length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.contacts[contactType_r3]);
    }
}
function AddonMessagesContacts35Page_ion_list_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 10);
        core["nd" /* ɵɵtemplate */](1, AddonMessagesContacts35Page_ion_list_20_ng_container_1_Template, 10, 5, "ng-container", 11);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const contactType_r3 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.contacts[contactType_r3] && (ctx_r2.contacts[contactType_r3].length > 0 || contactType_r3 === ctx_r2.searchType));
    }
}
/**
 * Page that displays the list of contacts.
 */
let contacts_page_AddonMessagesContacts35Page = /*@__PURE__*/ (() => {
    class AddonMessagesContacts35Page {
        constructor(route) {
            this.route = route;
            this.noSearchTypes = ['online', 'offline', 'blocked', 'strangers'];
            this.loaded = false;
            this.contactTypes = ['online', 'offline', 'blocked', 'strangers'];
            this.searchType = 'search';
            this.loadingMessage = '';
            this.hasContacts = false;
            this.contacts = {
                online: [],
                offline: [],
                strangers: [],
                search: [],
            };
            this.searchString = '';
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.searchingMessages = singletons["L" /* Translate */].instant('core.searching');
            this.loadingMessages = singletons["L" /* Translate */].instant('core.loading');
            this.loadingMessage = this.loadingMessages;
            // Refresh the list when a contact request is confirmed.
            this.memberInfoObserver = events["b" /* CoreEvents */].on(messages["b" /* AddonMessagesProvider */].MEMBER_INFO_CHANGED_EVENT, (data) => {
                if (data.contactRequestConfirmed) {
                    this.refreshData();
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Component loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const discussionUserId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('discussionUserId') ||
                    services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId') || undefined;
                if (this.loaded && this.discussionUserId == discussionUserId) {
                    return;
                }
                this.discussionUserId = discussionUserId;
                if (this.discussionUserId) {
                    // There is a discussion to load, open the discussion in a new state.
                    this.gotoDiscussion(this.discussionUserId);
                }
                try {
                    yield this.fetchData();
                    if (!this.discussionUserId && this.hasContacts && screen["a" /* CoreScreen */].isTablet) {
                        let contact;
                        for (const x in this.contacts) {
                            if (this.contacts[x].length > 0) {
                                contact = this.contacts[x][0];
                                break;
                            }
                        }
                        if (contact) {
                            // Take first and load it.
                            this.gotoDiscussion(contact.id);
                        }
                    }
                }
                finally {
                    this.loaded = true;
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
                try {
                    if (this.searchString) {
                        // User has searched, update the search.
                        yield this.performSearch(this.searchString);
                    }
                    else {
                        // Update contacts.
                        yield messages["a" /* AddonMessages */].invalidateAllContactsCache();
                        yield this.fetchData();
                    }
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Fetch contacts.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadingMessage = this.loadingMessages;
                try {
                    const contacts = yield messages["a" /* AddonMessages */].getAllContacts();
                    for (const x in contacts) {
                        if (contacts[x].length > 0) {
                            this.contacts[x] = this.sortUsers(contacts[x]);
                        }
                        else {
                            this.contacts[x] = [];
                        }
                    }
                    this.clearSearch();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
                }
            });
        }
        /**
         * Sort user list by fullname
         *
         * @param list List to sort.
         * @return Sorted list.
         */
        sortUsers(list) {
            return list.sort((a, b) => {
                const compareA = a.fullname.toLowerCase();
                const compareB = b.fullname.toLowerCase();
                return compareA.localeCompare(compareB);
            });
        }
        /**
         * Clear search and show all contacts again.
         */
        clearSearch() {
            this.searchString = ''; // Reset searched string.
            this.contactTypes = this.noSearchTypes;
            this.hasContacts = false;
            for (const x in this.contacts) {
                if (this.contacts[x].length > 0) {
                    this.hasContacts = true;
                    return;
                }
            }
        }
        /**
         * Search users from the UI.
         *
         * @param query Text to search for.
         * @return Resolved when done.
         */
        search(query) {
            app["a" /* CoreApp */].closeKeyboard();
            this.loaded = false;
            this.loadingMessage = this.searchingMessages;
            return this.performSearch(query).finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Perform the search of users.
         *
         * @param query Text to search for.
         * @return Resolved when done.
         */
        performSearch(query) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield messages["a" /* AddonMessages */].searchContacts(query);
                    this.hasContacts = result.length > 0;
                    this.searchString = query;
                    this.contactTypes = ['search'];
                    this.contacts.search = this.sortUsers(result);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingcontacts', true);
                }
            });
        }
        /**
         * Navigate to a particular discussion.
         *
         * @param discussionUserId Discussion Id to load.
         */
        gotoDiscussion(discussionUserId) {
            this.discussionUserId = discussionUserId;
            const params = {
                userId: discussionUserId,
            };
            const splitViewLoaded = services_navigator["a" /* CoreNavigator */].isCurrentPathInTablet('**/messages/contacts-35/discussion');
            const path = (splitViewLoaded ? '../' : '') + 'discussion';
            // @todo Check why this is failing on ngInit.
            services_navigator["a" /* CoreNavigator */].navigate(path, { params });
        }
        /**
         * Component destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.memberInfoObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    AddonMessagesContacts35Page.ɵfac = function AddonMessagesContacts35Page_Factory(t) { return new (t || AddonMessagesContacts35Page)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonMessagesContacts35Page.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonMessagesContacts35Page, selectors: [["addon-messages-contacts"]], decls: 21, vars: 19, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], ["autocorrect", "off", "spellcheck", "false", "lengthCheck", "2", "searchArea", "AddonMessagesContacts", 3, "placeholder", "disabled", "onSubmit", "onClear"], [3, "hideUntil", "message"], ["icon", "fas-address-book", 3, "message", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngFor", "ngForOf"], ["icon", "fas-address-book", 3, "message"], [1, "ion-no-margin"], [4, "ngIf"], [1, "item-heading"], ["slot", "end", 1, "ion-padding-end"], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap addon-messages-conversation-item", "detail", "true", "button", "", 3, "click", 4, "ngIf"], ["detail", "true", "button", "", 1, "ion-text-wrap", "addon-messages-conversation-item", 3, "click"], ["slot", "start", 3, "user", "checkOnline"]], template: function AddonMessagesContacts35Page_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonMessagesContacts35Page_Template_ion_refresher_ionRefresh_12_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](13, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](15, "core-search-box", 5);
                core["Mc" /* ɵɵlistener */]("onSubmit", function AddonMessagesContacts35Page_Template_core_search_box_onSubmit_15_listener($event) { return ctx.search($event); })("onClear", function AddonMessagesContacts35Page_Template_core_search_box_onClear_15_listener() { return ctx.clearSearch(); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](18, AddonMessagesContacts35Page_core_empty_box_18_Template, 2, 3, "core-empty-box", 7);
                core["nd" /* ɵɵtemplate */](19, AddonMessagesContacts35Page_core_empty_box_19_Template, 2, 3, "core-empty-box", 7);
                core["nd" /* ɵɵtemplate */](20, AddonMessagesContacts35Page_ion_list_20_Template, 2, 1, "ion-list", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 13, "addon.messages.contacts"));
                core["lc" /* ɵɵadvance */](6);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](14, 15, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](16, 17, "addon.messages.contactname"))("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded)("message", ctx.loadingMessage);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.hasContacts && ctx.searchString == "");
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.hasContacts && ctx.searchString != "");
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.contactTypes);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], search_box["a" /* CoreSearchBoxComponent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], common["s" /* NgForOf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], ionic_angular["V" /* IonNote */], ionic_angular["j" /* IonBadge */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-right:0;margin-left:0}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:flex-start;margin-left:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:3px;align-self:flex-end}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]   .addon-message-last-message-date[_ngcontent-%COMP%]{white-space:nowrap;font-size:11px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{white-space:nowrap;color:var(--ion-text-color);margin-right:2px}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1}[_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-top:10px}[_nghost-%COMP%]   ion-item-divider[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin-left:16px;margin-right:16px}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:2px;margin-left:0}[dir=rtl][_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-message-discussion[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .addon-messages-conversation-item[_ngcontent-%COMP%]   .addon-message-last-message-user[_ngcontent-%COMP%]{margin-left:2px;margin-right:0}"] });
    return AddonMessagesContacts35Page;
})();

// CONCATENATED MODULE: ./src/addons/messages/pages/contacts-35/contacts.module.ts
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
        component: contacts_page_AddonMessagesContacts35Page,
    },
    messages_lazy_module["AddonMessagesDiscussionRoute"],
];
const tabletRoutes = [
    {
        path: '',
        component: contacts_page_AddonMessagesContacts35Page,
        children: [
            messages_lazy_module["AddonMessagesDiscussionRoute"],
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let contacts_module_AddonMessagesContacts35PageModule = /*@__PURE__*/ (() => {
    class AddonMessagesContacts35PageModule {
    }
    AddonMessagesContacts35PageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesContacts35PageModule });
    AddonMessagesContacts35PageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesContacts35PageModule_Factory(t) { return new (t || AddonMessagesContacts35PageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSearchComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonMessagesContacts35PageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](contacts_module_AddonMessagesContacts35PageModule, { declarations: [contacts_page_AddonMessagesContacts35Page], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSearchComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);