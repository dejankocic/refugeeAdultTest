(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-site-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>\n            <h1>{{ 'core.login.connecttomoodle' | translate }}</h1>\n        </ion-title>\n\n        <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n    <div class=\"list-item-limited-width\">\n        <div class=\"ion-text-center ion-padding ion-margin-bottom core-login-site-logo\" [class.hidden]=\"hasSites || enteredSiteUrl\">\n            <img src=\"assets/img/login_logo.png\" class=\"avatar-full login-logo\" role=\"presentation\" alt=\"\">\n        </div>\n        <form [formGroup]=\"siteForm\" (ngSubmit)=\"connect($event, siteForm.value.siteUrl)\" *ngIf=\"!fixedSites\" #siteFormEl>\n            <!-- Form to input the site URL if there are no fixed sites. -->\n            <ng-container *ngIf=\" siteSelector=='url'\">\n                <ion-item>\n                    <ion-label position=\" stacked\">\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\n                    </ion-label>\n                    <ion-input name=\"url\" type=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\"\n                        formControlName=\"siteUrl\" [core-auto-focus]=\"showKeyboard && !showScanQR\">\n                    </ion-input>\n                </ion-item>\n            </ng-container>\n            <ng-container *ngIf=\"siteSelector != 'url'\">\n                <ion-item>\n                    <ion-label position=\"stacked\">\n                        <h2>{{ 'core.login.siteaddress' | translate }}</h2>\n                    </ion-label>\n                    <ion-input name=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\" formControlName=\"siteUrl\"\n                        [core-auto-focus]=\"showKeyboard && !showScanQR\" (ionChange)=\"searchSite($event, siteForm.value.siteUrl)\">\n                    </ion-input>\n                </ion-item>\n\n                <ion-list [class.hidden]=\"!hasSites && !enteredSiteUrl\" class=\"core-login-site-list\">\n                    <ion-item class=\"core-login-site-list-title\">\n                        <ion-label>\n                            <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\n                        </ion-label>\n                    </ion-item>\n                    <ion-item button *ngIf=\"enteredSiteUrl\" (click)=\"connect($event, enteredSiteUrl.url)\"\n                        [attr.aria-label]=\"'core.login.connect' | translate\" detail=\"true\" class=\"core-login-entered-site\">\n                        <ion-thumbnail slot=\"start\" aria-hidden=\"true\">\n                            <ion-icon name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\n                        </ion-thumbnail>\n                        <ion-label>\n                            <h2 class=\"ion-text-wrap\">{{ 'core.login.yourenteredsite' | translate }}</h2>\n                            <p>{{enteredSiteUrl.noProtocolUrl}}</p>\n                        </ion-label>\n                    </ion-item>\n\n                    <div class=\"core-login-site-list-found\" [class.hidden]=\"!hasSites\" [class.dimmed]=\"loadingSites\">\n                        <div *ngIf=\"loadingSites\" class=\"core-login-site-list-loading\">\n                            <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                        </div>\n                        <ng-container *ngFor=\"let site of sites\">\n                            <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\n                        </ng-container>\n                    </div>\n                </ion-list>\n\n                <div *ngIf=\"!hasSites && loadingSites\" class=\"core-login-site-nolist-loading\">\n                    <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\n                </div>\n            </ng-container>\n\n            <ion-item *ngIf=\"siteSelector == 'url'\">\n                <ion-label>\n                    <ion-button expand=\"block\" [disabled]=\"!siteForm.valid\" class=\"ion-text-wrap\" type=\"submit\">\n                        {{ 'core.login.connect' | translate }}\n                    </ion-button>\n                </ion-label>\n            </ion-item>\n        </form>\n\n        <ng-container *ngIf=\"fixedSites\">\n            <!-- Pick the site from a list of fixed sites. -->\n            <ion-list *ngIf=\"siteSelector == 'list'\">\n                <ion-item>\n                    <ion-label>\n                        <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\n                    </ion-label>\n                </ion-item>\n                <ion-searchbar *ngIf=\"fixedSites.length > 4\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\n                    (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.login.findyoursite' | translate\">\n                </ion-searchbar>\n                <ng-container *ngFor=\"let site of filteredSites\">\n                    <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\n                </ng-container>\n            </ion-list>\n        </ng-container>\n\n        <ng-container *ngIf=\"showScanQR && !hasSites && !enteredSiteUrl\">\n            <div class=\"ion-text-center ion-padding ion-margin-top core-login-site-qrcode-separator\">{{ 'core.login.or' | translate }}</div>\n            <ion-button expand=\"block\" fill=\"outline\" class=\"ion-margin core-login-site-qrcode\" (click)=\"showInstructionsAndScanQR()\"\n                aria-haspopup=\"dialog\">\n                <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\n                {{ 'core.scanqr' | translate }}\n            </ion-button>\n        </ng-container>\n\n        <!-- Help. -->\n        <ion-button class=\"ion-margin-top core-login-need-help core-button-as-link ion-text-wrap\" (click)=\"showHelp()\"\n            aria-haspopup=\"dialog\" expand=\"block\" fill=\"clear\">\n            {{ 'core.needhelp' | translate }}\n        </ion-button>\n    </div>\n</ion-content>\n\n<!-- Template site selector. -->\n<ng-template #sitelisting let-site=\"site\">\n    <ion-item button (click)=\"connect($event, site.url, site)\" [attr.aria-label]=\"site.name\" detail=\"true\">\n        <ion-thumbnail *ngIf=\"siteFinderSettings.displayimage\" slot=\"start\">\n            <img [src]=\"site.imageurl\" *ngIf=\"site.imageurl\" onError=\"this.src='assets/icon/icon.png'\" alt=\"\" role=\"presentation\">\n            <img src=\"assets/icon/icon.png\" *ngIf=\"!site.imageurl\" class=\"core-login-default-icon\" alt=\"\" role=\"presentation\">\n        </ion-thumbnail>\n        <ion-label>\n            <p *ngIf=\"site.title\" class=\"item-heading ion-text-wrap\">{{site.title}}</p>\n            <p *ngIf=\"site.noProtocolUrl\">{{site.noProtocolUrl}}</p>\n            <p *ngIf=\"site.location\">{{site.location}}</p>\n        </ion-label>\n    </ion-item>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            <h1>{{ 'core.settings.preferences' | translate}}</h1>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <core-split-view>\n        <ion-refresher slot=\"fixed\" [disabled]=\"!handlers.loaded\" (ionRefresh)=\"refreshData($event.target)\">\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\n        </ion-refresher>\n        <core-loading [hideUntil]=\"handlers.loaded\">\n            <ion-list>\n                <ion-item *ngFor=\"let handler of handlerItems\" class=\"core-settings-handler\" [ngClass]=\"handler.class\"\n                    [attr.aria-label]=\"handler.title | translate\" (click)=\"!handler.toggle && handlers.select(handler)\"\n                    [button]=\"!handler.toggle\" [detail]=\"!handler.toggle\" [attr.aria-current]=\"handlers.getItemAriaCurrent(handler)\">\n                    <ion-icon [name]=\"handler.icon\" slot=\"start\" *ngIf=\"handler.icon\" aria-hidden=\"true\">\n                    </ion-icon>\n                    <ion-label>\n                        <p class=\"item-heading\">{{ handler.title | translate}}</p>\n                    </ion-label>\n                    <ion-toggle *ngIf=\"handler.toggle\" [(ngModel)]=\"handler.toggleChecked\"\n                        (ionChange)=\"handler.toggle($event.detail.checked)\">\n                    </ion-toggle>\n                </ion-item>\n            </ion-list>\n\n            <ion-card>\n                <ion-item class=\"ion-text-wrap\">\n                    <ion-label>\n                        <p class=\"item-heading\">{{ 'core.settings.synchronizenow' | translate }}</p>\n                        <p>\n                            {{ 'core.settings.synchronizenowhelp' | translate }}\n                        </p>\n                    </ion-label>\n                    <core-button-with-spinner [loading]=\"isSynchronizing()\" slot=\"end\">\n                        <ion-button fill=\"clear\" (click)=\"synchronize()\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\"\n                            [disabled]=\"!isOnline || (dataSaver && limitedConnection)\">\n                            <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\n                        </ion-button>\n                    </core-button-with-spinner>\n                </ion-item>\n                <ion-item class=\"core-warning-item ion-text-wrap\" *ngIf=\"!isOnline || (dataSaver && limitedConnection)\">\n                    <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\n                    <ion-label>\n                        <ng-container *ngIf=\"isOnline && dataSaver && limitedConnection\">\n                            {{ 'core.settings.connectwifitosync' | translate }}</ng-container>\n                        <ng-container *ngIf=\"!isOnline\">{{ 'core.settings.connecttosync' | translate }}</ng-container>\n                    </ion-label>\n                </ion-item>\n            </ion-card>\n        </core-loading>\n    </core-split-view>\n</ion-content>\n");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/login/pages/site/site.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreLoginSitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/login/pages/site/site.ts");
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
        component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
    },
];
let CoreLoginSitePageModule = class CoreLoginSitePageModule {
};
CoreLoginSitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitePageModule);



/***/ }),

