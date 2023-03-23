(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "hehu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModQuizAttemptPageModule", function() { return /* binding */ attempt_module_AddonModQuizAttemptPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/errors/error.ts
var errors_error = __webpack_require__("93ts");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz.ts
var quiz = __webpack_require__("Ohwm");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz-helper.ts
var quiz_helper = __webpack_require__("+8pu");

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

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/attempt/attempt.page.ts

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















function AddonModQuizAttemptPage_core_format_text_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-format-text", 7);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.quiz.name)("contextInstanceId", ctx_r0.quiz.coursemodule)("courseId", ctx_r0.courseId);
    }
}
function AddonModQuizAttemptPage_ion_list_12_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_quiz.preview"));
    }
}
function AddonModQuizAttemptPage_ion_list_12_p_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r3.attempt.attempt);
    }
}
function AddonModQuizAttemptPage_ion_list_12_p_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const sentence_r10 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](sentence_r10);
    }
}
function AddonModQuizAttemptPage_ion_list_12_ion_item_14_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_quiz.marks"), " / ", ctx_r5.quiz.sumGradesFormatted, "");
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r5.attempt.readableMark);
    }
}
function AddonModQuizAttemptPage_ion_list_12_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["pd" /* ɵɵtext */](6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_quiz.grade"), " / ", ctx_r6.quiz.gradeFormatted, "");
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r6.attempt.readableGrade);
    }
}
function AddonModQuizAttemptPage_ion_list_12_ion_item_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p");
        core["zc" /* ɵɵelement */](6, "core-format-text", 15);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 6, "addon.mod_quiz.feedback"));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("component", ctx_r7.component)("componentId", ctx_r7.componentId)("text", ctx_r7.feedback)("contextInstanceId", ctx_r7.cmId)("courseId", ctx_r7.courseId);
    }
}
function AddonModQuizAttemptPage_ion_list_12_ion_button_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizAttemptPage_ion_list_12_ion_button_17_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r12); const ctx_r11 = core["Oc" /* ɵɵnextContext */](2); return ctx_r11.reviewAttempt(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 17);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "addon.mod_quiz.review"), " ");
    }
}
function AddonModQuizAttemptPage_ion_list_12_ion_item_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 18);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "p");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 1, "addon.mod_quiz.noreviewattempt"));
    }
}
function AddonModQuizAttemptPage_ion_list_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModQuizAttemptPage_ion_list_12_p_6_Template, 3, 3, "p", 10);
        core["nd" /* ɵɵtemplate */](7, AddonModQuizAttemptPage_ion_list_12_p_7_Template, 2, 1, "p", 10);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-item", 9);
        core["Ec" /* ɵɵelementStart */](9, "ion-label");
        core["Ec" /* ɵɵelementStart */](10, "h2");
        core["pd" /* ɵɵtext */](11);
        core["Pc" /* ɵɵpipe */](12, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](13, AddonModQuizAttemptPage_ion_list_12_p_13_Template, 2, 1, "p", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](14, AddonModQuizAttemptPage_ion_list_12_ion_item_14_Template, 7, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](15, AddonModQuizAttemptPage_ion_list_12_ion_item_15_Template, 7, 5, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](16, AddonModQuizAttemptPage_ion_list_12_ion_item_16_Template, 7, 8, "ion-item", 12);
        core["nd" /* ɵɵtemplate */](17, AddonModQuizAttemptPage_ion_list_12_ion_button_17_Template, 4, 3, "ion-button", 13);
        core["nd" /* ɵɵtemplate */](18, AddonModQuizAttemptPage_ion_list_12_ion_item_18_Template, 5, 3, "ion-item", 14);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 10, "addon.mod_quiz.attemptnumber"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.attempt.preview);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.attempt.preview);
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](12, 12, "addon.mod_quiz.attemptstate"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.attempt.readableState);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.quiz.showMarkColumn && ctx_r1.attempt.readableMark !== "");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.quiz.showGradeColumn && ctx_r1.attempt.readableGrade !== "");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.quiz.showFeedbackColumn && ctx_r1.feedback);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.showReviewColumn && ctx_r1.attempt.finished);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r1.showReviewColumn);
    }
}
/**
 * Page that displays some summary data about an attempt.
 */
