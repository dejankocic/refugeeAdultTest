(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "JpIC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteHelpComponent; });
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bFG1");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("j3ag");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mv9v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TEn/");
/* harmony import */ var _directives_fa_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3CSS");
/* harmony import */ var _directives_format_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("hMzs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sYmb");
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










function CoreLoginSiteHelpComponent_ion_item_66_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](5, 1, "core.login.faqwhereisqrcode"));
    }
}
const _c0 = function (a0) { return { $image: a0 }; };
function CoreLoginSiteHelpComponent_ion_item_67_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelement */ "zc"](2, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵnextContext */ "Oc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵproperty */ "Vc"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind2 */ "Rc"](3, 1, "core.login.faqwhereisqrcodeanswer", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpureFunction1 */ "ad"](4, _c0, ctx_r1.qrCodeImageHtml)), _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵsanitizeHtml */ "hd"]);
    }
}
const _c1 = function (a0) { return { $link: a0 }; };
/**
 * Component that displays help to connect to a site.
 */
let CoreLoginSiteHelpComponent = /*@__PURE__*/ (() => {
    class CoreLoginSiteHelpComponent {
        constructor() {
            this.canScanQR = _services_utils_utils__WEBPACK_IMPORTED_MODULE_0__[/* CoreUtils */ "a"].canScanQR();
            this.urlImageHtml = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_2__[/* CoreLoginHelperProvider */ "b"].FAQ_URL_IMAGE_HTML;
            this.qrCodeImageHtml = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_2__[/* CoreLoginHelperProvider */ "b"].FAQ_QRCODE_IMAGE_HTML;
            this.setupLinkHtml = '<a href="https://moodle.com/getstarted/" title="' +
                _singletons__WEBPACK_IMPORTED_MODULE_1__[/* Translate */ "L"].instant('core.login.faqsetupsitelinktitle') + '">https://moodle.com/getstarted/</a>';
        }
        /**
         * Close help modal.
         */
        closeHelp() {
            _singletons__WEBPACK_IMPORTED_MODULE_1__[/* ModalController */ "x"].dismiss();
        }
    }
    CoreLoginSiteHelpComponent.ɵfac = function CoreLoginSiteHelpComponent_Factory(t) { return new (t || CoreLoginSiteHelpComponent)(); };
    CoreLoginSiteHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵdefineComponent */ "sc"]({ type: CoreLoginSiteHelpComponent, selectors: [["core-login-site-help"]], decls: 68, vars: 48, consts: [["slot", "end"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-times", "aria-hidden", "true"], [1, "ion-text-wrap"], [1, "ion-text-wrap", "core-login-faqwhatisurlanswer"], [3, "innerHTML"], [3, "text", "filter"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-text-wrap core-login-faqwhereisqrcodeanswer", 4, "ngIf"], [1, "ion-text-wrap", "core-login-faqwhereisqrcodeanswer"]], template: function CoreLoginSiteHelpComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](2, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](4, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](5, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](6, "ion-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteHelpComponent_Template_ion_button_click_6_listener() { return ctx.closeHelp(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](7, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelement */ "zc"](8, "ion-icon", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](9, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](10, "ion-list");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](11, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](12, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](13, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](14, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](16, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](17, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](18, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](19, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](20);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](21, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](22, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](23, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](24, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](25, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](26);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](27, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](28, "ion-item", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](29, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelement */ "zc"](30, "p", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](31, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](32, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](33, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](34, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](35, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](36);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](37, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](38, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](39, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](40, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](41);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](42, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](43, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](44, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](45, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](46, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](47, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](48);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](49, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](50, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](51, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](52, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelement */ "zc"](53, "core-format-text", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](54, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](55, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](56, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](57, "h2");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](58, "b");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](59);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](60, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](61, "ion-item", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](62, "ion-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementStart */ "Ec"](63, "p");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtext */ "pd"](64);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipe */ "Pc"](65, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtemplate */ "nd"](66, CoreLoginSiteHelpComponent_ion_item_66_Template, 6, 3, "ion-item", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtemplate */ "nd"](67, CoreLoginSiteHelpComponent_ion_item_67_Template, 4, 6, "ion-item", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵelementEnd */ "Dc"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](4, 16, "core.login.help"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵattribute */ "mc"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](7, 18, "core.close"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](16, 20, "core.login.faqcannotfindmysitequestion"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](21, 22, "core.login.faqcannotfindmysiteanswer"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](27, 24, "core.login.faqwhatisurlquestion"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵproperty */ "Vc"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind2 */ "Rc"](31, 26, "core.login.faqwhatisurlanswer", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpureFunction1 */ "ad"](44, _c0, ctx.urlImageHtml)), _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵsanitizeHtml */ "hd"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](37, 29, "core.login.faqcannotconnectquestion"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate2 */ "sd"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](42, 31, "core.login.faqcannotconnectanswer"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](43, 33, "core.whoissiteadmin"), "");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](49, 35, "core.login.faqsetupsitequestion"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵproperty */ "Vc"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind2 */ "Rc"](54, 37, "core.login.faqsetupsiteanswer", _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpureFunction1 */ "ad"](46, _c1, ctx.setupLinkHtml)))("filter", false);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](60, 40, "core.login.faqtestappquestion"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵpipeBind1 */ "Qc"](65, 42, "core.login.faqtestappanswer"));
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.canScanQR);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.canScanQR);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonHeader */ "B"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonToolbar */ "zb"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonButtons */ "l"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonButton */ "k"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonIcon */ "C"], _directives_fa_icon__WEBPACK_IMPORTED_MODULE_5__[/* CoreFaIconDirective */ "a"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonContent */ "u"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonList */ "O"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonItem */ "H"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__[/* IonLabel */ "N"], _directives_format_text__WEBPACK_IMPORTED_MODULE_6__[/* CoreFormatTextDirective */ "a"], _angular_common__WEBPACK_IMPORTED_MODULE_7__[/* NgIf */ "t"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__[/* TranslatePipe */ "d"]], styles: [".core-login-faqwhatisurlanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:50px}.core-login-faqwhereisqrcodeanswer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:220px;margin-top:5px;margin-bottom:5px}"] });
    return CoreLoginSiteHelpComponent;
})();


