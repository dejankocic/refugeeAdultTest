(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "Ul7S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarListPageModule", function() { return /* binding */ list_module_AddonCalendarListPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/addons/calendar/calendar-lazy.module.ts
var calendar_lazy_module = __webpack_require__("Cjie");

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar.ts
var calendar = __webpack_require__("SmTL");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-offline.ts
var calendar_offline = __webpack_require__("Lc7R");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-helper.ts
var calendar_helper = __webpack_require__("n6RP");

// EXTERNAL MODULE: ./src/addons/calendar/services/calendar-sync.ts
var calendar_sync = __webpack_require__("+lfu");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var singletons_events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/addons/calendar/components/filter/filter.ts
var filter = __webpack_require__("kLT3");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses-helper.ts
var courses_helper = __webpack_require__("ZSwf");

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

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/calendar/pages/list/list.page.ts

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

































const _c0 = function (a0) { return { $a: a0 }; };
function AddonCalendarListPage_ion_card_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 15);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 16);
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
function AddonCalendarListPage_core_empty_box_23_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 17);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.calendar.noevents"));
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_ion_item_divider_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 24);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](4, 1, event_r5.timestart * 1000, "strftimedayshort"));
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_img_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 29);
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Wc" /* ɵɵpropertyInterpolate */]("src", event_r5.moduleIcon, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_ion_icon_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 30);
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", event_r5.eventIcon);
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_span_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 25);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](event_r5.iconTitle);
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_span_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" - ", core["Rc" /* ɵɵpipeBind2 */](2, 1, (event_r5.timestart + event_r5.timeduration) * 1000, "strftimetime"), " ");
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_span_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const event_r5 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" - ", core["Rc" /* ɵɵpipeBind2 */](2, 1, (event_r5.timestart + event_r5.timeduration) * 1000, "strftimedatetimeshort"), " ");
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_ion_note_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 31);
        core["Ec" /* ɵɵelementStart */](2, "span", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.notsent"));
    }
}
function AddonCalendarListPage_ion_list_24_ng_container_1_ion_note_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 33);
        core["Ec" /* ɵɵelementStart */](2, "span", 32);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.deletedoffline"));
    }
}
const _c1 = function (a0) { return [a0]; };
function AddonCalendarListPage_ion_list_24_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonCalendarListPage_ion_list_24_ng_container_1_ion_item_divider_1_Template, 5, 4, "ion-item-divider", 20);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 21);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarListPage_ion_list_24_ng_container_1_Template_ion_item_click_2_listener() { core["gd" /* ɵɵrestoreView */](_r21); const event_r5 = ctx.$implicit; const ctx_r20 = core["Oc" /* ɵɵnextContext */](2); return ctx_r20.gotoEvent(event_r5.id); });
        core["nd" /* ɵɵtemplate */](3, AddonCalendarListPage_ion_list_24_ng_container_1_img_3_Template, 1, 1, "img", 22);
        core["nd" /* ɵɵtemplate */](4, AddonCalendarListPage_ion_list_24_ng_container_1_ion_icon_4_Template, 1, 1, "ion-icon", 23);
        core["Ec" /* ɵɵelementStart */](5, "ion-label");
        core["Ec" /* ɵɵelementStart */](6, "p", 24);
        core["Ec" /* ɵɵelementStart */](7, "span", 25);
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["nd" /* ɵɵtemplate */](10, AddonCalendarListPage_ion_list_24_ng_container_1_span_10_Template, 2, 1, "span", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](11, "core-format-text", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "p");
        core["pd" /* ɵɵtext */](13);
        core["Pc" /* ɵɵpipe */](14, "coreFormatDate");
        core["nd" /* ɵɵtemplate */](15, AddonCalendarListPage_ion_list_24_ng_container_1_span_15_Template, 3, 4, "span", 20);
        core["nd" /* ɵɵtemplate */](16, AddonCalendarListPage_ion_list_24_ng_container_1_span_16_Template, 3, 4, "span", 20);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](17, AddonCalendarListPage_ion_list_24_ng_container_1_ion_note_17_Template, 5, 3, "ion-note", 28);
        core["nd" /* ɵɵtemplate */](18, AddonCalendarListPage_ion_list_24_ng_container_1_ion_note_18_Template, 5, 3, "ion-note", 28);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const event_r5 = ctx.$implicit;
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.showDate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](21, _c1, "addon-calendar-eventtype-" + event_r5.eventtype));
        core["mc" /* ɵɵattribute */]("aria-label", event_r5.name)("aria-current", event_r5.id == ctx_r4.eventId ? "page" : "false");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.moduleIcon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.eventIcon && !event_r5.moduleIcon);
        core["lc" /* ɵɵadvance */](4);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](9, 16, "addon.calendar.type" + event_r5.formattedType), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.moduleIcon && event_r5.iconTitle);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", event_r5.name)("contextLevel", event_r5.contextLevel)("contextInstanceId", event_r5.contextInstanceId);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](14, 18, event_r5.timestart * 1000, "strftimetime"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.timeduration && event_r5.endsSameDay);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.timeduration && !event_r5.endsSameDay);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.offline && !event_r5.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r5.deleted);
    }
}
function AddonCalendarListPage_ion_list_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 18);
        core["nd" /* ɵɵtemplate */](1, AddonCalendarListPage_ion_list_24_ng_container_1_Template, 19, 23, "ng-container", 19);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.filteredEvents);
    }
}
function AddonCalendarListPage_ion_fab_26_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 34);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 35);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarListPage_ion_fab_26_Template_ion_fab_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r23); const ctx_r22 = core["Oc" /* ɵɵnextContext */](); return ctx_r22.openEdit(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 36);
        core["Ec" /* ɵɵelementStart */](4, "span", 25);
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
 * Page that displays the list of calendar events.
 */
