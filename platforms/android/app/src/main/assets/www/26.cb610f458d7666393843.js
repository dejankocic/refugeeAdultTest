(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "Cjie":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEditRoute", function() { return AddonCalendarEditRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarEventRoute", function() { return AddonCalendarEventRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarLazyModule", function() { return AddonCalendarLazyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tyNb");
/* harmony import */ var _features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wG2S");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tETG");
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





const AddonCalendarEditRoute = {
    path: 'edit/:eventId',
    loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, "YHcW")).then(m => m.AddonCalendarEditEventPageModule),
};
const AddonCalendarEventRoute = {
    path: 'event/:id',
    loadChildren: () => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, "LfF/")).then(m => m.AddonCalendarEventPageModule),
};
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__[/* AddonCalendarMainMenuHandlerService */ "b"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "Vuuv")).then(m => m.AddonCalendarIndexPageModule),
        },
        {
            path: 'list',
            data: {
                mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_3__[/* AddonCalendarMainMenuHandlerService */ "b"].PAGE_NAME,
            },
            loadChildren: () => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "Ul7S")).then(m => m.AddonCalendarListPageModule),
        },
        {
            path: 'settings',
            loadChildren: () => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, "37jC")).then(m => m.AddonCalendarSettingsPageModule),
        },
        {
            path: 'day',
            loadChildren: () => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "MncD")).then(m => m.AddonCalendarDayPageModule),
        },
        AddonCalendarEventRoute,
        AddonCalendarEditRoute,
        ...Object(_features_mainmenu_mainmenu_tab_routing_module__WEBPACK_IMPORTED_MODULE_2__[/* buildTabMainRoutes */ "b"])(injector, {
            redirectTo: 'index',
            pathMatch: 'full',
        }),
    ];
}
let AddonCalendarLazyModule = /*@__PURE__*/ (() => {
    class AddonCalendarLazyModule {
    }
    AddonCalendarLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineNgModule */ "wc"]({ type: AddonCalendarLazyModule });
    AddonCalendarLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineInjector */ "vc"]({ factory: function AddonCalendarLazyModule_Factory(t) { return new (t || AddonCalendarLazyModule)(); }, providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__[/* ROUTES */ "g"],
                multi: true,
                deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* Injector */ "x"]],
                useFactory: buildRoutes,
            },
        ], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] });
    return AddonCalendarLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵsetNgModuleScope */ "ld"](AddonCalendarLazyModule, { exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__[/* RouterModule */ "m"]] }); })();


/***/ })

}]);