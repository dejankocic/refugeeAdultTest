(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "NNBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonNotificationsListPageModule", function() { return /* binding */ list_module_AddonNotificationsListPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-delegate.ts
var contentlinks_delegate = __webpack_require__("mbU7");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/notifications/components/actions/actions.ts

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








function AddonNotificationsActionsComponent_ion_row_0_ion_col_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 3);
        core["Mc" /* ɵɵlistener */]("click", function AddonNotificationsActionsComponent_ion_row_0_ion_col_1_Template_ion_button_click_1_listener() { const action_r2 = ctx.$implicit; return action_r2.action(); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 4);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const action_r2 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["Wc" /* ɵɵpropertyInterpolate */]("name", action_r2.icon);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 2, action_r2.message), " ");
    }
}
function AddonNotificationsActionsComponent_ion_row_0_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-row", 1);
        core["nd" /* ɵɵtemplate */](1, AddonNotificationsActionsComponent_ion_row_0_ion_col_1_Template, 5, 4, "ion-col", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.actions);
    }
}
/**
 * Component that displays the actions for a notification.
 */
let actions_AddonNotificationsActionsComponent = /*@__PURE__*/ (() => {
    class AddonNotificationsActionsComponent {
        constructor() {
            this.actions = [];
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.contextUrl && (!this.data || !this.data.appurl)) {
                    // No URL, nothing to do.
                    return;
                }
                let actions = [];
                // Treat appurl first if any.
                if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.appurl) {
                    actions = yield contentlinks_delegate["a" /* CoreContentLinksDelegate */].getActionsFor(this.data.appurl, this.courseId, undefined, this.data);
                }
                if (!actions.length && this.contextUrl) {
                    // No appurl or cannot handle it. Try with contextUrl.
                    actions = yield contentlinks_delegate["a" /* CoreContentLinksDelegate */].getActionsFor(this.contextUrl, this.courseId, undefined, this.data);
                }
                if (!actions.length) {
                    // URL is not supported. Add an action to open it in browser.
                    actions.push({
                        message: 'core.view',
                        icon: 'fas-eye',
                        action: this.openInBrowser.bind(this),
                    });
                }
                this.actions = actions;
            });
        }
        /**
         * Default action. Open in browser.
         *
         * @param siteId Site ID to use.
         */
        openInBrowser(siteId) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const url = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.appurl) || this.contextUrl;
                if (!url) {
                    return;
                }
                const site = yield sites["b" /* CoreSites */].getSite(siteId);
                site.openInBrowserWithAutoLogin(url);
            });
        }
    }
    AddonNotificationsActionsComponent.ɵfac = function AddonNotificationsActionsComponent_Factory(t) { return new (t || AddonNotificationsActionsComponent)(); };
    AddonNotificationsActionsComponent.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonNotificationsActionsComponent, selectors: [["addon-notifications-actions"]], inputs: { contextUrl: "contextUrl", courseId: "courseId", data: "data" }, decls: 1, vars: 1, consts: [["class", "justify-content-around", 4, "ngIf"], [1, "justify-content-around"], [4, "ngFor", "ngForOf"], ["fill", "clear", "expand", "block", 3, "click"], ["slot", "start", "aria-hidden", "true", 3, "name"]], template: function AddonNotificationsActionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                core["nd" /* ɵɵtemplate */](0, AddonNotificationsActionsComponent_ion_row_0_Template, 2, 1, "ion-row", 0);
            }
            if (rf & 2) {
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.actions && ctx.actions.length > 0);
            }
        }, directives: [common["t" /* NgIf */], ionic_angular["gb" /* IonRow */], common["s" /* NgForOf */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonNotificationsActionsComponent;
})();

// CONCATENATED MODULE: ./src/addons/notifications/components/components.module.ts
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




let components_module_AddonNotificationsComponentsModule = /*@__PURE__*/ (() => {
    class AddonNotificationsComponentsModule {
    }
    AddonNotificationsComponentsModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonNotificationsComponentsModule });
    AddonNotificationsComponentsModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonNotificationsComponentsModule_Factory(t) { return new (t || AddonNotificationsComponentsModule)(); }, imports: [[
                shared_module["a" /* CoreSharedModule */],
            ]] });
    return AddonNotificationsComponentsModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](components_module_AddonNotificationsComponentsModule, { declarations: [actions_AddonNotificationsActionsComponent], imports: [shared_module["a" /* CoreSharedModule */]], exports: [actions_AddonNotificationsActionsComponent] }); })();

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/notifications/services/notifications.ts
var services_notifications = __webpack_require__("yjU1");

// EXTERNAL MODULE: ./src/addons/notifications/services/notifications-helper.ts
var notifications_helper = __webpack_require__("ssuw");

