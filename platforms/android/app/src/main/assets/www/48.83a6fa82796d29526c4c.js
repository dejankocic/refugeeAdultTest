(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "vNWJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModDataLazyModule", function() { return /* binding */ data_lazy_module_AddonModDataLazyModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/features/comments/components/components.module.ts
var components_module = __webpack_require__("rGK3");

// EXTERNAL MODULE: ./src/core/features/compile/components/compile-html/compile-html.module.ts
var compile_html_module = __webpack_require__("WsvK");

// EXTERNAL MODULE: ./src/core/features/rating/components/components.module.ts
var components_components_module = __webpack_require__("JCPi");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./src/addons/mod/data/components/components-compile.module.ts + 2 modules
var components_compile_module = __webpack_require__("ay5P");

// EXTERNAL MODULE: ./src/addons/mod/data/components/components.module.ts
var data_components_components_module = __webpack_require__("KarO");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader.ts
var fileuploader = __webpack_require__("hSQQ");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag.ts
var tag = __webpack_require__("kWmn");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/data/services/data.ts
var services_data = __webpack_require__("39eS");

// EXTERNAL MODULE: ./src/addons/mod/data/services/data-helper.ts
var data_helper = __webpack_require__("kTL9");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/style/style.ts
var style = __webpack_require__("QQhE");

// EXTERNAL MODULE: ./src/core/features/compile/components/compile-html/compile-html.ts
var compile_html = __webpack_require__("eiAi");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/data/pages/edit/edit.ts

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


























const _c0 = ["editFormEl"];
function AddonModDataEditPage_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 8);
        core["Mc" /* ɵɵlistener */]("click", function AddonModDataEditPage_ion_button_8_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r4); const ctx_r3 = core["Oc" /* ɵɵnextContext */](); return ctx_r3.save($event); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.save"), " ");
    }
}
function AddonModDataEditPage_ion_item_11_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsvisible"));
    }
}
function AddonModDataEditPage_ion_item_11_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsseparate"));
    }
}
function AddonModDataEditPage_ion_item_11_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 14);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r8 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r8.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r8.name, " ");
    }
}
const _c1 = function (a0) { return { header: a0 }; };
function AddonModDataEditPage_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 10);
        core["nd" /* ɵɵtemplate */](2, AddonModDataEditPage_ion_item_11_ng_container_2_Template, 3, 3, "ng-container", 11);
        core["nd" /* ɵɵtemplate */](3, AddonModDataEditPage_ion_item_11_ng_container_3_Template, 3, 3, "ng-container", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 12);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModDataEditPage_ion_item_11_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.selectedGroup = $event; })("ionChange", function AddonModDataEditPage_ion_item_11_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.setGroup(ctx_r11.selectedGroup); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModDataEditPage_ion_item_11_ion_select_option_6_Template, 2, 2, "ion-select-option", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.separateGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.visibleGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.selectedGroup)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, _c1, core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.groupInfo.groups);
    }
}
function AddonModDataEditPage_div_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["zc" /* ɵɵelement */](1, "core-style", 15);
        core["Ec" /* ɵɵelementStart */](2, "form", 16, 17);
        core["Mc" /* ɵɵlistener */]("ngSubmit", function AddonModDataEditPage_div_12_Template_form_ngSubmit_2_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.save($event); });
        core["zc" /* ɵɵelement */](4, "core-compile-html", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["oc" /* ɵɵclassMapInterpolate1 */]("addon-data-contents ", ctx_r2.cssClass, "");
        core["lc" /* ɵɵadvance */](1);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("prefix", ".", ctx_r2.cssClass, "");
        core["Vc" /* ɵɵproperty */]("css", ctx_r2.database.csstemplate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("formGroup", ctx_r2.editForm);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.editFormRender)("jsData", ctx_r2.jsData)("extraImports", ctx_r2.extraImports);
    }
}
/**
 * Page that displays the view edit page.
 */
