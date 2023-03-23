(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-app-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/complete-profile/complete-profile.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/complete-profile/complete-profile.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>\n            <h1 *ngIf=\"!editingProfile\">{{ 'core.user.completeyourprofile' | translate }}</h1>\n            <h1 *ngIf=\"editingProfile\">{{ 'core.login.reconnecttosite' | translate }}</h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"showHelp()\" [attr.aria-label]=\"'core.help' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"far-question-circle\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list class=\"list-item-limited-width\">\n        <ng-container *ngIf=\"!editingProfile\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p>{{ 'core.user.completeprofilenotice' | translate }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"openCompleteProfilePage()\">\n                {{ 'core.user.completeprofile' | translate }}\n            </ion-button>\n        </ng-container>\n        <ng-container *ngIf=\"editingProfile\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p>{{ 'core.user.completeprofilereconnectinstructions' | translate }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"login()\">\n                {{ 'core.login.reconnect' | translate }}\n            </ion-button>\n        </ng-container>\n        <ion-item class=\"ion-text-wrap\">\n            <ion-label>\n                <p>{{ 'core.wanttochangesite' | translate }}</p>\n            </ion-label>\n        </ion-item>\n        <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" fill=\"outline\" (click)=\"logout()\">\n            {{ logoutLabel | translate }}\n        </ion-button>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/user/pages/complete-profile/complete-profile.ts":
/*!***************************************************************************!*\
  !*** ./src/core/features/user/pages/complete-profile/complete-profile.ts ***!
  \***************************************************************************/
/*! exports provided: CoreUserCompleteProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserCompleteProfilePage", function() { return CoreUserCompleteProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_user_services_support__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/support */ "./src/core/features/user/services/support.ts");
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
 * Page that shows instructions to complete the profile.
 */
let CoreUserCompleteProfilePage = class CoreUserCompleteProfilePage {
    constructor() {
        this.editingProfile = false;
        this.logoutLabel = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].getLogoutLabel();
    }
    /**
     * Show help modal.
     */
    showHelp() {
        _features_user_services_support__WEBPACK_IMPORTED_MODULE_8__["CoreUserSupport"].showHelp(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.user.completeprofilehelp'), _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.user.completeprofilesupportsubject'));
    }
    /**
     * Open the edit profile page in a browser.
     */
    openCompleteProfilePage() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].openInAppForEdit(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId(), '/user/edit.php', undefined, true);
        this.editingProfile = true;
        this.detectProileEdited();
    }
    /**
     * Login the user.
     */
    login() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome();
        this.editingProfile = false;
    }
    /**
     * Logout the user.
     */
    logout() {
        _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout();
        this.editingProfile = false;
    }
    /**
     * Try to detect if the user edited the profile in browser.
     */
    detectProileEdited() {
        if (this.urlLoadedObserver) {
            // Already listening (shouldn't happen).
            return;
        }
        this.urlLoadedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_LOAD_START, (event) => {
            if (event.url.match(/\/user\/preferences.php/)) {
                // Profile should be complete now.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].closeInAppBrowser();
                this.login();
            }
        });
        this.browserClosedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_EXIT, () => {
            var _a, _b;
            (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.browserClosedObserver) === null || _b === void 0 ? void 0 : _b.off();
            delete this.urlLoadedObserver;
            delete this.browserClosedObserver;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b;
        (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.browserClosedObserver) === null || _b === void 0 ? void 0 : _b.off();
    }
};
CoreUserCompleteProfilePage.ctorParameters = () => [];
CoreUserCompleteProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-complete-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./complete-profile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/complete-profile/complete-profile.html")).default,
    })
], CoreUserCompleteProfilePage);



/***/ }),

/***/ "./src/core/features/user/user-app-lazy.module.ts":
/*!********************************************************!*\
  !*** ./src/core/features/user/user-app-lazy.module.ts ***!
  \********************************************************/
/*! exports provided: CoreUserAppLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAppLazyModule", function() { return CoreUserAppLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_complete_profile_complete_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/complete-profile/complete-profile */ "./src/core/features/user/pages/complete-profile/complete-profile.ts");
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
        path: 'completeprofile',
        component: _pages_complete_profile_complete_profile__WEBPACK_IMPORTED_MODULE_4__["CoreUserCompleteProfilePage"],
    },
];
let CoreUserAppLazyModule = class CoreUserAppLazyModule {
};
CoreUserAppLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_1__["CoreSharedModule"],
        ],
        declarations: [
            _pages_complete_profile_complete_profile__WEBPACK_IMPORTED_MODULE_4__["CoreUserCompleteProfilePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], CoreUserAppLazyModule);



/***/ })

}]);
//# sourceMappingURL=features-user-user-app-lazy-module.js.map