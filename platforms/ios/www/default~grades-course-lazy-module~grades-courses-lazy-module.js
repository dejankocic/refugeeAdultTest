(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~grades-course-lazy-module~grades-courses-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/course/course.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/course/course.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ title }}</h1>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content [core-swipe-navigation]=\"courses\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"!columns || !rows\" (ionRefresh)=\"refreshGrades($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]=\"columns && rows\">\n        <core-empty-box *ngIf=\"!rows.length\" icon=\"fas-chart-bar\" [message]=\"'core.grades.nogradesreturned' | translate\">\n        </core-empty-box>\n        <div *ngIf=\"rows.length\" class=\"core-grades-container\">\n            <table class=\"core-grades-table\" [class.summary]=\"showSummary\">\n                <thead>\n                    <tr>\n                        <th *ngFor=\"let column of columns\" id=\"{{column.name}}\" class=\"ion-text-start\"\n                            [class.ion-hide-md-down]=\"column.hiddenPhone\" [attr.colspan]=\"column.colspan\">\n                            {{ 'core.grades.' + column.name | translate }}\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container *ngFor=\"let row of rows | slice:0:rowsOnView\">\n                        <tr *ngIf=\"row.itemtype === 'leader'\">\n                            <td [attr.rowspan]=\"row.rowspan\" class=\"core-grades-table-leader\"></td>\n                        </tr>\n                        <tr [attr.role]=\"row.expandable && showSummary ? 'button row' : 'row'\"\n                            [attr.tabindex]=\"row.expandable && showSummary && 0\" [attr.aria-expanded]=\"row.expanded\"\n                            [attr.aria-label]=\"rowAriaLabel(row)\" [attr.aria-controls]=\"row.detailsid\"\n                            (ariaButtonClick)=\"row.expandable && showSummary && toggleRow(row)\" [class]=\"row.rowclass\"\n                            [class.core-grades-grade-clickable]=\"row.expandable && showSummary\" [id]=\"'grade-'+row.id\"\n                            *ngIf=\"row.itemtype !== 'leader'\">\n                            <ng-container *ngIf=\"row.itemtype\">\n                                <td *ngIf=\"row.itemtype == 'category'\" class=\"core-grades-table-category\" [attr.rowspan]=\"row.rowspan\">\n                                </td>\n                                <th class=\"core-grades-table-gradeitem ion-text-start\" [attr.colspan]=\"row.colspan\">\n                                    <ion-icon *ngIf=\"row.expandable && showSummary\" aria-hidden=\"true\" slot=\"start\" name=\"fas-chevron-right\"\n                                        class=\"expandable-status-icon\" [class.expandable-status-icon-expanded]=\"row.expanded\">\n                                    </ion-icon>\n                                    <ion-icon *ngIf=\"row.icon\" name=\"{{row.icon}}\" slot=\"start\" [attr.aria-label]=\"row.iconAlt\">\n                                    </ion-icon>\n                                    <img *ngIf=\"row.image && !row.itemmodule\" [src]=\"row.image\" slot=\"start\" class=\"core-module-icon\"\n                                        [alt]=\"row.iconAlt\" />\n                                    <core-mod-icon *ngIf=\"row.image && row.itemmodule\" [modicon]=\"row.image\" slot=\"start\"\n                                        [modname]=\"row.itemmodule\">\n                                    </core-mod-icon>\n                                    <span [innerHTML]=\"row.gradeitem\"></span>\n                                </th>\n                                <ng-container *ngIf=\"row.itemtype !== 'category'\">\n                                    <ng-container *ngFor=\"let column of columns\">\n                                        <td *ngIf=\"column.name !== 'gradeitem' && column.name !== 'feedback' && column.name !== 'grade' &&\n                                        row[column.name] !== undefined\" [class]=\"'ion-text-start core-grades-table-' + column.name\"\n                                            [class.ion-hide-md-down]=\"column.hiddenPhone\" [innerHTML]=\"row[column.name]\">\n                                        </td>\n                                        <td *ngIf=\"column.name === 'feedback' && row.feedback !== undefined\"\n                                            class=\"ion-text-start core-grades-table-feedback\" [class.ion-hide-md-down]=\"column.hiddenPhone\">\n                                            <core-format-text collapsible-item [text]=\"row.feedback\" contextLevel=\"course\"\n                                                [contextInstanceId]=\"courseId\">\n                                            </core-format-text>\n                                        </td>\n                                        <td *ngIf=\"column.name === 'grade'\" [class.ion-hide-md-down]=\"column.hiddenPhone\"\n                                            class=\"ion-text-start core-grades-table-grade {{row.gradeClass}}\">\n                                            <ion-icon *ngIf=\"row.gradeIcon\" [name]=\"row.gradeIcon\" [attr.aria-label]=\"row.gradeIconAlt\">\n                                            </ion-icon>\n                                            <span [innerHTML]=\"row[column.name]\"></span>\n                                        </td>\n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                        </tr>\n                        <tr *ngIf=\"row.expandable && row.expanded\" [id]=\"row.detailsid\" [class]=\"row.rowclass\">\n                            <td [attr.colspan]=\"totalColumnsSpan\">\n                                <ion-list>\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.weight\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.weight' | translate}}</p>\n                                            <p [innerHTML]=\"row.weight\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.grade\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.grade' | translate}}</p>\n                                            <p [innerHTML]=\"row.grade\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.range\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.range' | translate}}</p>\n                                            <p [innerHTML]=\"row.range\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.percentage\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.percentage' | translate}}</p>\n                                            <p [innerHTML]=\"row.percentage\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.lettergrade\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.lettergrade' | translate}}</p>\n                                            <p [innerHTML]=\"row.lettergrade\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.rank\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.rank' | translate}}</p>\n                                            <p [innerHTML]=\"row.rank\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.average\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.average' | translate}}</p>\n                                            <p [innerHTML]=\"row.average\"></p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.feedback\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.feedback' | translate}}</p>\n                                            <p>\n                                                <core-format-text collapsible-item [text]=\"row.feedback\" contextLevel=\"course\"\n                                                    [contextInstanceId]=\"courseId\">\n                                                </core-format-text>\n                                            </p>\n                                        </ion-label>\n                                    </ion-item>\n\n                                    <ion-item class=\"ion-text-wrap\" *ngIf=\"row.contributiontocoursetotal\">\n                                        <ion-label>\n                                            <p class=\"item-heading\">{{ 'core.grades.contributiontocoursetotal' | translate}}</p>\n                                            <p [innerHTML]=\"row.contributiontocoursetotal\"></p>\n                                        </ion-label>\n                                    </ion-item>\n                                </ion-list>\n                            </td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </table>\n            <core-infinite-loading [enabled]=\"rowsOnView < rows.length\" (action)=\"loadMore($event)\"></core-infinite-loading>\n        </div>\n    </core-loading>\n</ion-content>\n");

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


/***/ }),

/***/ "./src/core/features/grades/classes/grades-courses-source.ts":
/*!*******************************************************************!*\
  !*** ./src/core/features/grades/classes/grades-courses-source.ts ***!
  \*******************************************************************/
/*! exports provided: CoreGradesCoursesSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesSource", function() { return CoreGradesCoursesSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_grades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/grades */ "./src/core/features/grades/services/grades.ts");
/* harmony import */ var _services_grades_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grades-helper */ "./src/core/features/grades/services/grades-helper.ts");
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
 * Provides a collection of courses.
 */
class CoreGradesCoursesSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const grades = yield _services_grades__WEBPACK_IMPORTED_MODULE_2__["CoreGrades"].getCoursesGrades();
            const courses = yield _services_grades_helper__WEBPACK_IMPORTED_MODULE_3__["CoreGradesHelper"].getGradesCourseData(grades);
            return { items: courses };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(course) {
        return course.courseid.toString();
    }
}


/***/ }),

/***/ "./src/core/features/grades/pages/course/course.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/grades/pages/course/course.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreGradesCoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursePageModule", function() { return CoreGradesCoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course.page */ "./src/core/features/grades/pages/course/course.page.ts");
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




let CoreGradesCoursePageModule = class CoreGradesCoursePageModule {
};
CoreGradesCoursePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _course_page__WEBPACK_IMPORTED_MODULE_3__["CoreGradesCoursePage"],
        ],
    })
], CoreGradesCoursePageModule);



/***/ }),

/***/ "./src/core/features/grades/pages/course/course.page.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/grades/pages/course/course.page.ts ***!
  \**************************************************************/
