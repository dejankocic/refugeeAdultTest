(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addons-calendar-pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'core.settings.settings' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item *ngIf=\"defaultTimeLabel\">\n            <ion-label>{{ 'addon.calendar.defaultnotificationtime' | translate }}</ion-label>\n            <ion-select [(ngModel)]=\"defaultTimeLabel\" (click)=\"changeDefaultTime($event)\">\n                <ion-select-option [value]=\"defaultTimeLabel\">{{ defaultTimeLabel }}</ion-select-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/calendar/pages/settings/settings.module.ts":
/*!***************************************************************!*\
  !*** ./src/addons/calendar/pages/settings/settings.module.ts ***!
  \***************************************************************/
/*! exports provided: AddonCalendarSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPageModule", function() { return AddonCalendarSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./src/addons/calendar/pages/settings/settings.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
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
        component: _settings__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarSettingsPage"],
    },
];
let AddonCalendarSettingsPageModule = class AddonCalendarSettingsPageModule {
};
AddonCalendarSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
        ],
        declarations: [
            _settings__WEBPACK_IMPORTED_MODULE_3__["AddonCalendarSettingsPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonCalendarSettingsPageModule);



/***/ }),

/***/ "./src/addons/calendar/pages/settings/settings.ts":
/*!********************************************************!*\
  !*** ./src/addons/calendar/pages/settings/settings.ts ***!
  \********************************************************/
/*! exports provided: AddonCalendarSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPage", function() { return AddonCalendarSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/reminders/services/reminders */ "./src/core/features/reminders/services/reminders.ts");
/* harmony import */ var _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/reminders/components/set-reminder-menu/set-reminder-menu */ "./src/core/features/reminders/components/set-reminder-menu/set-reminder-menu.ts");
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





/**
 * Page that displays the calendar settings.
 */
let AddonCalendarSettingsPage = class AddonCalendarSettingsPage {
    constructor() {
        this.defaultTimeLabel = '';
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateDefaultTimeLabel();
        });
    }
    /**
     * Change default time.
     *
     * @param e Event.
     * @returns Promise resolved when done.
     */
    changeDefaultTime(e) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            const reminderTime = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].openPopover({
                component: _features_reminders_components_set_reminder_menu_set_reminder_menu__WEBPACK_IMPORTED_MODULE_4__["CoreRemindersSetReminderMenuComponent"],
                componentProps: {
                    initialValue: this.defaultTime,
                    noReminderLabel: 'core.settings.disabled',
                },
                event: e,
            });
            if (reminderTime === undefined) {
                // User canceled.
                return;
            }
            yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].setDefaultNotificationTime((_a = reminderTime.timeBefore) !== null && _a !== void 0 ? _a : _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreRemindersService"].DISABLED);
            this.updateDefaultTimeLabel();
        });
    }
    /**
     * Update default time label.
     */
    updateDefaultTimeLabel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.defaultTime = yield _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].getDefaultNotificationTime();
            const defaultTime = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreRemindersService"].convertSecondsToValueAndUnit(this.defaultTime);
            this.defaultTimeLabel = _features_reminders_services_reminders__WEBPACK_IMPORTED_MODULE_3__["CoreReminders"].getUnitValueLabel(defaultTime.value, defaultTime.unit);
        });
    }
};
AddonCalendarSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-calendar-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/calendar/pages/settings/settings.html")).default,
    })
], AddonCalendarSettingsPage);



/***/ })

}]);
//# sourceMappingURL=addons-calendar-pages-settings-settings-module.js.map