(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "B1At":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModFeedbackNonRespondentsPageModule", function() { return /* binding */ nonrespondents_module_AddonModFeedbackNonRespondentsPageModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback.ts
var feedback = __webpack_require__("MNPK");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback-helper.ts
var feedback_helper = __webpack_require__("96hm");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.ts

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















function AddonModFeedbackNonRespondentsPage_ion_item_14_ng_container_2_Template(rf, ctx) {
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
function AddonModFeedbackNonRespondentsPage_ion_item_14_ng_container_3_Template(rf, ctx) {
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
function AddonModFeedbackNonRespondentsPage_ion_item_14_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 13);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r5 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r5.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r5.name, " ");
    }
}
const _c0 = function (a0) { return { header: a0 }; };
function AddonModFeedbackNonRespondentsPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 10);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackNonRespondentsPage_ion_item_14_ng_container_2_Template, 3, 3, "ng-container", 7);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackNonRespondentsPage_ion_item_14_ng_container_3_Template, 3, 3, "ng-container", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 11);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackNonRespondentsPage_ion_item_14_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r6 = core["Oc" /* ɵɵnextContext */](); return ctx_r6.selectedGroup = $event; })("ionChange", function AddonModFeedbackNonRespondentsPage_ion_item_14_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r8 = core["Oc" /* ɵɵnextContext */](); return ctx_r8.loadAttempts(ctx_r8.selectedGroup); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackNonRespondentsPage_ion_item_14_ion_select_option_6_Template, 2, 2, "ion-select-option", 12);
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
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.selectedGroup)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, _c0, core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.groupInfo.groups);
    }
}
function AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_ion_badge_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 19);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.started"), " ");
    }
}
function AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 20);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_feedback.not_started"), " ");
    }
}
function AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 15);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 16);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_ion_badge_6_Template, 3, 3, "ion-badge", 17);
        core["nd" /* ɵɵtemplate */](7, AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_ion_badge_7_Template, 3, 3, "ion-badge", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const user_r10 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", user_r10);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](user_r10.fullname);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", user_r10.started);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !user_r10.started);
    }
}
function AddonModFeedbackNonRespondentsPage_ng_container_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackNonRespondentsPage_ng_container_20_ion_item_1_Template, 8, 4, "ion-item", 14);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.users);
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
/**
 * Page that displays feedback non respondents.
 */
