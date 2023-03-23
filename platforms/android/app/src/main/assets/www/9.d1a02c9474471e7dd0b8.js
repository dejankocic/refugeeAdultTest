(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "R7Ak":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPageModule", function() { return /* binding */ index_module_AddonPrivateFilesIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/ts-md5/dist/md5.js
var md5 = __webpack_require__("kScs");

// EXTERNAL MODULE: ./src/core/services/app.ts + 2 modules
var app = __webpack_require__("nvXB");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/privatefiles/services/privatefiles.ts
var privatefiles = __webpack_require__("tP62");

// EXTERNAL MODULE: ./src/addons/privatefiles/services/privatefiles-helper.ts
var privatefiles_helper = __webpack_require__("S7NA");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/combobox/combobox.ts
var combobox = __webpack_require__("rf3J");

// EXTERNAL MODULE: ./src/core/components/file/file.ts
var file = __webpack_require__("5450");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/privatefiles/pages/index/index.ts

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






















function AddonPrivateFilesIndexPage_core_loading_11_core_combobox_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-combobox", 11);
        core["Mc" /* ɵɵlistener */]("onChange", function AddonPrivateFilesIndexPage_core_loading_11_core_combobox_1_Template_core_combobox_onChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r7); const ctx_r6 = core["Oc" /* ɵɵnextContext */](2); return ctx_r6.rootChanged($event); });
        core["Ec" /* ɵɵelementStart */](1, "ion-select-option", 12);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select-option", 13);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("selection", ctx_r2.root);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 3, "addon.privatefiles.privatefiles"), " ");
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](6, 5, "addon.privatefiles.sitefiles"), " ");
    }
}
const _c0 = function (a0, a1) { return { used: a0, total: a1 }; };
const _c1 = function (a0) { return { $a: a0 }; };
function AddonPrivateFilesIndexPage_core_loading_11_ion_card_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 14);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](4, 1, "core.quotausage", core["ad" /* ɵɵpureFunction1 */](7, _c1, core["bd" /* ɵɵpureFunction2 */](4, _c0, ctx_r3.spaceUsed, ctx_r3.userQuotaReadable))), " ");
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 18);
        core["Mc" /* ɵɵlistener */]("click", function AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r14); const file_r9 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r12 = core["Oc" /* ɵɵnextContext */](3); return ctx_r12.openFolder(file_r9); });
        core["Ec" /* ɵɵelementStart */](1, "ion-thumbnail", 0);
        core["zc" /* ɵɵelement */](2, "img", 19);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const file_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("src", file_r9.imgPath, core["jd" /* ɵɵsanitizeUrl */]);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](file_r9.filename);
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_core_file_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-file", 20);
    }
    if (rf & 2) {
        const file_r9 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("file", file_r9)("component", ctx_r11.component)("componentId", file_r9.contextid);
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_ion_item_1_Template, 5, 2, "ion-item", 16);
        core["nd" /* ɵɵtemplate */](2, AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_core_file_2_Template, 1, 3, "core-file", 17);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const file_r9 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", file_r9.isdir);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !file_r9.isdir);
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["nd" /* ɵɵtemplate */](1, AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_ng_container_1_Template, 3, 2, "ng-container", 15);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.files);
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_core_empty_box_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 21);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.privatefiles.emptyfilelist"));
    }
}
function AddonPrivateFilesIndexPage_core_loading_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-loading", 6);
        core["nd" /* ɵɵtemplate */](1, AddonPrivateFilesIndexPage_core_loading_11_core_combobox_1_Template, 7, 7, "core-combobox", 7);
        core["nd" /* ɵɵtemplate */](2, AddonPrivateFilesIndexPage_core_loading_11_ion_card_2_Template, 5, 9, "ion-card", 8);
        core["nd" /* ɵɵtemplate */](3, AddonPrivateFilesIndexPage_core_loading_11_ion_list_3_Template, 2, 1, "ion-list", 9);
        core["nd" /* ɵɵtemplate */](4, AddonPrivateFilesIndexPage_core_loading_11_core_empty_box_4_Template, 2, 3, "core-empty-box", 10);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("hideUntil", ctx_r0.filesLoaded);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.showPrivateFiles && ctx_r0.showSiteFiles && !ctx_r0.path);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.userQuota && ctx_r0.filesInfo && ctx_r0.filesInfo.filecount > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.files && ctx_r0.files.length > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.files || !ctx_r0.files.length);
    }
}
function AddonPrivateFilesIndexPage_ion_fab_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 22);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 23);
        core["Mc" /* ɵɵlistener */]("click", function AddonPrivateFilesIndexPage_ion_fab_12_Template_ion_fab_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r17 = core["Oc" /* ɵɵnextContext */](); return ctx_r17.uploadFile(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 24);
        core["Ec" /* ɵɵelementStart */](4, "span", 25);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.fileuploader.uploadafile"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 4, "core.fileuploader.uploadafile"));
    }
}
/**
 * Page that displays the list of files.
 */