/***/ }),

/***/ "KVTe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreLoginLazyModule", function() { return /* binding */ login_lazy_module_CoreLoginLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/login/components/site-help/site-help.ts
var site_help = __webpack_require__("JpIC");

// EXTERNAL MODULE: ./src/core/features/login/components/site-onboarding/site-onboarding.ts
var site_onboarding = __webpack_require__("m2Ry");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var services_sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/features/login/services/login-helper.ts
var login_helper = __webpack_require__("mv9v");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// CONCATENATED MODULE: ./src/core/features/login/guards/has-sites.ts

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






let has_sites_CoreLoginHasSitesGuard = /*@__PURE__*/ (() => {
    class CoreLoginHasSitesGuard {
        /**
         * @inheritdoc
         */
        canActivate() {
            return this.guard();
        }
        /**
         * @inheritdoc
         */
        canLoad() {
            return this.guard();
        }
        /**
         * Check if the user has any sites stored.
         */
        guard() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const sites = yield utils["a" /* CoreUtils */].ignoreErrors(services_sites["b" /* CoreSites */].getSites(), []);
                if (sites.length > 0) {
                    return true;
                }
                const [path, params] = login_helper["a" /* CoreLoginHelper */].getAddSiteRouteInfo();
                const route = singletons["G" /* Router */].parseUrl(path);
                route.queryParams = params;
                return route;
            });
        }
    }
    CoreLoginHasSitesGuard.ɵfac = function CoreLoginHasSitesGuard_Factory(t) { return new (t || CoreLoginHasSitesGuard)(); };
    CoreLoginHasSitesGuard.ɵprov = core["uc" /* ɵɵdefineInjectable */]({ token: CoreLoginHasSitesGuard, factory: CoreLoginHasSitesGuard.ɵfac, providedIn: 'root' });
    return CoreLoginHasSitesGuard;
})();

