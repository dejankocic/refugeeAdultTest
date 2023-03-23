(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "omKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModQuizPlayerPageModule", function() { return /* binding */ player_module_AddonModQuizPlayerPageModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/features/question/components/components.module.ts
var components_module = __webpack_require__("uNPo");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/features/question/components/question/question.ts
var question_question = __webpack_require__("Zl5n");

// EXTERNAL MODULE: ./src/core/features/question/services/question-helper.ts
var question_helper = __webpack_require__("qRov");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/time.ts
var time = __webpack_require__("Q98t");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__("2Vo4");

// EXTERNAL MODULE: ./src/core/singletons/logger.ts + 1 modules
var logger = __webpack_require__("3j9v");

// EXTERNAL MODULE: ./src/addons/mod/quiz/components/connection-error/connection-error.ts
var connection_error = __webpack_require__("+/ys");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz.ts
var services_quiz = __webpack_require__("Ohwm");

// CONCATENATED MODULE: ./src/addons/mod/quiz/classes/auto-save.ts
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
 * Class to support auto-save in quiz. Every certain seconds, it will check if there are changes in the current page answers
 * and, if so, it will save them automatically.
 */
class auto_save_AddonModQuizAutoSave {
    /**
     * Constructor.
     *
     * @param formName Name of the form where the answers are stored.
     * @param buttonSelector Selector to find the button to show the connection error.
     */
    constructor(formName, buttonSelector) {
        this.formName = formName;
        this.buttonSelector = buttonSelector;
        this.CHECK_CHANGES_INTERVAL = 5000;
        this.popoverShown = false; // Whether the popover is shown.
        this.logger = logger["a" /* CoreLogger */].getInstance('AddonModQuizAutoSave');
        // Create the observable to notify if an error happened.
        this.errorObservable = new BehaviorSubject["a" /* BehaviorSubject */](false);
    }
    /**
     * Cancel a pending auto save.
     */
    cancelAutoSave() {
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = undefined;
    }
    /**
     * Check if the answers have changed in a page.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    checkChanges(quiz, attempt, preflightData, offline) {
        if (this.autoSaveTimeout) {
            // We already have an auto save pending, no need to check changes.
            return;
        }
        const answers = this.getAnswers();
        if (!this.previousAnswers) {
            // Previous answers isn't set, set it now.
            this.previousAnswers = answers;
            return;
        }
        // Check if answers have changed.
        let equal = true;
        for (const name in answers) {
            if (this.previousAnswers[name] != answers[name]) {
                equal = false;
                break;
            }
        }
        if (!equal) {
            this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
        }
        this.previousAnswers = answers;
    }
    /**
     * Get answers from a form.
     *
     * @return Answers.
     */
    getAnswers() {
        return question_helper["a" /* CoreQuestionHelper */].getAnswersFromForm(document.forms[this.formName]);
    }
    /**
     * Hide the auto save error.
     */
    hideAutoSaveError() {
        var _a;
        this.errorObservable.next(false);
        (_a = this.popover) === null || _a === void 0 ? void 0 : _a.dismiss();
    }
    /**
     * Returns an observable that will notify when an error happens or stops.
     * It will send true when there's an error, and false when the error has been ammended.
     *
     * @return Observable.
     */
    onError() {
        return this.errorObservable;
    }
    /**
     * Schedule an auto save process if it's not scheduled already.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    setAutoSaveTimer(quiz, attempt, preflightData, offline) {
        // Don't schedule if already shceduled or quiz is almost closed.
        if (!quiz.autosaveperiod || this.autoSaveTimeout || services_quiz["a" /* AddonModQuiz */].isAttemptTimeNearlyOver(quiz, attempt)) {
            return;
        }
        // Schedule save.
        this.autoSaveTimeout = window.setTimeout(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
            const answers = this.getAnswers();
            this.cancelAutoSave();
            this.previousAnswers = answers; // Update previous answers to match what we're sending to the server.
            try {
                yield services_quiz["a" /* AddonModQuiz */].saveAttempt(quiz, attempt, answers, preflightData, offline);
                // Save successful, we can hide the connection error if it was shown.
                this.hideAutoSaveError();
            }
            catch (error) {
                // Error auto-saving. Show error and set timer again.
                this.logger.warn('Error auto-saving data.', error);
                // If there was no error already, show the error message.
                if (!this.errorObservable.getValue()) {
                    this.errorObservable.next(true);
                    this.showAutoSaveError();
                }
                // Try again.
                this.setAutoSaveTimer(quiz, attempt, preflightData, offline);
            }
        }), quiz.autosaveperiod * 1000);
    }
    /**
     * Show an error popover due to an auto save error.
     */
    showAutoSaveError(ev) {
        return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
            // Don't show popover if it was already shown.
            if (this.popoverShown) {
                return;
            }
            const event = ev || {
                // Cannot use new Event() because event's target property is readonly
                target: document.querySelector(this.buttonSelector),
                stopPropagation: () => { },
                preventDefault: () => { },
            };
            this.popoverShown = true;
            this.popover = yield dom["a" /* CoreDomUtils */].openPopover({
                component: connection_error["a" /* AddonModQuizConnectionErrorComponent */],
                event: event,
            });
            this.popoverShown = false;
        });
    }
    /**
     * Start a process to periodically check changes in answers.
     *
     * @param quiz Quiz.
     * @param attempt Attempt.
     * @param preflightData Preflight data.
     * @param offline Whether the quiz is being attempted in offline mode.
     */
    startCheckChangesProcess(quiz, attempt, preflightData, offline) {
        if (this.checkChangesInterval || !quiz.autosaveperiod) {
            // We already have the interval in place or the quiz has autosave disabled.
            return;
        }
        this.previousAnswers = undefined;
        // Load initial answers in 2.5 seconds so the first check interval finds them already loaded.
        this.loadPreviousAnswersTimeout = window.setTimeout(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, 2500);
        // Check changes every certain time.
        this.checkChangesInterval = window.setInterval(() => {
            this.checkChanges(quiz, attempt, preflightData, offline);
        }, this.CHECK_CHANGES_INTERVAL);
    }
    /**
     * Stops the periodical check for changes.
     */
    stopCheckChangesProcess() {
        clearTimeout(this.loadPreviousAnswersTimeout);
        clearInterval(this.checkChangesInterval);
        this.loadPreviousAnswersTimeout = undefined;
        this.checkChangesInterval = undefined;
    }
}

