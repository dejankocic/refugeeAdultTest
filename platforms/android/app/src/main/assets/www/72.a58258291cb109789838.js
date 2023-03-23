(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "u5Wa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModWikiLazyModule", function() { return /* binding */ wiki_lazy_module_AddonModWikiLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/wiki/components/components.module.ts
var components_module = __webpack_require__("QowF");

// EXTERNAL MODULE: ./src/addons/mod/wiki/pages/index/index.ts
var index = __webpack_require__("9Hu0");

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/addons/mod/wiki/services/wiki.ts
var wiki = __webpack_require__("IfL8");

// EXTERNAL MODULE: ./src/addons/mod/wiki/services/wiki-offline.ts
var wiki_offline = __webpack_require__("JZ+O");

// EXTERNAL MODULE: ./src/addons/mod/wiki/services/wiki-sync.ts
var wiki_sync = __webpack_require__("NH8Q");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/wiki/pages/edit/edit.ts

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























const _c0 = ["editPageForm"];
function AddonModWikiEditPage_form_13_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 10);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "ion-input", 14);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.mod_wiki.newpagetitle"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](5, 4, "addon.mod_wiki.newpagetitle"));
    }
}
function AddonModWikiEditPage_form_13_ion_item_9_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 15);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "ion-badge", 16);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_wiki.wrongversionlock"));
    }
}
function AddonModWikiEditPage_form_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "form", 7, 8);
        core["nd" /* ɵɵtemplate */](2, AddonModWikiEditPage_form_13_ion_item_2_Template, 6, 6, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](3, "ion-item");
        core["Ec" /* ɵɵelementStart */](4, "ion-label", 10);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](7, "core-rich-text-editor", 11);
        core["Pc" /* ɵɵpipe */](8, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](9, AddonModWikiEditPage_form_13_ion_item_9_Template, 5, 3, "ion-item", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r0.pageForm);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.canEditTitle);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 11, "core.content"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r0.contentControl)("placeholder", core["Qc" /* ɵɵpipeBind1 */](8, 13, "core.content"))("component", ctx_r0.component)("componentId", ctx_r0.cmId)("autoSave", true)("contextInstanceId", ctx_r0.cmId)("draftExtraParams", ctx_r0.editorExtraParams);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.wrongVersionLock);
    }
}
/**
 * Page that allows adding or editing a wiki page.
 */