/*! exports provided: CoreGradesCoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursePage", function() { return CoreGradesCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/grades/services/grades */ "./src/core/features/grades/services/grades.ts");
/* harmony import */ var _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/grades/services/grades-helper */ "./src/core/features/grades/services/grades-helper.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @classes/items-management/swipe-navigation-items-manager */ "./src/core/classes/items-management/swipe-navigation-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _features_grades_classes_grades_courses_source__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @features/grades/classes/grades-courses-source */ "./src/core/features/grades/classes/grades-courses-source.ts");
/* harmony import */ var _singletons_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @singletons/dom */ "./src/core/singletons/dom.ts");
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
 * Page that displays a course grades.
 */
let CoreGradesCoursePage = class CoreGradesCoursePage {
    constructor(route, element) {
        var _a, _b;
        this.route = route;
        this.element = element;
        this.columns = [];
        this.rows = [];
        this.rowsOnView = 0;
        this.fetchSuccess = false;
        try {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRequiredRouteNumberParam('courseId', { route });
            this.userId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('userId', { route })) !== null && _a !== void 0 ? _a : _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getCurrentSiteUserId();
            this.gradeId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].getRouteNumberParam('gradeId', { route });
            this.expandLabel = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.expand');
            this.collapseLabel = _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.collapse');
            this.useLegacyLayout = !_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getRequiredCurrentSite().isVersionGreaterEqualThan('4.1');
            if ((_b = route.snapshot.data.swipeEnabled) !== null && _b !== void 0 ? _b : true) {
                const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_12__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_grades_classes_grades_courses_source__WEBPACK_IMPORTED_MODULE_13__["CoreGradesCoursesSource"], []);
                this.courses = new _classes_items_management_swipe_navigation_items_manager__WEBPACK_IMPORTED_MODULE_11__["CoreSwipeNavigationItemsManager"](source);
            }
        }
        catch (error) {
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModal(error);
            _services_navigator__WEBPACK_IMPORTED_MODULE_8__["CoreNavigator"].back();
            return;
        }
    }
    get showSummary() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_9__["CoreScreen"].isMobile || !!this.withinSplitView;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.withinSplitView = !!((_a = this.element.nativeElement.parentElement) === null || _a === void 0 ? void 0 : _a.closest('core-split-view'));
            yield ((_b = this.courses) === null || _b === void 0 ? void 0 : _b.start());
            yield this.fetchInitialGrades();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        var _a;
        (_a = this.courses) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /**
     * Get aria label for row.
     *
     * @param row Row.
     * @returns Aria label, if applicable.
     */
    rowAriaLabel(row) {
        if (!row.expandable || !this.showSummary) {
            return;
        }
        const actionLabel = row.expanded ? this.collapseLabel : this.expandLabel;
        return `${actionLabel} ${row.ariaLabel}`;
    }
    /**
     * Toggle whether a row is expanded or collapsed.
     *
     * @param row Row.
     * @param expand If defined, force expand or collapse.
     */
    toggleRow(row, expand) {
        var _a;
        if (!this.rows || !this.columns) {
            return;
        }
        row.expanded = expand !== null && expand !== void 0 ? expand : !row.expanded;
        let colspan = this.columns.length + ((_a = row.colspan) !== null && _a !== void 0 ? _a : 0);
        if (this.useLegacyLayout) {
            colspan--;
        }
        for (let i = this.rows.indexOf(row) - 1; i >= 0; i--) {
            const previousRow = this.rows[i];
            if (!previousRow.rowspan ||
                !previousRow.colspan ||
                previousRow.colspan !== colspan ||
                (!this.useLegacyLayout && previousRow.itemtype !== 'leader') ||
                (this.useLegacyLayout && previousRow.expandable)) {
                continue;
            }
            colspan++;
            previousRow.rowspan += row.expanded ? 1 : -1;
        }
    }
    /**
     * Refresh grades.
     *
     * @param refresher Refresher.
     */
    refreshGrades(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(_features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].invalidateCourseGradesData(this.courseId, this.userId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(this.fetchGrades());
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Obtain the initial table of grades.
     */
    fetchInitialGrades() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchGrades();
                if (this.gradeId && this.rows) {
                    const row = this.rows.find((row) => row.id == this.gradeId);
                    if (row) {
                        this.toggleRow(row, true);
                        _singletons_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDom"].scrollToElement(this.element.nativeElement, '#grade-' + row.id);
                        this.gradeId = undefined;
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading course');
                this.columns = [];
                this.rows = [];
                this.rowsOnView = 0;
            }
        });
    }
    /**
     * Update the table of grades.
     */
    fetchGrades() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const table = yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].getCourseGradesTable(this.courseId, this.userId);
            const formattedTable = _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_5__["CoreGradesHelper"].formatGradesTable(table);
            this.title = (_b = (_a = formattedTable.rows[0]) === null || _a === void 0 ? void 0 : _a.gradeitem) !== null && _b !== void 0 ? _b : _singletons__WEBPACK_IMPORTED_MODULE_10__["Translate"].instant('core.grades.grades');
            this.columns = formattedTable.columns;
            this.rows = formattedTable.rows;
            this.rowsOnView = this.getRowsOnHeight();
            this.totalColumnsSpan = formattedTable.columns.reduce((total, column) => total + column.colspan, 0);
            if (!this.fetchSuccess) {
                this.fetchSuccess = true;
                yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].logCourseGradesView(this.courseId, this.userId);
            }
        });
    }
    /**
     * Function to get the number of rows that can be shown on the screen.
     *
     * @returns The number of rows.
     */
    getRowsOnHeight() {
        return Math.floor(window.innerHeight / 44);
    }
    /**
     * Function to load more rows.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     */
    loadMore(infiniteComplete) {
        this.rowsOnView += this.getRowsOnHeight();
        infiniteComplete && infiniteComplete();
    }
};
CoreGradesCoursePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
CoreGradesCoursePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-core-grades-course',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./course.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/course/course.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./course.scss */ "./src/core/features/grades/pages/course/course.scss")).default]
    })
], CoreGradesCoursePage);



/***/ }),