/***/ "./src/core/features/login/pages/site/site.scss":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/site/site.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/**\n * Imported ionic string functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.string.scss\n */\n/**\n * Imported ionic color functions for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.functions.color.scss\n */\n/**\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/**\n * Imported ionic mixins for SCSS from different components\n * ----------------------------------------------------------------------------\n * Extracted from\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/grid/grid.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/item/item.mixins.scss\n */\n/**\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/**\n * Same as item-push-svg-url but admits flip-rtl\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host {\n  --list-item-max-width: 600px;\n}\n.item-input:last-child {\n  margin-bottom: 20px;\n}\n.core-login-site-connect {\n  margin-top: 1.4rem;\n}\n.item ion-thumbnail {\n  min-width: 50px;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  box-shadow: 0 0 4px var(--gray-200);\n  text-align: center;\n  overflow: hidden;\n}\n.item ion-thumbnail img {\n  max-height: 50px;\n  max-width: -webkit-fit-content;\n  max-width: fit-content;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  margin-left: 50%;\n  transform: translate3d(-50%,  0,  0);\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n[dir=rtl] .item ion-thumbnail img, :host-context([dir=rtl]) .item ion-thumbnail img {\n  transform: translate3d(calc(-1 * -50%),  0,  0);\n}\n.item ion-thumbnail ion-icon {\n  margin: 0 auto;\n  font-size: 35px;\n  height: 50px;\n}\n:host-context([dir=rtl]) .item ion-thumbnail img {\n  margin-left: 0;\n  margin-right: 50%;\n}\n.core-login-site-logo,\n.core-login-site-list,\n.core-login-site-list-found {\n  transition-delay: 0s;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.7s ease-in-out;\n  max-height: 9999px;\n}\n.core-login-site-logo.hidden,\n.core-login-site-list.hidden,\n.core-login-site-list-found.hidden {\n  opacity: 0;\n  visibility: hidden;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  max-height: 0;\n}\n.core-login-site-list-found.dimmed {\n  pointer-events: none;\n  position: relative;\n}\n.core-login-site-list-loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n}\n.core-login-site-list-loading ion-spinner {\n  margin: 0 auto;\n}\n.core-login-site-nolist-loading {\n  margin-top: 16px;\n  text-align: center;\n}\n.item.core-login-site-list-title ion-label, .item.core-login-site-list-title ion-label h2.item-heading {\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  ion-content .core-login-site-logo {\n    margin-top: 20%;\n  }\n  ion-content .core-login-site-logo.hidden {\n    margin-top: 0;\n  }\n}\n.core-login-entered-site {\n  background-color: var(--light);\n}\n.core-login-entered-site ion-thumbnail {\n  box-shadow: 0 0 4px var(--gray-300);\n}\n.core-login-default-icon {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3MiLCJzcmMvdGhlbWUvaGVscGVycy9pb25pYy5mdW5jdGlvbnMuY29sb3Iuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2lvbmljLm1peGlucy5zY3NzIiwic3JjL3RoZW1lL2hlbHBlcnMvaW9uaWMuY29tcG9uZW50cy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9oZWxwZXJzL2N1c3RvbS5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLmN1c3RvbS5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMudmFyaWFibGVzLnNjc3MiLCJzcmMvY29yZS9mZWF0dXJlcy9sb2dpbi9wYWdlcy9zaXRlL3NpdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FDQUE7Ozs7O0VBQUE7QUNBQTs7Ozs7RUFBQTtBQ0FBOzs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQTJHQTs7RUFBQTtBQzdHQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQStEQTs7OztFQUFBO0FDN0RBO0VBQ0ksNEJBQUE7QUFvREo7QUFqREE7RUFDSSxtQkFBQTtBQW9ESjtBQWpEQTtFQUNJLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9ESjtBQWxESTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VMd2ZGLG9DQUFBO0VLdGZFLGlCQUFBO0VBQ0Esd0JBQUE7QUFvRFI7QUxzSFc7RUErVUwsK0NBQUE7QUtsY047QUFyREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUF3RFI7QUFsREk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFxRFI7QUFoREE7OztFQUdJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQW1ESjtBQWpESTs7O0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFxRFI7QUFqREE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBakRBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQW9ESjtBQW5ESTtFQUNJLGNBQUE7QUFxRFI7QUFqREE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBb0RKO0FBaERJO0VBQ0ksYUFBQTtBQW1EUjtBTGxCSTtFSzVCQTtJQUNJLGVBQUE7RUFrRE47RUFqRE07SUFDSSxhQUFBO0VBbURWO0FBQ0Y7QUEvQ0E7RUFDSSw4QkFBQTtBQWlESjtBQS9DSTtFQUNJLG1DQUFBO0FBaURSO0FBN0NBO0VBQ0ksdUJBQUE7QUFnREoiLCJmaWxlIjoic3JjL2NvcmUvZmVhdHVyZXMvbG9naW4vcGFnZXMvc2l0ZS9zaXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xuJGFzc2V0cy1wYXRoOiBcIi4uL2Fzc2V0c1wiO1xuXG5AaW1wb3J0IFwiLi9oZWxwZXJzL2hlbHBlcnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy5jdXN0b20uc2Nzc1wiO1xuQGltcG9ydCBcIi4vZ2xvYmFscy52YXJpYWJsZXMuc2Nzc1wiO1xuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBzdHJpbmcgZnVuY3Rpb25zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL3RoZW1lcy9pb25pYy5mdW5jdGlvbnMuc3RyaW5nLnNjc3NcbiAqL1xuXG5cbi8vIFN0cmluZyBVdGlsaXR5IEZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU3RyaW5nIFJlcGxhY2UgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItcmVwbGFjZSgkc3RyaW5nLCAkc2VhcmNoLCAkcmVwbGFjZTogXCJcIikge1xuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcblxuICBAaWYgJGluZGV4IHtcbiAgICBAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XG4gIH1cblxuICBAcmV0dXJuICRzdHJpbmc7XG59XG5cbi8vIFN0cmluZyBTcGxpdCBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5AZnVuY3Rpb24gc3RyLXNwbGl0KCRzdHJpbmcsICRzZXBhcmF0b3IpIHtcbiAgLy8gZW1wdHkgYXJyYXkvbGlzdFxuICAkc3BsaXQtYXJyOiAoKTtcbiAgLy8gZmlyc3QgaW5kZXggb2Ygc2VwYXJhdG9yIGluIHN0cmluZ1xuICAkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VwYXJhdG9yKTtcbiAgLy8gbG9vcCB0aHJvdWdoIHN0cmluZ1xuICBAd2hpbGUgJGluZGV4ICE9IG51bGwge1xuICAgIC8vIGdldCB0aGUgc3Vic3RyaW5nIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlciB0byB0aGUgc2VwYXJhdG9yXG4gICAgJGl0ZW06IHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKTtcbiAgICAvLyBwdXNoIGl0ZW0gdG8gYXJyYXlcbiAgICAkc3BsaXQtYXJyOiBhcHBlbmQoJHNwbGl0LWFyciwgJGl0ZW0pO1xuICAgIC8vIHJlbW92ZSBpdGVtIGFuZCBzZXBhcmF0b3IgZnJvbSBzdHJpbmdcbiAgICAkc3RyaW5nOiBzdHItc2xpY2UoJHN0cmluZywgJGluZGV4ICsgMSk7XG4gICAgLy8gZmluZCBuZXcgaW5kZXggb2Ygc2VwYXJhdG9yXG4gICAgJGluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHNlcGFyYXRvcik7XG4gIH1cbiAgLy8gYWRkIHRoZSByZW1haW5pbmcgc3RyaW5nIHRvIGxpc3QgKHRoZSBsYXN0IGl0ZW0pXG4gICRzcGxpdC1hcnI6IGFwcGVuZCgkc3BsaXQtYXJyLCAkc3RyaW5nKTtcblxuICBAcmV0dXJuICRzcGxpdC1hcnI7XG59XG5cblxuLy8gU3RyaW5nIEV4dHJhY3QgRnVuY3Rpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBzdHItZXh0cmFjdCgkc3RyaW5nLCAkc3RhcnQsICRlbmQpIHtcbiAgJHN0YXJ0LWluZGV4OiBzdHItaW5kZXgoJHN0cmluZywgJHN0YXJ0KTtcblxuICBAaWYgJHN0YXJ0LWluZGV4IHtcbiAgICAkcG9zdDogc3RyLXNsaWNlKCRzdHJpbmcsICRzdGFydC1pbmRleCArIHN0ci1sZW5ndGgoJHN0YXJ0KSk7XG4gICAgJGVuZC1pbmRleDogc3RyLWluZGV4KCRwb3N0LCAkZW5kKTtcblxuICAgIEBpZiAkZW5kLWluZGV4IHtcbiAgICAgIEByZXR1cm4gc3RyLXNsaWNlKCRwb3N0LCAxLCAkZW5kLWluZGV4IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBudWxsO1xufVxuXG5cbi8vIFN0cmluZyBDb250YWlucyBGdW5jdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQGZ1bmN0aW9uIHN0ci1jb250YWlucygkc3RyaW5nLCAkbmVlZGxlKSB7XG4gIEBpZiAodHlwZS1vZigkc3RyaW5nKSA9PSBzdHJpbmcpIHtcbiAgICBAcmV0dXJuIHN0ci1pbmRleCgkc3RyaW5nLCAkbmVlZGxlKSAhPSBudWxsO1xuICB9XG5cbiAgQHJldHVybiBmYWxzZTtcbn1cblxuXG4vLyBVUkwgRW5jb2RlIEZ1bmN0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AZnVuY3Rpb24gdXJsLWVuY29kZSgkdmFsKSB7XG4gICRzcGFjZXM6IHN0ci1yZXBsYWNlKCR2YWwsIFwiIFwiLCBcIiUyMFwiKTtcbiAgJGVuY29kZWQ6IHN0ci1yZXBsYWNlKCRzcGFjZXMsIFwiI1wiLCBcIiUyM1wiKTtcbiAgQHJldHVybiAkZW5jb2RlZDtcbn1cblxuXG4vLyBBZGQgUm9vdCBTZWxlY3RvclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFkZHMgYSByb290IHNlbGVjdG9yIHVzaW5nIGhvc3QtY29udGV4dCBiYXNlZCBvbiB0aGUgc2VsZWN0b3IgcGFzc2VkXG4vL1xuLy8gRXhhbXBsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBAaW5jbHVkZSBhZGQtcm9vdC1zZWxlY3RvcihcIltkaXI9cnRsXVwiLCBcIjpob3N0XCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pXG4vL1xuLy8gQGluY2x1ZGUgYWRkLXJvb3Qtc2VsZWN0b3IoXCJbZGlyPXJ0bF1cIiwgXCI6aG9zdCguZml4ZWQpXCIpXG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLmZpeGVkKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5maXhlZFxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiOmhvc3QoLnRhYi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVwiKVxuLy8gLS0+IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50YWItbGF5b3V0LWljb24taGlkZSA6OnNsb3R0ZWQoaW9uLWJhZGdlKVxuLy9cbi8vIEBpbmNsdWRlIGFkZC1yb290LXNlbGVjdG9yKFwiW2Rpcj1ydGxdXCIsIFwiLnNoYWRvd1wiKVxuLy8gLS0+IFtkaXI9cnRsXSAuc2hhZG93XG4vLyAtLT4gOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5zaGFkb3dcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBmdW5jdGlvbiBhZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgJGFkZEhvc3RTZWxlY3Rvcikge1xuICAkc2VsZWN0b3JzOiBzdHItc3BsaXQoJHJvb3QsIFwiLFwiKTtcblxuICAkbGlzdDogKCk7XG5cbiAgQGVhY2ggJHNlbGVjdG9yIGluICRzZWxlY3RvcnMge1xuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCggaXQgbWVhbnMgaXQgaXMgdGFyZ2V0aW5nIGEgY2xhc3Mgb24gdGhlIGhvc3RcbiAgICAvLyBlbGVtZW50IHNvIHdlIG5lZWQgdG8gY2hhbmdlIGhvdyB3ZSB0YXJnZXQgaXRcbiAgICBAaWYgc3RyLWNvbnRhaW5zKCRzZWxlY3RvciwgXCI6aG9zdChcIikge1xuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3QoXCIsIFwiOmhvc3QtY29udGV4dCgjeyRhZGRIb3N0U2VsZWN0b3J9KTpob3N0KFwiKTtcbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRzaGFkb3ctZWxlbWVudCwgY29tbWEpO1xuXG4gICAgICAkbmV3LWVsZW1lbnQ6ICgpO1xuICAgICAgJGVsZW1lbnRzOiBzdHItc3BsaXQoJHNlbGVjdG9yLCBcIiBcIik7XG5cbiAgICAgIEBlYWNoICRlbGVtZW50IGluICRlbGVtZW50cyB7XG4gICAgICAgIEBpZiBzdHItY29udGFpbnMoJGVsZW1lbnQsIFwiOmhvc3QoXCIpIHtcbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6ICRlbGVtZW50O1xuXG4gICAgICAgICAgQGlmIHN0ci1jb250YWlucygkZWxlbWVudCwgXCIpKVwiKSB7XG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpKVwiLCBcIilcIik7XG4gICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCIpXCIsIFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkc2NvcGVkLWVsZW1lbnQ6IHN0ci1yZXBsYWNlKCRzY29wZWQtZWxlbWVudCwgXCI6aG9zdChcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xuXG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkc2NvcGVkLWVsZW1lbnQsIHNwYWNlKTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgJG5ldy1lbGVtZW50OiBhcHBlbmQoJG5ldy1lbGVtZW50LCAkZWxlbWVudCwgc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRsaXN0OiBhcHBlbmQoJGxpc3QsICRuZXctZWxlbWVudCwgY29tbWEpO1xuICAgIC8vIElmIHRoZSBzZWxlY3RvciBjb250YWlucyA6aG9zdCBpdCBtZWFucyBpdCBpcyB0YXJnZXRpbmcganVzdCB0aGUgaG9zdFxuICAgIC8vIGVsZW1lbnQgc28gd2UgY2FuIGNoYW5nZSBpdCB0byBsb29rIGZvciBob3N0LWNvbnRleHRcbiAgICB9IEBlbHNlIGlmIHN0ci1jb250YWlucygkc2VsZWN0b3IsIFwiOmhvc3RcIikge1xuICAgICAgJHNoYWRvdy1lbGVtZW50OiBzdHItcmVwbGFjZSgkc2VsZWN0b3IsIFwiOmhvc3RcIiwgXCI6aG9zdC1jb250ZXh0KCN7JGFkZEhvc3RTZWxlY3Rvcn0pXCIpO1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgJHNoYWRvdy1lbGVtZW50LCBjb21tYSk7XG4gICAgICAvLyBJZiB0aGUgc2VsZWN0b3IgZG9lcyBub3QgY29udGFpbiBob3N0IGF0IGFsbCBpdCBpcyBlaXRoZXIgYSBzaGFkb3dcbiAgICAgIC8vIG9yIG5vcm1hbCBlbGVtZW50IHNvIGFwcGVuZCBib3RoIHRoZSBkaXIgY2hlY2sgYW5kIGhvc3QtY29udGV4dFxuICAgIH0gQGVsc2Uge1xuICAgICAgJGxpc3Q6IGFwcGVuZCgkbGlzdCwgXCIjeyRhZGRIb3N0U2VsZWN0b3J9ICN7JHNlbGVjdG9yfVwiLCBjb21tYSk7XG4gICAgICAkbGlzdDogYXBwZW5kKCRsaXN0LCBcIjpob3N0LWNvbnRleHQoI3skYWRkSG9zdFNlbGVjdG9yfSkgI3skc2VsZWN0b3J9XCIsIGNvbW1hKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuICRsaXN0O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBjb2xvciBmdW5jdGlvbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLmZ1bmN0aW9ucy5jb2xvci5zY3NzXG4gKi9cblxuLy8gR2V0cyB0aGUgYWN0aXZlIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gYSB2YXJpYXRpb24uIEFscGhhIGlzIG9wdGlvbmFsLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBjdXJyZW50LWNvbG9yKGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1iYXNlKVxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGN1cnJlbnQtY29sb3IoJHZhcmlhdGlvbiwgJGFscGhhOiBudWxsKSB7XG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XG4gICAgQHJldHVybiB2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufSk7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xuICB9XG59XG5cbi8vIEdldHMgdGhlIHNwZWNpZmljIGNvbG9yJ3MgY3NzIHZhcmlhYmxlIGZyb20gdGhlIG5hbWUgYW5kIHZhcmlhdGlvbi4gQWxwaGEvcmdiIGFyZSBvcHRpb25hbC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBFeGFtcGxlIHVzYWdlOlxuLy8gaW9uLWNvbG9yKHByaW1hcnksIGJhc2UpID0+IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKVxuLy8gaW9uLWNvbG9yKHNlY29uZGFyeSwgY29udHJhc3QpID0+IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpXG4vLyBpb24tY29sb3IocHJpbWFyeSwgYmFzZSwgMC41KSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSwgMC41KVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBpb24tY29sb3IoJG5hbWUsICR2YXJpYXRpb24sICRhbHBoYTogbnVsbCwgJHJnYjogbnVsbCkge1xuICAkdmFsdWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRuYW1lKTtcbiAgJHZhbHVlOiBtYXAtZ2V0KCR2YWx1ZXMsICR2YXJpYXRpb24pO1xuICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9LSN7JHZhcmlhdGlvbn07XG5cbiAgQGlmICgkdmFyaWF0aW9uID09IGJhc2UpIHtcbiAgICAkdmFyaWFibGU6IC0taW9uLWNvbG9yLSN7JG5hbWV9O1xuICB9XG5cbiAgQGlmICgkYWxwaGEpIHtcbiAgICAkdmFsdWU6IGNvbG9yLXRvLXJnYi1saXN0KCR2YWx1ZSk7XG4gICAgQHJldHVybiByZ2JhKHZhcigjeyR2YXJpYWJsZX0tcmdiLCAkdmFsdWUpLCAkYWxwaGEpO1xuICB9XG4gIEBpZiAoJHJnYikge1xuICAgICR2YWx1ZTogY29sb3ItdG8tcmdiLWxpc3QoJHZhbHVlKTtcbiAgICAkdmFyaWFibGU6ICN7JHZhcmlhYmxlfS1yZ2I7XG4gIH1cblxuICBAcmV0dXJuIHZhcigjeyR2YXJpYWJsZX0sICR2YWx1ZSk7XG59XG5cbi8vIE1peGVzIGEgY29sb3Igd2l0aCBibGFjayB0byBjcmVhdGUgaXRzIHNoYWRlLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgMTIlKTtcbn1cblxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIHdoaXRlIHRvIGNyZWF0ZSBpdHMgdGludC5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XG4gIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgMTAlKTtcbn1cblxuLy8gQ29udmVydHMgYSBjb2xvciB0byBhIGNvbW1hIHNlcGFyYXRlZCByZ2IuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xuICBAcmV0dXJuICN7cmVkKCRjb2xvcil9LCN7Z3JlZW4oJGNvbG9yKX0sI3tibHVlKCRjb2xvcil9O1xufVxuIiwiLyoqXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEV4dHJhY3RlZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cblxuQG1peGluIGlucHV0LWNvdmVyKCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbigwLCBudWxsLCBudWxsLCAwKTtcbiAgQGluY2x1ZGUgbWFyZ2luKDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuXG4gICY6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG5AbWl4aW4gdmlzdWFsbHktaGlkZGVuKCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcblxuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xufVxuXG5AbWl4aW4gdGV4dC1pbmhlcml0KCkge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBidXR0b24tc3RhdGUoKSB7XG4gIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBjb250ZW50OiBcIlwiO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi8vIEZvbnQgc21vb3RoaW5nXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gZm9udC1zbW9vdGhpbmcoKSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vLyBHZXQgdGhlIGtleSBmcm9tIGEgbWFwIGJhc2VkIG9uIHRoZSBpbmRleFxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcbiAgJGtleXM6IG1hcC1rZXlzKCRtYXApO1xuXG4gIEByZXR1cm4gbnRoKCRrZXlzLCAkaW5kZXgpO1xufVxuXG5cbi8vIEJyZWFrcG9pbnQgTWl4aW5zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG5cbiAgQHJldHVybiBpZigkbmFtZSAhPSBpbmRleC10by1rZXkoJGJyZWFrcG9pbnRzLCAxKSwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW5mcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgcmVkdWNlZCBieSAwLjAycHggdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mXG4vLyBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vL1xuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlx0Ly8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgobWQsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcbiAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWF4IGFuZCAkbWF4ID4gMCwgJG1heCAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuXG4vLyBUZXh0IERpcmVjdGlvbiAtIGx0ciAvIHJ0bFxuLy9cbi8vIENTUyBkZWZhdWx0cyB0byB1c2UgdGhlIGx0ciBjc3MsIGFuZCBhZGRzIFtkaXI9cnRsXSBzZWxlY3RvcnNcbi8vIHRvIG92ZXJyaWRlIGx0ciBkZWZhdWx0cy5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIG11bHRpLWRpcigpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLy8gJHJvb3Q6ICN7Jn07XG4gIC8vIEBhdC1yb290IFtkaXJdIHtcbiAgLy8gICAjeyRyb290fSB7XG4gIC8vICAgICBAY29udGVudDtcbiAgLy8gICB9XG4gIC8vIH1cbn1cblxuQG1peGluIHJ0bCgpIHtcbiAgJHJvb3Q6ICN7Jn07XG5cbiAgQGF0LXJvb3QgI3thZGQtcm9vdC1zZWxlY3Rvcigkcm9vdCwgXCJbZGlyPXJ0bF1cIil9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbHRyKCkge1xuICBAY29udGVudDtcbn1cblxuXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XG4gICR1cmw6IHVybC1lbmNvZGUoJHN2Zyk7XG4gICR2aWV3Qm94OiBzdHItc3BsaXQoc3RyLWV4dHJhY3QoJHN2ZywgXCJ2aWV3Qm94PSdcIiwgXCInXCIpLCBcIiBcIik7XG5cbiAgQGlmICRmbGlwLXJ0bCAhPSB0cnVlIG9yICR2aWV3Qm94ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JHVybH1cIik7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICAkdHJhbnNmb3JtOiBcInRyYW5zZm9ybT0ndHJhbnNsYXRlKCN7bnRoKCR2aWV3Qm94LCAzKX0sIDApIHNjYWxlKC0xLCAxKSdcIjtcbiAgICAkZmxpcHBlZC11cmw6ICRzdmc7XG4gICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPHBhdGhcIiwgXCI8cGF0aCAjeyR0cmFuc2Zvcm19XCIpO1xuICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxsaW5lXCIsIFwiPGxpbmUgI3skdHJhbnNmb3JtfVwiKTtcbiAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cG9seWdvblwiLCBcIjxwb2x5Z29uICN7JHRyYW5zZm9ybX1cIik7XG4gICAgJGZsaXBwZWQtdXJsOiB1cmwtZW5jb2RlKCRmbGlwcGVkLXVybCk7XG5cbiAgICBAaW5jbHVkZSBsdHIgKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skZmxpcHBlZC11cmx9XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XG4gICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xuICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xuXG4gIH0gQGVsc2Uge1xuICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcbiAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcblxuICAgIEBhdC1yb290IHtcbiAgICAgIEBzdXBwb3J0cyAoKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkpIHtcbiAgICAgICAgJiB7XG4gICAgICAgICAgQGlmICRzdGFydCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LWxlZnQ6IHVuc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaWYgJGVuZCAhPSBudWxsIHtcbiAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLXN0YXJ0OiAkc3RhcnQ7XG4gICAgICAgICAgLXdlYmtpdC0jeyRwcm9wfS1lbmQ6ICRlbmQ7XG4gICAgICAgICAgI3skcHJvcH0taW5saW5lLWVuZDogJGVuZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHByb3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gcHJvcGVydHkoJHByb3AsICR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKCRwcm9wLCAkc3RhcnQsICRlbmQpO1xuICAjeyRwcm9wfS10b3A6ICR0b3A7XG4gICN7JHByb3B9LWJvdHRvbTogJGJvdHRvbTtcbn1cblxuLy8gQWRkIHBhZGRpbmcgaG9yaXpvbnRhbFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChwYWRkaW5nLCAkc3RhcnQsICRlbmQpO1xufVxuXG4vLyBBZGQgcGFkZGluZyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShwYWRkaW5nLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgbWFyZ2luIGhvcml6b250YWxcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHktaG9yaXpvbnRhbChtYXJnaW4sICRzdGFydCwgJGVuZCk7XG59XG5cbi8vIEFkZCBtYXJnaW4gZm9yIGFsbCBkaXJlY3Rpb25zXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xuICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XG59XG5cbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0IC0gYW1vdW50IHRvIHBvc2l0aW9uIHN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZCAtIGFtb3VudCB0byBsZWZ0OiAwOyBlbmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydDogbnVsbCwgJGVuZDogbnVsbCkge1xuICBAaWYgJHN0YXJ0ID09ICRlbmQge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGxlZnQ6ICRzdGFydDtcbiAgICAgIHJpZ2h0OiAkZW5kO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgbGVmdDogJHN0YXJ0O1xuICAgICAgcmlnaHQ6ICRlbmQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgcmlnaHQ6IHVuc2V0O1xuXG4gICAgICBsZWZ0OiAkZW5kO1xuICAgICAgcmlnaHQ6ICRzdGFydDtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWRkIHBvc2l0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIHBvc2l0aW9uKCR0b3A6IG51bGwsICRlbmQ6IG51bGwsICRib3R0b206IG51bGwsICRzdGFydDogbnVsbCkge1xuICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XG4gIHRvcDogJHRvcDtcbiAgYm90dG9tOiAkYm90dG9tO1xufVxuXG4vLyBBZGQgYm9yZGVyIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Bcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQG1peGluIGJvcmRlcigkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcbiAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xufVxuXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wLXN0YXJ0XG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcC1lbmRcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b20tc3RhcnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcbiAgQGlmICR0b3Atc3RhcnQgPT0gJHRvcC1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1lbmQgYW5kICR0b3Atc3RhcnQgPT0gJGJvdHRvbS1zdGFydCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIGx0cigpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHRvcC1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1lbmQ7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3AtZW5kO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvdHRvbS1zdGFydDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3R0b20tZW5kO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgZGlyZWN0aW9uIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICRkaXIgLSBEaXJlY3Rpb24gb24gTFRSXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcbiAgJG90aGVyLWRpcjogbnVsbDtcblxuICBAaWYgJGRpciA9PSBsdHIge1xuICAgICRvdGhlci1kaXI6IHJ0bDtcbiAgfSBAZWxzZSB7XG4gICAgJG90aGVyLWRpcjogbHRyO1xuICB9XG5cbiAgQGluY2x1ZGUgbHRyKCkge1xuICAgIGRpcmVjdGlvbjogJGRpcjtcbiAgfVxuICBAaW5jbHVkZSBydGwoKSB7XG4gICAgZGlyZWN0aW9uOiAkb3RoZXItZGlyO1xuICB9XG59XG5cbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc2lkZVxuLy8gQHBhcmFtIHtzdHJpbmd9ICRkZWNvcmF0b3IgLSAhaW1wb3J0YW50XG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcbiAgQGlmICRzaWRlID09IHN0YXJ0IHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcbiAgICBAaW5jbHVkZSBsdHIoKSB7XG4gICAgICBmbG9hdDogcmlnaHQgJGRlY29yYXRvcjtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgZmxvYXQ6IGxlZnQgJGRlY29yYXRvcjtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGZsb2F0OiAkc2lkZSAkZGVjb3JhdG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gYmFja2dyb3VuZC1wb3NpdGlvbigkaG9yaXpvbnRhbCwgJGhvcml6b250YWwtYW1vdW50OiBudWxsLCAkdmVydGljYWw6IG51bGwsICR2ZXJ0aWNhbC1hbW91bnQ6IG51bGwpIHtcbiAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XG4gICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xuICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcbiAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xuICAgICAgJGhvcml6b250YWwtbHRyOiBsZWZ0O1xuICAgICAgJGhvcml6b250YWwtcnRsOiByaWdodDtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XG4gICAgICAkaG9yaXpvbnRhbC1ydGw6IGxlZnQ7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtcnRsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246ICRob3Jpem9udGFsICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xuICBAaWYgJHgtYXhpcyA9PSBzdGFydCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgJHktYXhpcztcbiAgICB9XG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkeC1heGlzID09IGxlZnQgb3IgJHgtYXhpcyA9PSByaWdodCB7XG4gICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogJHgtYXhpcyAkeS1heGlzO1xuICAgIH1cbiAgICBAaW5jbHVkZSBydGwoKSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBZGQgdHJhbnNmb3JtIGZvciBhbGwgZGlyZWN0aW9uc1xuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcy4uLikge1xuICAkZXh0cmE6IG51bGw7XG5cbiAgJHg6IG51bGw7XG4gICRsdHItdHJhbnNsYXRlOiBudWxsO1xuICAkcnRsLXRyYW5zbGF0ZTogbnVsbDtcblxuICBAZWFjaCAkdHJhbnNmb3JtIGluICR0cmFuc2Zvcm1zIHtcbiAgICBAaWYgKHN0ci1pbmRleCgkdHJhbnNmb3JtLCB0cmFuc2xhdGUzZCkpIHtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICd0cmFuc2xhdGUzZCgnKTtcbiAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XG5cbiAgICAgICRjb29yZGluYXRlczogc3RyLXNwbGl0KCR0cmFuc2Zvcm0sICcsJyk7XG5cbiAgICAgICR4OiBudGgoJGNvb3JkaW5hdGVzLCAxKTtcbiAgICAgICR5OiBudGgoJGNvb3JkaW5hdGVzLCAyKTtcbiAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcblxuICAgICAgJGx0ci10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKCR4LCAkeSwgJHopO1xuICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XG4gICAgfSBAZWxzZSB7XG4gICAgICBAaWYgJGV4dHJhID09IG51bGwge1xuICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcbiAgICAgIHRyYW5zZm9ybTogJGx0ci10cmFuc2xhdGUgJGV4dHJhO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbHRyKCkge1xuICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcnRsKCkge1xuICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTUyBmcm9tIGRpZmZlcmVudCBjb21wb25lbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBFeHRyYWN0ZWQgZnJvbVxuICogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtZnJhbWV3b3JrL2Jsb2IvbWFzdGVyL2NvcmUvc3JjL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvY29tcG9uZW50cy9pdGVtL2l0ZW0ubWl4aW5zLnNjc3NcbiAqL1xuXG4vLyBSZXNwb25zaXZlIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBDcmVhdGVzIGEgZml4ZWQgd2lkdGggZm9yIHRoZSBncmlkIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XG4gIEBlYWNoICRicmVha3BvaW50LCAkd2lkdGggaW4gJHdpZHRocyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICB3aWR0aDogJHdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5AbWl4aW4gbWFrZS1icmVha3BvaW50LXBhZGRpbmcoJHBhZGRpbmdzKSB7XG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRwYWRkaW5ncykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgICRwYWRkaW5nOiBtYXAtZ2V0KCRwYWRkaW5ncywgJGJyZWFrcG9pbnQpO1xuXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBJdGVtIE1peGluc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuQG1peGluIGl0ZW0tcHVzaC1zdmctdXJsKCRmaWxsKSB7XG4gICRpdGVtLWRldGFpbC1wdXNoLXN2ZzogXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEyIDIwJz48cGF0aCBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyBmaWxsPScjeyRmaWxsfScvPjwvc3ZnPlwiO1xuXG4gIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgdHJ1ZSk7XG59XG4iLCJAdXNlIFwic2FzczptYXRoXCIgYXMgbWF0aDtcblxuLyoqXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggYmxhY2sgdG8gY3JlYXRlIGl0cyBzaGFkZS5cbi8vIERlZmF1bHQgdG8gYm9vdHN0cmFwIGxldmVsIDYuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQGZ1bmN0aW9uIGdldC1jb2xvci1zaGFkZS1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDQ4JSkge1xuICAgIEByZXR1cm4gbWl4KCMwMDAsICRjb2xvciwgJHBlcmNlbnQpO1xufVxuXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxuLy8gRGVmYXVsdCB0byBib290c3RyYXAgbGV2ZWwgLTEwLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBmdW5jdGlvbiBnZXQtY29sb3ItdGludC1wZXJjZW50KCRjb2xvciwgJHBlcmNlbnQ6IDgwJSkge1xuICAgIEByZXR1cm4gbWl4KCNmZmYsICRjb2xvciwgJHBlcmNlbnQpO1xufVxuXG4vLyBJb25pYyBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBHZW5lcmF0ZXMgdGhlIGNvbG9yIGNsYXNzZXMgYW5kIHZhcmlhYmxlcyBiYXNlZCBvbiB0aGVcbi8vIGNvbG9ycyBtYXBcblxuQG1peGluIGdlbmVyYXRlLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3JzLCAkdGhlbWUpIHtcbiAgICAkY29sb3ItdGhlbWVzOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcbiAgICAkYmFzZTogbWFwLWdldCgkY29sb3ItdGhlbWVzLCAkdGhlbWUpO1xuXG4gICAgQGlmICR0aGVtZSA9PSAnZGFyaycge1xuICAgICAgICAkYmFzZTogbWl4KG1hcC1nZXQoJGNvbG9yLXRoZW1lcywgJ2xpZ2h0JyksIHdoaXRlLCA4MCUpICFkZWZhdWx0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcmlhbnRzKCRjb2xvci1uYW1lLCAkYmFzZSk7XG59XG5cbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXJpYW50cygkY29sb3ItbmFtZSwgJGJhc2UpIHtcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XG4gICAgJHNoYWRlOiBnZXQtY29sb3Itc2hhZGUtcGVyY2VudCgkYmFzZSk7XG4gICAgJHRpbnQ6IGdldC1jb2xvci10aW50LXBlcmNlbnQoJGJhc2UpO1xuXG4gICAgLS0jeyRjb2xvci1uYW1lfTogI3skYmFzZX07XG4gICAgLS0jeyRjb2xvci1uYW1lfS1zaGFkZTogI3skc2hhZGV9O1xuICAgIC0tI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG4gICAgLS0jeyRjb2xvci1uYW1lfS1jb250cmFzdDogI3skY29udHJhc3R9O1xuXG4gICAgLy8gSW50ZXJuYWwgaW9uaWMgdXNlIG9ubHkuXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX06IHZhcigtLSN7JGNvbG9yLW5hbWV9KTtcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0pO1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0OiAjeyRjb250cmFzdH07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3QtcmdiOiAje2NvbG9yLXRvLXJnYi1saXN0KCRjb250cmFzdCl9O1xuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludDogI3skdGludH07XG5cbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcbiAgICAgICAgLS1pb24tY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfSk7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1iYXNlKTtcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcbiAgICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdCk7XG4gICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYik7XG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xuICAgICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tdGludCk7XG4gICAgfVxufVxuXG5AbWl4aW4gY29yZS1mb2N1cygpIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKDAsIDAsIDAsIDApO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcbiAgICB9XG59XG5cbkBtaXhpbiBjb3JlLWZvY3VzLXN0eWxlKCkge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XG4gICAgLy8gVGhpY2tlciBvcHRpb246XG4gICAgLy8gYm9yZGVyOiB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSBzb2xpZCB2YXIoLS1hMTF5LWZvY3VzLWNvbG9yKTtcbn1cblxuQG1peGluIGNvcmUtdHJhbnNpdGlvbigkcHJvcGVydGllczogYWxsLCAkZHVyYXRpb246IDUwMG1zLCAkdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCkge1xuICAgICR0cmFuc2l0aW9uczogKCk7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgICR0cmFuc2l0aW9uczogYXBwZW5kKCR0cmFuc2l0aW9ucywgJHByb3BlcnR5ICRkdXJhdGlvbiAkdGltaW5nLWZ1bmN0aW9uLCBjb21tYSk7XG4gICAgfVxuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbnM7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb25zO1xufVxuXG5AbWl4aW4gc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi8qKlxuICogU2FtZSBhcyBpdGVtLXB1c2gtc3ZnLXVybCBidXQgYWRtaXRzIGZsaXAtcnRsXG4gKi9cbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRmaWxsOiA2MjYyNjIsICRmbGlwLXJ0bDogZmFsc2UpIHtcbiAgICAkaXRlbS1kZXRhaWwtcHVzaC1zdmc6IFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMiAyMCc+PHBhdGggZD0nTTIsMjBsLTItMmw4LThMMCwybDItMmwxMCwxMEwyLDIweicgZmlsbD0nI3skZmlsbH0nLz48L3N2Zz5cIjtcblxuICAgIEBpbmNsdWRlIHN2Zy1iYWNrZ3JvdW5kLWltYWdlKCRpdGVtLWRldGFpbC1wdXNoLXN2ZywgJGZsaXAtcnRsKTtcbn1cblxuQG1peGluIGJvcmRlci1zdGFydCgkcHgsICR0eXBlOiBudWxsLCAkY29sb3I6IG51bGwpIHtcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKGJvcmRlciwgJHB4ICR0eXBlICRjb2xvciwgbnVsbCk7XG59XG5cbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoYm9yZGVyLCBudWxsLCAkcHggJHR5cGUgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItc3RhcnQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skcHh9KTtcblxuICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1ib3JkZXItZW5kKCRweCwgJHR5cGUsICRjb2xvcikge1xuICAgICRzYWZlLWFyZWEtcG9zaXRpb246IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRweH0pO1xuXG4gICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBudWxsO1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IG51bGw7XG5cbiAgICBAaWYgKCRlbmQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcbiAgICB9XG4gICAgQGlmICgkc3RhcnQpIHtcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpICsgI3skc3RhcnR9KTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkc2FmZS1hcmVhLWVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtbWFyZ2luLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LCAkZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4tZW5kKCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcbiAgICAkc2FmZS1hcmVhLWVuZDogbnVsbDtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xuXG4gICAgQGlmICgkZW5kKSB7XG4gICAgICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG4gICAgfVxuICAgIEBpZiAoJHN0YXJ0KSB7XG4gICAgICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xuICAgICRzYWZlLWFyZWEtc3RhcnQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KSArICN7JHN0YXJ0fSk7XG5cbiAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XG59XG5cbkBtaXhpbiBzYWZlLWFyZWEtcGFkZGluZy1lbmQoJHN0YXJ0LCAkZW5kKSB7XG4gICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCkgKyAjeyRlbmR9KTtcblxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcbn1cblxuQG1peGluIHNhZmUtYXJlYS1wb3NpdGlvbigkdG9wOiBudWxsLCAkZW5kOiBudWxsLCAkYm90dG9tOiBudWxsLCAkc3RhcnQ6IG51bGwpIHtcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtbGVmdCkgKyAjeyRzdGFydH0pO1xuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpICsgI3skZW5kfSk7XG5cbiAgICBAaW5jbHVkZSBwb3NpdGlvbigkdG9wLCAkc2FmZS1hcmVhLWVuZCwgJGJvdHRvbSwgJHNhZmUtYXJlYS1zdGFydCk7XG59XG5cbkBtaXhpbiBjb3JlLWhlYWRpbmdzKCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgIH1cbiAgICBoMiwgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxufVxuXG5AbWl4aW4gZGFya21vZGUoKSB7XG4gICAgJHJvb3Q6ICN7Jn07XG5cbiAgICBAYXQtcm9vdCAje2FkZC1yb290LXNlbGVjdG9yKCRyb290LCBcImh0bWwuZGFya1wiKX0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBob3Jpem9udGFsX3Njcm9sbF9pdGVtKCR3aWR0aCwgJG1pbi13aWR0aCwgJG1heC13aWR0aCkge1xuICAgIGZsZXg6IDAgMCAkd2lkdGg7XG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xuICAgIG1heC13aWR0aDogJG1heC13aWR0aDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcbiAgICAgICAgLS1ob3Jpem9udGFsLW1hcmdpbjogMTBweDtcblxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pIC0gdmFyKC0taG9yaXpvbnRhbC1tYXJnaW4pKTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1tYXJnaW4pIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSk7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENvbG9yIG1peGlucy5cbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcbiAgICBAcmV0dXJuIChyZWQoJGNvbG9yKSArIGdyZWVuKCRjb2xvcikgKyBibHVlKCRjb2xvcikpIC8gMztcbn1cblxuLy8gR2V0IHRoZSBiZXR0ZXIgY29sb3IgY29udHJhc3QgdXNpbmcgV0NBRyBhbGdvcnl0aG0uXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xuICAgICRsdW1pYW5jZTogbHVtaW5hbmNlKCRjb2xvcik7XG5cbiAgICAvLyBXaGl0ZSBsdW1pYW5jZSBpcyAxLlxuICAgICR3aGl0ZUNvbnRyYXN0OiAoJGx1bWlhbmNlICsgMC4wNSkgLyAoMSArIDAuMDUpO1xuICAgIC8vIFdoaXRlIGx1bWlhbmNlIGlzIDAuXG4gICAgJGJsYWNrQ29udHJhc3Q6ICgwLjA1KSAvICgkbHVtaWFuY2UgKyAwLjA1KTtcblxuICAgIEByZXR1cm4gaWYoJHdoaXRlQ29udHJhc3QgPCAkYmxhY2tDb250cmFzdCwgd2hpdGUsIGJsYWNrKTtcbn1cblxuLy8gQ29sb3IgY29udHJhc3QgdXNpbmcgeWlxIGFwcm94aW1hdGlvbiB3aXRoIDE1MCB0aHJlc2hvbGQuXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yX3lpcSgkY29sb3IsICRkYXJrOiBibGFjaywgJGxpZ2h0OiB3aGl0ZSkge1xuICAgICRyOiByZWQoJGNvbG9yKTtcbiAgICAkZzogZ3JlZW4oJGNvbG9yKTtcbiAgICAkYjogYmx1ZSgkY29sb3IpO1xuXG4gICAgJHlpcTogKCgkciAqIDI5OSkgKyAoJGcgKiA1ODcpICsgKCRiICogMTE0KSkgLyAxMDAwO1xuXG4gICAgQHJldHVybiBpZigkeWlxID49IDEyOCwgJGRhcmssICRsaWdodCk7XG59XG5cbi8vIFdDQUcgY29udHJhc3QgYWxnb3JpdGhtXG5AZnVuY3Rpb24gY2hlY2stY29udHJhc3QoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gICAgJGZvcmVncm91bmRMdW1pYW5jZTogbHVtaW5hbmNlKCRmb3JlZ3JvdW5kKTtcbiAgICAkYmFja2dyb3VuZEx1bWluYW5jZTogbHVtaW5hbmNlKCRiYWNrZ3JvdW5kKTtcblxuICAgIEBpZiAoJGJhY2tncm91bmRMdW1pbmFuY2UgPCAkZm9yZWdyb3VuZEx1bWlhbmNlKSB7XG4gICAgICAgIEByZXR1cm4gKCRiYWNrZ3JvdW5kTHVtaW5hbmNlICsgMC4wNSkgLyAoJGZvcmVncm91bmRMdW1pYW5jZSArIDAuMDUpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAcmV0dXJuICgkZm9yZWdyb3VuZEx1bWlhbmNlICsgMC4wNSkgLyAoJGJhY2tncm91bmRMdW1pbmFuY2UgKyAwLjA1KTtcbiAgICB9XG59XG5cbkBmdW5jdGlvbiBsdW1pbmFuY2UoJGNvbG9yKSB7XG4gICAgJHI6IHJlZCgkY29sb3IpO1xuICAgICRnOiBncmVlbigkY29sb3IpO1xuICAgICRiOiBibHVlKCRjb2xvcik7XG5cbiAgICAkcjogY29tcG9uZW50LWx1bWluYW5jZSgkcik7XG4gICAgJGc6IGNvbXBvbmVudC1sdW1pbmFuY2UoJGcpO1xuICAgICRiOiBjb21wb25lbnQtbHVtaW5hbmNlKCRiKTtcblxuICAgIEByZXR1cm4gJHIgKiAwLjIxMjYgKyAkZyAqIDAuNzE1MiArICRiICogMC4wNzIyO1xufVxuXG5AZnVuY3Rpb24gY29tcG9uZW50LWx1bWluYW5jZSgkdmFsdWUpIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAvIDI1NTtcblxuICAgIEBpZiAoJHZhbHVlIDw9IDAuMDM5MjgpIHtcbiAgICAgICAgQHJldHVybiAkdmFsdWUgLyAxMi45MjtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQHJldHVybiBtYXRoLnBvdygoJHZhbHVlICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfVxufVxuIiwiLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuJHdoaXRlOiAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAgICAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAgICAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAgICAjZGVlMmU2ICFkZWZhdWx0OyAvLyBTdHJva2VcbiRncmF5LTQwMDogICAgI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogICAgIzhmOTU5ZSAhZGVmYXVsdDsgLy8gU3Ryb2tlIG9uIGlucHV0c1xuJGdyYXktNjAwOiAgICAjNmE3MzdiICFkZWZhdWx0O1xuJGdyYXktNzAwOiAgICAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAgICAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAgICAjMWQyMTI1ICFkZWZhdWx0OyAvLyBDb3B5IHRleHRcbiRibGFjazogICAgICAgIzAwMDAwMCAhZGVmYXVsdDsgLy8gQXZvaWQgdXNhZ2VcblxuJGJsdWU6ICAgICAgICAjMGY2Y2JmICFkZWZhdWx0O1xuJGN5YW46ICAgICAgICAjMDA4MTk2ICFkZWZhdWx0OyAvLyBOb3QgdXNlZC5cbiRncmVlbjogICAgICAgIzM1N2EzMiAhZGVmYXVsdDtcbiRyZWQ6ICAgICAgICAgI2NhMzEyMCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcblxuJGJyYW5kLWNvbG9yOiAjZmY3NTE4ICFkZWZhdWx0O1xuXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1yZ2I6ICAgICAgICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvcikgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcblxuJGJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRiYWNrZ3JvdW5kLWNvbG9yLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvcikgIWRlZmF1bHQ7XG4kYmFja2dyb3VuZC1jb2xvci1kYXJrOiAgICAgJGdyYXktOTAwICFkZWZhdWx0OyAvLyAjMWExYTFhXG4kYmFja2dyb3VuZC1jb2xvci1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGJhY2tncm91bmQtY29sb3ItZGFyaykgIWRlZmF1bHQ7XG5cbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLXJnYjogIGNvbG9yLXRvLXJnYi1saXN0KCRpb24taXRlbS1iYWNrZ3JvdW5kKSAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcms6ICRncmF5LTkwMCAhZGVmYXVsdDtcbiRpb24taXRlbS1iYWNrZ3JvdW5kLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrKSAhZGVmYXVsdDtcblxuJHByaW1hcnk6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAkeWVsbG93ICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaWdodDogICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbWVkaXVtOiAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJGNvbG9yczogIChcbiAgICBwcmltYXJ5OiAobGlnaHQ6ICRwcmltYXJ5LCBkYXJrOiAkcHJpbWFyeSksXG4gICAgc2Vjb25kYXJ5OiAobGlnaHQ6ICRzZWNvbmRhcnksIGRhcms6ICRncmF5LTcwMCksXG4gICAgc3VjY2VzczogKGxpZ2h0OiAkc3VjY2VzcyksXG4gICAgd2FybmluZzogKGxpZ2h0OiAkd2FybmluZyksXG4gICAgZGFuZ2VyOiAgKGxpZ2h0OiAkZGFuZ2VyKSxcbiAgICBpbmZvOiAobGlnaHQ6ICRpbmZvKSxcbiAgICBsaWdodDogKGxpZ2h0OiAkbGlnaHQsIGRhcms6ICRkYXJrKSxcbiAgICBtZWRpdW06IChsaWdodDogJG1lZGl1bSwgZGFyazogJGdyYXktMjAwKSxcbiAgICBkYXJrOiAobGlnaHQ6ICRkYXJrLCBkYXJrOiAkbGlnaHQpLFxuKSAhZGVmYXVsdDtcblxuLyoqXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcbiAqXG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9ncmlkI2RlZmF1bHQtYnJlYWtwb2ludHNcbiAqL1xuXG4vLyBUaGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXG4kc2NyZWVuLWJyZWFrcG9pbnRzOiAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgdGFibGV0OiA5OTJweCxcbiAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaW1hZ2UtYmFja2dyb3VuZDogIzgxZWNlYywgIzc0YjlmZiwgI2EyOWJmZSwgI2RmZTZlOSwgIzAwYjg5NCwgIzA5ODRlMywgI2IyYmVjMywgI2ZkY2I2ZSwgI2ZkNzlhOCwgIzZjNWNlNyAhZGVmYXVsdDtcbiRjb3JlLWRkLXF1ZXN0aW9uLWNvbG9yczogI0ZGRkZGRiwgI0IwQzRERSwgI0RDRENEQywgI0Q4QkZEOCwgIzg3Q0VGQSwgI0RBQTUyMCwgI0ZGRDcwMCwgI0YwRTY4QyAhZGVmYXVsdDtcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xuXG4kY29yZS1maXhlZC11cmw6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtYWx3YXlzLXNob3ctbWFpbi1tZW51OiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWZvcm1hdC10ZXh0LW5ldmVyLXNob3J0ZW46IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1oaWRlLWNvdXJzZWltYWdlLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLWNvdXJzZTogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xuXG4kY29yZS1jb3Vyc2UtaGlkZS10aHVtYi1vbi1jYXJkczogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcbiRjb3JlLWNvdXJzZS1oaWRlLXByb2dyZXNzLW9uLWNhcmRzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUtZGFyazogJGNvcmUtbG9naW4tYnV0dG9uLW91dGxpbmUgIWRlZmF1bHQ7XG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWxvYWRpbmctY29sb3ItZGFyazogJHRleHQtY29sb3ItZGFyayAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtZm9yZ290LXBhc3N3b3JkOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcbiRjb3JlLWxvZ2luLWhpZGUtcXJjb2RlOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBtb3JlIHBhZ2UuIChkZXByZWNhdGVkIG9uIDQuMClcbiRjb3JlLW1vcmUtaGlkZS1zaXRlaW5mbzogZmFsc2UgIWRlZmF1bHQ7XG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xuJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmw6IGZhbHNlICFkZWZhdWx0O1xuXG4vLyBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHVzZXIgcGFnZS5cbiRjb3JlLXVzZXItaGlkZS1zaXRlaW5mbzogJGNvcmUtbW9yZS1oaWRlLXNpdGVpbmZvICFkZWZhdWx0O1xuJGNvcmUtdXNlci1oaWRlLXNpdGVuYW1lOiAkY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWUgIWRlZmF1bHQ7XG4kY29yZS11c2VyLWhpZGUtc2l0ZXVybDogJGNvcmUtbW9yZS1oaWRlLXNpdGV1cmwgIWRlZmF1bHQ7XG5cbi8vIEFjdGl2aXR5IGljb24gYmFja2dyb3VuZCBjb2xvcnMuXG4kYWN0aXZpdHktaWNvbi1jb2xvcnM6IChcbiAgICBhZG1pbmlzdHJhdGlvbjogIzVkNjNmNixcbiAgICBhc3Nlc3NtZW50OiAjZWI2NmEyLFxuICAgIGNvbGxhYm9yYXRpb246ICNmNzYzNGQsXG4gICAgY29tbXVuaWNhdGlvbjogIzExYTY3NixcbiAgICBjb250ZW50OiAjMzk5YmUyLFxuICAgIGludGVyZmFjZTogI2EzNzhmZlxuKSAhZGVmYXVsdDtcblxuLy8gQ2FsZW5kYXIgZXZlbnQgY2F0ZWdvcnkgYmFja2dyb3VuZCBjb2xvcnMuXG4kY2FsZW5kYXItZXZlbnQtY2F0ZWdvcnktY29sb3JzOiAoXG4gICAgY2F0ZWdvcnk6ICM4ZTI0YWEsXG4gICAgY291cnNlOiAkcmVkLFxuICAgIGdyb3VwOiAkeWVsbG93LFxuICAgIHVzZXI6ICRibHVlLFxuICAgIHNpdGU6ICRncmVlblxuKSAhZGVmYXVsdDtcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xuXG46aG9zdCB7XG4gICAgLS1saXN0LWl0ZW0tbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLml0ZW0taW5wdXQ6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvcmUtbG9naW4tc2l0ZS1jb25uZWN0IHtcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XG59XG5cbi5pdGVtIGlvbi10aHVtYm5haWwge1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZTNkKC01MCUsMCwwKSk7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbn1cblxuOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSB7XG5cbiAgICAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwJTtcbiAgICB9XG5cbn1cblxuLmNvcmUtbG9naW4tc2l0ZS1sb2dvLFxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LFxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LWZvdW5kIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XG4gICAgbWF4LWhlaWdodDogOTk5OXB4O1xuXG4gICAgJi5oaWRkZW4ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QtZm91bmQuZGltbWVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb3JlLWxvZ2luLXNpdGUtbGlzdC1sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuXG4uY29yZS1sb2dpbi1zaXRlLW5vbGlzdC1sb2FkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0uY29yZS1sb2dpbi1zaXRlLWxpc3QtdGl0bGUge1xuICAgIGlvbi1sYWJlbCwgaW9uLWxhYmVsIGgyLml0ZW0taGVhZGluZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gICAgaW9uLWNvbnRlbnQgLmNvcmUtbG9naW4tc2l0ZS1sb2dvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgICAgICAmLmhpZGRlbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29yZS1sb2dpbi1lbnRlcmVkLXNpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcblxuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHZhcigtLWdyYXktMzAwKTtcbiAgICB9XG59XG5cbi5jb3JlLWxvZ2luLWRlZmF1bHQtaWNvbiB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.ts":
/*!****************************************************!*\
  !*** ./src/core/features/login/pages/site/site.ts ***!
  \****************************************************/
