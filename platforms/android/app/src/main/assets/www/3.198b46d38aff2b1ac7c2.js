(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "/g6Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntryPageModule", function() { return /* binding */ entry_module_AddonModGlossaryEntryPageModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/comments/components/comments/comments.ts
var comments = __webpack_require__("1Rj0");

// EXTERNAL MODULE: ./src/core/features/comments/services/comments.ts
var services_comments = __webpack_require__("5pQw");

// EXTERNAL MODULE: ./src/core/features/tag/services/tag.ts
var tag = __webpack_require__("kWmn");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/addons/mod/glossary/services/glossary.ts
var glossary = __webpack_require__("gjmY");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/file/file.ts
var file = __webpack_require__("5450");

// EXTERNAL MODULE: ./src/core/features/tag/components/list/list.ts
var list = __webpack_require__("vSVd");

// EXTERNAL MODULE: ./src/core/features/rating/components/rate/rate.ts
var rate = __webpack_require__("fY5/");

// EXTERNAL MODULE: ./src/core/features/rating/components/aggregate/aggregate.ts
var aggregate = __webpack_require__("OoUD");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/date-day-or-time.ts
var date_day_or_time = __webpack_require__("Cg42");

// CONCATENATED MODULE: ./src/addons/mod/glossary/pages/entry/entry.ts

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





















function AddonModGlossaryEntryPage_h1_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h1");
        core["zc" /* ɵɵelement */](1, "core-format-text", 7);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.entry.concept)("contextInstanceId", ctx_r0.componentId)("courseId", ctx_r0.courseId);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_1_ion_note_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 17);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r11.entry.timemodified));
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 15);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["zc" /* ɵɵelement */](4, "core-format-text", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](7, AddonModGlossaryEntryPage_ng_container_11_ion_item_1_ion_note_7_Template, 3, 3, "ion-note", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", ctx_r3.entry);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r3.entry.concept)("contextInstanceId", ctx_r3.componentId)("courseId", ctx_r3.courseId);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r3.entry.userfullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.showDate);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_2_ion_note_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-note", 17);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreDateDayOrTime");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r12.entry.timemodified));
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p", 18);
        core["zc" /* ɵɵelement */](3, "core-format-text", 19);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](4, AddonModGlossaryEntryPage_ng_container_11_ion_item_2_ion_note_4_Template, 3, 3, "ion-note", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("text", ctx_r4.entry.concept)("contextInstanceId", ctx_r4.componentId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.showDate);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_div_6_core_file_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-file", 22);
    }
    if (rf & 2) {
        const file_r14 = ctx.$implicit;
        const ctx_r13 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("file", file_r14)("component", ctx_r13.component)("componentId", ctx_r13.componentId);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_div_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 20);
        core["nd" /* ɵɵtemplate */](1, AddonModGlossaryEntryPage_ng_container_11_div_6_core_file_1_Template, 1, 3, "core-file", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r5.entry.attachments);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "div", 0);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["zc" /* ɵɵelement */](5, "core-tag-list", 23);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["rd" /* ɵɵtextInterpolate1 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 2, "core.tag.tags"), ":");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("tags", ctx_r6.entry.tags);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["Ec" /* ɵɵelementStart */](3, "em");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "addon.mod_glossary.entrypendingapproval"));
    }
}
function AddonModGlossaryEntryPage_ng_container_11_core_comments_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-comments", 24);
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("instanceId", ctx_r8.glossary.coursemodule)("itemId", ctx_r8.entry.id)("courseId", ctx_r8.glossary.course)("showItem", true);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_core_rating_rate_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-rating-rate", 25);
        core["Mc" /* ɵɵlistener */]("onUpdate", function AddonModGlossaryEntryPage_ng_container_11_core_rating_rate_10_Template_core_rating_rate_onUpdate_0_listener() { core["gd" /* ɵɵrestoreView */](_r16); const ctx_r15 = core["Oc" /* ɵɵnextContext */](2); return ctx_r15.ratingUpdated(); });
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("ratingInfo", ctx_r9.ratingInfo)("instanceId", ctx_r9.glossary.coursemodule)("itemId", ctx_r9.entry.id)("itemSetId", 0)("courseId", ctx_r9.glossary.course)("aggregateMethod", ctx_r9.glossary.assessed)("scaleId", ctx_r9.glossary.scale)("userId", ctx_r9.entry.userid);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_core_rating_aggregate_11_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-rating-aggregate", 26);
    }
    if (rf & 2) {
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("ratingInfo", ctx_r10.ratingInfo)("instanceId", ctx_r10.glossary.coursemodule)("itemId", ctx_r10.entry.id)("courseId", ctx_r10.glossary.course)("aggregateMethod", ctx_r10.glossary.assessed)("scaleId", ctx_r10.glossary.scale);
    }
}
function AddonModGlossaryEntryPage_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModGlossaryEntryPage_ng_container_11_ion_item_1_Template, 8, 6, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](2, AddonModGlossaryEntryPage_ng_container_11_ion_item_2_Template, 5, 3, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](3, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["zc" /* ɵɵelement */](5, "core-format-text", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModGlossaryEntryPage_ng_container_11_div_6_Template, 2, 1, "div", 11);
        core["nd" /* ɵɵtemplate */](7, AddonModGlossaryEntryPage_ng_container_11_ion_item_7_Template, 6, 4, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](8, AddonModGlossaryEntryPage_ng_container_11_ion_item_8_Template, 6, 3, "ion-item", 8);
        core["nd" /* ɵɵtemplate */](9, AddonModGlossaryEntryPage_ng_container_11_core_comments_9_Template, 1, 4, "core-comments", 12);
        core["nd" /* ɵɵtemplate */](10, AddonModGlossaryEntryPage_ng_container_11_core_rating_rate_10_Template, 1, 8, "core-rating-rate", 13);
        core["nd" /* ɵɵtemplate */](11, AddonModGlossaryEntryPage_ng_container_11_core_rating_aggregate_11_Template, 1, 6, "core-rating-aggregate", 14);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.showAuthor);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.showAuthor);
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r1.component)("componentId", ctx_r1.componentId)("text", ctx_r1.entry.definition)("contextInstanceId", ctx_r1.componentId)("courseId", ctx_r1.courseId);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.entry.attachment);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.tagsEnabled && ctx_r1.entry && ctx_r1.entry.tags && ctx_r1.entry.tags.length > 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.entry.approved);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.glossary && ctx_r1.glossary.allowcomments && ctx_r1.entry && ctx_r1.entry.id > 0 && ctx_r1.commentsEnabled);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.glossary && ctx_r1.ratingInfo);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.glossary && ctx_r1.ratingInfo);
    }
}
function AddonModGlossaryEntryPage_ion_card_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 27);
        core["Ec" /* ɵɵelementStart */](1, "ion-item");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_glossary.errorloadingentry"));
    }
}
/**
 * Page that displays a glossary entry.
 */
