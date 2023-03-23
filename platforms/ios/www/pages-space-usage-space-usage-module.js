(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-space-usage-space-usage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'core.settings.spaceusage' | translate }}</h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <core-navbar-buttons>\n            </core-navbar-buttons>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\" slot=\"fixed\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"loaded\">\n        <ion-list class=\"core-sitelist limited-width\">\n            <ion-card *ngIf=\"accountsList.currentSite\">\n                <ion-item-divider sticky=\"true\" class=\"core-sitelist-sitename\">\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            <core-format-text [text]=\"accountsList.currentSite.siteName\" clean=\"true\"\n                                [siteId]=\"accountsList.currentSite.id\"></core-format-text>\n                        </p>\n                        <p><a [href]=\"accountsList.currentSite.siteUrl\" core-link autoLogin=\"yes\">{{\n                                accountsList.currentSite.siteUrlWithoutProtocol }}</a>\n                        </p>\n                    </ion-label>\n                </ion-item-divider>\n\n                <ion-item class=\"item-current\">\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: accountsList.currentSite}\"></ng-container>\n                </ion-item>\n\n                <ion-item *ngFor=\"let site of accountsList.sameSite\">\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: site}\"></ng-container>\n                </ion-item>\n            </ion-card>\n\n            <ion-card *ngFor=\"let sites of accountsList.otherSites\">\n                <ion-item-divider sticky=\"true\" *ngIf=\"sites[0]\" class=\"core-sitelist-sitename\">\n                    <ion-label>\n                        <p class=\"item-heading\">\n                            <core-format-text [text]=\"sites[0].siteName\" clean=\"true\" [siteId]=\"sites[0].id\"></core-format-text>\n                        </p>\n                        <p><a [href]=\"sites[0].siteUrl\" core-link autoLogin=\"no\">{{ sites[0].siteUrlWithoutProtocol }}</a></p>\n                    </ion-label>\n                </ion-item-divider>\n\n                <ion-item *ngFor=\"let site of sites\">\n                    <ng-container *ngTemplateOutlet=\"siteUsage; context: {site: site}\"></ng-container>\n                </ion-item>\n            </ion-card>\n\n            <ion-item-divider>\n                <ion-label>\n                    <h2>{{ 'core.settings.total' | translate }}</h2>\n                </ion-label>\n                <p slot=\"end\" class=\"ion-margin-end\">\n                    {{ totalSpaceUsage | coreBytesToSize }}\n                </p>\n            </ion-item-divider>\n        </ion-list>\n    </core-loading>\n</ion-content>\n\n<!-- Template to render a site space usage. -->\n<ng-template #siteUsage let-site=\"site\">\n    <ion-avatar slot=\"start\">\n        <img [src]=\"site.avatar\" core-external-content [siteId]=\"site.id\" alt=\"{{ 'core.pictureof' | translate:{$a: site.fullName} }}\"\n            onError=\"this.src='assets/img/user-avatar.png'\">\n    </ion-avatar>\n    <ion-label class=\"ion-text-wrap\">\n        <p class=\"item-heading\">{{site.fullName}}</p>\n        <ion-badge color=\"light\" *ngIf=\"site.spaceUsage !== undefined\">{{ site.spaceUsage | coreBytesToSize }}</ion-badge>\n    </ion-label>\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage(site)\"\n        [hidden]=\"site.spaceUsage <= 0 && !site.hasCacheEntries\">\n        <ion-icon name=\"fas-trash\" slot=\"icon-only\"\n            [attr.aria-label]=\"'addon.storagemanager.deletedatafrom' | translate: { name: site.siteName }\">\n        </ion-icon>\n    </ion-button>\n</ng-template>\n");

/***/ }),

/***/ "./src/core/features/settings/pages/space-usage/space-usage.module.ts":
/*!****************************************************************************!*\
  !*** ./src/core/features/settings/pages/space-usage/space-usage.module.ts ***!
  \****************************************************************************/
/*! exports provided: CoreSettingsSpaceUsagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePageModule", function() { return CoreSettingsSpaceUsagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _space_usage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-usage */ "./src/core/features/settings/pages/space-usage/space-usage.ts");
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
        component: _space_usage__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSpaceUsagePage"],
    },
];
let CoreSettingsSpaceUsagePageModule = class CoreSettingsSpaceUsagePageModule {
};
CoreSettingsSpaceUsagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _space_usage__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSpaceUsagePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsSpaceUsagePageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/space-usage/space-usage.ts":
/*!*********************************************************************!*\
  !*** ./src/core/features/settings/pages/space-usage/space-usage.ts ***!
  \*********************************************************************/
/*! exports provided: CoreSettingsSpaceUsagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSpaceUsagePage", function() { return CoreSettingsSpaceUsagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
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
 * Page that displays the space usage settings.
 */
let CoreSettingsSpaceUsagePage = class CoreSettingsSpaceUsagePage {
    constructor() {
        this.loaded = false;
        this.totalSpaceUsage = 0;
        this.accountsList = {
            sameSite: [],
            otherSites: [],
        };
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_4__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSite(siteId);
            const siteInfo = site.getInfo();
            siteEntry.siteName = site.getSiteName();
            if (siteInfo) {
                siteEntry.siteUrl = siteInfo.siteurl;
                siteEntry.fullName = siteInfo.fullname;
            }
        }));
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.loadSiteData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Convenience function to load site data/usage and calculate the totals.
     *
     * @returns Resolved when done.
     */
    loadSiteData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Calculate total usage.
            let totalSize = 0;
            const sites = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].ignoreErrors(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getSortedSites(), []);
            const sitesWithUsage = yield Promise.all(sites.map((site) => this.getSiteWithUsage(site)));
            let siteUrl = '';
            const currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
            if (currentSiteId) {
                const index = sitesWithUsage.findIndex((site) => site.id === currentSiteId);
                const siteWithUsage = sitesWithUsage.splice(index, 1)[0];
                this.accountsList.currentSite = siteWithUsage;
                totalSize += siteWithUsage.spaceUsage || 0;
                siteUrl = this.accountsList.currentSite.siteUrlWithoutProtocol;
            }
            const otherSites = {};
            // Get space usage.
            sitesWithUsage.forEach((siteWithUsage) => {
                totalSize += siteWithUsage.spaceUsage || 0;
                if (siteWithUsage.siteUrlWithoutProtocol === siteUrl) {
                    this.accountsList.sameSite.push(siteWithUsage);
                }
                else {
                    if (otherSites[siteWithUsage.siteUrlWithoutProtocol] === undefined) {
                        otherSites[siteWithUsage.siteUrlWithoutProtocol] = [];
                    }
                    otherSites[siteWithUsage.siteUrlWithoutProtocol].push(siteWithUsage);
                }
            });
            this.accountsList.otherSites = _services_utils_utils__WEBPACK_IMPORTED_MODULE_3__["CoreUtils"].objectToArray(otherSites);
            this.totalSpaceUsage = totalSize;
        });
    }
    /**
     * Get site with space usage.
     *
     * @param site Site to check.
     * @returns Site with usage.
     */
    getSiteWithUsage(site) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteInfo = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsHelper"].getSiteSpaceUsage(site.id);
            return Object.assign(site, {
                hasCacheEntries: siteInfo.cacheEntries > 0,
                spaceUsage: siteInfo.spaceUsage,
            });
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher event.
     */
    refreshData(refresher) {
        this.loadSiteData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    deleteSiteStorage(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newInfo = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_5__["CoreSettingsHelper"].deleteSiteStorage(siteData.siteName || '', siteData.id);
                this.totalSpaceUsage -= siteData.spaceUsage - newInfo.spaceUsage;
                siteData.spaceUsage = newInfo.spaceUsage;
                siteData.hasCacheEntries = newInfo.cacheEntries > 0;
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.sitesObserver.off();
    }
};
CoreSettingsSpaceUsagePage.ctorParameters = () => [];
CoreSettingsSpaceUsagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-space-usage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./space-usage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/space-usage/space-usage.html")).default,
    })
], CoreSettingsSpaceUsagePage);



/***/ })

}]);
//# sourceMappingURL=pages-space-usage-space-usage-module.js.map