// EXTERNAL MODULE: ./src/addons/mod/quiz/components/navigation-modal/navigation-modal.ts
var navigation_modal = __webpack_require__("6GiP");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz-helper.ts
var quiz_helper = __webpack_require__("+8pu");

// EXTERNAL MODULE: ./src/addons/mod/quiz/services/quiz-sync.ts
var quiz_sync = __webpack_require__("hh6U");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/components/timer/timer.ts
var timer = __webpack_require__("rztj");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/directives/link.ts
var directives_link = __webpack_require__("iSJP");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/player/player.page.ts

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





























const _c0 = ["quizForm"];
function AddonModQuizPlayerPage_core_format_text_6_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-format-text", 14);
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("text", ctx_r0.quiz.name)("contextInstanceId", ctx_r0.quiz.coursemodule)("courseId", ctx_r0.courseId);
    }
}
function AddonModQuizPlayerPage_ion_button_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_button_11_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r10); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.openNavigation(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_quiz.opentoc"));
    }
}
function AddonModQuizPlayerPage_ion_toolbar_12_ion_button_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 20);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_toolbar_12_ion_button_5_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r14); const ctx_r13 = core["Oc" /* ɵɵnextContext */](2); return ctx_r13.changePage(ctx_r13.previousPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.previous"));
    }
}
function AddonModQuizPlayerPage_ion_toolbar_12_ion_button_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_toolbar_12_ion_button_6_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r16); const ctx_r15 = core["Oc" /* ɵɵnextContext */](2); return ctx_r15.changePage(ctx_r15.nextPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.next"));
    }
}
function AddonModQuizPlayerPage_ion_toolbar_12_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-toolbar", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-title");
        core["Ec" /* ɵɵelementStart */](2, "core-timer", 18);
        core["Mc" /* ɵɵlistener */]("finished", function AddonModQuizPlayerPage_ion_toolbar_12_Template_core_timer_finished_2_listener() { core["gd" /* ɵɵrestoreView */](_r18); const ctx_r17 = core["Oc" /* ɵɵnextContext */](); return ctx_r17.timeUp(); });
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-buttons", 3);
        core["nd" /* ɵɵtemplate */](5, AddonModQuizPlayerPage_ion_toolbar_12_ion_button_5_Template, 3, 3, "ion-button", 19);
        core["nd" /* ɵɵtemplate */](6, AddonModQuizPlayerPage_ion_toolbar_12_ion_button_6_Template, 3, 3, "ion-button", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("endTime", ctx_r2.endTime)("timerText", core["Qc" /* ɵɵpipeBind1 */](3, 5, "addon.mod_quiz.timeleft"))("align", "center");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.previousPage >= 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.nextPage >= 0 - 1);
    }
}
function AddonModQuizPlayerPage_ion_toolbar_15_ion_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r22 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 20);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_toolbar_15_ion_button_2_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r22); const ctx_r21 = core["Oc" /* ɵɵnextContext */](2); return ctx_r21.changePage(ctx_r21.previousPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.previous"));
    }
}
function AddonModQuizPlayerPage_ion_toolbar_15_ion_button_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r24 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_toolbar_15_ion_button_3_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r24); const ctx_r23 = core["Oc" /* ɵɵnextContext */](2); return ctx_r23.changePage(ctx_r23.nextPage); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 22);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.next"));
    }
}
function AddonModQuizPlayerPage_ion_toolbar_15_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-toolbar", 17);
        core["Ec" /* ɵɵelementStart */](1, "ion-buttons", 3);
        core["nd" /* ɵɵtemplate */](2, AddonModQuizPlayerPage_ion_toolbar_15_ion_button_2_Template, 3, 3, "ion-button", 19);
        core["nd" /* ɵɵtemplate */](3, AddonModQuizPlayerPage_ion_toolbar_15_ion_button_3_Template, 3, 3, "ion-button", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.previousPage >= 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.nextPage >= 0 - 1);
    }
}
function AddonModQuizPlayerPage_ion_button_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 23);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_button_16_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r26); const ctx_r25 = core["Oc" /* ɵɵnextContext */](); return ctx_r25.start(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_quiz.startattempt"), " ");
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModQuizPlayerPage_form_17_div_2_h2_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r29 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Rc" /* ɵɵpipeBind2 */](2, 1, "core.question.questionno", core["ad" /* ɵɵpureFunction1 */](4, _c1, question_r29.number)), " ");
    }
}
function AddonModQuizPlayerPage_form_17_div_2_h2_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2", 31);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.question.information"));
    }
}
function AddonModQuizPlayerPage_form_17_div_2_div_6_p_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 34);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r29 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](question_r29.status);
    }
}
function AddonModQuizPlayerPage_form_17_div_2_div_6_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r29 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](question_r29.readableMark);
    }
}
function AddonModQuizPlayerPage_form_17_div_2_div_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "div", 32);
        core["nd" /* ɵɵtemplate */](1, AddonModQuizPlayerPage_form_17_div_2_div_6_p_1_Template, 2, 1, "p", 33);
        core["nd" /* ɵɵtemplate */](2, AddonModQuizPlayerPage_form_17_div_2_div_6_p_2_Template, 2, 1, "p", 13);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r29 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r29.status);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r29.readableMark);
    }
}
function AddonModQuizPlayerPage_form_17_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r40 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div");
        core["Ec" /* ɵɵelementStart */](1, "ion-card", 27);
        core["Ec" /* ɵɵelementStart */](2, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["nd" /* ɵɵtemplate */](4, AddonModQuizPlayerPage_form_17_div_2_h2_4_Template, 3, 6, "h2", 28);
        core["nd" /* ɵɵtemplate */](5, AddonModQuizPlayerPage_form_17_div_2_h2_5_Template, 3, 3, "h2", 28);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModQuizPlayerPage_form_17_div_2_div_6_Template, 3, 2, "div", 29);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "core-question", 30);
        core["Mc" /* ɵɵlistener */]("onAbort", function AddonModQuizPlayerPage_form_17_div_2_Template_core_question_onAbort_7_listener() { core["gd" /* ɵɵrestoreView */](_r40); const ctx_r39 = core["Oc" /* ɵɵnextContext */](2); return ctx_r39.abortQuiz(); })("buttonClicked", function AddonModQuizPlayerPage_form_17_div_2_Template_core_question_buttonClicked_7_listener($event) { core["gd" /* ɵɵrestoreView */](_r40); const ctx_r41 = core["Oc" /* ɵɵnextContext */](2); return ctx_r41.behaviourButtonClicked($event); });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r29 = ctx.$implicit;
        const ctx_r28 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Xc" /* ɵɵpropertyInterpolate1 */]("id", "addon-mod_quiz-question-", question_r29.slot, "");
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r29.number);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !question_r29.number);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r29.status || question_r29.readableMark);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("question", question_r29)("component", ctx_r28.component)("componentId", ctx_r28.cmId)("attemptId", ctx_r28.attempt.id)("usageId", ctx_r28.attempt.uniqueid)("offlineEnabled", ctx_r28.offline)("contextInstanceId", ctx_r28.cmId)("courseId", ctx_r28.courseId)("preferredBehaviour", ctx_r28.quiz.preferredbehaviour)("review", false);
    }
}
function AddonModQuizPlayerPage_form_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "form", 24, 25);
        core["nd" /* ɵɵtemplate */](2, AddonModQuizPlayerPage_form_17_div_2_Template, 8, 14, "div", 26);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r5.questions);
    }
}
function AddonModQuizPlayerPage_ion_grid_18_ion_col_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r45 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 36);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_grid_18_ion_col_2_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r45); const ctx_r44 = core["Oc" /* ɵɵnextContext */](2); return ctx_r44.changePage(ctx_r44.previousPage); });
        core["zc" /* ɵɵelement */](2, "ion-icon", 37);
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
function AddonModQuizPlayerPage_ion_grid_18_ion_col_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 38);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_grid_18_ion_col_3_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r47); const ctx_r46 = core["Oc" /* ɵɵnextContext */](2); return ctx_r46.changePage(ctx_r46.nextPage); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["zc" /* ɵɵelement */](4, "ion-icon", 39);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.next"), " ");
    }
}
function AddonModQuizPlayerPage_ion_grid_18_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-grid", 35);
        core["Ec" /* ɵɵelementStart */](1, "ion-row");
        core["nd" /* ɵɵtemplate */](2, AddonModQuizPlayerPage_ion_grid_18_ion_col_2_Template, 5, 3, "ion-col", 13);
        core["nd" /* ɵɵtemplate */](3, AddonModQuizPlayerPage_ion_grid_18_ion_col_3_Template, 5, 3, "ion-col", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.previousPage >= 0);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r6.nextPage >= 0 - 1);
    }
}
function AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r59 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 48);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r59); const question_r55 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r57 = core["Oc" /* ɵɵnextContext */](2); return ctx_r57.changePage(question_r55.page, false, question_r55.slot); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "ion-row", 41);
        core["Ec" /* ɵɵelementStart */](4, "ion-col", 49);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-col", 50);
        core["pd" /* ɵɵtext */](7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const question_r55 = core["Oc" /* ɵɵnextContext */]().$implicit;
        const ctx_r56 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("detail", !ctx_r56.isSequential && ctx_r56.canReturn)("button", !ctx_r56.isSequential && ctx_r56.canReturn);
        core["mc" /* ɵɵattribute */]("aria-label", core["Rc" /* ɵɵpipeBind2 */](1, 5, "core.question.questionno", core["ad" /* ɵɵpureFunction1 */](8, _c1, question_r55.number)));
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](question_r55.number);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](question_r55.status);
    }
}
function AddonModQuizPlayerPage_ion_card_19_ng_container_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModQuizPlayerPage_ion_card_19_ng_container_19_ion_item_1_Template, 8, 10, "ion-item", 47);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const question_r55 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", question_r55.number);
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_button_20_Template(rf, ctx) {
    if (rf & 1) {
        const _r62 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 23);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_card_19_ion_button_20_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r62); const ctx_r61 = core["Oc" /* ɵɵnextContext */](2); return ctx_r61.changePage(ctx_r61.attempt.currentpage); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_quiz.returnattempt"), " ");
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_item_21_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r50 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](ctx_r50.dueDateWarning);
    }
}
function AddonModQuizPlayerPage_ion_card_19_core_timer_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r64 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-timer", 51);
        core["Mc" /* ɵɵlistener */]("finished", function AddonModQuizPlayerPage_ion_card_19_core_timer_22_Template_core_timer_finished_0_listener() { core["gd" /* ɵɵrestoreView */](_r64); const ctx_r63 = core["Oc" /* ɵɵnextContext */](2); return ctx_r63.timeUp(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r51 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("endTime", ctx_r51.endTime)("timerText", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.mod_quiz.timeleft"));
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_item_23_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const message_r66 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](message_r66);
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_item_23_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 35);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h3", 52);
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonModQuizPlayerPage_ion_card_19_ion_item_23_p_5_Template, 2, 1, "p", 26);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r52 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 2, "addon.mod_quiz.cannotsubmitquizdueto"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r52.preventSubmitMessages);
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_button_24_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 53);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["zc" /* ɵɵelement */](3, "ion-icon", 54);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r53 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r53.moduleUrl);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.openinbrowser"), " ");
    }
}
function AddonModQuizPlayerPage_ion_card_19_ion_button_25_Template(rf, ctx) {
    if (rf & 1) {
        const _r68 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 23);
        core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_ion_card_19_ion_button_25_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r68); const ctx_r67 = core["Oc" /* ɵɵnextContext */](2); return ctx_r67.finishAttempt(true); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "addon.mod_quiz.submitallandfinish"), " ");
    }
}
function AddonModQuizPlayerPage_ion_card_19_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 40);
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header", 35);
        core["Ec" /* ɵɵelementStart */](2, "ion-card-title");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-item", 35);
        core["Ec" /* ɵɵelementStart */](6, "ion-label");
        core["Ec" /* ɵɵelementStart */](7, "ion-row", 41);
        core["Ec" /* ɵɵelementStart */](8, "ion-col", 42);
        core["Ec" /* ɵɵelementStart */](9, "strong");
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-col", 43);
        core["Ec" /* ɵɵelementStart */](13, "strong");
        core["pd" /* ɵɵtext */](14, "#");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](15, "ion-col", 44);
        core["Ec" /* ɵɵelementStart */](16, "strong");
        core["pd" /* ɵɵtext */](17);
        core["Pc" /* ɵɵpipe */](18, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](19, AddonModQuizPlayerPage_ion_card_19_ng_container_19_Template, 2, 1, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](20, AddonModQuizPlayerPage_ion_card_19_ion_button_20_Template, 3, 3, "ion-button", 9);
        core["nd" /* ɵɵtemplate */](21, AddonModQuizPlayerPage_ion_card_19_ion_item_21_Template, 3, 1, "ion-item", 11);
        core["nd" /* ɵɵtemplate */](22, AddonModQuizPlayerPage_ion_card_19_core_timer_22_Template, 2, 4, "core-timer", 45);
        core["nd" /* ɵɵtemplate */](23, AddonModQuizPlayerPage_ion_card_19_ion_item_23_Template, 6, 4, "ion-item", 11);
        core["nd" /* ɵɵtemplate */](24, AddonModQuizPlayerPage_ion_card_19_ion_button_24_Template, 4, 4, "ion-button", 46);
        core["nd" /* ɵɵtemplate */](25, AddonModQuizPlayerPage_ion_card_19_ion_button_25_Template, 3, 3, "ion-button", 9);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 10, "addon.mod_quiz.summaryofattempt"));
        core["lc" /* ɵɵadvance */](7);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 12, "addon.mod_quiz.question"));
        core["lc" /* ɵɵadvance */](7);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](18, 14, "addon.mod_quiz.status"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.summaryQuestions);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.canReturn);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.dueDateWarning);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.endTime);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.preventSubmitMessages.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r7.preventSubmitMessages.length);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r7.attempt.finishedOffline && !ctx_r7.preventSubmitMessages.length);
    }
}
function AddonModQuizPlayerPage_ion_card_20_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card");
        core["Ec" /* ɵɵelementStart */](1, "ion-item", 35);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "ion-button", 55);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["zc" /* ɵɵelement */](8, "ion-icon", 54);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_quiz.errorparsequestions"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("href", ctx_r8.moduleUrl);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](7, 5, "core.openinbrowser"), " ");
    }
}
/**
 * Page that allows attempting a quiz.
 */