let edit_AddonModDataEditPage = /*@__PURE__*/ (() => {
    class AddonModDataEditPage {
        constructor() {
            this.fieldsArray = [];
            this.offline = false;
            this.forceLeave = false; // To allow leaving the page without checking for changes.
            this.isEditing = false;
            this.fields = {};
            this.title = '';
            this.component = services_data["c" /* AddonModDataProvider */].COMPONENT;
            this.loaded = false;
            this.selectedGroup = 0;
            this.cssClass = '';
            this.editFormRender = '';
            this.extraImports = [components_compile_module["a" /* AddonModDataComponentsCompileModule */]];
            this.errors = {};
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            this.editForm = new fesm2015_forms["j" /* FormGroup */]({});
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
            this.entryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('entryId') || undefined;
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
            // If entryId is lower than 0 or null, it is a new entry or an offline entry.
            this.isEditing = typeof this.entryId != 'undefined' && this.entryId > 0;
            this.title = this.module.name;
            this.fetchEntryData(true);
        }
        /**
         * Check if we can leave the page or not and ask to confirm the lost of data.
         *
         * @return True if we can leave, false otherwise.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave || !this.entry) {
                    return true;
                }
                const inputData = this.editForm.value;
                let changed = data_helper["a" /* AddonModDataHelper */].hasEditDataChanged(inputData, this.fieldsArray, this.entry.contents);
                changed = changed || (!this.isEditing && this.initialSelectedGroup != this.selectedGroup);
                if (changed) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('coentryre.confirmcanceledit'));
                }
                // Delete the local files from the tmp folder.
                const files = yield data_helper["a" /* AddonModDataHelper */].getEditTmpFiles(inputData, this.fieldsArray, this.entry.contents);
                fileuploader["a" /* CoreFileUploader */].clearTmpFiles(files);
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, this.siteId);
                return true;
            });
        }
        /**
         * Fetch the entry data.
         *
         * @param refresh To refresh all downloaded data.
         * @return Resolved when done.
         */
        fetchEntryData(refresh = false) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.database = yield services_data["a" /* AddonModData */].getDatabase(this.courseId, this.module.id);
                    this.title = this.database.name || this.title;
                    this.cssClass = 'addon-data-entries-' + this.database.id;
                    this.fieldsArray = yield services_data["a" /* AddonModData */].getFields(this.database.id, { cmId: this.module.id });
                    this.fields = utils["a" /* CoreUtils */].arrayToObject(this.fieldsArray, 'id');
                    const entry = yield data_helper["a" /* AddonModDataHelper */].fetchEntry(this.database, this.fieldsArray, this.entryId || 0);
                    this.entry = entry.entry;
                    // Load correct group.
                    this.selectedGroup = this.entry.groupid;
                    // Check permissions when adding a new entry or offline entry.
                    if (!this.isEditing) {
                        let haveAccess = false;
                        if (refresh) {
                            this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.database.coursemodule);
                            this.selectedGroup = groups["a" /* CoreGroups */].validateGroupId(this.selectedGroup, this.groupInfo);
                            this.initialSelectedGroup = this.selectedGroup;
                        }
                        if (((_a = this.groupInfo) === null || _a === void 0 ? void 0 : _a.groups) && this.groupInfo.groups.length > 0) {
                            if (refresh) {
                                const canAddGroup = {};
                                yield Promise.all(this.groupInfo.groups.map((group) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                                    const accessData = yield services_data["a" /* AddonModData */].getDatabaseAccessInformation(this.database.id, {
                                        cmId: this.module.id, groupId: group.id
                                    });
                                    canAddGroup[group.id] = accessData.canaddentry;
                                })));
                                this.groupInfo.groups = this.groupInfo.groups.filter((group) => !!canAddGroup[group.id]);
                                haveAccess = canAddGroup[this.selectedGroup];
                            }
                            else {
                                // Groups already filtered, so it have access.
                                haveAccess = true;
                            }
                        }
                        else {
                            const accessData = yield services_data["a" /* AddonModData */].getDatabaseAccessInformation(this.database.id, { cmId: this.module.id });
                            haveAccess = accessData.canaddentry;
                        }
                        if (!haveAccess) {
                            // You shall not pass, go back.
                            dom["a" /* CoreDomUtils */].showErrorModal('addon.mod_data.noaccess', true);
                            // Go back to entry list.
                            this.forceLeave = true;
                            services_navigator["a" /* CoreNavigator */].back();
                            return;
                        }
                    }
                    this.editFormRender = this.displayEditFields();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                }
                this.loaded = true;
            });
        }
        /**
         * Saves data.
         *
         * @param e Event.
         * @return Resolved when done.
         */
        save(e) {
            var _a, _b, _c;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                const inputData = this.editForm.value;
                try {
                    let changed = data_helper["a" /* AddonModDataHelper */].hasEditDataChanged(inputData, this.fieldsArray, ((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {});
                    changed = changed || (!this.isEditing && this.initialSelectedGroup != this.selectedGroup);
                    if (!changed) {
                        if (this.entryId) {
                            yield this.returnToEntryList();
                            return;
                        }
                        // New entry, no changes means no field filled, warn the user.
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_data.emptyaddform'));
                    }
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    // Create an ID to assign files.
                    const entryTemp = this.entryId ? this.entryId : -(new Date().getTime());
                    let editData = [];
                    try {
                        try {
                            editData = yield data_helper["a" /* AddonModDataHelper */].getEditDataFromForm(inputData, this.fieldsArray, this.database.id, entryTemp, ((_b = this.entry) === null || _b === void 0 ? void 0 : _b.contents) || {}, this.offline);
                        }
                        catch (error) {
                            if (this.offline) {
                                throw error;
                            }
                            // Cannot submit in online, prepare for offline usage.
                            this.offline = true;
                            editData = yield data_helper["a" /* AddonModDataHelper */].getEditDataFromForm(inputData, this.fieldsArray, this.database.id, entryTemp, ((_c = this.entry) === null || _c === void 0 ? void 0 : _c.contents) || {}, this.offline);
                        }
                        if (editData.length <= 0) {
                            // No field filled, warn the user.
                            throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_data.emptyaddform'));
                        }
                        let updateEntryResult;
                        if (this.isEditing) {
                            updateEntryResult = yield services_data["a" /* AddonModData */].editEntry(this.database.id, this.entryId, this.courseId, editData, this.fieldsArray, this.siteId, this.offline);
                        }
                        else {
                            updateEntryResult = yield services_data["a" /* AddonModData */].addEntry(this.database.id, entryTemp, this.courseId, editData, this.selectedGroup, this.fieldsArray, this.siteId, this.offline);
                        }
                        // This is done if entry is updated when editing or creating if not.
                        if ((this.isEditing && 'updated' in updateEntryResult && updateEntryResult.updated) ||
                            (!this.isEditing && 'newentryid' in updateEntryResult && updateEntryResult.newentryid)) {
                            singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, updateEntryResult.sent, this.siteId);
                            const promises = [];
                            if (updateEntryResult.sent) {
                                events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'data' });
                                if (this.isEditing) {
                                    promises.push(services_data["a" /* AddonModData */].invalidateEntryData(this.database.id, this.entryId, this.siteId));
                                }
                                promises.push(services_data["a" /* AddonModData */].invalidateEntriesData(this.database.id, this.siteId));
                            }
                            try {
                                yield Promise.all(promises);
                                events["b" /* CoreEvents */].trigger(services_data["c" /* AddonModDataProvider */].ENTRY_CHANGED, { dataId: this.database.id, entryId: this.entryId }, this.siteId);
                            }
                            finally {
                                this.returnToEntryList();
                            }
                        }
                        else {
                            this.errors = {};
                            if (updateEntryResult.fieldnotifications) {
                                updateEntryResult.fieldnotifications.forEach((fieldNotif) => {
                                    const field = this.fieldsArray.find((field) => field.name == fieldNotif.fieldname);
                                    if (field) {
                                        this.errors[field.id] = fieldNotif.notification;
                                    }
                                });
                            }
                            this.jsData.errors = this.errors;
                            setTimeout(() => {
                                this.scrollToFirstError();
                            });
                        }
                    }
                    finally {
                        modal.dismiss();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Cannot edit entry', true);
                }
            });
        }
        /**
         * Set group to see the database.
         *
         * @param groupId Group identifier to set.
         * @return Resolved when done.
         */
        setGroup(groupId) {
            this.selectedGroup = groupId;
            this.loaded = false;
            return this.fetchEntryData();
        }
        /**
         * Displays Edit Search Fields.
         *
         * @return Generated HTML.
         */
        displayEditFields() {
            var _a;
            this.jsData = {
                fields: this.fields,
                contents: utils["a" /* CoreUtils */].clone((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {},
                form: this.editForm,
                database: this.database,
                errors: this.errors,
            };
            let template = data_helper["a" /* AddonModDataHelper */].getTemplate(this.database, services_data["e" /* AddonModDataTemplateType */].ADD, this.fieldsArray);
            // Replace the fields found on template.
            this.fieldsArray.forEach((field) => {
                let replace = '[[' + field.name + ']]';
                replace = replace.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
                let replaceRegEx = new RegExp(replace, 'gi');
                // Replace field by a generic directive.
                const render = '<addon-mod-data-field-plugin [class.has-errors]="!!errors[' + field.id + ']" mode="edit" \
                [field]="fields[' + field.id + ']" [value]="contents[' + field.id + ']" [form]="form" [database]="database" \
                [error]="errors[' + field.id + ']"></addon-mod-data-field-plugin>';
                template = template.replace(replaceRegEx, render);
                // Replace the field id tag.
                replace = '[[' + field.name + '#id]]';
                replace = replace.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
                replaceRegEx = new RegExp(replace, 'gi');
                template = template.replace(replaceRegEx, 'field_' + field.id);
            });
            // Editing tags is not supported.
            const replaceRegEx = new RegExp('##tags##', 'gi');
            const message = tag["a" /* CoreTag */].areTagsAvailableInSite()
                ? '<p class="item-dimmed">{{ \'addon.mod_data.edittagsnotsupported\' | translate }}</p>'
                : '';
            template = template.replace(replaceRegEx, message);
            return template;
        }
        /**
         * Return to the entry list (previous page) discarding temp data.
         *
         * @return Resolved when done.
         */
        returnToEntryList() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const inputData = this.editForm.value;
                try {
                    const files = yield data_helper["a" /* AddonModDataHelper */].getEditTmpFiles(inputData, this.fieldsArray, ((_a = this.entry) === null || _a === void 0 ? void 0 : _a.contents) || {});
                    fileuploader["a" /* CoreFileUploader */].clearTmpFiles(files);
                }
                finally {
                    // Go back to entry list.
                    this.forceLeave = true;
                    services_navigator["a" /* CoreNavigator */].back();
                }
            });
        }
        /**
         * Scroll to first error or to the top if not found.
         */
        scrollToFirstError() {
            var _a;
            if (!dom["a" /* CoreDomUtils */].scrollToElementBySelector(this.formElement.nativeElement, this.content, '.addon-data-error')) {
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
            }
        }
    }
    AddonModDataEditPage.ɵfac = function AddonModDataEditPage_Factory(t) { return new (t || AddonModDataEditPage)(); };
    AddonModDataEditPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModDataEditPage, selectors: [["page-addon-mod-data-edit"]], viewQuery: function AddonModDataEditPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 13, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "click", 4, "ngIf"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "class", 4, "ngIf"], ["fill", "clear", 3, "click"], [1, "ion-text-wrap"], ["id", "addon-data-groupslabel"], [4, "ngIf"], ["aria-labelledby", "addon-data-groupslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "css", "prefix"], [3, "formGroup", "ngSubmit"], ["editFormEl", ""], [3, "text", "jsData", "extraImports"]], template: function AddonModDataEditPage_Template(rf, ctx) {
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
                core["nd" /* ɵɵtemplate */](8, AddonModDataEditPage_ion_button_8_Template, 3, 3, "ion-button", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonModDataEditPage_ion_item_11_Template, 7, 9, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](12, AddonModDataEditPage_div_12_Template, 5, 9, "div", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.entry);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo && (ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.database);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["k" /* IonButton */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], style["a" /* CoreStyleComponent */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["k" /* FormGroupDirective */], compile_html["a" /* CoreCompileHtmlComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]{--border-color:var(--gray)}.addon-data-contents[_ngcontent-%COMP%]{overflow:visible;white-space:normal;word-break:break-word;padding:16px;background-color:var(--ion-item-background);border-bottom:1px solid var(--border-color)}.addon-data-contents[_ngcontent-%COMP%]     table, .addon-data-contents[_ngcontent-%COMP%]     tbody{display:block}.addon-data-contents[_ngcontent-%COMP%]     tr{display:flex;flex-wrap:wrap;padding:0}@media (max-width:575.98px){.addon-data-contents[_ngcontent-%COMP%]     tr{flex-direction:column}}.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:auto}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}@media (min-width:576px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}@media (min-width:768px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}@media (min-width:992px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}@media (min-width:1200px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}.addon-data-contents[_ngcontent-%COMP%]     address, .addon-data-contents[_ngcontent-%COMP%]     article, .addon-data-contents[_ngcontent-%COMP%]     aside, .addon-data-contents[_ngcontent-%COMP%]     blockquote, .addon-data-contents[_ngcontent-%COMP%]     canvas, .addon-data-contents[_ngcontent-%COMP%]     dd, .addon-data-contents[_ngcontent-%COMP%]     div, .addon-data-contents[_ngcontent-%COMP%]     dl, .addon-data-contents[_ngcontent-%COMP%]     dt, .addon-data-contents[_ngcontent-%COMP%]     fieldset, .addon-data-contents[_ngcontent-%COMP%]     figcaption, .addon-data-contents[_ngcontent-%COMP%]     figure, .addon-data-contents[_ngcontent-%COMP%]     footer, .addon-data-contents[_ngcontent-%COMP%]     form, .addon-data-contents[_ngcontent-%COMP%]     h1, .addon-data-contents[_ngcontent-%COMP%]     h2, .addon-data-contents[_ngcontent-%COMP%]     h3, .addon-data-contents[_ngcontent-%COMP%]     h4, .addon-data-contents[_ngcontent-%COMP%]     h5, .addon-data-contents[_ngcontent-%COMP%]     h6, .addon-data-contents[_ngcontent-%COMP%]     header, .addon-data-contents[_ngcontent-%COMP%]     hr, .addon-data-contents[_ngcontent-%COMP%]     li, .addon-data-contents[_ngcontent-%COMP%]     main, .addon-data-contents[_ngcontent-%COMP%]     nav, .addon-data-contents[_ngcontent-%COMP%]     noscript, .addon-data-contents[_ngcontent-%COMP%]     ol, .addon-data-contents[_ngcontent-%COMP%]     p, .addon-data-contents[_ngcontent-%COMP%]     pre, .addon-data-contents[_ngcontent-%COMP%]     section, .addon-data-contents[_ngcontent-%COMP%]     table, .addon-data-contents[_ngcontent-%COMP%]     tfoot, .addon-data-contents[_ngcontent-%COMP%]     ul, .addon-data-contents[_ngcontent-%COMP%]     video{width:auto!important;height:auto!important;min-width:auto!important;min-height:auto!important;max-height:none!important}", "[_nghost-%COMP%]{--input-border-color:var(--gray);--input-border-width:1px;--select-border-width:0}[_nghost-%COMP%]     table{width:100%}[_nghost-%COMP%]     td{vertical-align:top}[_nghost-%COMP%]     .addon-data-latlong{display:flex}[_nghost-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]{padding:16px;width:100%}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]{background-color:var(--ion-item-background)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input{border-bottom:var(--input-border-width) solid var(--input-border-color)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.has-focus, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.has-focus.ion-valid, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.ion-touched.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.has-focus, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.has-focus.ion-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.ion-touched.ion-invalid{--input-border-width:2px}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.has-focus, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.has-focus{--input-border-color:var(--ion-color-primary)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.has-focus.ion-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.has-focus.ion-valid{--input-border-color:var(--success)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-input.ion-touched.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-input.ion-touched.ion-invalid{--input-border-color:var(--danger)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     core-rich-text-editor, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     core-rich-text-editor{border-bottom:var(--select-border-width) solid var(--input-border-color)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-invalid, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-valid{--select-border-width:2px}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-valid{--input-border-color:var(--success)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     core-rich-text-editor.ion-touched.ng-invalid{--input-border-color:var(--danger)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-select, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-select{border-bottom:var(--select-border-width) solid var(--input-border-color)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-select.ion-touched.ion-invalid, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-select.ion-touched.ion-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-select.ion-touched.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-select.ion-touched.ion-valid{--select-border-width:2px}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-select.ion-touched.ion-valid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-select.ion-touched.ion-valid{--input-border-color:var(--success)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     ion-select.ion-touched.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     ion-select.ion-touched.ion-invalid{--input-border-color:var(--danger)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .has-errors ion-input.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .has-errors ion-input.ion-invalid{--input-border-width:2px;--input-border-color:var(--danger)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .has-errors core-rich-text-editor.ng-invalid, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .has-errors ion-select.ion-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .has-errors core-rich-text-editor.ng-invalid, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .has-errors ion-select.ion-invalid{--select-border-width:2px;--input-border-color:var(--danger)}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required{float:right}[dir=rtl]   [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required, [dir=rtl]   [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required{float:left}[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required+ion-input, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required+ion-select, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required+ion-input, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required+ion-select{padding-right:20px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required+ion-input, [_nghost-%COMP%]   .addon-data-contents[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]     .core-mark-required+ion-select, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required+ion-input, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .addon-data-advanced-search[_ngcontent-%COMP%]     .core-mark-required+ion-select{padding-right:unset;-webkit-padding-end:20px;padding-inline-end:20px}}"] });
    return AddonModDataEditPage;
})();

// EXTERNAL MODULE: ./src/core/features/comments/components/comments/comments.ts
var comments = __webpack_require__("1Rj0");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments.ts
var services_comments = __webpack_require__("5pQw");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/addons/mod/data/services/data-sync.ts
var data_sync = __webpack_require__("vwQL");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/features/rating/components/rate/rate.ts
var rate = __webpack_require__("fY5/");

// EXTERNAL MODULE: ./src/core/features/rating/components/aggregate/aggregate.ts
var aggregate = __webpack_require__("OoUD");

// CONCATENATED MODULE: ./src/addons/mod/data/pages/entry/entry.ts

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




























const entry_c0 = function (a0) { return { $a: a0 }; };
function AddonModDataEntryPage_ion_card_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 14);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.hasdatatosync", core["ad" /* ɵɵpureFunction1 */](4, entry_c0, ctx_r0.moduleName)));
    }
}
function AddonModDataEntryPage_ion_item_13_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsvisible"));
    }
}
function AddonModDataEntryPage_ion_item_13_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsseparate"));
    }
}
function AddonModDataEntryPage_ion_item_13_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 19);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r10 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r10.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r10.name, " ");
    }
}
const entry_c1 = function (a0) { return { header: a0 }; };
function AddonModDataEntryPage_ion_item_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 15);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 16);
        core["nd" /* ɵɵtemplate */](2, AddonModDataEntryPage_ion_item_13_ng_container_2_Template, 3, 3, "ng-container", 12);
        core["nd" /* ɵɵtemplate */](3, AddonModDataEntryPage_ion_item_13_ng_container_3_Template, 3, 3, "ng-container", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 17);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModDataEntryPage_ion_item_13_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](); return ctx_r11.selectedGroup = $event; })("ionChange", function AddonModDataEntryPage_ion_item_13_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.setGroup(ctx_r13.selectedGroup); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModDataEntryPage_ion_item_13_ion_select_option_6_Template, 2, 2, "ion-select-option", 18);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.separateGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.visibleGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.selectedGroup)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, entry_c1, core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.groupInfo.groups);
    }
}
function AddonModDataEntryPage_div_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["zc" /* ɵɵelement */](1, "core-style", 20);
        core["Ec" /* ɵɵelementStart */](2, "core-compile-html", 21);
        core["Mc" /* ɵɵlistener */]("compiling", function AddonModDataEntryPage_div_14_Template_core_compile_html_compiling_2_listener($event) { core["gd" /* ɵɵrestoreView */](_r15); const ctx_r14 = core["Oc" /* ɵɵnextContext */](); return ctx_r14.setRenderingEntry($event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["oc" /* ɵɵclassMapInterpolate1 */]("addon-data-contents addon-data-entry addon-data-entries-", ctx_r2.database.id, "");
        core["lc" /* ɵɵadvance */](1);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("prefix", ".addon-data-entries-", ctx_r2.database.id, "");
        core["Vc" /* ɵɵproperty */]("css", ctx_r2.database.csstemplate);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.entryHtml)("jsData", ctx_r2.jsData)("extraImports", ctx_r2.extraImports);
    }
}
function AddonModDataEntryPage_core_rating_rate_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-rating-rate", 22);
        core["Mc" /* ɵɵlistener */]("onLoading", function AddonModDataEntryPage_core_rating_rate_15_Template_core_rating_rate_onLoading_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r16 = core["Oc" /* ɵɵnextContext */](); return ctx_r16.setLoadingRating($event); })("onUpdate", function AddonModDataEntryPage_core_rating_rate_15_Template_core_rating_rate_onUpdate_0_listener() { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r18 = core["Oc" /* ɵɵnextContext */](); return ctx_r18.ratingUpdated(); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ratingInfo", ctx_r3.ratingInfo)("instanceId", ctx_r3.database.coursemodule)("itemId", ctx_r3.entry.id)("itemSetId", 0)("courseId", ctx_r3.courseId)("aggregateMethod", ctx_r3.database.assessed)("scaleId", ctx_r3.database.scale)("userId", ctx_r3.entry.userid);
    }
}
function AddonModDataEntryPage_core_rating_aggregate_16_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-rating-aggregate", 23);
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ratingInfo", ctx_r4.ratingInfo)("instanceId", ctx_r4.database.coursemodule)("itemId", ctx_r4.entry.id)("courseId", ctx_r4.courseId)("aggregateMethod", ctx_r4.database.assessed)("scaleId", ctx_r4.database.scale);
    }
}
function AddonModDataEntryPage_core_comments_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r20 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-comments", 24);
        core["Mc" /* ɵɵlistener */]("onLoading", function AddonModDataEntryPage_core_comments_17_Template_core_comments_onLoading_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r20); const ctx_r19 = core["Oc" /* ɵɵnextContext */](); return ctx_r19.setLoadingComments($event); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("instanceId", ctx_r5.database.coursemodule)("itemId", ctx_r5.entry.id)("courseId", ctx_r5.courseId)("showItem", true);
    }
}
function AddonModDataEntryPage_ion_grid_18_ion_col_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 26);
        core["Mc" /* ɵɵlistener */]("click", function AddonModDataEntryPage_ion_grid_18_ion_col_2_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r24); const ctx_r23 = core["Oc" /* ɵɵnextContext */](2); return ctx_r23.gotoEntry(ctx_r23.offset - 1); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 27);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.previous"), " ");
    }
}
function AddonModDataEntryPage_ion_grid_18_ion_col_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 28);
        core["Mc" /* ɵɵlistener */]("click", function AddonModDataEntryPage_ion_grid_18_ion_col_3_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r26); const ctx_r25 = core["Oc" /* ɵɵnextContext */](2); return ctx_r25.gotoEntry(ctx_r25.offset + 1); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["zc" /* ɵɵelement */](4, "ion-icon", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.next"), " ");
    }
}
function AddonModDataEntryPage_ion_grid_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-grid");
        core["Ec" /* ɵɵelementStart */](1, "ion-row", 25);
        core["nd" /* ɵɵtemplate */](2, AddonModDataEntryPage_ion_grid_18_ion_col_2_Template, 5, 3, "ion-col", 12);
        core["nd" /* ɵɵtemplate */](3, AddonModDataEntryPage_ion_grid_18_ion_col_3_Template, 5, 3, "ion-col", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.hasPrevious);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.hasNext);
    }
}
/**
 * Page that displays the view entry page.
 */
