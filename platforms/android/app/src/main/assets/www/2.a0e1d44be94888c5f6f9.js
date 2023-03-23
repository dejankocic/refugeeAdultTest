(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "+uFs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModGlossaryEditPageModule", function() { return /* binding */ edit_module_AddonModGlossaryEditPageModule; });

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader.ts
var fileuploader = __webpack_require__("hSQQ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

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

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./src/addons/mod/glossary/services/glossary.ts
var glossary = __webpack_require__("gjmY");

// EXTERNAL MODULE: ./src/addons/mod/glossary/services/glossary-helper.ts
var glossary_helper = __webpack_require__("BZ3K");

// EXTERNAL MODULE: ./src/addons/mod/glossary/services/glossary-offline.ts
var glossary_offline = __webpack_require__("7DS8");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// EXTERNAL MODULE: ./src/core/directives/auto-rows.ts
var auto_rows = __webpack_require__("d0nH");

// EXTERNAL MODULE: ./src/core/components/attachments/attachments.ts
var attachments = __webpack_require__("M9y5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/glossary/pages/edit/edit.ts

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
function AddonModGlossaryEditPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["zc" /* ɵɵelement */](1, "core-format-text", 4);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.glossary.name)("contextInstanceId", ctx_r0.cmId)("courseId", ctx_r0.courseId);
    }
}
function AddonModGlossaryEditPage_form_8_ion_item_14_ion_select_option_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 16);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const category_r6 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", category_r6.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", category_r6.name, " ");
    }
}
const _c1 = function (a0) { return { header: a0 }; };
function AddonModGlossaryEditPage_form_8_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 13);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 14);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_ion_item_14_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](2); return ctx_r7.options.categories = $event; });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["nd" /* ɵɵtemplate */](7, AddonModGlossaryEditPage_form_8_ion_item_14_ion_select_option_7_Template, 2, 2, "ion-select-option", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 5, "addon.mod_glossary.categories"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r3.options.categories)("placeholder", core["Qc" /* ɵɵpipeBind1 */](5, 7, "addon.mod_glossary.categories"))("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](11, _c1, core["Qc" /* ɵɵpipeBind1 */](6, 9, "addon.mod_glossary.categories")));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.categories);
    }
}
function AddonModGlossaryEditPage_form_8_ng_container_26_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-item", 17);
        core["Ec" /* ɵɵelementStart */](7, "ion-label");
        core["pd" /* ɵɵtext */](8);
        core["Pc" /* ɵɵpipe */](9, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "ion-toggle", 18);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_ng_container_26_Template_ion_toggle_ngModelChange_10_listener($event) { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](2); return ctx_r9.options.usedynalink = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](11, "ion-item", 17);
        core["Ec" /* ɵɵelementStart */](12, "ion-label");
        core["pd" /* ɵɵtext */](13);
        core["Pc" /* ɵɵpipe */](14, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](15, "ion-toggle", 19);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_ng_container_26_Template_ion_toggle_ngModelChange_15_listener($event) { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r11 = core["Oc" /* ɵɵnextContext */](2); return ctx_r11.options.casesensitive = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](16, "ion-item", 17);
        core["Ec" /* ɵɵelementStart */](17, "ion-label");
        core["pd" /* ɵɵtext */](18);
        core["Pc" /* ɵɵpipe */](19, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-toggle", 20);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_ng_container_26_Template_ion_toggle_ngModelChange_20_listener($event) { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r12 = core["Oc" /* ɵɵnextContext */](2); return ctx_r12.options.fullmatch = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 9, "addon.mod_glossary.linking"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](9, 11, "addon.mod_glossary.entryusedynalink"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r4.options.usedynalink);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](14, 13, "addon.mod_glossary.casesensitive"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r4.options.usedynalink)("ngModel", ctx_r4.options.casesensitive);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](19, 15, "addon.mod_glossary.fullmatch"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r4.options.usedynalink)("ngModel", ctx_r4.options.fullmatch);
    }
}
function AddonModGlossaryEditPage_form_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", null, 5);
        core["Ec" /* ɵɵelementStart */](2, "ion-item");
        core["Ec" /* ɵɵelementStart */](3, "ion-label", 6);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-input", 7);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_Template_ion_input_ngModelChange_6_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](); return ctx_r13.entry.concept = $event; });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-item");
        core["Ec" /* ɵɵelementStart */](9, "ion-label", 6);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "core-rich-text-editor", 8);
        core["Mc" /* ɵɵlistener */]("contentChanged", function AddonModGlossaryEditPage_form_8_Template_core_rich_text_editor_contentChanged_12_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r15 = core["Oc" /* ɵɵnextContext */](); return ctx_r15.onDefinitionChange($event); });
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](14, AddonModGlossaryEditPage_form_8_ion_item_14_Template, 8, 13, "ion-item", 2);
        core["Ec" /* ɵɵelementStart */](15, "ion-item");
        core["Ec" /* ɵɵelementStart */](16, "ion-label", 9);
        core["pd" /* ɵɵtext */](17);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](19, "ion-textarea", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModGlossaryEditPage_form_8_Template_ion_textarea_ngModelChange_19_listener($event) { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r16 = core["Oc" /* ɵɵnextContext */](); return ctx_r16.options.aliases = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](20, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](21, "ion-label");
        core["Ec" /* ɵɵelementStart */](22, "h2");
        core["pd" /* ɵɵtext */](23);
        core["Pc" /* ɵɵpipe */](24, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](25, "core-attachments", 11);
        core["nd" /* ɵɵtemplate */](26, AddonModGlossaryEditPage_form_8_ng_container_26_Template, 21, 17, "ng-container", 2);
        core["Ec" /* ɵɵelementStart */](27, "ion-button", 12);
        core["Mc" /* ɵɵlistener */]("click", function AddonModGlossaryEditPage_form_8_Template_ion_button_click_27_listener() { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r17 = core["Oc" /* ɵɵnextContext */](); return ctx_r17.save(); });
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 23, "addon.mod_glossary.concept"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("placeholder", core["Qc" /* ɵɵpipeBind1 */](7, 25, "addon.mod_glossary.concept"))("ngModel", ctx_r1.entry.concept);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 27, "addon.mod_glossary.definition"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r1.definitionControl)("placeholder", core["Qc" /* ɵɵpipeBind1 */](13, 29, "addon.mod_glossary.definition"))("component", ctx_r1.component)("componentId", ctx_r1.cmId)("autoSave", true)("contextInstanceId", ctx_r1.cmId)("draftExtraParams", ctx_r1.editorExtraParams);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.categories.length > 0);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](18, 31, "addon.mod_glossary.aliases"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.options.aliases)("core-auto-rows", ctx_r1.options.aliases);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](24, 33, "addon.mod_glossary.attachment"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("files", ctx_r1.attachments)("component", ctx_r1.component)("componentId", ctx_r1.glossary.coursemodule)("allowOffline", true);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.glossary.usedynalink);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("disabled", !ctx_r1.entry.concept || !ctx_r1.entry.definition);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](29, 35, "core.save"), " ");
    }
}
/**
 * Page that displays the edit form.
 */
