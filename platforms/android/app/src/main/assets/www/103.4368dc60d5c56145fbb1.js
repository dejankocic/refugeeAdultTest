(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "ALyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreMainMenuMorePageModule", function() { return /* binding */ more_module_CoreMainMenuMorePageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./src/core/features/mainmenu/services/mainmenu-delegate.ts
var mainmenu_delegate = __webpack_require__("35jd");

// EXTERNAL MODULE: ./src/core/features/mainmenu/services/mainmenu.ts
var mainmenu = __webpack_require__("vPQ6");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/urlschemes.ts
var urlschemes = __webpack_require__("y9BN");

// EXTERNAL MODULE: ./src/core/features/contentlinks/services/contentlinks-helper.ts
var contentlinks_helper = __webpack_require__("vnm2");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/mainmenu/pages/more/more.ts

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























function CoreMainMenuMorePage_ion_item_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 17);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 13);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p", 18);
        core["zc" /* ɵɵelement */](6, "core-format-text", 19);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "p", 20);
        core["pd" /* ɵɵtext */](8);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("userId", ctx_r0.siteInfo.userid);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r0.siteInfo);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.siteInfo.fullname);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.siteName)("contextInstanceId", 0)("wsNotFiltered", true);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.siteUrl);
    }
}
function CoreMainMenuMorePage_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "ion-spinner");
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.loading"));
    }
}
function CoreMainMenuMorePage_ion_item_13_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 27);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("hidden", handler_r7.loading || !handler_r7.badge);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", handler_r7.badge, " ");
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function CoreMainMenuMorePage_ion_item_13_span_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 28);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, handler_r7.badgeA11yText, core["ad" /* ɵɵpureFunction1 */](4, _c0, handler_r7.badge)), " ");
    }
}
function CoreMainMenuMorePage_ion_item_13_ion_spinner_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-spinner", 29);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.loading"));
    }
}
const _c1 = function (a1) { return ["core-moremenu-handler", a1]; };
function CoreMainMenuMorePage_ion_item_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 22);
        core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_ion_item_13_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r14); const handler_r7 = ctx.$implicit; const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.openHandler(handler_r7); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 23);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 13);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, CoreMainMenuMorePage_ion_item_13_ion_badge_7_Template, 2, 2, "ion-badge", 24);
        core["nd" /* ɵɵtemplate */](8, CoreMainMenuMorePage_ion_item_13_span_8_Template, 3, 6, "span", 25);
        core["nd" /* ɵɵtemplate */](9, CoreMainMenuMorePage_ion_item_13_ion_spinner_9_Template, 2, 3, "ion-spinner", 26);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const handler_r7 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("ngClass", core["ad" /* ɵɵpureFunction1 */](11, _c1, handler_r7.class || ""));
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 7, handler_r7.title));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("name", handler_r7.icon);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 9, handler_r7.title));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r7.showBadge);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r7.showBadge && handler_r7.badge && handler_r7.badgeA11yText);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", handler_r7.showBadge && handler_r7.loading);
    }
}
function CoreMainMenuMorePage_ng_container_14_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 32);
        core["zc" /* ɵɵelement */](1, "ion-icon", 23);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 13);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r15 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("href", item_r15.url)("capture", item_r15.type == "app")("inApp", item_r15.type == "inappbrowser")("detailIcon", item_r15.type == "browser" ? "open-outline" : "chevron-forward");
        core["mc" /* ɵɵattribute */]("aria-label", item_r15.label);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("name", item_r15.icon);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](item_r15.label);
    }
}
function CoreMainMenuMorePage_ng_container_14_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 33);
        core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_ng_container_14_ion_item_2_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r21); const item_r15 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r19 = core["Oc" /* ɵɵnextContext */](); return ctx_r19.openItem(item_r15); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 23);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 13);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r15 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["mc" /* ɵɵattribute */]("aria-label", item_r15.label);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("name", item_r15.icon);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](item_r15.label);
    }
}
function CoreMainMenuMorePage_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreMainMenuMorePage_ng_container_14_ion_item_1_Template, 5, 7, "ion-item", 30);
        core["nd" /* ɵɵtemplate */](2, CoreMainMenuMorePage_ng_container_14_ion_item_2_Template, 5, 3, "ion-item", 31);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r15 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r15.type != "embedded");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r15.type == "embedded");
    }
}
function CoreMainMenuMorePage_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_ion_item_15_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r24); const ctx_r23 = core["Oc" /* ɵɵnextContext */](); return ctx_r23.scanQR(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 34);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 13);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.scanqr"));
    }
}
function CoreMainMenuMorePage_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 36);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 13);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("href", ctx_r5.siteInfo.siteurl);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.mainmenu.website"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "core.mainmenu.website"));
    }
}
function CoreMainMenuMorePage_ion_item_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 37);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 38);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 13);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("href", ctx_r6.docsUrl);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.mainmenu.help"));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 5, "core.mainmenu.help"));
    }
}
/**
 * Page that displays the main menu of the app.
 */
