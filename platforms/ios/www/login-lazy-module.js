(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>\n            <h1>{{ 'core.login.passwordforgotten' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"list-item-limited-width\">\n        <core-login-exceeded-attempts *ngIf=\"canContactSupport && wasPasswordResetRequestedRecently\" [supportConfig]=\"supportConfig\"\n            [supportSubject]=\"'core.login.exceededpasswordresetattemptssupportsubject' | translate\">\n            {{ 'core.login.exceededpasswordresetattempts' | translate }}\n        </core-login-exceeded-attempts>\n\n        <ion-list>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>{{ 'core.login.passwordforgotteninstructions2' | translate }}</ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-card>\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"resetPassword($event)\" #resetPasswordForm>\n                <ion-item-divider class=\"ion-text-wrap\">\n                    <ion-label>\n                        <h2>{{ 'core.login.searchby' | translate }}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-radio-group formControlName=\"field\">\n                    <ion-item>\n                        <ion-label>{{ 'core.login.username' | translate }}</ion-label>\n                        <ion-radio slot=\"end\" value=\"username\"></ion-radio>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>{{ 'core.user.email' | translate }}</ion-label>\n                        <ion-radio slot=\"end\" value=\"email\"></ion-radio>\n                    </ion-item>\n                </ion-radio-group>\n                <ion-item>\n                    <ion-label class=\"sr-only\">{{ 'core.login.usernameoremail' | translate }}</ion-label>\n                    <ion-input type=\"text\" name=\"value\" placeholder=\"{{ 'core.login.usernameoremail' | translate }}\" formControlName=\"value\"\n                        autocapitalize=\"none\" autocorrect=\"off\" [core-auto-focus]=\"autoFocus\">\n                    </ion-input>\n                </ion-item>\n                <ion-button type=\"submit\" class=\"ion-margin\" expand=\"block\" [disabled]=\"!myForm.valid\">\n                    {{ 'core.courses.search' | translate }}\n                </ion-button>\n            </form>\n        </ion-card>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/guards/has-sites.ts":
/*!*****************************************************!*\
  !*** ./src/core/features/login/guards/has-sites.ts ***!
  \*****************************************************/
/*! exports provided: CoreLoginHasSitesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginHasSitesGuard", function() { return CoreLoginHasSitesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_login_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login-helper */ "./src/core/features/login/services/login-helper.ts");
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






let CoreLoginHasSitesGuard = class CoreLoginHasSitesGuard {
    /**
     * @inheritdoc
     */
    canActivate() {
        return this.guard();
    }
    /**
     * @inheritdoc
     */
    canLoad() {
        return this.guard();
    }
    /**
     * Check if the user has any sites stored.
     *
     * @returns Promise resolved with true if it's not redirected or the redirection route.
     */
    guard() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSites(), []);
            if (sites.length > 0) {
                return true;
            }
            const [path, params] = _services_login_helper__WEBPACK_IMPORTED_MODULE_5__["CoreLoginHelper"].getAddSiteRouteInfo();
            const route = _singletons__WEBPACK_IMPORTED_MODULE_4__["Router"].parseUrl(path);
            route.queryParams = params;
            return route;
        });
    }
};
CoreLoginHasSitesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CoreLoginHasSitesGuard);



/***/ }),

/***/ "./src/core/features/login/login-lazy.module.ts":
/*!******************************************************!*\
  !*** ./src/core/features/login/login-lazy.module.ts ***!
  \******************************************************/
