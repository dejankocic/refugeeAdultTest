(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/folder/pages/index/index.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/folder/pages/index/index.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [collapsible]=\"!subfolder\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>\n                <core-format-text [text]=\"title\" contextLevel=\"module\" [contextInstanceId]=\"module?.id\" [courseId]=\"courseId\">\n                </core-format-text>\n            </h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <!-- The buttons defined by the component will be added in here. -->\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"limited-width\">\n    <ion-refresher slot=\"fixed\" [disabled]=\"subfolder || activityComponent?.showLoading\"\n        (ionRefresh)=\"activityComponent?.doRefresh($event.target)\">\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n    </ion-refresher>\n\n    <addon-mod-folder-index [module]=\"module\" [courseId]=\"courseId\" [folderInstance]=\"folderInstance\" [subfolder]=\"subfolder\"\n        (dataRetrieved)=\"updateData($event)\">\n    </addon-mod-folder-index>\n</ion-content>\n");

/***/ }),

/***/ "./src/addons/mod/folder/folder-lazy.module.ts":
/*!*****************************************************!*\
  !*** ./src/addons/mod/folder/folder-lazy.module.ts ***!
  \*****************************************************/
/*! exports provided: AddonModFolderLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFolderLazyModule", function() { return AddonModFolderLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.module */ "./src/addons/mod/folder/components/components.module.ts");
/* harmony import */ var _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index/index.page */ "./src/addons/mod/folder/pages/index/index.page.ts");
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
        path: ':courseId/:cmId/:hash',
        component: _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__["AddonModFolderIndexPage"],
    },
    {
        path: ':courseId/:cmId',
        redirectTo: ':courseId/:cmId/',
        pathMatch: 'full',
    },
];
let AddonModFolderLazyModule = class AddonModFolderLazyModule {
};
AddonModFolderLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["AddonModFolderComponentsModule"],
        ],
        declarations: [
            _pages_index_index_page__WEBPACK_IMPORTED_MODULE_5__["AddonModFolderIndexPage"],
        ],
    })
], AddonModFolderLazyModule);



/***/ }),

/***/ "./src/addons/mod/folder/pages/index/index.page.ts":
/*!*********************************************************!*\
  !*** ./src/addons/mod/folder/pages/index/index.page.ts ***!
  \*********************************************************/
/*! exports provided: AddonModFolderIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModFolderIndexPage", function() { return AddonModFolderIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/classes/main-activity-page */ "./src/core/features/course/classes/main-activity-page.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/index */ "./src/addons/mod/folder/components/index/index.ts");
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
 * Page that displays a folder.
 */
let AddonModFolderIndexPage = class AddonModFolderIndexPage extends _features_course_classes_main_activity_page__WEBPACK_IMPORTED_MODULE_2__["CoreCourseModuleMainActivityPage"] {
    /**
     * @inheritdoc
     */
    ngOnInit() {
        var _a;
        super.ngOnInit();
        this.folderInstance = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('folderInstance');
        this.subfolder = _services_navigator__WEBPACK_IMPORTED_MODULE_3__["CoreNavigator"].getRouteParam('subfolder');
        this.title = ((_a = this.subfolder) === null || _a === void 0 ? void 0 : _a.filename) || this.module.name;
    }
};
AddonModFolderIndexPage.propDecorators = {
    activityComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_index__WEBPACK_IMPORTED_MODULE_4__["AddonModFolderIndexComponent"],] }]
};
AddonModFolderIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-folder-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/folder/pages/index/index.html")).default,
    })
], AddonModFolderIndexPage);



/***/ })

}]);
//# sourceMappingURL=folder-lazy-module.js.map