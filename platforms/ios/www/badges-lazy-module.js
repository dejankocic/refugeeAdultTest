(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badges-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/issued-badge/issued-badge.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/issued-badge/issued-badge.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1 *ngIf=\"badge\">{{ badge.name }}</h1>\n            <h1 *ngIf=\"!badge\">{{ 'addon.badges.badges' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [core-swipe-navigation]=\"badges\" class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!badgeLoaded\" (ionRefresh)=\"refreshBadges($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"badgeLoaded\">\n        <ion-item-group *ngIf=\"badge\">\n            <ion-item class=\"ion-text-wrap ion-text-center\">\n                <ion-label>\n                    <img *ngIf=\"badge.badgeurl\" class=\"large-avatar\" [src]=\"badge.badgeurl\" core-external-content [alt]=\"badge.name\" />\n                    <ion-badge color=\"danger\" *ngIf=\"badge.dateexpire && currentTime >= badge.dateexpire\">\n                        {{ 'addon.badges.expired' | translate }}\n                    </ion-badge>\n                </ion-label>\n            </ion-item>\n        </ion-item-group>\n\n        <ion-item-group *ngIf=\"user\">\n            <ion-item-divider>\n                <ion-label>\n                    <h2>{{ 'addon.badges.recipientdetails' | translate}}</h2>\n                </ion-label>\n            </ion-item-divider>\n            <ion-item class=\"ion-text-wrap\">\n                <ion-label>\n                    <h2>{{ 'core.name' | translate}}</h2>\n                    <p>{{ user.fullname }}</p>\n                </ion-label>\n            </ion-item>\n        </ion-item-group>\n\n        <ng-container *ngIf=\"badge\">\n            <ion-item-group>\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issuerdetails' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.issuername\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issuername' | translate}}</h2>\n                        <p>{{ badge.issuername }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.issuercontact\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.contact' | translate}}</h2>\n                        <p><a href=\"mailto:{{badge.issuercontact}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ badge.issuercontact }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n\n            <ion-item-group>\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.badgedetails' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.name\">\n                    <ion-label>\n                        <h2>{{ 'core.name' | translate}}</h2>\n                        <p>{{ badge.name }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.version\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.version' | translate}}</h2>\n                        <p>{{ badge.version }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.language\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.language' | translate}}</h2>\n                        <p>{{ badge.language }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.description\">\n                    <ion-label>\n                        <h2>{{ 'core.description' | translate}}</h2>\n                        <p>{{ badge.description }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.imageauthorname\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.imageauthorname' | translate}}</h2>\n                        <p>{{ badge.imageauthorname }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.imageauthoremail\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.imageauthoremail' | translate}}</h2>\n                        <p><a href=\"mailto:{{badge.imageauthoremail}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ badge.imageauthoremail }}\n                            </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.imageauthorurl\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.imageauthorurl' | translate}}</h2>\n                        <p><a [href]=\"badge.imageauthorurl\" core-link auto-login=\"no\"> {{ badge.imageauthorurl }} </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.imagecaption\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.imagecaption' | translate}}</h2>\n                        <p>{{ badge.imagecaption }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"course\">\n                    <ion-label>\n                        <h2>{{ 'core.course' | translate}}</h2>\n                        <p>\n                            <core-format-text [text]=\"course.fullname\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\n                            </core-format-text>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <!-- Criteria (not yet available) -->\n            </ion-item-group>\n\n            <ion-item-group>\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issuancedetails' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.dateissued\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.dateawarded' | translate}}</h2>\n                        <p>{{badge.dateissued * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.dateexpire\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.expirydate' | translate}}</h2>\n                        <p>\n                            {{ badge.dateexpire * 1000 | coreFormatDate }}\n                            <span class=\"text-danger\" *ngIf=\"currentTime >= badge.dateexpire\">\n                                {{ 'addon.badges.warnexpired' | translate }}\n                            </span>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <!-- Evidence (not yet available) -->\n            </ion-item-group>\n\n            <!-- Endorsement -->\n            <ion-item-group *ngIf=\"badge.endorsement\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.bendorsement' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.issuername\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issuername' | translate}}</h2>\n                        <p>{{ badge.endorsement.issuername }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.issueremail\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issueremail' | translate}}</h2>\n                        <p>\n                            <a href=\"mailto:{{badge.endorsement.issueremail}}\" core-link auto-login=\"no\" [showBrowserWarning]=\"false\">\n                                {{ badge.endorsement.issueremail }}\n                            </a>\n                        </p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.issuerurl\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.issuerurl' | translate}}</h2>\n                        <p><a [href]=\"badge.endorsement.issuerurl\" core-link auto-login=\"no\"> {{ badge.endorsement.issuerurl }} </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.dateissued\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.dateawarded' | translate}}</h2>\n                        <p>{{ badge.endorsement.dateissued * 1000 | coreFormatDate }}</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.claimid\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.claimid' | translate}}</h2>\n                        <p><a [href]=\"badge.endorsement.claimid\" core-link auto-login=\"no\"> {{ badge.endorsement.claimid }} </a></p>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.endorsement.claimcomment\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.claimcomment' | translate}}</h2>\n                        <p>{{ badge.endorsement.claimcomment }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n\n            <!-- Related badges -->\n            <ion-item-group *ngIf=\"badge.relatedbadges\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.relatedbages' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let relatedBadge of badge.relatedbadges\">\n                    <ion-label>\n                        <h2>{{ relatedBadge.name }}</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.relatedbadges.length == 0\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.norelated' | translate}}</h2>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n\n            <!-- Competencies alignment -->\n            <ion-item-group *ngIf=\"badge.alignment\">\n                <ion-item-divider>\n                    <ion-label>\n                        <h2>{{ 'addon.badges.alignment' | translate}}</h2>\n                    </ion-label>\n                </ion-item-divider>\n                <ion-item class=\"ion-text-wrap\" *ngFor=\"let alignment of badge.alignment\" [href]=\"alignment.targeturl\" core-link\n                    auto-login=\"no\">\n                    <ion-label>\n                        <h2>{{ alignment.targetname }}</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"badge.alignment.length == 0\">\n                    <ion-label>\n                        <h2>{{ 'addon.badges.noalignment' | translate}}</h2>\n                    </ion-label>\n                </ion-item>\n            </ion-item-group>\n        </ng-container>\n    </core-loading>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/user-badges/user-badges.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/user-badges/user-badges.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'addon.badges.badges' | translate }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!badges.loaded\" (ionRefresh)=\"refreshBadges($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"badges.loaded\">\n            <core-empty-box *ngIf=\"badges.empty\" icon=\"fas-trophy\" [message]=\"'addon.badges.nobadges' | translate\">\n            </core-empty-box>\n\n            <ion-list *ngIf=\"!badges.empty\" class=\"ion-no-margin\">\n                <ion-item button class=\"ion-text-wrap\" *ngFor=\"let badge of badges.items\" [attr.aria-label]=\"badge.name\"\n                    (click)=\"badges.select(badge)\" [attr.aria-current]=\"badges.getItemAriaCurrent(badge)\" detail=\"true\">\n                    <ion-avatar slot=\"start\">\n                        <img [src]=\"badge.badgeurl\" [alt]=\"badge.name\" core-external-content>\n                    </ion-avatar>\n                    <ion-label>\n                        <p class=\"item-heading\">{{ badge.name }}</p>\n                        <p>{{ badge.dateissued * 1000 | coreFormatDate :'strftimedatetimeshort' }}</p>\n                    </ion-label>\n                    <ion-badge slot=\"end\" color=\"danger\" *ngIf=\"badge.dateexpire && currentTime >= badge.dateexpire\">\n                        {{ 'addon.badges.expired' | translate }}\n                    </ion-badge>\n                </ion-item>\n            </ion-list>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/badges/badges-lazy.module.ts":
/*!*************************************************!*\
  !*** ./src/addons/badges/badges-lazy.module.ts ***!
  \*************************************************/
/*! exports provided: AddonBadgesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesLazyModule", function() { return AddonBadgesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_issued_badge_issued_badge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/issued-badge/issued-badge.page */ "./src/addons/badges/pages/issued-badge/issued-badge.page.ts");
/* harmony import */ var _pages_user_badges_user_badges_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-badges/user-badges.page */ "./src/addons/badges/pages/user-badges/user-badges.page.ts");
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








const mobileRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_user_badges_user_badges_page__WEBPACK_IMPORTED_MODULE_7__["AddonBadgesUserBadgesPage"],
    },
    {
        path: ':badgeHash',
        component: _pages_issued_badge_issued_badge_page__WEBPACK_IMPORTED_MODULE_6__["AddonBadgesIssuedBadgePage"],
    },
];
const tabletRoutes = [
    {
        path: '',
        component: _pages_user_badges_user_badges_page__WEBPACK_IMPORTED_MODULE_7__["AddonBadgesUserBadgesPage"],
        children: [
            {
                path: ':badgeHash',
                component: _pages_issued_badge_issued_badge_page__WEBPACK_IMPORTED_MODULE_6__["AddonBadgesIssuedBadgePage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
];
let AddonBadgesLazyModule = class AddonBadgesLazyModule {
};
AddonBadgesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
        ],
        declarations: [
            _pages_user_badges_user_badges_page__WEBPACK_IMPORTED_MODULE_7__["AddonBadgesUserBadgesPage"],
            _pages_issued_badge_issued_badge_page__WEBPACK_IMPORTED_MODULE_6__["AddonBadgesIssuedBadgePage"],
        ],
    })
], AddonBadgesLazyModule);



/***/ }),

/***/ "./src/addons/badges/classes/user-badges-source.ts":
/*!*********************************************************!*\
  !*** ./src/addons/badges/classes/user-badges-source.ts ***!
  \*********************************************************/
/*! exports provided: AddonBadgesUserBadgesSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesUserBadgesSource", function() { return AddonBadgesUserBadgesSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/badges */ "./src/addons/badges/services/badges.ts");
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
 * Provides a collection of user badges.
 */
class AddonBadgesUserBadgesSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor(courseId, userId) {
        super();
        this.COURSE_ID = courseId;
        this.USER_ID = userId;
    }
    /**
     * @inheritdoc
     */
    getItemPath(badge) {
        return badge.uniquehash;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return {
            courseId: this.COURSE_ID,
            userId: this.USER_ID,
        };
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const badges = yield _services_badges__WEBPACK_IMPORTED_MODULE_2__["AddonBadges"].getUserBadges(this.COURSE_ID, this.USER_ID);
            return { items: badges };
        });
    }
}


/***/ }),

/***/ "./src/addons/badges/pages/issued-badge/issued-badge.page.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/badges/pages/issued-badge/issued-badge.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddonBadgesIssuedBadgePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesIssuedBadgePage", function() { return AddonBadgesIssuedBadgePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_badges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/badges */ "./src/addons/badges/services/badges.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _addons_badges_classes_user_badges_source__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @addons/badges/classes/user-badges-source */ "./src/addons/badges/classes/user-badges-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
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
 * Page that displays the list of calendar events.
 */
let AddonBadgesIssuedBadgePage = class AddonBadgesIssuedBadgePage {
    constructor(route) {
        this.route = route;
        this.badgeHash = '';
        this.courseId = 0;
        this.badgeLoaded = false;
        this.currentTime = 0;
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('courseId') || this.courseId; // Use 0 for site badges.
        this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('userId') || _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getRequiredCurrentSite().getUserId();
        this.badgeHash = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('badgeHash') || '';
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_13__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_badges_classes_user_badges_source__WEBPACK_IMPORTED_MODULE_12__["AddonBadgesUserBadgesSource"], [this.courseId, this.userId]);
        this.badges = new _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_11__["CoreSwipeNavigationItemsManager"](source);
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.fetchIssuedBadge().finally(() => {
            this.badgeLoaded = true;
        });
        this.badges.start();
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.badges.destroy();
    }
    /**
     * Fetch the issued badge required for the view.
     *
     * @returns Promise resolved when done.
     */
    fetchIssuedBadge() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_2__["CoreTimeUtils"].timestamp();
            this.user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_5__["CoreUser"].getProfile(this.userId, this.courseId, true);
            try {
                const badges = yield _services_badges__WEBPACK_IMPORTED_MODULE_6__["AddonBadges"].getUserBadges(this.courseId, this.userId);
                const badge = badges.find((badge) => this.badgeHash == badge.uniquehash);
                if (!badge) {
                    return;
                }
                this.badge = badge;
                if (badge.courseid) {
                    try {
                        this.course = yield _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_8__["CoreCourses"].getUserCourse(badge.courseid, true);
                    }
                    catch (_a) {
                        // Maybe an old deleted course.
                        this.course = undefined;
                    }
                }
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(message, 'Error getting badge data.');
            }
        });
    }
    /**
     * Refresh the badges.
     *
     * @param refresher Refresher.
     */
    refreshBadges(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(Promise.all([
                _services_badges__WEBPACK_IMPORTED_MODULE_6__["AddonBadges"].invalidateUserBadges(this.courseId, this.userId),
            ]));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(Promise.all([
                this.fetchIssuedBadge(),
            ]));
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
};
AddonBadgesIssuedBadgePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
AddonBadgesIssuedBadgePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-badges-issued-badge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./issued-badge.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/issued-badge/issued-badge.html")).default,
    })
], AddonBadgesIssuedBadgePage);



