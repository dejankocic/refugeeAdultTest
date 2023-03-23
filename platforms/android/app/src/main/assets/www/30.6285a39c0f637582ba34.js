(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "Vuuv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarIndexPageModule", function() { return /* binding */ index_module_AddonCalendarIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/calendar/components/components.module.ts
var components_module = __webpack_require__("9Xwr");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses-helper.ts
var courses_helper = __webpack_require__("ZSwf");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar.ts
var calendar = __webpack_require__("SmTL");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-offline.ts
var calendar_offline = __webpack_require__("Lc7R");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-sync.ts
var calendar_sync = __webpack_require__("+lfu");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-helper.ts
var calendar_helper = __webpack_require__("n6RP");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/addons/calendar/components/calendar/calendar.ts
var calendar_calendar = __webpack_require__("Yxfl");

// EXTERNAL MODULE: ./src/addons/calendar/components/upcoming-events/upcoming-events.ts
var upcoming_events = __webpack_require__("cD/T");

// EXTERNAL MODULE: ./src/addons/calendar/components/filter/filter.ts
var filter = __webpack_require__("kLT3");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/calendar/pages/index/index.page.ts

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




























function AddonCalendarIndexPage_core_context_menu_item_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 15);
        core["Mc" /* ɵɵlistener */]("action", function AddonCalendarIndexPage_core_context_menu_item_13_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.toggleDisplay(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 800)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.calendar.upcomingevents"));
    }
}
function AddonCalendarIndexPage_core_context_menu_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 16);
        core["Mc" /* ɵɵlistener */]("action", function AddonCalendarIndexPage_core_context_menu_item_14_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.toggleDisplay(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 800)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.calendar.monthlyview"));
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonCalendarIndexPage_ion_card_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 18);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.hasdatatosync", core["ad" /* ɵɵpureFunction1 */](6, _c0, core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.calendar.calendar"))));
    }
}
function AddonCalendarIndexPage_addon_calendar_upcoming_events_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "addon-calendar-upcoming-events", 19);
        core["Mc" /* ɵɵlistener */]("onEventClicked", function AddonCalendarIndexPage_addon_calendar_upcoming_events_25_Template_addon_calendar_upcoming_events_onEventClicked_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.gotoEvent($event); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("hidden", ctx_r3.showCalendar)("filter", ctx_r3.filter);
    }
}
function AddonCalendarIndexPage_ion_fab_26_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 21);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarIndexPage_ion_fab_26_Template_ion_fab_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.openEdit(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 22);
        core["Ec" /* ɵɵelementStart */](4, "span", 23);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.calendar.newevent"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.calendar.newevent"));
    }
}
/**
 * Page that displays the calendar events.
 */