let entry_AddonModGlossaryEntryPage = /*@__PURE__*/ (() => {
    class AddonModGlossaryEntryPage {
        constructor() {
            this.component = glossary["b" /* AddonModGlossaryProvider */].COMPONENT;
            this.loaded = false;
            this.showAuthor = false;
            this.showDate = false;
            this.tagsEnabled = false;
            this.commentsEnabled = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.entryId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('entryId');
                this.tagsEnabled = tag["a" /* CoreTag */].areTagsAvailableInSite();
                this.commentsEnabled = !services_comments["a" /* CoreComments */].areCommentsDisabledInSite();
                try {
                    yield this.fetchEntry();
                    if (!this.glossary) {
                        return;
                    }
                    yield utils["a" /* CoreUtils */].ignoreErrors(glossary["a" /* AddonModGlossary */].logEntryView(this.entryId, this.componentId, this.glossary.name));
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         * @return Promise resolved when done.
         */
        doRefresh(refresher) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (((_a = this.glossary) === null || _a === void 0 ? void 0 : _a.allowcomments) && this.entry && this.entry.id > 0 && this.commentsEnabled && this.comments) {
                    // Refresh comments. Don't add it to promises because we don't want the comments fetch to block the entry fetch.
                    utils["a" /* CoreUtils */].ignoreErrors(this.comments.doRefresh());
                }
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(glossary["a" /* AddonModGlossary */].invalidateEntry(this.entryId));
                    yield this.fetchEntry();
                }
                finally {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                }
            });
        }
        /**
         * Convenience function to get the glossary entry.
         *
         * @return Promise resolved when done.
         */
        fetchEntry() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const result = yield glossary["a" /* AddonModGlossary */].getEntry(this.entryId);
                    this.entry = result.entry;
                    this.ratingInfo = result.ratinginfo;
                    if (this.glossary) {
                        // Glossary already loaded, nothing else to load.
                        return;
                    }
                    // Load the glossary.
                    this.glossary = yield glossary["a" /* AddonModGlossary */].getGlossaryById(this.courseId, this.entry.glossaryid);
                    this.componentId = this.glossary.coursemodule;
                    switch (this.glossary.displayformat) {
                        case 'fullwithauthor':
                        case 'encyclopedia':
                            this.showAuthor = true;
                            this.showDate = true;
                            break;
                        case 'fullwithoutauthor':
                            this.showAuthor = false;
                            this.showDate = true;
                            break;
                        default: // Default, and faq, simple, entrylist, continuous.
                            this.showAuthor = false;
                            this.showDate = false;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingentry', true);
                }
            });
        }
        /**
         * Function called when rating is updated online.
         */
        ratingUpdated() {
            glossary["a" /* AddonModGlossary */].invalidateEntry(this.entryId);
        }
    }
    AddonModGlossaryEntryPage.ɵfac = function AddonModGlossaryEntryPage_Factory(t) { return new (t || AddonModGlossaryEntryPage)(); };
    AddonModGlossaryEntryPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModGlossaryEntryPage, selectors: [["page-addon-mod-glossary-entry"]], viewQuery: function AddonModGlossaryEntryPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](comments["a" /* CoreCommentsCommentsComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.comments = _t.first);
            }
        }, decls: 13, vars: 11, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["class", "core-warning-card", 4, "ngIf"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["class", "ion-text-wrap", 4, "ngIf"], [1, "ion-text-wrap"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"], ["lines", "none", 4, "ngIf"], ["contextLevel", "module", "component", "mod_glossary", "area", "glossary_entry", 3, "instanceId", "itemId", "courseId", "showItem", 4, "ngIf"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "itemSetId", "courseId", "aggregateMethod", "scaleId", "userId", "onUpdate", 4, "ngIf"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "courseId", "aggregateMethod", "scaleId", 4, "ngIf"], ["slot", "start", 3, "user"], ["slot", "end", 4, "ngIf"], ["slot", "end"], [1, "item-heading"], ["contextLevel", "module", 3, "text", "contextInstanceId"], ["lines", "none"], [3, "file", "component", "componentId", 4, "ngFor", "ngForOf"], [3, "file", "component", "componentId"], [3, "tags"], ["contextLevel", "module", "component", "mod_glossary", "area", "glossary_entry", 3, "instanceId", "itemId", "courseId", "showItem"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "itemSetId", "courseId", "aggregateMethod", "scaleId", "userId", "onUpdate"], ["contextLevel", "module", 3, "ratingInfo", "instanceId", "itemId", "courseId", "aggregateMethod", "scaleId"], [1, "core-warning-card"]], template: function AddonModGlossaryEntryPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](5, AddonModGlossaryEntryPage_h1_5_Template, 2, 3, "h1", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](6, "ion-content");
                core["Ec" /* ɵɵelementStart */](7, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModGlossaryEntryPage_Template_ion_refresher_ionRefresh_7_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](8, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](11, AddonModGlossaryEntryPage_ng_container_11_Template, 12, 13, "ng-container", 2);
                core["nd" /* ɵɵtemplate */](12, AddonModGlossaryEntryPage_ion_card_12_Template, 5, 3, "ion-card", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 7, "core.back"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.entry);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](9, 9, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.entry && ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.entry);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["V" /* IonNote */], common["s" /* NgForOf */], file["a" /* CoreFileComponent */], list["a" /* CoreTagListComponent */], comments["a" /* CoreCommentsCommentsComponent */], rate["a" /* CoreRatingRateComponent */], aggregate["a" /* CoreRatingAggregateComponent */], ionic_angular["m" /* IonCard */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], date_day_or_time["a" /* CoreDateDayOrTimePipe */]], encapsulation: 2 });
    return AddonModGlossaryEntryPage;
})();

