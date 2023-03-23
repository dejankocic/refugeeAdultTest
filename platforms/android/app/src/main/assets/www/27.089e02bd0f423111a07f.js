(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "MncD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonCalendarDayPageModule", function() { return /* binding */ day_module_AddonCalendarDayPageModule; });

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

// EXTERNAL MODULE: ./src/core/services/local-notifications.ts + 1 modules
var local_notifications = __webpack_require__("ANhT");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

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

// EXTERNAL MODULE: ./src/core/features/courses/services/courses-helper.ts
var courses_helper = __webpack_require__("ZSwf");

// EXTERNAL MODULE: ./src/addons/calendar/components/filter/filter.ts
var filter = __webpack_require__("kLT3");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

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

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/calendar/pages/day/day.page.ts

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






























function AddonCalendarDayPage_core_context_menu_item_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 19);
        core["Mc" /* ɵɵlistener */]("action", function AddonCalendarDayPage_core_context_menu_item_13_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.goToCurrentDay(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 900)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.calendar.today"));
    }
}
function AddonCalendarDayPage_ion_col_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 3);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarDayPage_ion_col_22_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.loadPrevious(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 21);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.calendar.dayprev"));
    }
}
function AddonCalendarDayPage_ion_col_26_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 22);
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 3);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarDayPage_ion_col_26_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.loadNext(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 23);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.calendar.daynext"));
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonCalendarDayPage_ion_card_28_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 24);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 25);
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
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.hasdatatosync", core["ad" /* ɵɵpureFunction1 */](6, _c0, core["Qc" /* ɵɵpipeBind1 */](6, 4, "core.day"))));
    }
}
function AddonCalendarDayPage_core_empty_box_29_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 26);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.calendar.noevents"));
    }
}
function AddonCalendarDayPage_ion_list_30_ng_container_1_img_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 38);
    }
    if (rf & 2) {
        const event_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Wc" /* ɵɵpropertyInterpolate */]("src", event_r14.moduleIcon, core["jd" /* ɵɵsanitizeUrl */]);
    }
}
function AddonCalendarDayPage_ion_list_30_ng_container_1_ion_icon_3_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 39);
    }
    if (rf & 2) {
        const event_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("name", event_r14.eventIcon);
    }
}
function AddonCalendarDayPage_ion_list_30_ng_container_1_span_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 32);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const event_r14 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](event_r14.iconTitle);
    }
}
function AddonCalendarDayPage_ion_list_30_ng_container_1_ion_note_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 40);
        core["Ec" /* ɵɵelementStart */](2, "span", 41);
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
function AddonCalendarDayPage_ion_list_30_ng_container_1_ion_note_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 42);
        core["Ec" /* ɵɵelementStart */](2, "span", 41);
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
function AddonCalendarDayPage_ion_list_30_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 29);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarDayPage_ion_list_30_ng_container_1_Template_ion_item_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r24); const event_r14 = ctx.$implicit; const ctx_r23 = core["Oc" /* ɵɵnextContext */](2); return ctx_r23.gotoEvent(event_r14.id); });
        core["nd" /* ɵɵtemplate */](2, AddonCalendarDayPage_ion_list_30_ng_container_1_img_2_Template, 1, 1, "img", 30);
        core["nd" /* ɵɵtemplate */](3, AddonCalendarDayPage_ion_list_30_ng_container_1_ion_icon_3_Template, 1, 1, "ion-icon", 31);
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["Ec" /* ɵɵelementStart */](5, "span", 32);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["nd" /* ɵɵtemplate */](8, AddonCalendarDayPage_ion_list_30_ng_container_1_span_8_Template, 2, 1, "span", 33);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p", 34);
        core["zc" /* ɵɵelement */](10, "core-format-text", 35);
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](11, "p", 36);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](12, AddonCalendarDayPage_ion_list_30_ng_container_1_ion_note_12_Template, 5, 3, "ion-note", 37);
        core["nd" /* ɵɵtemplate */](13, AddonCalendarDayPage_ion_list_30_ng_container_1_ion_note_13_Template, 5, 3, "ion-note", 37);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const event_r14 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("item-dimmed", event_r14.ispast);
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](16, _c1, "addon-calendar-eventtype-" + event_r14.eventtype));
        core["mc" /* ɵɵattribute */]("aria-label", event_r14.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r14.moduleIcon);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r14.eventIcon && !event_r14.moduleIcon);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 14, "addon.calendar.type" + event_r14.formattedType), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r14.moduleIcon && event_r14.iconTitle);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", event_r14.name)("contextLevel", event_r14.contextLevel)("contextInstanceId", event_r14.contextInstanceId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("innerHTML", event_r14.formattedtime, core["hd" /* ɵɵsanitizeHtml */]);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r14.offline && !event_r14.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", event_r14.deleted);
    }
}
function AddonCalendarDayPage_ion_list_30_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 27);
        core["nd" /* ɵɵtemplate */](1, AddonCalendarDayPage_ion_list_30_ng_container_1_Template, 14, 18, "ng-container", 28);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r5.filteredEvents);
    }
}
function AddonCalendarDayPage_ion_fab_31_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 43);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 44);
        core["Mc" /* ɵɵlistener */]("click", function AddonCalendarDayPage_ion_fab_31_Template_ion_fab_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r26); const ctx_r25 = core["Oc" /* ɵɵnextContext */](); return ctx_r25.openEdit(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 45);
        core["Ec" /* ɵɵelementStart */](4, "span", 32);
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
 * Page that displays the calendar events for a certain day.
 */