let player_page_AddonModQuizPlayerPage = /*@__PURE__*/ (() => {
    class AddonModQuizPlayerPage {
        constructor(changeDetector, elementRef) {
            this.changeDetector = changeDetector;
            this.elementRef = elementRef;
            this.component = services_quiz["b" /* AddonModQuizProvider */].COMPONENT; // Component to link the files to.
            this.loaded = false; // Whether data has been loaded.
            this.quizAborted = false; // Whether the quiz was aborted due to an error.
            this.offline = false; // Whether the quiz is being attempted in offline mode.
            this.navigation = []; // List of questions to navigate them.
            this.questions = []; // Questions of the current page.
            this.nextPage = -2; // Next page.
            this.previousPage = -1; // Previous page.
            this.showSummary = false; // Whether the attempt summary should be displayed.
            this.summaryQuestions = []; // The questions to display in the summary.
            this.canReturn = false; // Whether the user can return to a page after seeing the summary.
            this.preventSubmitMessages = []; // List of messages explaining why the quiz cannot be submitted.
            this.autoSaveError = false; // Whether there's been an error in auto-save.
            this.isSequential = false; // Whether quiz navigation is sequential.
            this.preflightData = {}; // Preflight data to attempt the quiz.
            this.newAttempt = false; // Whether the user is starting a new attempt.
            this.quizDataLoaded = false; // Whether the quiz data has been loaded.
            this.timeUpCalled = false; // Whether the time up function has been called.
            this.forceLeave = false; // If true, don't perform any check when leaving the view.
            this.reloadNavigation = false; // Whether navigation needs to be reloaded because some data was sent to server.
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.moduleUrl = services_navigator["a" /* CoreNavigator */].getRouteParam('moduleUrl');
            // Create the auto save instance.
            this.autoSave = new auto_save_AddonModQuizAutoSave('addon-mod_quiz-player-form', '#addon-mod_quiz-connection-error-button');
            // Start the player when the page is loaded.
            this.start();
            // Listen for errors on auto-save.
            this.autoSaveErrorSubscription = this.autoSave.onError().subscribe((error) => {
                this.autoSaveError = error;
                this.changeDetector.detectChanges();
            });
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a;
            // Stop auto save.
            this.autoSave.cancelAutoSave();
            this.autoSave.stopCheckChangesProcess();
            (_a = this.autoSaveErrorSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            if (this.quiz) {
                // Unblock the quiz so it can be synced.
                sync["a" /* CoreSync */].unblockOperation(services_quiz["b" /* AddonModQuizProvider */].COMPONENT, this.quiz.id);
            }
        }
        /**
         * Check if we can leave the page or not.
         *
         * @return Resolved if we can leave it, rejected if not.
         */
        canLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.forceLeave || this.quizAborted || !this.questions.length || this.showSummary) {
                    return true;
                }
                // Save answers.
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                try {
                    yield this.processAttempt(false, false);
                }
                catch (error) {
                    // Save attempt failed. Show confirmation.
                    modal.dismiss();
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('addon.mod_quiz.confirmleavequizonerror'));
                    singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                }
                finally {
                    modal.dismiss();
                }
                return true;
            });
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Close any modal if present.
                const modal = yield singletons["x" /* ModalController */].getTop();
                modal === null || modal === void 0 ? void 0 : modal.dismiss();
            });
        }
        /**
         * Abort the quiz.
         */
        abortQuiz() {
            this.quizAborted = true;
        }
        /**
         * A behaviour button in a question was clicked (Check, Redo, ...).
         *
         * @param button Clicked button.
         */
        behaviourButtonClicked(button) {
            var _a, _b;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let modal;
                try {
                    // Confirm that the user really wants to do it.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.areyousure'));
                    modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    // Get the answers.
                    const answers = yield this.prepareAnswers();
                    // Add the clicked button data.
                    answers[button.name] = button.value;
                    // Behaviour checks are always in online.
                    yield services_quiz["a" /* AddonModQuiz */].processAttempt(this.quiz, this.attempt, answers, this.preflightData);
                    this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                    // Reload the current page.
                    const scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
                    const scrollTop = (scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scrollTop) || -1;
                    this.loaded = false;
                    (_b = this.content) === null || _b === void 0 ? void 0 : _b.scrollToTop(); // Scroll top so the spinner is seen.
                    try {
                        yield this.loadPage(this.attempt.currentpage);
                    }
                    finally {
                        this.loaded = true;
                        if (scrollTop != -1) {
                            // Wait for content to be rendered.
                            setTimeout(() => {
                                var _a;
                                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToPoint(0, scrollTop);
                            }, 50);
                        }
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'Error performing action.');
                }
                finally {
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                }
            });
        }
        /**
         * Change the current page. If slot is supplied, try to scroll to that question.
         *
         * @param page Page to load. -1 means summary.
         * @param fromModal Whether the page was selected using the navigation modal.
         * @param slot Slot of the question to scroll to.
         * @return Promise resolved when done.
         */
        changePage(page, fromModal, slot) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.attempt) {
                    return;
                }
                if (page != -1 && (this.attempt.state == services_quiz["b" /* AddonModQuizProvider */].ATTEMPT_OVERDUE || this.attempt.finishedOffline)) {
                    // We can't load a page if overdue or the local attempt is finished.
                    return;
                }
                else if (page == this.attempt.currentpage && !this.showSummary && typeof slot != 'undefined') {
                    // Navigating to a question in the current page.
                    this.scrollToQuestion(slot);
                    return;
                }
                else if ((page == this.attempt.currentpage && !this.showSummary) || (fromModal && this.isSequential && page != -1)) {
                    // If the user is navigating to the current page we do nothing.
                    // Also, in sequential quizzes we don't allow navigating using the modal except for finishing the quiz (summary).
                    return;
                }
                else if (page === -1 && this.showSummary) {
                    // Summary already shown.
                    return;
                }
                (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop();
                // First try to save the attempt data. We only save it if we're not seeing the summary.
                if (!this.showSummary) {
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    try {
                        yield this.processAttempt(false, false);
                        modal.dismiss();
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                        modal.dismiss();
                        return;
                    }
                    this.reloadNavigation = true; // Data sent to server, navigation should be reloaded.
                }
                this.loaded = false;
                try {
                    // Attempt data successfully saved, load the page or summary.
                    // Stop checking for changes during page change.
                    this.autoSave.stopCheckChangesProcess();
                    if (page === -1) {
                        yield this.loadSummary();
                    }
                    else {
                        yield this.loadPage(page);
                    }
                }
                catch (error) {
                    // If the user isn't seeing the summary, start the check again.
                    if (!this.showSummary) {
                        this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
                    }
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
                }
                finally {
                    this.loaded = true;
                    if (typeof slot != 'undefined') {
                        // Scroll to the question. Give some time to the questions to render.
                        setTimeout(() => {
                            this.scrollToQuestion(slot);
                        }, 2000);
                    }
                }
            });
        }
        /**
         * Convenience function to get the quiz data.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.quiz = yield services_quiz["a" /* AddonModQuiz */].getQuiz(this.courseId, this.cmId);
                    // Block the quiz so it cannot be synced.
                    sync["a" /* CoreSync */].blockOperation(services_quiz["b" /* AddonModQuizProvider */].COMPONENT, this.quiz.id);
                    // Wait for any ongoing sync to finish. We won't sync a quiz while it's being played.
                    yield quiz_sync["a" /* AddonModQuizSync */].waitForSync(this.quiz.id);
                    this.isSequential = services_quiz["a" /* AddonModQuiz */].isNavigationSequential(this.quiz);
                    if (services_quiz["a" /* AddonModQuiz */].isQuizOffline(this.quiz)) {
                        // Quiz supports offline.
                        this.offline = true;
                    }
                    else {
                        // Quiz doesn't support offline right now, but maybe it did and then the setting was changed.
                        // If we have an unfinished offline attempt then we'll use offline mode.
                        this.offline = yield services_quiz["a" /* AddonModQuiz */].isLastAttemptOfflineUnfinished(this.quiz);
                    }
                    if (this.quiz.timelimit && this.quiz.timelimit > 0) {
                        this.readableTimeLimit = time["a" /* CoreTimeUtils */].formatTime(this.quiz.timelimit);
                    }
                    // Get access information for the quiz.
                    this.quizAccessInfo = yield services_quiz["a" /* AddonModQuiz */].getQuizAccessInformation(this.quiz.id, {
                        cmId: this.quiz.coursemodule,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    });
                    // Get user attempts to determine last attempt.
                    const attempts = yield services_quiz["a" /* AddonModQuiz */].getUserAttempts(this.quiz.id, {
                        cmId: this.quiz.coursemodule,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    });
                    if (!attempts.length) {
                        // There are no attempts, start a new one.
                        this.newAttempt = true;
                        return;
                    }
                    // Get the last attempt. If it's finished, start a new one.
                    this.lastAttempt = yield quiz_helper["a" /* AddonModQuizHelper */].setAttemptCalculatedData(this.quiz, attempts[attempts.length - 1], false, undefined, true);
                    this.newAttempt = services_quiz["a" /* AddonModQuiz */].isAttemptFinished(this.lastAttempt.state);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquiz', true);
                }
            });
        }
        /**
         * Finish an attempt, either by timeup or because the user clicked to finish it.
         *
         * @param userFinish Whether the user clicked to finish the attempt.
         * @param timeUp Whether the quiz time is up.
         * @return Promise resolved when done.
         */
        finishAttempt(userFinish, timeUp) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let modal;
                try {
                    // Show confirm if the user clicked the finish button and the quiz is in progress.
                    if (!timeUp && this.attempt.state == services_quiz["b" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS) {
                        yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('addon.mod_quiz.confirmclose'));
                    }
                    modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                    yield this.processAttempt(userFinish, timeUp);
                    // Trigger an event to notify the attempt was finished.
                    events["b" /* CoreEvents */].trigger(services_quiz["b" /* AddonModQuizProvider */].ATTEMPT_FINISHED_EVENT, {
                        quizId: this.quiz.id,
                        attemptId: this.attempt.id,
                        synced: !this.offline,
                    }, sites["b" /* CoreSites */].getCurrentSiteId());
                    events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'quiz' });
                    // Leave the player.
                    this.forceLeave = true;
                    services_navigator["a" /* CoreNavigator */].back();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorsaveattempt', true);
                }
                finally {
                    modal === null || modal === void 0 ? void 0 : modal.dismiss();
                }
            });
        }
        /**
         * Fix sequence checks of current page.
         *
         * @return Promise resolved when done.
         */
        fixSequenceChecks() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get current page data again to get the latest sequencechecks.
                const data = yield services_quiz["a" /* AddonModQuiz */].getAttemptData(this.attempt.id, this.attempt.currentpage, this.preflightData, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                const newSequenceChecks = {};
                data.questions.forEach((question) => {
                    const sequenceCheck = question_helper["a" /* CoreQuestionHelper */].getQuestionSequenceCheckFromHtml(question.html);
                    if (sequenceCheck) {
                        newSequenceChecks[question.slot] = sequenceCheck;
                    }
                });
                // Notify the new sequence checks to the components.
                (_a = this.questionComponents) === null || _a === void 0 ? void 0 : _a.forEach((component) => {
                    component.updateSequenceCheck(newSequenceChecks);
                });
            });
        }
        /**
         * Get the input answers.
         *
         * @return Object with the answers.
         */
        getAnswers() {
            return question_helper["a" /* CoreQuestionHelper */].getAnswersFromForm(document.forms['addon-mod_quiz-player-form']);
        }
        /**
         * Initializes the timer if enabled.
         */
        initTimer() {
            var _a;
            if (!((_a = this.attemptAccessInfo) === null || _a === void 0 ? void 0 : _a.endtime) || this.attemptAccessInfo.endtime < 0) {
                return;
            }
            // Quiz has an end time. Check if time left should be shown.
            const shouldShowTime = services_quiz["a" /* AddonModQuiz */].shouldShowTimeLeft(this.quizAccessInfo.activerulenames, this.attempt, this.attemptAccessInfo.endtime);
            if (shouldShowTime) {
                this.endTime = this.attemptAccessInfo.endtime;
            }
            else {
                delete this.endTime;
            }
        }
        /**
         * Load a page questions.
         *
         * @param page The page to load.
         * @return Promise resolved when done.
         */
        loadPage(page) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const data = yield services_quiz["a" /* AddonModQuiz */].getAttemptData(this.attempt.id, page, this.preflightData, {
                    cmId: this.quiz.coursemodule,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                // Update attempt, status could change during the execution.
                this.attempt = data.attempt;
                this.attempt.currentpage = page;
                this.questions = data.questions;
                this.nextPage = data.nextpage;
                this.previousPage = this.isSequential ? -1 : page - 1;
                this.showSummary = false;
                this.questions.forEach((question) => {
                    // Get the readable mark for each question.
                    question.readableMark = quiz_helper["a" /* AddonModQuizHelper */].getQuestionMarkFromHtml(question.html);
                    // Extract the question info box.
                    question_helper["a" /* CoreQuestionHelper */].extractQuestionInfoBox(question, '.info');
                    // Check if the question is blocked. If it is, treat it as a description question.
                    if (services_quiz["a" /* AddonModQuiz */].isQuestionBlocked(question)) {
                        question.type = 'description';
                    }
                });
                // Mark the page as viewed.
                utils["a" /* CoreUtils */].ignoreErrors(services_quiz["a" /* AddonModQuiz */].logViewAttempt(this.attempt.id, page, this.preflightData, this.offline, this.quiz));
                // Start looking for changes.
                this.autoSave.startCheckChangesProcess(this.quiz, this.attempt, this.preflightData, this.offline);
            });
        }
        /**
         * Load attempt summary.
         *
         * @return Promise resolved when done.
         */
        loadSummary() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.summaryQuestions = [];
                this.summaryQuestions = yield services_quiz["a" /* AddonModQuiz */].getAttemptSummary(this.attempt.id, this.preflightData, {
                    cmId: this.quiz.coursemodule,
                    loadLocal: this.offline,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                this.showSummary = true;
                this.canReturn = this.attempt.state == services_quiz["b" /* AddonModQuizProvider */].ATTEMPT_IN_PROGRESS && !this.attempt.finishedOffline;
                this.preventSubmitMessages = services_quiz["a" /* AddonModQuiz */].getPreventSubmitMessages(this.summaryQuestions);
                this.dueDateWarning = services_quiz["a" /* AddonModQuiz */].getAttemptDueDateWarning(this.quiz, this.attempt);
                // Log summary as viewed.
                utils["a" /* CoreUtils */].ignoreErrors(services_quiz["a" /* AddonModQuiz */].logViewAttemptSummary(this.attempt.id, this.preflightData, this.quiz.id, this.quiz.name));
            });
        }
        /**
         * Load data to navigate the questions using the navigation modal.
         *
         * @return Promise resolved when done.
         */
        loadNavigation() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // We use the attempt summary to build the navigation because it contains all the questions.
                this.navigation = yield services_quiz["a" /* AddonModQuiz */].getAttemptSummary(this.attempt.id, this.preflightData, {
                    cmId: this.quiz.coursemodule,
                    loadLocal: this.offline,
                    readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                });
                this.navigation.forEach((question) => {
                    question.stateClass = question_helper["a" /* CoreQuestionHelper */].getQuestionStateClass(question.state || '');
                });
            });
        }
        /**
         * Open the navigation modal.
         *
         * @return Promise resolved when done.
         */
        openNavigation() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (this.reloadNavigation) {
                    // Some data has changed, reload the navigation.
                    const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                    yield utils["a" /* CoreUtils */].ignoreErrors(this.loadNavigation());
                    modal.dismiss();
                    this.reloadNavigation = false;
                }
                // Create the navigation modal.
                const modalData = yield dom["a" /* CoreDomUtils */].openSideModal({
                    component: navigation_modal["a" /* AddonModQuizNavigationModalComponent */],
                    componentProps: {
                        navigation: this.navigation,
                        summaryShown: this.showSummary,
                        currentPage: (_a = this.attempt) === null || _a === void 0 ? void 0 : _a.currentpage,
                        isReview: false,
                    },
                });
                if (modalData && modalData.action == navigation_modal["a" /* AddonModQuizNavigationModalComponent */].CHANGE_PAGE) {
                    this.changePage(modalData.page, true, modalData.slot);
                }
            });
        }
        /**
         * Prepare the answers to be sent for the attempt.
         *
         * @return Promise resolved with the answers.
         */
        prepareAnswers() {
            return question_helper["a" /* CoreQuestionHelper */].prepareAnswers(this.questions, this.getAnswers(), this.offline, this.component, this.quiz.coursemodule);
        }
        /**
         * Process attempt.
         *
         * @param userFinish Whether the user clicked to finish the attempt.
         * @param timeUp Whether the quiz time is up.
         * @param retrying Whether we're retrying the change.
         * @return Promise resolved when done.
         */
        processAttempt(userFinish, timeUp, retrying) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the answers to send.
                let answers = {};
                if (!this.showSummary) {
                    answers = yield this.prepareAnswers();
                }
                try {
                    // Send the answers.
                    yield services_quiz["a" /* AddonModQuiz */].processAttempt(this.quiz, this.attempt, answers, this.preflightData, userFinish, timeUp, this.offline);
                }
                catch (error) {
                    if (!error || error.errorcode != 'submissionoutofsequencefriendlymessage') {
                        throw error;
                    }
                    try {
                        // There was an error with the sequence check. Try to ammend it.
                        yield this.fixSequenceChecks();
                    }
                    catch (_a) {
                        throw error;
                    }
                    if (retrying) {
                        // We're already retrying, don't send the data again because it could cause an infinite loop.
                        throw error;
                    }
                    // Sequence checks updated, try to send the data again.
                    return this.processAttempt(userFinish, timeUp, true);
                }
                // Answers saved, cancel auto save.
                this.autoSave.cancelAutoSave();
                this.autoSave.hideAutoSaveError();
                if (this.formElement) {
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, !this.offline, sites["b" /* CoreSites */].getCurrentSiteId());
                }
                return question_helper["a" /* CoreQuestionHelper */].clearTmpData(this.questions, this.component, this.quiz.coursemodule);
            });
        }
        /**
         * Scroll to a certain question.
         *
         * @param slot Slot of the question to scroll to.
         */
        scrollToQuestion(slot) {
            dom["a" /* CoreDomUtils */].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_quiz-question-' + slot);
        }
        /**
         * Show connection error.
         *
         * @param ev Click event.
         */
        showConnectionError(ev) {
            this.autoSave.showAutoSaveError(ev);
        }
        /**
         * Convenience function to start the player.
         */
        start() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.loaded = false;
                    if (!this.quizDataLoaded) {
                        // Fetch data.
                        yield this.fetchData();
                        this.quizDataLoaded = true;
                    }
                    // Quiz data has been loaded, try to start or continue.
                    yield this.startOrContinueAttempt();
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Start or continue an attempt.
         *
         * @return Promise resolved when done.
         */
        startOrContinueAttempt() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    let attempt = this.newAttempt ? undefined : this.lastAttempt;
                    // Get the preflight data and start attempt if needed.
                    attempt = yield quiz_helper["a" /* AddonModQuizHelper */].getAndCheckPreflightData(this.quiz, this.quizAccessInfo, this.preflightData, attempt, this.offline, false, 'addon.mod_quiz.startattempt');
                    // Re-fetch attempt access information with the right attempt (might have changed because a new attempt was created).
                    this.attemptAccessInfo = yield services_quiz["a" /* AddonModQuiz */].getAttemptAccessInformation(this.quiz.id, attempt.id, {
                        cmId: this.quiz.coursemodule,
                        readingStrategy: this.offline ? 1 /* PREFER_CACHE */ : 2 /* ONLY_NETWORK */,
                    });
                    this.attempt = attempt;
                    yield this.loadNavigation();
                    if (this.attempt.state != services_quiz["b" /* AddonModQuizProvider */].ATTEMPT_OVERDUE && !this.attempt.finishedOffline) {
                        // Attempt not overdue and not finished in offline, load page.
                        yield this.loadPage(this.attempt.currentpage);
                        this.initTimer();
                    }
                    else {
                        // Attempt is overdue or finished in offline, we can only load the summary.
                        yield this.loadSummary();
                    }
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_quiz.errorgetquestions', true);
                }
            });
        }
        /**
         * Quiz time has finished.
         */
        timeUp() {
            if (this.timeUpCalled) {
                return;
            }
            this.timeUpCalled = true;
            this.finishAttempt(false, true);
        }
    }
    AddonModQuizPlayerPage.ɵfac = function AddonModQuizPlayerPage_Factory(t) { return new (t || AddonModQuizPlayerPage)(core["yc" /* ɵɵdirectiveInject */](core["j" /* ChangeDetectorRef */]), core["yc" /* ɵɵdirectiveInject */](core["r" /* ElementRef */])); };
    AddonModQuizPlayerPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModQuizPlayerPage, selectors: [["page-addon-mod-quiz-player"]], viewQuery: function AddonModQuizPlayerPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["u" /* IonContent */], true);
                core["ud" /* ɵɵviewQuery */](_c0, true);
                core["ud" /* ɵɵviewQuery */](question_question["a" /* CoreQuestionComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.content = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.questionComponents = _t);
            }
        }, decls: 21, vars: 17, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId", 4, "ngIf"], ["slot", "end"], ["fill", "clear", "id", "addon-mod_quiz-connection-error-button", "aria-haspopup", "dialog", 3, "hidden", "click"], ["name", "fas-exclamation-circle", "slot", "icon-only", "aria-hidden", "true"], [3, "click", 4, "ngIf"], ["color", "light", 4, "ngIf"], [3, "hideUntil"], ["expand", "block", "class", "ion-margin", 3, "click", 4, "ngIf"], ["name", "addon-mod_quiz-player-form", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "addon-mod_quiz-table", 4, "ngIf"], [4, "ngIf"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], [3, "click"], ["name", "fas-bookmark", "slot", "icon-only", "aria-hidden", "true"], ["color", "light"], [3, "endTime", "timerText", "align", "finished"], ["fill", "clear", 3, "click", 4, "ngIf"], ["fill", "clear", 3, "click"], ["name", "fas-chevron-left", "slot", "icon-only", "aria-hidden", "true"], ["name", "fas-chevron-right", "slot", "icon-only", "aria-hidden", "true"], ["expand", "block", 1, "ion-margin", 3, "click"], ["name", "addon-mod_quiz-player-form"], ["quizForm", ""], [4, "ngFor", "ngForOf"], [3, "id"], ["class", "inline", 4, "ngIf"], ["slot", "end", "class", "ion-text-wrap ion-margin-horizontal addon-mod_quiz-question-note", 4, "ngIf"], ["contextLevel", "module", 1, "ion-text-wrap", 3, "question", "component", "componentId", "attemptId", "usageId", "offlineEnabled", "contextInstanceId", "courseId", "preferredBehaviour", "review", "onAbort", "buttonClicked"], [1, "inline"], ["slot", "end", 1, "ion-text-wrap", "ion-margin-horizontal", "addon-mod_quiz-question-note"], ["class", "block", 4, "ngIf"], [1, "block"], [1, "ion-text-wrap"], ["expand", "block", "color", "light", 3, "click"], ["name", "fas-chevron-left", "slot", "start", "aria-hidden", "true"], ["expand", "block", 3, "click"], ["name", "fas-chevron-right", "slot", "end", "aria-hidden", "true"], [1, "addon-mod_quiz-table"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-center", "ion-hide-md-down"], ["size", "3", 1, "ion-text-center", "ion-hide-md-up"], ["size", "9", 1, "ion-text-center"], [3, "endTime", "timerText", "finished", 4, "ngIf"], ["expand", "block", "core-link", "", 3, "href", 4, "ngIf"], [3, "detail", "button", "click", 4, "ngIf"], [3, "detail", "button", "click"], ["size", "3", 1, "ion-text-center"], ["size", "9", 1, "ion-text-center", "ion-text-wrap"], [3, "endTime", "timerText", "finished"], [1, "item-heading"], ["expand", "block", "core-link", "", 3, "href"], ["name", "fas-external-link-alt", "slot", "end", "aria-hidden", "true"], ["expand", "block", "core-link", "", 1, "ion-margin", 3, "href"]], template: function AddonModQuizPlayerPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonModQuizPlayerPage_core_format_text_6_Template, 1, 3, "core-format-text", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["Ec" /* ɵɵelementStart */](8, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function AddonModQuizPlayerPage_Template_ion_button_click_8_listener($event) { return ctx.showConnectionError($event); });
                core["Pc" /* ɵɵpipe */](9, "translate");
                core["zc" /* ɵɵelement */](10, "ion-icon", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](11, AddonModQuizPlayerPage_ion_button_11_Template, 3, 3, "ion-button", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](12, AddonModQuizPlayerPage_ion_toolbar_12_Template, 7, 7, "ion-toolbar", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "ion-content");
                core["Ec" /* ɵɵelementStart */](14, "core-loading", 8);
                core["nd" /* ɵɵtemplate */](15, AddonModQuizPlayerPage_ion_toolbar_15_Template, 4, 2, "ion-toolbar", 7);
                core["nd" /* ɵɵtemplate */](16, AddonModQuizPlayerPage_ion_button_16_Template, 3, 3, "ion-button", 9);
                core["nd" /* ɵɵtemplate */](17, AddonModQuizPlayerPage_form_17_Template, 3, 1, "form", 10);
                core["nd" /* ɵɵtemplate */](18, AddonModQuizPlayerPage_ion_grid_18_Template, 4, 2, "ion-grid", 11);
                core["nd" /* ɵɵtemplate */](19, AddonModQuizPlayerPage_ion_card_19_Template, 26, 16, "ion-card", 12);
                core["nd" /* ɵɵtemplate */](20, AddonModQuizPlayerPage_ion_card_20_Template, 9, 7, "ion-card", 13);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 13, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.quiz);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.autoSaveError);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](9, 15, "addon.mod_quiz.connectionerror"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.navigation.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && ctx.endTime && ctx.questions.length && !ctx.quizAborted && !ctx.showSummary);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.endTime && ctx.questions.length && !ctx.quizAborted && !ctx.showSummary);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.attempt);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.questions.length && !ctx.quizAborted && !ctx.showSummary);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.questions.length && !ctx.quizAborted && !ctx.showSummary);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.quizAborted && ctx.showSummary && ctx.summaryQuestions.length);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt && (!ctx.questions.length && !ctx.showSummary || ctx.quizAborted));
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["xb" /* IonTitle */], timer["a" /* CoreTimerComponent */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["t" /* NgForm */], common["s" /* NgForOf */], ionic_angular["m" /* IonCard */], ionic_angular["I" /* IonItemDivider */], ionic_angular["N" /* IonLabel */], question_question["a" /* CoreQuestionComponent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], ionic_angular["H" /* IonItem */], directives_link["a" /* CoreLinkDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], styles: ["[_nghost-%COMP%]   .addon-mod_quiz-question-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2px;margin-bottom:2px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{border-bottom:1px solid var(--gray)}"] });
    return AddonModQuizPlayerPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/quiz/pages/player/player.module.ts
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
        component: player_page_AddonModQuizPlayerPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    },
];
let player_module_AddonModQuizPlayerPageModule = /*@__PURE__*/ (() => {
    class AddonModQuizPlayerPageModule {
    }
    AddonModQuizPlayerPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModQuizPlayerPageModule });
    AddonModQuizPlayerPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModQuizPlayerPageModule_Factory(t) { return new (t || AddonModQuizPlayerPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreQuestionComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModQuizPlayerPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](player_module_AddonModQuizPlayerPageModule, { declarations: [player_page_AddonModQuizPlayerPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreQuestionComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);