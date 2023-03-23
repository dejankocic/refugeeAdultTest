(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "M7Gs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModAssignLazyModule", function() { return /* binding */ assign_lazy_module_AddonModAssignLazyModule; });

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// EXTERNAL MODULE: ./src/addons/mod/assign/components/components.module.ts
var components_module = __webpack_require__("sYk5");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader-helper.ts
var fileuploader_helper = __webpack_require__("2tv+");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var services_sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var singletons_events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/assign/services/assign.ts
var services_assign = __webpack_require__("djuo");

// EXTERNAL MODULE: ./src/addons/mod/assign/services/assign-helper.ts
var assign_helper = __webpack_require__("JDIg");

// EXTERNAL MODULE: ./src/addons/mod/assign/services/assign-offline.ts
var assign_offline = __webpack_require__("W4Cf");

// EXTERNAL MODULE: ./src/addons/mod/assign/services/assign-sync.ts
var assign_sync = __webpack_require__("jQ6G");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/addons/mod/assign/components/submission-plugin/submission-plugin.ts
var submission_plugin = __webpack_require__("akXa");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/assign/pages/edit/edit.ts

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























const _c0 = ["editSubmissionForm"];
function AddonModAssignEditPage_ion_list_13_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](3, "ion-checkbox", 13);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModAssignEditPage_ion_list_13_ion_item_3_Template_ion_checkbox_ngModelChange_3_listener($event) { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](2); return ctx_r4.submissionStatementAccepted = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](4, "input", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r2.submissionStatement)("filter", false);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r2.submissionStatementAccepted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r2.submissionStatementAccepted);
    }
}
function AddonModAssignEditPage_ion_list_13_addon_mod_assign_submission_plugin_4_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "addon-mod-assign-submission-plugin", 15);
    }
    if (rf & 2) {
        const plugin_r6 = ctx.$implicit;
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("assign", ctx_r3.assign)("submission", ctx_r3.userSubmission)("plugin", plugin_r6)("edit", true)("allowOffline", ctx_r3.allowOffline);
    }
}
function AddonModAssignEditPage_ion_list_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list");
        core["Ec" /* ɵɵelementStart */](1, "form", 7, 8);
        core["nd" /* ɵɵtemplate */](3, AddonModAssignEditPage_ion_list_13_ion_item_3_Template, 5, 4, "ion-item", 9);
        core["nd" /* ɵɵtemplate */](4, AddonModAssignEditPage_ion_list_13_addon_mod_assign_submission_plugin_4_Template, 1, 5, "addon-mod-assign-submission-plugin", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.submissionStatement);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.userSubmission.plugins);
    }
}
/**
 * Page that allows adding or editing an assigment submission.
 */