let nonrespondents_AddonModFeedbackNonRespondentsPage = /*@__PURE__*/ (() => {
    class AddonModFeedbackNonRespondentsPage {
        constructor() {
            this.page = 0;
            this.users = [];
            this.total = 0;
            this.canLoadMore = false;
            this.loaded = false;
            this.loadMoreError = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
            this.fetchData();
        }
        /**
         * Fetch all the data required for the view.
         *
         * @param refresh Empty events array first.
         * @return Promise resolved when done.
         */
        fetchData(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.page = 0;
                this.total = 0;
                this.users = [];
                try {
                    this.feedback = yield feedback["a" /* AddonModFeedback */].getFeedback(this.courseId, this.cmId);
                    this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.cmId);
                    this.selectedGroup = groups["a" /* CoreGroups */].validateGroupId(this.selectedGroup, this.groupInfo);
                    yield this.loadGroupUsers(this.selectedGroup);
                }
                catch (message) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                    if (!refresh) {
                        // Some call failed on first fetch, go back.
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                }
            });
        }
        /**
         * Load Group responses.
         *
         * @param groupId If defined it will change group if not, it will load more users for the same group.
         * @return Promise resolved when done.
         */
        loadGroupUsers(groupId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                if (typeof groupId == 'undefined') {
                    this.page++;
                }
                else {
                    this.selectedGroup = groupId;
                    this.page = 0;
                    this.total = 0;
                    this.users = [];
                    this.loaded = false;
                }
                try {
                    const response = yield feedback_helper["a" /* AddonModFeedbackHelper */].getNonRespondents(this.feedback.id, {
                        groupId: this.selectedGroup,
                        page: this.page,
                        cmId: this.cmId,
                    });
                    this.total = response.total;
                    if (this.users.length < response.total) {
                        this.users = this.users.concat(response.users);
                    }
                    this.canLoadMore = this.users.length < response.total;
                }
                catch (error) {
                    this.loadMoreError = true;
                    throw error;
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Change selected group or load more users.
         *
         * @param groupId Group ID selected. If not defined, it will load more users.
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         */
        loadAttempts(groupId, infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.loadGroupUsers(groupId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            });
        }
        /**
         * Refresh the attempts.
         *
         * @param refresher Refresher.
         */
        refreshFeedback(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const promises = [];
                    promises.push(groups["a" /* CoreGroups */].invalidateActivityGroupInfo(this.cmId));
                    if (this.feedback) {
                        promises.push(feedback["a" /* AddonModFeedback */].invalidateNonRespondentsData(this.feedback.id));
                    }
                    yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                    yield this.fetchData(true);
                }
                finally {
                    refresher.complete();
                }
            });
        }
    }
    AddonModFeedbackNonRespondentsPage.ɵfac = function AddonModFeedbackNonRespondentsPage_Factory(t) { return new (t || AddonModFeedbackNonRespondentsPage)(); };
    AddonModFeedbackNonRespondentsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFeedbackNonRespondentsPage, selectors: [["page-addon-mod-feedback-nonrespondents"]], decls: 22, vars: 21, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [1, "ion-no-margin"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngIf"], [3, "enabled", "error", "action"], [1, "ion-text-wrap"], ["id", "addon-feedback-groupslabel"], ["aria-labelledby", "addon-feedback-groupslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "ion-text-wrap", 4, "ngFor", "ngForOf"], ["slot", "start", 3, "user"], [1, "item-heading"], ["color", "success", 4, "ngIf"], ["color", "danger", 4, "ngIf"], ["color", "success"], ["color", "danger"]], template: function AddonModFeedbackNonRespondentsPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModFeedbackNonRespondentsPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshFeedback($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](13, "ion-list", 5);
                core["nd" /* ɵɵtemplate */](14, AddonModFeedbackNonRespondentsPage_ion_item_14_Template, 7, 9, "ion-item", 6);
                core["Ec" /* ɵɵelementStart */](15, "ion-item-divider");
                core["Ec" /* ɵɵelementStart */](16, "ion-label");
                core["Ec" /* ɵɵelementStart */](17, "h2");
                core["pd" /* ɵɵtext */](18);
                core["Pc" /* ɵɵpipe */](19, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](20, AddonModFeedbackNonRespondentsPage_ng_container_20_Template, 2, 1, "ng-container", 7);
                core["Ec" /* ɵɵelementStart */](21, "core-infinite-loading", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonModFeedbackNonRespondentsPage_Template_core_infinite_loading_action_21_listener($event) { return ctx.loadAttempts(undefined, $event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, "addon.mod_feedback.responses"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 14, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo && (ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups));
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](19, 16, "addon.mod_feedback.non_respondents_students", core["ad" /* ɵɵpureFunction1 */](19, _c1, ctx.total)));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.total > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["H" /* IonItem */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModFeedbackNonRespondentsPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/nonrespondents/nonrespondents.module.ts
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
        component: nonrespondents_AddonModFeedbackNonRespondentsPage,
    },
];
let nonrespondents_module_AddonModFeedbackNonRespondentsPageModule = /*@__PURE__*/ (() => {
    class AddonModFeedbackNonRespondentsPageModule {
    }
    AddonModFeedbackNonRespondentsPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModFeedbackNonRespondentsPageModule });
    AddonModFeedbackNonRespondentsPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModFeedbackNonRespondentsPageModule_Factory(t) { return new (t || AddonModFeedbackNonRespondentsPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModFeedbackNonRespondentsPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](nonrespondents_module_AddonModFeedbackNonRespondentsPageModule, { declarations: [nonrespondents_AddonModFeedbackNonRespondentsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);