let more_CoreMainMenuMorePage = /*@__PURE__*/ (() => {
    class CoreMainMenuMorePage {
        constructor() {
            var _a;
            this.handlersLoaded = false;
            this.logoutLabel = 'core.mainmenu.changesite';
            this.loggedOut = false;
            this.langObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].LANGUAGE_CHANGED, this.loadSiteInfo.bind(this));
            this.updateSiteObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, this.loadSiteInfo.bind(this), sites["b" /* CoreSites */].getCurrentSiteId());
            this.loadSiteInfo();
            this.showScanQR = utils["a" /* CoreUtils */].canScanQR() &&
                !((_a = sites["b" /* CoreSites */].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.isFeatureDisabled('CoreMainMenuDelegate_QrReader'));
        }
        /**
         * Initialize component.
         */
        ngOnInit() {
            // Load the handlers.
            this.subscription = mainmenu_delegate["a" /* CoreMainMenuDelegate */].getHandlersObservable().subscribe((handlers) => {
                this.allHandlers = handlers;
                this.initHandlers();
            });
            window.addEventListener('resize', this.initHandlers.bind(this));
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c;
            window.removeEventListener('resize', this.initHandlers.bind(this));
            (_a = this.langObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.updateSiteObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.subscription) === null || _c === void 0 ? void 0 : _c.unsubscribe();
        }
        /**
         * Init handlers on change (size or handlers).
         */
        initHandlers() {
            if (!this.allHandlers) {
                return;
            }
            // Calculate the main handlers not to display them in this view.
            const mainHandlers = this.allHandlers
                .filter((handler) => !handler.onlyInMore)
                .slice(0, mainmenu["a" /* CoreMainMenu */].getNumItems());
            // Get only the handlers that don't appear in the main view.
            this.handlers = this.allHandlers.filter((handler) => mainHandlers.indexOf(handler) == -1);
            this.handlersLoaded = mainmenu_delegate["a" /* CoreMainMenuDelegate */].areHandlersLoaded();
        }
        /**
         * Load the site info required by the view.
         */
        loadSiteInfo() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const currentSite = sites["b" /* CoreSites */].getCurrentSite();
                if (!currentSite) {
                    return;
                }
                this.siteInfo = currentSite.getInfo();
                this.siteName = currentSite.getSiteName();
                this.siteUrl = currentSite.getURL();
                this.logoutLabel = login_helper["a" /* CoreLoginHelper */].getLogoutLabel(currentSite);
                this.showWeb = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_website');
                this.showHelp = !currentSite.isFeatureDisabled('CoreMainMenuDelegate_help');
                this.docsUrl = yield currentSite.getDocsUrl();
                this.customItems = yield mainmenu["a" /* CoreMainMenu */].getCustomMenuItems();
            });
        }
        /**
         * Open a handler.
         *
         * @param handler Handler to open.
         */
        openHandler(handler) {
            const params = handler.pageParams;
            services_navigator["a" /* CoreNavigator */].navigateToSitePath(handler.page, { params });
        }
        /**
         * Open an embedded custom item.
         *
         * @param item Item to open.
         */
        openItem(item) {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('viewer/iframe', { params: { title: item.label, url: item.url } });
        }
        /**
         * Open preferences.
         */
        openPreferences() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('preferences');
        }
        /**
         * Open settings.
         */
        openSettings() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('settings');
        }
        /**
         * Scan and treat a QR code.
         */
        scanQR() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Scan for a QR code.
                const text = yield utils["a" /* CoreUtils */].scanQR();
                if (!text) {
                    return;
                }
                if (urlschemes["a" /* CoreCustomURLSchemes */].isCustomURL(text)) {
                    // Is a custom URL scheme, handle it.
                    urlschemes["a" /* CoreCustomURLSchemes */].handleCustomURL(text).catch((error) => {
                        urlschemes["a" /* CoreCustomURLSchemes */].treatHandleCustomURLError(error);
                    });
                }
                else if (/^[^:]{2,}:\/\/[^ ]+$/i.test(text)) { // Check if it's a URL.
                    // Check if the app can handle the URL.
                    const treated = yield contentlinks_helper["a" /* CoreContentLinksHelper */].handleLink(text, undefined, true, true);
                    if (!treated) {
                        // Can't handle it, open it in browser.
                        (_a = sites["b" /* CoreSites */].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.openInBrowserWithAutoLoginIfSameSite(text);
                    }
                }
                else {
                    // It's not a URL, open it in a modal so the user can see it and copy it.
                    utils_text["a" /* CoreTextUtils */].viewText(singletons["L" /* Translate */].instant('core.qrscanner'), text, {
                        displayCopyButton: true,
                    });
                }
            });
        }
        /**
         * Logout the user.
         */
        logout() {
            this.loggedOut = true;
            sites["b" /* CoreSites */].logout();
        }
    }
    CoreMainMenuMorePage.ɵfac = function CoreMainMenuMorePage_Factory(t) { return new (t || CoreMainMenuMorePage)(); };
    CoreMainMenuMorePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreMainMenuMorePage, selectors: [["page-core-mainmenu-more"]], decls: 40, vars: 31, consts: [["slot", "start"], [3, "text"], ["contextLevel", "system", 3, "text", "contextInstanceId"], [3, "hideUntil"], ["button", "", "class", "ion-text-wrap", "core-user-link", "", "detail", "true", 3, "userId", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["button", "", "detail", "true", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["button", "", "detail", "true", 3, "click", 4, "ngIf"], ["button", "", "core-link", "", "autoLogin", "yes", "detail", "true", "detailIcon", "open-outline", 3, "href", 4, "ngIf"], ["button", "", "core-link", "", "autoLogin", "no", "detail", "true", "detailIcon", "open-outline", 3, "href", 4, "ngIf"], ["button", "", "detail", "true", 3, "click"], ["name", "fas-wrench", "slot", "start", "aria-hidden", "true"], [1, "item-heading"], ["name", "fas-sign-out-alt", "slot", "start", "aria-hidden", "true"], ["name", "fas-cogs", "slot", "start", "aria-hidden", "true"], ["button", "", "core-user-link", "", "detail", "true", 1, "ion-text-wrap", 3, "userId"], ["slot", "start", 3, "user"], [1, "core-moremenu-siteinfo", "core-moremenu-sitename"], ["contextLevel", "system", 3, "text", "contextInstanceId", "wsNotFiltered"], [1, "core-moremenu-siteinfo", "core-moremenu-siteurl"], [1, "ion-text-center"], ["button", "", "detail", "true", 3, "ngClass", "click"], ["slot", "start", "aria-hidden", "true", 3, "name"], ["slot", "end", "aria-hidden", "true", 3, "hidden", 4, "ngIf"], ["class", "sr-only", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["slot", "end", "aria-hidden", "true", 3, "hidden"], [1, "sr-only"], ["slot", "end"], ["button", "", "core-link", "", "class", "core-moremenu-customitem", "detail", "true", 3, "href", "capture", "inApp", "detailIcon", 4, "ngIf"], ["button", "", "class", "core-moremenu-customitem", "detail", "true", 3, "click", 4, "ngIf"], ["button", "", "core-link", "", "detail", "true", 1, "core-moremenu-customitem", 3, "href", "capture", "inApp", "detailIcon"], ["button", "", "detail", "true", 1, "core-moremenu-customitem", 3, "click"], ["name", "fas-qrcode", "slot", "start", "aria-hidden", "true"], ["button", "", "core-link", "", "autoLogin", "yes", "detail", "true", "detailIcon", "open-outline", 3, "href"], ["name", "fas-globe", "slot", "start", "aria-hidden", "true"], ["button", "", "core-link", "", "autoLogin", "no", "detail", "true", "detailIcon", "open-outline", 3, "href"], ["name", "far-life-ring", "slot", "start", "aria-hidden", "true"]], template: function CoreMainMenuMorePage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["zc" /* ɵɵelement */](6, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "core-loading", 3);
                core["Ec" /* ɵɵelementStart */](9, "ion-list");
                core["nd" /* ɵɵtemplate */](10, CoreMainMenuMorePage_ion_item_10_Template, 9, 7, "ion-item", 4);
                core["zc" /* ɵɵelement */](11, "core-spacer");
                core["nd" /* ɵɵtemplate */](12, CoreMainMenuMorePage_ion_item_12_Template, 4, 3, "ion-item", 5);
                core["nd" /* ɵɵtemplate */](13, CoreMainMenuMorePage_ion_item_13_Template, 10, 13, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](14, CoreMainMenuMorePage_ng_container_14_Template, 3, 2, "ng-container", 7);
                core["nd" /* ɵɵtemplate */](15, CoreMainMenuMorePage_ion_item_15_Template, 6, 3, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](16, CoreMainMenuMorePage_ion_item_16_Template, 7, 7, "ion-item", 9);
                core["nd" /* ɵɵtemplate */](17, CoreMainMenuMorePage_ion_item_17_Template, 7, 7, "ion-item", 10);
                core["Ec" /* ɵɵelementStart */](18, "ion-item", 11);
                core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_Template_ion_item_click_18_listener() { return ctx.openPreferences(); });
                core["Pc" /* ɵɵpipe */](19, "translate");
                core["zc" /* ɵɵelement */](20, "ion-icon", 12);
                core["Ec" /* ɵɵelementStart */](21, "ion-label");
                core["Ec" /* ɵɵelementStart */](22, "p", 13);
                core["pd" /* ɵɵtext */](23);
                core["Pc" /* ɵɵpipe */](24, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](25, "ion-item", 11);
                core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_Template_ion_item_click_25_listener() { return ctx.logout(); });
                core["Pc" /* ɵɵpipe */](26, "translate");
                core["zc" /* ɵɵelement */](27, "ion-icon", 14);
                core["Ec" /* ɵɵelementStart */](28, "ion-label");
                core["Ec" /* ɵɵelementStart */](29, "p", 13);
                core["pd" /* ɵɵtext */](30);
                core["Pc" /* ɵɵpipe */](31, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](32, "core-spacer");
                core["Ec" /* ɵɵelementStart */](33, "ion-item", 11);
                core["Mc" /* ɵɵlistener */]("click", function CoreMainMenuMorePage_Template_ion_item_click_33_listener() { return ctx.openSettings(); });
                core["Pc" /* ɵɵpipe */](34, "translate");
                core["zc" /* ɵɵelement */](35, "ion-icon", 15);
                core["Ec" /* ɵɵelementStart */](36, "ion-label");
                core["Ec" /* ɵɵelementStart */](37, "p", 13);
                core["pd" /* ɵɵtext */](38);
                core["Pc" /* ɵɵpipe */](39, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 17, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.siteName)("contextInstanceId", 0);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", !ctx.loggedOut);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.siteInfo);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", (!ctx.handlers || !ctx.handlers.length) && !ctx.handlersLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.handlers);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.customItems);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showScanQR);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showWeb && ctx.siteInfo);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showHelp);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](19, 19, "core.settings.preferences"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 21, "core.settings.preferences"));
                core["lc" /* ɵɵadvance */](2);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](26, 23, ctx.logoutLabel));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](31, 25, ctx.logoutLabel));
                core["lc" /* ɵɵadvance */](3);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](34, 27, "core.settings.appsettings"));
                core["lc" /* ɵɵadvance */](5);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](39, 29, "core.settings.appsettings"));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], spacer["a" /* CoreSpacerComponent */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["pb" /* IonSpinner */], common["q" /* NgClass */], ionic_angular["j" /* IonBadge */], directives_link["a" /* CoreLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["ion-item[_ngcontent-%COMP%]{--border-color:var(--core-more-item-border,var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13)))))}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--core-more-icon,rgba(var(--ion-text-color-rgb,0,0,0),.54))}ion-app.ios[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-app.ios   [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--core-more-icon,inherit)}"] });
    return CoreMainMenuMorePage;
})();

// EXTERNAL MODULE: ./src/core/features/mainmenu/mainmenu-tab-routing.module.ts
var mainmenu_tab_routing_module = __webpack_require__("wG2S");

// CONCATENATED MODULE: ./src/core/features/mainmenu/pages/more/more.module.ts
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







let more_module_CoreMainMenuMorePageModule = /*@__PURE__*/ (() => {
    class CoreMainMenuMorePageModule {
    }
    CoreMainMenuMorePageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreMainMenuMorePageModule });
    CoreMainMenuMorePageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreMainMenuMorePageModule_Factory(t) { return new (t || CoreMainMenuMorePageModule)(); }, providers: [
            {
                provide: router["g" /* ROUTES */],
                multi: true,
                deps: [core["x" /* Injector */]],
                useFactory: (injector) => Object(mainmenu_tab_routing_module["b" /* buildTabMainRoutes */])(injector, {
                    component: more_CoreMainMenuMorePage,
                    data: {
                        mainMenuTabRoot: mainmenu["b" /* CoreMainMenuProvider */].MORE_PAGE_NAME,
                    },
                }),
            },
        ], imports: [[
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreMainMenuMorePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](more_module_CoreMainMenuMorePageModule, { declarations: [more_CoreMainMenuMorePage], imports: [shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);