/*! exports provided: CoreLoginSitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePage", function() { return CoreLoginSitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/login/components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
/* harmony import */ var _classes_errors_siteerror__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @classes/errors/siteerror */ "./src/core/classes/errors/siteerror.ts");
/* harmony import */ var _features_user_services_support__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @features/user/services/support */ "./src/core/features/user/services/support.ts");
/* harmony import */ var _components_error_info_error_info__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/error-info/error-info */ "./src/core/components/error-info/error-info.ts");
/* harmony import */ var _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @features/user/classes/support/guest-support-config */ "./src/core/features/user/classes/support/guest-support-config.ts");
/* harmony import */ var _classes_errors_loginerror__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @classes/errors/loginerror */ "./src/core/classes/errors/loginerror.ts");
/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @classes/site */ "./src/core/classes/site.ts");
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
 * Site (url) chooser when adding a new site.
 */
let CoreLoginSitePage = class CoreLoginSitePage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        let url = '';
        this.siteSelector = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.multisitesdisplay;
        const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.sitefindersettings || {};
        this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
        // Load fixed sites if they're set.
        if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].hasSeveralFixedSites()) {
            url = this.initSiteSelector();
        }
        else if (_core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.enableonboarding && !_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isIOS()) {
            this.initOnboarding();
        }
        this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].displayQRInSiteScreen();
        this.siteForm = this.formBuilder.group({
            siteUrl: [url, this.moodleUrlValidator()],
        });
        this.searchFunction = _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].debounce((search) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            search = search.trim();
            if (search.length >= 3) {
                // Update the sites list.
                const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].findSites(search);
                // Add UI tweaks.
                this.sites = this.extendCoreLoginSiteInfo(sites);
                this.hasSites = !!this.sites.length;
            }
            else {
                // Not reseting the array to allow animation to be displayed.
                this.hasSites = false;
            }
            this.loadingSites = false;
        }), 1000);
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
    }
    /**
     * Initialize the site selector.
     *
     * @returns URL of the first site.
     */
    initSiteSelector() {
        this.fixedSites = this.extendCoreLoginSiteInfo(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].getFixedSites());
        this.siteSelector = 'list'; // In case it's not defined
        // Do not show images if none are set.
        if (!this.fixedSites.some((site) => !!site.imageurl)) {
            this.siteFinderSettings.displayimage = false;
        }
        this.filteredSites = this.fixedSites;
        return this.fixedSites[0].url;
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @returns Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_5__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            if (!onboardingDone) {
                // Check onboarding.
                this.showOnboarding();
            }
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @returns Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            if (_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].hasDefaultImage(site) && this.siteFinderSettings.defaultimageurl) {
                site.imageurl = this.siteFinderSettings.defaultimageurl;
            }
            return site;
        });
    }
    /**
     * Validate Url.
     *
     * @returns {ValidatorFn} Validation results.
     */
    moodleUrlValidator() {
        return (control) => {
            const value = control.value.trim();
            let valid = value.length >= 3 && _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].isValidMoodleUrl(value);
            if (!valid) {
                const demo = !!_services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__["CoreLoginSiteHelpComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     * @returns Promise resolved when done.
     */
    connect(e, url, foundSite) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            if (!url) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.login.siteurlrequired', true);
                return;
            }
            if (!_services_network__WEBPACK_IMPORTED_MODULE_4__["CoreNetwork"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            url = url.trim();
            if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                this.showLoginIssue(null, new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.errorexampleurl')));
                return;
            }
            const siteData = _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getDemoSiteData(url);
            if (siteData) {
                // It's a demo site.
                yield this.loginDemoSite(siteData);
            }
            else {
                // Not a demo site.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
                let checkResult;
                try {
                    checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(url);
                }
                catch (error) {
                    // Attempt guessing the domain if the initial check failed
                    const domain = _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].guessMoodleDomain(url);
                    if (domain && domain != url) {
                        try {
                            checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(domain);
                        }
                        catch (secondError) {
                            // Try to use the first error.
                            modal.dismiss();
                            return this.showLoginIssue(url, error || secondError);
                        }
                    }
                    else {
                        modal.dismiss();
                        return this.showLoginIssue(url, error);
                    }
                }
                yield this.login(checkResult, foundSite);
                modal.dismiss();
            }
        });
    }
    /**
     * Authenticate in a demo site.
     *
     * @param siteData Site data.
     * @returns Promise resolved when done.
     */
    loginDemoSite(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].getUserToken(siteData.url, siteData.username, siteData.password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSiteHome();
                return;
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @returns Promise resolved after logging in.
     */
    login(response, foundSite) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                }
                else {
                    const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                    if (foundSite && !this.fixedSites) {
                        pageParams['siteName'] = foundSite.name;
                        pageParams['logoUrl'] = foundSite.imageurl;
                    }
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: pageParams,
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
        });
    }
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    showLoginIssue(url, error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let errorMessage = _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].getErrorMessage(error);
            let siteExists = false;
            let supportConfig = undefined;
            let errorTitle;
            let errorDetails;
            let errorCode;
            if (error instanceof _classes_errors_siteerror__WEBPACK_IMPORTED_MODULE_21__["CoreSiteError"]) {
                supportConfig = error.supportConfig;
                errorDetails = error.errorDetails;
                errorCode = error.errorcode;
                siteExists = supportConfig instanceof _features_user_classes_support_guest_support_config__WEBPACK_IMPORTED_MODULE_24__["CoreUserGuestSupportConfig"];
            }
            if (error instanceof _classes_errors_loginerror__WEBPACK_IMPORTED_MODULE_25__["CoreLoginError"]) {
                errorTitle = error.title;
            }
            if (errorDetails) {
                errorMessage = `<p>${errorMessage}</p><div class="core-error-info-container"></div>`;
            }
            const alertSupportConfig = supportConfig;
            const buttons = [
                {
                    text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.tryagain'),
                    role: 'cancel',
                },
                (alertSupportConfig === null || alertSupportConfig === void 0 ? void 0 : alertSupportConfig.canContactSupport()) ? {
                    text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.contactsupport'),
                    handler: () => _features_user_services_support__WEBPACK_IMPORTED_MODULE_22__["CoreUserSupport"].contact({
                        supportConfig: alertSupportConfig,
                        subject: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect', { $a: _classes_site__WEBPACK_IMPORTED_MODULE_26__["CoreSite"].MINIMUM_MOODLE_VERSION }),
                        message: `Error: ${errorCode}\n\n${errorDetails}`,
                    }),
                }
                    : (!siteExists
                        ? {
                            text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.needhelp'),
                            cssClass: 'core-login-need-help',
                            handler: () => this.showHelp(),
                        }
                        : null),
            ].filter(button => !!button);
            // @todo Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
            const alertElement = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showAlertWithOptions({
                header: errorTitle !== null && errorTitle !== void 0 ? errorTitle : (siteExists
                    ? _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect', { $a: _classes_site__WEBPACK_IMPORTED_MODULE_26__["CoreSite"].MINIMUM_MOODLE_VERSION })
                    : _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.sitenotfound')),
                message: errorMessage !== null && errorMessage !== void 0 ? errorMessage : _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.sitenotfoundhelp'),
                buttons: buttons,
            });
            if (errorDetails) {
                const containerElement = alertElement.querySelector('.core-error-info-container');
                if (containerElement) {
                    containerElement.innerHTML = _components_error_info_error_info__WEBPACK_IMPORTED_MODULE_23__["CoreErrorInfoComponent"].render(errorDetails, errorCode);
                }
            }
        });
    }
    /**
     * The filter has changed.
     *
     * @param event Received Event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterChanged(event) {
        var _a;
        const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                site.location.toLowerCase().indexOf(newValue) > -1);
        }
    }
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    searchSite(e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                title: '',
                location: '',
                noProtocolUrl: _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = undefined;
        }
        this.searchFunction(search.trim());
    }
    /**
     * Show instructions and scan QR code.
     *
     * @returns Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].showScanQRInstructions();
                yield this.scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @returns Promise resolved when done.
     */
    scanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].isCustomURL(text)) {
                try {
                    yield _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].handleCustomURL(text);
                }
                catch (error) {
                    if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                        // An error ocurred, but it's an authentication URL and we have the site URL.
                        this.treatErrorInAuthenticationCustomURL(text, error);
                    }
                    else {
                        _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                    }
                }
                return;
            }
            // Not a custom URL scheme, check if it's a URL scheme to another app.
            const scheme = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].getUrlProtocol(text);
            if (scheme && scheme != 'http' && scheme != 'https') {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errorurlschemeinvalidscheme', { $a: text }));
                return;
            }
            const allowed = yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSiteUrlAllowed(text);
            if (allowed) {
                // Put the text in the field (if present).
                this.siteForm.controls.siteUrl.setValue(text);
                this.connect(new Event('click'), text);
            }
            else {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showErrorModal('core.errorurlschemeinvalidsite', true);
            }
        });
    }
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @returns Promise resolved when done.
     */
    treatErrorInAuthenticationCustomURL(customURL, error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_8__["CoreDomUtils"].showModalLoading();
            // Set the site URL in the input.
            this.siteForm.controls.siteUrl.setValue(siteUrl);
            try {
                // Check if site uses SSO.
                const response = yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkSite(siteUrl);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_6__["CoreSites"].checkApplication(response.config);
                if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_9__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // No SSO, go to credentials page.
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: {
                            siteUrl: response.siteUrl,
                            siteConfig: response.config,
                        },
                    });
                }
            }
            catch (_b) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
            // Now display the error.
            error.error = _services_utils_text__WEBPACK_IMPORTED_MODULE_19__["CoreTextUtils"].addTextToError(error.error, '<br><br>' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.youcanstillconnectwithcredentials'));
            _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
        });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginSitePage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['siteFormEl',] }]
};
CoreLoginSitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site.scss */ "./src/core/features/login/pages/site/site.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginSitePage);



