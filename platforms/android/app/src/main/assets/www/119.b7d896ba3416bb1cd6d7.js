(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ "A7m2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreUserCourseLazyModule", function() { return /* binding */ user_course_lazy_module_CoreUserCourseLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/search/components/components.module.ts
var components_module = __webpack_require__("PM4H");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/features/search/components/search-box/search-box.ts
var search_box = __webpack_require__("9zps");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/time-ago.ts
var time_ago = __webpack_require__("lAaw");

// CONCATENATED MODULE: ./src/core/features/user/pages/participants/participants.page.ts

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























function CoreUserParticipantsPage_core_search_box_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-search-box", 11);
        core["Mc" /* ɵɵlistener */]("onSubmit", function CoreUserParticipantsPage_core_search_box_9_Template_core_search_box_onSubmit_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.search($event); })("onClear", function CoreUserParticipantsPage_core_search_box_9_Template_core_search_box_onClear_0_listener() { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.clearSearch(); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("disabled", ctx_r0.searchInProgress)("spellcheck", false)("autoFocus", true)("lengthCheck", 1);
    }
}
function CoreUserParticipantsPage_core_empty_box_11_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 12);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.user.noparticipants"));
    }
}
function CoreUserParticipantsPage_core_empty_box_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 13);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.noresults"));
    }
}
function CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["Ec" /* ɵɵelementStart */](1, "strong");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "coreTimeAgo");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const participant_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */]("", core["Qc" /* ɵɵpipeBind1 */](3, 2, "core.lastaccess"), ": ");
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 4, participant_r8.lastcourseaccess), " ");
    }
}
function CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["Ec" /* ɵɵelementStart */](1, "strong");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "coreTimeAgo");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const participant_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */]("", core["Qc" /* ɵɵpipeBind1 */](3, 2, "core.lastaccess"), ": ");
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 4, participant_r8.lastaccess), " ");
    }
}
function CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "p", 17);
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](3, CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_p_3_Template, 6, 6, "p", 9);
        core["nd" /* ɵɵtemplate */](4, CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_p_4_Template, 6, 6, "p", 9);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const participant_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](participant_r8.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", participant_r8.lastcourseaccess);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !participant_r8.lastcourseaccess && participant_r8.lastaccess);
    }
}
function CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "p", 17);
        core["zc" /* ɵɵelement */](2, "core-format-text", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const participant_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", participant_r8.fullname)("highlight", ctx_r10.searchQuery)("filter", false);
    }
}
function CoreUserParticipantsPage_ion_list_13_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 15);
        core["Mc" /* ɵɵlistener */]("click", function CoreUserParticipantsPage_ion_list_13_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r18); const participant_r8 = ctx.$implicit; const ctx_r17 = core["Oc" /* ɵɵnextContext */](2); return ctx_r17.participants.select(participant_r8); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 16);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["nd" /* ɵɵtemplate */](3, CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_3_Template, 5, 3, "ng-container", 9);
        core["nd" /* ɵɵtemplate */](4, CoreUserParticipantsPage_ion_list_13_ion_item_1_ng_container_4_Template, 3, 3, "ng-container", 9);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const participant_r8 = ctx.$implicit;
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r7.participants.getItemAriaCurrent(participant_r8))("aria-label", participant_r8.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", participant_r8)("linkProfile", false)("checkOnline", true);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r7.searchQuery);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.searchQuery);
    }
}
function CoreUserParticipantsPage_ion_list_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, CoreUserParticipantsPage_ion_list_13_ion_item_1_Template, 5, 7, "ion-item", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.participants.items);
    }
}
/**
 * Page that displays the list of course participants.
 */