// EXTERNAL MODULE: ./src/core/features/comments/components/components.module.ts
var components_module = __webpack_require__("rGK3");

// EXTERNAL MODULE: ./src/core/features/rating/components/components.module.ts
var components_components_module = __webpack_require__("JCPi");

// EXTERNAL MODULE: ./src/core/features/tag/components/components.module.ts
var tag_components_components_module = __webpack_require__("yQkb");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// CONCATENATED MODULE: ./src/addons/mod/glossary/pages/entry/entry.module.ts
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
        component: entry_AddonModGlossaryEntryPage,
    }];
let entry_module_AddonModGlossaryEntryPageModule = /*@__PURE__*/ (() => {
    class AddonModGlossaryEntryPageModule {
    }
    AddonModGlossaryEntryPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModGlossaryEntryPageModule });
    AddonModGlossaryEntryPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModGlossaryEntryPageModule_Factory(t) { return new (t || AddonModGlossaryEntryPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCommentsComponentsModule */],
                components_components_module["a" /* CoreRatingComponentsModule */],
                tag_components_components_module["a" /* CoreTagComponentsModule */],
            ]] });
    return AddonModGlossaryEntryPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](entry_module_AddonModGlossaryEntryPageModule, { declarations: [entry_AddonModGlossaryEntryPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCommentsComponentsModule */],
            components_components_module["a" /* CoreRatingComponentsModule */],
            tag_components_components_module["a" /* CoreTagComponentsModule */]] });
})();


/***/ })

}]);