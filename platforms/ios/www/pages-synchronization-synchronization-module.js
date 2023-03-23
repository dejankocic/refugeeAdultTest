(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-synchronization-synchronization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'core.settings.synchronization' | translate }}</h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <core-navbar-buttons>\n                <ion-button (click)=\"showInfo()\" [attr.aria-label]=\"'core.info' | translate\">\n                    <ion-icon name=\"fas-info-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                </ion-button>\n            </core-navbar-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <core-loading [hideUntil]=\"sitesLoaded\">\n        <ion-list class=\"core-sitelist limited-width\">\n            <ion-item-divider>\n                <ion-label>\n                    <h2>{{ 'core.settings.syncsettings' | translate }}</h2>\n                </ion-label>\n            </ion-item-divider>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <p class=\"item-heading\">\n                        {{ 'core.settings.syncdatasaver' | translate }}\n                    </p>\n                </ion-label>\n                <ion-toggle slot=\"end\" [(ngModel)]=\"dataSaver\" (ngModelChange)=\"syncOnlyOnWifiChanged()\">\n                </ion-toggle>\n            </ion-item>\n\n            <ion-card class=\"core-warning-card\" *ngIf=\"!isOnline || (dataSaver && limitedConnection)\">\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>\n                        <ng-container *ngIf=\"isOnline && dataSaver && limitedConnection\">\n                            {{ 'core.settings.connectwifitosync' | translate }}</ng-container>\n                        <ng-container *ngIf=\"!isOnline\">{{ 'core.settings.connecttosync' | translate }}</ng-container>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n\n            <ng-container *ngIf=\"isOnline && (!dataSaver || !limitedConnection)\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'core.accounts' | translate }}</h2>\n                    </ion-label>\n                </ion-item-divider>\n\n                <ion-card *ngIf=\"accountsList.currentSite\">\n                    <ion-item-divider sticky=\"true\" class=\"core-sitelist-sitename\">\n                        <ion-label>\n                            <p class=\"item-heading\">\n                                <core-format-text [text]=\"accountsList.currentSite.siteName\" clean=\"true\"\n                                    [siteId]=\"accountsList.currentSite.id\"></core-format-text>\n                            </p>\n                            <p><a [href]=\"accountsList.currentSite.siteUrl\" core-link autoLogin=\"yes\">{{\n                                    accountsList.currentSite.siteUrlWithoutProtocol }}</a>\n                            </p>\n                        </ion-label>\n                    </ion-item-divider>\n\n                    <ion-item class=\"item-current\">\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: accountsList.currentSite}\"></ng-container>\n                    </ion-item>\n\n                    <ion-item *ngFor=\"let site of accountsList.sameSite\">\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: site}\"></ng-container>\n                    </ion-item>\n                </ion-card>\n\n                <ion-card *ngFor=\"let sites of accountsList.otherSites\">\n                    <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\n                        <ion-label>\n                            <p class=\"item-heading\">\n                                <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\n                            </p>\n                            <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\n                        </ion-label>\n                    </ion-item-divider>\n\n                    <ion-item *ngFor=\"let site of sites\">\n                        <ng-container *ngTemplateOutlet=\"siteSync; context: {site: site}\"></ng-container>\n                    </ion-item>\n                </ion-card>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n\n<!-- Template to render a site to sync. -->\n<ng-template #siteSync let-site=\"site\">\n    <ion-avatar slot=\"start\">\n        <img [src]=\"site.avatar\" core-external-content [siteId]=\"site.id\" alt=\"{{ 'core.pictureof' | translate:{$a: site.fullName} }}\"\n            onError=\"this.src='assets/img/user-avatar.png'\">\n    </ion-avatar>\n    <ion-label>\n        <p class=\"item-heading\">{{site.fullName}}</p>\n        <p class=\"text-danger\" *ngIf=\"site.loggedOut\">{{ 'core.settings.logintosync' | translate }}</p>\n    </ion-label>\n    <core-button-with-spinner [loading]=\"isSynchronizing(site.id)\" slot=\"end\" *ngIf=\"!site.loggedOut\">\n        <ion-button fill=\"clear\" (click)=\"synchronize(site.id)\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\">\n            <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n        </ion-button>\n    </core-button-with-spinner>\n    <ion-button fill=\"clear\" (click)=\"login(site.id)\" [attr.aria-label]=\"'core.login.login' | translate\" *ngIf=\"site.loggedOut\" slot=\"end\">\n        <ion-icon name=\"fas-sign-in-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n    </ion-button>\n</ng-template>\n");

