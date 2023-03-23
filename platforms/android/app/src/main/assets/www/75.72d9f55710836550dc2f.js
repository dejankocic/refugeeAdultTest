(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "iGeg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotificationsLazyModule", function() { return AddonNotificationsLazyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tyNb");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wG2S");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZKOL");
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
    return [
        {
            path: 'list',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__[/* AddonNotificationsMainMenuHandlerService */ "b"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, "NNBU")).then(m => m.AddonNotificationsListPageModule),
        },
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_2__[/* buildTabMainRoutes */ "b"])(injector, {
            redirectTo: 'list',
            pathMatch: 'full',
        }),
    ];
}
let AddonNotificationsLazyModule = /*@__PURE__*/ (() => {
    class AddonNotificationsLazyModule {
    }
    AddonNotificationsLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineNgModule */ "wc"]({ type: AddonNotificationsLazyModule });
    AddonNotificationsLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineInjector */ "vc"]({ factory: function AddonNotificationsLazyModule_Factory(t) { return new (t || AddonNotificationsLazyModule)(); }, providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__[/* ROUTES */ "g"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* Injector */ "x"]],
                useFactory: buildRoutes,
            },
        ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] });
    return AddonNotificationsLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵsetNgModuleScope */ "ld"](AddonNotificationsLazyModule, { exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] }); })();


/***/ })

}]);