let day_page_AddonCalendarDayPage = /*@__PURE__*/ (() => {
    class AddonCalendarDayPage {
        constructor() {
            this.categories = {};
            this.events = []; // Events (both online and offline).
            this.onlineEvents = [];
            this.offlineEvents = {}; // Offline events classified in month & day.
            this.offlineEditedEventsIds = []; // IDs of events edited in offline.
            this.deletedEvents = []; // Events deleted in offline.
            this.filteredEvents = [];
            this.canCreate = false;
            this.courses = [];
            this.loaded = false;
            this.hasOffline = false;
            this.isOnline = false;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.isCurrentDay = false;
            this.isPastDay = false;
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
            if (local_notifications["a" /* CoreLocalNotifications */].isAvailable()) {
                // Re-schedule events if default time changes.
                this.obsDefaultTimeChange = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, () => {
                    calendar["a" /* AddonCalendar */].scheduleEventsNotifications(this.onlineEvents);
                }, this.currentSiteId);
            }
            // Listen for events added. When an event is added, reload the data.
            this.newEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.loaded = false;
                    this.refreshData(true, true);
                }
            }, this.currentSiteId);
            // Listen for new event discarded event. When it does, reload the data.
            this.discardedObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].NEW_EVENT_DISCARDED_EVENT, () => {
                this.loaded = false;
                this.refreshData(true, true);
            }, this.currentSiteId);
            // Listen for events edited. When an event is edited, reload the data.
            this.editEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].EDIT_EVENT_EVENT, (data) => {
                if (data && data.eventId) {
                    this.loaded = false;
                    this.refreshData(true, true);
                }
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].AUTO_SYNCED, () => {
                this.loaded = false;
                this.refreshData(false, true);
            }, this.currentSiteId);
            // Refresh data if calendar events are synchronized manually but not by this page.
            this.manualSyncObserver = events["b" /* CoreEvents */].on(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, (data) => {
                if (data && (data.source != 'day' || data.year != this.year || data.month != this.month || data.day != this.day)) {
                    this.loaded = false;
                    this.refreshData(false, true);
                }
            }, this.currentSiteId);
            // Update the events when an event is deleted.
            this.deleteEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].DELETED_EVENT_EVENT, (data) => {
                if (data && !data.sent) {
                    // Event was deleted in offline. Just mark it as deleted, no need to refresh.
                    this.hasOffline = this.markAsDeleted(data.eventId, true) || this.hasOffline;
                    this.deletedEvents.push(data.eventId);
                }
                else {
                    this.loaded = false;
                    this.refreshData(false, true);
                }
            }, this.currentSiteId);
            // Listen for events "undeleted" (offline).
            this.undeleteEventObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].UNDELETED_EVENT_EVENT, (data) => {
                if (!data || !data.eventId) {
                    return;
                }
                // Mark it as undeleted, no need to refresh.
                const found = this.markAsDeleted(data.eventId, false);
                // Remove it from the list of deleted events if it's there.
                const index = this.deletedEvents.indexOf(data.eventId);
                if (index != -1) {
                    this.deletedEvents.splice(index, 1);
                }
                if (found) {
                    // The deleted event belongs to current list. Re-calculate "hasOffline".
                    this.hasOffline = false;
                    if (this.events.length != this.onlineEvents.length) {
                        this.hasOffline = true;
                    }
                    else {
                        const event = this.events.find((event) => event.deleted || event.offline);
                        this.hasOffline = !!event;
                    }
                }
            }, this.currentSiteId);
            this.filterChangedObserver = events["b" /* CoreEvents */].on(calendar["c" /* AddonCalendarProvider */].FILTER_CHANGED_EVENT, (data) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.filter = data;
                // Course viewed has changed, check if the user can create events for this course calendar.
                this.canCreate = yield calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId);
                this.filterEvents();
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
            const types = [];
            utils["a" /* CoreUtils */].enumKeys(calendar["b" /* AddonCalendarEventType */]).forEach((name) => {
                var _a;
                const value = calendar["b" /* AddonCalendarEventType */][name];
                this.filter[name] = (_a = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam(name)) !== null && _a !== void 0 ? _a : true;
                types.push(value);
            });
            this.filter.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.filter.categoryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('categoryId');
            this.filter.filtered = typeof this.filter.courseId != 'undefined' || types.some((name) => !this.filter[name]);
            const now = new Date();
            this.year = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('year') || now.getFullYear();
            this.month = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('month') || (now.getMonth() + 1);
            this.day = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('day') || now.getDate();
            this.calculateCurrentMoment();
            this.calculateIsCurrentDay();
            this.fetchData(true);
        }
        /**
         * Fetch all the data required for the view.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        fetchData(sync) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                this.isOnline = app["a" /* CoreApp */].isOnline();
                if (sync) {
                    yield this.sync();
                }
                try {
                    const promises = [];
                    // Load courses for the popover.
                    promises.push(courses_helper["a" /* CoreCoursesHelper */].getCoursesForPopover(this.filter.courseId).then((data) => {
                        this.courses = data.courses;
                        return;
                    }));
                    // Get categories.
                    promises.push(this.loadCategories());
                    // Get offline events.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].getAllEditedEvents().then((offlineEvents) => {
                        // Classify them by month & day.
                        this.offlineEvents = calendar_helper["b" /* AddonCalendarHelper */].classifyIntoMonths(offlineEvents);
                        // Get the IDs of events edited in offline.
                        this.offlineEditedEventsIds = offlineEvents.filter((event) => event.id > 0).map((event) => event.id);
                        return;
                    }));
                    // Get events deleted in offline.
                    promises.push(calendar_offline["a" /* AddonCalendarOffline */].getAllDeletedEventsIds().then((ids) => {
                        this.deletedEvents = ids;
                        return;
                    }));
                    // Check if user can create events.
                    promises.push(calendar_helper["b" /* AddonCalendarHelper */].canEditEvents(this.filter.courseId).then((canEdit) => {
                        this.canCreate = canEdit;
                        return;
                    }));
                    // Get user preferences.
                    promises.push(calendar["a" /* AddonCalendar */].getCalendarTimeFormat().then((value) => {
                        this.timeFormat = value;
                        return;
                    }));
                    yield Promise.all(promises);
                    yield this.fetchEvents();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                }
                this.loaded = true;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
            });
        }
        /**
         * Fetch the events for current day.
         *
         * @return Promise resolved when done.
         */
        fetchEvents() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let result;
                try {
                    // Don't pass courseId and categoryId, we'll filter them locally.
                    result = yield calendar["a" /* AddonCalendar */].getDayEvents(this.year, this.month, this.day);
                    this.onlineEvents = result.events.map((event) => calendar_helper["b" /* AddonCalendarHelper */].formatEventData(event));
                }
                catch (error) {
                    if (app["a" /* CoreApp */].isOnline()) {
                        throw error;
                    }
                    // Allow navigating to non-cached days in offline (behave as if using emergency cache).
                    this.onlineEvents = [];
                }
                // Calculate the period name. We don't use the one in result because it's in server's language.
                this.periodName = time["a" /* CoreTimeUtils */].userDate(new Date(this.year, this.month - 1, this.day).getTime(), 'core.strftimedaydate');
                // Schedule notifications for the events retrieved (only future events will be scheduled).
                calendar["a" /* AddonCalendar */].scheduleEventsNotifications(this.onlineEvents);
                // Merge the online events with offline data.
                this.events = this.mergeEvents();
                // Filter events by course.
                this.filterEvents();
                this.calculateIsCurrentDay();
                // Re-calculate the formatted time so it uses the device date.
                const dayTime = this.currentMoment.unix() * 1000;
                const promises = this.events.map((event) => {
                    event.ispast = this.isPastDay || (this.isCurrentDay && this.isEventPast(event));
                    return calendar["a" /* AddonCalendar */].formatEventTime(event, this.timeFormat, true, dayTime).then((time) => {
                        event.formattedtime = time;
                        return;
                    });
                });
                yield Promise.all(promises);
            });
        }
        /**
         * Merge online events with the offline events of that period.
         *
         * @return Merged events.
         */
        mergeEvents() {
            this.hasOffline = false;
            if (!Object.keys(this.offlineEvents).length && !this.deletedEvents.length) {
                // No offline events, nothing to merge.
                return this.onlineEvents;
            }
            const monthOfflineEvents = this.offlineEvents[calendar_helper["b" /* AddonCalendarHelper */].getMonthId(this.year, this.month)];
            const dayOfflineEvents = monthOfflineEvents && monthOfflineEvents[this.day];
            let result = this.onlineEvents;
            if (this.deletedEvents.length) {
                // Mark as deleted the events that were deleted in offline.
                result.forEach((event) => {
                    event.deleted = this.deletedEvents.indexOf(event.id) != -1;
                    if (event.deleted) {
                        this.hasOffline = true;
                    }
                });
            }
            if (this.offlineEditedEventsIds.length) {
                // Remove the online events that were modified in offline.
                result = result.filter((event) => this.offlineEditedEventsIds.indexOf(event.id) == -1);
                if (result.length != this.onlineEvents.length) {
                    this.hasOffline = true;
                }
            }
            if (dayOfflineEvents && dayOfflineEvents.length) {
                // Add the offline events (either new or edited).
                this.hasOffline = true;
                result = calendar_helper["b" /* AddonCalendarHelper */].sortEvents(result.concat(dayOfflineEvents));
            }
            return result;
        }
        /**
         * Filter events based on the filter popover.
         */
        filterEvents() {
            this.filteredEvents = calendar_helper["b" /* AddonCalendarHelper */].getFilteredEvents(this.events, this.filter, this.categories);
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param done Function to call when done.
         * @return Promise resolved when done.
         */
        doRefresh(refresher, done) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.loaded) {
                    return;
                }
                yield this.refreshData(true).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            });
        }
        /**
         * Refresh the data.
         *
         * @param sync Whether it should try to synchronize offline events.
         * @param afterChange Whether the refresh is done after an event has changed or has been synced.
         * @return Promise resolved when done.
         */
        refreshData(sync, afterChange) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                const promises = [];
                // Don't invalidate day events after a change, it has already been handled.
                if (!afterChange) {
                    promises.push(calendar["a" /* AddonCalendar */].invalidateDayEvents(this.year, this.month, this.day));
                }
                promises.push(calendar["a" /* AddonCalendar */].invalidateAllowedEventTypes());
                promises.push(courses["a" /* CoreCourses */].invalidateCategories(0, true));
                promises.push(calendar["a" /* AddonCalendar */].invalidateTimeFormat());
                yield Promise.all(promises).finally(() => this.fetchData(sync));
            });
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
         * Try to synchronize offline events.
         *
         * @param showErrors Whether to show sync errors to the user.
         * @return Promise resolved when done.
         */
        sync(showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield calendar_sync["a" /* AddonCalendarSync */].syncEvents();
                    if (result.warnings && result.warnings.length) {
                        dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                    }
                    if (result.updated) {
                        // Trigger a manual sync event.
                        result.source = 'day';
                        result.day = this.day;
                        result.month = this.month;
                        result.year = this.year;
                        events["b" /* CoreEvents */].trigger(calendar_sync["b" /* AddonCalendarSyncProvider */].MANUAL_SYNCED, result, this.currentSiteId);
                    }
                }
                catch (error) {
                    if (showErrors) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                }
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
            if (!eventId) {
                // It's a new event, set the time.
                eventId = 0;
                params.timestamp = moment_default()().year(this.year).month(this.month - 1).date(this.day).unix() * 1000;
            }
            if (this.filter.courseId) {
                params.courseId = this.filter.courseId;
            }
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(`/calendar/edit/${eventId}`, { params });
        }
        /**
         * Calculate current moment.
         */
        calculateCurrentMoment() {
            this.currentMoment = moment_default()().year(this.year).month(this.month - 1).date(this.day);
        }
        /**
         * Check if user is viewing the current day.
         */
        calculateIsCurrentDay() {
            const now = new Date();
            this.currentTime = time["a" /* CoreTimeUtils */].timestamp();
            this.isCurrentDay = this.year == now.getFullYear() && this.month == now.getMonth() + 1 && this.day == now.getDate();
            this.isPastDay = this.year < now.getFullYear() || (this.year == now.getFullYear() && this.month < now.getMonth()) ||
                (this.year == now.getFullYear() && this.month == now.getMonth() + 1 && this.day < now.getDate());
        }
        /**
         * Go to current day.
         */
        goToCurrentDay() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const now = new Date();
                const initialDay = this.day;
                const initialMonth = this.month;
                const initialYear = this.year;
                this.day = now.getDate();
                this.month = now.getMonth() + 1;
                this.year = now.getFullYear();
                this.calculateCurrentMoment();
                this.loaded = false;
                try {
                    yield this.fetchEvents();
                    this.isCurrentDay = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                    this.year = initialYear;
                    this.month = initialMonth;
                    this.day = initialDay;
                    this.calculateCurrentMoment();
                }
                this.loaded = true;
            });
        }
        /**
         * Load next day.
         */
        loadNext() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.increaseDay();
                this.loaded = false;
                try {
                    yield this.fetchEvents();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                    this.decreaseDay();
                }
                this.loaded = true;
            });
        }
        /**
         * Load previous day.
         */
        loadPrevious() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.decreaseDay();
                this.loaded = false;
                try {
                    yield this.fetchEvents();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.calendar.errorloadevents', true);
                    this.increaseDay();
                }
                this.loaded = true;
            });
        }
        /**
         * Decrease the current day.
         */
        decreaseDay() {
            this.currentMoment.subtract(1, 'day');
            this.year = this.currentMoment.year();
            this.month = this.currentMoment.month() + 1;
            this.day = this.currentMoment.date();
        }
        /**
         * Increase the current day.
         */
        increaseDay() {
            this.currentMoment.add(1, 'day');
            this.year = this.currentMoment.year();
            this.month = this.currentMoment.month() + 1;
            this.day = this.currentMoment.date();
        }
        /**
         * Find an event and mark it as deleted.
         *
         * @param eventId Event ID.
         * @param deleted Whether to mark it as deleted or not.
         * @return Whether the event was found.
         */
        markAsDeleted(eventId, deleted) {
            const event = this.onlineEvents.find((event) => event.id == eventId);
            if (event) {
                event.deleted = deleted;
                return true;
            }
            return false;
        }
        /**
         * Returns if the event is in the past or not.
         *
         * @param event Event object.
         * @return True if it's in the past.
         */
        isEventPast(event) {
            return (event.timestart + event.timeduration) < this.currentTime;
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            (_a = this.newEventObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.discardedObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.editEventObserver) === null || _c === void 0 ? void 0 : _c.off();
            (_d = this.deleteEventObserver) === null || _d === void 0 ? void 0 : _d.off();
            (_e = this.undeleteEventObserver) === null || _e === void 0 ? void 0 : _e.off();
            (_f = this.syncObserver) === null || _f === void 0 ? void 0 : _f.off();
            (_g = this.manualSyncObserver) === null || _g === void 0 ? void 0 : _g.off();
            (_h = this.onlineObserver) === null || _h === void 0 ? void 0 : _h.unsubscribe();
            (_j = this.filterChangedObserver) === null || _j === void 0 ? void 0 : _j.off();
            (_k = this.obsDefaultTimeChange) === null || _k === void 0 ? void 0 : _k.off();
        }
    }
    AddonCalendarDayPage.ɵfac = function AddonCalendarDayPage_Factory(t) { return new (t || AddonCalendarDayPage)(); };
    AddonCalendarDayPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonCalendarDayPage, selectors: [["page-addon-calendar-day"]], decls: 32, vars: 29, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-filter", "aria-hidden", "true"], ["iconAction", "fas-calendar-day", 3, "priority", "content", "action", 4, "ngIf"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [1, "ion-no-padding", "safe-area-page"], [1, "ion-align-items-center"], ["class", "ion-text-start", 4, "ngIf"], [1, "ion-text-center", "addon-calendar-period"], ["class", "ion-text-end", 4, "ngIf"], [1, "safe-area-page", 3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["icon", "fas-calendar", "inline", "true", 3, "message", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], ["iconAction", "fas-calendar-day", 3, "priority", "content", "action"], [1, "ion-text-start"], ["name", "fas-chevron-left", "slot", "icon-only", "aria-hidden", "true"], [1, "ion-text-end"], ["name", "fas-chevron-right", "slot", "icon-only", "aria-hidden", "true"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], ["icon", "fas-calendar", "inline", "true", 3, "message"], [1, "ion-no-margin"], [4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 1, "addon-calendar-event", "ion-text-wrap", 3, "ngClass", "click"], ["slot", "start", "class", "core-module-icon", "alt", "", "role", "presentation", 3, "src", 4, "ngIf"], ["slot", "start", "aria-hidden", "true", 3, "name", 4, "ngIf"], [1, "sr-only"], ["class", "sr-only", 4, "ngIf"], [1, "item-heading"], [3, "text", "contextLevel", "contextInstanceId"], [3, "innerHTML"], ["slot", "end", 4, "ngIf"], ["slot", "start", "alt", "", "role", "presentation", 1, "core-module-icon", 3, "src"], ["slot", "start", "aria-hidden", "true", 3, "name"], ["name", "fas-clock", "aria-hidden", "true"], [1, "ion-text-wrap"], ["name", "fas-trash", "aria-hidden", "true"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "fas-plus", "aria-hidden", "true"]], template: function AddonCalendarDayPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function AddonCalendarDayPage_Template_ion_button_click_9_listener($event) { return ctx.openFilter($event); });
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["zc" /* ɵɵelement */](11, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-context-menu");
                core["nd" /* ɵɵtemplate */](13, AddonCalendarDayPage_core_context_menu_item_13_Template, 2, 4, "core-context-menu-item", 5);
                core["Ec" /* ɵɵelementStart */](14, "core-context-menu-item", 6);
                core["Mc" /* ɵɵlistener */]("action", function AddonCalendarDayPage_Template_core_context_menu_item_action_14_listener($event) { return ctx.doRefresh(undefined, $event); });
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "ion-content");
                core["Ec" /* ɵɵelementStart */](17, "ion-refresher", 7);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonCalendarDayPage_Template_ion_refresher_ionRefresh_17_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](18, "ion-refresher-content", 8);
                core["Pc" /* ɵɵpipe */](19, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](20, "ion-grid", 9);
                core["Ec" /* ɵɵelementStart */](21, "ion-row", 10);
                core["nd" /* ɵɵtemplate */](22, AddonCalendarDayPage_ion_col_22_Template, 4, 3, "ion-col", 11);
                core["Ec" /* ɵɵelementStart */](23, "ion-col", 12);
                core["Ec" /* ɵɵelementStart */](24, "h3");
                core["pd" /* ɵɵtext */](25);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](26, AddonCalendarDayPage_ion_col_26_Template, 4, 3, "ion-col", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](27, "core-loading", 14);
                core["nd" /* ɵɵtemplate */](28, AddonCalendarDayPage_ion_card_28_Template, 7, 8, "ion-card", 15);
                core["nd" /* ɵɵtemplate */](29, AddonCalendarDayPage_core_empty_box_29_Template, 2, 3, "core-empty-box", 16);
                core["nd" /* ɵɵtemplate */](30, AddonCalendarDayPage_ion_list_30_Template, 2, 1, "ion-list", 17);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](31, AddonCalendarDayPage_ion_fab_31_Template, 7, 6, "ion-fab", 18);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 19, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 21, "addon.calendar.calendarevents"));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](10, 23, "core.filter"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.isCurrentDay);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.loaded || !ctx.hasOffline || !ctx.isOnline)("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](15, 25, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](19, 27, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.currentMoment);
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.periodName);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.currentMoment);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasOffline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.filteredEvents || !ctx.filteredEvents.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.filteredEvents && ctx.filteredEvents.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canCreate && ctx.loaded);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], common["t" /* NgIf */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], common["q" /* NgClass */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["V" /* IonNote */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]{--addon-calendar-blank-day-background-color:var(--gray-lighter)}[_nghost-%COMP%]   .item.addon-calendar-event[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{color:#fff;border-radius:50%;padding:6px}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-category[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-category-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-course[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-course-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-group[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-group-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-user[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-user-color)}[_nghost-%COMP%]   .item.addon-calendar-event.addon-calendar-eventtype-site[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{background-color:var(--addon-calendar-event-site-color)}", "[_nghost-%COMP%]   .addon-calendar-period[_ngcontent-%COMP%]{flex-grow:3}[_nghost-%COMP%]   .addon-calendar-period[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:10px;font-size:1.2rem}"] });
    return AddonCalendarDayPage;
})();

// CONCATENATED MODULE: ./src/addons/calendar/pages/day/day.module.ts
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
        component: day_page_AddonCalendarDayPage,
    },
];
let day_module_AddonCalendarDayPageModule = /*@__PURE__*/ (() => {
    class AddonCalendarDayPageModule {
    }
    AddonCalendarDayPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonCalendarDayPageModule });
    AddonCalendarDayPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonCalendarDayPageModule_Factory(t) { return new (t || AddonCalendarDayPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonCalendarComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonCalendarDayPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](day_module_AddonCalendarDayPageModule, { declarations: [day_page_AddonCalendarDayPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonCalendarComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);