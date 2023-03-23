(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>\n            <h1 *ngIf=\"!changingPassword\">{{ 'core.login.changepassword' | translate }}</h1>\n            <h1 *ngIf=\"changingPassword\">{{ 'core.login.reconnecttosite' | translate }}</h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"showHelp()\" [attr.aria-label]=\"'core.help' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"far-question-circle\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list class=\"list-item-limited-width\">\n        <ng-container *ngIf=\"!changingPassword\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <h2>{{ 'core.login.forcepasswordchangenotice' | translate }}</h2>\n                </ion-label>\n            </ion-item>\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"openChangePasswordPage()\">\n                {{ 'core.login.changepasswordbutton' | translate }}\n            </ion-button>\n        </ng-container>\n        <ng-container *ngIf=\"changingPassword\">\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p>{{ 'core.login.changepasswordreconnectinstructions' | translate }}</p>\n                </ion-label>\n            </ion-item>\n            <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" (click)=\"login()\">\n                {{ 'core.login.reconnect' | translate }}\n            </ion-button>\n        </ng-container>\n        <ion-item class=\"ion-text-wrap\">\n            <ion-label>\n                <p>{{ 'core.wanttochangesite' | translate }}</p>\n            </ion-label>\n        </ion-item>\n        <ion-button class=\"ion-text-wrap ion-margin\" expand=\"block\" fill=\"outline\" (click)=\"logout()\">\n            {{ logoutLabel | translate }}\n        </ion-button>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/change-password/change-password.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/core/features/login/pages/change-password/change-password.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CoreLoginChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPageModule", function() { return CoreLoginChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _change_password__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password */ "./src/core/features/login/pages/change-password/change-password.ts");
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
        component: _change_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginChangePasswordPage"],
    },
];
let CoreLoginChangePasswordPageModule = class CoreLoginChangePasswordPageModule {
};
CoreLoginChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _change_password__WEBPACK_IMPORTED_MODULE_4__["CoreLoginChangePasswordPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginChangePasswordPageModule);



/***/ }),

/***/ "./src/core/features/login/pages/change-password/change-password.ts":
/*!**************************************************************************!*\
  !*** ./src/core/features/login/pages/change-password/change-password.ts ***!
  \**************************************************************************/
/*! exports provided: CoreLoginChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginChangePasswordPage", function() { return CoreLoginChangePasswordPage; });
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
 * Page that shows instructions to change the password.
 */
let CoreLoginChangePasswordPage = class CoreLoginChangePasswordPage {
    constructor() {
        this.changingPassword = false;
        this.logoutLabel = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].getLogoutLabel();
    }
    /**
     * Show help modal.
     */
    showHelp() {
        _features_user_services_support__WEBPACK_IMPORTED_MODULE_8__["CoreUserSupport"].showHelp(_singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.login.changepasswordhelp'), _singletons__WEBPACK_IMPORTED_MODULE_4__["Translate"].instant('core.login.changepasswordsupportsubject'));
    }
    /**
     * Open the change password page in a browser.
     */
    openChangePasswordPage() {
        _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_3__["CoreLoginHelper"].openInAppForEdit(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId(), '/login/change_password.php', undefined, true);
        this.changingPassword = true;
        this.detectPasswordChanged();
    }
    /**
     * Login the user.
     */
    login() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].navigateToSiteHome();
        this.changingPassword = false;
    }
    /**
     * Logout the user.
     */
    logout() {
        _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].logout();
        this.changingPassword = false;
    }
    /**
     * Try to detect if the user changed password in browser.
     */
    detectPasswordChanged() {
        if (this.urlLoadedObserver) {
            // Already listening (shouldn't happen).
            return;
        }
        this.urlLoadedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_LOAD_STOP, (event) => {
            var _a;
            if (event.url.match(/\/login\/change_password\.php.*return=1/)) {
                // Password has changed, close the IAB now.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].closeInAppBrowser();
                this.login();
                return;
            }
            if (!event.url.match(/\/login\/change_password\.php/)) {
                return;
            }
            // Use a script to check if the user changed the password, in some platforms we cannot tell using the URL.
            (_a = _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].getInAppBrowserInstance()) === null || _a === void 0 ? void 0 : _a.executeScript({
                code: `
                    if (
                        document.querySelector('input[type="password"]') === null &&
                        document.querySelector('button[type="submit"]') !== null
                    ) {
                        webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({ passwordChanged: true }));
                    }
                `,
            });
        });
        this.messageObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_MESSAGE, (data) => {
            if (data.passwordChanged) {
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].closeInAppBrowser();
                this.login();
            }
        });
        this.browserClosedObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].IAB_EXIT, () => {
            var _a, _b, _c;
            (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.messageObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.browserClosedObserver) === null || _c === void 0 ? void 0 : _c.off();
            delete this.urlLoadedObserver;
            delete this.messageObserver;
            delete this.browserClosedObserver;
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a, _b, _c;
        (_a = this.urlLoadedObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.messageObserver) === null || _b === void 0 ? void 0 : _b.off();
        (_c = this.browserClosedObserver) === null || _c === void 0 ? void 0 : _c.off();
    }
};
CoreLoginChangePasswordPage.ctorParameters = () => [];
CoreLoginChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/change-password/change-password.html")).default,
    })
], CoreLoginChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-change-password-change-password-module.js.map