let edit_AddonModAssignEditPage = /*@__PURE__*/ (() => {
    class AddonModAssignEditPage {
        constructor(route) {
            this.route = route;
            this.allowOffline = false; // Whether offline is allowed.
            this.submissionStatementAccepted = false; // Whether submission statement is accepted.
            this.loaded = false; // Whether data has been loaded.
            this.isBlind = false; // Whether blind is used.
            this.saveOffline = false; // Whether to save data in offline.
            this.hasOffline = false; // Whether the assignment has offline data.
            this.isDestroyed = false; // Whether the component has been destroyed.
            this.forceLeave = false; // To allow leaving the page without checking for changes.
            this.userId = sites["b" /* CoreSites */].getCurrentSiteUserId(); // Right now we can only edit current user's submissions.
            this.editText = singletons["L" /* Translate */].instant('addon.mod_assign.editsubmission');
            this.title = this.editText;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.moduleId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.isBlind = !!services_navigator["a" /* CoreNavigator */].getRouteNumberParam('blindId');
            this.fetchAssignment().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave) {
                    return true;
                }
                // Check if data has changed.
                const changed = yield this.hasDataChanged();
                if (changed) {
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                // Nothing has changed or user confirmed to leave. Clear temporary data from plugins.
                assign_helper["a" /* AddonModAssignHelper */].clearSubmissionPluginTmpData(this.assign, this.userSubmission, this.getInputData());
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                return true;
            });
        }
        /**
         * Fetch assignment data.
         *
         * @return Promise resolved when done.
         */
        fetchAssignment() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
                try {
                    // Get assignment data.
                    this.assign = yield services_assign["a" /* AddonModAssign */].getAssignment(this.courseId, this.moduleId);
                    this.title = this.assign.name || this.title;
                    if (!this.isDestroyed) {
                        // Block the assignment.
                        services_sync["a" /* CoreSync */].blockOperation(services_assign["b" /* AddonModAssignProvider */].COMPONENT, this.assign.id);
                    }
                    // Wait for sync to be over (if any).
                    yield assign_sync["a" /* AddonModAssignSync */].waitForSync(this.assign.id);
                    // Get submission status. Ignore cache to get the latest data.
                    const options = {
                        userId: this.userId,
                        isBlind: this.isBlind,
                        cmId: this.assign.cmid,
                        filter: false,
                        readingStrategy: 2 /* ONLY_NETWORK */,
                    };
                    let submissionStatus;
                    try {
                        submissionStatus = yield services_assign["a" /* AddonModAssign */].getSubmissionStatus(this.assign.id, options);
                        this.userSubmission =
                            services_assign["a" /* AddonModAssign */].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                    }
                    catch (error) {
                        // Cannot connect. Get cached data.
                        options.filter = true;
                        options.readingStrategy = 1 /* PREFER_CACHE */;
                        submissionStatus = yield services_assign["a" /* AddonModAssign */].getSubmissionStatus(this.assign.id, options);
                        this.userSubmission =
                            services_assign["a" /* AddonModAssign */].getSubmissionObjectFromAttempt(this.assign, submissionStatus.lastattempt);
                        // Check if the user can edit it in offline.
                        const canEditOffline = yield assign_helper["a" /* AddonModAssignHelper */].canEditSubmissionOffline(this.assign, this.userSubmission);
                        if (!canEditOffline) {
                            // Submission cannot be edited in offline, reject.
                            this.allowOffline = false;
                            throw error;
                        }
                    }
                    if (!((_a = submissionStatus.lastattempt) === null || _a === void 0 ? void 0 : _a.canedit)) {
                        // Can't edit. Reject.
                        throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('core.nopermissions', { $a: this.editText }));
                    }
                    this.allowOffline = true; // If offline isn't allowed we shouldn't have reached this point.
                    // Only show submission statement if we are editing our own submission.
                    if (this.assign.requiresubmissionstatement && !this.assign.submissiondrafts && this.userId == currentUserId) {
                        this.submissionStatement = this.assign.submissionstatement;
                    }
                    else {
                        this.submissionStatement = undefined;
                    }
                    try {
                        // Check if there's any offline data for this submission.
                        const offlineData = yield assign_offline["a" /* AddonModAssignOffline */].getSubmission(this.assign.id, this.userId);
                        this.hasOffline = (offlineData === null || offlineData === void 0 ? void 0 : offlineData.plugindata) && Object.keys(offlineData.plugindata).length > 0;
                    }
                    catch (_b) {
                        // No offline data found.
                        this.hasOffline = false;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting assigment data.');
                    // Leave the player.
                    this.leaveWithoutCheck();
                }
            });
        }
        /**
         * Get the input data.
         *
         * @return Input data.
         */
        getInputData() {
            return singletons_form["a" /* CoreForms */].getDataFromForm(document.forms['addon-mod_assign-edit-form']);
        }
        /**
         * Check if data has changed.
         *
         * @return Promise resolved with boolean: whether data has changed.
         */
        hasDataChanged() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Usually the hasSubmissionDataChanged call will be resolved inmediately, causing the modal to be shown just an instant.
                // We'll wait a bit before showing it to prevent this "blink".
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                const data = this.getInputData();
                return assign_helper["a" /* AddonModAssignHelper */].hasSubmissionDataChanged(this.assign, this.userSubmission, data).finally(() => {
                    modal.dismiss();
                });
            });
        }
        /**
         * Leave the view without checking for changes.
         */
        leaveWithoutCheck() {
            this.forceLeave = true;
            services_navigator["a" /* CoreNavigator */].back();
        }
        /**
         * Get data to submit based on the input data.
         *
         * @param inputData The input data.
         * @return Promise resolved with the data to submit.
         */
        prepareSubmissionData(inputData) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // If there's offline data, always save it in offline.
                this.saveOffline = this.hasOffline;
                try {
                    return yield assign_helper["a" /* AddonModAssignHelper */].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, this.hasOffline);
                }
                catch (error) {
                    if (this.allowOffline && !this.saveOffline) {
                        // Cannot submit in online, prepare for offline usage.
                        this.saveOffline = true;
                        return yield assign_helper["a" /* AddonModAssignHelper */].prepareSubmissionPluginData(this.assign, this.userSubmission, inputData, true);
                    }
                    throw error;
                }
            });
        }
        /**
         * Save the submission.
         */
        save() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Check if data has changed.
                const changed = yield this.hasDataChanged();
                if (!changed) {
                    // Nothing to save, just go back.
                    this.leaveWithoutCheck();
                    return;
                }
                try {
                    yield this.saveSubmission();
                    this.leaveWithoutCheck();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error saving submission.');
                }
            });
        }
        /**
         * Save the submission.
         *
         * @return Promise resolved when done.
         */
        saveSubmission() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const inputData = this.getInputData();
                if (this.submissionStatement && (!inputData.submissionstatement || inputData.submissionstatement === 'false')) {
                    throw singletons["L" /* Translate */].instant('addon.mod_assign.acceptsubmissionstatement');
                }
                let modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                let size = -1;
                // Get size to ask for confirmation.
                try {
                    size = yield assign_helper["a" /* AddonModAssignHelper */].getSubmissionSizeForEdit(this.assign, this.userSubmission, inputData);
                }
                catch (error) {
                    // Error calculating size, return -1.
                    size = -1;
                }
                modal.dismiss();
                try {
                    // Confirm action.
                    yield fileuploader_helper["a" /* CoreFileUploaderHelper */].confirmUploadFile(size, true, this.allowOffline);
                    modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    const pluginData = yield this.prepareSubmissionData(inputData);
                    if (!Object.keys(pluginData).length) {
                        // Nothing to save.
                        return;
                    }
                    let sent;
                    if (this.saveOffline) {
                        // Save submission in offline.
                        sent = false;
                        yield assign_offline["a" /* AddonModAssignOffline */].saveSubmission(this.assign.id, this.courseId, pluginData, this.userSubmission.timemodified, !this.assign.submissiondrafts, this.userId);
                    }
                    else {
                        // Try to send it to server.
                        sent = yield services_assign["a" /* AddonModAssign */].saveSubmission(this.assign.id, this.courseId, pluginData, this.allowOffline, this.userSubmission.timemodified, !!this.assign.submissiondrafts, this.userId);
                    }
                    // Clear temporary data from plugins.
                    assign_helper["a" /* AddonModAssignHelper */].clearSubmissionPluginTmpData(this.assign, this.userSubmission, inputData);
                    if (sent) {
                        singletons_events["b" /* CoreEvents */].trigger(singletons_events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'assign' });
                    }
                    // Submission saved, trigger events.
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, sent, sites["b" /* CoreSites */].getCurrentSiteId());
                    singletons_events["b" /* CoreEvents */].trigger(services_assign["b" /* AddonModAssignProvider */].SUBMISSION_SAVED_EVENT, {
                        assignmentId: this.assign.id,
                        submissionId: this.userSubmission.id,
                        userId: this.userId,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    if (!this.assign.submissiondrafts) {
                        // No drafts allowed, so it was submitted. Trigger event.
                        singletons_events["b" /* CoreEvents */].trigger(services_assign["b" /* AddonModAssignProvider */].SUBMITTED_FOR_GRADING_EVENT, {
                            assignmentId: this.assign.id,
                            submissionId: this.userSubmission.id,
                            userId: this.userId,
                        }, sites["b" /* CoreSites */].getCurrentSiteId());
                    }
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            this.isDestroyed = true;
            // Unblock the assignment.
            if (this.assign) {
                services_sync["a" /* CoreSync */].unblockOperation(services_assign["b" /* AddonModAssignProvider */].COMPONENT, this.assign.id);
            }
        }
    }
    AddonModAssignEditPage.ɵfac = function AddonModAssignEditPage_Factory(t) { return new (t || AddonModAssignEditPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonModAssignEditPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModAssignEditPage, selectors: [["page-addon-mod-assign-edit"]], viewQuery: function AddonModAssignEditPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 14, vars: 11, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "click"], [3, "hideUntil"], [4, "ngIf"], ["name", "addon-mod_assign-edit-form"], ["editSubmissionForm", ""], ["class", "ion-text-wrap", 4, "ngIf"], [3, "assign", "submission", "plugin", "edit", "allowOffline", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], [3, "text", "filter"], ["slot", "end", "name", "submissionstatement", 3, "ngModel", "ngModelChange"], ["type", "hidden", "name", "submissionstatement", 3, "ngModel"], [3, "assign", "submission", "plugin", "edit", "allowOffline"]], template: function AddonModAssignEditPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("click", function AddonModAssignEditPage_Template_ion_button_click_8_listener() { return ctx.save(); });
                core["pd" /* ɵɵtext */](9);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "ion-content");
                core["Ec" /* ɵɵelementStart */](12, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](13, AddonModAssignEditPage_ion_list_13_Template, 5, 2, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.moduleId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](10, 9, "core.save"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.userSubmission && ctx.userSubmission.plugins && ctx.userSubmission.plugins.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["k" /* IonButton */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["t" /* NgForm */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["r" /* IonCheckbox */], ionic_angular["c" /* BooleanValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], fesm2015_forms["c" /* DefaultValueAccessor */], submission_plugin["a" /* AddonModAssignSubmissionPluginComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModAssignEditPage;
})();

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/assign/components/index/index.ts
var index = __webpack_require__("FltD");

// CONCATENATED MODULE: ./src/addons/mod/assign/pages/index/index.page.ts
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
 * Page that displays an assign.
 */
let index_page_AddonModAssignIndexPage = /*@__PURE__*/ (() => {
    class AddonModAssignIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
    }
    AddonModAssignIndexPage.ɵfac = function AddonModAssignIndexPage_Factory(t) { return ɵAddonModAssignIndexPage_BaseFactory(t || AddonModAssignIndexPage); };
    AddonModAssignIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModAssignIndexPage, selectors: [["page-addon-mod-assign-index"]], viewQuery: function AddonModAssignIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModAssignIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "dataRetrieved"]], template: function AddonModAssignIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModAssignIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-assign-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModAssignIndexPage_Template_addon_mod_assign_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModAssignIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModAssignIndexPage;
})();
const ɵAddonModAssignIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_page_AddonModAssignIndexPage);

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// CONCATENATED MODULE: ./src/addons/mod/assign/pages/submission-list/submission-list.page.ts

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

























function AddonModAssignSubmissionListPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 11);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_assign.submissionstatus_"));
    }
}
function AddonModAssignSubmissionListPage_ion_item_16_ion_label_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-label", 16);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsseparate"), " ");
    }
}
function AddonModAssignSubmissionListPage_ion_item_16_ion_label_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-label", 16);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.groupsvisible"), " ");
    }
}
function AddonModAssignSubmissionListPage_ion_item_16_ion_select_option_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 17);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r7 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r7.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r7.name, " ");
    }
}
const submission_list_page_c0 = function (a0) { return { header: a0 }; };
function AddonModAssignSubmissionListPage_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](1, AddonModAssignSubmissionListPage_ion_item_16_ion_label_1_Template, 3, 3, "ion-label", 13);
        core["nd" /* ɵɵtemplate */](2, AddonModAssignSubmissionListPage_ion_item_16_ion_label_2_Template, 3, 3, "ion-label", 13);
        core["Ec" /* ɵɵelementStart */](3, "ion-select", 14);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModAssignSubmissionListPage_ion_item_16_Template_ion_select_ngModelChange_3_listener($event) { core["gd" /* ɵɵrestoreView */](_r9); const ctx_r8 = core["Oc" /* ɵɵnextContext */](); return ctx_r8.groupId = $event; })("ionChange", function AddonModAssignSubmissionListPage_ion_item_16_Template_ion_select_ionChange_3_listener() { core["gd" /* ɵɵrestoreView */](_r9); const ctx_r10 = core["Oc" /* ɵɵnextContext */](); return ctx_r10.setGroup(ctx_r10.groupId); });
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["nd" /* ɵɵtemplate */](5, AddonModAssignSubmissionListPage_ion_item_16_ion_select_option_5_Template, 2, 2, "ion-select-option", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.separateGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.groupInfo.visibleGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.groupId)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, submission_list_page_c0, core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.groupInfo.groups);
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 23);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](submission_r11.userfullname);
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 23);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.mod_assign.hiddenuser"), "", submission_r11.blindid, " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_6_span_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](submission_r11.groupname);
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_6_span_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 25);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_assign.noteam"), " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_6_span_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span", 25);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_assign.multipleteams"), " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_6_span_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_assign.defaultteam"), " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["nd" /* ɵɵtemplate */](1, AddonModAssignSubmissionListPage_ng_container_17_p_6_span_1_Template, 2, 1, "span", 21);
        core["nd" /* ɵɵtemplate */](2, AddonModAssignSubmissionListPage_ng_container_17_p_6_span_2_Template, 3, 3, "span", 24);
        core["nd" /* ɵɵtemplate */](3, AddonModAssignSubmissionListPage_ng_container_17_p_6_span_3_Template, 3, 3, "span", 24);
        core["nd" /* ɵɵtemplate */](4, AddonModAssignSubmissionListPage_ng_container_17_p_6_span_4_Template, 3, 3, "span", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r14 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", submission_r11.groupname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r14.assign.preventsubmissionnotingroup && !submission_r11.groupname && submission_r11.noGroups && !submission_r11.blindid);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r14.assign.preventsubmissionnotingroup && !submission_r11.groupname && submission_r11.manyGroups && !submission_r11.blindid);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r14.assign.preventsubmissionnotingroup && !submission_r11.groupname);
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 26);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", submission_r11.statusColor);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", submission_r11.statusTranslated, " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_ion_badge_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-badge", 26);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", submission_r11.gradingColor);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, submission_r11.gradingStatusTranslationId), " ");
    }
}
function AddonModAssignSubmissionListPage_ng_container_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r28 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 18);
        core["Mc" /* ɵɵlistener */]("click", function AddonModAssignSubmissionListPage_ng_container_17_Template_ion_item_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r28); const submission_r11 = ctx.$implicit; const ctx_r27 = core["Oc" /* ɵɵnextContext */](); return ctx_r27.submissions.select(submission_r11); });
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 19);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonModAssignSubmissionListPage_ng_container_17_p_4_Template, 2, 1, "p", 20);
        core["nd" /* ɵɵtemplate */](5, AddonModAssignSubmissionListPage_ng_container_17_p_5_Template, 3, 4, "p", 20);
        core["nd" /* ɵɵtemplate */](6, AddonModAssignSubmissionListPage_ng_container_17_p_6_Template, 5, 4, "p", 21);
        core["nd" /* ɵɵtemplate */](7, AddonModAssignSubmissionListPage_ng_container_17_ion_badge_7_Template, 2, 2, "ion-badge", 22);
        core["nd" /* ɵɵtemplate */](8, AddonModAssignSubmissionListPage_ng_container_17_ion_badge_8_Template, 3, 4, "ion-badge", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const submission_r11 = ctx.$implicit;
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r2.submissions.getItemAriaCurrent(submission_r11));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", submission_r11)("linkProfile", false);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", submission_r11.userfullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !submission_r11.userfullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.assign && ctx_r2.assign.teamsubmission);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", submission_r11.statusTranslated);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", submission_r11.gradingStatusTranslationId);
    }
}
function AddonModAssignSubmissionListPage_ion_card_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 27);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 28);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_assign.notallparticipantsareshown"));
    }
}
/**
 * Page that displays a list of submissions of an assignment.
 */
