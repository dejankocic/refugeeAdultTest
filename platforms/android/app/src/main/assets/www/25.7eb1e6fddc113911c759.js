(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "Md7T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonBlogLazyModule", function() { return /* binding */ blog_lazy_module_AddonBlogLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/addons/blog/services/blog.ts
var blog = __webpack_require__("SJTA");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments.ts
var comments = __webpack_require__("5pQw");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag.ts
var tag = __webpack_require__("kWmn");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/infinite-loading/infinite-loading.ts
var infinite_loading = __webpack_require__("xpMl");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/features/tag/components/list/list.ts
var list = __webpack_require__("vSVd");

// EXTERNAL MODULE: ./src/core/features/comments/components/comments/comments.ts
var comments_comments = __webpack_require__("1Rj0");

// EXTERNAL MODULE: ./src/core/components/file/file.ts
var file = __webpack_require__("5450");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// EXTERNAL MODULE: ./src/core/pipes/time-ago.ts
var time_ago = __webpack_require__("lAaw");

// CONCATENATED MODULE: ./src/addons/blog/pages/entries/entries.ts




























function AddonBlogEntriesPage_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonBlogEntriesPage_ion_item_14_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.onlyMyEntries = $event; })("ionChange", function AddonBlogEntriesPage_ion_item_14_Template_ion_toggle_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r5 = core["Oc" /* ɵɵnextContext */](); return ctx_r5.onlyMyEntriesToggleChanged(ctx_r5.onlyMyEntries); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.blog.showonlyyourentries"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.onlyMyEntries);
    }
}
function AddonBlogEntriesPage_core_empty_box_15_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 11);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.blog.noentriesyet"));
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "div", 0);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "core-tag-list", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.tag.tags"), ":");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("tags", entry_r6.tags);
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_core_comments_19_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-comments", 25);
    }
    if (rf & 2) {
        const entry_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r9 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("component", ctx_r9.component)("itemId", entry_r6.id)("instanceId", entry_r6.userid)("showItem", true);
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_core_file_20_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-file", 26);
    }
    if (rf & 2) {
        const file_r15 = ctx.$implicit;
        const entry_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("file", file_r15)("component", ctx_r10.component)("componentId", entry_r6.id);
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 27);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Vc" /* ɵɵproperty */]("href", entry_r6.uniquehash);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.blog.linktooriginalentry"));
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_div_22_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 28);
        core["Ec" /* ɵɵelementStart */](1, "ion-note");
        core["zc" /* ɵɵelement */](2, "ion-icon", 29);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "coreTimeAgo");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 2, "core.lastmodified"));
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](5, 4, entry_r6.lastmodified), " ");
    }
}
function AddonBlogEntriesPage_ng_container_16_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 12);
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 13);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 14);
        core["zc" /* ɵɵelement */](5, "core-format-text", 15);
        core["Ec" /* ɵɵelementStart */](6, "ion-note", 16);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "p");
        core["Ec" /* ɵɵelementStart */](10, "ion-note", 17);
        core["pd" /* ɵɵtext */](11);
        core["Pc" /* ɵɵpipe */](12, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
        core["pd" /* ɵɵtext */](13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-card-content");
        core["Ec" /* ɵɵelementStart */](15, "ion-item", 12);
        core["Ec" /* ɵɵelementStart */](16, "ion-label");
        core["zc" /* ɵɵelement */](17, "core-format-text", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](18, AddonBlogEntriesPage_ng_container_16_ion_card_1_ion_item_18_Template, 6, 4, "ion-item", 19);
        core["nd" /* ɵɵtemplate */](19, AddonBlogEntriesPage_ng_container_16_ion_card_1_core_comments_19_Template, 1, 4, "core-comments", 20);
        core["nd" /* ɵɵtemplate */](20, AddonBlogEntriesPage_ng_container_16_ion_card_1_core_file_20_Template, 1, 3, "core-file", 21);
        core["nd" /* ɵɵtemplate */](21, AddonBlogEntriesPage_ng_container_16_ion_card_1_ion_item_21_Template, 4, 4, "ion-item", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](22, AddonBlogEntriesPage_ng_container_16_ion_card_1_div_22_Template, 6, 6, "div", 23);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r7 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("user", entry_r6.user)("courseId", entry_r6.courseid);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", entry_r6.subject)("contextLevel", ctx_r7.contextLevel)("contextInstanceId", ctx_r7.contextInstanceId);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](8, 18, "addon.blog." + entry_r6.publishTranslated), " ");
        core["lc" /* ɵɵadvance */](4);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](12, 20, entry_r6.created), " ");
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", entry_r6.user && entry_r6.user.fullname, " ");
        core["lc" /* ɵɵadvance */](4);
        core["Vc" /* ɵɵproperty */]("text", entry_r6.summary)("component", ctx_r7.component)("componentId", entry_r6.id)("contextLevel", ctx_r7.contextLevel)("contextInstanceId", ctx_r7.contextInstanceId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.tagsEnabled && entry_r6.tags && entry_r6.tags.length > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.commentsEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", entry_r6.attachmentfiles);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", entry_r6.uniquehash);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", entry_r6.lastmodified > entry_r6.created);
    }
}
function AddonBlogEntriesPage_ng_container_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonBlogEntriesPage_ng_container_16_ion_card_1_Template, 23, 22, "ion-card", 6);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const entry_r6 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r2.onlyMyEntries || entry_r6.userid == ctx_r2.currentUserId);
    }
}
/**
 * Page that displays the list of blog entries.
 */