let participants_page_CoreUserParticipantsPage = /*@__PURE__*/ (() => {
    class CoreUserParticipantsPage {
        constructor() {
            this.searchQuery = null;
            this.searchInProgress = false;
            this.searchEnabled = false;
            this.showSearchBox = false;
            this.fetchMoreParticipantsFailed = false;
            const courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.participants = new participants_page_CoreUserParticipantsManager(CoreUserParticipantsPage, courseId);
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.searchEnabled = yield user["a" /* CoreUser */].canSearchParticipantsInSite();
            });
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchInitialParticipants();
                this.participants.start(this.splitView);
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.participants.destroy();
        }
        /**
         * Show or hide search box.
         */
        toggleSearch() {
            this.showSearchBox = !this.showSearchBox;
            if (this.showSearchBox) {
                // Make search bar visible.
                this.splitView.menuContent.scrollToTop();
            }
            else {
                this.clearSearch();
            }
        }
        /**
         * Clear search.
         */
        clearSearch() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.searchQuery === null) {
                    // Nothing to clear.
                    return;
                }
                this.searchQuery = null;
                this.searchInProgress = false;
                this.participants.resetItems();
                yield this.fetchInitialParticipants();
            });
        }
        /**
         * Start a new search.
         *
         * @param query Text to search for.
         */
        search(query) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                app["a" /* CoreApp */].closeKeyboard();
                this.searchInProgress = true;
                this.searchQuery = query;
                this.participants.resetItems();
                yield this.fetchInitialParticipants();
                this.searchInProgress = false;
            });
        }
        /**
         * Refresh participants.
         *
         * @param refresher Refresher.
         */
        refreshParticipants(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(user["a" /* CoreUser */].invalidateParticipantsList(this.participants.courseId));
                yield utils["a" /* CoreUtils */].ignoreErrors(this.fetchParticipants());
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Load a new batch of participants.
         *
         * @param complete Completion callback.
         */
        fetchMoreParticipants(complete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchParticipants(this.participants.items);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading more participants');
                    this.fetchMoreParticipantsFailed = true;
                }
                complete();
            });
        }
        /**
         * Obtain the initial batch of participants.
         */
        fetchInitialParticipants() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchParticipants();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error loading participants');
                    this.participants.setItems([]);
                }
            });
        }
        /**
         * Update the list of participants.
         *
         * @param loadedParticipants Participants list to continue loading from.
         */
        fetchParticipants(loadedParticipants = []) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.searchQuery) {
                    const { participants, canLoadMore } = yield user["a" /* CoreUser */].searchParticipants(this.participants.courseId, this.searchQuery, true, Math.ceil(loadedParticipants.length / user["b" /* CoreUserProvider */].PARTICIPANTS_LIST_LIMIT), user["b" /* CoreUserProvider */].PARTICIPANTS_LIST_LIMIT);
                    this.participants.setItems(loadedParticipants.concat(participants), canLoadMore);
                }
                else {
                    const { participants, canLoadMore } = yield user["a" /* CoreUser */].getParticipants(this.participants.courseId, loadedParticipants.length);
                    this.participants.setItems(loadedParticipants.concat(participants), canLoadMore);
                }
                this.fetchMoreParticipantsFailed = false;
            });
        }
    }
    CoreUserParticipantsPage.ɵfac = function CoreUserParticipantsPage_Factory(t) { return new (t || CoreUserParticipantsPage)(); };
    CoreUserParticipantsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreUserParticipantsPage, selectors: [["page-core-user-participants"]], viewQuery: function CoreUserParticipantsPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 15, vars: 15, consts: [["slot", "end"], [3, "hidden", "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], ["autocorrect", "off", "searchArea", "CoreUserParticipants", 3, "disabled", "spellcheck", "autoFocus", "lengthCheck", "onSubmit", "onClear", 4, "ngIf"], [3, "hideUntil"], ["icon", "far-user", 3, "message", 4, "ngIf"], ["icon", "fas-search", 3, "message", 4, "ngIf"], [4, "ngIf"], [3, "enabled", "error", "action"], ["autocorrect", "off", "searchArea", "CoreUserParticipants", 3, "disabled", "spellcheck", "autoFocus", "lengthCheck", "onSubmit", "onClear"], ["icon", "far-user", 3, "message"], ["icon", "fas-search", 3, "message"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["slot", "start", 3, "user", "linkProfile", "checkOnline"], [1, "item-heading"], [3, "text", "highlight", "filter"]], template: function CoreUserParticipantsPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "core-navbar-buttons", 0);
                core["Ec" /* ɵɵelementStart */](1, "ion-button", 1);
                core["Mc" /* ɵɵlistener */]("click", function CoreUserParticipantsPage_Template_ion_button_click_1_listener() { return ctx.toggleSearch(); });
                core["Pc" /* ɵɵpipe */](2, "translate");
                core["zc" /* ɵɵelement */](3, "ion-icon", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](4, "ion-content");
                core["Ec" /* ɵɵelementStart */](5, "core-split-view");
                core["Ec" /* ɵɵelementStart */](6, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreUserParticipantsPage_Template_ion_refresher_ionRefresh_6_listener($event) { return ctx.refreshParticipants($event.target); });
                core["zc" /* ɵɵelement */](7, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](8, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](9, CoreUserParticipantsPage_core_search_box_9_Template, 1, 4, "core-search-box", 5);
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](11, CoreUserParticipantsPage_core_empty_box_11_Template, 2, 3, "core-empty-box", 7);
                core["nd" /* ɵɵtemplate */](12, CoreUserParticipantsPage_core_empty_box_12_Template, 2, 3, "core-empty-box", 8);
                core["nd" /* ɵɵtemplate */](13, CoreUserParticipantsPage_ion_list_13_Template, 2, 1, "ion-list", 9);
                core["Ec" /* ɵɵelementStart */](14, "core-infinite-loading", 10);
                core["Mc" /* ɵɵlistener */]("action", function CoreUserParticipantsPage_Template_core_infinite_loading_action_14_listener($event) { return ctx.fetchMoreParticipants($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.searchEnabled);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 11, "core.search"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.participants.loaded || ctx.searchInProgress);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](8, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showSearchBox);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.participants.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.participants.empty && !ctx.searchInProgress && !ctx.searchQuery);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.participants.empty && !ctx.searchInProgress && ctx.searchQuery);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.participants.empty);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.participants.loaded && !ctx.participants.completed)("error", ctx.fetchMoreParticipantsFailed);
            }
        }, directives: [navbar_buttons["a" /* CoreNavBarButtonsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], common["t" /* NgIf */], loading["a" /* CoreLoadingComponent */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], search_box["a" /* CoreSearchBoxComponent */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], time_ago["a" /* CoreTimeAgoPipe */]], encapsulation: 2 });
    return CoreUserParticipantsPage;
})();
/**
 * Helper to manage the list of participants.
 */