// CONCATENATED MODULE: ./src/core/features/login/login-lazy.module.ts
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
        pathMatch: 'full',
        redirectTo: 'sites',
    },
    {
        path: 'site',
        loadChildren: () => __webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(null, "uFKL")).then(m => m.CoreLoginSitePageModule),
    },
    {
        path: 'credentials',
        loadChildren: () => __webpack_require__.e(/* import() */ 94).then(__webpack_require__.bind(null, "jnyO")).then(m => m.CoreLoginCredentialsPageModule),
    },
    {
        path: 'sites',
        loadChildren: () => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, "Pgjy")).then(m => m.CoreLoginSitesPageModule),
        canLoad: [has_sites_CoreLoginHasSitesGuard],
        canActivate: [has_sites_CoreLoginHasSitesGuard],
    },
    {
        path: 'forgottenpassword',
        loadChildren: () => __webpack_require__.e(/* import() */ 96).then(__webpack_require__.bind(null, "aDgO"))
            .then(m => m.CoreLoginForgottenPasswordPageModule),
    },
    {
        path: 'changepassword',
        loadChildren: () => __webpack_require__.e(/* import() */ 93).then(__webpack_require__.bind(null, "EOZX"))
            .then(m => m.CoreLoginChangePasswordPageModule),
    },
    {
        path: 'sitepolicy',
        loadChildren: () => __webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(null, "HBmr")).then(m => m.CoreLoginSitePolicyPageModule),
    },
    {
        path: 'emailsignup',
        loadChildren: () => __webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(null, "dxjp")).then(m => m.CoreLoginEmailSignupPageModule),
    },
    {
        path: 'reconnect',
        loadChildren: () => __webpack_require__.e(/* import() */ 97).then(__webpack_require__.bind(null, "QXg6")).then(m => m.CoreLoginReconnectPageModule),
    },
];
let login_lazy_module_CoreLoginLazyModule = /*@__PURE__*/ (() => {
    class CoreLoginLazyModule {
    }
    CoreLoginLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreLoginLazyModule });
    CoreLoginLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreLoginLazyModule_Factory(t) { return new (t || CoreLoginLazyModule)(); }, imports: [[
                shared_module["a" /* CoreSharedModule */],
                router["m" /* RouterModule */].forChild(routes),
            ]] });
    return CoreLoginLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](login_lazy_module_CoreLoginLazyModule, { declarations: [site_help["a" /* CoreLoginSiteHelpComponent */],
            site_onboarding["a" /* CoreLoginSiteOnboardingComponent */]], imports: [shared_module["a" /* CoreSharedModule */], router["m" /* RouterModule */]] });
})();


/***/ }),

/***/ "m2Ry":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreLoginSiteOnboardingComponent; });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BBqZ");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bFG1");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mv9v");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j3ag");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TEn/");
/* harmony import */ var _directives_fa_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3CSS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sYmb");
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










function CoreLoginSiteOnboardingComponent_div_18_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](1, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_div_18_Template_ion_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵrestoreView */ "gd"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵnextContext */ "Oc"](); return ctx_r3.skip($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](4, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_div_18_Template_ion_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵrestoreView */ "gd"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵnextContext */ "Oc"](); return ctx_r5.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](3, 2, "core.login.onboardingimalearner"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](6, 4, "core.login.onboardingimaneducator"), " ");
    }
}
function CoreLoginSiteOnboardingComponent_div_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](4, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵrestoreView */ "gd"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵnextContext */ "Oc"](); return ctx_r6.skip($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](7, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_div_19_Template_ion_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵrestoreView */ "gd"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵnextContext */ "Oc"](); return ctx_r8.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](3, 3, "core.login.onboardingtoconnect"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](6, 5, "core.login.onboardingialreadyhaveasite"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](9, 7, "core.login.onboardingineedasite"), " ");
    }
}
function CoreLoginSiteOnboardingComponent_div_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](1, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelement */ "zc"](3, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelement */ "zc"](7, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelement */ "zc"](11, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](14, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_div_20_Template_ion_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵrestoreView */ "gd"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵnextContext */ "Oc"](); return ctx_r9.gotoWeb($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](5, 4, "core.login.onboardingcreatemanagecourses"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](9, 6, "core.login.onboardingenrolmanagestudents"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](13, 8, "core.login.onboardingprovidefeedback"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](16, 10, "core.login.onboardinggetstarted"), " ");
    }
}
/**
 * Component that displays onboarding help regarding the CoreLoginSitePage.
 */