let entries_AddonBlogEntriesPage = /*@__PURE__*/ (() => {
    class AddonBlogEntriesPage {
        constructor() {
            this.title = '';
            this.filter = {};
            this.pageLoaded = 0;
            this.userPageLoaded = 0;
            this.canLoadMoreEntries = false;
            this.canLoadMoreUserEntries = true;
            this.loaded = false;
            this.canLoadMore = false;
            this.loadMoreError = false;
            this.entries = [];
            this.showMyEntriesToggle = false;
            this.onlyMyEntries = false;
            this.component = blog["b" /* AddonBlogProvider */].COMPONENT;
            this.commentsEnabled = false;
            this.tagsEnabled = false;
            this.contextLevel = "system" /* SYSTEM */;
            this.contextInstanceId = 0;
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
            this.siteHomeId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
                const courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                const cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                const entryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('entryId');
                const groupId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('groupId');
                const tagId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('tagId');
                if (!userId && !courseId && !cmId && !entryId && !groupId && !tagId) {
                    this.title = 'addon.blog.siteblogheading';
                }
                else {
                    this.title = 'addon.blog.blogentries';
                }
                if (userId) {
                    this.filter.userid = userId;
                }
                this.showMyEntriesToggle = !userId;
                if (courseId) {
                    this.filter.courseid = courseId;
                }
                if (cmId) {
                    this.filter.cmid = cmId;
                }
                if (entryId) {
                    this.filter.entryid = entryId;
                }
                if (groupId) {
                    this.filter.groupid = groupId;
                }
                if (tagId) {
                    this.filter.tagid = tagId;
                }
                // Calculate the context level.
                if (userId && !courseId && !cmId) {
                    this.contextLevel = "user" /* USER */;
                    this.contextInstanceId = userId;
                }
                else if (courseId && courseId != this.siteHomeId) {
                    this.contextLevel = "course" /* COURSE */;
                    this.contextInstanceId = courseId;
                }
                else {
                    this.contextLevel = "system" /* SYSTEM */;
                    this.contextInstanceId = 0;
                }
                this.commentsEnabled = !comments["a" /* CoreComments */].areCommentsDisabledInSite();
                this.tagsEnabled = tag["a" /* CoreTag */].areTagsAvailableInSite();
                yield this.fetchEntries();
                utils["a" /* CoreUtils */].ignoreErrors(blog["a" /* AddonBlog */].logView(this.filter));
            });
        }
        /**
         * Fetch blog entries.
         *
         * @param refresh Empty events array first.
         * @return Promise with the entries.
         */
        fetchEntries(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadMoreError = false;
                if (refresh) {
                    this.pageLoaded = 0;
                    this.userPageLoaded = 0;
                }
                const loadPage = this.onlyMyEntries ? this.userPageLoaded : this.pageLoaded;
                try {
                    const result = yield blog["a" /* AddonBlog */].getEntries(this.filter, loadPage);
                    const promises = result.entries.map((entry) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                        switch (entry.publishstate) {
                            case 'draft':
                                entry.publishTranslated = 'publishtonoone';
                                break;
                            case 'site':
                                entry.publishTranslated = 'publishtosite';
                                break;
                            case 'public':
                                entry.publishTranslated = 'publishtoworld';
                                break;
                            default:
                                entry.publishTranslated = 'privacy:unknown';
                                break;
                        }
                        // Calculate the context. This code was inspired by calendar events, Moodle doesn't do this for blogs.
                        if (entry.moduleid || entry.coursemoduleid) {
                            entry.contextLevel = "module" /* MODULE */;
                            entry.contextInstanceId = entry.moduleid || entry.coursemoduleid;
                        }
                        else if (entry.courseid) {
                            entry.contextLevel = "course" /* COURSE */;
                            entry.contextInstanceId = entry.courseid;
                        }
                        else {
                            entry.contextLevel = "user" /* USER */;
                            entry.contextInstanceId = entry.userid;
                        }
                        entry.summary = utils_text["a" /* CoreTextUtils */].instance.replacePluginfileUrls(entry.summary, entry.summaryfiles || []);
                        return user["a" /* CoreUser */].getProfile(entry.userid, entry.courseid, true).then((user) => {
                            entry.user = user;
                            return;
                        }).catch(() => {
                            // Ignore errors.
                        });
                    }));
                    if (refresh) {
                        this.entries = result.entries;
                    }
                    else {
                        this.entries = utils["a" /* CoreUtils */].uniqueArray(this.entries
                            .concat(result.entries), 'id')
                            .sort((a, b) => b.created - a.created);
                    }
                    if (this.onlyMyEntries) {
                        const count = this.entries.filter((entry) => entry.userid == this.currentUserId).length;
                        this.canLoadMoreUserEntries = result.totalentries > count;
                        this.canLoadMore = this.canLoadMoreUserEntries;
                        this.userPageLoaded++;
                    }
                    else {
                        this.canLoadMoreEntries = result.totalentries > this.entries.length;
                        this.canLoadMore = this.canLoadMoreEntries;
                        this.pageLoaded++;
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.blog.errorloadentries', true);
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Toggle between showing only my entries or not.
         *
         * @param enabled If true, filter my entries. False otherwise.
         */
        onlyMyEntriesToggleChanged(enabled) {
            this.canLoadMore = enabled ? this.canLoadMoreUserEntries : this.canLoadMoreEntries;
            if (!enabled) {
                delete this.filter.userid;
                return;
            }
            const count = this.entries.filter((entry) => entry.userid == this.currentUserId).length;
            this.userPageLoaded = Math.floor(count / blog["b" /* AddonBlogProvider */].ENTRIES_PER_PAGE);
            this.filter.userid = this.currentUserId;
            if (count == 0 && this.canLoadMoreUserEntries) {
                // First time but no entry loaded. Try to load some.
                this.loadMore();
            }
        }
        /**
         * Function to load more entries.
         *
         * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
         * @return Resolved when done.
         */
        loadMore(infiniteComplete) {
            return this.fetchEntries().finally(() => {
                infiniteComplete && infiniteComplete();
            });
        }
        /**
         * Refresh blog entries on PTR.
         *
         * @param refresher Refresher instance.
         */
        refresh(refresher) {
            const promises = this.entries.map((entry) => comments["a" /* CoreComments */].invalidateCommentsData('user', entry.userid, this.component, entry.id, 'format_blog'));
            promises.push(blog["a" /* AddonBlog */].invalidateEntries(this.filter));
            if (this.showMyEntriesToggle) {
                this.filter['userid'] = this.currentUserId;
                promises.push(blog["a" /* AddonBlog */].invalidateEntries(this.filter));
                if (!this.onlyMyEntries) {
                    delete this.filter['userid'];
                }
            }
            utils["a" /* CoreUtils */].allPromises(promises).finally(() => {
                this.fetchEntries(true).finally(() => {
                    if (refresher) {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                });
            });
        }
    }
    AddonBlogEntriesPage.ɵfac = function AddonBlogEntriesPage_Factory(t) { return new (t || AddonBlogEntriesPage)(); };
    AddonBlogEntriesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonBlogEntriesPage, selectors: [["page-addon-blog-entries"]], decls: 18, vars: 16, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["icon", "far-newspaper", 3, "message", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "enabled", "error", "action"], [3, "ngModel", "ngModelChange", "ionChange"], ["icon", "far-newspaper", 3, "message"], [1, "ion-text-wrap"], ["slot", "start", 3, "user", "courseId"], [1, "item-heading"], [3, "text", "contextLevel", "contextInstanceId"], [1, "ion-float-end", "ion-padding-start", "ion-text-end"], [1, "ion-float-end", "ion-text-end"], [3, "text", "component", "componentId", "contextLevel", "contextInstanceId"], ["class", "ion-text-wrap", 4, "ngIf"], ["area", "format_blog", "contextLevel", "user", 3, "component", "itemId", "instanceId", "showItem", 4, "ngIf"], [3, "file", "component", "componentId", 4, "ngFor", "ngForOf"], ["core-link", "", "detail", "true", 3, "href", 4, "ngIf"], ["class", "ion-text-center ion-margin-bottom", 4, "ngIf"], [3, "tags"], ["area", "format_blog", "contextLevel", "user", 3, "component", "itemId", "instanceId", "showItem"], [3, "file", "component", "componentId"], ["core-link", "", "detail", "true", 3, "href"], [1, "ion-text-center", "ion-margin-bottom"], ["name", "fas-clock"]], template: function AddonBlogEntriesPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Pc" /* ɵɵpipe */](7, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](8, "ion-buttons", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonBlogEntriesPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refresh($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](14, AddonBlogEntriesPage_ion_item_14_Template, 5, 4, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](15, AddonBlogEntriesPage_core_empty_box_15_Template, 2, 3, "core-empty-box", 7);
                core["nd" /* ɵɵtemplate */](16, AddonBlogEntriesPage_ng_container_16_Template, 2, 1, "ng-container", 8);
                core["Ec" /* ɵɵelementStart */](17, "core-infinite-loading", 9);
                core["Mc" /* ɵɵlistener */]("action", function AddonBlogEntriesPage_Template_core_infinite_loading_action_17_listener($event) { return ctx.loadMore($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, ctx.title));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 14, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showMyEntriesToggle);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.entries && ctx.entries.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.entries);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("enabled", ctx.canLoadMore)("error", ctx.loadMoreError);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], common["s" /* NgForOf */], infinite_loading["a" /* CoreInfiniteLoadingComponent */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["m" /* IonCard */], user_avatar["a" /* CoreUserAvatarComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["V" /* IonNote */], ionic_angular["n" /* IonCardContent */], list["a" /* CoreTagListComponent */], comments_comments["a" /* CoreCommentsCommentsComponent */], file["a" /* CoreFileComponent */], directives_link["a" /* CoreLinkDirective */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */], time_ago["a" /* CoreTimeAgoPipe */]], encapsulation: 2 });
    return AddonBlogEntriesPage;
})();

