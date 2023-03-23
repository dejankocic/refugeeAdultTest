(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "Yxj/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCommentsViewerPageModule", function() { return /* binding */ viewer_module_CoreCommentsViewerPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/components/animations.ts
var animations = __webpack_require__("MUy3");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments.ts
var services_comments = __webpack_require__("5pQw");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments-sync.ts
var comments_sync = __webpack_require__("kQNd");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var services_user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments-offline.ts
var comments_offline = __webpack_require__("rdx0");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var utils_time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("wd/R");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/send-message-form/send-message-form.ts
var send_message_form = __webpack_require__("O4u7");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/core/features/comments/pages/viewer/viewer.page.ts

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


































function CoreCommentsViewerPage_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function CoreCommentsViewerPage_ion_button_8_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r6); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.toggleDelete(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.toggledelete"));
    }
}
function CoreCommentsViewerPage_core_empty_box_19_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 17);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.comments.nocomments"));
    }
}
function CoreCommentsViewerPage_ng_container_22_p_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 25);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const comment_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, comment_r7.timecreated * 1000, "strftimedayshort"), " ");
    }
}
function CoreCommentsViewerPage_ng_container_22_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2", 26);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 27);
        core["Ec" /* ɵɵelementStart */](2, "div");
        core["pd" /* ɵɵtext */](3);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const comment_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", comment_r7)("linkProfile", false);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](comment_r7.fullname);
    }
}
function CoreCommentsViewerPage_ng_container_22_ng_container_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const comment_r7 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, comment_r7.timecreated * 1000, "strftimetime"), " ");
    }
}
function CoreCommentsViewerPage_ng_container_22_ng_container_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["zc" /* ɵɵelement */](1, "ion-icon", 28);
        core["Ec" /* ɵɵelementStart */](2, "span", 29);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.deletedoffline"), " ");
    }
}
function CoreCommentsViewerPage_ng_container_22_div_10_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "div", 30);
    }
}
function CoreCommentsViewerPage_ng_container_22_ion_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 31);
        core["Mc" /* ɵɵlistener */]("click", function CoreCommentsViewerPage_ng_container_22_ion_button_11_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r21); const comment_r7 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r20 = core["Oc" /* ɵɵnextContext */](); return ctx_r20.deleteComment($event, comment_r7); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 32);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", "fromRight");
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.delete"));
    }
}
function CoreCommentsViewerPage_ng_container_22_ion_button_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 31);
        core["Mc" /* ɵɵlistener */]("click", function CoreCommentsViewerPage_ng_container_22_ion_button_12_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r24); const comment_r7 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r23 = core["Oc" /* ɵɵnextContext */](); return ctx_r23.undoDeleteComment($event, comment_r7); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 33);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.restore"));
    }
}
function CoreCommentsViewerPage_ng_container_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreCommentsViewerPage_ng_container_22_p_1_Template, 3, 4, "p", 18);
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 19);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, CoreCommentsViewerPage_ng_container_22_h2_4_Template, 4, 3, "h2", 20);
        core["Ec" /* ɵɵelementStart */](5, "p", 21);
        core["zc" /* ɵɵelement */](6, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-note");
        core["nd" /* ɵɵtemplate */](8, CoreCommentsViewerPage_ng_container_22_ng_container_8_Template, 3, 4, "ng-container", 22);
        core["nd" /* ɵɵtemplate */](9, CoreCommentsViewerPage_ng_container_22_ng_container_9_Template, 5, 3, "ng-container", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](10, CoreCommentsViewerPage_ng_container_22_div_10_Template, 1, 0, "div", 23);
        core["nd" /* ɵɵtemplate */](11, CoreCommentsViewerPage_ng_container_22_ion_button_11_Template, 3, 4, "ion-button", 24);
        core["nd" /* ɵɵtemplate */](12, CoreCommentsViewerPage_ng_container_22_ion_button_12_Template, 3, 3, "ion-button", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const comment_r7 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", comment_r7.showDate);
        core["lc" /* ɵɵadvance */](1);
        core["qc" /* ɵɵclassProp */]("addon-message-mine", comment_r7.userid == ctx_r2.currentUserId)("addon-message-not-mine", comment_r7.userid != ctx_r2.currentUserId)("addon-message-no-user", !comment_r7.showUserData);
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", comment_r7.userid == ctx_r2.currentUserId ? "" : "fromLeft");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", comment_r7.showUserData);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", comment_r7.content)("contextLevel", ctx_r2.contextLevel)("contextInstanceId", ctx_r2.instanceId)("courseId", ctx_r2.courseId);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !comment_r7.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", comment_r7.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", comment_r7.showTail);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.showDelete && !comment_r7.deleted && comment_r7.delete);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.showDelete && comment_r7.deleted);
    }
}
function CoreCommentsViewerPage_ion_item_23_ion_button_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 31);
        core["Mc" /* ɵɵlistener */]("click", function CoreCommentsViewerPage_ion_item_23_ion_button_15_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r28); const ctx_r27 = core["Oc" /* ɵɵnextContext */](2); return ctx_r27.deleteComment($event, ctx_r27.offlineComment); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 32);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", "fromRight");
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.delete"));
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function CoreCommentsViewerPage_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 34);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 35);
        core["zc" /* ɵɵelement */](3, "ion-icon", 36);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "lowercase");
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "p", 21);
        core["zc" /* ɵɵelement */](9, "core-format-text", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "ion-note");
        core["zc" /* ɵɵelement */](11, "ion-icon", 37);
        core["pd" /* ɵɵtext */](12);
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](14, "div", 30);
        core["nd" /* ɵɵtemplate */](15, CoreCommentsViewerPage_ion_item_23_ion_button_15_Template, 3, 4, "ion-button", 24);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](5, 7, "core.thereisdatatosync", core["ad" /* ɵɵpureFunction1 */](16, _c0, core["Qc" /* ɵɵpipeBind1 */](6, 10, core["Qc" /* ɵɵpipeBind1 */](7, 12, "core.comments.comments")))), " ");
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("text", ctx_r3.offlineComment.content)("contextLevel", ctx_r3.contextLevel)("contextInstanceId", ctx_r3.instanceId)("courseId", ctx_r3.courseId);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](13, 14, "core.notsent"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.showDelete);
    }
}
function CoreCommentsViewerPage_ion_footer_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r30 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-footer", 38);
        core["Ec" /* ɵɵelementStart */](1, "ion-toolbar", 39);
        core["Ec" /* ɵɵelementStart */](2, "core-send-message-form", 40);
        core["Mc" /* ɵɵlistener */]("onSubmit", function CoreCommentsViewerPage_ion_footer_24_Template_core_send_message_form_onSubmit_2_listener($event) { core["gd" /* ɵɵrestoreView */](_r30); const ctx_r29 = core["Oc" /* ɵɵnextContext */](); return ctx_r29.addComment($event); });
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("sendDisabled", ctx_r4.sending)("message", ctx_r4.newComment)("placeholder", core["Qc" /* ɵɵpipeBind1 */](3, 3, "core.comments.addcomment"));
    }
}
/**
 * Page that displays comments.
 */