let CoreLoginSiteOnboardingComponent = /*@__PURE__*/ (() => {
    class CoreLoginSiteOnboardingComponent {
        constructor() {
            this.step = 0;
        }
        /**
         * Go to next step.
         *
         * @param e Click event.
         */
        next(e) {
            e.stopPropagation();
            this.step++;
        }
        /**
         * Go to previous step.
         *
         * @param e Click event.
         */
        previous(e) {
            e.stopPropagation();
            if (this.step == 0) {
                _singletons__WEBPACK_IMPORTED_MODULE_3__[/* ModalController */ "x"].dismiss();
            }
            else {
                this.step--;
            }
        }
        /**
         * Close modal.
         *
         * @param e Click event.
         */
        skip(e) {
            e.stopPropagation();
            this.saveOnboardingDone();
            _singletons__WEBPACK_IMPORTED_MODULE_3__[/* ModalController */ "x"].dismiss();
        }
        /**
         * Create a site.
         *
         * @param e Click event.
         */
        gotoWeb(e) {
            e.stopPropagation();
            this.saveOnboardingDone();
            _services_utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* CoreUtils */ "a"].openInBrowser('https://moodle.com/getstarted/');
            _singletons__WEBPACK_IMPORTED_MODULE_3__[/* ModalController */ "x"].dismiss();
        }
        /**
         * Saves the onboarding has finished.
         */
        saveOnboardingDone() {
            _services_config__WEBPACK_IMPORTED_MODULE_0__[/* CoreConfig */ "a"].set(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_2__[/* CoreLoginHelperProvider */ "b"].ONBOARDING_DONE, 1);
        }
    }
    CoreLoginSiteOnboardingComponent.ɵfac = function CoreLoginSiteOnboardingComponent_Factory(t) { return new (t || CoreLoginSiteOnboardingComponent)(); };
    CoreLoginSiteOnboardingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵdefineComponent */ "sc"]({ type: CoreLoginSiteOnboardingComponent, selectors: [["core-login-site-onboarding"]], decls: 21, vars: 15, consts: [["slot", "start"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "fas-arrow-left", "aria-hidden", "true"], ["slot", "end"], [1, "ion-padding"], [1, "ion-text-center", "ion-padding", "core-login-site-logo"], ["src", "assets/img/login_logo.png", "role", "presentation", "alt", "", 1, "avatar-full", "login-logo"], [1, "core-login-onboarding-step"], ["class", "core-login-onboarding-step", 4, "ngIf"], ["expand", "block", "color", "light", 1, "ion-margin-bottom", 3, "click"], [1, "core-login-onboarding-text"], ["expand", "block", 1, "ion-margin-bottom", 3, "click"], [1, "core-login-onboarding-text", "ion-text-start"], ["name", "far-check-circle", "aria-hidden", "true"]], template: function CoreLoginSiteOnboardingComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](3, "ion-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_Template_ion_button_click_3_listener($event) { return ctx.previous($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](4, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelement */ "zc"](5, "ion-icon", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](6, "ion-buttons", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](7, "ion-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵlistener */ "Mc"]("click", function CoreLoginSiteOnboardingComponent_Template_ion_button_click_7_listener($event) { return ctx.skip($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](8, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](10, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](11, "ion-content", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](12, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](13, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelement */ "zc"](14, "img", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementStart */ "Ec"](15, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtext */ "pd"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipe */ "Pc"](17, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtemplate */ "nd"](18, CoreLoginSiteOnboardingComponent_div_18_Template, 7, 6, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtemplate */ "nd"](19, CoreLoginSiteOnboardingComponent_div_19_Template, 10, 9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtemplate */ "nd"](20, CoreLoginSiteOnboardingComponent_div_20_Template, 17, 12, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵelementEnd */ "Dc"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵattribute */ "mc"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](4, 7, "core.back"));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵattribute */ "mc"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](8, 9, "core.skip"));
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](10, 11, "core.skip"), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵpipeBind1 */ "Qc"](17, 13, "core.login.onboardingwelcome"), " ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.step == 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.step == 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.step == 2);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonHeader */ "B"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonToolbar */ "zb"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonButtons */ "l"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonButton */ "k"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonIcon */ "C"], _directives_fa_icon__WEBPACK_IMPORTED_MODULE_6__[/* CoreFaIconDirective */ "a"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__[/* IonContent */ "u"], _angular_common__WEBPACK_IMPORTED_MODULE_7__[/* NgIf */ "t"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__[/* TranslatePipe */ "d"]], styles: ["[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{padding:10px 20px;text-align:center;margin:0 auto}@media (min-width:768px){[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]{max-width:80%}}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:30px;list-style-type:none;-webkit-padding-start:10px;padding-inline-start:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px}[_nghost-%COMP%]   .core-login-onboarding-step[_ngcontent-%COMP%]   .button-block[_ngcontent-%COMP%]{margin-top:20px}", "[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   .core-login-reconnect-warning[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:.9em;--background:var(--core-login-input-background)}body.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], body.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"] });
    return CoreLoginSiteOnboardingComponent;
})();


/***/ })

}]);