let index_page_AddonCalendarIndexPage = /*@__PURE__*/ (() => {
    class AddonCalendarIndexPage {
        constructor(route) {
            this.route = route;
            this.canCreate = false;
            this.courses = [];
            this.notificationsEnabled = false;
            this.loaded = false;
            this.hasOffline = false;
            this.isOnline = false;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.showCalendar = true;
            this.loadUpcoming = false;
            this.filter = {
                filtered: false,
                courseId: undefined,
                categoryId: undefined,
                course: true,
                group: true,
                site: true,
                user: true,
                category: true,
            };
            this.currentSiteId = sites["b" /* CoreSites */].getCurrentSiteId();
            // Listen for events added. When an event is added, reload the data.
            this.newEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.loaded = false;
                    this.refreshData(true, false);
                }
            }, this.currentSiteId);
            // Listen for new event discarded event. When it does, reload the data.
            this.discardedObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, () => {
                this.loaded = false;
                this.refreshData(true, false);
            }, this.currentSiteId);
            // Listen for events edited. When an event is edited, reload the data.
            this.editEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.loaded = false;
                    this.refreshData(true, false);
                }
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].AUTO_SYNCED, () => {
                this.loaded = false;
                this.refreshData(false, false);
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized manually but not by this page.
            this.manualSyncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, (data) => {
                if (data && data.source != 'index') {
                    this.loaded = false;
                    this.refreshData(false, false);
                }
            }, this.currentSiteId);
            // Update the events when an event is deleted.
            this.deleteEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, () => {
                this.loaded = false;
                this.refreshData(false, false);
            }, this.currentSiteId);
            // Update the "hasOffline" property if an event deleted in offline is restored.
            this.undeleteEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, () => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.hasOffline = yield calendar_offline["a" /* AddonCalendarOffline */].hasOfflineData();
            }), this.currentSiteId);
            this.filterChangedObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].FILTER_CHANGED_EVENT, (filterData) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.filter = filterData;
                // Course viewed has changed, check if the user can create events for this course calendar.
                this.canCreate = yield calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId);
            }));
            // Refresh online status when changes.
            this.onlineObserver = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.isOnline = app["a" /* CoreApp */].isOnline();
                });
            });
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.notificationsEnabled = local_notifications["a" /* CoreLocalNotifications */].isAvailable();
            this.loadUpcoming = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('upcoming');
            this.showCalendar = !this.loadUpcoming;
            this.route.queryParams.subscribe(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.filter.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.year = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('year');
                this.month = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('month');
                this.filter.filtered = !!this.filter.courseId;
                this.fetchData(true, false);
            }));
        }
        /**
         * Fetch all the data required for the view.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        fetchData(sync, showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                this.isOnline = app["a" /* CoreApp */].isOnline();
                if (sync) {
                    // Try to synchronize offline events.
                    try {
                        const result = yield calendar_sync["a" /* AddonCalendarSync */].syncEvents();
                        if (result.warnings && result.warnings.length) {
                            dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                        }
                        if (result.updated) {
                            // Trigger a manual sync event.
                            result.source = 'index';
                            events["b" /* CoreEvents */].trigger(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, this.currentSiteId);
                        }
                    }
                    catch (error) {
                        if (showErrors) {
                            dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
                        }
                    }
                }
                try {
                    const promises = [];
                    this.hasOffline = false;
                    // Load courses for the popover.
                    promises.push(courses_helper["a" /* CoreCoursesHelper */].getCoursesForPopover(this.filter.courseId).then((data) => {
                        this.courses = data.courses;
                        return;
                    }));
                    // Check if user can create events.
                    promises.push(calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId).then((canEdit) => {
                        this.canCreate = canEdit;
                        return;
                    }));
                    // Check if there is offline data.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].hasOfflineData().then((hasOffline) => {
                        this.hasOffline = hasOffline;
                        return;
                    }));
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                }
                this.loaded = true;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param done Function to call when done.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        doRefresh(refresher, done, showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.loaded) {
                    return;
                }
                yield this.refreshData(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            });
        }
        /**
         * Refresh the data.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @param afterChange Whether the refresh is done after an event has changed or has been synced.
         * @return Promise resolved when done.
         */
        refreshData(sync = false, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                const promises = [];
                promises.push(calendar["a" /* AddonCalendar */].invalidateAllowedEventTypes());
                // Refresh the sub-component.
                if (this.showCalendar && this.calendarComponent) {
                    promises.push(this.calendarComponent.refreshData());
                }
                else if (!this.showCalendar && this.upcomingEventsComponent) {
                    promises.push(this.upcomingEventsComponent.refreshData());
                }
                yield Promise.all(promises).finally(() => this.fetchData(sync, showErrors));
            });
        }
        /**
         * Navigate to a particular event.
         *
         * @param eventId Event to load.
         */
        gotoEvent(eventId) {
            if (eventId < 0) {
                // It's an offline event, go to the edit page.
                this.openEdit(eventId);
            }
            else {
                services_navigator["a" /* CoreNavigator */].navigateToSitePath(`/calendar/event/${eventId}`);
            }
        }
        /**
         * View a certain day.
         *
         * @param data Data with the year, month and day.
         */
        gotoDay(data) {
            const params = {
                day: data.day,
                month: data.month,
                year: data.year,
            };
            Object.keys(this.filter).forEach((key) => {
                params[key] = this.filter[key];
            });
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/calendar/day', { params });
        }
        /**
         * Show the context menu.
         *
         * @param event Event.
         */
        openFilter(event) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield dom["a" /* CoreDomUtils */].openPopover({
                    component: filter["a" /* AddonCalendarFilterPopoverComponent */],
                    componentProps: {
                        courses: this.courses,
                        filter: this.filter,
                    },
                    event,
                });
            });
        }
        /**
         * Open page to create/edit an event.
         *
         * @param eventId Event ID to edit.
         */
        openEdit(eventId) {
            const params = {};
            eventId = eventId || 0;
            if (this.filter.courseId) {
                params.courseId = this.filter.courseId;
            }
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
        }
        /**
         * Open calendar events settings.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/calendar/settings');
        }
        /**
         * Toogle display: monthly view or upcoming events.
         */
        toggleDisplay() {
            this.showCalendar = !this.showCalendar;
            if (!this.showCalendar) {
                this.loadUpcoming = true;
            }
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
            (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
            (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
            (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
            (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
            (_h = this.filterChangedObserver) === null || _h === void 0 ? void 0 : _h.off();
            (_j = this.onlineObserver) === null || _j === void 0 ? void 0 : _j.unsubscribe();
        }
    }
    AddonCalendarIndexPage.ɵfac = function AddonCalendarIndexPage_Factory(t) { return new (t || AddonCalendarIndexPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonCalendarIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarIndexPage, selectors: [["page-addon-calendar-index"]], viewQuery: function AddonCalendarIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](calendar_calendar["a" /* AddonCalendarCalendarComponent */], true);
                core["ud" /* ɵɵviewQuery */](upcoming_events["a" /* AddonCalendarUpcomingEventsComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.calendarComponent = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.upcomingEventsComponent = _t.first);
            }
        }, decls: 27, vars: 35, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-filter", "aria-hidden", "true"], ["iconAction", "fas-th-list", 3, "priority", "content", "action", 4, "ngIf"], ["iconAction", "fas-calendar-alt", 3, "priority", "content", "action", 4, "ngIf"], ["iconAction", "fas-cogs", 3, "hidden", "priority", "content", "action"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], ["class", "core-warning-card", 4, "ngIf"], [3, "hidden", "initialYear", "initialMonth", "filter", "displayNavButtons", "onEventClicked", "onDayClicked"], [3, "hidden", "filter", "onEventClicked", 4, "ngIf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["iconAction", "fas-th-list", 3, "priority", "content", "action"], ["iconAction", "fas-calendar-alt", 3, "priority", "content", "action"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], [3, "hidden", "filter", "onEventClicked"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "fas-plus", "aria-hidden", "true"], [1, "sr-only"]], template: function AddonCalendarIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function AddonCalendarIndexPage_Template_ion_button_click_9_listener($event) { return ctx.openFilter($event); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-context-menu");
                core["nd" /* ɵɵtemplate */](13, AddonCalendarIndexPage_core_context_menu_item_13_Template, 2, 4, "core-context-menu-item", 5);
                core["nd" /* ɵɵtemplate */](14, AddonCalendarIndexPage_core_context_menu_item_14_Template, 2, 4, "core-context-menu-item", 6);
                core["Ec" /* ɵɵelementStart */](15, "core-context-menu-item", 7);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarIndexPage_Template_core_context_menu_item_action_15_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-context-menu-item", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarIndexPage_Template_core_context_menu_item_action_17_listener($event) { return ctx.doRefresh(undefined, $event, true); });
                core["Pc" /* ɵɵpipe */](18, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](19, "ion-content");
                core["Ec" /* ɵɵelementStart */](20, "ion-refresher", 9);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCalendarIndexPage_Template_ion_refresher_ionRefresh_20_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](21, "ion-refresher-content", 10);
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](23, AddonCalendarIndexPage_ion_card_23_Template, 7, 8, "ion-card", 11);
                core["Ec" /* ɵɵelementStart */](24, "addon-calendar-calendar", 12);
                core["Mc" /* ɵɵlistener */]("onEventClicked", function AddonCalendarIndexPage_Template_addon_calendar_calendar_onEventClicked_24_listener($event) { return ctx.gotoEvent($event); })("onDayClicked", function AddonCalendarIndexPage_Template_addon_calendar_calendar_onDayClicked_24_listener($event) { return ctx.gotoDay($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](25, AddonCalendarIndexPage_addon_calendar_upcoming_events_25_Template, 1, 2, "addon-calendar-upcoming-events", 13);
                core["nd" /* ɵɵtemplate */](26, AddonCalendarIndexPage_ion_fab_26_Template, 7, 6, "ion-fab", 14);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 23, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 25, ctx.showCalendar ? "addon.calendar.calendarevents" : "addon.calendar.upcomingevents"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 27, "core.filter"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showCalendar);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.showCalendar);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.notificationsEnabled)("priority", 600)("content", core["Qc" /* ɵɵpipeBind1 */](16, 29, "core.settings.settings"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.loaded || !ctx.hasOffline || !ctx.isOnline)("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](18, 31, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](22, 33, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasOffline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.showCalendar)("initialYear", ctx.year)("initialMonth", ctx.month)("filter", ctx.filter)("displayNavButtons", ctx.showCalendar);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loadUpcoming);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canCreate);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], common["t" /* NgIf */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], calendar_calendar["a" /* AddonCalendarCalendarComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], upcoming_events["a" /* AddonCalendarUpcomingEventsComponent */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonCalendarIndexPage;
})();

// CONCATENATED MODULE: ./src/addons/calendar/pages/index/index.module.ts
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
        component: index_page_AddonCalendarIndexPage,
    },
];
let index_module_AddonCalendarIndexPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarIndexPageModule {
    }
    AddonCalendarIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarIndexPageModule });
    AddonCalendarIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarIndexPageModule_Factory(t) { return new (t || AddonCalendarIndexPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonCalendarComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarIndexPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_module_AddonCalendarIndexPageModule, { declarations: [index_page_AddonCalendarIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonCalendarComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);