// EXTERNAL MODULE: ./src/core/features/comments/components/components.module.ts
var components_module = __webpack_require__("rGK3");

// EXTERNAL MODULE: ./src/core/features/tag/components/components.module.ts
var components_components_module = __webpack_require__("yQkb");

// EXTERNAL MODULE: ./src/core/features/mainmenu/mainmenu-tab-routing.module.ts
var mainmenu_tab_routing_module = __webpack_require__("wG2S");

// EXTERNAL MODULE: ./src/addons/blog/services/handlers/mainmenu.ts
var mainmenu = __webpack_require__("KZF4");

// CONCATENATED MODULE: ./src/addons/blog/blog-lazy.module.ts
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
        ...Object(mainmenu_tab_routing_module["b" /* buildTabMainRoutes */])(injector, {
            data: {
                mainMenuTabRoot: mainmenu["b" /* AddonBlogMainMenuHandlerService */].PAGE_NAME,
            },
            component: entries_AddonBlogEntriesPage,
        }),
    ];
}
let blog_lazy_module_AddonBlogLazyModule = /*@__PURE__*/ (() => {
    class AddonBlogLazyModule {
    }
    AddonBlogLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonBlogLazyModule });
    AddonBlogLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonBlogLazyModule_Factory(t) { return new (t || AddonBlogLazyModule)(); }, providers: [
            {
                provide: router["g" /* ROUTES */],
                multi: true,
                deps: [core["x" /* Injector */]],
                useFactory: buildRoutes,
            },
        ], imports: [[
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCommentsComponentsModule */],
                components_components_module["a" /* CoreTagComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonBlogLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](blog_lazy_module_AddonBlogLazyModule, { declarations: [entries_AddonBlogEntriesPage], imports: [shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCommentsComponentsModule */],
            components_components_module["a" /* CoreTagComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);