let viewer_page_CoreCommentsViewerPage = /*@__PURE__*/ (() => {
    class CoreCommentsViewerPage {
        constructor(route) {
            this.route = route;
            this.comments = [];
            this.commentsLoaded = false;
            this.itemId = 0;
            this.area = '';
            this.page = 0;
            this.title = '';
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.canAddComments = false;
            this.canDeleteComments = false;
            this.showDelete = false;
            this.hasOffline = false;
            this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.sending = false;
            this.newComment = '';
            this.addDeleteCommentsAvailable = false;
            this.viewDestroyed = false;
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            // Refresh data if comments are synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(comments_sync["b" /* CoreCommentsSyncProvider */].AUTO_SYNCED, (data) => {
                if (data.contextLevel == this.contextLevel && data.instanceId == this.instanceId &&
                    data.componentName == this.componentName && data.itemId == this.itemId && data.area == this.area) {
                    // Show the sync warnings.
                    this.showSyncWarnings(data.warnings);
                    // Refresh the data.
                    this.commentsLoaded = false;
                    this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    this.page = 0;
                    this.comments = [];
                    this.fetchComments(false);
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Is implicit the user can delete if he can add.
                this.addDeleteCommentsAvailable = yield services_comments["a" /* CoreComments */].isAddCommentsAvailable();
                this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
                this.commentsLoaded = false;
                this.contextLevel = services_navigator["a" /* CoreNavigator */].getRouteParam('contextLevel');
                this.instanceId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('instanceId');
                this.componentName = services_navigator["a" /* CoreNavigator */].getRouteParam('componentName');
                this.itemId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('itemId');
                this.area = services_navigator["a" /* CoreNavigator */].getRouteParam('area') || '';
                this.title = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('title') ||
                    singletons["L" /* Translate */].instant('core.comments.comments');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                yield this.fetchComments(true);
            });
        }
        /**
         * Fetches the comments.
         *
         * @param sync When to resync comments.
         * @param showErrors When to display errors or not.
         * @return Resolved when done.
         */
        fetchComments(sync, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                if (sync) {
                    yield utils["a" /* CoreUtils */].ignoreErrors(this.syncComments(showErrors));
                }
                try {
                    // Get comments data.
                    const commentsResponse = yield services_comments["a" /* CoreComments */].getComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area, this.page);
                    this.canAddComments = this.addDeleteCommentsAvailable && !!commentsResponse.canpost;
                    let comments = commentsResponse.comments.sort((a, b) => a.timecreated - b.timecreated);
                    if (typeof commentsResponse.count != 'undefined') {
                        this.canLoadMore = (this.comments.length + comments.length) < commentsResponse.count;
                    }
                    else {
                        // Old style.
                        this.canLoadMore = commentsResponse.comments.length > 0 &&
                            commentsResponse.comments.length >= services_comments["b" /* CoreCommentsProvider */].pageSize;
                    }
                    comments = yield Promise.all(comments.map((comment) => this.loadCommentProfile(comment)));
                    this.comments = comments.concat(this.comments);
                    this.comments.forEach((comment, index) => {
                        comment.showDate = this.showDate(comment, this.comments[index - 1]);
                        comment.showUserData = this.showUserData(comment, this.comments[index - 1]);
                        comment.showTail = this.showTail(comment, this.comments[index + 1]);
                    });
                    this.canDeleteComments = this.addDeleteCommentsAvailable &&
                        (this.hasOffline || this.comments.some((comment) => !!comment.delete));
                    yield this.loadOfflineData();
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    if (error && this.componentName == 'assignsubmission_comments') {
                        dom["a" /* CoreDomUtils */].showAlertTranslated('core.notice', 'core.comments.commentsnotworking');
                    }
                    else {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, singletons["L" /* Translate */].instant('core.error') + ': get_comments');
                    }
                }
                finally {
                    this.commentsLoaded = true;
                    this.refreshIcon = constants["a" /* CoreConstants */].ICON_REFRESH;
                    this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
                    if (this.page == 0) {
                        this.scrollToBottom();
                    }
                }
            });
        }
        /**
         * Function to load more commemts.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadPrevious(infiniteComplete) {
            this.page++;
            this.canLoadMore = false;
            return this.fetchComments(true).finally(() => {
                infiniteComplete && infiniteComplete();
            });
        }
        /**
         * Refresh the comments.
         *
         * @param showErrors Whether to display errors or not.
         * @param refresher Refresher.
         * @return Resolved when done.
         */
        refreshComments(showErrors, refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.commentsLoaded = false;
                this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                try {
                    yield this.invalidateComments();
                }
                finally {
                    this.page = 0;
                    this.comments = [];
                    try {
                        yield this.fetchComments(true, showErrors);
                    }
                    finally {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                }
            });
        }
        /**
         * Show sync warnings if any.
         *
         * @param warnings the warnings
         */
        showSyncWarnings(warnings) {
            const message = utils_text["a" /* CoreTextUtils */].buildMessage(warnings);
            if (message) {
                dom["a" /* CoreDomUtils */].showErrorModal(message);
            }
        }
        /**
         * Tries to synchronize comments.
         *
         * @param showErrors Whether to display errors or not.
         * @return Promise resolved if sync is successful, rejected otherwise.
         */
        syncComments(showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield comments_sync["a" /* CoreCommentsSync */].syncComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                    this.showSyncWarnings((result === null || result === void 0 ? void 0 : result.warnings) || []);
                }
                catch (error) {
                    if (showErrors) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                    throw new errors_error["a" /* CoreError */](error);
                }
            });
        }
        /**
         * Send the comment or store it offline.
         *
         * @param text Comment text to add.
         */
        addComment(text) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                app["a" /* CoreApp */].closeKeyboard();
                const loadingModal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                // Freeze the add comment button.
                this.sending = true;
                try {
                    const commentsResponse = yield services_comments["a" /* CoreComments */].addComment(text, this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
                    dom["a" /* CoreDomUtils */].showToast(commentsResponse ? 'core.comments.eventcommentcreated' : 'core.datastoredoffline', true, 3000);
                    if (commentsResponse) {
                        this.invalidateComments();
                        const addedComments = yield this.loadCommentProfile(commentsResponse);
                        addedComments.showDate = this.showDate(addedComments, this.comments[this.comments.length - 1]);
                        addedComments.showUserData = this.showUserData(addedComments, this.comments[this.comments.length - 1]);
                        addedComments.showTail = this.showTail(addedComments, this.comments[this.comments.length + 1]);
                        // Add the comment to the top.
                        this.comments = this.comments.concat([addedComments]);
                        this.canDeleteComments = this.addDeleteCommentsAvailable;
                        events["b" /* CoreEvents */].trigger(services_comments["b" /* CoreCommentsProvider */].COMMENTS_COUNT_CHANGED_EVENT, {
                            contextLevel: this.contextLevel,
                            instanceId: this.instanceId,
                            component: this.componentName,
                            itemId: this.itemId,
                            area: this.area,
                            countChange: 1,
                        }, sites["b" /* CoreSites */].getCurrentSiteId());
                    }
                    else if (commentsResponse === false) {
                        // Comments added in offline mode.
                        yield this.loadOfflineData();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    loadingModal.dismiss();
                    this.sending = false;
                    // New comments.
                    this.scrollToBottom();
                }
            });
        }
        /**
         * Delete a comment.
         *
         * @param e Click event.
         * @param comment Comment to delete.
         */
        deleteComment(e, comment) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                const modified = 'lastmodified' in comment
                    ? comment.lastmodified
                    : comment.timecreated;
                const time = utils_time["a" /* CoreTimeUtils */].userDate(modified * 1000, 'core.strftimerecentfull');
                const deleteComment = {
                    contextlevel: this.contextLevel,
                    instanceid: this.instanceId,
                    component: this.componentName,
                    itemid: this.itemId,
                    area: this.area,
                    content: comment.content,
                    id: 'id' in comment ? comment.id : undefined,
                };
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.comments.deletecommentbyon', {
                        $a: { user: comment.fullname || '', time: time },
                    });
                }
                catch (_a) {
                    // User cancelled, nothing to do.
                    return;
                }
                try {
                    const deletedOnline = yield services_comments["a" /* CoreComments */].deleteComment(deleteComment);
                    this.showDelete = false;
                    if (deletedOnline && 'id' in comment) {
                        const index = this.comments.findIndex((commentinList) => commentinList.id == comment.id);
                        if (index >= 0) {
                            this.comments.splice(index, 1);
                            events["b" /* CoreEvents */].trigger(services_comments["b" /* CoreCommentsProvider */].COMMENTS_COUNT_CHANGED_EVENT, {
                                contextLevel: this.contextLevel,
                                instanceId: this.instanceId,
                                component: this.componentName,
                                itemId: this.itemId,
                                area: this.area,
                                countChange: -1,
                            }, sites["b" /* CoreSites */].getCurrentSiteId());
                        }
                    }
                    else {
                        this.loadOfflineData();
                    }
                    this.invalidateComments();
                    dom["a" /* CoreDomUtils */].showToast('core.comments.eventcommentdeleted', true, 3000);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Delete comment failed.');
                }
            });
        }
        /**
         * Invalidate comments.
         *
         * @return Resolved when done.
         */
        invalidateComments() {
            return services_comments["a" /* CoreComments */].invalidateCommentsData(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area);
        }
        /**
         * Loads the profile info onto the comment object.
         *
         * @param comment Comment object.
         * @return Promise resolved with modified comment when done.
         */
        loadCommentProfile(comment) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the user profile image.
                try {
                    const user = yield services_user["a" /* CoreUser */].getProfile(comment.userid, undefined, true);
                    comment.profileimageurl = user.profileimageurl;
                    comment.fullname = user.fullname;
                }
                catch (_a) {
                    // Ignore errors.
                }
                return comment;
            });
        }
        /**
         * Check if the user info should be displayed for the current message.
         * User data is only displayed if the previous message was from another user.
         *
         * @param comment Comment object.
         * @param prevComment Previous comment object.
         * @return Whether user data should be shown.
         */
        showUserData(comment, prevComment) {
            return comment.userid != this.currentUserId && (!prevComment || prevComment.userid != comment.userid || !!comment.showDate);
        }
        /**
         * Check if a css tail should be shown.
         *
         * @param comment Comment object.
         * @param nextComment Previous comment object.
         * @return Whether user data should be shown.
         */
        showTail(comment, nextComment) {
            return !nextComment || nextComment.userid != comment.userid || !!nextComment.showDate;
        }
        /**
         * Check if the date should be displayed between messages (when the day changes at midnight for example).
         *
         * @param comment Comment object.
         * @param prevComment Previous comment object.
         * @return True if messages are from diferent days, false othetwise.
         */
        showDate(comment, prevComment) {
            if (!prevComment) {
                return true;
            }
            // Check if day has changed.
            return !moment_default()(comment.timecreated * 1000).isSame(prevComment.timecreated * 1000, 'day');
        }
        /**
         * Load offline comments.
         *
         * @return Promise resolved when done.
         */
        loadOfflineData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                let hasDeletedComments = false;
                // Load the only offline comment allowed if any.
                promises.push(comments_offline["a" /* CoreCommentsOffline */].getComment(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((offlineComment) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    this.offlineComment = offlineComment;
                    if (!offlineComment) {
                        return;
                    }
                    if (this.newComment == '') {
                        this.newComment = this.offlineComment.content;
                    }
                    this.offlineComment.userid = this.currentUserId;
                    return;
                })));
                // Load deleted comments offline.
                promises.push(comments_offline["a" /* CoreCommentsOffline */].getDeletedComments(this.contextLevel, this.instanceId, this.componentName, this.itemId, this.area).then((deletedComments) => {
                    hasDeletedComments = deletedComments && deletedComments.length > 0;
                    if (hasDeletedComments) {
                        deletedComments.forEach((deletedComment) => {
                            const comment = this.comments.find((comment) => comment.id == deletedComment.commentid);
                            if (comment) {
                                comment.deleted = !!deletedComment.deleted;
                            }
                        });
                    }
                    return;
                }));
                yield Promise.all(promises);
                this.hasOffline = !!this.offlineComment || hasDeletedComments;
            });
        }
        /**
         * Restore a comment.
         *
         * @param e Click event.
         * @param comment Comment to delete.
         */
        undoDeleteComment(e, comment) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                yield comments_offline["a" /* CoreCommentsOffline */].undoDeleteComment(comment.id);
                comment.deleted = false;
                this.showDelete = false;
            });
        }
        /**
         * Scroll bottom when render has finished.
         */
        scrollToBottom() {
            // Need a timeout to leave time to the view to be rendered.
            setTimeout(() => {
                var _a;
                if (!this.viewDestroyed) {
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToBottom();
                }
            }, 100);
        }
        /**
         * Toggle delete.
         */
        toggleDelete() {
            this.showDelete = !this.showDelete;
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
            this.viewDestroyed = true;
        }
    }
    CoreCommentsViewerPage.ɵfac = function CoreCommentsViewerPage_Factory(t) { return new (t || CoreCommentsViewerPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    CoreCommentsViewerPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCommentsViewerPage, selectors: [["page-core-comments-viewer"]], viewQuery: function CoreCommentsViewerPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 25, vars: 33, consts: [["slot", "start"], [3, "text"], [3, "text", "contextLevel", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "end", "fill", "clear", 3, "click", 4, "ngIf"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-comments", 3, "message", 4, "ngIf"], ["position", "top", 3, "enabled", "error", "action"], [1, "addon-messages-discussion-container"], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap addon-message addon-message-mine", 4, "ngIf"], ["color", "light", "class", "footer-adjustable", 4, "ngIf"], ["slot", "end", "fill", "clear", 3, "click"], ["name", "fas-pen", "slot", "icon-only", "aria-hidden", "true"], ["icon", "fas-comments", 3, "message"], ["class", "ion-text-center addon-messages-date", 4, "ngIf"], [1, "ion-text-wrap", "addon-message"], ["class", "addon-message-user", 4, "ngIf"], [1, "addon-message-text"], [4, "ngIf"], ["class", "tail", 4, "ngIf"], ["slot", "end", "fill", "clear", "color", "danger", "class", "addon-messages-delete-button", 3, "click", 4, "ngIf"], [1, "ion-text-center", "addon-messages-date"], [1, "addon-message-user"], ["slot", "start", 3, "user", "linkProfile"], ["name", "fas-trash", "aria-hidden", "true"], [1, "ion-text-wrap"], [1, "tail"], ["slot", "end", "fill", "clear", "color", "danger", 1, "addon-messages-delete-button", 3, "click"], ["name", "fas-trash", "slot", "icon-only", "aria-hidden", "true"], ["name", "fas-undo-alt", "slot", "icon-only", "aria-hidden", "true"], [1, "ion-text-wrap", "addon-message", "addon-message-mine"], [1, "ion-text-center"], ["name", "fas-exclamation-triangle", "aria-hidden", "true"], ["name", "fas-clock", "aria-hidden", "true"], ["color", "light", 1, "footer-adjustable"], ["color", "light"], [3, "sendDisabled", "message", "placeholder", "onSubmit"]], template: function CoreCommentsViewerPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["nd" /* ɵɵtemplate */](8, CoreCommentsViewerPage_ion_button_8_Template, 3, 3, "ion-button", 4);
                core["Ec" /* ɵɵelementStart */](9, "core-context-menu");
                core["Ec" /* ɵɵelementStart */](10, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function CoreCommentsViewerPage_Template_core_context_menu_item_action_10_listener() { return ctx.refreshComments(false); });
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function CoreCommentsViewerPage_Template_core_context_menu_item_action_12_listener() { return ctx.refreshComments(true); });
                core["Pc" /* ɵɵpipe */](13, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](14, "ion-content");
                core["Ec" /* ɵɵelementStart */](15, "ion-refresher", 6);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCommentsViewerPage_Template_ion_refresher_ionRefresh_15_listener($event) { return ctx.refreshComments(false, $event.target); });
                core["zc" /* ɵɵelement */](16, "ion-refresher-content", 7);
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "core-loading", 8);
                core["nd" /* ɵɵtemplate */](19, CoreCommentsViewerPage_core_empty_box_19_Template, 2, 3, "core-empty-box", 9);
                core["Ec" /* ɵɵelementStart */](20, "core-infinite-loading", 10);
                core["Mc" /* ɵɵlistener */]("action", function CoreCommentsViewerPage_Template_core_infinite_loading_action_20_listener($event) { return ctx.loadPrevious($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "ion-list", 11);
                core["nd" /* ɵɵtemplate */](22, CoreCommentsViewerPage_ng_container_22_Template, 13, 18, "ng-container", 12);
                core["nd" /* ɵɵtemplate */](23, CoreCommentsViewerPage_ion_item_23_Template, 16, 18, "ion-item", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](24, CoreCommentsViewerPage_ion_footer_24_Template, 4, 5, "ion-footer", 14);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 25, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextLevel", ctx.contextLevel)("contextInstanceId", ctx.instanceId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.canDeleteComments);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !(ctx.commentsLoaded && !ctx.hasOffline))("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](11, 27, "core.refresh"))("iconAction", ctx.refreshIcon)("closeOnClick", true);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !(ctx.commentsLoaded && ctx.hasOffline))("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](13, 29, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.commentsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](17, 31, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.commentsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.comments || !ctx.comments.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.comments);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.offlineComment);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.commentsLoaded && ctx.canAddComments);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["V" /* IonNote */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["z" /* IonFooter */], send_message_form["a" /* CoreSendMessageFormComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */], common["p" /* LowerCasePipe */]], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:var(--background-alternative)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]::part(scroll){padding-bottom:0!important}[_nghost-%COMP%]   .addon-messages-discussion-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:15px;background:var(--background-alternative)}[_nghost-%COMP%]   .addon-messages-date[_ngcontent-%COMP%]{font-weight:400;font-size:.9rem}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]{border:0;border-radius:4px;padding:0 8px;margin:10px 8px 0;--background:var(--addon-messages-message-bg);background:var(--background);align-self:flex-start;width:90%;max-width:90%;--min-height:var(--a11y-min-target-size);position:relative;transition:width .5s ease-in-out;overflow:visible}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]::part(native){--inner-border-width:0;--inner-padding-end:0;padding:0;margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   core-format-text[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:only-child{display:inline}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:.5rem;margin-top:0;color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   core-user-avatar[_ngcontent-%COMP%]{display:block;--core-avatar-size:var(--addon-messages-avatar-size);margin:0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-weight:500;flex-grow:1;padding-left:.5rem;padding-right:.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-user[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;-webkit-padding-start:.5rem;padding-inline-start:.5rem;-webkit-padding-end:.5rem;padding-inline-end:.5rem}}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{color:var(--addon-messages-message-note-text);font-size:var(--addon-messages-message-note-font-size);margin:0;padding:0 0 8px;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;padding:8px 0}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-message-text[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--ion-text-color)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{content:\"\";width:0;height:0;border:.5rem solid transparent;position:absolute;touch-action:none;bottom:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]{--background:var(--addon-messages-message-mine-bg);align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active{--background:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:right;margin:2px -3px -2px 5px}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{float:left}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:-3px;margin-inline-end:-3px}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{right:-8px;margin-right:-.5rem;border-bottom-color:var(--addon-messages-message-mine-bg)}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;left:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-right:unset;-webkit-margin-end:-.5rem;margin-inline-end:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[tappable][_ngcontent-%COMP%]:active   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-mine-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-bg);left:-8px;margin-left:-.5rem}[dir=rtl]   [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{left:unset;right:unset;right:-8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:-.5rem;margin-inline-start:-.5rem}}[_nghost-%COMP%]   ion-item.addon-message[tappable].addon-message-not-mine.activated[_ngcontent-%COMP%]   .tail[_ngcontent-%COMP%]{border-bottom-color:var(--addon-messages-message-activated-bg)}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]{min-height:0;line-height:normal;margin-top:0;margin-bottom:0;height:var(--a11y-min-target-size)!important;align-self:flex-end}[_nghost-%COMP%]   ion-item.addon-message[_ngcontent-%COMP%]   .addon-messages-delete-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.4em;line-height:normal;color:var(--ion-color-danger)}[_nghost-%COMP%]   ion-item.addon-message.addon-message-no-user[_ngcontent-%COMP%]{margin-top:8px}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]{padding-top:0}[_nghost-%COMP%]   ion-item.addon-message.addon-message-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item.addon-message.addon-message-not-mine[_ngcontent-%COMP%] + ion-item.addon-message.addon-message-no-user.addon-message-not-mine[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{margin-bottom:0}.ios[_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child, .ios   [_nghost-%COMP%]   ion-footer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]:last-child{padding-bottom:4px;min-height:0}"], data: { animation: [animations["a" /* CoreAnimations */].SLIDE_IN_OUT] } });
    return CoreCommentsViewerPage;
})();

// CONCATENATED MODULE: ./src/core/features/comments/pages/viewer/viewer.module.ts
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
        component: viewer_page_CoreCommentsViewerPage,
    },
];
let viewer_module_CoreCommentsViewerPageModule = /*@__PURE__*/ (() => {
    class CoreCommentsViewerPageModule {
    }
    CoreCommentsViewerPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCommentsViewerPageModule });
    CoreCommentsViewerPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCommentsViewerPageModule_Factory(t) { return new (t || CoreCommentsViewerPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCommentsViewerPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](viewer_module_CoreCommentsViewerPageModule, { declarations: [viewer_page_CoreCommentsViewerPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);