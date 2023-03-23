(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "v7Sk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonForumDiscussionPageModule", function() { return /* binding */ discussion_module_AddonForumDiscussionPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/addons/mod/forum/components/components.module.ts
var components_module = __webpack_require__("AzLI");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader.ts
var fileuploader = __webpack_require__("hSQQ");

// EXTERNAL MODULE: ./src/core/features/rating/services/rating.ts
var rating = __webpack_require__("FLKP");

// EXTERNAL MODULE: ./src/core/features/rating/services/rating-offline.ts
var rating_offline = __webpack_require__("y+FG");

// EXTERNAL MODULE: ./src/core/features/rating/services/rating-sync.ts
var rating_sync = __webpack_require__("R+GZ");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/array.ts
var array = __webpack_require__("Wsfw");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum.ts
var services_forum = __webpack_require__("ZCW2");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-helper.ts
var forum_helper = __webpack_require__("VF9H");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-offline.ts
var forum_offline = __webpack_require__("h709");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-sync.ts
var forum_sync = __webpack_require__("pET4");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/addons/mod/forum/components/post/post.ts
var post = __webpack_require__("L5yw");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/forum/pages/discussion/discussion.page.ts

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


































function AddonModForumDiscussionPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["zc" /* ɵɵelement */](1, "core-format-text", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.startingPost.subject)("contextInstanceId", ctx_r0.cmId)("courseId", ctx_r0.courseId);
    }
}
function AddonModForumDiscussionPage_core_context_menu_item_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 22);
        core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_core_context_menu_item_9_Template_core_context_menu_item_action_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.doRefresh(null, $event); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("priority", 650)("content", core["Qc" /* ɵɵpipeBind1 */](1, 4, "addon.mod_forum.refreshposts"))("iconAction", ctx_r1.refreshIcon)("closeOnClick", false);
    }
}
function AddonModForumDiscussionPage_core_context_menu_item_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 22);
        core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_core_context_menu_item_10_Template_core_context_menu_item_action_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.doRefresh(null, $event, true); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("priority", 550)("content", core["Qc" /* ɵɵpipeBind1 */](1, 4, "core.settings.synchronizenow"))("iconAction", ctx_r2.syncIcon)("closeOnClick", false);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonModForumDiscussionPage_ion_card_34_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 23);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 24);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.hasdatatosync", core["ad" /* ɵɵpureFunction1 */](4, _c0, ctx_r3.discussionStr)));
    }
}
function AddonModForumDiscussionPage_ion_card_35_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 26);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](ctx_r4.availabilityMessage);
    }
}
function AddonModForumDiscussionPage_ion_card_36_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 25);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 27);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_forum.discussionlocked"));
    }
}
function AddonModForumDiscussionPage_div_37_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 28);
        core["Ec" /* ɵɵelementStart */](1, "addon-mod-forum-post", 29);
        core["Mc" /* ɵɵlistener */]("onPostChange", function AddonModForumDiscussionPage_div_37_Template_addon_mod_forum_post_onPostChange_1_listener() { core["gd" /* ɵɵrestoreView */](_r16); const ctx_r15 = core["Oc" /* ɵɵnextContext */](); return ctx_r15.postListChanged(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("post", ctx_r6.startingPost)("discussion", ctx_r6.discussion)("courseId", ctx_r6.courseId)("highlight", true)("discussionId", ctx_r6.discussionId)("component", ctx_r6.component)("componentId", ctx_r6.cmId)("replyData", ctx_r6.replyData)("originalData", ctx_r6.originalData)("forum", ctx_r6.forum)("accessInfo", ctx_r6.accessInfo)("trackPosts", ctx_r6.trackPosts)("ratingInfo", ctx_r6.ratingInfo)("leavingPage", ctx_r6.leavingPage);
    }
}
function AddonModForumDiscussionPage_ion_card_38_ng_container_1_core_spacer_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-spacer");
    }
}
function AddonModForumDiscussionPage_ion_card_38_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ion_card_38_ng_container_1_core_spacer_1_Template, 1, 0, "core-spacer", 2);
        core["Ec" /* ɵɵelementStart */](2, "addon-mod-forum-post", 31);
        core["Mc" /* ɵɵlistener */]("onPostChange", function AddonModForumDiscussionPage_ion_card_38_ng_container_1_Template_addon_mod_forum_post_onPostChange_2_listener() { core["gd" /* ɵɵrestoreView */](_r22); const ctx_r21 = core["Oc" /* ɵɵnextContext */](2); return ctx_r21.postListChanged(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const post_r18 = ctx.$implicit;
        const first_r19 = ctx.first;
        const ctx_r17 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !first_r19);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("post", post_r18)("courseId", ctx_r17.courseId)("discussionId", ctx_r17.discussionId)("component", ctx_r17.component)("componentId", ctx_r17.cmId)("replyData", ctx_r17.replyData)("originalData", ctx_r17.originalData)("parentSubject", ctx_r17.postSubjects[post_r18.parentid])("forum", ctx_r17.forum)("accessInfo", ctx_r17.accessInfo)("trackPosts", ctx_r17.trackPosts)("ratingInfo", ctx_r17.ratingInfo)("leavingPage", ctx_r17.leavingPage);
    }
}
function AddonModForumDiscussionPage_ion_card_38_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ion_card_38_ng_container_1_Template, 3, 14, "ng-container", 30);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.posts);
    }
}
function AddonModForumDiscussionPage_ng_container_39_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
const _c1 = function (a0) { return { post: a0 }; };
function AddonModForumDiscussionPage_ng_container_39_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ng_container_39_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const post_r24 = ctx.$implicit;
        core["Oc" /* ɵɵnextContext */](2);
        const _r9 = core["fd" /* ɵɵreference */](41);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, post_r24));
    }
}
function AddonModForumDiscussionPage_ng_container_39_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ng_container_39_ng_container_1_Template, 2, 4, "ng-container", 30);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r8.posts);
    }
}
function AddonModForumDiscussionPage_ng_template_40_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ac" /* ɵɵelementContainer */](0);
    }
}
function AddonModForumDiscussionPage_ng_template_40_div_2_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ng_template_40_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 32);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const child_r29 = ctx.$implicit;
        core["Oc" /* ɵɵnextContext */](3);
        const _r9 = core["fd" /* ɵɵreference */](41);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r9)("ngTemplateOutletContext", core["ad" /* ɵɵpureFunction1 */](2, _c1, child_r29));
    }
}
function AddonModForumDiscussionPage_ng_template_40_div_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 34);
        core["nd" /* ɵɵtemplate */](1, AddonModForumDiscussionPage_ng_template_40_div_2_ng_container_1_Template, 2, 4, "ng-container", 30);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const post_r26 = core["Oc" /* ɵɵnextContext */]().post;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", post_r26.children);
    }
}
function AddonModForumDiscussionPage_ng_template_40_Template(rf, ctx) {
    if (rf & 1) {
        const _r33 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "addon-mod-forum-post", 31);
        core["Mc" /* ɵɵlistener */]("onPostChange", function AddonModForumDiscussionPage_ng_template_40_Template_addon_mod_forum_post_onPostChange_1_listener() { core["gd" /* ɵɵrestoreView */](_r33); const ctx_r32 = core["Oc" /* ɵɵnextContext */](); return ctx_r32.postListChanged(); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](2, AddonModForumDiscussionPage_ng_template_40_div_2_Template, 2, 1, "div", 33);
    }
    if (rf & 2) {
        const post_r26 = ctx.post;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("post", post_r26)("courseId", ctx_r10.courseId)("discussionId", ctx_r10.discussionId)("component", ctx_r10.component)("componentId", ctx_r10.cmId)("replyData", ctx_r10.replyData)("originalData", ctx_r10.originalData)("parentSubject", ctx_r10.postSubjects[post_r26.parentid])("forum", ctx_r10.forum)("accessInfo", ctx_r10.accessInfo)("trackPosts", ctx_r10.trackPosts)("ratingInfo", ctx_r10.ratingInfo)("leavingPage", ctx_r10.leavingPage);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", post_r26.children && post_r26.children.length && post_r26.children[0].subject);
    }
}
/**
 * Page that displays a forum discussion.
 */