let edit_AddonModGlossaryEditPage = /*@__PURE__*/ (() => {
    class AddonModGlossaryEditPage {
        constructor(splitView) {
            this.splitView = splitView;
            this.component = glossary["b" /* AddonModGlossaryProvider */].COMPONENT;
            this.loaded = false;
            this.attachments = [];
            this.definitionControl = new fesm2015_forms["g" /* FormControl */]();
            this.categories = [];
            this.editorExtraParams = {};
            this.entry = {
                concept: '',
                definition: '',
                timecreated: 0,
            };
            this.options = {
                categories: [],
                aliases: '',
                usedynalink: false,
                casesensitive: false,
                fullmatch: false,
            };
            this.isDestroyed = false;
            this.saved = false;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.timecreated = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('timecreated');
            this.concept = services_navigator["a" /* CoreNavigator */].getRouteParam('concept');
            this.editorExtraParams.timecreated = this.timecreated;
            this.fetchData();
        }
        /**
         * Fetch required data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.glossary = yield glossary["a" /* AddonModGlossary */].getGlossary(this.courseId, this.cmId);
                    if (this.timecreated > 0) {
                        yield this.loadOfflineData();
                    }
                    this.categories = yield glossary["a" /* AddonModGlossary */].getAllCategories(this.glossary.id, {
                        cmId: this.cmId,
                    });
                    this.loaded = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingglossary', true);
                    services_navigator["a" /* CoreNavigator */].back();
                }
            });
        }
        /**
         * Load offline data when editing an offline entry.
         *
         * @return Promise resolved when done.
         */
        loadOfflineData() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const entry = yield glossary_offline["a" /* AddonModGlossaryOffline */].getNewEntry(this.glossary.id, this.concept || '', this.timecreated);
                this.entry.concept = entry.concept || '';
                this.entry.definition = entry.definition || '';
                this.entry.timecreated = entry.timecreated;
                this.originalData = {
                    concept: this.entry.concept,
                    definition: this.entry.definition,
                    files: [],
                    timecreated: entry.timecreated,
                };
                if (entry.options) {
                    this.options.categories = (entry.options.categories && entry.options.categories.split(',')) || [];
                    this.options.aliases = entry.options.aliases || '';
                    this.options.usedynalink = !!entry.options.usedynalink;
                    if (this.options.usedynalink) {
                        this.options.casesensitive = !!entry.options.casesensitive;
                        this.options.fullmatch = !!entry.options.fullmatch;
                    }
                }
                // Treat offline attachments if any.
                if ((_a = entry.attachments) === null || _a === void 0 ? void 0 : _a.offline) {
                    this.attachments = yield glossary_helper["a" /* AddonModGlossaryHelper */].getStoredFiles(this.glossary.id, entry.concept, entry.timecreated);
                    this.originalData.files = this.attachments.slice();
                }
                this.definitionControl.setValue(this.entry.definition);
            });
        }
        /**
         * Reset the form data.
         */
        resetForm() {
            this.entry.concept = '';
            this.entry.definition = '';
            this.entry.timecreated = 0;
            this.originalData = undefined;
            this.options.categories = [];
            this.options.aliases = '';
            this.options.usedynalink = false;
            this.options.casesensitive = false;
            this.options.fullmatch = false;
            this.attachments.length = 0; // Empty the array.
            this.definitionControl.setValue('');
        }
        /**
         * Definition changed.
         *
         * @param text The new text.
         */
        onDefinitionChange(text) {
            this.entry.definition = text;
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.saved) {
                    return true;
                }
                if (glossary_helper["a" /* AddonModGlossaryHelper */].hasEntryDataChanged(this.entry, this.attachments, this.originalData)) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                // Delete the local files from the tmp folder.
                fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.attachments);
                singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                return true;
            });
        }
        /**
         * Save the entry.
         */
        save() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let definition = this.entry.definition;
                let entryId;
                const timecreated = this.entry.timecreated || Date.now();
                if (!this.entry.concept || !definition) {
                    dom["a" /* CoreDomUtils */].showErrorModal('addon.mod_glossary.fillfields', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                definition = utils_text["a" /* CoreTextUtils */].formatHtmlLines(definition);
                try {
                    // Upload attachments first if any.
                    const { saveOffline, attachmentsResult } = yield this.uploadAttachments(timecreated);
                    const options = {
                        aliases: this.options.aliases,
                        categories: this.options.categories.join(','),
                    };
                    if (this.glossary.usedynalink) {
                        options.usedynalink = this.options.usedynalink ? 1 : 0;
                        if (this.options.usedynalink) {
                            options.casesensitive = this.options.casesensitive ? 1 : 0;
                            options.fullmatch = this.options.fullmatch ? 1 : 0;
                        }
                    }
                    if (saveOffline) {
                        if (this.entry && !this.glossary.allowduplicatedentries) {
                            // Check if the entry is duplicated in online or offline mode.
                            const isUsed = yield glossary["a" /* AddonModGlossary */].isConceptUsed(this.glossary.id, this.entry.concept, {
                                timeCreated: this.entry.timecreated,
                                cmId: this.cmId,
                            });
                            if (isUsed) {
                                // There's a entry with same name, reject with error message.
                                throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_glossary.errconceptalreadyexists'));
                            }
                        }
                        // Save entry in offline.
                        yield glossary_offline["a" /* AddonModGlossaryOffline */].addNewEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, timecreated, undefined, undefined, this.entry);
                    }
                    else {
                        // Try to send it to server.
                        // Don't allow offline if there are attachments since they were uploaded fine.
                        yield glossary["a" /* AddonModGlossary */].addEntry(this.glossary.id, this.entry.concept, definition, this.courseId, options, attachmentsResult, {
                            timeCreated: timecreated,
                            discardEntry: this.entry,
                            allowOffline: !this.attachments.length,
                            checkDuplicates: !this.glossary.allowduplicatedentries,
                        });
                    }
                    // Delete the local files from the tmp folder.
                    fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.attachments);
                    if (entryId) {
                        // Data sent to server, delete stored files (if any).
                        glossary_helper["a" /* AddonModGlossaryHelper */].deleteStoredFiles(this.glossary.id, this.entry.concept, timecreated);
                        events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'glossary' });
                    }
                    events["b" /* CoreEvents */].trigger(glossary["b" /* AddonModGlossaryProvider */].ADD_ENTRY_EVENT, {
                        glossaryId: this.glossary.id,
                        entryId: entryId,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, !!entryId, sites["b" /* CoreSites */].getCurrentSiteId());
                    if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
                        if (this.timecreated > 0) {
                            // Reload the data.
                            yield this.loadOfflineData();
                        }
                        else {
                            // Empty form.
                            this.resetForm();
                        }
                    }
                    else {
                        this.saved = true;
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_glossary.cannoteditentry', true);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Upload entry attachments if any.
         *
         * @param timecreated Entry's timecreated.
         * @return Promise resolved when done.
         */
        uploadAttachments(timecreated) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.attachments.length) {
                    return {
                        saveOffline: false,
                    };
                }
                try {
                    const attachmentsResult = yield fileuploader["a" /* CoreFileUploader */].uploadOrReuploadFiles(this.attachments, glossary["b" /* AddonModGlossaryProvider */].COMPONENT, this.glossary.id);
                    return {
                        saveOffline: false,
                        attachmentsResult,
                    };
                }
                catch (_a) {
                    // Cannot upload them in online, save them in offline.
                    const attachmentsResult = yield glossary_helper["a" /* AddonModGlossaryHelper */].storeFiles(this.glossary.id, this.entry.concept, timecreated, this.attachments);
                    return {
                        saveOffline: true,
                        attachmentsResult,
                    };
                }
            });
        }
    }
    AddonModGlossaryEditPage.ɵfac = function AddonModGlossaryEditPage_Factory(t) { return new (t || AddonModGlossaryEditPage)(core["yc" /* ɵɵdirectiveInject */](split_view["a" /* CoreSplitViewComponent */], 8)); };
    AddonModGlossaryEditPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModGlossaryEditPage, selectors: [["page-addon-mod-glossary-edit"]], viewQuery: function AddonModGlossaryEditPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
            }
        }, decls: 9, vars: 6, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], [3, "hideUntil"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["editFormEl", ""], ["position", "stacked"], ["type", "text", "name", "concept", 3, "placeholder", "ngModel", "ngModelChange"], ["name", "addon_mod_glossary_edit", "contextLevel", "module", "elementId", "definition_editor", 3, "control", "placeholder", "component", "componentId", "autoSave", "contextInstanceId", "draftExtraParams", "contentChanged"], ["position", "stacked", "id", "addon-mod-glossary-aliases-label"], ["rows", "1", "aria-labelledby", "addon-mod-glossary-aliases-label", "name", "aliases", 3, "ngModel", "core-auto-rows", "ngModelChange"], [3, "files", "component", "componentId", "allowOffline"], ["expand", "block", 1, "ion-margin", 3, "disabled", "click"], ["position", "stacked", "id", "addon-mod-glossary-categories-label"], ["multiple", "true", "aria-labelledby", "addon-mod-glossary-categories-label", "interface", "action-sheet", "name", "categories", 3, "ngModel", "placeholder", "interfaceOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ion-text-wrap"], ["name", "usedynalink", 3, "ngModel", "ngModelChange"], ["name", "casesensitive", 3, "disabled", "ngModel", "ngModelChange"], ["name", "fullmatch", 3, "disabled", "ngModel", "ngModelChange"]], template: function AddonModGlossaryEditPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonModGlossaryEditPage_h1_5_Template, 2, 3, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "core-loading", 3);
                core["nd" /* ɵɵtemplate */](8, AddonModGlossaryEditPage_form_8_Template, 30, 37, "form", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 4, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.glossary);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.glossary);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["t" /* NgForm */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["vb" /* IonTextarea */], auto_rows["a" /* CoreAutoRowsDirective */], ionic_angular["I" /* IonItemDivider */], attachments["a" /* CoreAttachmentsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModGlossaryEditPage;
})();

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// CONCATENATED MODULE: ./src/addons/mod/glossary/pages/edit/edit.module.ts
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
        component: edit_AddonModGlossaryEditPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    }];
let edit_module_AddonModGlossaryEditPageModule = /*@__PURE__*/ (() => {
    class AddonModGlossaryEditPageModule {
    }
    AddonModGlossaryEditPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModGlossaryEditPageModule });
    AddonModGlossaryEditPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModGlossaryEditPageModule_Factory(t) { return new (t || AddonModGlossaryEditPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreEditorComponentsModule */],
            ]] });
    return AddonModGlossaryEditPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](edit_module_AddonModGlossaryEditPageModule, { declarations: [edit_AddonModGlossaryEditPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreEditorComponentsModule */]] });
})();


/***/ })

}]);