/***/ "./src/core/features/grades/pages/course/course.scss":
/*!***********************************************************!*\
  !*** ./src/core/features/grades/pages/course/course.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --header-background: var(--white);\n  --odd-cell-background: var(--light);\n  --odd-cell-hover: var(--gray-200);\n  --even-cell-background: var(--white);\n  --even-cell-hover: var(--light);\n  --icon-color: var(--gray-500);\n  --border-color: var(--stroke);\n  --mod-icon-filter: brightness(0);\n}\n:host .odd {\n  --cell-background: var(--odd-cell-background);\n  --cell-hover: var(--odd-cell-hover);\n}\n:host .even {\n  --cell-background: var(--even-cell-background);\n  --cell-hover: var(--even-cell-hover);\n}\n:host-context(html.dark) {\n  --header-background: var(--gray-900);\n  --odd-cell-background: var(--gray-800);\n  --odd-cell-hover: var(--gray-600);\n  --even-cell-background: var(--gray-900);\n  --even-cell-hover: var(--gray-700);\n  --icon-color: var(--gray-200);\n  --mod-icon-filter: brightness(0) invert(1);\n}\n.core-grades-table {\n  border-collapse: collapse;\n  line-height: 20px;\n  width: 100%;\n  font-size: 16px;\n  color: var(--ion-text-color);\n}\n.core-grades-table tr {\n  border-bottom: 1px solid var(--border-color);\n}\n.core-grades-table th, .core-grades-table td {\n  padding-right: 8px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  vertical-align: top;\n  white-space: normal;\n  text-align: start;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table th, .core-grades-table td {\n    padding-right: unset;\n    -webkit-padding-end: 8px;\n    padding-inline-end: 8px;\n  }\n}\n.core-grades-table thead th {\n  vertical-align: bottom;\n  font-weight: bold;\n  background-color: var(--header-background);\n}\n.core-grades-table thead #gradeitem {\n  padding-left: 24px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table thead #gradeitem {\n    padding-left: unset;\n    -webkit-padding-start: 24px;\n    padding-inline-start: 24px;\n  }\n}\n.core-grades-table tbody th {\n  font-weight: normal;\n}\n.core-grades-table tbody tr.core-bold th {\n  font-weight: inherit;\n}\n.core-grades-table tbody #gradeitem {\n  padding-left: 4px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table tbody #gradeitem {\n    padding-left: unset;\n    -webkit-padding-start: 4px;\n    padding-inline-start: 4px;\n  }\n}\n.core-grades-table .core-grades-table-gradeitem {\n  padding-left: 4px;\n  font-weight: bold;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-gradeitem {\n    padding-left: unset;\n    -webkit-padding-start: 4px;\n    padding-inline-start: 4px;\n  }\n}\n.core-grades-table .core-grades-table-gradeitem.column-itemname {\n  padding-left: 0;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-gradeitem.column-itemname {\n    padding-left: unset;\n    -webkit-padding-start: 0;\n    padding-inline-start: 0;\n  }\n}\n.core-grades-table .core-grades-table-gradeitem img {\n  width: 16px;\n  height: 16px;\n}\n.core-grades-table .core-grades-table-gradeitem core-mod-icon {\n  padding: 0px;\n  --size: 16px;\n  background: transparent;\n  --filter: var(--mod-icon-filter);\n}\n.core-grades-table .core-grades-table-gradeitem ion-icon {\n  color: var(--icon-color);\n}\n.core-grades-table .core-grades-table-gradeitem span {\n  margin-left: 4px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-gradeitem span {\n    margin-left: unset;\n    -webkit-margin-start: 4px;\n    margin-inline-start: 4px;\n  }\n}\n.core-grades-table .core-grades-table-gradeitem .expandable-status-icon {\n  font-size: var(--text-size);\n  margin-left: 0;\n  margin-right: 2px;\n  transition: transform 200ms ease-in-out;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-gradeitem .expandable-status-icon {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 0;\n    margin-inline-start: 0;\n    -webkit-margin-end: 2px;\n    margin-inline-end: 2px;\n  }\n}\n.core-grades-table .core-grades-table-gradeitem .expandable-status-icon.expandable-status-icon-expanded {\n  transform: var(--rotate-expandable);\n}\n.core-grades-table .core-grades-table-feedback {\n  padding-left: 4px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-feedback {\n    padding-left: unset;\n    -webkit-padding-start: 4px;\n    padding-inline-start: 4px;\n  }\n}\n.core-grades-table .core-grades-table-feedback .no-overflow {\n  overflow: auto;\n}\n.core-grades-table .core-grades-table-grade ion-icon {\n  padding-right: 4px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .core-grades-table .core-grades-table-grade ion-icon {\n    padding-right: unset;\n    -webkit-padding-end: 4px;\n    padding-inline-end: 4px;\n  }\n}\n.core-grades-table .core-grades-table-leader {\n  width: 0;\n}\n.core-grades-table .ion-no-border {\n  border: 0 !important;\n}\n.core-grades-table .dimmed_text,\n.core-grades-table .hidden {\n  opacity: 0.7;\n}\n.core-grades-table .odd td, .core-grades-table .odd th, .core-grades-table .odd th[aria-current=page], .core-grades-table .even td, .core-grades-table .even th, .core-grades-table .even th[aria-current=page] {\n  background-color: var(--cell-background);\n}\n.core-grades-table .core-grades-grade-clickable {\n  cursor: pointer;\n}\n.core-grades-table .core-grades-grade-clickable:hover td, .core-grades-table .core-grades-grade-clickable:hover th, .core-grades-table .core-grades-grade-clickable:hover th[aria-current=page] {\n  background-color: var(--cell-hover);\n}\n.core-grades-table .core-grades-grade-clickable th, .core-grades-table .core-grades-grade-clickable td {\n  height: var(--a11y-min-target-size);\n  vertical-align: middle;\n}\n.core-grades-table ion-list, .core-grades-table ion-item::part(native) {\n  background-color: transparent;\n}\n.core-grades-table.summary .ion-hide-md-down {\n  display: none;\n  opacity: 0;\n}\n@media (max-width: 767.98px) {\n  .core-grades-table td {\n    font-size: 0.85em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9ncmFkZXMvcGFnZXMvY291cnNlL2NvdXJzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNFQTs7OztFQUFBO0FBMkdBOztFQUFBO0FDN0dBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FBK0RBOzs7O0VBQUE7QUM3REE7RUFDSSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBb0RKO0FBbERJO0VBQ0ksNkNBQUE7RUFDQSxtQ0FBQTtBQW9EUjtBQWpESTtFQUNJLDhDQUFBO0VBQ0Esb0NBQUE7QUFtRFI7QUE5Q0E7RUFDSSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtBQWlESjtBQTlDQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBaURKO0FBL0NJO0VBQ0ksNENBQUE7QUFpRFI7QUE5Q0k7RUwrTUEsa0JLOU0wQjtFTDhPNUIsZ0JLOU91QjtFTCtPdkIsbUJLL09pQztFQUMzQixtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFrRFI7QUw0Sk07RUFDRTtJQUtJLG9CQUFBO0lBS0Ysd0JLNU5vQjtJTDZOcEIsdUJLN05vQjtFQTJENUI7QUFDRjtBQXRESTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtBQXdEUjtBQXJESTtFTGlNQSxrQktoTXVDO0FBdUQzQztBTDZJTTtFQUNFO0lBRUksbUJBQUE7SUFNRiwyQks3TWlDO0lMOE1qQywwQks5TWlDO0VBNkR6QztBQUNGO0FBM0RJO0VBQ0UsbUJBQUE7QUE2RE47QUExREk7RUFDRSxvQkFBQTtBQTRETjtBQXpESTtFTHFMQSxpQktwTHVDO0FBMkQzQztBTDZITTtFQUNFO0lBRUksbUJBQUE7SUFNRiwwQktqTWlDO0lMa01qQyx5QktsTWlDO0VBaUV6QztBQUNGO0FBL0RJO0VMaUxBLGlCS2hMdUM7RUFDbkMsaUJBQUE7QUFpRVI7QUxrSE07RUFDRTtJQUVJLG1CQUFBO0lBTUYsMEJLN0xpQztJTDhMakMseUJLOUxpQztFQXdFekM7QUFDRjtBQXRFUTtFTDZLSixlSzVLMkM7QUF3RS9DO0FMd0dNO0VBQ0U7SUFFSSxtQkFBQTtJQU1GLHdCS3pMcUM7SUwwTHJDLHVCSzFMcUM7RUE4RTdDO0FBQ0Y7QUE1RVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQThFWjtBQTNFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQTZFWjtBQXpFUTtFQUNJLHdCQUFBO0FBMkVaO0FBeEVRO0VMd0pKLGdCS3ZKMEM7QUEwRTlDO0FMaUZNO0VBQ0U7SUFFSSxrQkFBQTtJQU1GLHlCS3BLb0M7SUxxS3BDLHdCS3JLb0M7RUFnRjVDO0FBQ0Y7QUE5RVE7RUFDSSwyQkFBQTtFTG1KUixjS2xKbUM7RUxtSm5DLGlCS25Kc0M7RUhYdEMsdUNBSmdCO0FHa0dwQjtBTG1FTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLHVCSy9KNkI7SUxnSzdCLHNCS2hLNkI7SUxpSzdCLHVCS2pLZ0M7SUxrS2hDLHNCS2xLZ0M7RUE0RnhDO0FBQ0Y7QUExRlk7RUFDSSxtQ0FBQTtBQTRGaEI7QUF0Rkk7RUx3SUEsaUJLdkl1QztBQXdGM0M7QUxtRE07RUFDRTtJQUVJLG1CQUFBO0lBTUYsMEJLcEppQztJTHFKakMseUJLckppQztFQThGekM7QUFDRjtBQTdGUTtFQUNJLGNBQUE7QUErRlo7QUF6RlE7RUwrSEosa0JLOUgrQjtBQTJGbkM7QUxzQ007RUFDRTtJQUtJLG9CQUFBO0lBS0Ysd0JLNUl5QjtJTDZJekIsdUJLN0l5QjtFQWlHakM7QUFDRjtBQTlGSTtFQUNJLFFBQUE7QUFnR1I7QUE3Rkk7RUFDSSxvQkFBQTtBQStGUjtBQTVGSTs7RUFFSSxZQUFBO0FBOEZSO0FBMUZRO0VBQ0ksd0NBQUE7QUE0Rlo7QUF4Rkk7RUFDSSxlQUFBO0FBMEZSO0FBeEZZO0VBQ0ksbUNBQUE7QUEwRmhCO0FBdEZRO0VBQ0ksbUNBQUE7RUFDQSxzQkFBQTtBQXdGWjtBQXBGSTtFQUNJLDZCQUFBO0FBc0ZSO0FBbkZJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFxRlI7QUxoRkk7RUtFQTtJQUNJLGlCQUFBO0VBa0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvZ3JhZGVzL3BhZ2VzL2NvdXJzZS9jb3Vyc2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSB0aGUgZGlmZmVyZW50IGZpbGVzIHlvdSBzaG91bGQgaW1wb3J0IHRvIHVzZSBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbiRmb250LXBhdGg6IFwiLi4vYXNzZXRzL2ZvbnRzXCI7XG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XG5cbkBpbXBvcnQgXCIuL2hlbHBlcnMvaGVscGVycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XG5AaW1wb3J0IFwiLi9nbG9iYWxzLnZhcmlhYmxlcy5zY3NzXCI7XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIHN0cmluZyBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5zdHJpbmcuc2Nzc1xuICovXG5cblxuLy8gU3RyaW5nIFV0aWxpdHkgRnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTdHJpbmcgUmVwbGFjZSBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlKCRzdHJpbmcsICRzZWFyY2gsICRyZXBsYWNlOiBcIlwiKSB7XG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZWFyY2gpO1xuXG4gIEBpZiAkaW5kZXgge1xuICAgIEByZXR1cm4gc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpICsgJHJlcGxhY2UgKyBzdHItcmVwbGFjZShzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgc3RyLWxlbmd0aCgkc2VhcmNoKSksICRzZWFyY2gsICRyZXBsYWNlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHN0cmluZztcbn1cblxuLy8gU3RyaW5nIFNwbGl0IEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbkBmdW5jdGlvbiBzdHItc3BsaXQoJHN0cmluZywgJHNlcGFyYXRvcikge1xuICAvLyBlbXB0eSBhcnJheS9saXN0XG4gICRzcGxpdC1hcnI6ICgpO1xuICAvLyBmaXJzdCBpbmRleCBvZiBzZXBhcmF0b3IgaW4gc3RyaW5nXG4gICRpbmRleDogc3RyLWluZGV4KCRzdHJpbmcsICRzZXBhcmF0b3IpO1xuICAvLyBsb29wIHRocm91Z2ggc3RyaW5nXG4gIEB3aGlsZSAkaW5kZXggIT0gbnVsbCB7XG4gICAgLy8gZ2V0IHRoZSBzdWJzdHJpbmcgZnJvbSB0aGUgZmlyc3QgY2hhcmFjdGVyIHRvIHRoZSBzZXBhcmF0b3JcbiAgICAkaXRlbTogc3RyLXNsaWNlKCRzdHJpbmcsIDEsICRpbmRleCAtIDEpO1xuICAgIC8vIHB1c2ggaXRlbSB0byBhcnJheVxuICAgICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkaXRlbSk7XG4gICAgLy8gcmVtb3ZlIGl0ZW0gYW5kIHNlcGFyYXRvciBmcm9tIHN0cmluZ1xuICAgICRzdHJpbmc6IHN0ci1zbGljZSgkc3RyaW5nLCAkaW5kZXggKyAxKTtcbiAgICAvLyBmaW5kIG5ldyBpbmRleCBvZiBzZXBhcmF0b3JcbiAgICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcbiAgfVxuICAvLyBhZGQgdGhlIHJlbWFpbmluZyBzdHJpbmcgdG8gbGlzdCAodGhlIGxhc3QgaXRlbSlcbiAgJHNwbGl0LWFycjogYXBwZW5kKCRzcGxpdC1hcnIsICRzdHJpbmcpO1xuXG4gIEByZXR1cm4gJHNwbGl0LWFycjtcbn1cblxuXG4vLyBTdHJpbmcgRXh0cmFjdCBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1leHRyYWN0KCRzdHJpbmcsICRzdGFydCwgJGVuZCkge1xuICAkc3RhcnQtaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc3RhcnQpO1xuXG4gIEBpZiAkc3RhcnQtaW5kZXgge1xuICAgICRwb3N0OiBzdHItc2xpY2UoJHN0cmluZywgJHN0YXJ0LWluZGV4ICsgc3RyLWxlbmd0aCgkc3RhcnQpKTtcbiAgICAkZW5kLWluZGV4OiBzdHItaW5kZXgoJHBvc3QsICRlbmQpO1xuXG4gICAgQGlmICRlbmQtaW5kZXgge1xuICAgICAgQHJldHVybiBzdHItc2xpY2UoJHBvc3QsIDEsICRlbmQtaW5kZXggLSAxKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIG51bGw7XG59XG5cblxuLy8gU3RyaW5nIENvbnRhaW5zIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gc3RyLWNvbnRhaW5zKCRzdHJpbmcsICRuZWVkbGUpIHtcbiAgQGlmICh0eXBlLW9mKCRzdHJpbmcpID09IHN0cmluZykge1xuICAgIEByZXR1cm4gc3RyLWluZGV4KCRzdHJpbmcsICRuZWVkbGUpICE9IG51bGw7XG4gIH1cblxuICBAcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8vIFVSTCBFbmNvZGUgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiB1cmwtZW5jb2RlKCR2YWwpIHtcbiAgJHNwYWNlczogc3RyLXJlcGxhY2UoJHZhbCwgXCIgXCIsIFwiJTIwXCIpO1xuICAkZW5jb2RlZDogc3RyLXJlcGxhY2UoJHNwYWNlcywgXCIjXCIsIFwiJTIzXCIpO1xuICBAcmV0dXJuICRlbmNvZGVkO1xufVxuXG5cbi8vIEFkZCBSb290IFNlbGVjdG9yXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRkcyBhIHJvb3Qgc2VsZWN0b3IgdXNpbmcgaG9zdC1jb250ZXh0IGJhc2VkIG9uIHRoZSBzZWxlY3RvciBwYXNzZWRcbi8vXG4vLyBFeGFtcGxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3RcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSlcbi8vXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0KC5maXhlZClcIilcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCguZml4ZWQpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLmZpeGVkXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCgudGFiLWxheW91dC1pY29uLWhpZGUpIDo6c2xvdHRlZChpb24tYmFkZ2UpXCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnRhYi1sYXlvdXQtaWNvbi1oaWRlIDo6c2xvdHRlZChpb24tYmFkZ2UpXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCIuc2hhZG93XCIpXG4vLyAtLT4gW2Rpcj1ydGxdIC5zaGFkb3dcbi8vIC0tPiA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNoYWRvd1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIGFkZC1yb290LXNlbGVjdG9yKCRyb290LCAkYWRkSG9zdFNlbGVjdG9yKSB7XG4gICRzZWxlY3RvcnM6IHN0ci1zcGxpdCgkcm9vdCwgXCIsXCIpO1xuXG4gICRsaXN0OiAoKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHNlbGVjdG9ycyB7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0KCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcgYSBjbGFzcyBvbiB0aGUgaG9zdFxuICAgIC8vIGVsZW1lbnQgc28gd2UgbmVlZCB0byBjaGFuZ2UgaG93IHdlIHRhcmdldCBpdFxuICAgIEBpZiBzdHItY29udGFpbnMoJHNlbGVjdG9yLCBcIjpob3N0KFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pOmhvc3QoXCIpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XG5cbiAgICAgICRuZXctZWxlbWVudDogKCk7XG4gICAgICAkZWxlbWVudHM6IHN0ci1zcGxpdCgkc2VsZWN0b3IsIFwiIFwiKTtcblxuICAgICAgQGVhY2ggJGVsZW1lbnQgaW4gJGVsZW1lbnRzIHtcbiAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCI6aG9zdChcIikge1xuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogJGVsZW1lbnQ7XG5cbiAgICAgICAgICBAaWYgc3RyLWNvbnRhaW5zKCRlbGVtZW50LCBcIikpXCIpIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIikpXCIsIFwiKVwiKTtcbiAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIilcIiwgXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgICRzY29wZWQtZWxlbWVudDogc3RyLXJlcGxhY2UoJHNjb3BlZC1lbGVtZW50LCBcIjpob3N0KFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG5cbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRzY29wZWQtZWxlbWVudCwgc3BhY2UpO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAkbmV3LWVsZW1lbnQ6IGFwcGVuZCgkbmV3LWVsZW1lbnQsICRlbGVtZW50LCBzcGFjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJG5ldy1lbGVtZW50LCBjb21tYSk7XG4gICAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRhaW5zIDpob3N0IGl0IG1lYW5zIGl0IGlzIHRhcmdldGluZyBqdXN0IHRoZSBob3N0XG4gICAgLy8gZWxlbWVudCBzbyB3ZSBjYW4gY2hhbmdlIGl0IHRvIGxvb2sgZm9yIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2UgaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdFwiKSB7XG4gICAgICAkc2hhZG93LWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzZWxlY3RvciwgXCI6aG9zdFwiLCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSlcIik7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCAkc2hhZG93LWVsZW1lbnQsIGNvbW1hKTtcbiAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBkb2VzIG5vdCBjb250YWluIGhvc3QgYXQgYWxsIGl0IGlzIGVpdGhlciBhIHNoYWRvd1xuICAgICAgLy8gb3Igbm9ybWFsIGVsZW1lbnQgc28gYXBwZW5kIGJvdGggdGhlIGRpciBjaGVjayBhbmQgaG9zdC1jb250ZXh0XG4gICAgfSBAZWxzZSB7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIiN7JGFkZEhvc3RTZWxlY3Rvcn0gI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KSAjeyRzZWxlY3Rvcn1cIiwgY29tbWEpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gJGxpc3Q7XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIGNvbG9yIGZ1bmN0aW9ucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMuZnVuY3Rpb25zLmNvbG9yLnNjc3NcbiAqL1xuXG4vLyBHZXRzIHRoZSBhY3RpdmUgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSBhIHZhcmlhdGlvbi4gQWxwaGEgaXMgb3B0aW9uYWwuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhhbXBsZSB1c2FnZTpcbi8vIGN1cnJlbnQtY29sb3IoYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLWJhc2UpXG4vLyBjdXJyZW50LWNvbG9yKGNvbnRyYXN0LCAwLjEpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMSlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY3VycmVudC1jb2xvcigkdmFyaWF0aW9uLCAkYWxwaGE6IG51bGwpIHtcbiAgQGlmICRhbHBoYSA9PSBudWxsIHtcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZ2JhKHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259LXJnYiksICN7JGFscGhhfSk7XG4gIH1cbn1cblxuLy8gR2V0cyB0aGUgc3BlY2lmaWMgY29sb3IncyBjc3MgdmFyaWFibGUgZnJvbSB0aGUgbmFtZSBhbmQgdmFyaWF0aW9uLiBBbHBoYS9yZ2IgYXJlIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSkgPT4gdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpXG4vLyBpb24tY29sb3Ioc2Vjb25kYXJ5LCBjb250cmFzdCkgPT4gdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdClcbi8vIGlvbi1jb2xvcihwcmltYXJ5LCBiYXNlLCAwLjUpID0+IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpLCAwLjUpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGlvbi1jb2xvcigkbmFtZSwgJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsLCAkcmdiOiBudWxsKSB7XG4gICR2YWx1ZXM6IG1hcC1nZXQoJGNvbG9ycywgJG5hbWUpO1xuICAkdmFsdWU6IG1hcC1nZXQoJHZhbHVlcywgJHZhcmlhdGlvbik7XG4gICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX0tI3skdmFyaWF0aW9ufTtcblxuICBAaWYgKCR2YXJpYXRpb24gPT0gYmFzZSkge1xuICAgICR2YXJpYWJsZTogLS1pb24tY29sb3ItI3skbmFtZX07XG4gIH1cblxuICBAaWYgKCRhbHBoYSkge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICBAcmV0dXJuIHJnYmEodmFyKCN7JHZhcmlhYmxlfS1yZ2IsICR2YWx1ZSksICRhbHBoYSk7XG4gIH1cbiAgQGlmICgkcmdiKSB7XG4gICAgJHZhbHVlOiBjb2xvci10by1yZ2ItbGlzdCgkdmFsdWUpO1xuICAgICR2YXJpYWJsZTogI3skdmFyaWFibGV9LXJnYjtcbiAgfVxuXG4gIEByZXR1cm4gdmFyKCN7JHZhcmlhYmxlfSwgJHZhbHVlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZSgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludCgkY29sb3IpIHtcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xufVxuXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gY29sb3ItdG8tcmdiLWxpc3QoJGNvbG9yKSB7XG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRXh0cmFjdGVkIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuXG5AbWl4aW4gaW5wdXQtY292ZXIoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIG51bGwsIG51bGwsIDApO1xuICBAaW5jbHVkZSBtYXJnaW4oMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG59XG5cbkBtaXhpbiB2aXN1YWxseS1oaWRkZW4oKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbkBtaXhpbiB0ZXh0LWluaGVyaXQoKSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuQG1peGluIGJ1dHRvbi1zdGF0ZSgpIHtcbiAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIGNvbnRlbnQ6IFwiXCI7XG5cbiAgb3BhY2l0eTogMDtcbn1cblxuLy8gRm9udCBzbW9vdGhpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8vIEdldCB0aGUga2V5IGZyb20gYSBtYXAgYmFzZWQgb24gdGhlIGluZGV4XG5AZnVuY3Rpb24gaW5kZXgtdG8ta2V5KCRtYXAsICRpbmRleCkge1xuICAka2V5czogbWFwLWtleXMoJG1hcCk7XG5cbiAgQHJldHVybiBudGgoJGtleXMsICRpbmRleCk7XG59XG5cblxuLy8gQnJlYWtwb2ludCBNaXhpbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJHNjcmVlbi1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcblxuICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2Zcbi8vIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXHQvLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVx0Ly8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChtZCwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xuICAkbWF4OiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtYXggYW5kICRtYXggPiAwLCAkbWF4IC0gLjAyLCBudWxsKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cbi8vIFRleHQgRGlyZWN0aW9uIC0gbHRyIC8gcnRsXG4vL1xuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xuLy8gdG8gb3ZlcnJpZGUgbHRyIGRlZmF1bHRzLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbXVsdGktZGlyKCkge1xuICBAY29udGVudDtcblxuICAvLyAkcm9vdDogI3smfTtcbiAgLy8gQGF0LXJvb3QgW2Rpcl0ge1xuICAvLyAgICN7JHJvb3R9IHtcbiAgLy8gICAgIEBjb250ZW50O1xuICAvLyAgIH1cbiAgLy8gfVxufVxuXG5AbWl4aW4gcnRsKCkge1xuICAkcm9vdDogI3smfTtcblxuICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcIltkaXI9cnRsXVwiKX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsdHIoKSB7XG4gIEBjb250ZW50O1xufVxuXG5cbi8vIFNWRyBCYWNrZ3JvdW5kIEltYWdlIE1peGluXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRzdmcsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgJHVybDogdXJsLWVuY29kZSgkc3ZnKTtcbiAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcblxuICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xuICAgICRmbGlwcGVkLXVybDogJHN2ZztcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcblxuICAgIEBpbmNsdWRlIGx0ciAoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gIEBpZiAkc3RhcnQgPT0gMCBhbmQgJGVuZCA9PSAwIHtcbiAgICAjeyRwcm9wfS1sZWZ0OiAkc3RhcnQ7XG4gICAgI3skcHJvcH0tcmlnaHQ6ICRlbmQ7XG5cbiAgfSBAZWxzZSB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gICAgQGF0LXJvb3Qge1xuICAgICAgQHN1cHBvcnRzICgobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSkge1xuICAgICAgICAmIHtcbiAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tbGVmdDogdW5zZXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpZiAkZW5kICE9IG51bGwge1xuICAgICAgICAgICAgI3skcHJvcH0tcmlnaHQ6IHVuc2V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcbiAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBwcm9wZXJ0eSBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtib29sZWFufSAkY29udGVudCBpbmNsdWRlIGNvbnRlbnQgb3IgdXNlIGRlZmF1bHRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eSgkcHJvcCwgJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XG4gICN7JHByb3B9LXRvcDogJHRvcDtcbiAgI3skcHJvcH0tYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgcGFkZGluZyBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKHBhZGRpbmcsICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBwYWRkaW5nIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBhZGRpbmcoJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcbn1cblxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XG4gIEBpbmNsdWRlIHByb3BlcnR5KG1hcmdpbiwgJHRvcCwgJGVuZCwgJGJvdHRvbSwgJHN0YXJ0KTtcbn1cblxuLy8gQWRkIHBvc2l0aW9uIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kIC0gYW1vdW50IHRvIGxlZnQ6IDA7IGVuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XG4gIEBpZiAkc3RhcnQgPT0gJGVuZCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBsZWZ0OiAkc3RhcnQ7XG4gICAgICByaWdodDogJGVuZDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGxlZnQ6ICRlbmQ7XG4gICAgICByaWdodDogJHN0YXJ0O1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcbiAgdG9wOiAkdG9wO1xuICBib3R0b206ICRib3R0b207XG59XG5cbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShib3JkZXIsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBib3JkZXIgcmFkaXVzIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlci1yYWRpdXMoJHRvcC1zdGFydCwgJHRvcC1lbmQ6ICR0b3Atc3RhcnQsICRib3R0b20tZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLXN0YXJ0OiAkdG9wLWVuZCkge1xuICBAaWYgJHRvcC1zdGFydCA9PSAkdG9wLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLWVuZCBhbmQgJHRvcC1zdGFydCA9PSAkYm90dG9tLXN0YXJ0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkdG9wLXN0YXJ0O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLWVuZDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tc3RhcnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRpciAtIERpcmVjdGlvbiBvbiBMVFJcbkBtaXhpbiBkaXJlY3Rpb24oJGRpcikge1xuICAkb3RoZXItZGlyOiBudWxsO1xuXG4gIEBpZiAkZGlyID09IGx0ciB7XG4gICAgJG90aGVyLWRpcjogcnRsO1xuICB9IEBlbHNlIHtcbiAgICAkb3RoZXItZGlyOiBsdHI7XG4gIH1cblxuICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgZGlyZWN0aW9uOiAkZGlyO1xuICB9XG4gIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XG4gIH1cbn1cblxuLy8gQWRkIGZsb2F0IGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXG4vLyBAcGFyYW0ge3N0cmluZ30gJGRlY29yYXRvciAtICFpbXBvcnRhbnRcbkBtaXhpbiBmbG9hdCgkc2lkZSwgJGRlY29yYXRvcjogbnVsbCkge1xuICBAaWYgJHNpZGUgPT0gc3RhcnQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkc2lkZSA9PSBlbmQge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgZmxvYXQ6ICRzaWRlICRkZWNvcmF0b3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xuICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQgb3IgJGhvcml6b250YWwgPT0gZW5kIHtcbiAgICAkaG9yaXpvbnRhbC1sdHI6IG51bGw7XG4gICAgJGhvcml6b250YWwtcnRsOiBudWxsO1xuICAgIEBpZiAkaG9yaXpvbnRhbCA9PSBzdGFydCB7XG4gICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IHJpZ2h0O1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGhvcml6b250YWwtbHRyOiByaWdodDtcbiAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1sdHIgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNmb3JtLW9yaWdpbigkeC1heGlzLCAkeS1heGlzOiBudWxsKSB7XG4gIEBpZiAkeC1heGlzID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0ICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcbiAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkeC1heGlzICR5LWF4aXM7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMTAwJSAtICN7JHgtYXhpc30pICR5LWF4aXM7XG4gICAgfVxuICB9XG59XG5cbi8vIEFkZCB0cmFuc2Zvcm0gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRyYW5zZm9ybXMgLSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0cmFuc2Zvcm1zXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XG4gICRleHRyYTogbnVsbDtcblxuICAkeDogbnVsbDtcbiAgJGx0ci10cmFuc2xhdGU6IG51bGw7XG4gICRydGwtdHJhbnNsYXRlOiBudWxsO1xuXG4gIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xuICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJ3RyYW5zbGF0ZTNkKCcpO1xuICAgICAgJHRyYW5zZm9ybTogc3RyLXJlcGxhY2UoJHRyYW5zZm9ybSwgJyknKTtcblxuICAgICAgJGNvb3JkaW5hdGVzOiBzdHItc3BsaXQoJHRyYW5zZm9ybSwgJywnKTtcblxuICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xuICAgICAgJHk6IG50aCgkY29vcmRpbmF0ZXMsIDIpO1xuICAgICAgJHo6IG50aCgkY29vcmRpbmF0ZXMsIDMpO1xuXG4gICAgICAkbHRyLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoJHgsICR5LCAkeik7XG4gICAgICAkcnRsLXRyYW5zbGF0ZTogdHJhbnNsYXRlM2QoY2FsYygtMSAqICN7JHh9KSwgJHksICR6KTtcbiAgICB9IEBlbHNlIHtcbiAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XG4gICAgICAgICRleHRyYTogJHRyYW5zZm9ybTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICAkZXh0cmE6ICRleHRyYSAkdHJhbnNmb3JtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpZiAkeCA9PSAnMCcgb3IgJHggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm06ICRydGwtdHJhbnNsYXRlICRleHRyYTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTIGZyb20gZGlmZmVyZW50IGNvbXBvbmVudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9ncmlkL2dyaWQubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy9jb21wb25lbnRzL2l0ZW0vaXRlbS5taXhpbnMuc2Nzc1xuICovXG5cbi8vIFJlc3BvbnNpdmUgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIENyZWF0ZXMgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGdyaWQgYmFzZWQgb24gdGhlIHNjcmVlbiBzaXplXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG1ha2UtZ3JpZC13aWR0aHMoJHdpZHRoczogJGdyaWQtd2lkdGhzLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50LCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIHdpZHRoOiAkd2lkdGg7XG4gICAgfVxuICB9XG5cbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5cbi8vIEFkZHMgcGFkZGluZyB0byB0aGUgZWxlbWVudCBiYXNlZCBvbiBicmVha3BvaW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJHBhZGRpbmdzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XG5cbiAgICAgIEBpbmNsdWRlIHBhZGRpbmcoJHBhZGRpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEl0ZW0gTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gaXRlbS1wdXNoLXN2Zy11cmwoJGZpbGwpIHtcbiAgJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnOiBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMjAnPjxwYXRoIGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonIGZpbGw9JyN7JGZpbGx9Jy8+PC9zdmc+XCI7XG5cbiAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCB0cnVlKTtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hdGhcIiBhcyBtYXRoO1xuXG4vKipcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgNi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXNoYWRlLXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogNDglKSB7XG4gICAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAkcGVyY2VudCk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCB3aGl0ZSB0byBjcmVhdGUgaXRzIHRpbnQuXG4vLyBEZWZhdWx0IHRvIGJvb3RzdHJhcCBsZXZlbCAtMTAuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci10aW50LXBlcmNlbnQoJGNvbG9yLCAkcGVyY2VudDogODAlKSB7XG4gICAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAkcGVyY2VudCk7XG59XG5cbi8vIElvbmljIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxuLy8gY29sb3JzIG1hcFxuXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMsICR0aGVtZSkge1xuICAgICRjb2xvci10aGVtZXM6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yLW5hbWUpO1xuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvci10aGVtZXMsICR0aGVtZSk7XG5cbiAgICBAaWYgJHRoZW1lID09ICdkYXJrJyB7XG4gICAgICAgICRiYXNlOiBtaXgobWFwLWdldCgkY29sb3ItdGhlbWVzLCAnbGlnaHQnKSwgd2hpdGUsIDgwJSkgIWRlZmF1bHQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyaWFudHMoJGNvbG9yLW5hbWUsICRiYXNlKTtcbn1cblxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSkge1xuICAgICRjb250cmFzdDogZ2V0X2NvbnRyYXN0X2NvbG9yKCRiYXNlKTtcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRiYXNlKTtcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQtcGVyY2VudCgkYmFzZSk7XG5cbiAgICAtLSN7JGNvbG9yLW5hbWV9OiAjeyRiYXNlfTtcbiAgICAtLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgLS0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcbiAgICAtLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG5cbiAgICAvLyBJbnRlcm5hbCBpb25pYyB1c2Ugb25seS5cbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfTogdmFyKC0tI3skY29sb3ItbmFtZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRiYXNlKX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2I6ICN7Y29sb3ItdG8tcmdiLWxpc3QoJGNvbnRyYXN0KX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGU6ICN7JHNoYWRlfTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcblxuICAgIC5pb24tY29sb3ItI3skY29sb3ItbmFtZX0ge1xuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWJhc2UpO1xuICAgICAgICAtLWlvbi1jb2xvci1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1yZ2IpO1xuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1zaGFkZSk7XG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWZvY3VzKCkge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgQGluY2x1ZGUgY29yZS1mb2N1cy1zdHlsZSgpO1xuICAgIH1cbn1cblxuQG1peGluIGNvcmUtZm9jdXMtc3R5bGUoKSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIHZhcigtLWExMXktZm9jdXMtd2lkdGgpIDFweCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcbiAgICAvLyBib3JkZXI6IHZhcigtLWExMXktZm9jdXMtd2lkdGgpIHNvbGlkIHZhcigtLWExMXktZm9jdXMtY29sb3IpO1xufVxuXG5AbWl4aW4gY29yZS10cmFuc2l0aW9uKCRwcm9wZXJ0aWVzOiBhbGwsICRkdXJhdGlvbjogNTAwbXMsICR0aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0KSB7XG4gICAgJHRyYW5zaXRpb25zOiAoKTtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgJHRyYW5zaXRpb25zOiBhcHBlbmQoJHRyYW5zaXRpb25zLCAkcHJvcGVydHkgJGR1cmF0aW9uICR0aW1pbmctZnVuY3Rpb24sIGNvbW1hKTtcbiAgICB9XG5cbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9ucztcbiAgICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG59XG5cbkBtaXhpbiBzci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLyoqXG4gKiBTYW1lIGFzIGl0ZW0tcHVzaC1zdmctdXJsIGJ1dCBhZG1pdHMgZmxpcC1ydGxcbiAqL1xuQG1peGluIHB1c2gtYXJyb3ctY29sb3IoJGZpbGw6IDYyNjI2MiwgJGZsaXAtcnRsOiBmYWxzZSkge1xuICAgICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gICAgQGluY2x1ZGUgc3ZnLWJhY2tncm91bmQtaW1hZ2UoJGl0ZW0tZGV0YWlsLXB1c2gtc3ZnLCAkZmxpcC1ydGwpO1xufVxuXG5AbWl4aW4gYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCAkcHggJHR5cGUgJGNvbG9yLCBudWxsKTtcbn1cblxuQG1peGluIGJvcmRlci1lbmQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XG4gICAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChib3JkZXIsIG51bGwsICRweCAkdHlwZSAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1zdGFydCgkcHgsICR0eXBlLCAkY29sb3IpIHtcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JHB4fSk7XG5cbiAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24sICR0eXBlLCAkY29sb3IpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogbnVsbDtcblxuICAgIEBpZiAoJGVuZCkge1xuICAgICAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuICAgIH1cbiAgICBAaWYgKCRzdGFydCkge1xuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRlbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLW1hcmdpbi1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBhZGRpbmctc3RhcnQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0KSArICN7JGVuZH0pO1xuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xufVxuXG5AbWl4aW4gc2FmZS1hcmVhLXBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBvc2l0aW9uKCR0b3AsICRzYWZlLWFyZWEtZW5kLCAkYm90dG9tLCAkc2FmZS1hcmVhLXN0YXJ0KTtcbn1cblxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgfVxuICAgIGgyLCAuaXRlbS1oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtaXhpbiBkYXJrbW9kZSgpIHtcbiAgICAkcm9vdDogI3smfTtcblxuICAgIEBhdC1yb290ICN7YWRkLXJvb3Qtc2VsZWN0b3IoJHJvb3QsIFwiaHRtbC5kYXJrXCIpfSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XG4gICAgZmxleDogMCAwICR3aWR0aDtcbiAgICBtaW4td2lkdGg6ICRtaW4td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIC0tdmVydGljYWwtbWFyZ2luOiAxMHB4O1xuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikgLSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbikpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pKTtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIHZhcigtLWhvcml6b250YWwtbWFyZ2luKTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgICAgICAgICAgIC0taG9yaXpvbnRhbC1tYXJnaW46IDZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ29sb3IgbWl4aW5zLlxuQGZ1bmN0aW9uIGdldF9icmlnaHRuZXNzKCRjb2xvcikge1xuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xufVxuXG4vLyBHZXQgdGhlIGJldHRlciBjb2xvciBjb250cmFzdCB1c2luZyBXQ0FHIGFsZ29yeXRobS5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3IoJGNvbG9yKSB7XG4gICAgJGx1bWlhbmNlOiBsdW1pbmFuY2UoJGNvbG9yKTtcblxuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDEuXG4gICAgJHdoaXRlQ29udHJhc3Q6ICgkbHVtaWFuY2UgKyAwLjA1KSAvICgxICsgMC4wNSk7XG4gICAgLy8gV2hpdGUgbHVtaWFuY2UgaXMgMC5cbiAgICAkYmxhY2tDb250cmFzdDogKDAuMDUpIC8gKCRsdW1pYW5jZSArIDAuMDUpO1xuXG4gICAgQHJldHVybiBpZigkd2hpdGVDb250cmFzdCA8ICRibGFja0NvbnRyYXN0LCB3aGl0ZSwgYmxhY2spO1xufVxuXG4vLyBDb2xvciBjb250cmFzdCB1c2luZyB5aXEgYXByb3hpbWF0aW9uIHdpdGggMTUwIHRocmVzaG9sZC5cbkBmdW5jdGlvbiBnZXRfY29udHJhc3RfY29sb3JfeWlxKCRjb2xvciwgJGRhcms6IGJsYWNrLCAkbGlnaHQ6IHdoaXRlKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkeWlxOiAoKCRyICogMjk5KSArICgkZyAqIDU4NykgKyAoJGIgKiAxMTQpKSAvIDEwMDA7XG5cbiAgICBAcmV0dXJuIGlmKCR5aXEgPj0gMTI4LCAkZGFyaywgJGxpZ2h0KTtcbn1cblxuLy8gV0NBRyBjb250cmFzdCBhbGdvcml0aG1cbkBmdW5jdGlvbiBjaGVjay1jb250cmFzdCgkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgICAkZm9yZWdyb3VuZEx1bWlhbmNlOiBsdW1pbmFuY2UoJGZvcmVncm91bmQpO1xuICAgICRiYWNrZ3JvdW5kTHVtaW5hbmNlOiBsdW1pbmFuY2UoJGJhY2tncm91bmQpO1xuXG4gICAgQGlmICgkYmFja2dyb3VuZEx1bWluYW5jZSA8ICRmb3JlZ3JvdW5kTHVtaWFuY2UpIHtcbiAgICAgICAgQHJldHVybiAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KSAvICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSk7XG4gICAgfSBAZWxzZSB7XG4gICAgICAgIEByZXR1cm4gKCRmb3JlZ3JvdW5kTHVtaWFuY2UgKyAwLjA1KSAvICgkYmFja2dyb3VuZEx1bWluYW5jZSArIDAuMDUpO1xuICAgIH1cbn1cblxuQGZ1bmN0aW9uIGx1bWluYW5jZSgkY29sb3IpIHtcbiAgICAkcjogcmVkKCRjb2xvcik7XG4gICAgJGc6IGdyZWVuKCRjb2xvcik7XG4gICAgJGI6IGJsdWUoJGNvbG9yKTtcblxuICAgICRyOiBjb21wb25lbnQtbHVtaW5hbmNlKCRyKTtcbiAgICAkZzogY29tcG9uZW50LWx1bWluYW5jZSgkZyk7XG4gICAgJGI6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGIpO1xuXG4gICAgQHJldHVybiAkciAqIDAuMjEyNiArICRnICogMC43MTUyICsgJGIgKiAwLjA3MjI7XG59XG5cbkBmdW5jdGlvbiBjb21wb25lbnQtbHVtaW5hbmNlKCR2YWx1ZSkge1xuICAgICR2YWx1ZTogJHZhbHVlIC8gMjU1O1xuXG4gICAgQGlmICgkdmFsdWUgPD0gMC4wMzkyOCkge1xuICAgICAgICBAcmV0dXJuICR2YWx1ZSAvIDEyLjkyO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuIG1hdGgucG93KCgkdmFsdWUgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgICB9XG59XG4iLCIvKlxuICogQXBwIEN1c3RvbSBBcHAgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGN1c3RvbSBhcHAgdmFyaWFibGVzLlxuICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kd2hpdGU6ICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICAgICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICAgICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICAgICNkZWUyZTYgIWRlZmF1bHQ7IC8vIFN0cm9rZVxuJGdyYXktNDAwOiAgICAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAgICAjOGY5NTllICFkZWZhdWx0OyAvLyBTdHJva2Ugb24gaW5wdXRzXG4kZ3JheS02MDA6ICAgICM2YTczN2IgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICAgICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICAgICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICAgICMxZDIxMjUgIWRlZmF1bHQ7IC8vIENvcHkgdGV4dFxuJGJsYWNrOiAgICAgICAjMDAwMDAwICFkZWZhdWx0OyAvLyBBdm9pZCB1c2FnZVxuXG4kYmx1ZTogICAgICAgICMwZjZjYmYgIWRlZmF1bHQ7XG4kY3lhbjogICAgICAgICMwMDgxOTYgIWRlZmF1bHQ7IC8vIE5vdCB1c2VkLlxuJGdyZWVuOiAgICAgICAjMzU3YTMyICFkZWZhdWx0O1xuJHJlZDogICAgICAgICAjY2EzMTIwICFkZWZhdWx0O1xuJHllbGxvdzogICAgICAjZjBhZDRlICFkZWZhdWx0O1xuXG4kYnJhbmQtY29sb3I6ICNmZjc1MTggIWRlZmF1bHQ7XG5cbiR0ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcms6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0ZXh0LWNvbG9yLWRhcmstcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yLWRhcmspICFkZWZhdWx0O1xuXG4kYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcms6ICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7IC8vICMxYTFhMWFcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGlvbi1pdGVtLWJhY2tncm91bmQ6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyazogJGdyYXktOTAwICFkZWZhdWx0O1xuJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyay1yZ2I6IGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmspICFkZWZhdWx0O1xuXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAkcmVkICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRtZWRpdW06ICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kY29sb3JzOiAgKFxuICAgIHByaW1hcnk6IChsaWdodDogJHByaW1hcnksIGRhcms6ICRwcmltYXJ5KSxcbiAgICBzZWNvbmRhcnk6IChsaWdodDogJHNlY29uZGFyeSwgZGFyazogJGdyYXktNzAwKSxcbiAgICBzdWNjZXNzOiAobGlnaHQ6ICRzdWNjZXNzKSxcbiAgICB3YXJuaW5nOiAobGlnaHQ6ICR3YXJuaW5nKSxcbiAgICBkYW5nZXI6ICAobGlnaHQ6ICRkYW5nZXIpLFxuICAgIGluZm86IChsaWdodDogJGluZm8pLFxuICAgIGxpZ2h0OiAobGlnaHQ6ICRsaWdodCwgZGFyazogJGRhcmspLFxuICAgIG1lZGl1bTogKGxpZ2h0OiAkbWVkaXVtLCBkYXJrOiAkZ3JheS0yMDApLFxuICAgIGRhcms6IChsaWdodDogJGRhcmssIGRhcms6ICRsaWdodCksXG4pICFkZWZhdWx0O1xuXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG5cbi8vIFRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcbiAgICB4czogMCxcbiAgICBzbTogNTc2cHgsXG4gICAgbWQ6IDc2OHB4LFxuICAgIGxnOiA5OTJweCxcbiAgICB0YWJsZXQ6IDk5MnB4LFxuICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xuJGNvcmUtZGQtcXVlc3Rpb24tY29sb3JzOiAjRkZGRkZGLCAjQjBDNERFLCAjRENEQ0RDLCAjRDhCRkQ4LCAjODdDRUZBLCAjREFBNTIwLCAjRkZENzAwLCAjRjBFNjhDICFkZWZhdWx0O1xuJGNvcmUtdGV4dC1oaWdodGxpZ2h0LWJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG5cbiRjb3JlLWZpeGVkLXVybDogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1kYXNoYm9hcmQtbG9nbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZm9ybWF0LXRleHQtbmV2ZXItc2hvcnRlbjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWhpZGUtY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWhpZGUtcHJvZ3Jlc3Mtb24tc2VjdGlvbi1zZWxlY3RvcjogZmFsc2UgIWRlZmF1bHQ7XG5cbiRjb3JlLWNvdXJzZS1oaWRlLXRodW1iLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS10aHVtYi1vbi1jYXJkcy1iYWNrZ3JvdW5kOiBudWxsICFkZWZhdWx0O1xuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIGxvZ2luIHBhZ2UuXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZS1kYXJrOiAkY29yZS1sb2dpbi1idXR0b24tb3V0bGluZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3I6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1mb3Jnb3QtcGFzc3dvcmQ6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1uZWVkLWhlbHA6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4taGlkZS1xcmNvZGU6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIG1vcmUgcGFnZS4gKGRlcHJlY2F0ZWQgb24gNC4wKVxuJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XG5cbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdXNlciBwYWdlLlxuJGNvcmUtdXNlci1oaWRlLXNpdGVpbmZvOiAkY29yZS1tb3JlLWhpZGUtc2l0ZWluZm8gIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZW5hbWU6ICRjb3JlLW1vcmUtaGlkZS1zaXRlbmFtZSAhZGVmYXVsdDtcbiRjb3JlLXVzZXItaGlkZS1zaXRldXJsOiAkY29yZS1tb3JlLWhpZGUtc2l0ZXVybCAhZGVmYXVsdDtcblxuLy8gQWN0aXZpdHkgaWNvbiBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRhY3Rpdml0eS1pY29uLWNvbG9yczogKFxuICAgIGFkbWluaXN0cmF0aW9uOiAjNWQ2M2Y2LFxuICAgIGFzc2Vzc21lbnQ6ICNlYjY2YTIsXG4gICAgY29sbGFib3JhdGlvbjogI2Y3NjM0ZCxcbiAgICBjb21tdW5pY2F0aW9uOiAjMTFhNjc2LFxuICAgIGNvbnRlbnQ6ICMzOTliZTIsXG4gICAgaW50ZXJmYWNlOiAjYTM3OGZmXG4pICFkZWZhdWx0O1xuXG4vLyBDYWxlbmRhciBldmVudCBjYXRlZ29yeSBiYWNrZ3JvdW5kIGNvbG9ycy5cbiRjYWxlbmRhci1ldmVudC1jYXRlZ29yeS1jb2xvcnM6IChcbiAgICBjYXRlZ29yeTogIzhlMjRhYSxcbiAgICBjb3Vyc2U6ICRyZWQsXG4gICAgZ3JvdXA6ICR5ZWxsb3csXG4gICAgdXNlcjogJGJsdWUsXG4gICAgc2l0ZTogJGdyZWVuXG4pICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn50aGVtZS9nbG9iYWxzXCI7XG5cbjpob3N0IHtcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgLS1vZGQtY2VsbC1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7XG4gICAgLS1vZGQtY2VsbC1ob3ZlcjogdmFyKC0tZ3JheS0yMDApO1xuICAgIC0tZXZlbi1jZWxsLWJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcbiAgICAtLWV2ZW4tY2VsbC1ob3ZlcjogdmFyKC0tbGlnaHQpO1xuICAgIC0taWNvbi1jb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UpO1xuICAgIC0tbW9kLWljb24tZmlsdGVyOiBicmlnaHRuZXNzKDApO1xuXG4gICAgLm9kZCB7XG4gICAgICAgIC0tY2VsbC1iYWNrZ3JvdW5kOiB2YXIoLS1vZGQtY2VsbC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgLS1jZWxsLWhvdmVyOiB2YXIoLS1vZGQtY2VsbC1ob3Zlcik7XG4gICAgfVxuXG4gICAgLmV2ZW4ge1xuICAgICAgICAtLWNlbGwtYmFja2dyb3VuZDogdmFyKC0tZXZlbi1jZWxsLWJhY2tncm91bmQpO1xuICAgICAgICAtLWNlbGwtaG92ZXI6IHZhcigtLWV2ZW4tY2VsbC1ob3Zlcik7XG4gICAgfVxuXG59XG5cbjpob3N0LWNvbnRleHQoaHRtbC5kYXJrKSB7XG4gICAgLS1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tZ3JheS05MDApO1xuICAgIC0tb2RkLWNlbGwtYmFja2dyb3VuZDogdmFyKC0tZ3JheS04MDApO1xuICAgIC0tb2RkLWNlbGwtaG92ZXI6IHZhcigtLWdyYXktNjAwKTtcbiAgICAtLWV2ZW4tY2VsbC1iYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTkwMCk7XG4gICAgLS1ldmVuLWNlbGwtaG92ZXI6IHZhcigtLWdyYXktNzAwKTtcbiAgICAtLWljb24tY29sb3I6IHZhcigtLWdyYXktMjAwKTtcbiAgICAtLW1vZC1pY29uLWZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi5jb3JlLWdyYWRlcy10YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcblxuICAgIHRyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgdGgsIHRkIHtcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZyg4cHgsIDhweCwgOHB4LCBudWxsKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuXG4gICAgdGhlYWQgdGgge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIHRoZWFkICNncmFkZWl0ZW0ge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nKG51bGwsIG51bGwsIG51bGwsIDI0cHgpO1xuICAgIH1cblxuICAgIHRib2R5IHRoIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuXG4gICAgdGJvZHkgdHIuY29yZS1ib2xkIHRoIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIH1cblxuICAgIHRib2R5ICNncmFkZWl0ZW0ge1xuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nKG51bGwsIG51bGwsIG51bGwsIDRweCk7XG4gICAgfVxuXG4gICAgLmNvcmUtZ3JhZGVzLXRhYmxlLWdyYWRlaXRlbSB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmcobnVsbCwgbnVsbCwgbnVsbCwgNHB4KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgJi5jb2x1bW4taXRlbW5hbWUge1xuICAgICAgICAgICAgQGluY2x1ZGUgcGFkZGluZyhudWxsLCBudWxsLCBudWxsLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvcmUtbW9kLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgLS1zaXplOiAxNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLWZpbHRlcjogdmFyKC0tbW9kLWljb24tZmlsdGVyKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYXJnaW4obnVsbCwgbnVsbCwgbnVsbCwgNHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5leHBhbmRhYmxlLXN0YXR1cy1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zaXplKTtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKDAsIDJweCk7XG4gICAgICAgICAgICBAaW5jbHVkZSBjb3JlLXRyYW5zaXRpb24odHJhbnNmb3JtLCAyMDBtcyk7XG5cbiAgICAgICAgICAgICYuZXhwYW5kYWJsZS1zdGF0dXMtaWNvbi1leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB2YXIoLS1yb3RhdGUtZXhwYW5kYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5jb3JlLWdyYWRlcy10YWJsZS1mZWVkYmFjayB7XG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmcobnVsbCwgbnVsbCwgbnVsbCwgNHB4KTtcblxuICAgICAgICAubm8tb3ZlcmZsb3cge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC5jb3JlLWdyYWRlcy10YWJsZS1ncmFkZSB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHBhZGRpbmcobnVsbCwgNHB4LCBudWxsLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3JlLWdyYWRlcy10YWJsZS1sZWFkZXIge1xuICAgICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAuaW9uLW5vLWJvcmRlciB7XG4gICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kaW1tZWRfdGV4dCxcbiAgICAuaGlkZGVuIHtcbiAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgfVxuXG4gICAgLm9kZCwgLmV2ZW4ge1xuICAgICAgICB0ZCwgdGgsIHRoW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3JlLWdyYWRlcy1ncmFkZS1jbGlja2FibGUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGQsIHRoLCB0aFthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWhvdmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCwgaW9uLWl0ZW06OnBhcnQobmF0aXZlKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICYuc3VtbWFyeSAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xuXG4gICAgLmNvcmUtZ3JhZGVzLXRhYmxlIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgfVxuXG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~grades-course-lazy-module~grades-courses-lazy-module.js.map