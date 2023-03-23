(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ "QeBL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonNotesLazyModule", function() { return /* binding */ notes_lazy_module_AddonNotesLazyModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/features/comments/components/components.module.ts
var components_module = __webpack_require__("rGK3");

// EXTERNAL MODULE: ./src/core/features/tag/components/components.module.ts
var components_components_module = __webpack_require__("yQkb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/addons/notes/components/add/add-modal.ts
var add_modal = __webpack_require__("mYSf");

// EXTERNAL MODULE: ./src/addons/notes/services/notes.ts
var notes = __webpack_require__("yqEV");

// EXTERNAL MODULE: ./src/addons/notes/services/notes-offline.ts
var notes_offline = __webpack_require__("+c6a");

// EXTERNAL MODULE: ./src/addons/notes/services/notes-sync.ts
var notes_sync = __webpack_require__("VS9b");

// EXTERNAL MODULE: ./src/core/components/animations.ts
var animations = __webpack_require__("MUy3");

// EXTERNAL MODULE: ./src/core/features/user/services/user.ts
var user = __webpack_require__("4pns");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

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

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/combobox/combobox.ts
var combobox = __webpack_require__("rf3J");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/directives/fab.ts
var fab = __webpack_require__("yNDK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// CONCATENATED MODULE: ./src/addons/notes/pages/list/list.page.ts

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






























function AddonNotesListPage_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 18);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 19);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r0.user)("courseId", ctx_r0.courseId)("linkProfile", false);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.user.fullname);
    }
}
const _c0 = function (a0) { return { $a: a0 }; };
function AddonNotesListPage_ion_card_34_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["zc" /* ɵɵelement */](2, "ion-icon", 21);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Pc" /* ɵɵpipe */](6, "lowercase");
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](5, 1, "core.thereisdatatosync", core["ad" /* ɵɵpureFunction1 */](8, _c0, core["Qc" /* ɵɵpipeBind1 */](6, 4, core["Qc" /* ɵɵpipeBind1 */](7, 6, "addon.notes.notes")))), " ");
    }
}
function AddonNotesListPage_core_empty_box_35_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 22);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.notes.nonotes"));
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_core_user_avatar_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-user-avatar", 29);
    }
    if (rf & 2) {
        const note_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("user", note_r6)("courseId", ctx_r7.courseId);
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 30);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const note_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](note_r6.userfullname);
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 2);
        core["Ec" /* ɵɵelementStart */](1, "span", 18);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const note_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, note_r6.lastmodified));
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 31);
        core["Ec" /* ɵɵelementStart */](2, "span", 18);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.notsent"), " ");
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 2);
        core["zc" /* ɵɵelement */](1, "ion-icon", 32);
        core["Ec" /* ɵɵelementStart */](2, "span", 18);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 1, "core.deletedoffline"), " ");
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_ion_button_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 33);
        core["Mc" /* ɵɵlistener */]("click", function AddonNotesListPage_ng_container_36_ion_card_1_ion_button_8_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r18); const note_r6 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r17 = core["Oc" /* ɵɵnextContext */](2); return ctx_r17.undoDeleteNote($event, note_r6); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 34);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.restore"));
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_ion_button_9_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 33);
        core["Mc" /* ɵɵlistener */]("click", function AddonNotesListPage_ng_container_36_ion_card_1_ion_button_9_Template_ion_button_click_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r21); const note_r6 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r20 = core["Oc" /* ɵɵnextContext */](2); return ctx_r20.deleteNote($event, note_r6); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 35);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("@coreSlideInOut", "fromRight");
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.delete"));
    }
}
function AddonNotesListPage_ng_container_36_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 18);
        core["nd" /* ɵɵtemplate */](2, AddonNotesListPage_ng_container_36_ion_card_1_core_user_avatar_2_Template, 1, 2, "core-user-avatar", 24);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonNotesListPage_ng_container_36_ion_card_1_p_4_Template, 2, 1, "p", 25);
        core["nd" /* ɵɵtemplate */](5, AddonNotesListPage_ng_container_36_ion_card_1_p_5_Template, 4, 3, "p", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonNotesListPage_ng_container_36_ion_card_1_p_6_Template, 5, 3, "p", 26);
        core["nd" /* ɵɵtemplate */](7, AddonNotesListPage_ng_container_36_ion_card_1_p_7_Template, 5, 3, "p", 26);
        core["nd" /* ɵɵtemplate */](8, AddonNotesListPage_ng_container_36_ion_card_1_ion_button_8_Template, 3, 3, "ion-button", 27);
        core["nd" /* ɵɵtemplate */](9, AddonNotesListPage_ng_container_36_ion_card_1_ion_button_9_Template, 3, 4, "ion-button", 27);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](10, "ion-item", 18);
        core["Ec" /* ɵɵelementStart */](11, "ion-label");
        core["zc" /* ɵɵelement */](12, "core-format-text", 28);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const note_r6 = ctx.$implicit;
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r5.userId);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r5.userId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !note_r6.deleted && !note_r6.offline);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", note_r6.offline);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", note_r6.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", note_r6.deleted);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r5.showDelete && !note_r6.deleted && (ctx_r5.type != "personal" || note_r6.usermodified == ctx_r5.currentUserId));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", note_r6.content)("filter", false);
    }
}
function AddonNotesListPage_ng_container_36_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonNotesListPage_ng_container_36_ion_card_1_Template, 13, 9, "ion-card", 23);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.notes);
    }
}
function AddonNotesListPage_ion_fab_37_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-fab", 36);
        core["Ec" /* ɵɵelementStart */](1, "ion-fab-button", 37);
        core["Mc" /* ɵɵlistener */]("click", function AddonNotesListPage_ion_fab_37_Template_ion_fab_button_click_1_listener($event) { core["gd" /* ɵɵrestoreView */](_r24); const ctx_r23 = core["Oc" /* ɵɵnextContext */](); return ctx_r23.addNote($event); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 38);
        core["Ec" /* ɵɵelementStart */](4, "span", 39);
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.notes.addnewnote"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 4, "addon.notes.addnewnote"));
    }
}
/**
 * Page that displays a list of notes.
 */