let edit_AddonModWikiEditPage = /*@__PURE__*/ (() => {
    class AddonModWikiEditPage {
        constructor(formBuilder) {
            this.formBuilder = formBuilder;
            this.canEditTitle = false; // Whether title can be edited.
            this.loaded = false; // Whether the data has been loaded.
            this.component = wiki["b" /* AddonModWikiProvider */].COMPONENT; // Component to link the files to.
            this.wrongVersionLock = false; // Whether the page lock doesn't match the initial one.
            this.editorExtraParams = {};
            this.editing = false; // Whether the user is editing a page (true) or creating a new one (false).
            this.editOffline = false; // Whether the user is editing an offline page.
            this.subwikiFiles = []; // List of files of the subwiki.
            this.forceLeave = false; // To allow leaving the page without checking for changes.
            this.isDestroyed = false; // Whether the page has been destroyed.
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId') || undefined;
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId') || undefined;
                this.subwikiId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('subwikiId');
                this.wikiId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('wikiId');
                this.pageId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('pageId');
                this.section = services_navigator["a" /* CoreNavigator */].getRouteParam('section');
                this.groupId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('groupId');
                this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
                let pageTitle = services_navigator["a" /* CoreNavigator */].getRouteParam('pageTitle');
                pageTitle = pageTitle ? pageTitle.replace(/\+/g, ' ') : '';
                this.canEditTitle = !pageTitle;
                this.title = pageTitle ?
                    singletons["L" /* Translate */].instant('addon.mod_wiki.editingpage', { $a: pageTitle }) :
                    singletons["L" /* Translate */].instant('addon.mod_wiki.newpagehdr');
                this.blockId = wiki_sync["a" /* AddonModWikiSync */].getSubwikiBlockId(this.subwikiId, this.wikiId, this.userId, this.groupId);
                // Create the form group and its controls.
                this.contentControl = this.formBuilder.control('');
                this.pageForm = this.formBuilder.group({
                    title: pageTitle,
                });
                this.pageForm.addControl('text', this.contentControl);
                // Block the wiki so it cannot be synced.
                sync["a" /* CoreSync */].blockOperation(this.component, this.blockId);
                if (this.pageId) {
                    this.editorExtraParams.pageid = this.pageId;
                    if (this.section) {
                        this.editorExtraParams.section = this.section;
                    }
                }
                else if (pageTitle) {
                    this.editorExtraParams.pagetitle = pageTitle;
                }
                try {
                    const success = yield this.fetchWikiPageData();
                    if (success && !this.isDestroyed) {
                        // Block the subwiki now that we have blockId for sure.
                        const newBlockId = wiki_sync["a" /* AddonModWikiSync */].getSubwikiBlockId(this.subwikiId, this.wikiId, this.userId, this.groupId);
                        if (newBlockId != this.blockId) {
                            sync["a" /* CoreSync */].unblockOperation(this.component, this.blockId);
                            this.blockId = newBlockId;
                            sync["a" /* CoreSync */].blockOperation(this.component, this.blockId);
                        }
                    }
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Convenience function to get wiki page data.
         *
         * @return Promise resolved with boolean: whether it was successful.
         */
        fetchWikiPageData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let canEdit = false;
                let fetchFailed = false;
                try {
                    // Wait for sync to be over (if any).
                    const syncResult = yield wiki_sync["a" /* AddonModWikiSync */].waitForSync(this.blockId);
                    if (this.pageId) {
                        // Editing a page that already exists.
                        this.canEditTitle = false;
                        this.editing = true;
                        this.editOffline = false; // Cannot edit pages in offline.
                        // Get page contents to obtain title and editing permission
                        const pageContents = yield wiki["a" /* AddonModWiki */].getPageContents(this.pageId, { cmId: this.cmId });
                        this.pageForm.controls.title.setValue(pageContents.title); // Set the title in the form group.
                        this.wikiId = pageContents.wikiid;
                        this.subwikiId = pageContents.subwikiid;
                        this.title = singletons["L" /* Translate */].instant('addon.mod_wiki.editingpage', { $a: pageContents.title });
                        this.groupId = pageContents.groupid;
                        this.userId = pageContents.userid;
                        canEdit = pageContents.caneditpage;
                        yield this.fetchModuleAndCourseId();
                        // Get subwiki files, needed to replace URLs for rich text editor.
                        this.subwikiFiles = yield wiki["a" /* AddonModWiki */].getSubwikiFiles(this.wikiId, {
                            groupId: this.groupId,
                            userId: this.userId,
                            cmId: this.cmId,
                        });
                        // Get editable text of the page/section.
                        const editContents = yield wiki["a" /* AddonModWiki */].getPageForEditing(this.pageId, this.section);
                        // Get the original page contents, treating file URLs if needed.
                        const content = utils_text["a" /* CoreTextUtils */].replacePluginfileUrls(editContents.content || '', this.subwikiFiles);
                        this.contentControl.setValue(content);
                        this.originalContent = content;
                        this.version = editContents.version;
                        if (canEdit) {
                            // Renew the lock every certain time.
                            this.renewLockInterval = window.setInterval(() => {
                                this.renewLock();
                            }, wiki["b" /* AddonModWikiProvider */].RENEW_LOCK_TIME);
                        }
                    }
                    else {
                        const pageTitle = this.pageForm.controls.title.value;
                        this.editing = false;
                        canEdit = !!this.blockId; // If no blockId, the user cannot edit the page.
                        yield this.fetchModuleAndCourseId();
                        // Try to get wikiId.
                        if (!this.wikiId && this.cmId && this.courseId) {
                            const module = yield course["a" /* CoreCourse */].getModule(this.cmId, this.courseId, undefined, true);
                            this.wikiId = module.instance;
                        }
                        if (pageTitle) {
                            // Title is set, it could be editing an offline page or creating a new page using an edit link.
                            // First of all, verify if this page was created in the current sync.
                            if (syncResult) {
                                const page = syncResult.created.find((page) => page.title == pageTitle);
                                if (page && page.pageId > 0) {
                                    // Page was created, now it exists in the site.
                                    this.pageId = page.pageId;
                                    return this.fetchWikiPageData();
                                }
                            }
                            // Check if there's already some offline data for this page.
                            const page = yield utils["a" /* CoreUtils */].ignoreErrors(wiki_offline["a" /* AddonModWikiOffline */].getNewPage(pageTitle, this.subwikiId, this.wikiId, this.userId, this.groupId));
                            if (page) {
                                // Load offline content.
                                this.contentControl.setValue(page.cachedcontent);
                                this.originalContent = page.cachedcontent;
                                this.editOffline = true;
                            }
                            else {
                                // No offline data found.
                                this.editOffline = false;
                            }
                        }
                        else {
                            this.editOffline = false;
                        }
                    }
                    return true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting wiki data.');
                    fetchFailed = true;
                    // Go back.
                    this.forceLeavePage();
                    return false;
                }
                finally {
                    if (!canEdit && !fetchFailed) {
                        // Cannot edit, show alert and go back.
                        dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.notice'), singletons["L" /* Translate */].instant('addon.mod_wiki.cannoteditpage'));
                        this.forceLeavePage();
                    }
                }
            });
        }
        /**
         * Load cmId and courseId if they aren't set.
         *
         * @return Promise.
         */
        fetchModuleAndCourseId() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.wikiId || (this.cmId && this.courseId)) {
                    return;
                }
                const module = yield course["a" /* CoreCourse */].getModuleBasicInfoByInstance(this.wikiId, 'wiki');
                this.cmId = module.id;
                this.courseId = module.course;
            });
        }
        /**
         * Force leaving the page, without checking for changes.
         */
        forceLeavePage() {
            this.forceLeave = true;
            services_navigator["a" /* CoreNavigator */].back();
        }
        /**
         * Navigate to a page.
         *
         * @param title Page title.
         */
        goToPage(title) {
            // Not the firstpage.
            wiki["a" /* AddonModWiki */].setEditedPageData({
                cmId: this.cmId,
                courseId: this.courseId,
                pageId: this.pageId,
                pageTitle: title,
                wikiId: this.wikiId,
                subwikiId: this.subwikiId,
                userId: this.userId,
                groupId: this.groupId,
            });
            this.forceLeavePage();
        }
        /**
         * Check if data has changed.
         *
         * @return Whether data has changed.
         */
        hasDataChanged() {
            const values = this.pageForm.value;
            return !(this.originalContent == values.text || (!this.editing && !values.text && !values.title));
        }
        /**
         * @inheritdoc
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave) {
                    return true;
                }
                // Check if data has changed.
                if (this.hasDataChanged()) {
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                return true;
            });
        }
        /**
         * @inheritdoc
         */
        ionViewDidLeave() {
            // When going back, the ionViewDidEnter of the previous page should be called before this ionViewDidLeave.
            // But just in case, use a timeout to make sure it does.
            setTimeout(() => {
                // Remove the edited page data (if any) if the previous page isn't a wiki page.
                wiki["a" /* AddonModWiki */].consumeEditedPageData();
            }, 200);
        }
        /**
         * Save the data.
         */
        save() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const values = this.pageForm.value;
                const title = values.title;
                let text = values.text;
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                text = utils_text["a" /* CoreTextUtils */].restorePluginfileUrls(text, this.subwikiFiles);
                text = utils_text["a" /* CoreTextUtils */].formatHtmlLines(text);
                try {
                    if (this.editing) {
                        // Edit existing page.
                        yield wiki["a" /* AddonModWiki */].editPage(this.pageId, text, this.section);
                        singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, true, sites["b" /* CoreSites */].getCurrentSiteId());
                        // Invalidate page since it changed.
                        yield wiki["a" /* AddonModWiki */].invalidatePage(this.pageId);
                        return this.goToPage(title);
                    }
                    // Creating a new page.
                    if (!title) {
                        // Title is mandatory, stop.
                        modal.dismiss();
                        dom["a" /* CoreDomUtils */].showAlert(singletons["L" /* Translate */].instant('core.notice'), singletons["L" /* Translate */].instant('addon.mod_wiki.titleshouldnotbeempty'));
                        return;
                    }
                    if (!this.editOffline) {
                        // Check if the user has an offline page with the same title.
                        const page = yield utils["a" /* CoreUtils */].ignoreErrors(wiki_offline["a" /* AddonModWikiOffline */].getNewPage(title, this.subwikiId, this.wikiId, this.userId, this.groupId));
                        if (page) {
                            // There's a page with same title, reject with error message.
                            throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_wiki.pageexists'));
                        }
                    }
                    // Try to send the page.
                    const id = yield wiki["a" /* AddonModWiki */].newPage(title, text, {
                        subwikiId: this.subwikiId,
                        wikiId: this.wikiId,
                        userId: this.userId,
                        groupId: this.groupId,
                        cmId: this.cmId,
                    });
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, id > 0, sites["b" /* CoreSites */].getCurrentSiteId());
                    if (id <= 0) {
                        // Page stored in offline. Go to see the offline page.
                        return this.goToPage(title);
                    }
                    // Page was created, get its data and go to the page.
                    events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'wiki' });
                    this.pageId = id;
                    const pageContents = yield wiki["a" /* AddonModWiki */].getPageContents(this.pageId, { cmId: this.cmId });
                    const promises = [];
                    this.wikiId = pageContents.wikiid;
                    // Invalidate subwiki pages since there are new.
                    promises.push(wiki["a" /* AddonModWiki */].invalidateSubwikiPages(this.wikiId));
                    if (!this.subwikiId) {
                        // Subwiki was not created, invalidate subwikis as well.
                        promises.push(wiki["a" /* AddonModWiki */].invalidateSubwikis(this.wikiId));
                    }
                    this.subwikiId = pageContents.subwikiid;
                    this.userId = pageContents.userid;
                    this.groupId = pageContents.groupid;
                    yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                    // Notify page created.
                    events["b" /* CoreEvents */].trigger(wiki["b" /* AddonModWikiProvider */].PAGE_CREATED_EVENT, {
                        pageId: this.pageId,
                        subwikiId: this.subwikiId,
                        pageTitle: title,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    this.goToPage(title);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error saving wiki data.');
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Renew lock and control versions.
         */
        renewLock() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const response = yield wiki["a" /* AddonModWiki */].getPageForEditing(this.pageId, this.section, true);
                if (response.version && this.version != response.version) {
                    this.wrongVersionLock = true;
                }
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.isDestroyed = true;
            clearInterval(this.renewLockInterval);
            // Unblock the subwiki.
            if (this.blockId) {
                sync["a" /* CoreSync */].unblockOperation(this.component, this.blockId);
            }
        }
    }
    AddonModWikiEditPage.ɵfac = function AddonModWikiEditPage_Factory(t) { return new (t || AddonModWikiEditPage)(core["yc" /* ɵɵdirectiveInject */](fesm2015_forms["f" /* FormBuilder */])); };
    AddonModWikiEditPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModWikiEditPage, selectors: [["page-addon-mod-wiki-edit"]], viewQuery: function AddonModWikiEditPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 14, vars: 11, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "click"], [3, "hideUntil"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["editPageForm", ""], ["class", "ion-text-wrap", 4, "ngIf"], [1, "sr-only"], ["name", "wiki_page_content", "contextLevel", "module", "elementId", "newcontent_editor", 3, "control", "placeholder", "component", "componentId", "autoSave", "contextInstanceId", "draftExtraParams"], ["class", "ion-text-center addon-mod_wiki-wrongversionlock", 4, "ngIf"], [1, "ion-text-wrap"], ["name", "title", "type", "text", "formControlName", "title", 3, "placeholder"], [1, "ion-text-center", "addon-mod_wiki-wrongversionlock"], ["color", "danger", 1, "ion-padding"]], template: function AddonModWikiEditPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function AddonModWikiEditPage_Template_ion_button_click_8_listener() { return ctx.save(); });
                core["pd" /* ɵɵtext */](9);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "ion-content");
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](13, AddonModWikiEditPage_form_13_Template, 10, 15, "form", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.cmId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 9, "core.save"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["k" /* IonButton */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["i" /* FormControlName */], ionic_angular["j" /* IonBadge */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModWikiEditPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/wiki/wiki-lazy.module.ts
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
        path: ':courseId/:cmId/page/:hash',
        component: index["a" /* AddonModWikiIndexPage */],
    },
    {
        path: ':courseId/:cmId/edit',
        component: edit_AddonModWikiEditPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let wiki_lazy_module_AddonModWikiLazyModule = /*@__PURE__*/ (() => {
    class AddonModWikiLazyModule {
    }
    AddonModWikiLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModWikiLazyModule });
    AddonModWikiLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModWikiLazyModule_Factory(t) { return new (t || AddonModWikiLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModWikiComponentsModule */],
                components_components_module["a" /* CoreEditorComponentsModule */],
            ]] });
    return AddonModWikiLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](wiki_lazy_module_AddonModWikiLazyModule, { declarations: [index["a" /* AddonModWikiIndexPage */],
            edit_AddonModWikiEditPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModWikiComponentsModule */],
            components_components_module["a" /* CoreEditorComponentsModule */]] });
})();


/***/ })

}]);