/***/ }),

/***/ "./src/core/features/login/sitelist.scss":
/*!***********************************************!*\
  !*** ./src/core/features/login/sitelist.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list.core-sitelist .core-sitelist-sitename {\n  border-bottom: 1px solid var(--stroke);\n}\nion-list.core-sitelist .core-sitelist-sitename ion-label {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3NpdGVsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFNSSxzQ0FBQTtBQUxSO0FBQVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFFWiIsImZpbGUiOiJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9zaXRlbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxpc3QuY29yZS1zaXRlbGlzdCB7XG4gICAgLmNvcmUtc2l0ZWxpc3Qtc2l0ZW5hbWUge1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0cm9rZSk7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/core/features/settings/pages/synchronization/synchronization.module.ts":
/*!************************************************************************************!*\
  !*** ./src/core/features/settings/pages/synchronization/synchronization.module.ts ***!
  \************************************************************************************/
/*! exports provided: CoreSettingsSynchronizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModule", function() { return CoreSettingsSynchronizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _synchronization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./synchronization */ "./src/core/features/settings/pages/synchronization/synchronization.ts");
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
        component: _synchronization__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSynchronizationPage"],
    },
];
let CoreSettingsSynchronizationPageModule = class CoreSettingsSynchronizationPageModule {
};
CoreSettingsSynchronizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _synchronization__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSynchronizationPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsSynchronizationPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/synchronization/synchronization.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/features/settings/pages/synchronization/synchronization.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSettingsSynchronizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPage", function() { return CoreSettingsSynchronizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the synchronization settings.
 */
let CoreSettingsSynchronizationPage = class CoreSettingsSynchronizationPage {
    constructor() {
        this.accountsList = {
            sameSite: [],
            otherSites: [],
            count: 0,
        };
        this.sitesLoaded = false;
        this.dataSaver = false;
        this.limitedConnection = false;
        this.isOnline = true;
        this.isDestroyed = false;
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a;
            const siteId = data.siteId;
            let siteEntry = siteId === ((_a = this.accountsList.currentSite) === null || _a === void 0 ? void 0 : _a.id)
                ? this.accountsList.currentSite
                : undefined;
            if (!siteEntry) {
                siteEntry = this.accountsList.sameSite.find((siteEntry) => siteEntry.id === siteId);
            }
            if (!siteEntry) {
                this.accountsList.otherSites.some((sites) => {
                    siteEntry = sites.find((siteEntry) => siteEntry.id === siteId);
                    return siteEntry;
                });
            }
            if (!siteEntry) {
                return;
            }
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSite(siteId);
            const siteInfo = site.getInfo();
            siteEntry.siteName = site.getSiteName();
            if (siteInfo) {
                siteEntry.siteUrl = siteInfo.siteurl;
                siteEntry.fullName = siteInfo.fullname;
            }
        }));
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
        this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
        this.networkObserver = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_8__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
            });
        });
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
            try {
                this.accountsList = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getAccountsList(currentSiteId);
            }
            catch (_a) {
                // Ignore errors.
            }
            this.sitesLoaded = true;
            this.dataSaver = yield _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
        });
    }
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    syncOnlyOnWifiChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, this.dataSaver ? 1 : 0);
    }
    /**
     * Synchronizes a site.
     *
     * @param siteId Site ID.
     */
    synchronize(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Using syncOnlyOnWifi false to force manual sync.
            try {
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].synchronizeSite(false, siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.sitesyncfailed', true);
            }
        });
    }
    /**
     * Changes site.
     *
     * @param siteId Site ID.
     */
    login(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // This navigation will logout and navigate to the site home.
            yield _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigateToSiteHome({ preferCurrentTab: false, siteId });
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @returns True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing(siteId) {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].getSiteSyncPromise(siteId);
    }
    /**
     * Show information about sync actions.
     */
    showInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.synchronizenowhelp'));
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        this.sitesObserver.off();
        this.networkObserver.unsubscribe();
    }
};
CoreSettingsSynchronizationPage.ctorParameters = () => [];
CoreSettingsSynchronizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-synchronization',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./synchronization.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../login/sitelist.scss */ "./src/core/features/login/sitelist.scss")).default]
    })
], CoreSettingsSynchronizationPage);



/***/ })

}]);
//# sourceMappingURL=pages-synchronization-synchronization-module.js.map