let list_page_AddonCalendarListPage = /*@__PURE__*/ (() => {
    class AddonCalendarListPage {
        constructor() {
            this.initialTime = 0;
            this.daysLoaded = 0;
            this.emptyEventsTimes = 0; // Variable to identify consecutive calls returning 0 events.
            this.categoriesRetrieved = false;
            this.getCategories = false;
            this.categories = {};
            this.onlineEvents = [];
            this.offlineEvents = [];
            this.deletedEvents = [];
            this.courses = [];
            this.eventsLoaded = false;
            this.events = []; // Events (both online and offline).
            this.notificationsEnabled = false;
            this.filteredEvents = [];
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.canCreate = false;
            this.hasOffline = false;
            this.isOnline = false;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
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
            this.siteHomeId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
            this.notificationsEnabled = local_notifications["a" /* CoreLocalNotifications */].isAvailable();
            this.currentSiteId = sites["b" /* CoreSites */].getCurrentSiteId();
            if (this.notificationsEnabled) {
                // Re-schedule events if default time changes.
                this.obsDefaultTimeChange = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
                    calendar["a" /* AddonCalendar */].scheduleEventsNotifications(this.onlineEvents);
                }, this.currentSiteId);
            }
            // Listen for events added. When an event is added, reload the data.
            this.newEventObserver = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.eventsLoaded = false;
                    this.refreshEvents(true, false);
                }
            }, this.currentSiteId);
            // Listen for new event discarded event. When it does, reload the data.
            this.discardedObserver = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, () => {
                this.eventsLoaded = false;
                this.refreshEvents(true, false);
            }, this.currentSiteId);
            // Listen for events edited. When an event is edited, reload the data.
            this.editEventObserver = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.eventsLoaded = false;
                    this.refreshEvents(true, false);
                }
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized automatically.
            this.syncObserver = singletons_events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].AUTO_SYNCED, () => {
                this.eventsLoaded = false;
                this.refreshEvents();
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized manually but not by this page.
            this.manualSyncObserver = singletons_events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, (data) => {
                if (data && data.source != 'list') {
                    this.eventsLoaded = false;
                    this.refreshEvents();
                }
            }, this.currentSiteId);
            // Update the list when an event is deleted.
            this.deleteEventObserver = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, (data) => {
                if (data && !data.sent) {
                    // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                    this.markAsDeleted(data.eventId, true);
                    this.deletedEvents.push(data.eventId);
                    this.hasOffline = true;
                }
                else {
                    // Event deleted, refresh the view.
                    this.eventsLoaded = false;
                    this.refreshEvents();
                }
            }, this.currentSiteId);
            // Listen for events "undeleted" (offline).
            this.undeleteEventObserver = singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, (data) => {
                if (!data || !data.eventId) {
                    return;
                }
                // Mark it as undeleted, no need to refresh.
                this.markAsDeleted(data.eventId, false);
                // Remove it from the list of deleted events if it's there.
                const index = this.deletedEvents.indexOf(data.eventId);
                if (index != -1) {
                    this.deletedEvents.splice(index, 1);
                }
                this.hasOffline = !!this.offlineEvents.length || !!this.deletedEvents.length;
            }, this.currentSiteId);
            this.filterChangedObserver =
                singletons_events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].FILTER_CHANGED_EVENT, (data) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    var _a;
                    this.filter = data;
                    // Course viewed has changed, check if the user can create events for this course calendar.
                    this.canCreate = yield calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId);
                    this.filterEvents();
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
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
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.filter.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                yield this.fetchData(false, true, false);
            });
        }
        /**
         * Fetch all the data required for the view.
         *
         * @param refresh Empty events array first.
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        fetchData(refresh = false, sync = false, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.initialTime = time["a" /* CoreTimeUtils */].timestamp();
                this.daysLoaded = 0;
                this.emptyEventsTimes = 0;
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
                            result.source = 'list';
                            singletons_events["b" /* CoreEvents */].trigger(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, this.currentSiteId);
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
                    promises.push(calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId).then((canEdit) => {
                        this.canCreate = canEdit;
                        return;
                    }));
                    // Load courses for the popover.
                    promises.push(courses_helper["a" /* CoreCoursesHelper */].getCoursesForPopover(this.filter.courseId).then((result) => {
                        this.courses = result.courses;
                        return this.fetchEvents(refresh);
                    }));
                    // Get offline events.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].getAllEditedEvents().then((offlineEvents) => {
                        this.hasOffline = this.hasOffline || !!offlineEvents.length;
                        // Format data and sort by timestart.
                        const events = offlineEvents.map((event) => calendar_helper["b" /* AddonCalendarHelper */].formatOfflineEventData(event));
                        this.offlineEvents = calendar_helper["b" /* AddonCalendarHelper */].sortEvents(events);
                        return;
                    }));
                    // Get events deleted in offline.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].getAllDeletedEventsIds().then((ids) => {
                        this.hasOffline = this.hasOffline || !!ids.length;
                        this.deletedEvents = ids;
                        return;
                    }));
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                }
                this.eventsLoaded = true;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
            });
        }
        /**
         * Fetches the events and updates the view.
         *
         * @param refresh Empty events array first.
         * @return Promise resolved when done.
         */
        fetchEvents(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                try {
                    const onlineEventsTemp = yield calendar["a" /* AddonCalendar */].getEventsList(this.initialTime, this.daysLoaded, calendar["c" /* AddonCalendarProvider */].DAYS_INTERVAL);
                    if (onlineEventsTemp.length === 0) {
                        this.emptyEventsTimes++;
                        if (this.emptyEventsTimes > 5) { // Stop execution if we retrieve empty list 6 consecutive times.
                            this.canLoadMore = false;
                            if (refresh) {
                                this.onlineEvents = [];
                                this.filteredEvents = [];
                                this.events = this.offlineEvents;
                            }
                        }
                        else {
                            // No events returned, load next events.
                            this.daysLoaded += calendar["c" /* AddonCalendarProvider */].DAYS_INTERVAL;
                            return this.fetchEvents();
                        }
                    }
                    else {
                        const onlineEvents = onlineEventsTemp.map((event) => calendar_helper["b" /* AddonCalendarHelper */].formatEventData(event));
                        // Get the merged events of this period.
                        const events = this.mergeEvents(onlineEvents);
                        this.getCategories = this.shouldLoadCategories(onlineEvents);
                        if (refresh) {
                            this.onlineEvents = onlineEvents;
                            this.events = events;
                        }
                        else {
                            // Filter events with same ID. Repeated events are returned once per WS call, show them only once.
                            this.onlineEvents = utils["a" /* CoreUtils */].mergeArraysWithoutDuplicates(this.onlineEvents, onlineEvents, 'id');
                            this.events = utils["a" /* CoreUtils */].mergeArraysWithoutDuplicates(this.events, events, 'id');
                        }
                        this.filterEvents();
                        // Calculate which evemts need to display the date.
                        this.filteredEvents.forEach((event, index) => {
                            event.showDate = this.showDate(event, this.filteredEvents[index - 1]);
                            event.endsSameDay = this.endsSameDay(event);
                        });
                        this.canLoadMore = true;
                        // Schedule notifications for the events retrieved (might have new events).
                        calendar["a" /* AddonCalendar */].scheduleEventsNotifications(this.onlineEvents);
                        this.daysLoaded += calendar["c" /* AddonCalendarProvider */].DAYS_INTERVAL;
                    }
                    // Resize the content so infinite loading is able to calculate if it should load more items or not.
                    // @todo: Infinite loading is not working if content is not high enough.
                    // this.content.resize();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                }
                // Success retrieving events. Get categories if needed.
                if (this.getCategories) {
                    this.getCategories = false;
                    return this.loadCategories();
                }
            });
        }
        /**
         * Function to load more events.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadMoreEvents(infiniteComplete) {
            this.fetchEvents().finally(() => {
                infiniteComplete && infiniteComplete();
            });
        }
        filterEvents() {
            this.filteredEvents = calendar_helper["b" /* AddonCalendarHelper */].getFilteredEvents(this.events, this.filter, this.categories);
        }
        /**
         * Returns if the current state should load categories or not.
         *
         * @param events Events to parse.
         * @return True if categories should be loaded.
         */
        shouldLoadCategories(events) {
            if (this.categoriesRetrieved || this.getCategories) {
                // Use previous value
                return this.getCategories;
            }
            // Categories not loaded yet. We should get them if there's any category event.
            const found = events.some((event) => typeof event.categoryid != 'undefined' && event.categoryid > 0);
            return found || this.getCategories;
        }
        /**
         * Load categories to be able to filter events.
         *
         * @return Promise resolved when done.
         */
        loadCategories() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const cats = yield courses["a" /* CoreCourses */].getCategories(0, true);
                    this.categoriesRetrieved = true;
                    this.categories = {};
                    // Index categories by ID.
                    cats.forEach((category) => {
                        this.categories[category.id] = category;
                    });
                }
                catch (_a) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Merge a period of online events with the offline events of that period.
         *
         * @param onlineEvents Online events.
         * @return Merged events.
         */
        mergeEvents(onlineEvents) {
            if (!this.offlineEvents.length && !this.deletedEvents.length) {
                // No offline events, nothing to merge.
                return onlineEvents;
            }
            const start = this.initialTime + (constants["a" /* CoreConstants */].SECONDS_DAY * this.daysLoaded);
            const end = start + (constants["a" /* CoreConstants */].SECONDS_DAY * calendar["c" /* AddonCalendarProvider */].DAYS_INTERVAL) - 1;
            let result = onlineEvents;
            if (this.deletedEvents.length) {
                // Mark as deleted the events that were deleted in offline.
                result.forEach((event) => {
                    event.deleted = this.deletedEvents.indexOf(event.id) != -1;
                });
            }
            if (this.offlineEvents.length) {
                // Remove the online events that were modified in offline.
                result = result.filter((event) => {
                    const offlineEvent = this.offlineEvents.find((ev) => ev.id == event.id);
                    return !offlineEvent;
                });
            }
            // Now get the offline events that belong to this period.
            const periodOfflineEvents = this.offlineEvents.filter((event) => {
                if (this.daysLoaded == 0 && event.timestart < start) {
                    // Display offline events that are previous to current time to allow editing them.
                    return true;
                }
                return (event.timestart >= start || event.timestart + event.timeduration >= start) && event.timestart <= end;
            });
            // Merge both arrays and sort them.
            result = result.concat(periodOfflineEvents);
            return calendar_helper["b" /* AddonCalendarHelper */].sortEvents(result);
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
                if (!this.eventsLoaded) {
                    return;
                }
                yield this.refreshEvents(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            });
        }
        /**
         * Refresh the events.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        refreshEvents(sync, showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                const promises = [];
                promises.push(calendar["a" /* AddonCalendar */].invalidateEventsList());
                promises.push(calendar["a" /* AddonCalendar */].invalidateAllowedEventTypes());
                if (this.categoriesRetrieved) {
                    promises.push(courses["a" /* CoreCourses */].invalidateCategories(0, true));
                    this.categoriesRetrieved = false;
                }
                yield Promise.all(promises).finally(() => this.fetchData(true, sync, showErrors));
            });
        }
        /**
         * Check date should be shown on event list for the current event.
         * If date has changed from previous to current event it should be shown.
         *
         * @param event Current event where to show the date.
         * @param prevEvent Previous event where to compare the date with.
         * @return If date has changed and should be shown.
         */
        showDate(event, prevEvent) {
            if (!prevEvent) {
                // First event, show it.
                return true;
            }
            // Check if day has changed.
            return !moment_default()(event.timestart * 1000).isSame(prevEvent.timestart * 1000, 'day');
        }
        /**
         * Check if event ends the same date or not.
         *
         * @param event Event info.
         * @return If date has changed and should be shown.
         */
        endsSameDay(event) {
            if (!event.timeduration) {
                // No duration.
                return true;
            }
            // Check if day has changed.
            return moment_default()(event.timestart * 1000).isSame((event.timestart + event.timeduration) * 1000, 'day');
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
            this.eventId = undefined;
            eventId = eventId || 0;
            const params = {};
            if (this.filter.courseId) {
                params.courseId = this.filter.courseId;
            }
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(`calendar/edit/${eventId}`, { params });
        }
        /**
         * Open calendar events settings.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/calendar/settings');
        }
        /**
         * Navigate to a particular event.
         *
         * @param eventId Event to load.
         */
        gotoEvent(eventId) {
            this.eventId = eventId;
            if (eventId <= 0) {
                // It's an offline event, go to the edit page.
                this.openEdit(eventId);
            }
            else {
                services_navigator["a" /* CoreNavigator */].navigateToSitePath(`/calendar/event/${eventId}`);
            }
        }
        /**
         * Find an event and mark it as deleted.
         *
         * @param eventId Event ID.
         * @param deleted Whether to mark it as deleted or not.
         */
        markAsDeleted(eventId, deleted) {
            const event = this.onlineEvents.find((event) => event.id == eventId);
            if (event) {
                event.deleted = deleted;
            }
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            (_a = this.obsDefaultTimeChange) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.newEventObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.discardedObserver) === null || _c === void 0 ? void 0 : _c.off();
            (_d = this.editEventObserver) === null || _d === void 0 ? void 0 : _d.off();
            (_e = this.deleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
            (_f = this.undeleteEventObserver) === null || _f === void 0 ? void 0 : _f.off();
            (_g = this.syncObserver) === null || _g === void 0 ? void 0 : _g.off();
            (_h = this.manualSyncObserver) === null || _h === void 0 ? void 0 : _h.off();
            (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
            (_k = this.onlineObserver) === null || _k === void 0 ? void 0 : _k.unsubscribe();
        }
    }
    AddonCalendarListPage.ɵfac = function AddonCalendarListPage_Factory(t) { return new (t || AddonCalendarListPage)(); };
    AddonCalendarListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarListPage, selectors: [["page-addon-calendar-list"]], viewQuery: function AddonCalendarListPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 27, vars: 32, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-filter", "aria-hidden", "true"], ["iconAction", "fas-cogs", 3, "hidden", "priority", "content", "action"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["icon", "fas-calendar", 3, "message", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], [3, "enabled", "error", "action"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], ["icon", "fas-calendar", 3, "message"], [1, "ion-no-margin"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["button", "", "detail", "true", 1, "addon-calendar-event", "ion-text-wrap", 3, "ngClass", "click"], ["slot", "start", "class", "core-module-icon", "alt", "", "role", "presentation", 3, "src", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], [1, "item-heading"], [1, "sr-only"], ["class", "sr-only", 4, "ngIf"], [3, "text", "contextLevel", "contextInstanceId"], ["slot", "end", 4, "ngIf"], ["slot", "start", "alt", "", "role", "presentation", 1, "core-module-icon", 3, "src"], ["slot", "start", "aria-hidden", "true", 3, "name"], ["name", "fas-clock", "aria-hidden", "true"], [1, "ion-text-wrap"], ["name", "fas-trash", "aria-hidden", "true"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "fas-plus", "aria-hidden", "true"]], template: function AddonCalendarListPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function AddonCalendarListPage_Template_ion_button_click_9_listener($event) { return ctx.openFilter($event); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-context-menu");
                core["Ec" /* ɵɵelementStart */](13, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarListPage_Template_core_context_menu_item_action_13_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](15, "core-context-menu-item", 6);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarListPage_Template_core_context_menu_item_action_15_listener($event) { return ctx.doRefresh(undefined, $event, true); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "ion-content");
                core["Ec" /* ɵɵelementStart */](18, "ion-refresher", 7);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCalendarListPage_Template_ion_refresher_ionRefresh_18_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](19, "ion-refresher-content", 8);
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "core-loading", 9);
                core["nd" /* ɵɵtemplate */](22, AddonCalendarListPage_ion_card_22_Template, 7, 8, "ion-card", 10);
                core["nd" /* ɵɵtemplate */](23, AddonCalendarListPage_core_empty_box_23_Template, 2, 3, "core-empty-box", 11);
                core["nd" /* ɵɵtemplate */](24, AddonCalendarListPage_ion_list_24_Template, 2, 1, "ion-list", 12);
                core["Ec" /* ɵɵelementStart */](25, "core-infinite-loading", 13);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarListPage_Template_core_infinite_loading_action_25_listener($event) { return ctx.loadMoreEvents($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](26, AddonCalendarListPage_ion_fab_26_Template, 7, 6, "ion-fab", 14);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 20, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 22, "addon.calendar.calendarevents"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 24, "core.filter"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.notificationsEnabled)("priority", 600)("content", core["Qc" /* ɵɵpipeBind1 */](14, 26, "core.settings.settings"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.eventsLoaded || !ctx.hasOffline || !ctx.isOnline)("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](16, 28, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.eventsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](20, 30, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.eventsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasOffline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.filteredEvents || !ctx.filteredEvents.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.filteredEvents && ctx.filteredEvents.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canCreate);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], common["q" /* NgClass */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["I" /* IonItemDivider */], ionic_angular["V" /* IonNote */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], styles: ["[_nghost-%COMP%]{--addon-calendar-blank-day-background-color:var(--gray-lighter)}[_nghost-%COMP%]   .item.addon-calendar-event[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{color:#fff;border-radius:50%;padding:6px}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-category[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-category-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-course[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-course-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-group[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-group-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-user[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-user-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-site[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-site-color)}", "[_nghost-%COMP%]   ion-note[_ngcontent-%COMP%]{max-width:30%}"] });
    return AddonCalendarListPage;
})();

// CONCATENATED MODULE: ./src/addons/calendar/pages/list/list.module.ts
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









const splitviewRoutes = [calendar_lazy_module["AddonCalendarEditRoute"], calendar_lazy_module["AddonCalendarEventRoute"]];
const mobileRoutes = [
    {
        path: '',
        component: list_page_AddonCalendarListPage,
    },
    ...splitviewRoutes,
];
const tabletRoutes = [
    {
        path: '',
        component: list_page_AddonCalendarListPage,
        children: [
            ...splitviewRoutes,
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let list_module_AddonCalendarListPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarListPageModule {
    }
    AddonCalendarListPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarListPageModule });
    AddonCalendarListPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarListPageModule_Factory(t) { return new (t || AddonCalendarListPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarListPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](list_module_AddonCalendarListPageModule, { declarations: [list_page_AddonCalendarListPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);