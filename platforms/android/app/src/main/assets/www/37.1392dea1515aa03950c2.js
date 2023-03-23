(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "muSn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionRoute", function() { return /* binding */ AddonMessagesDiscussionRoute; });
__webpack_require__.d(__webpack_exports__, "AddonMessagesLazyModule", function() { return /* binding */ messages_lazy_module_AddonMessagesLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/features/mainmenu/mainmenu-tab-routing.module.ts
var mainmenu_tab_routing_module = __webpack_require__("wG2S");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/addons/messages/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("OQOI");

// EXTERNAL MODULE: ./src/addons/messages/services/messages.ts
var messages = __webpack_require__("KMk0");

// CONCATENATED MODULE: ./src/addons/messages/guards/index.ts
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
 * Guard to redirect to the right page based on the current Moodle site version.
 */
let guards_AddonMessagesIndexGuard = /*@__PURE__*/ (() => {
    class AddonMessagesIndexGuard {
        /**
         * @inheritdoc
         */
        canActivate() {
            return this.guard();
        }
        /**
         * Check if there is a pending redirect and trigger it.
         */
        guard() {
            const enabled = messages["a" /* AddonMessages */].isGroupMessagingEnabled();
            const path = `/main/${mainmenu["b" /* AddonMessagesMainMenuHandlerService */].PAGE_NAME}/` + (enabled ? 'group-conversations' : 'index');
            return singletons["G" /* Router */].parseUrl(path);
        }
    }
    AddonMessagesIndexGuard.ɵfac = function AddonMessagesIndexGuard_Factory(t) { return new (t || AddonMessagesIndexGuard)(); };
    AddonMessagesIndexGuard.ɵprov = core["uc" /* ɵɵdefineInjectable */]({ token: AddonMessagesIndexGuard, factory: AddonMessagesIndexGuard.ɵfac, providedIn: 'root' });
    return AddonMessagesIndexGuard;
})();

// CONCATENATED MODULE: ./src/addons/messages/messages-lazy.module.ts
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





const AddonMessagesDiscussionRoute = {
    path: 'discussion',
    loadChildren: () => __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(null, "o7gM"))
        .then(m => m.AddonMessagesDiscussionPageModule),
};
function buildRoutes(injector) {
    return [
        {
            path: 'index',
            loadChildren: () => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, "fArg")).then(m => m.AddonMessagesDiscussions35PageModule),
        },
        {
            path: 'contacts-35',
            loadChildren: () => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, "bxKJ")).then(m => m.AddonMessagesContacts35PageModule),
        },
        {
            path: 'group-conversations',
            loadChildren: () => __webpack_require__.e(/* import() */ 42).then(__webpack_require__.bind(null, "twN0"))
                .then(m => m.AddonMessagesGroupConversationsPageModule),
        },
        AddonMessagesDiscussionRoute,
        {
            path: 'search',
            loadChildren: () => __webpack_require__.e(/* import() */ 43).then(__webpack_require__.bind(null, "+T7f"))
                .then(m => m.AddonMessagesSearchPageModule),
        },
        {
            path: 'contacts',
            loadChildren: () => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "617G"))
                .then(m => m.AddonMessagesContactsPageModule),
        },
        {
            path: 'preferences',
            loadChildren: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "7MVA")).then(m => m.AddonMessagesSettingsPageModule),
        },
        ...Object(mainmenu_tab_routing_module["b" /* buildTabMainRoutes */])(injector, {
            canActivate: [guards_AddonMessagesIndexGuard],
        }),
    ];
}
let messages_lazy_module_AddonMessagesLazyModule = /*@__PURE__*/ (() => {
    class AddonMessagesLazyModule {
    }
    AddonMessagesLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonMessagesLazyModule });
    AddonMessagesLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonMessagesLazyModule_Factory(t) { return new (t || AddonMessagesLazyModule)(); }, providers: [
            {
                provide: router["g" /* ROUTES */],
                multi: true,
                deps: [core["x" /* Injector */]],
                useFactory: buildRoutes,
            },
        ], imports: [router["m" /* RouterModule */]] });
    return AddonMessagesLazyModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](messages_lazy_module_AddonMessagesLazyModule, { exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);