let entry_AddonModDataEntryPage = /*@__PURE__*/ (() => {
    class AddonModDataEntryPage {
        constructor(cdr) {
            this.cdr = cdr;
            this.fields = {};
            this.fieldsArray = [];
            this.title = '';
            this.moduleName = 'data';
            this.component = services_data["c" /* AddonModDataProvider */].COMPONENT;
            this.entryLoaded = false;
            this.renderingEntry = false;
            this.loadingComments = false;
            this.loadingRating = false;
            this.selectedGroup = 0;
            this.hasPrevious = false;
            this.hasNext = false;
            this.showComments = false;
            this.entryHtml = '';
            this.extraImports = [components_compile_module["a" /* AddonModDataComponentsCompileModule */]];
            this.isPullingToRefresh = false; // Whether the last fetching of data was started by a pull-to-refresh action
            this.commentsEnabled = false;
            this.moduleName = course["a" /* CoreCourse */].translateModuleName('data');
            this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(data_sync["b" /* AddonModDataSyncProvider */].AUTO_SYNCED, (data) => {
                var _a;
                if (typeof data.entryId == 'undefined') {
                    return;
                }
                if ((data.entryId == this.entryId || data.offlineEntryId == this.entryId) && ((_a = this.database) === null || _a === void 0 ? void 0 : _a.id) == data.dataId) {
                    if (data.deleted) {
                        // If deleted, go back.
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                    else {
                        this.entryId = data.entryId;
                        this.entryLoaded = false;
                        this.fetchEntryData(true);
                    }
                }
            }, this.siteId);
            // Refresh entry on change.
            this.entryChangedObserver = events["b" /* CoreEvents */].on(services_data["c" /* AddonModDataProvider */].ENTRY_CHANGED, (data) => {
                var _a;
                if (data.entryId == this.entryId && ((_a = this.database) === null || _a === void 0 ? void 0 : _a.id) == data.dataId) {
                    if (data.deleted) {
                        // If deleted, go back.
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                    else {
                        this.entryLoaded = false;
                        this.fetchEntryData(true);
                    }
                }
            }, this.siteId);
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
                this.entryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('entryId') || undefined;
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
                this.offset = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('offset');
                this.title = this.module.name;
                this.commentsEnabled = !services_comments["a" /* CoreComments */].areCommentsDisabledInSite();
                yield this.fetchEntryData();
                this.logView();
            });
        }
        /**
         * Fetch the entry data.
         *
         * @param refresh Whether to refresh the current data or not.
         * @param isPtr Whether is a pull to refresh action.
         * @return Resolved when done.
         */
        fetchEntryData(refresh = false, isPtr = false) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.isPullingToRefresh = isPtr;
                try {
                    this.database = yield services_data["a" /* AddonModData */].getDatabase(this.courseId, this.module.id);
                    this.title = this.database.name || this.title;
                    this.fieldsArray = yield services_data["a" /* AddonModData */].getFields(this.database.id, { cmId: this.module.id });
                    this.fields = utils["a" /* CoreUtils */].arrayToObject(this.fieldsArray, 'id');
                    yield this.setEntryFromOffset();
                    this.access = yield services_data["a" /* AddonModData */].getDatabaseAccessInformation(this.database.id, { cmId: this.module.id });
                    this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.database.coursemodule);
                    this.selectedGroup = groups["a" /* CoreGroups */].validateGroupId(this.selectedGroup, this.groupInfo);
                    const actions = data_helper["a" /* AddonModDataHelper */].getActions(this.database, this.access, this.entry);
                    const template = data_helper["a" /* AddonModDataHelper */].getTemplate(this.database, services_data["e" /* AddonModDataTemplateType */].SINGLE, this.fieldsArray);
                    this.entryHtml = data_helper["a" /* AddonModDataHelper */].displayShowFields(template, this.fieldsArray, this.entry, this.offset, services_data["d" /* AddonModDataTemplateMode */].SHOW, actions);
                    this.showComments = actions.comments;
                    const entries = {};
                    entries[this.entryId] = this.entry;
                    // Pass the input data to the component.
                    this.jsData = {
                        fields: this.fields,
                        entries: entries,
                        database: this.database,
                        module: this.module,
                        group: this.selectedGroup,
                    };
                }
                catch (error) {
                    if (!refresh) {
                        // Some call failed, retry without using cache since it might be a new activity.
                        return this.refreshAllData(isPtr);
                    }
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                }
                finally {
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                    this.entryLoaded = true;
                }
            });
        }
        /**
         * Go to selected entry without changing state.
         *
         * @param offset Entry offset.
         * @return Resolved when done.
         */
        gotoEntry(offset) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.offset = offset;
                this.entryId = undefined;
                this.entry = undefined;
                this.entryLoaded = false;
                yield this.fetchEntryData();
                this.logView();
            });
        }
        /**
         * Refresh all the data.
         *
         * @param isPtr Whether is a pull to refresh action.
         * @return Promise resolved when done.
         */
        refreshAllData(isPtr) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(services_data["a" /* AddonModData */].invalidateDatabaseData(this.courseId));
                if (this.database) {
                    promises.push(services_data["a" /* AddonModData */].invalidateEntryData(this.database.id, this.entryId));
                    promises.push(groups["a" /* CoreGroups */].invalidateActivityGroupInfo(this.database.coursemodule));
                    promises.push(services_data["a" /* AddonModData */].invalidateEntriesData(this.database.id));
                    promises.push(services_data["a" /* AddonModData */].invalidateFieldsData(this.database.id));
                    if (this.database.comments && this.entry && this.entry.id > 0 && this.commentsEnabled && this.comments) {
                        // Refresh comments. Don't add it to promises because we don't want the comments fetch to block the entry fetch.
                        this.comments.doRefresh().catch(() => {
                            // Ignore errors.
                        });
                    }
                }
                yield Promise.all(promises).finally(() => this.fetchEntryData(true, isPtr));
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @return Promise resolved when done.
         */
        refreshDatabase(refresher) {
            if (!this.entryLoaded) {
                return;
            }
            this.refreshAllData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Set group to see the database.
         *
         * @param groupId Group identifier to set.
         * @return Resolved when done.
         */
        setGroup(groupId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.selectedGroup = groupId;
                this.offset = undefined;
                this.entry = undefined;
                this.entryId = undefined;
                this.entryLoaded = false;
                yield this.fetchEntryData();
                this.logView();
            });
        }
        /**
         * Convenience function to fetch the entry and set next/previous entries.
         *
         * @return Resolved when done.
         */
        setEntryFromOffset() {
            var _a, _b, _c;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (typeof this.offset == 'undefined' && typeof this.entryId != 'undefined') {
                    // Entry id passed as navigation parameter instead of the offset.
                    // We don't display next/previous buttons in this case.
                    this.hasNext = false;
                    this.hasPrevious = false;
                    const entry = yield data_helper["a" /* AddonModDataHelper */].fetchEntry(this.database, this.fieldsArray, this.entryId);
                    this.entry = entry.entry;
                    this.ratingInfo = entry.ratinginfo;
                    return;
                }
                const perPage = services_data["c" /* AddonModDataProvider */].PER_PAGE;
                const page = typeof this.offset != 'undefined' && this.offset >= 0
                    ? Math.floor(this.offset / perPage)
                    : 0;
                const entries = yield data_helper["a" /* AddonModDataHelper */].fetchEntries(this.database, this.fieldsArray, {
                    groupId: this.selectedGroup,
                    sort: 0,
                    order: 'DESC',
                    page,
                    perPage,
                });
                const pageEntries = (entries.offlineEntries || []).concat(entries.entries);
                // Index of the entry when concatenating offline and online page entries.
                let pageIndex = 0;
                if (typeof this.offset == 'undefined') {
                    // No offset passed, display the first entry.
                    pageIndex = 0;
                }
                else if (this.offset > 0) {
                    // Online entry.
                    pageIndex = this.offset % perPage + (((_a = entries.offlineEntries) === null || _a === void 0 ? void 0 : _a.length) || 0);
                }
                else {
                    // Offline entry.
                    pageIndex = this.offset + (((_b = entries.offlineEntries) === null || _b === void 0 ? void 0 : _b.length) || 0);
                }
                this.entry = pageEntries[pageIndex];
                this.entryId = this.entry.id;
                this.hasPrevious = page > 0 || pageIndex > 0;
                if (pageIndex + 1 < pageEntries.length) {
                    // Not the last entry on the page;
                    this.hasNext = true;
                }
                else if (pageEntries.length < perPage) {
                    // Last entry of the last page.
                    this.hasNext = false;
                }
                else {
                    // Last entry of the page, check if there are more pages.
                    const entries = yield services_data["a" /* AddonModData */].getEntries(this.database.id, {
                        groupId: this.selectedGroup,
                        page: page + 1,
                        perPage: perPage,
                    });
                    this.hasNext = ((_c = entries === null || entries === void 0 ? void 0 : entries.entries) === null || _c === void 0 ? void 0 : _c.length) > 0;
                }
                if (this.entryId > 0) {
                    // Online entry, we need to fetch the the rating info.
                    const entry = yield services_data["a" /* AddonModData */].getEntry(this.database.id, this.entryId, { cmId: this.module.id });
                    this.ratingInfo = entry.ratinginfo;
                }
            });
        }
        /**
         * Function called when entry is being rendered.
         */
        setRenderingEntry(rendering) {
            this.renderingEntry = rendering;
            this.cdr.detectChanges();
        }
        /**
         * Function called when comments component is loading data.
         */
        setLoadingComments(loading) {
            this.loadingComments = loading;
            this.cdr.detectChanges();
        }
        /**
         * Function called when rate component is loading data.
         */
        setLoadingRating(loading) {
            this.loadingRating = loading;
            this.cdr.detectChanges();
        }
        /**
         * Function called when rating is updated online.
         */
        ratingUpdated() {
            services_data["a" /* AddonModData */].invalidateEntryData(this.database.id, this.entryId);
        }
        /**
         * Log viewing the activity.
         *
         * @return Promise resolved when done.
         */
        logView() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.database || !this.database.id) {
                    return;
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(services_data["a" /* AddonModData */].logView(this.database.id, this.database.name));
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a, _b;
            (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.entryChangedObserver) === null || _b === void 0 ? void 0 : _b.off();
        }
    }
    AddonModDataEntryPage.ɵfac = function AddonModDataEntryPage_Factory(t) { return new (t || AddonModDataEntryPage)(core["yc" /* ɵɵdirectiveInject */](core["j" /* ChangeDetectorRef */])); };
    AddonModDataEntryPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModDataEntryPage, selectors: [["page-addon-mod-data-entry"]], viewQuery: function AddonModDataEntryPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](comments["a" /* CoreCommentsCommentsComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.comments = _t.first);
            }
        }, decls: 19, vars: 18, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "class", 4, "ngIf"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "itemSetId", "courseId", "aggregateMethod", "scaleId", "userId", "onLoading", "onUpdate", 4, "ngIf"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "courseId", "aggregateMethod", "scaleId", 4, "ngIf"], ["contextLevel", "module", "component", "mod_data", "area", "database_entry", 3, "instanceId", "itemId", "courseId", "showItem", "onLoading", 4, "ngIf"], [4, "ngIf"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], [1, "ion-text-wrap"], ["id", "addon-data-groupslabel"], ["aria-labelledby", "addon-data-groupslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "css", "prefix"], [3, "text", "jsData", "extraImports", "compiling"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "itemSetId", "courseId", "aggregateMethod", "scaleId", "userId", "onLoading", "onUpdate"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "courseId", "aggregateMethod", "scaleId"], ["contextLevel", "module", "component", "mod_data", "area", "database_entry", 3, "instanceId", "itemId", "courseId", "showItem", "onLoading"], [1, "ion-align-items-center"], ["expand", "block", "fill", "outline", 3, "click"], ["name", "fas-chevron-left", "slot", "start", "aria-hidden", "true"], ["expand", "block", 3, "click"], ["name", "fas-chevron-right", "slot", "end", "aria-hidden", "true"]], template: function AddonModDataEntryPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModDataEntryPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.refreshDatabase($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, AddonModDataEntryPage_ion_card_12_Template, 6, 6, "ion-card", 6);
                core["nd" /* ɵɵtemplate */](13, AddonModDataEntryPage_ion_item_13_Template, 7, 9, "ion-item", 7);
                core["nd" /* ɵɵtemplate */](14, AddonModDataEntryPage_div_14_Template, 3, 8, "div", 8);
                core["nd" /* ɵɵtemplate */](15, AddonModDataEntryPage_core_rating_rate_15_Template, 1, 8, "core-rating-rate", 9);
                core["nd" /* ɵɵtemplate */](16, AddonModDataEntryPage_core_rating_aggregate_16_Template, 1, 6, "core-rating-aggregate", 10);
                core["nd" /* ɵɵtemplate */](17, AddonModDataEntryPage_core_comments_17_Template, 1, 4, "core-comments", 11);
                core["nd" /* ɵɵtemplate */](18, AddonModDataEntryPage_ion_grid_18_Template, 4, 2, "ion-grid", 12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 14, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.entryLoaded || !(ctx.isPullingToRefresh || !ctx.renderingEntry && !ctx.loadingRating && !ctx.loadingComments));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 16, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.entryLoaded && (ctx.isPullingToRefresh || !ctx.renderingEntry && !ctx.loadingRating && !ctx.loadingComments));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.entry && ctx.entry.hasOffline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo && (ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.database && ctx.entry);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.database && ctx.entry && ctx.ratingInfo && (!ctx.database.approval || ctx.entry.approved));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.database && ctx.entry && ctx.ratingInfo);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.database && ctx.database.comments && ctx.entry && ctx.entry.id > 0 && ctx.commentsEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasPrevious || ctx.hasNext);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["m" /* IonCard */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], style["a" /* CoreStyleComponent */], compile_html["a" /* CoreCompileHtmlComponent */], rate["a" /* CoreRatingRateComponent */], aggregate["a" /* CoreRatingAggregateComponent */], comments["a" /* CoreCommentsCommentsComponent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]{--border-color:var(--gray)}.addon-data-contents[_ngcontent-%COMP%]{overflow:visible;white-space:normal;word-break:break-word;padding:16px;background-color:var(--ion-item-background);border-bottom:1px solid var(--border-color)}.addon-data-contents[_ngcontent-%COMP%]     table, .addon-data-contents[_ngcontent-%COMP%]     tbody{display:block}.addon-data-contents[_ngcontent-%COMP%]     tr{display:flex;flex-wrap:wrap;padding:0}@media (max-width:575.98px){.addon-data-contents[_ngcontent-%COMP%]     tr{flex-direction:column}}.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;box-sizing:border-box;position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:auto}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}@media (min-width:576px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}@media (min-width:768px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}@media (min-width:992px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}@media (min-width:1200px){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.addon-data-contents[_ngcontent-%COMP%]     td, .addon-data-contents[_ngcontent-%COMP%]     th{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}.addon-data-contents[_ngcontent-%COMP%]     address, .addon-data-contents[_ngcontent-%COMP%]     article, .addon-data-contents[_ngcontent-%COMP%]     aside, .addon-data-contents[_ngcontent-%COMP%]     blockquote, .addon-data-contents[_ngcontent-%COMP%]     canvas, .addon-data-contents[_ngcontent-%COMP%]     dd, .addon-data-contents[_ngcontent-%COMP%]     div, .addon-data-contents[_ngcontent-%COMP%]     dl, .addon-data-contents[_ngcontent-%COMP%]     dt, .addon-data-contents[_ngcontent-%COMP%]     fieldset, .addon-data-contents[_ngcontent-%COMP%]     figcaption, .addon-data-contents[_ngcontent-%COMP%]     figure, .addon-data-contents[_ngcontent-%COMP%]     footer, .addon-data-contents[_ngcontent-%COMP%]     form, .addon-data-contents[_ngcontent-%COMP%]     h1, .addon-data-contents[_ngcontent-%COMP%]     h2, .addon-data-contents[_ngcontent-%COMP%]     h3, .addon-data-contents[_ngcontent-%COMP%]     h4, .addon-data-contents[_ngcontent-%COMP%]     h5, .addon-data-contents[_ngcontent-%COMP%]     h6, .addon-data-contents[_ngcontent-%COMP%]     header, .addon-data-contents[_ngcontent-%COMP%]     hr, .addon-data-contents[_ngcontent-%COMP%]     li, .addon-data-contents[_ngcontent-%COMP%]     main, .addon-data-contents[_ngcontent-%COMP%]     nav, .addon-data-contents[_ngcontent-%COMP%]     noscript, .addon-data-contents[_ngcontent-%COMP%]     ol, .addon-data-contents[_ngcontent-%COMP%]     p, .addon-data-contents[_ngcontent-%COMP%]     pre, .addon-data-contents[_ngcontent-%COMP%]     section, .addon-data-contents[_ngcontent-%COMP%]     table, .addon-data-contents[_ngcontent-%COMP%]     tfoot, .addon-data-contents[_ngcontent-%COMP%]     ul, .addon-data-contents[_ngcontent-%COMP%]     video{width:auto!important;height:auto!important;min-width:auto!important;min-height:auto!important;max-height:none!important}"] });
    return AddonModDataEntryPage;
})();

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/data/components/index/index.ts
var index = __webpack_require__("DHaU");

// CONCATENATED MODULE: ./src/addons/mod/data/pages/index/index.ts
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
 * Page that displays a data.
 */
let index_AddonModDataIndexPage = /*@__PURE__*/ (() => {
    class AddonModDataIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
        constructor() {
            super(...arguments);
            this.group = 0;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            super.ngOnInit();
            this.group = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
        }
    }
    AddonModDataIndexPage.ɵfac = function AddonModDataIndexPage_Factory(t) { return ɵAddonModDataIndexPage_BaseFactory(t || AddonModDataIndexPage); };
    AddonModDataIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModDataIndexPage, selectors: [["page-addon-mod-data-index"]], viewQuery: function AddonModDataIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModDataIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 13, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "group", "dataRetrieved"]], template: function AddonModDataIndexPage_Template(rf, ctx) {
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
                core["zc" /* ɵɵelement */](7, "ion-buttons", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModDataIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-data-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModDataIndexPage_Template_addon_mod_data_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 9, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("group", ctx.group);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModDataIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModDataIndexPage;
})();
const ɵAddonModDataIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModDataIndexPage);