let index_AddonPrivateFilesIndexPage = /*@__PURE__*/ (() => {
    class AddonPrivateFilesIndexPage {
        constructor() {
            this.filesLoaded = false; // Whether the files are loaded.
            // Update visibility if current site info is updated.
            this.updateSiteObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, () => {
                this.setVisibility();
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            var _a, _b, _c;
            this.root = services_navigator["a" /* CoreNavigator */].getRouteParam('root');
            const contextId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('contextid');
            if (contextId) {
                // Loading a certain folder.
                this.path = {
                    contextid: contextId,
                    component: services_navigator["a" /* CoreNavigator */].getRouteParam('component'),
                    filearea: services_navigator["a" /* CoreNavigator */].getRouteParam('filearea'),
                    itemid: services_navigator["a" /* CoreNavigator */].getRouteNumberParam('itemid'),
                    filepath: services_navigator["a" /* CoreNavigator */].getRouteParam('filepath'),
                    filename: services_navigator["a" /* CoreNavigator */].getRouteParam('filename'),
                };
            }
            this.title = ((_a = this.path) === null || _a === void 0 ? void 0 : _a.filename) || singletons["L" /* Translate */].instant('addon.privatefiles.files');
            this.setVisibility();
            this.userQuota = (_c = (_b = sites["b" /* CoreSites */].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getInfo()) === null || _c === void 0 ? void 0 : _c.userquota;
            if (!this.root) {
                // Load private files by default.
                if (this.showPrivateFiles) {
                    this.root = 'my';
                }
                else if (this.showSiteFiles) {
                    this.root = 'site';
                }
            }
            if (this.root) {
                this.rootChanged(this.root);
            }
            else {
                this.filesLoaded = true;
            }
        }
        /**
         * Set visibility of some items based on site data.
         */
        setVisibility() {
            this.showPrivateFiles = privatefiles["a" /* AddonPrivateFiles */].canViewPrivateFiles();
            this.showSiteFiles = privatefiles["a" /* AddonPrivateFiles */].canViewSiteFiles();
            this.showUpload = privatefiles["a" /* AddonPrivateFiles */].canUploadFiles();
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshData(event) {
            this.refreshFiles().finally(() => {
                event === null || event === void 0 ? void 0 : event.complete();
            });
        }
        /**
         * Function called when the root has changed.
         *
         * @param root New root.
         */
        rootChanged(root) {
            this.root = root;
            this.filesLoaded = false;
            this.component = this.root == 'my' ? privatefiles["b" /* AddonPrivateFilesProvider */].PRIVATE_FILES_COMPONENT :
                privatefiles["b" /* AddonPrivateFilesProvider */].SITE_FILES_COMPONENT;
            this.fetchFiles().finally(() => {
                this.filesLoaded = true;
            });
        }
        /**
         * Upload a new file.
         */
        uploadFile() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const canUpload = yield privatefiles["a" /* AddonPrivateFiles */].versionCanUploadFiles();
                if (!canUpload) {
                    dom["a" /* CoreDomUtils */].showAlertTranslated('core.notice', 'addon.privatefiles.erroruploadnotworking');
                    return;
                }
                if (!app["a" /* CoreApp */].isOnline()) {
                    dom["a" /* CoreDomUtils */].showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);
                    return;
                }
                try {
                    yield privatefiles_helper["a" /* AddonPrivateFilesHelper */].uploadPrivateFile(this.filesInfo);
                    // File uploaded, refresh the list.
                    this.filesLoaded = false;
                    yield utils["a" /* CoreUtils */].ignoreErrors(this.refreshFiles());
                    this.filesLoaded = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
                }
            });
        }
        /**
         * Fetch the files.
         *
         * @return Promise resolved when done.
         */
        fetchFiles() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    if (this.path) {
                        // Path is set, serve the files the user requested.
                        this.files = yield privatefiles["a" /* AddonPrivateFiles */].getFiles(this.path);
                        return;
                    }
                    // The path is unknown, the user must be requesting a root.
                    if (this.root == 'site') {
                        this.title = singletons["L" /* Translate */].instant('addon.privatefiles.sitefiles');
                        this.files = yield privatefiles["a" /* AddonPrivateFiles */].getSiteFiles();
                    }
                    else if (this.root == 'my') {
                        this.title = singletons["L" /* Translate */].instant('addon.privatefiles.files');
                        this.files = yield privatefiles["a" /* AddonPrivateFiles */].getPrivateFiles();
                        if (this.showUpload && privatefiles["a" /* AddonPrivateFiles */].canGetPrivateFilesInfo() && this.userQuota &&
                            this.userQuota > 0) {
                            // Get the info to calculate the available size.
                            this.filesInfo = yield privatefiles["a" /* AddonPrivateFiles */].getPrivateFilesInfo();
                            this.spaceUsed = utils_text["a" /* CoreTextUtils */].bytesToSize(this.filesInfo.filesizewithoutreferences, 1);
                            this.userQuotaReadable = utils_text["a" /* CoreTextUtils */].bytesToSize(this.userQuota, 1);
                        }
                        else {
                            // User quota isn't useful, delete it.
                            delete this.userQuota;
                        }
                    }
                    else {
                        // Unknown root.
                        dom["a" /* CoreDomUtils */].showErrorModal('addon.privatefiles.couldnotloadfiles', true);
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.privatefiles.couldnotloadfiles', true);
                }
            });
        }
        /**
         * Refresh the displayed files.
         *
         * @return Promise resolved when done.
         */
        refreshFiles() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield Promise.all([
                        privatefiles["a" /* AddonPrivateFiles */].invalidateDirectory(this.root, this.path),
                        privatefiles["a" /* AddonPrivateFiles */].invalidatePrivateFilesInfoForUser(),
                    ]);
                }
                finally {
                    yield this.fetchFiles();
                }
            });
        }
        /**
         * Open a folder.
         *
         * @param folder Folder to open.
         */
        openFolder(folder) {
            const params = {
                contextid: folder.contextid,
                component: folder.component || '',
                filearea: folder.filearea || '',
                itemid: folder.itemid || 0,
                filepath: folder.filepath || '',
                filename: folder.filename || '',
            };
            if (folder.component) {
                // Delete unused elements that may break the request.
                params.filename = '';
            }
            const hash = md5["Md5"].hashAsciiStr(JSON.stringify(params));
            services_navigator["a" /* CoreNavigator */].navigate(`../${hash}`, { params });
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    AddonPrivateFilesIndexPage.ɵfac = function AddonPrivateFilesIndexPage_Factory(t) { return new (t || AddonPrivateFilesIndexPage)(); };
    AddonPrivateFilesIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonPrivateFilesIndexPage, selectors: [["page-addon-privatefiles-index"]], decls: 13, vars: 10, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil", 4, "ngIf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], [3, "hideUntil"], [3, "selection", "onChange", 4, "ngIf"], ["class", "core-info-card", 4, "ngIf"], [4, "ngIf"], ["icon", "far-folder-open", 3, "message", 4, "ngIf"], [3, "selection", "onChange"], ["value", "my", 1, "ion-text-wrap"], ["value", "site", 1, "ion-text-wrap"], [1, "core-info-card"], [4, "ngFor", "ngForOf"], ["button", "", "class", "item-file", "detail", "true", 3, "click", 4, "ngIf"], [3, "file", "component", "componentId", 4, "ngIf"], ["button", "", "detail", "true", 1, "item-file", 3, "click"], ["alt", "", "role", "presentation", 3, "src"], [3, "file", "component", "componentId"], ["icon", "far-folder-open", 3, "message"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "fas-plus", "aria-hidden", "true"], [1, "sr-only"]], template: function AddonPrivateFilesIndexPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["pd" /* ɵɵtext */](6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonPrivateFilesIndexPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshData($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](11, AddonPrivateFilesIndexPage_core_loading_11_Template, 5, 5, "core-loading", 4);
                core["nd" /* ɵɵtemplate */](12, AddonPrivateFilesIndexPage_ion_fab_12_Template, 7, 6, "ion-fab", 5);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](ctx.title);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.filesLoaded || !ctx.showPrivateFiles && !ctx.showSiteFiles);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showPrivateFiles || ctx.showSiteFiles);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showUpload && ctx.root != "site" && !ctx.path);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], common["t" /* NgIf */], loading["a" /* CoreLoadingComponent */], combobox["a" /* CoreComboboxComponent */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], ionic_angular["wb" /* IonThumbnail */], file["a" /* CoreFileComponent */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonPrivateFilesIndexPage;
})();

// CONCATENATED MODULE: ./src/addons/privatefiles/pages/index/index.module.ts
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
        component: index_AddonPrivateFilesIndexPage,
    },
];
let index_module_AddonPrivateFilesIndexPageModule = /*@__PURE__*/ (() => {
    class AddonPrivateFilesIndexPageModule {
    }
    AddonPrivateFilesIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonPrivateFilesIndexPageModule });
    AddonPrivateFilesIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonPrivateFilesIndexPageModule_Factory(t) { return new (t || AddonPrivateFilesIndexPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonPrivateFilesIndexPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_module_AddonPrivateFilesIndexPageModule, { declarations: [index_AddonPrivateFilesIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);