/*! exports provided: CoreLoginLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginLazyModule", function() { return CoreLoginLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _guards_has_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/has-sites */ "./src/core/features/login/guards/has-sites.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/core/features/login/components/components.module.ts");
/* harmony import */ var _services_login_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/login/pages/forgotten-password/forgotten-password */ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts");
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
        pathMatch: 'full',
        redirectTo: 'sites',
    },
    {
        path: 'site',
        loadChildren: () => Promise.all(/*! import() | pages-site-site-module */[__webpack_require__.e("default~addons-blog-blog-lazy-module~addons-calendar-pages-index-index-module~features-login-pages-c~d66fb4f8"), __webpack_require__.e("pages-site-site-module")]).then(__webpack_require__.bind(null, /*! ./pages/site/site.module */ "./src/core/features/login/pages/site/site.module.ts")).then(m => m.CoreLoginSitePageModule),
    },
    {
        path: 'credentials',
        loadChildren: () => _services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getCredentialsRouteModule(),
    },
    {
        path: 'sites',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-sites-sites-module */ "pages-sites-sites-module").then(__webpack_require__.bind(null, /*! ./pages/sites/sites.module */ "./src/core/features/login/pages/sites/sites.module.ts")).then(m => m.CoreLoginSitesPageModule),
        canLoad: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHasSitesGuard"]],
        canActivate: [_guards_has_sites__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHasSitesGuard"]],
    },
    {
        path: 'forgottenpassword',
        component: _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__["CoreLoginForgottenPasswordPage"],
    },
    {
        path: 'changepassword',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-change-password-change-password-module */ "pages-change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./pages/change-password/change-password.module */ "./src/core/features/login/pages/change-password/change-password.module.ts"))
            .then(m => m.CoreLoginChangePasswordPageModule),
    },
    {
        path: 'sitepolicy',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-site-policy-site-policy-module */ "pages-site-policy-site-policy-module").then(__webpack_require__.bind(null, /*! ./pages/site-policy/site-policy.module */ "./src/core/features/login/pages/site-policy/site-policy.module.ts")).then(m => m.CoreLoginSitePolicyPageModule),
    },
    {
        path: 'emailsignup',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-email-signup-email-signup-module */ "pages-email-signup-email-signup-module").then(__webpack_require__.bind(null, /*! ./pages/email-signup/email-signup.module */ "./src/core/features/login/pages/email-signup/email-signup.module.ts")).then(m => m.CoreLoginEmailSignupPageModule),
    },
    {
        path: 'reconnect',
        loadChildren: () => _services_login_helper__WEBPACK_IMPORTED_MODULE_6__["CoreLoginHelper"].getReconnectRouteModule(),
    },
];
let CoreLoginLazyModule = class CoreLoginLazyModule {
};
CoreLoginLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreLoginComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        declarations: [
            _features_login_pages_forgotten_password_forgotten_password__WEBPACK_IMPORTED_MODULE_7__["CoreLoginForgottenPasswordPage"],
        ],
    })
], CoreLoginLazyModule);



/***/ }),

/***/ "./src/core/features/login/pages/forgotten-password/forgotten-password.ts":
/*!********************************************************************************!*\
  !*** ./src/core/features/login/pages/forgotten-password/forgotten-password.ts ***!
  \********************************************************************************/
/*! exports provided: CoreLoginForgottenPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginForgottenPasswordPage", function() { return CoreLoginForgottenPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _services_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/platform */ "./src/core/services/platform.ts");
/* harmony import */ var _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/user/classes/support/guest-support-config */ "./src/core/features/user/classes/support/guest-support-config.ts");
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
 * Page to recover a forgotten password.
 */
let CoreLoginForgottenPasswordPage = class CoreLoginForgottenPasswordPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.wasPasswordResetRequestedRecently = false;
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('siteUrl');
            if (!siteUrl) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('Site URL not supplied.');
                _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                return;
            }
            const siteConfig = _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('siteConfig');
            this.siteUrl = siteUrl;
            this.autoFocus = _services_platform__WEBPACK_IMPORTED_MODULE_8__["CorePlatform"].is('tablet');
            this.myForm = this.formBuilder.group({
                field: ['username', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                value: [_services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].getRouteParam('username') || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.supportConfig = siteConfig && new _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_9__["CoreUserGuestSupportConfig"](siteConfig);
            this.canContactSupport = (_a = this.supportConfig) === null || _a === void 0 ? void 0 : _a.canContactSupport();
            this.wasPasswordResetRequestedRecently = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].wasPasswordResetRequestedRecently(siteUrl);
        });
    }
    /**
     * Request to reset the password.
     *
     * @param e Event.
     */
    resetPassword(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            const field = this.myForm.value.field;
            const value = this.myForm.value.value;
            if (!value) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal('core.login.usernameoremail', true);
                return;
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showModalLoading('core.sending', true);
            const isMail = field == 'email';
            try {
                const response = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].requestPasswordReset(this.siteUrl, isMail ? '' : value, isMail ? value : '');
                if (response.status == 'dataerror') {
                    // Error in the data sent.
                    this.showError(isMail, response.warnings);
                }
                else if (response.status == 'emailpasswordconfirmnotsent' || response.status == 'emailpasswordconfirmnoemail') {
                    // Error, not found.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(response.notice);
                }
                else {
                    // Success.
                    _singletons_form__WEBPACK_IMPORTED_MODULE_7__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                    yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_5__["Translate"].instant('core.success'), response.notice);
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_6__["CoreNavigator"].back();
                    yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_4__["CoreLoginHelper"].passwordResetRequested(this.siteUrl);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    // Show an error from the warnings.
    showError(isMail, warnings) {
        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i];
            if ((warning.item == 'email' && isMail) || (warning.item == 'username' && !isMail)) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(warning.message);
                break;
            }
        }
    }
};
CoreLoginForgottenPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginForgottenPasswordPage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['resetPasswordForm',] }]
};
CoreLoginForgottenPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-forgotten-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotten-password.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/forgotten-password/forgotten-password.html")).default,
    })
], CoreLoginForgottenPasswordPage);



/***/ })

}]);
//# sourceMappingURL=login-lazy-module.js.map