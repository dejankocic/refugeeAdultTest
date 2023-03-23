(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "LXV0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModFeedbackAttemptPageModule", function() { return /* binding */ attempt_module_AddonModFeedbackAttemptPageModule; });

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback.ts
var feedback = __webpack_require__("MNPK");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback-helper.ts
var feedback_helper = __webpack_require__("96hm");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/user-link.ts
var user_link = __webpack_require__("nu3w");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/components/mark-required/mark-required.ts
var mark_required = __webpack_require__("FasJ");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/attempt/attempt.ts

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

















function AddonModFeedbackAttemptPage_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.attempt.fullname);
    }
}
function AddonModFeedbackAttemptPage_ng_container_7_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["sd" /* ɵɵtextInterpolate2 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 2, "addon.mod_feedback.response_nr"), ": ", ctx_r1.anonAttempt.number, " ");
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ion_item_1_p_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r6.attempt.timemodified * 1000));
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "core-user-avatar", 9);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "h2");
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackAttemptPage_ion_list_10_ion_item_1_p_6_Template, 3, 3, "p", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("userId", ctx_r3.attempt.userid)("courseId", ctx_r3.attempt.courseid);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 6, "core.user.viewprofile"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("user", ctx_r3.attempt);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](ctx_r3.attempt.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.attempt.timemodified);
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 10);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](3);
        core["td" /* ɵɵtextInterpolate3 */](" ", core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_feedback.response_nr"), ": ", ctx_r4.anonAttempt.number, " (", core["Qc" /* ɵɵpipeBind1 */](5, 5, "addon.mod_feedback.anonymous"), ") ");
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_core_spacer_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-spacer");
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_h2_2_span_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "span");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r8 = core["Oc" /* ɵɵnextContext */](3).$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */]("", item_r8.itemnumber, ". ");
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_h2_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "h2", 15);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_h2_2_span_1_Template, 2, 1, "span", 2);
        core["zc" /* ɵɵelement */](2, "core-format-text", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r11 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("core-mark-required", item_r8.required);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r11.feedback.autonumbering && item_r8.itemnumber);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r11.component)("componentId", ctx_r11.cmId)("text", item_r8.name)("contextInstanceId", ctx_r11.cmId)("courseId", ctx_r11.courseId);
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["zc" /* ɵɵelement */](1, "core-format-text", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r8 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        const ctx_r12 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("component", ctx_r12.component)("componentId", ctx_r12.cmId)("text", item_r8.submittedValue)("contextInstanceId", ctx_r12.cmId)("courseId", ctx_r12.courseId);
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 13);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_h2_2_Template, 3, 7, "h2", 14);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_p_3_Template, 2, 5, "p", 2);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const item_r8 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["Vc" /* ɵɵproperty */]("color", item_r8.dependitem > 0 ? "light" : "");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r8.name);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r8.submittedValue);
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_core_spacer_1_Template, 1, 0, "core-spacer", 2);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_ion_item_2_Template, 4, 3, "ion-item", 12);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r8 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r8.typ == "pagebreak");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", item_r8.typ != "pagebreak");
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 11);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r5 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r5.items);
    }
}
function AddonModFeedbackAttemptPage_ion_list_10_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-list", 5);
        core["nd" /* ɵɵtemplate */](1, AddonModFeedbackAttemptPage_ion_list_10_ion_item_1_Template, 7, 8, "ion-item", 6);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackAttemptPage_ion_list_10_ion_item_2_Template, 6, 7, "ion-item", 7);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackAttemptPage_ion_list_10_ng_container_3_Template, 2, 1, "ng-container", 2);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.attempt);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.anonAttempt);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.items && ctx_r2.items.length);
    }
}
/**
 * Page that displays a feedback attempt review.
 */