// EXTERNAL MODULE: ./src/core/features/pushnotifications/services/push-delegate.ts
var push_delegate = __webpack_require__("2eZG");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// EXTERNAL MODULE: ./src/core/pipes/create-links.ts
var create_links = __webpack_require__("dne1");

// CONCATENATED MODULE: ./src/addons/notifications/pages/list/list.ts

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






















function AddonNotificationsListPage_div_13_ion_icon_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 13);
    }
}
function AddonNotificationsListPage_div_13_ion_spinner_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner", 0);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.loading"));
    }
}
function AddonNotificationsListPage_div_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 10);
        core["Mc" /* ɵɵlistener */]("click", function AddonNotificationsListPage_div_13_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.markAllNotificationsAsRead(); });
        core["nd" /* ɵɵtemplate */](2, AddonNotificationsListPage_div_13_ion_icon_2_Template, 1, 0, "ion-icon", 11);
        core["nd" /* ɵɵtemplate */](3, AddonNotificationsListPage_div_13_ion_spinner_3_Template, 2, 3, "ion-spinner", 12);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("disabled", ctx_r0.loadingMarkAllNotificationsAsRead);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.loadingMarkAllNotificationsAsRead);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.loadingMarkAllNotificationsAsRead);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 4, "addon.notifications.markallread"), " ");
    }
}
function AddonNotificationsListPage_ion_card_14_core_user_avatar_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 23);
    }
    if (rf & 2) {
        const notification_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("user", notification_r7)("profileUrl", notification_r7.profileimageurlfrom)("fullname", notification_r7.userfromfullname)("userId", notification_r7.useridfrom)("extraIcon", notification_r7.iconurl);
    }
}
function AddonNotificationsListPage_ion_card_14_img_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 24);
    }
    if (rf & 2) {
        const notification_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("src", notification_r7.iconurl, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonNotificationsListPage_ion_card_14_p_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const notification_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](notification_r7.userfromfullname);
    }
}
function AddonNotificationsListPage_ion_card_14_span_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["zc" /* ɵɵelement */](1, "ion-icon", 25);
        core["Dc" /* ɵɵelementEnd */]();
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonNotificationsListPage_ion_card_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 14);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["nd" /* ɵɵtemplate */](3, AddonNotificationsListPage_ion_card_14_core_user_avatar_3_Template, 1, 5, "core-user-avatar", 15);
        core["nd" /* ɵɵtemplate */](4, AddonNotificationsListPage_ion_card_14_img_4_Template, 1, 1, "img", 16);
        core["Ec" /* ɵɵelementStart */](5, "ion-label");
        core["Ec" /* ɵɵelementStart */](6, "p", 17);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonNotificationsListPage_ion_card_14_p_8_Template, 2, 1, "p", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-note", 19);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "coreDateDayOrTime");
        core["nd" /* ɵɵtemplate */](12, AddonNotificationsListPage_ion_card_14_span_12_Template, 2, 0, "span", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](13, "ion-item", 20);
        core["Ec" /* ɵɵelementStart */](14, "ion-label");
        core["zc" /* ɵɵelement */](15, "core-format-text", 21);
        core["Pc" /* ɵɵpipe */](16, "coreCreateLinks");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](17, "addon-notifications-actions", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const notification_r7 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", notification_r7.timeread ? notification_r7.subject : core["Rc" /* ɵɵpipeBind2 */](2, 13, "addon.notifications.unreadnotification", core["ad" /* ɵɵpureFunction1 */](20, _c0, notification_r7.subject)));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", notification_r7.useridfrom > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", notification_r7.useridfrom <= 0 && notification_r7.iconurl);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](notification_r7.subject);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", notification_r7.userfromfullname);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](11, 16, notification_r7.timecreated), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !notification_r7.timeread);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](16, 18, notification_r7.mobiletext))("contextInstanceId", 0)("maxHeight", notification_r7.displayfullhtml ? 120 : null);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("contextUrl", notification_r7.contexturl)("courseId", notification_r7.courseid)("data", notification_r7.customdata);
    }
}
function AddonNotificationsListPage_core_empty_box_15_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 26);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.notifications.therearentnotificationsyet"));
    }
}
/**
 * Page that displays the list of notifications.
 */
