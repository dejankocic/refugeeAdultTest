(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "n7Wg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreMainMenuLazyModule", function() { return CoreMainMenuLazyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tyNb");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("L3Fv");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vY5A");
/* harmony import */ var _mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("o11a");
/* harmony import */ var _pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tVmb");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("u7qe");
/* harmony import */ var _services_mainmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vPQ6");
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
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__[/* resolveModuleRoutes */ "d"])(injector, _mainmenu_routing_module__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_MENU_ROUTES */ "b"]);
    return [
        {
            path: '',
            component: _pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__[/* CoreMainMenuPage */ "a"],
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__[/* CoreMainMenuHomeHandlerService */ "b"].PAGE_NAME,
                },
                {
                    path: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__[/* CoreMainMenuHomeHandlerService */ "b"].PAGE_NAME,
                    loadChildren: () => __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, "+hPx")).then(m => m.CoreMainMenuHomePageModule),
                },
                {
                    path: _services_mainmenu__WEBPACK_IMPORTED_MODULE_7__[/* CoreMainMenuProvider */ "b"].MORE_PAGE_NAME,
                    loadChildren: () => __webpack_require__.e(/* import() */ 103).then(__webpack_require__.bind(null, "ALyF")).then(m => m.CoreMainMenuMorePageModule),
                },
                ...routes.children,
            ],
        },
        ...routes.siblings,
    ];
}
let CoreMainMenuLazyModule = /*@__PURE__*/ (() => {
    class CoreMainMenuLazyModule {
    }
    CoreMainMenuLazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreMainMenuLazyModule });
    CoreMainMenuLazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreMainMenuLazyModule_Factory(t) { return new (t || CoreMainMenuLazyModule)(); }, providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_1__[/* ROUTES */ "g"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__[/* Injector */ "x"]] },
        ], imports: [[
                _core_shared_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreSharedModule */ "a"],
            ]] });
    return CoreMainMenuLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__[/* ɵɵsetNgModuleScope */ "ld"](CoreMainMenuLazyModule, { declarations: [_pages_menu_menu__WEBPACK_IMPORTED_MODULE_5__[/* CoreMainMenuPage */ "a"]], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_2__[/* CoreSharedModule */ "a"]] }); })();


/***/ })

}]);