let attempt_AddonModFeedbackAttemptPage = /*@__PURE__*/ (() => {
    class AddonModFeedbackAttemptPage {
        constructor() {
            this.items = [];
            this.component = feedback["b" /* AddonModFeedbackProvider */].COMPONENT;
            this.loaded = false;
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.attemptId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('attemptId');
            this.fetchData();
        }
        /**
         * Fetch all the data required for the view.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    this.feedback = yield feedback["a" /* AddonModFeedback */].getFeedback(this.courseId, this.cmId);
                    const attempt = yield feedback["a" /* AddonModFeedback */].getAttempt(this.feedback.id, this.attemptId, { cmId: this.cmId });
                    if (this.isAnonAttempt(attempt)) {
                        this.anonAttempt = attempt;
                        delete this.attempt;
                    }
                    else {
                        this.attempt = attempt;
                        delete this.anonAttempt;
                    }
                    const items = yield feedback["a" /* AddonModFeedback */].getItems(this.feedback.id, { cmId: this.cmId });
                    // Add responses and format items.
                    this.items = items.items.map((item) => {
                        const formItem = feedback_helper["a" /* AddonModFeedbackHelper */].getItemForm(item, true);
                        if (!formItem) {
                            return;
                        }
                        const attemptItem = formItem;
                        if (item.typ == 'label') {
                            attemptItem.submittedValue = utils_text["a" /* CoreTextUtils */].replacePluginfileUrls(item.presentation, item.itemfiles);
                        }
                        else {
                            for (const x in attempt.responses) {
                                if (attempt.responses[x].id == item.id) {
                                    attemptItem.submittedValue = attempt.responses[x].printval;
                                    break;
                                }
                            }
                        }
                        return attemptItem;
                    }).filter((itemData) => itemData); // Filter items with errors.
                }
                catch (message) {
                    // Some call failed on fetch, go back.
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(message, 'core.course.errorgetmodule', true);
                    services_navigator["a" /* CoreNavigator */].back();
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Check if an attempt is anonymous or not.
         *
         * @param attempt Attempt to check.
         */
        isAnonAttempt(attempt) {
            return !('fullname' in attempt);
        }
    }
    AddonModFeedbackAttemptPage.ɵfac = function AddonModFeedbackAttemptPage_Factory(t) { return new (t || AddonModFeedbackAttemptPage)(); };
    AddonModFeedbackAttemptPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFeedbackAttemptPage, selectors: [["page-addon-mod-feedback-attempt"]], decls: 11, vars: 7, consts: [["slot", "start"], [3, "text"], [4, "ngIf"], [3, "hideUntil"], ["class", "ion-no-margin", 4, "ngIf"], [1, "ion-no-margin"], ["class", "ion-text-wrap", "core-user-link", "", 3, "userId", "courseId", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["core-user-link", "", 1, "ion-text-wrap", 3, "userId", "courseId"], ["slot", "start", 3, "user"], [1, "ion-text-wrap"], [4, "ngFor", "ngForOf"], ["class", "ion-text-wrap", 3, "color", 4, "ngIf"], [1, "ion-text-wrap", 3, "color"], [3, "core-mark-required", 4, "ngIf"], [3, "core-mark-required"], ["contextLevel", "module", 3, "component", "componentId", "text", "contextInstanceId", "courseId"]], template: function AddonModFeedbackAttemptPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "ion-header");
                core["Ec" /* ɵɵelementStart */](1, "ion-toolbar");
                core["Ec" /* ɵɵelementStart */](2, "ion-buttons", 0);
                core["zc" /* ɵɵelement */](3, "ion-back-button", 1);
                core["Pc" /* ɵɵpipe */](4, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "h1");
                core["nd" /* ɵɵtemplate */](6, AddonModFeedbackAttemptPage_ng_container_6_Template, 2, 1, "ng-container", 2);
                core["nd" /* ɵɵtemplate */](7, AddonModFeedbackAttemptPage_ng_container_7_Template, 3, 4, "ng-container", 2);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 3);
                core["nd" /* ɵɵtemplate */](10, AddonModFeedbackAttemptPage_ion_list_10_Template, 4, 3, "ion-list", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 5, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.anonAttempt);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.attempt || ctx.anonAttempt);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["H" /* IonItem */], user_link["a" /* CoreUserLinkDirective */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["N" /* IonLabel */], common["s" /* NgForOf */], spacer["a" /* CoreSpacerComponent */], mark_required["a" /* CoreMarkRequiredComponent */], format_text["a" /* CoreFormatTextDirective */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonModFeedbackAttemptPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/attempt/attempt.module.ts
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
        component: attempt_AddonModFeedbackAttemptPage,
    },
];
let attempt_module_AddonModFeedbackAttemptPageModule = /*@__PURE__*/ (() => {
    class AddonModFeedbackAttemptPageModule {
    }
    AddonModFeedbackAttemptPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModFeedbackAttemptPageModule });
    AddonModFeedbackAttemptPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModFeedbackAttemptPageModule_Factory(t) { return new (t || AddonModFeedbackAttemptPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonModFeedbackAttemptPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](attempt_module_AddonModFeedbackAttemptPageModule, { declarations: [attempt_AddonModFeedbackAttemptPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] }); })();


/***/ })

}]);