let list_AddonNotificationsListPage = /*@__PURE__*/ (() => {
    class AddonNotificationsListPage {
        constructor() {
            this.notifications = [];
            this.notificationsLoaded = false;
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.canMarkAllNotificationsAsRead = false;
            this.loadingMarkAllNotificationsAsRead = false;
            this.pendingRefresh = false;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.fetchNotifications();
            this.cronObserver = events["b" /* CoreEvents */].on(services_notifications["b" /* AddonNotificationsProvider */].READ_CRON_EVENT, () => {
                if (!this.isCurrentView) {
                    return;
                }
                this.notificationsLoaded = false;
                this.refreshNotifications();
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            this.pushObserver = push_delegate["a" /* CorePushNotificationsDelegate */].on('receive').subscribe((notification) => {
                // New notification received. If it's from current site, refresh the data.
                if (!this.isCurrentView) {
                    this.pendingRefresh = true;
                    return;
                }
                if (!utils["a" /* CoreUtils */].isTrueOrOne(notification.notif) || !sites["b" /* CoreSites */].isCurrentSite(notification.site)) {
                    return;
                }
                this.notificationsLoaded = false;
                this.refreshNotifications();
            });
        }
        /**
         * Convenience function to get notifications. Gets unread notifications first.
         *
         * @param refreh Whether we're refreshing data.
         * @return Resolved when done.
         */
        fetchNotifications(refresh) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                try {
                    const result = yield notifications_helper["a" /* AddonNotificationsHelper */].getNotifications(refresh ? [] : this.notifications);
                    const notifications = result.notifications.map((notification) => this.formatText(notification));
                    if (refresh) {
                        this.notifications = notifications;
                    }
                    else {
                        this.notifications = this.notifications.concat(notifications);
                    }
                    this.canLoadMore = result.canLoadMore;
                    this.markNotificationsAsRead(notifications);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.notifications.errorgetnotifications', true);
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                }
                finally {
                    this.notificationsLoaded = true;
                }
            });
        }
        /**
         * Mark all notifications as read.
         *
         * @return Promise resolved when done.
         */
        markAllNotificationsAsRead() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadingMarkAllNotificationsAsRead = true;
                yield utils["a" /* CoreUtils */].ignoreErrors(services_notifications["a" /* AddonNotifications */].markAllNotificationsAsRead());
                events["b" /* CoreEvents */].trigger(services_notifications["b" /* AddonNotificationsProvider */].READ_CHANGED_EVENT, {}, sites["b" /* CoreSites */].getCurrentSiteId());
                // All marked as read, refresh the list.
                this.notificationsLoaded = false;
                yield this.refreshNotifications();
            });
        }
        /**
         * Mark notifications as read.
         *
         * @param notifications Array of notification objects.
         */
        markNotificationsAsRead(notifications) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (notifications.length > 0) {
                    const promises = notifications.map((notification) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                        if (notification.read) {
                            // Already read, don't mark it.
                            return;
                        }
                        yield services_notifications["a" /* AddonNotifications */].markNotificationRead(notification.id);
                    }));
                    yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                    yield utils["a" /* CoreUtils */].ignoreErrors(services_notifications["a" /* AddonNotifications */].invalidateNotificationsList());
                    events["b" /* CoreEvents */].trigger(services_notifications["b" /* AddonNotificationsProvider */].READ_CHANGED_EVENT, {}, sites["b" /* CoreSites */].getCurrentSiteId());
                }
                // Check if mark all notifications as read is enabled and there are some to read.
                if (!services_notifications["a" /* AddonNotifications */].isMarkAllNotificationsAsReadEnabled()) {
                    this.canMarkAllNotificationsAsRead = false;
                    return;
                }
                try {
                    this.loadingMarkAllNotificationsAsRead = true;
                    const unread = yield services_notifications["a" /* AddonNotifications */].getUnreadNotificationsCount();
                    this.canMarkAllNotificationsAsRead = unread > 0;
                }
                finally {
                    this.loadingMarkAllNotificationsAsRead = false;
                }
            });
        }
        /**
         * Refresh notifications.
         *
         * @param refresher Refresher.
         * @return Promise<any> Promise resolved when done.
         */
        refreshNotifications(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield utils["a" /* CoreUtils */].ignoreErrors(services_notifications["a" /* AddonNotifications */].invalidateNotificationsList());
                try {
                    yield this.fetchNotifications(true);
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Load more results.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         */
        loadMoreNotifications(infiniteComplete) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchNotifications();
                }
                finally {
                    infiniteComplete === null || infiniteComplete === void 0 ? void 0 : infiniteComplete();
                }
            });
        }
        /**
         * Formats the text of a notification.
         *
         * @param notification The notification object.
         */
        formatText(notification) {
            const formattedNotification = notification;
            formattedNotification.displayfullhtml = this.shouldDisplayFullHtml(notification);
            formattedNotification.iconurl = formattedNotification.iconurl || undefined; // Make sure the property exists.
            formattedNotification.mobiletext = formattedNotification.displayfullhtml ?
                notification.fullmessagehtml :
                utils_text["a" /* CoreTextUtils */].replaceNewLines(formattedNotification.mobiletext.replace(/-{4,}/ig, ''), '<br>');
            return formattedNotification;
        }
        /**
         * Check whether we should display full HTML of the notification.
         *
         * @param notification Notification.
         * @return Whether to display full HTML.
         */
        shouldDisplayFullHtml(notification) {
            return notification.component == 'mod_forum' && notification.eventtype == 'digests';
        }
        /**
         * User entered the page.
         */
        ionViewDidEnter() {
            this.isCurrentView = true;
            if (!this.pendingRefresh) {
                return;
            }
            this.pendingRefresh = false;
            this.notificationsLoaded = false;
            this.refreshNotifications();
        }
        /**
         * User left the page.
         */
        ionViewDidLeave() {
            this.isCurrentView = false;
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b;
            (_a = this.cronObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.pushObserver) === null || _b === void 0 ? void 0 : _b.unsubscribe();
        }
    }
    AddonNotificationsListPage.ɵfac = function AddonNotificationsListPage_Factory(t) { return new (t || AddonNotificationsListPage)(); };
    AddonNotificationsListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonNotificationsListPage, selectors: [["page-addon-notifications-list"]], decls: 17, vars: 16, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-padding", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["icon", "far-bell", 3, "message", 4, "ngIf"], [3, "enabled", "error", "action"], [1, "ion-padding"], ["expand", "block", "color", "light", 3, "disabled", "click"], ["slot", "start", "name", "fas-check", "aria-hidden", "true", 4, "ngIf"], ["slot", "start", 4, "ngIf"], ["slot", "start", "name", "fas-check", "aria-hidden", "true"], ["lines", "none", 1, "ion-text-wrap"], ["slot", "start", 3, "user", "profileUrl", "fullname", "userId", "extraIcon", 4, "ngIf"], ["alt", "", "role", "presentation", "class", "core-notification-icon", "slot", "start", 3, "src", 4, "ngIf"], [1, "item-heading"], [4, "ngIf"], ["slot", "end", 1, "ion-float-end", "ion-text-end"], [1, "ion-text-wrap"], ["contextLevel", "system", 3, "text", "contextInstanceId", "maxHeight"], [3, "contextUrl", "courseId", "data"], ["slot", "start", 3, "user", "profileUrl", "fullname", "userId", "extraIcon"], ["alt", "", "role", "presentation", "slot", "start", 1, "core-notification-icon", 3, "src"], ["name", "fas-circle", "color", "primary", "aria-hidden", "true"], ["icon", "far-bell", 3, "message"]], template: function AddonNotificationsListPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonNotificationsListPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshNotifications($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](13, AddonNotificationsListPage_div_13_Template, 6, 6, "div", 5);
                core["nd" /* ɵɵtemplate */](14, AddonNotificationsListPage_ion_card_14_Template, 18, 22, "ion-card", 6);
                core["nd" /* ɵɵtemplate */](15, AddonNotificationsListPage_core_empty_box_15_Template, 2, 3, "core-empty-box", 7);
                core["Ec" /* ɵɵelementStart */](16, "core-infinite-loading", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonNotificationsListPage_Template_core_infinite_loading_action_16_listener($event) { return ctx.loadMoreNotifications($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, "addon.notifications.notifications"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.notificationsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 14, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.notificationsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canMarkAllNotificationsAsRead);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.notifications);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.notifications || ctx.notifications.length <= 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], common["s" /* NgForOf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["pb" /* IonSpinner */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["V" /* IonNote */], format_text["a" /* CoreFormatTextDirective */], actions_AddonNotificationsActionsComponent, user_avatar["a" /* CoreUserAvatarComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */], create_links["a" /* CoreCreateLinksPipe */]], styles: ["[_nghost-%COMP%]   .core-notification-icon[_ngcontent-%COMP%]{width:34px;height:34px;margin:10px!important}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost{border:1px solid var(--gray-light);width:100%;margin:0 0 1em}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost td{padding:10px}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .header{background-color:var(--gray-lighter)}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .picture{width:auto;text-align:center}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .forumpost .subject{font-weight:700;margin-bottom:1rem}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     a{text-decoration:none}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .userpicture{border-radius:50%}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right{text-align:end}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right a{display:none}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .mdl-right font{font-size:.9em}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     .commands{display:none}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%]     hr{margin-top:1.5rem;margin-bottom:1.5rem;background-color:var(--gray-light)}"] });
    return AddonNotificationsListPage;
})();

// CONCATENATED MODULE: ./src/addons/notifications/pages/list/list.module.ts
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
        component: list_AddonNotificationsListPage,
    },
];
let list_module_AddonNotificationsListPageModule = /*@__PURE__*/ (() => {
    class AddonNotificationsListPageModule {
    }
    AddonNotificationsListPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonNotificationsListPageModule });
    AddonNotificationsListPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonNotificationsListPageModule_Factory(t) { return new (t || AddonNotificationsListPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module_AddonNotificationsComponentsModule,
            ], router["m" /* RouterModule */]] });
    return AddonNotificationsListPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](list_module_AddonNotificationsListPageModule, { declarations: [list_AddonNotificationsListPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module_AddonNotificationsComponentsModule], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);