/***/ }),

/***/ "./src/addons/badges/pages/user-badges/user-badges.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/badges/pages/user-badges/user-badges.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonBadgesUserBadgesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonBadgesUserBadgesPage", function() { return AddonBadgesUserBadgesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_badges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/badges */ "./src/addons/badges/services/badges.ts");
/* harmony import */ var _services_utils_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/time */ "./src/core/services/utils/time.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _addons_badges_classes_user_badges_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @addons/badges/classes/user-badges-source */ "./src/addons/badges/classes/user-badges-source.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
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
var AddonBadgesUserBadgesPage_1;












/**
 * Page that displays the list of calendar events.
 */
let AddonBadgesUserBadgesPage = AddonBadgesUserBadgesPage_1 = class AddonBadgesUserBadgesPage {
    constructor() {
        var _a, _b;
        this.currentTime = 0;
        let courseId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('courseId')) !== null && _a !== void 0 ? _a : 0; // Use 0 for site badges.
        const userId = (_b = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('userId')) !== null && _b !== void 0 ? _b : _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
        if (courseId === _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteHomeId()) {
            // Use courseId 0 for site home, otherwise the site doesn't return site badges.
            courseId = 0;
        }
        this.badges = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_9__["CoreListItemsManager"](_classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_11__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_addons_badges_classes_user_badges_source__WEBPACK_IMPORTED_MODULE_10__["AddonBadgesUserBadgesSource"], [courseId, userId]), AddonBadgesUserBadgesPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchInitialBadges();
            this.badges.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.badges.destroy();
    }
    /**
     * Refresh the badges.
     *
     * @param refresher Refresher.
     */
    refreshBadges(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_services_badges__WEBPACK_IMPORTED_MODULE_2__["AddonBadges"].invalidateUserBadges(this.badges.getSource().COURSE_ID, this.badges.getSource().USER_ID));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(this.badges.reload());
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Obtain the initial list of badges.
     */
    fetchInitialBadges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentTime = _services_utils_time__WEBPACK_IMPORTED_MODULE_3__["CoreTimeUtils"].timestamp();
            try {
                yield this.badges.reload();
            }
            catch (message) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__["CoreDomUtils"].showErrorModalDefault(message, 'Error loading badges');
                this.badges.reset();
            }
        });
    }
};
AddonBadgesUserBadgesPage.ctorParameters = () => [];
AddonBadgesUserBadgesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_7__["CoreSplitViewComponent"],] }]
};
AddonBadgesUserBadgesPage = AddonBadgesUserBadgesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-badges-user-badges',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-badges.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/badges/pages/user-badges/user-badges.html")).default,
    })
], AddonBadgesUserBadgesPage);