// CONCATENATED MODULE: ./src/addons/mod/data/data-lazy.module.ts
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
        path: ':courseId/:cmId',
        component: index_AddonModDataIndexPage,
    },
    {
        path: ':courseId/:cmId/edit',
        component: edit_AddonModDataEditPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
    {
        path: ':courseId/:cmId/edit/:entryId',
        component: edit_AddonModDataEditPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
    {
        path: ':courseId/:cmId/:entryId',
        component: entry_AddonModDataEntryPage,
    },
];
let data_lazy_module_AddonModDataLazyModule = /*@__PURE__*/ (() => {
    class AddonModDataLazyModule {
    }
    AddonModDataLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModDataLazyModule });
    AddonModDataLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModDataLazyModule_Factory(t) { return new (t || AddonModDataLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                data_components_components_module["a" /* AddonModDataComponentsModule */],
                components_compile_module["a" /* AddonModDataComponentsCompileModule */],
                components_module["a" /* CoreCommentsComponentsModule */],
                components_components_module["a" /* CoreRatingComponentsModule */],
                compile_html_module["a" /* CoreCompileHtmlComponentModule */],
            ]] });
    return AddonModDataLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](data_lazy_module_AddonModDataLazyModule, { declarations: [index_AddonModDataIndexPage,
            entry_AddonModDataEntryPage,
            edit_AddonModDataEditPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            data_components_components_module["a" /* AddonModDataComponentsModule */],
            components_compile_module["a" /* AddonModDataComponentsCompileModule */],
            components_module["a" /* CoreCommentsComponentsModule */],
            components_components_module["a" /* CoreRatingComponentsModule */],
            compile_html_module["a" /* CoreCompileHtmlComponentModule */]] });
})();


/***/ })

}]);