/***/ }),

/***/ "./src/core/features/settings/classes/settings-handlers-source.ts":
/*!************************************************************************!*\
  !*** ./src/core/features/settings/classes/settings-handlers-source.ts ***!
  \************************************************************************/
/*! exports provided: CoreSettingsHandlersSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsHandlersSource", function() { return CoreSettingsHandlersSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-source */ "./src/core/classes/items-management/routed-items-manager-source.ts");
/* harmony import */ var _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings-delegate */ "./src/core/features/settings/services/settings-delegate.ts");
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
 * Provides a collection of site settings.
 */
class CoreSettingsHandlersSource extends _classes_items_management_routed_items_manager_source__WEBPACK_IMPORTED_MODULE_1__["CoreRoutedItemsManagerSource"] {
    constructor() {
        super(...arguments);
        this.handlers = [];
    }
    /**
     * @inheritdoc
     */
    loadPageItems() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handlers = _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__["CoreSettingsDelegate"].getHandlers();
            return {
                items: this.handlers.filter((handler) => 'page' in handler),
            };
        });
    }
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}


/***/ }),

/***/ "./src/core/features/settings/pages/site/site.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreSitePreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return CoreSitePreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/settings/pages/site/site.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _site_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-routing */ "./src/core/features/settings/pages/site/site-routing.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["resolveModuleRoutes"])(injector, _site_routing__WEBPACK_IMPORTED_MODULE_6__["SITE_PREFERENCES_ROUTES"]);
    const mobileRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
            children: routes.siblings,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet),
    ];
}
let CoreSitePreferencesPageModule = class CoreSitePreferencesPageModule {
};
CoreSitePreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePreferencesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.ts ***!
  \*******************************************************/