class participants_page_CoreUserParticipantsManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent, courseId) {
        super(pageComponent);
        this.courseId = courseId;
    }
    /**
     * @inheritdoc
     */
    select(participant) {
        const _super = Object.create(null, {
            select: { get: () => super.select }
        });
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
            if (screen["a" /* CoreScreen */].isMobile) {
                yield services_navigator["a" /* CoreNavigator */].navigateToSitePath('/user/profile', { params: { userId: participant.id, courseId: this.courseId } });
                return;
            }
            return _super.select.call(this, participant);
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(participant) {
        return participant.id.toString();
    }
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
            yield user["a" /* CoreUser */].logParticipantsView(this.courseId);
        });
    }
}

// CONCATENATED MODULE: ./src/core/features/user/user-course-lazy.module.ts
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
        component: participants_page_CoreUserParticipantsPage,
        children: [
            {
                path: ':userId',
                loadChildren: () => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, "RDa7")).then(m => m.CoreUserProfilePageModule),
            },
        ],
    },
];
let user_course_lazy_module_CoreUserCourseLazyModule = /*@__PURE__*/ (() => {
    class CoreUserCourseLazyModule {
    }
    CoreUserCourseLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreUserCourseLazyModule });
    CoreUserCourseLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreUserCourseLazyModule_Factory(t) { return new (t || CoreUserCourseLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreSearchComponentsModule */],
            ]] });
    return CoreUserCourseLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](user_course_lazy_module_CoreUserCourseLazyModule, { declarations: [participants_page_CoreUserParticipantsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreSearchComponentsModule */]] });
})();


/***/ })

}]);