let list_page_AddonNotesListPage = /*@__PURE__*/ (() => {
    class AddonNotesListPage {
        constructor() {
            this.type = 'course';
            this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.notes = [];
            this.hasOffline = false;
            this.notesLoaded = false;
            this.showDelete = false;
            this.canDeleteNotes = false;
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.userId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('userId');
            // Refresh data if notes are synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(notes_sync["b" /* AddonNotesSyncProvider */].AUTO_SYNCED, (data) => {
                var _a;
                if (data.courseId == this.courseId) {
                    // Show the sync warnings.
                    this.showSyncWarnings(data.warnings);
                    // Refresh the data.
                    this.notesLoaded = false;
                    this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                    (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                    this.fetchNotes(false);
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            this.currentUserId = sites["b" /* CoreSites */].getCurrentSiteUserId();
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                yield this.fetchNotes(true);
                utils["a" /* CoreUtils */].ignoreErrors(notes["a" /* AddonNotes */].logView(this.courseId, this.userId));
            });
        }
        /**
         * Fetch notes.
         *
         * @param sync When to resync notes.
         * @param showErrors When to display errors or not.
         * @return Promise with the notes.
         */
        fetchNotes(sync = false, showErrors = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (sync) {
                    yield this.syncNotes(showErrors);
                }
                try {
                    const allNotes = yield notes["a" /* AddonNotes */].getNotes(this.courseId, this.userId);
                    const notesList = allNotes[this.type + 'notes'] || [];
                    notesList.forEach((note) => {
                        note.content = utils_text["a" /* CoreTextUtils */].decodeHTML(note.content);
                    });
                    yield notes["a" /* AddonNotes */].setOfflineDeletedNotes(notesList, this.courseId);
                    this.hasOffline = notesList.some((note) => note.offline || note.deleted);
                    if (this.userId) {
                        this.notes = notesList;
                        // Get the user profile to retrieve the user image.
                        this.user = yield user["a" /* CoreUser */].getProfile(this.userId, this.courseId, true);
                    }
                    else {
                        this.notes = yield notes["a" /* AddonNotes */].getNotesUserData(notesList);
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModal(error);
                }
                finally {
                    let canDelete = this.notes && this.notes.length > 0;
                    if (canDelete && this.type == 'personal') {
                        canDelete = !!this.notes.find((note) => note.usermodified == this.currentUserId);
                    }
                    this.canDeleteNotes = canDelete;
                    this.notesLoaded = true;
                    this.refreshIcon = constants["a" /* CoreConstants */].ICON_REFRESH;
                    this.syncIcon = constants["a" /* CoreConstants */].ICON_SYNC;
                }
            });
        }
        /**
         * Refresh notes on PTR.
         *
         * @param showErrors Whether to display errors or not.
         * @param refresher Refresher instance.
         */
        refreshNotes(showErrors, refresher) {
            this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
            notes["a" /* AddonNotes */].invalidateNotes(this.courseId, this.userId).finally(() => {
                this.fetchNotes(true, showErrors).finally(() => {
                    if (refresher) {
                        refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    }
                });
            });
        }
        /**
         * Function called when the type has changed.
         *
         * @param type New type.
         */
        typeChanged(type) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.type = type;
                this.notesLoaded = false;
                this.refreshIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                this.syncIcon = constants["a" /* CoreConstants */].ICON_LOADING;
                yield this.fetchNotes(true);
                utils["a" /* CoreUtils */].ignoreErrors(notes["a" /* AddonNotes */].logView(this.courseId, this.userId));
            });
        }
        /**
         * Add a new Note to user and course.
         *
         * @param e Event.
         */
        addNote(e) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                const modalData = yield dom["a" /* CoreDomUtils */].openModal({
                    component: add_modal["a" /* AddonNotesAddComponent */],
                    componentProps: {
                        userId: this.userId,
                        courseId: this.courseId,
                        type: this.type,
                    },
                });
                if (typeof modalData != 'undefined') {
                    if (modalData.sent && modalData.type) {
                        if (modalData.type != this.type) {
                            this.type = modalData.type;
                            this.notesLoaded = false;
                        }
                        this.refreshNotes(false);
                    }
                    else if (modalData.type && modalData.type != this.type) {
                        this.typeChanged(modalData.type);
                    }
                }
            });
        }
        /**
         * Delete a note.
         *
         * @param e Click event.
         * @param note Note to delete.
         */
        deleteNote(e, note) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('addon.notes.deleteconfirm');
                    try {
                        yield notes["a" /* AddonNotes */].deleteNote(note, this.courseId);
                        this.showDelete = false;
                        this.refreshNotes(false);
                        dom["a" /* CoreDomUtils */].showToast('addon.notes.eventnotedeleted', true, 3000);
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Delete note failed.');
                    }
                }
                catch (_a) {
                    // User cancelled, nothing to do.
                }
            });
        }
        /**
         * Restore a note.
         *
         * @param e Click event.
         * @param note Note to delete.
         */
        undoDeleteNote(e, note) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                e.preventDefault();
                e.stopPropagation();
                yield notes_offline["a" /* AddonNotesOffline */].undoDeleteNote(note.id);
                this.refreshNotes(true);
            });
        }
        /**
         * Toggle delete.
         */
        toggleDelete() {
            this.showDelete = !this.showDelete;
        }
        /**
         * Tries to synchronize course notes.
         *
         * @param showErrors Whether to display errors or not.
         * @return Promise resolved when done.
         */
        syncNotes(showErrors) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield notes_sync["a" /* AddonNotesSync */].syncNotes(this.courseId);
                    this.showSyncWarnings(result.warnings);
                }
                catch (error) {
                    if (showErrors) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.errorsync', true);
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
         * Page destroyed.
         */
        ngOnDestroy() {
            this.syncObserver && this.syncObserver.off();
        }
    }
    AddonNotesListPage.ɵfac = function AddonNotesListPage_Factory(t) { return new (t || AddonNotesListPage)(); };
    AddonNotesListPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonNotesListPage, selectors: [["page-addon-notes-list-page"]], viewQuery: function AddonNotesListPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
            }
        }, decls: 38, vars: 44, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "end", "fill", "clear", 3, "hidden", "click"], ["name", "fas-pen", "slot", "icon-only", "aria-hidden", "true"], [3, "hidden", "priority", "content", "iconAction", "closeOnClick", "action"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "selection", "onChange"], ["value", "site", 1, "ion-text-wrap"], ["value", "course", 1, "ion-text-wrap"], ["value", "personal", 1, "ion-text-wrap"], ["class", "core-warning-card", 4, "ngIf"], ["icon", "fas-receipt", 3, "message", 4, "ngIf"], [4, "ngIf"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end", 4, "ngIf"], [1, "ion-text-wrap"], ["slot", "start", 3, "user", "courseId", "linkProfile"], [1, "core-warning-card"], ["name", "fas-exclamation-triangle", "slot", "start", "aria-hidden", "true"], ["icon", "fas-receipt", 3, "message"], [4, "ngFor", "ngForOf"], ["slot", "start", 3, "user", "courseId", 4, "ngIf"], ["class", "item-heading", 4, "ngIf"], ["slot", "end", 4, "ngIf"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click", 4, "ngIf"], [3, "text", "filter"], ["slot", "start", 3, "user", "courseId"], [1, "item-heading"], ["name", "fas-clock", "aria-hidden", "true"], ["name", "fas-trash", "aria-hidden", "true"], ["slot", "end", "fill", "clear", "color", "danger", 3, "click"], ["name", "fas-undo-alt", "slot", "icon-only", "aria-hidden", "true"], ["name", "fas-trash", "slot", "icon-only", "aria-hidden", "true"], ["slot", "fixed", "core-fab", "", "vertical", "bottom", "horizontal", "end"], [3, "click"], ["name", "fas-plus", "aria-hidden", "true"], [1, "sr-only"]], template: function AddonNotesListPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-navbar-buttons", 2);
                core["Ec" /* ɵɵelementStart */](10, "ion-button", 3);
                core["Mc" /* ɵɵlistener */]("click", function AddonNotesListPage_Template_ion_button_click_10_listener() { return ctx.toggleDelete(); });
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["zc" /* ɵɵelement */](12, "ion-icon", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-context-menu");
                core["Ec" /* ɵɵelementStart */](14, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function AddonNotesListPage_Template_core_context_menu_item_action_14_listener() { return ctx.refreshNotes(false); });
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](16, "core-context-menu-item", 5);
                core["Mc" /* ɵɵlistener */]("action", function AddonNotesListPage_Template_core_context_menu_item_action_16_listener() { return ctx.refreshNotes(true); });
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "ion-content");
                core["Ec" /* ɵɵelementStart */](19, "ion-refresher", 6);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonNotesListPage_Template_ion_refresher_ionRefresh_19_listener($event) { return ctx.refreshNotes(false, $event.target); });
                core["zc" /* ɵɵelement */](20, "ion-refresher-content", 7);
                core["Pc" /* ɵɵpipe */](21, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](22, "core-loading", 8);
                core["nd" /* ɵɵtemplate */](23, AddonNotesListPage_ion_item_23_Template, 5, 4, "ion-item", 9);
                core["Ec" /* ɵɵelementStart */](24, "core-combobox", 10);
                core["Mc" /* ɵɵlistener */]("onChange", function AddonNotesListPage_Template_core_combobox_onChange_24_listener($event) { return ctx.typeChanged($event); });
                core["Ec" /* ɵɵelementStart */](25, "ion-select-option", 11);
                core["pd" /* ɵɵtext */](26);
                core["Pc" /* ɵɵpipe */](27, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](28, "ion-select-option", 12);
                core["pd" /* ɵɵtext */](29);
                core["Pc" /* ɵɵpipe */](30, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](31, "ion-select-option", 13);
                core["pd" /* ɵɵtext */](32);
                core["Pc" /* ɵɵpipe */](33, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](34, AddonNotesListPage_ion_card_34_Template, 8, 10, "ion-card", 14);
                core["nd" /* ɵɵtemplate */](35, AddonNotesListPage_core_empty_box_35_Template, 2, 3, "core-empty-box", 15);
                core["nd" /* ɵɵtemplate */](36, AddonNotesListPage_ng_container_36_Template, 2, 1, "ng-container", 16);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](37, AddonNotesListPage_ion_fab_37_Template, 7, 6, "ion-fab", 17);
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 26, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 28, "addon.notes.notes"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.canDeleteNotes);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](11, 30, "core.toggledelete"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("hidden", !(ctx.notesLoaded && !ctx.hasOffline))("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](15, 32, "core.refresh"))("iconAction", ctx.refreshIcon)("closeOnClick", true);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !(ctx.notesLoaded && ctx.hasOffline))("priority", 100)("content", core["Qc" /* ɵɵpipeBind1 */](17, 34, "core.settings.synchronizenow"))("iconAction", ctx.syncIcon)("closeOnClick", false);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.notesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](21, 36, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.notesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.user);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("selection", ctx.type);
                core["lc" /* ɵɵadvance */](2);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](27, 38, "addon.notes.sitenotes"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](30, 40, "addon.notes.coursenotes"), " ");
                core["lc" /* ɵɵadvance */](3);
                core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](33, 42, "addon.notes.personalnotes"), " ");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.hasOffline);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.notes && ctx.notes.length == 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.notes && ctx.notes.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.userId && ctx.notesLoaded);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu["a" /* CoreContextMenuComponent */], context_menu_item["a" /* CoreContextMenuItemComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], combobox["a" /* CoreComboboxComponent */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["H" /* IonItem */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], ionic_angular["m" /* IonCard */], empty_box["a" /* CoreEmptyBoxComponent */], common["s" /* NgForOf */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["w" /* IonFab */], fab["a" /* CoreFabDirective */], ionic_angular["x" /* IonFabButton */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], common["p" /* LowerCasePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */]], encapsulation: 2, data: { animation: [animations["a" /* CoreAnimations */].SLIDE_IN_OUT] } });
    return AddonNotesListPage;
})();

// CONCATENATED MODULE: ./src/addons/notes/notes-lazy.module.ts
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
        component: list_page_AddonNotesListPage,
    },
];
let notes_lazy_module_AddonNotesLazyModule = /*@__PURE__*/ (() => {
    class AddonNotesLazyModule {
    }
    AddonNotesLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonNotesLazyModule });
    AddonNotesLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonNotesLazyModule_Factory(t) { return new (t || AddonNotesLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCommentsComponentsModule */],
                components_components_module["a" /* CoreTagComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonNotesLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](notes_lazy_module_AddonNotesLazyModule, { declarations: [list_page_AddonNotesListPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCommentsComponentsModule */],
            components_components_module["a" /* CoreTagComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);