/***/ }),

/***/ "./src/core/classes/items-management/swipe-navigation-items-manager.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/classes/items-management/swipe-navigation-items-manager.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSwipeNavigationItemsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSwipeNavigationItemsManager", function() { return CoreSwipeNavigationItemsManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routed-items-manager */ "./src/core/classes/items-management/routed-items-manager.ts");
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
 * Helper class to manage the state and routing of a swipeable page.
 */
class CoreSwipeNavigationItemsManager extends _routed_items_manager__WEBPACK_IMPORTED_MODULE_2__["CoreRoutedItemsManager"] {
    /**
     * Process page started operations.
     */
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateSelectedItem();
        });
    }
    /**
     * Navigate to the next item.
     */
    navigateToNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(1, 'forward');
        });
    }
    /**
     * Navigate to the previous item.
     */
    navigateToPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.navigateToItemBy(-1, 'back');
        });
    }
    /**
     * Has a next item.
     *
     * @returns If has next item.
     */
    hasNextItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(1);
            return !!item;
        });
    }
    /**
     * Has a previous item.
     *
     * @returns If has previous item.
     */
    hasPreviousItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(-1);
            return !!item;
        });
    }
    /**
     * @inheritdoc
     */
    getCurrentPageRoute() {
        return _services_navigator__WEBPACK_IMPORTED_MODULE_1__["CoreNavigator"].getCurrentRoute();
    }
    /**
     * @inheritdoc
     */
    getSelectedItemPathFromRoute(route) {
        const segments = [];
        while (route) {
            segments.push(...route.url);
            if (!route.firstChild) {
                break;
            }
            route = route.firstChild;
        }
        return segments.map(segment => segment.path).join('/').replace(/\/+/, '/').trim() || null;
    }
    /**
     * Navigate to an item by an offset.
     *
     * @param delta Index offset.
     * @param animationDirection Animation direction.
     */
    navigateToItemBy(delta, animationDirection) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield this.getItemBy(delta);
            if (!item) {
                return;
            }
            yield this.navigateToItem(item, { animationDirection, replace: true });
        });
    }
    /**
     * Get item by an offset.
     *
     * @param delta Index offset.
     * @returns The item or null if none.
     */
    getItemBy(delta) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const items = this.getSource().getItems();
            const selectedIndex = (_a = (this.selectedItem && (items === null || items === void 0 ? void 0 : items.indexOf(this.selectedItem)))) !== null && _a !== void 0 ? _a : -1;
            if (selectedIndex === -1 || items === null) {
                return null;
            }
            const deltaStep = delta > 0 ? 1 : -1;
            let nextIndex = selectedIndex;
            let deltaMoved = 0;
            while (deltaMoved !== delta) {
                nextIndex += deltaStep;
                if (nextIndex < 0) {
                    return null;
                }
                if (nextIndex >= items.length) {
                    break;
                }
                if (this.skipItemInSwipe(items[nextIndex])) {
                    continue;
                }
                deltaMoved += deltaStep;
            }
            if (deltaMoved === delta) {
                return items[nextIndex];
            }
            if (!this.getSource().isCompleted()) {
                yield this.getSource().load();
                return this.getItemBy(delta);
            }
            return null;
        });
    }
    /**
     * Check if an item should be skipped during swipe navigation.
     *
     * @param item Item.
     * @returns Whether to skip this item during swipe navigation.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    skipItemInSwipe(item) {
        return false;
    }
}


/***/ })

}]);
//# sourceMappingURL=badges-lazy-module.js.map