/*! exports provided: CoreSitePreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPage", function() { return CoreSitePreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @classes/items-management/list-items-manager */ "./src/core/classes/items-management/list-items-manager.ts");
/* harmony import */ var _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @classes/items-management/routed-items-manager-sources-tracker */ "./src/core/classes/items-management/routed-items-manager-sources-tracker.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/network */ "./src/core/services/network.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @features/settings/classes/settings-handlers-source */ "./src/core/features/settings/classes/settings-handlers-source.ts");
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
var CoreSitePreferencesPage_1;















/**
 * Page that displays the list of site settings pages.
 */
let CoreSitePreferencesPage = CoreSitePreferencesPage_1 = class CoreSitePreferencesPage {
    constructor() {
        this.dataSaver = false;
        this.limitedConnection = false;
        this.isOnline = true;
        this.isDestroyed = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSiteId();
        const source = _classes_items_management_routed_items_manager_sources_tracker__WEBPACK_IMPORTED_MODULE_7__["CoreRoutedItemsManagerSourcesTracker"].getOrCreateSource(_features_settings_classes_settings_handlers_source__WEBPACK_IMPORTED_MODULE_14__["CoreSettingsHandlersSource"], []);
        this.handlers = new _classes_items_management_list_items_manager__WEBPACK_IMPORTED_MODULE_6__["CoreListItemsManager"](source, CoreSitePreferencesPage_1);
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_2__["CoreEvents"].SITE_UPDATED, () => {
            this.refreshData();
        }, this.siteId);
        this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
        this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
        this.networkObserver = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_11__["NgZone"].run(() => {
                this.isOnline = _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isOnline();
                this.limitedConnection = this.isOnline && _services_network__WEBPACK_IMPORTED_MODULE_10__["CoreNetwork"].isNetworkAccessLimited();
            });
        });
    }
    get handlerItems() {
        return this.handlers.getSource().handlers;
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataSaver = yield _services_config__WEBPACK_IMPORTED_MODULE_13__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_12__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
            const pageToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteParam('page');
            try {
                yield this.fetchData();
            }
            finally {
                const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                if (handler) {
                    this.handlers.watchSplitViewOutlet(this.splitView);
                    yield this.handlers.select(handler);
                }
                else {
                    yield this.handlers.start(this.splitView);
                }
            }
        });
    }
    /**
     * Fetch Data.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.handlers.load();
        });
    }
    /**
     * Syncrhonizes the site.
     */
    synchronize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Using syncOnlyOnWifi false to force manual sync.
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].synchronizeSite(false, this.siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.sitesyncfailed', true);
            }
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @returns True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing() {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_8__["CoreSettingsHelper"].getSiteSyncPromise(this.siteId);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.handlers.getSource().setDirty(true);
        this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.isDestroyed = true;
        this.sitesObserver.off();
        this.networkObserver.unsubscribe();
        this.handlers.destroy();
    }
};
CoreSitePreferencesPage.ctorParameters = () => [];
CoreSitePreferencesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_5__["CoreSplitViewComponent"],] }]
};
CoreSitePreferencesPage = CoreSitePreferencesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-preferences',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html")).default,
    })
], CoreSitePreferencesPage);



/***/ })

}]);
//# sourceMappingURL=pages-site-site-module.js.map