let submission_list_page_AddonModAssignSubmissionListPage = /*@__PURE__*/ (() => {
    class AddonModAssignSubmissionListPage {
        constructor() {
            this.title = ''; // Title to display.
            this.loaded = false; // Whether data has been loaded.
            this.haveAllParticipants = true; // Whether all participants have been loaded.
            this.groupId = 0; // Group ID to show.
            this.groupInfo = {
                groups: [],
                separateGroups: false,
                visibleGroups: false,
                defaultGroupId: 0,
            };
            this.submissionsData = {
                canviewsubmissions: false,
            };
            this.submissions = new submission_list_page_AddonModAssignSubmissionListManager(AddonModAssignSubmissionListPage);
            // Update data if some grade changes.
            this.gradedObserver = singletons_events["b" /* CoreEvents */].on(services_assign["b" /* AddonModAssignProvider */].GRADED_EVENT, (data) => {
                if (this.loaded &&
                    this.assign &&
                    data.assignmentId == this.assign.id &&
                    data.userId == sites["b" /* CoreSites */].getCurrentSiteUserId()) {
                    // Grade changed, refresh the data.
                    this.loaded = false;
                    this.refreshAllData(true).finally(() => {
                        this.loaded = true;
                    });
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            // Refresh data if this assign is synchronized.
            const events = [assign_sync["b" /* AddonModAssignSyncProvider */].AUTO_SYNCED, assign_sync["b" /* AddonModAssignSyncProvider */].MANUAL_SYNCED];
            this.syncObserver = singletons_events["b" /* CoreEvents */].onMultiple(events, (data) => {
                if (!this.loaded || ('context' in data && data.context == 'submission-list')) {
                    return;
                }
                this.loaded = false;
                this.refreshAllData(false).finally(() => {
                    this.loaded = true;
                });
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Component being initialized.
         */
        ngAfterViewInit() {
            this.moduleId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.groupId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('groupId') || 0;
            this.selectedStatus = services_navigator["a" /* CoreNavigator */].getRouteParam('status');
            if (this.selectedStatus) {
                if (this.selectedStatus == services_assign["b" /* AddonModAssignProvider */].NEED_GRADING) {
                    this.title = singletons["L" /* Translate */].instant('addon.mod_assign.numberofsubmissionsneedgrading');
                }
                else {
                    this.title = singletons["L" /* Translate */].instant('addon.mod_assign.submissionstatus_' + this.selectedStatus);
                }
            }
            else {
                this.title = singletons["L" /* Translate */].instant('addon.mod_assign.numberofparticipants');
            }
            this.fetchAssignment(true).finally(() => {
                this.loaded = true;
                this.submissions.start(this.splitView);
            });
        }
        /**
         * Fetch assignment data.
         *
         * @param sync Whether to try to synchronize data.
         * @return Promise resolved when done.
         */
        fetchAssignment(sync = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    // Get assignment data.
                    this.assign = yield services_assign["a" /* AddonModAssign */].getAssignment(this.courseId, this.moduleId);
                    this.title = this.assign.name || this.title;
                    if (sync) {
                        try {
                            // Try to synchronize data.
                            const result = yield assign_sync["a" /* AddonModAssignSync */].syncAssign(this.assign.id);
                            if (result && result.updated) {
                                singletons_events["b" /* CoreEvents */].trigger(assign_sync["b" /* AddonModAssignSyncProvider */].MANUAL_SYNCED, {
                                    assignId: this.assign.id,
                                    warnings: result.warnings,
                                    gradesBlocked: result.gradesBlocked,
                                    context: 'submission-list',
                                }, sites["b" /* CoreSites */].getCurrentSiteId());
                            }
                        }
                        catch (error) {
                            // Ignore errors, probably user is offline or sync is blocked.
                        }
                    }
                    // Get assignment submissions.
                    this.submissionsData = yield services_assign["a" /* AddonModAssign */].getSubmissions(this.assign.id, { cmId: this.assign.cmid });
                    if (!this.submissionsData.canviewsubmissions) {
                        // User shouldn't be able to reach here.
                        throw new Error('Cannot view submissions.');
                    }
                    // Check if groupmode is enabled to avoid showing wrong numbers.
                    this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.assign.cmid, false);
                    yield this.setGroup(groups["a" /* CoreGroups */].validateGroupId(this.groupId, this.groupInfo));
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error getting assigment data.');
                }
            });
        }
        /**
         * Set group to see the summary.
         *
         * @param groupId Group ID.
         * @return Resolved when done.
         */
        setGroup(groupId) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.groupId = groupId;
                this.haveAllParticipants = true;
                if (!((_a = sites["b" /* CoreSites */].getCurrentSite()) === null || _a === void 0 ? void 0 : _a.wsAvailable('mod_assign_list_participants'))) {
                    // Submissions are not displayed in Moodle 3.1 without the local plugin, see MOBILE-2968.
                    this.haveAllParticipants = false;
                    this.submissions.resetItems();
                    return;
                }
                // Fetch submissions and grades.
                const submissions = yield assign_helper["a" /* AddonModAssignHelper */].getSubmissionsUserData(this.assign, this.submissionsData.submissions, this.groupId);
                // Get assignment grades only if workflow is not enabled to check grading date.
                const grades = !this.assign.markingworkflow
                    ? yield services_assign["a" /* AddonModAssign */].getAssignmentGrades(this.assign.id, { cmId: this.assign.cmid })
                    : [];
                // Filter the submissions to get only the ones with the right status and add some extra data.
                const getNeedGrading = this.selectedStatus == services_assign["b" /* AddonModAssignProvider */].NEED_GRADING;
                const searchStatus = getNeedGrading ? services_assign["b" /* AddonModAssignProvider */].SUBMISSION_STATUS_SUBMITTED : this.selectedStatus;
                const promises = [];
                const showSubmissions = [];
                submissions.forEach((submission) => {
                    if (!searchStatus || searchStatus == submission.status) {
                        promises.push(utils["a" /* CoreUtils */].ignoreErrors(assign_offline["a" /* AddonModAssignOffline */].getSubmissionGrade(this.assign.id, submission.userid)).then((data) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                            if (getNeedGrading) {
                                // Only show the submissions that need to be graded.
                                const add = yield services_assign["a" /* AddonModAssign */].needsSubmissionToBeGraded(submission, this.assign.id);
                                if (!add) {
                                    return;
                                }
                            }
                            // Load offline grades.
                            const notSynced = !!data && submission.timemodified < data.timemodified;
                            if (submission.gradingstatus == 'graded' && !this.assign.markingworkflow) {
                                // Get the last grade of the submission.
                                const grade = grades
                                    .filter((grade) => grade.userid == submission.userid)
                                    .reduce((a, b) => (a && a.timemodified > b.timemodified ? a : b), undefined);
                                if (grade && grade.timemodified < submission.timemodified) {
                                    submission.gradingstatus = services_assign["b" /* AddonModAssignProvider */].GRADED_FOLLOWUP_SUBMIT;
                                }
                            }
                            submission.statusColor = services_assign["a" /* AddonModAssign */].getSubmissionStatusColor(submission.status);
                            submission.gradingColor = services_assign["a" /* AddonModAssign */].getSubmissionGradingStatusColor(submission.gradingstatus);
                            // Show submission status if not submitted for grading.
                            if (submission.statusColor != 'success' || !submission.gradingstatus) {
                                submission.statusTranslated = singletons["L" /* Translate */].instant('addon.mod_assign.submissionstatus_' + submission.status);
                            }
                            else {
                                submission.statusTranslated = '';
                            }
                            if (notSynced) {
                                submission.gradingStatusTranslationId = 'addon.mod_assign.gradenotsynced';
                                submission.gradingColor = '';
                            }
                            else if (submission.statusColor != 'danger' || submission.gradingColor != 'danger') {
                                // Show grading status if one of the statuses is not done.
                                submission.gradingStatusTranslationId = services_assign["a" /* AddonModAssign */].getSubmissionGradingStatusTranslationId(submission.gradingstatus);
                            }
                            else {
                                submission.gradingStatusTranslationId = '';
                            }
                            showSubmissions.push(submission);
                            return;
                        })));
                    }
                });
                yield Promise.all(promises);
                this.submissions.setItems(showSubmissions);
            });
        }
        /**
         * Refresh all the data.
         *
         * @param sync Whether to try to synchronize data.
         * @return Promise resolved when done.
         */
        refreshAllData(sync) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(services_assign["a" /* AddonModAssign */].invalidateAssignmentData(this.courseId));
                if (this.assign) {
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateAllSubmissionData(this.assign.id));
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateAssignmentUserMappingsData(this.assign.id));
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateAssignmentGradesData(this.assign.id));
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateListParticipantsData(this.assign.id));
                }
                try {
                    yield Promise.all(promises);
                }
                finally {
                    this.fetchAssignment(sync);
                }
            });
        }
        /**
         * Refresh the list.
         *
         * @param refresher Refresher.
         */
        refreshList(refresher) {
            this.refreshAllData(true).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a, _b;
            (_a = this.gradedObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.syncObserver) === null || _b === void 0 ? void 0 : _b.off();
            this.submissions.destroy();
        }
    }
    AddonModAssignSubmissionListPage.ɵfac = function AddonModAssignSubmissionListPage_Factory(t) { return new (t || AddonModAssignSubmissionListPage)(); };
    AddonModAssignSubmissionListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModAssignSubmissionListPage, selectors: [["page-addon-mod-assign-submission-list"]], viewQuery: function AddonModAssignSubmissionListPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 19, vars: 15, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["icon", "fas-file-signature", 3, "message", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap core-warning-card", 4, "ngIf"], ["icon", "fas-file-signature", 3, "message"], [1, "ion-text-wrap"], ["id", "addon-assign-groupslabel", 4, "ngIf"], ["aria-labelledby", "addon-assign-groupslabel", "interface", "action-sheet", "slot", "end", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "addon-assign-groupslabel"], [3, "value"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["slot", "start", 3, "user", "linkProfile"], ["class", "item-heading", 4, "ngIf"], [4, "ngIf"], ["class", "ion-text-center ion-text-wrap", 3, "color", 4, "ngIf"], [1, "item-heading"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "ion-text-center", "ion-text-wrap", 3, "color"], [1, "ion-text-wrap", "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"]], template: function AddonModAssignSubmissionListPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModAssignSubmissionListPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshList($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 6);
                core["nd" /* ɵɵtemplate */](14, AddonModAssignSubmissionListPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 7);
                core["Ec" /* ɵɵelementStart */](15, "ion-list");
                core["nd" /* ɵɵtemplate */](16, AddonModAssignSubmissionListPage_ion_item_16_Template, 6, 9, "ion-item", 8);
                core["nd" /* ɵɵtemplate */](17, AddonModAssignSubmissionListPage_ng_container_17_Template, 9, 8, "ng-container", 9);
                core["nd" /* ɵɵtemplate */](18, AddonModAssignSubmissionListPage_ion_card_18_Template, 6, 3, "ion-card", 10);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.moduleId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded || !ctx.submissions.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 13, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded && ctx.submissions.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.submissions || ctx.submissions.empty);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.submissions.items);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.haveAllParticipants);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], empty_box["a" /* CoreEmptyBoxComponent */], ionic_angular["H" /* IonItem */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], ionic_angular["N" /* IonLabel */], ionic_angular["lb" /* IonSelectOption */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["j" /* IonBadge */], ionic_angular["m" /* IonCard */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModAssignSubmissionListPage;
})();
/**
 * Helper class to manage submissions.
 */
class submission_list_page_AddonModAssignSubmissionListManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent) {
        super(pageComponent);
    }
    /**
     * @inheritdoc
     */
    getItemPath(submission) {
        return String(submission.submitid);
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(submission) {
        return {
            blindId: submission.blindid,
        };
    }
}

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/addons/mod/assign/components/submission/submission.ts
var submission_submission = __webpack_require__("q/1B");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// CONCATENATED MODULE: ./src/addons/mod/assign/pages/submission-review/submission-review.ts

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
 * Page that displays a submission.
 */
let submission_review_AddonModAssignSubmissionReviewPage = /*@__PURE__*/ (() => {
    class AddonModAssignSubmissionReviewPage {
        constructor(route) {
            this.route = route;
            this.title = ''; // Title to display.
            this.loaded = false; // Whether data has been loaded.
            this.canSaveGrades = false; // Whether the user can save grades.
            this.blindMarking = false; // Whether it uses blind marking.
            this.forceLeave = false; // To allow leaving the page without checking for changes.
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.route.queryParams.subscribe((params) => {
                this.moduleId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.submitId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('submitId') || 0;
                this.blindId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('blindId', { params });
                this.fetchSubmission().finally(() => {
                    this.loaded = true;
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
                if (!this.submissionComponent || this.forceLeave) {
                    return true;
                }
                // Check if data has changed.
                return this.submissionComponent.canLeave();
            });
        }
        /**
         * User entered the page.
         */
        ionViewDidEnter() {
            var _a;
            (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
        }
        /**
         * User left the page.
         */
        ionViewDidLeave() {
            var _a;
            (_a = this.submissionComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
        }
        /**
         * Get the submission.
         *
         * @return Promise resolved when done.
         */
        fetchSubmission() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.assign = yield services_assign["a" /* AddonModAssign */].getAssignment(this.courseId, this.moduleId);
                this.title = this.assign.name;
                this.blindMarking = !!this.assign.blindmarking && !this.assign.revealidentities;
                const gradeInfo = yield course["a" /* CoreCourse */].getModuleBasicGradeInfo(this.moduleId);
                if (!gradeInfo) {
                    return;
                }
                // Grades can be saved if simple grading.
                if (gradeInfo.advancedgrading && gradeInfo.advancedgrading[0] &&
                    typeof gradeInfo.advancedgrading[0].method != 'undefined') {
                    const method = gradeInfo.advancedgrading[0].method || 'simple';
                    this.canSaveGrades = method == 'simple';
                }
                else {
                    this.canSaveGrades = true;
                }
            });
        }
        /**
         * Refresh all the data.
         *
         * @return Promise resolved when done.
         */
        refreshAllData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(services_assign["a" /* AddonModAssign */].invalidateAssignmentData(this.courseId));
                if (this.assign) {
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateSubmissionData(this.assign.id));
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateAssignmentUserMappingsData(this.assign.id));
                    promises.push(services_assign["a" /* AddonModAssign */].invalidateSubmissionStatusData(this.assign.id, this.submitId, undefined, this.blindMarking));
                }
                try {
                    yield Promise.all(promises);
                }
                finally {
                    this.submissionComponent && this.submissionComponent.invalidateAndRefresh(true);
                    yield this.fetchSubmission();
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        refreshSubmission(refresher) {
            this.refreshAllData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Submit a grade and feedback.
         */
        submitGrade() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.submissionComponent) {
                    return;
                }
                try {
                    yield this.submissionComponent.submitGrade();
                    // Grade submitted, leave the view if not in tablet.
                    if (!screen["a" /* CoreScreen */].isTablet) {
                        this.forceLeave = true;
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.error', true);
                }
            });
        }
    }
    AddonModAssignSubmissionReviewPage.ɵfac = function AddonModAssignSubmissionReviewPage_Factory(t) { return new (t || AddonModAssignSubmissionReviewPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonModAssignSubmissionReviewPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModAssignSubmissionReviewPage, selectors: [["page-addon-mod-assign-submission-review"]], viewQuery: function AddonModAssignSubmissionReviewPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](submission_submission["a" /* AddonModAssignSubmissionComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.submissionComponent = _t.first);
            }
        }, decls: 18, vars: 19, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["fill", "clear", 3, "hidden", "click"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [3, "courseId", "moduleId", "submitId", "blindId"]], template: function AddonModAssignSubmissionReviewPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "core-navbar-buttons", 3);
                core["Ec" /* ɵɵelementStart */](9, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function AddonModAssignSubmissionReviewPage_Template_ion_button_click_9_listener() { return ctx.submitGrade(); });
                core["pd" /* ɵɵtext */](10);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "ion-content");
                core["Ec" /* ɵɵelementStart */](13, "ion-refresher", 5);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModAssignSubmissionReviewPage_Template_ion_refresher_ionRefresh_13_listener($event) { return ctx.refreshSubmission($event.target); });
                core["zc" /* ɵɵelement */](14, "ion-refresher-content", 6);
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "core-loading", 7);
                core["zc" /* ɵɵelement */](17, "addon-mod-assign-submission", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 13, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.moduleId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.canSaveGrades);
                core["lc" /* ɵɵadvance */](1);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](11, 15, "core.done"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](15, 17, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("courseId", ctx.courseId)("moduleId", ctx.moduleId)("submitId", ctx.submitId)("blindId", ctx.blindId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], submission_submission["a" /* AddonModAssignSubmissionComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModAssignSubmissionReviewPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/assign/assign-lazy.module.ts
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













const commonRoutes = [
    {
        path: ':courseId/:cmId',
        component: index_page_AddonModAssignIndexPage,
    },
    {
        path: ':courseId/:cmId/edit',
        component: edit_AddonModAssignEditPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: submission_list_page_AddonModAssignSubmissionListPage,
    },
    {
        path: ':courseId/:cmId/submission/:submitId',
        component: submission_review_AddonModAssignSubmissionReviewPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/submission',
        component: submission_list_page_AddonModAssignSubmissionListPage,
        children: [
            {
                path: ':submitId',
                component: submission_review_AddonModAssignSubmissionReviewPage,
                canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let assign_lazy_module_AddonModAssignLazyModule = /*@__PURE__*/ (() => {
    class AddonModAssignLazyModule {
    }
    AddonModAssignLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModAssignLazyModule });
    AddonModAssignLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModAssignLazyModule_Factory(t) { return new (t || AddonModAssignLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModAssignComponentsModule */],
            ]] });
    return AddonModAssignLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](assign_lazy_module_AddonModAssignLazyModule, { declarations: [index_page_AddonModAssignIndexPage,
            submission_list_page_AddonModAssignSubmissionListPage,
            submission_review_AddonModAssignSubmissionReviewPage,
            edit_AddonModAssignEditPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModAssignComponentsModule */]] });
})();


/***/ })

}]);