let attempt_page_AddonModQuizAttemptPage = /*@__PURE__*/ (() => {
    class AddonModQuizAttemptPage {
        constructor() {
            this.component = quiz["b" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
            this.loaded = false; // Whether data has been loaded.
            this.showReviewColumn = false;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.attemptId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('attemptId');
            this.fetchQuizData().finally(() => {
                this.loaded = true;
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        doRefresh(refresher) {
            this.refreshData().finally(() => {
                refresher.complete();
            });
        }
        /**
         * Get quiz data and attempt data.
         *
         * @return Promise resolved when done.
         */
        fetchQuizData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.quiz = yield quiz["a" /* AddonModQuiz */].getQuiz(this.courseId, this.cmId);
                    this.componentId = this.quiz.coursemodule;
                    // Load attempt data.
                    const [options, accessInfo, attempt] = yield Promise.all([
                        quiz["a" /* AddonModQuiz */].getCombinedReviewOptions(this.quiz.id, { cmId: this.quiz.coursemodule }),
                        this.fetchAccessInfo(),
                        this.fetchAttempt(),
                    ]);
                    // Set calculated data.
                    this.showReviewColumn = accessInfo.canreviewmyattempts;
                    quiz_helper["a" /* AddonModQuizHelper */].setQuizCalculatedData(this.quiz, options);
                    this.attempt = yield quiz_helper["a" /* AddonModQuizHelper */].setAttemptCalculatedData(this.quiz, attempt, false, undefined, true);
                    // Check if the feedback should be displayed.
                    const grade = Number(this.attempt.rescaledGrade);
                    if (this.quiz.showFeedbackColumn && quiz["a" /* AddonModQuiz */].isAttemptFinished(this.attempt.state) &&
                        options.someoptions.overallfeedback && !isNaN(grade)) {
                        // Feedback should be displayed, get the feedback for the grade.
                        const response = yield quiz["a" /* AddonModQuiz */].getFeedbackForGrade(this.quiz.id, grade, {
                            cmId: this.quiz.coursemodule,
                        });
                        this.feedback = response.feedbacktext;
                    }
                    else {
                        delete this.feedback;
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetattempt', true);
                }
            });
        }
        /**
         * Get the attempt.
         *
         * @return Promise resolved when done.
         */
        fetchAttempt() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get all the attempts and search the one we want.
                const attempts = yield quiz["a" /* AddonModQuiz */].getUserAttempts(this.quiz.id, { cmId: this.cmId });
                const attempt = attempts.find(attempt => attempt.id == this.attemptId);
                if (!attempt) {
                    // Attempt not found, error.
                    this.attempt = undefined;
                    throw new errors_error["a" /* CoreError */](singletons["L" /* Translate */].instant('addon.mod_quiz.errorgetattempt'));
                }
                return attempt;
            });
        }
        /**
         * Get the access info.
         *
         * @return Promise resolved when done.
         */
        fetchAccessInfo() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const accessInfo = yield quiz["a" /* AddonModQuiz */].getQuizAccessInformation(this.quiz.id, { cmId: this.cmId });
                if (!accessInfo.canreviewmyattempts) {
                    return accessInfo;
                }
                // Check if the user can review the attempt.
                yield utils["a" /* CoreUtils */].ignoreErrors(quiz["a" /* AddonModQuiz */].invalidateAttemptReviewForPage(this.attemptId, -1));
                try {
                    yield quiz["a" /* AddonModQuiz */].getAttemptReview(this.attemptId, { page: -1, cmId: this.quiz.coursemodule });
                }
                catch (_a) {
                    // Error getting the review, assume the user cannot review the attempt.
                    accessInfo.canreviewmyattempts = false;
                }
                return accessInfo;
            });
        }
        /**
         * Refresh the data.
         *
         * @return Promise resolved when done.
         */
        refreshData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(quiz["a" /* AddonModQuiz */].invalidateQuizData(this.courseId));
                promises.push(quiz["a" /* AddonModQuiz */].invalidateAttemptReview(this.attemptId));
                if (this.quiz) {
                    promises.push(quiz["a" /* AddonModQuiz */].invalidateUserAttemptsForUser(this.quiz.id));
                    promises.push(quiz["a" /* AddonModQuiz */].invalidateQuizAccessInformation(this.quiz.id));
                    promises.push(quiz["a" /* AddonModQuiz */].invalidateCombinedReviewOptionsForUser(this.quiz.id));
                    if (this.attempt && typeof this.feedback != 'undefined') {
                        promises.push(quiz["a" /* AddonModQuiz */].invalidateFeedback(this.quiz.id));
                    }
                }
                yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                yield this.fetchQuizData();
            });
        }
        /**
         * Go to the page to review the attempt.
         *
         * @return Promise resolved when done.
         */
        reviewAttempt() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                services_navigator["a" /* CoreNavigator */].navigate(`../../review/${this.attempt.id}`);
            });
        }
    }
    AddonModQuizAttemptPage.ɵfac = function AddonModQuizAttemptPage_Factory(t) { return new (t || AddonModQuizAttemptPage)(); };
    AddonModQuizAttemptPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModQuizAttemptPage, selectors: [["page-addon-mod-quiz-attempt"]], decls: 13, vars: 10, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], ["lines", "none", 4, "ngIf"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["lines", "none"], [1, "ion-text-wrap"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-margin", "expand", "block", 3, "click", 4, "ngIf"], ["class", "ion-text-wrap core-danger-item", 4, "ngIf"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"], ["expand", "block", 1, "ion-margin", 3, "click"], ["name", "fas-search", "slot", "start", "aria-hidden", "true"], [1, "ion-text-wrap", "core-danger-item"]], template: function AddonModQuizAttemptPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonModQuizAttemptPage_core_format_text_6_Template, 1, 3, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-content");
                core["Ec" /* ɵɵelementStart */](8, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModQuizAttemptPage_Template_ion_refresher_ionRefresh_8_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](9, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](10, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](11, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](12, AddonModQuizAttemptPage_ion_list_12_Template, 19, 14, "ion-list", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.quiz);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](10, 8, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModQuizAttemptPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/attempt/attempt.module.ts
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
        component: attempt_page_AddonModQuizAttemptPage,
    },
];
let attempt_module_AddonModQuizAttemptPageModule = /*@__PURE__*/ (() => {
    class AddonModQuizAttemptPageModule {
    }
    AddonModQuizAttemptPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModQuizAttemptPageModule });
    AddonModQuizAttemptPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModQuizAttemptPageModule_Factory(t) { return new (t || AddonModQuizAttemptPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModQuizAttemptPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](attempt_module_AddonModQuizAttemptPageModule, { declarations: [attempt_page_AddonModQuizAttemptPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);