let discussion_page_AddonModForumDiscussionPage = /*@__PURE__*/ (() => {
    class AddonModForumDiscussionPage {
        constructor(splitView, elementRef) {
            this.splitView = splitView;
            this.elementRef = elementRef;
            this.forum = {};
            this.accessInfo = {};
            this.discussionLoaded = false;
            this.sort = 'nested';
            this.replyData = {
                replyingTo: 0,
                isEditing: false,
                subject: '',
                message: null,
                files: [],
                isprivatereply: false,
            };
            this.originalData = {
                subject: null,
                message: null,
                files: [],
                isprivatereply: false,
            };
            this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.discussionStr = '';
            this.component = services_forum["b" /* AddonModForumProvider */].COMPONENT;
            this.canPin = false;
            this.availabilityMessage = null;
            this.leavingPage = false;
            this.hasOfflineRatings = false;
        }
        get isMobile() {
            return screen["a" /* CoreScreen */].isMobile;
        }
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.forumId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('forumId');
            this.discussion = services_navigator["a" /* CoreNavigator */].getRouteParam('discussion');
            this.discussionId = this.discussion
                ? this.discussion.discussion
                : services_navigator["a" /* CoreNavigator */].getRouteNumberParam('discussionId');
            this.trackPosts = services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('trackPosts');
            this.postId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('postId');
            this.parent = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('parent');
            this.isOnline = app["a" /* CoreApp */].isOnline();
            this.onlineObserver = singletons["A" /* Network */].onChange().subscribe(() => {
                // Execute the callback in the Angular zone, so change detection doesn't stop working.
                singletons["B" /* NgZone */].run(() => {
                    this.isOnline = app["a" /* CoreApp */].isOnline();
                });
            });
            this.discussionStr = singletons["L" /* Translate */].instant('addon.mod_forum.discussion');
        }
        /**
         * View loaded.
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.parent) {
                    this.sort = 'nested'; // Force nested order.
                }
                else {
                    this.sort = yield this.getUserSort();
                }
                yield this.fetchPosts(true, false, true);
                const scrollTo = this.postId || this.parent;
                if (scrollTo) {
                    // Scroll to the post.
                    setTimeout(() => {
                        dom["a" /* CoreDomUtils */].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_forum-post-' + scrollTo);
                    });
                }
            });
        }
        /**
         * User entered the page that contains the component.
         */
        ionViewDidEnter() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.syncObserver) {
                    // Already setup.
                    return;
                }
                // The discussion object was not passed as parameter.
                if (!this.discussion) {
                    yield this.loadDiscussion(this.forumId, this.cmId, this.discussionId);
                }
                // Refresh data if this discussion is synchronized automatically.
                this.syncObserver = events["b" /* CoreEvents */].on(forum_sync["b" /* AddonModForumSyncProvider */].AUTO_SYNCED, data => {
                    if (data.forumId == this.forumId && this.discussionId == data.discussionId
                        && data.userId == sites["b" /* CoreSites */].getCurrentSiteUserId()) {
                        // Refresh the data.
                        this.discussionLoaded = false;
                        this.refreshPosts();
                    }
                }, sites["b" /* CoreSites */].getCurrentSiteId());
                // Refresh data if this forum discussion is synchronized from discussions list.
                this.syncManualObserver = events["b" /* CoreEvents */].on(forum_sync["b" /* AddonModForumSyncProvider */].MANUAL_SYNCED, data => {
                    if (data.source != 'discussion' && data.forumId == this.forumId &&
                        data.userId == sites["b" /* CoreSites */].getCurrentSiteUserId()) {
                        // Refresh the data.
                        this.discussionLoaded = false;
                        this.refreshPosts();
                    }
                }, sites["b" /* CoreSites */].getCurrentSiteId());
                // Invalidate discussion list if it was not read.
                if (this.discussion.numunread > 0) {
                    services_forum["a" /* AddonModForum */].invalidateDiscussionsList(this.forumId);
                }
                // Listen for offline ratings saved and synced.
                this.ratingOfflineObserver = events["b" /* CoreEvents */].on(rating["b" /* CoreRatingProvider */].RATING_SAVED_EVENT, (data) => {
                    if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                        data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                        this.hasOfflineRatings = true;
                    }
                });
                this.ratingSyncObserver = events["b" /* CoreEvents */].on(rating_sync["b" /* CoreRatingSyncProvider */].SYNCED_EVENT, (data) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                        data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                        this.hasOfflineRatings = false;
                    }
                }));
                this.changeDiscObserver = events["b" /* CoreEvents */].on(services_forum["b" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data => {
                    if ((this.forumId && this.forumId === data.forumId) || data.cmId === this.cmId) {
                        services_forum["a" /* AddonModForum */].invalidateDiscussionsList(this.forumId).finally(() => {
                            var _a, _b;
                            if (typeof data.locked != 'undefined') {
                                this.discussion.locked = data.locked;
                            }
                            if (typeof data.pinned != 'undefined') {
                                this.discussion.pinned = data.pinned;
                            }
                            if (typeof data.starred != 'undefined') {
                                this.discussion.starred = data.starred;
                            }
                            if (typeof data.deleted != 'undefined' && data.deleted) {
                                if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                    if ((_b = this.splitView) === null || _b === void 0 ? void 0 : _b.outletActivated) {
                                        services_navigator["a" /* CoreNavigator */].navigate('../');
                                    }
                                    else {
                                        services_navigator["a" /* CoreNavigator */].back();
                                    }
                                }
                                else {
                                    this.discussionLoaded = false;
                                    this.refreshPosts();
                                }
                            }
                        });
                    }
                });
            });
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (forum_helper["a" /* AddonModForumHelper */].hasPostDataChanged(this.replyData, this.originalData)) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                // Delete the local files from the tmp folder.
                fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.replyData.files);
                this.leavingPage = true;
                return true;
            });
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            this.syncObserver && this.syncObserver.off();
            this.syncManualObserver && this.syncManualObserver.off();
            this.ratingOfflineObserver && this.ratingOfflineObserver.off();
            this.ratingSyncObserver && this.ratingSyncObserver.off();
            this.changeDiscObserver && this.changeDiscObserver.off();
            delete this.syncObserver;
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            this.onlineObserver && this.onlineObserver.unsubscribe();
        }
        /**
         * Get sort type configured by the current user.
         *
         * @return Promise resolved with the sort type.
         */
        getUserSort() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const value = yield sites["b" /* CoreSites */].getCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                    return value;
                }
                catch (error) {
                    try {
                        const value = yield user["a" /* CoreUser */].getUserPreference('forum_displaymode');
                        switch (Number(value)) {
                            case 1:
                                return 'flat-oldest';
                            case -1:
                                return 'flat-newest';
                            case 3:
                                return 'nested';
                            case 2: // Threaded not implemented.
                            default:
                            // Not set, use default sort.
                            // @TODO add fallback to $CFG->forum_displaymode.
                        }
                    }
                    catch (error) {
                        // Ignore errors.
                    }
                }
                return 'flat-oldest';
            });
        }
        /**
         * Convenience function to get the forum.
         *
         * @return Promise resolved with the forum.
         */
        fetchForum() {
            if (this.courseId && this.cmId) {
                return services_forum["a" /* AddonModForum */].getForum(this.courseId, this.cmId);
            }
            if (this.courseId && this.forumId) {
                return services_forum["a" /* AddonModForum */].getForumById(this.courseId, this.forumId);
            }
            throw new Error('Cannot get the forum');
        }
        /**
         * Convenience function to get the posts.
         *
         * @param sync Whether to try to synchronize the discussion.
         * @param showErrors Whether to show errors in a modal.
         * @param forceMarkAsRead Whether to mark all posts as read.
         * @return Promise resolved when done.
         */
        fetchPosts(sync, showErrors, forceMarkAsRead) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let onlinePosts = [];
                const offlineReplies = [];
                let hasUnreadPosts = false;
                try {
                    if (sync) {
                        // Try to synchronize the forum.
                        yield utils["a" /* CoreUtils */].ignoreErrors(this.syncDiscussion(!!showErrors));
                    }
                    const response = yield services_forum["a" /* AddonModForum */].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                    const replies = yield forum_offline["a" /* AddonModForumOffline */].getDiscussionReplies(this.discussionId);
                    this.ratingInfo = response.ratinginfo;
                    onlinePosts = response.posts;
                    this.courseId = response.courseid || this.courseId;
                    this.forumId = response.forumid || this.forumId;
                    // Check if there are responses stored in offline.
                    this.postHasOffline = !!replies.length;
                    const convertPromises = [];
                    // Index posts to allow quick access. Also check unread field.
                    const onlinePostsMap = {};
                    onlinePosts.forEach((post) => {
                        onlinePostsMap[post.id] = post;
                        hasUnreadPosts = hasUnreadPosts || !!post.unread;
                    });
                    replies.forEach((offlineReply) => {
                        // If we don't have forumId and courseId, get it from the post.
                        if (!this.forumId) {
                            this.forumId = offlineReply.forumid;
                        }
                        if (!this.courseId) {
                            this.courseId = offlineReply.courseid;
                        }
                        convertPromises.push(forum_helper["a" /* AddonModForumHelper */].instance
                            .convertOfflineReplyToOnline(offlineReply)
                            .then((reply) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                            offlineReplies.push(reply);
                            // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                            onlinePostsMap[reply.parentid].capabilities.reply = false;
                            return;
                        })));
                    });
                    yield Promise.all(convertPromises);
                    // Convert back to array.
                    onlinePosts = utils["a" /* CoreUtils */].objectToArray(onlinePostsMap);
                    let posts = offlineReplies.concat(onlinePosts);
                    this.startingPost = services_forum["a" /* AddonModForum */].extractStartingPost(posts);
                    // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                    if (this.sort == 'nested') {
                        // Sort first by creation date to make format tree work.
                        services_forum["a" /* AddonModForum */].sortDiscussionPosts(posts, 'ASC');
                        const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                        posts = utils["a" /* CoreUtils */].formatTree(posts, 'parentid', 'id', rootId);
                    }
                    else {
                        // Set default reply subject.
                        const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                        services_forum["a" /* AddonModForum */].sortDiscussionPosts(posts, direction);
                    }
                    try {
                        // Now try to get the forum.
                        const forum = yield this.fetchForum();
                        // "forum.istracked" is more reliable than "trackPosts".
                        if (typeof forum.istracked != 'undefined') {
                            this.trackPosts = forum.istracked;
                        }
                        this.forumId = forum.id;
                        this.cmId = forum.cmid;
                        this.courseId = forum.course;
                        this.forum = forum;
                        this.availabilityMessage = forum_helper["a" /* AddonModForumHelper */].getAvailabilityMessage(forum);
                        const promises = [];
                        promises.push(services_forum["a" /* AddonModForum */].instance
                            .getAccessInformation(this.forumId, { cmId: this.cmId })
                            .then((accessInfo) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                            this.accessInfo = accessInfo;
                            // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                            // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                            if (forum_helper["a" /* AddonModForumHelper */].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                                posts.forEach((post) => {
                                    post.capabilities.reply = false;
                                });
                            }
                            return;
                        })));
                        // The discussion object was not passed as parameter and there is no starting post.
                        if (!this.discussion) {
                            promises.push(this.loadDiscussion(this.forumId, this.cmId, this.discussionId));
                        }
                        yield Promise.all(promises);
                    }
                    catch (error) {
                        // Ignore errors.
                    }
                    if (!this.discussion && !this.startingPost) {
                        // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                        throw new Error('Invalid forum discussion.');
                    }
                    if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                        // Hide author and groups for first post and type single.
                        delete this.startingPost.author.fullname;
                        delete this.startingPost.author.groups;
                    }
                    this.posts = posts;
                    this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                        postSubjects[post.id] = post.subject;
                        return postSubjects;
                    }, this.startingPost
                        ? { [this.startingPost.id]: this.startingPost.subject }
                        : {});
                    if (services_forum["a" /* AddonModForum */].isSetPinStateAvailableForSite()) {
                        // Use the canAddDiscussion WS to check if the user can pin discussions.
                        try {
                            const response = yield services_forum["a" /* AddonModForum */].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                            this.canPin = !!response.canpindiscussions;
                        }
                        catch (error) {
                            this.canPin = false;
                        }
                    }
                    else {
                        this.canPin = false;
                    }
                    this.hasOfflineRatings =
                        yield rating_offline["a" /* CoreRatingOffline */].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    this.discussionLoaded = true;
                    this.refreshIcon = constants["a" /* CoreConstants */].ICON_REFRESH;
                    this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
                    if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                        // // Add log in Moodle and mark unread posts as readed.
                        services_forum["a" /* AddonModForum */].logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                            // Ignore errors.
                        }).finally(() => {
                            // Trigger mark read posts.
                            events["b" /* CoreEvents */].trigger(services_forum["b" /* AddonModForumProvider */].MARK_READ_EVENT, {
                                courseId: this.courseId,
                                moduleId: this.cmId,
                            }, sites["b" /* CoreSites */].getCurrentSiteId());
                        });
                    }
                }
            });
        }
        /**
         * Convenience function to load discussion.
         *
         * @param forumId Forum ID.
         * @param cmId Forum cmid.
         * @param discussionId Discussion ID.
         * @return Promise resolved when done.
         */
        loadDiscussion(forumId, cmId, discussionId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Fetch the discussion if not passed as parameter.
                if (this.discussion || !forumId) {
                    return;
                }
                try {
                    const discussion = yield forum_helper["a" /* AddonModForumHelper */].getDiscussionById(forumId, cmId, discussionId);
                    this.discussion = discussion;
                    this.discussionId = this.discussion.discussion;
                }
                catch (error) {
                    // Ignore errors.
                }
            });
        }
        /**
         * Tries to synchronize the posts discussion.
         *
         * @param showErrors Whether to show errors in a modal.
         * @return Promise resolved when done.
         */
        syncDiscussion(showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(forum_sync["a" /* AddonModForumSync */].instance
                    .syncDiscussionReplies(this.discussionId)
                    .then((result) => {
                    if (result.warnings && result.warnings.length) {
                        dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                    }
                    if (result && result.updated) {
                        // Sync successful, send event.
                        events["b" /* CoreEvents */].trigger(forum_sync["b" /* AddonModForumSyncProvider */].MANUAL_SYNCED, {
                            forumId: this.forumId,
                            userId: sites["b" /* CoreSites */].getCurrentSiteUserId(),
                            source: 'discussion',
                        }, sites["b" /* CoreSites */].getCurrentSiteId());
                    }
                    return;
                }));
                promises.push(forum_sync["a" /* AddonModForumSync */].instance
                    .syncRatings(this.cmId, this.discussionId)
                    .then((result) => {
                    if (result.warnings && result.warnings.length) {
                        dom["a" /* CoreDomUtils */].showErrorModal(result.warnings[0]);
                    }
                    return;
                }));
                try {
                    yield Promise.all(promises);
                }
                catch (error) {
                    if (showErrors) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
                    }
                    throw new Error('Failed syncing discussion');
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @param done Function to call when done.
         * @param showErrors If show errors to the user of hide them.
         * @return Promise resolved when done.
         */
        doRefresh(refresher, done, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.discussionLoaded) {
                    yield this.refreshPosts(true, showErrors).finally(() => {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                        done && done();
                    });
                }
            });
        }
        /**
         * Refresh posts.
         *
         * @param sync Whether to try to synchronize the discussion.
         * @param showErrors Whether to show errors in a modal.
         * @return Promise resolved when done.
         */
        refreshPosts(sync, showErrors) {
            this.content.scrollToTop();
            this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            const promises = [
                services_forum["a" /* AddonModForum */].invalidateForumData(this.courseId),
                services_forum["a" /* AddonModForum */].invalidateDiscussionPosts(this.discussionId, this.forumId),
                services_forum["a" /* AddonModForum */].invalidateAccessInformation(this.forumId),
                services_forum["a" /* AddonModForum */].invalidateCanAddDiscussion(this.forumId),
            ];
            return utils["a" /* CoreUtils */].allPromises(promises).catch(() => {
                // Ignore errors.
            }).then(() => this.fetchPosts(sync, showErrors));
        }
        /**
         * Function to change posts sorting
         *
         * @param type Sort type.
         * @return Promised resolved when done.
         */
        changeSort(type) {
            this.discussionLoaded = false;
            this.sort = type;
            sites["b" /* CoreSites */].getCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
            this.content.scrollToTop();
            return this.fetchPosts();
        }
        /**
         * Lock or unlock the discussion.
         *
         * @param locked True to lock the discussion, false to unlock.
         */
        setLockState(locked) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    const response = yield services_forum["a" /* AddonModForum */].setLockState(this.forumId, this.discussionId, locked);
                    this.discussion.locked = response.locked;
                    const data = {
                        forumId: this.forumId,
                        discussionId: this.discussionId,
                        cmId: this.cmId,
                        locked: this.discussion.locked,
                    };
                    events["b" /* CoreEvents */].trigger(services_forum["b" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, sites["b" /* CoreSites */].getCurrentSiteId());
                    dom["a" /* CoreDomUtils */].showToast('addon.mod_forum.lockupdated', true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Pin or unpin the discussion.
         *
         * @param pinned True to pin the discussion, false to unpin it.
         */
        setPinState(pinned) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield services_forum["a" /* AddonModForum */].setPinState(this.discussionId, pinned);
                    this.discussion.pinned = pinned;
                    const data = {
                        forumId: this.forumId,
                        discussionId: this.discussionId,
                        cmId: this.cmId,
                        pinned: this.discussion.pinned,
                    };
                    events["b" /* CoreEvents */].trigger(services_forum["b" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, sites["b" /* CoreSites */].getCurrentSiteId());
                    dom["a" /* CoreDomUtils */].showToast('addon.mod_forum.pinupdated', true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Star or unstar the discussion.
         *
         * @param starred True to star the discussion, false to unstar it.
         */
        toggleFavouriteState(starred) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield services_forum["a" /* AddonModForum */].toggleFavouriteState(this.discussionId, starred);
                    this.discussion.starred = starred;
                    const data = {
                        forumId: this.forumId,
                        discussionId: this.discussionId,
                        cmId: this.cmId,
                        starred: this.discussion.starred,
                    };
                    events["b" /* CoreEvents */].trigger(services_forum["b" /* AddonModForumProvider */].CHANGE_DISCUSSION_EVENT, data, sites["b" /* CoreSites */].getCurrentSiteId());
                    dom["a" /* CoreDomUtils */].showToast('addon.mod_forum.favouriteupdated', true);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * New post added.
         */
        postListChanged() {
            // Trigger an event to notify a new reply.
            const data = {
                forumId: this.forumId,
                discussionId: this.discussionId,
                cmId: this.cmId,
            };
            events["b" /* CoreEvents */].trigger(services_forum["b" /* AddonModForumProvider */].REPLY_DISCUSSION_EVENT, data, sites["b" /* CoreSites */].getCurrentSiteId());
            this.discussionLoaded = false;
            this.refreshPosts().finally(() => {
                this.discussionLoaded = true;
            });
        }
        /**
         * Get all the posts contained in the discussion.
         *
         * @return Array containing all the posts of the discussion.
         */
        getAllPosts() {
            const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
            return array["a" /* CoreArray */].flatten(allPosts);
        }
        /**
         * Flatten a post's hierarchy into an array.
         *
         * @param parent Parent post.
         * @return Array containing all the posts within the hierarchy (including the parent).
         */
        flattenPostHierarchy(parent) {
            const posts = [parent];
            const children = parent.children || [];
            for (const child of children) {
                posts.push(...this.flattenPostHierarchy(child));
            }
            return posts;
        }
    }
    AddonModForumDiscussionPage.ɵfac = function AddonModForumDiscussionPage_Factory(t) { return new (t || AddonModForumDiscussionPage)(core["yc" /* ɵɵdirectiveInject */](split_view["a" /* CoreSplitViewComponent */], 8), core["yc" /* ɵɵdirectiveInject */](core["r" /* ElementRef */])); };
    AddonModForumDiscussionPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModForumDiscussionPage, selectors: [["page-addon-mod-forum-discussion"]], viewQuery: function AddonModForumDiscussionPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 42, vars: 64, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "end"], [3, "priority", "content", "iconAction", "closeOnClick", "action", 4, "ngIf"], ["iconAction", "fas-arrow-down", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-arrow-up", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-exchange-alt", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-lock", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-unlock", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-map-pin", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-map-pin", 3, "hidden", "priority", "content", "iconSlash", "action"], ["iconAction", "fas-star", 3, "hidden", "priority", "content", "action"], ["iconAction", "fas-star", 3, "hidden", "priority", "content", "iconSlash", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["class", "core-info-card", 4, "ngIf"], ["class", "ion-margin-bottom", 4, "ngIf"], ["nestedPosts", ""], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], [3, "priority", "content", "iconAction", "closeOnClick", "action"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], [1, "core-info-card"], ["name", "fas-info-circle", "slot", "start", "aria-hidden", "true"], ["name", "fas-lock", "slot", "start", "aria-hidden", "true"], [1, "ion-margin-bottom"], [3, "post", "discussion", "courseId", "highlight", "discussionId", "component", "componentId", "replyData", "originalData", "forum", "accessInfo", "trackPosts", "ratingInfo", "leavingPage", "onPostChange"], [4, "ngFor", "ngForOf"], [3, "post", "courseId", "discussionId", "component", "componentId", "replyData", "originalData", "parentSubject", "forum", "accessInfo", "trackPosts", "ratingInfo", "leavingPage", "onPostChange"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ion-padding-start", 4, "ngIf"], [1, "ion-padding-start"]], template: function AddonModForumDiscussionPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonModForumDiscussionPage_h1_5_Template, 2, 3, "h1", 2);
                core["zc" /* ɵɵelement */](6, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "core-navbar-buttons", 3);
                core["Ec" /* ɵɵelementStart */](8, "core-context-menu");
                core["nd" /* ɵɵtemplate */](9, AddonModForumDiscussionPage_core_context_menu_item_9_Template, 2, 6, "core-context-menu-item", 4);
                core["nd" /* ɵɵtemplate */](10, AddonModForumDiscussionPage_core_context_menu_item_10_Template, 2, 6, "core-context-menu-item", 4);
                core["Ec" /* ɵɵelementStart */](11, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_11_listener() { return ctx.changeSort("flat-oldest"); });
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-context-menu-item", 6);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_13_listener() { return ctx.changeSort("flat-newest"); });
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](15, "core-context-menu-item", 7);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_15_listener() { return ctx.changeSort("nested"); });
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "core-context-menu-item", 8);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_17_listener() { return ctx.setLockState(true); });
                core["Pc" /* ɵɵpipe */](18, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](19, "core-context-menu-item", 9);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_19_listener() { return ctx.setLockState(false); });
                core["Pc" /* ɵɵpipe */](20, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](21, "core-context-menu-item", 10);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_21_listener() { return ctx.setPinState(true); });
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](23, "core-context-menu-item", 11);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_23_listener() { return ctx.setPinState(false); });
                core["Pc" /* ɵɵpipe */](24, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](25, "core-context-menu-item", 12);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_25_listener() { return ctx.toggleFavouriteState(true); });
                core["Pc" /* ɵɵpipe */](26, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](27, "core-context-menu-item", 13);
                core["Mc" /* ɵɵlistener */]("action", function AddonModForumDiscussionPage_Template_core_context_menu_item_action_27_listener() { return ctx.toggleFavouriteState(false); });
                core["Pc" /* ɵɵpipe */](28, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](29, "ion-content");
                core["Ec" /* ɵɵelementStart */](30, "ion-refresher", 14);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModForumDiscussionPage_Template_ion_refresher_ionRefresh_30_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](31, "ion-refresher-content", 15);
                core["Pc" /* ɵɵpipe */](32, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](33, "core-loading", 16);
                core["nd" /* ɵɵtemplate */](34, AddonModForumDiscussionPage_ion_card_34_Template, 6, 6, "ion-card", 17);
                core["nd" /* ɵɵtemplate */](35, AddonModForumDiscussionPage_ion_card_35_Template, 5, 1, "ion-card", 18);
                core["nd" /* ɵɵtemplate */](36, AddonModForumDiscussionPage_ion_card_36_Template, 6, 3, "ion-card", 18);
                core["nd" /* ɵɵtemplate */](37, AddonModForumDiscussionPage_div_37_Template, 2, 14, "div", 19);
                core["nd" /* ɵɵtemplate */](38, AddonModForumDiscussionPage_ion_card_38_Template, 2, 1, "ion-card", 2);
                core["nd" /* ɵɵtemplate */](39, AddonModForumDiscussionPage_ng_container_39_Template, 2, 1, "ng-container", 2);
                core["nd" /* ɵɵtemplate */](40, AddonModForumDiscussionPage_ng_template_40_Template, 3, 14, "ng-template", null, 20, core["od" /* ɵɵtemplateRefExtractor */]);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 42, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.startingPost);
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.discussionLoaded && !ctx.postHasOffline && ctx.isOnline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.discussionLoaded && ctx.isMobile && ctx.postHasOffline && ctx.isOnline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.sort == "flat-oldest")("priority", 500)("content", core["Qc" /* ɵɵpipeBind1 */](12, 44, "addon.mod_forum.modeflatoldestfirst"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.sort == "flat-newest")("priority", 450)("content", core["Qc" /* ɵɵpipeBind1 */](14, 46, "addon.mod_forum.modeflatnewestfirst"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", ctx.sort == "nested")("priority", 400)("content", core["Qc" /* ɵɵpipeBind1 */](16, 48, "addon.mod_forum.modenested"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.discussion.canlock || ctx.discussion.locked)("priority", 300)("content", core["Qc" /* ɵɵpipeBind1 */](18, 50, "addon.mod_forum.lockdiscussion"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.discussion.canlock || !ctx.discussion.locked)("priority", 300)("content", core["Qc" /* ɵɵpipeBind1 */](20, 52, "addon.mod_forum.unlockdiscussion"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.canPin || ctx.discussion.pinned)("priority", 250)("content", core["Qc" /* ɵɵpipeBind1 */](22, 54, "addon.mod_forum.pindiscussion"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.canPin || !ctx.discussion.pinned)("priority", 250)("content", core["Qc" /* ɵɵpipeBind1 */](24, 56, "addon.mod_forum.unpindiscussion"))("iconSlash", true);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.discussion.canfavourite || ctx.discussion.starred)("priority", 200)("content", core["Qc" /* ɵɵpipeBind1 */](26, 58, "addon.mod_forum.addtofavourites"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.discussion || !ctx.discussion.canfavourite || !ctx.discussion.starred)("priority", 200)("content", core["Qc" /* ɵɵpipeBind1 */](28, 60, "addon.mod_forum.removefromfavourites"))("iconSlash", true);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.discussionLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](32, 62, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.discussionLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.postHasOffline || ctx.hasOfflineRatings);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.availabilityMessage);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.discussion && ctx.discussion.locked);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.startingPost);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.sort != "nested");
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.sort == "nested");
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], post["a" /* AddonModForumPostComponent */], common["s" /* NgForOf */], spacer["a" /* CoreSpacerComponent */], common["A" /* NgTemplateOutlet */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-forum-reply-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin:0}"] });
    return AddonModForumDiscussionPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/forum/pages/discussion/discussion.module.ts
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








const routes = [{
        path: '',
        component: discussion_page_AddonModForumDiscussionPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    }];
let discussion_module_AddonForumDiscussionPageModule = /*@__PURE__*/ (() => {
    class AddonForumDiscussionPageModule {
    }
    AddonForumDiscussionPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonForumDiscussionPageModule });
    AddonForumDiscussionPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonForumDiscussionPageModule_Factory(t) { return new (t || AddonForumDiscussionPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModForumComponentsModule */],
            ]] });
    return AddonForumDiscussionPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](discussion_module_AddonForumDiscussionPageModule, { declarations: [discussion_page_AddonModForumDiscussionPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModForumComponentsModule */]] });
})();


/***/ })

}]);