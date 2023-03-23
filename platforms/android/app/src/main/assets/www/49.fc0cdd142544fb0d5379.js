(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "eJtl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModFeedbackLazyModule", function() { return /* binding */ feedback_lazy_module_AddonModFeedbackLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/feedback/components/components.module.ts
var components_module = __webpack_require__("1IpS");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/mod/feedback/components/index/index.ts
var index = __webpack_require__("hYz8");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/index/index.ts
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
 * Page that displays a feedback.
 */
let index_AddonModFeedbackIndexPage = /*@__PURE__*/ (() => {
    class AddonModFeedbackIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
        /**
         * Component being initialized.
         */
        ngOnInit() {
            super.ngOnInit();
            this.selectedTab = services_navigator["a" /* CoreNavigator */].getRouteParam('tab');
            this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group');
        }
    }
    AddonModFeedbackIndexPage.ɵfac = function AddonModFeedbackIndexPage_Factory(t) { return ɵAddonModFeedbackIndexPage_BaseFactory(t || AddonModFeedbackIndexPage); };
    AddonModFeedbackIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFeedbackIndexPage, selectors: [["page-addon-mod-feedback-index"]], viewQuery: function AddonModFeedbackIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModFeedbackIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 14, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "group", "tab", "dataRetrieved"]], template: function AddonModFeedbackIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModFeedbackIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-feedback-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModFeedbackIndexPage_Template_addon_mod_feedback_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId)("group", ctx.selectedGroup)("tab", ctx.selectedTab);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModFeedbackIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModFeedbackIndexPage;
})();
const ɵAddonModFeedbackIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModFeedbackIndexPage);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/classes/page-items-list-manager.ts
var page_items_list_manager = __webpack_require__("8l6b");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback.ts
var feedback = __webpack_require__("MNPK");

// EXTERNAL MODULE: ./src/addons/mod/feedback/services/feedback-helper.ts
var feedback_helper = __webpack_require__("96hm");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__("FeAf");

// EXTERNAL MODULE: ./src/core/pipes/format-date.ts
var format_date = __webpack_require__("uYHD");

// CONCATENATED MODULE: ./src/addons/mod/feedback/pages/respondents/respondents.ts

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



















function AddonModFeedbackRespondentsPage_ion_item_15_ng_container_2_Template(rf, ctx) {
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
function AddonModFeedbackRespondentsPage_ion_item_15_ng_container_3_Template(rf, ctx) {
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
function AddonModFeedbackRespondentsPage_ion_item_15_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 12);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const groupOpt_r6 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", groupOpt_r6.id);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", groupOpt_r6.name, " ");
    }
}
const _c0 = function (a0) { return { header: a0 }; };
function AddonModFeedbackRespondentsPage_ion_item_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 8);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 9);
        core["nd" /* ɵɵtemplate */](2, AddonModFeedbackRespondentsPage_ion_item_15_ng_container_2_Template, 3, 3, "ng-container", 7);
        core["nd" /* ɵɵtemplate */](3, AddonModFeedbackRespondentsPage_ion_item_15_ng_container_3_Template, 3, 3, "ng-container", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 10);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModFeedbackRespondentsPage_ion_item_15_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.selectedGroup = $event; })("ionChange", function AddonModFeedbackRespondentsPage_ion_item_15_Template_ion_select_ionChange_4_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.loadAttempts(ctx_r9.selectedGroup); });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackRespondentsPage_ion_item_15_ion_select_option_6_Template, 2, 2, "ion-select-option", 11);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.groupInfo.separateGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.groupInfo.visibleGroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.selectedGroup)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](7, _c0, core["Qc" /* ɵɵpipeBind1 */](5, 5, "core.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r0.groupInfo.groups);
    }
}
function AddonModFeedbackRespondentsPage_ng_container_16_ion_item_6_p_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "coreFormatDate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const attempt_r13 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, attempt_r13.timemodified * 1000));
    }
}
function AddonModFeedbackRespondentsPage_ng_container_16_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackRespondentsPage_ng_container_16_ion_item_6_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r17); const attempt_r13 = ctx.$implicit; const ctx_r16 = core["Oc" /* ɵɵnextContext */](2); return ctx_r16.responses.select(attempt_r13); });
        core["zc" /* ɵɵelement */](1, "core-user-avatar", 17);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "p", 18);
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](5, AddonModFeedbackRespondentsPage_ng_container_16_ion_item_6_p_5_Template, 3, 3, "p", 7);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const attempt_r13 = ctx.$implicit;
        const ctx_r10 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r10.responses.getItemAriaCurrent(attempt_r13));
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("user", attempt_r13);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](attempt_r13.fullname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", attempt_r13.timemodified);
    }
}
function AddonModFeedbackRespondentsPage_ng_container_16_ion_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 19);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackRespondentsPage_ng_container_16_ion_button_7_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r19); const ctx_r18 = core["Oc" /* ɵɵnextContext */](2); return ctx_r18.loadAttempts(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loadmore"), " ");
    }
}
function AddonModFeedbackRespondentsPage_ng_container_16_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "ion-spinner");
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.loading"));
    }
}
const _c1 = function (a0) { return { $a: a0 }; };
function AddonModFeedbackRespondentsPage_ng_container_16_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackRespondentsPage_ng_container_16_ion_item_6_Template, 6, 4, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](7, AddonModFeedbackRespondentsPage_ng_container_16_ion_button_7_Template, 3, 3, "ion-button", 14);
        core["nd" /* ɵɵtemplate */](8, AddonModFeedbackRespondentsPage_ng_container_16_ion_item_8_Template, 4, 3, "ion-item", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 4, "addon.mod_feedback.non_anonymous_entries", core["ad" /* ɵɵpureFunction1 */](7, _c1, ctx_r1.responses.responses.total)));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r1.responses.responses.attempts);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.responses.responses.canLoadMore && !ctx_r1.loadingMore);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r1.responses.responses.canLoadMore && ctx_r1.loadingMore);
    }
}
function AddonModFeedbackRespondentsPage_ng_container_17_ion_item_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackRespondentsPage_ng_container_17_ion_item_6_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r25); const attempt_r23 = ctx.$implicit; const ctx_r24 = core["Oc" /* ɵɵnextContext */](2); return ctx_r24.responses.select(attempt_r23); });
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["Ec" /* ɵɵelementStart */](2, "h2");
        core["pd" /* ɵɵtext */](3);
        core["Pc" /* ɵɵpipe */](4, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const attempt_r23 = ctx.$implicit;
        const ctx_r20 = core["Oc" /* ɵɵnextContext */](2);
        core["mc" /* ɵɵattribute */]("aria-current", ctx_r20.responses.getItemAriaCurrent(attempt_r23));
        core["lc" /* ɵɵadvance */](3);
        core["sd" /* ɵɵtextInterpolate2 */]("", core["Qc" /* ɵɵpipeBind1 */](4, 3, "addon.mod_feedback.response_nr"), ": ", attempt_r23.number, "");
    }
}
function AddonModFeedbackRespondentsPage_ng_container_17_ion_button_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 19);
        core["Mc" /* ɵɵlistener */]("click", function AddonModFeedbackRespondentsPage_ng_container_17_ion_button_7_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r27); const ctx_r26 = core["Oc" /* ɵɵnextContext */](2); return ctx_r26.loadAttempts(); });
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.loadmore"), " ");
    }
}
function AddonModFeedbackRespondentsPage_ng_container_17_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 20);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "ion-spinner");
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.loading"));
    }
}
function AddonModFeedbackRespondentsPage_ng_container_17_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Ec" /* ɵɵelementStart */](1, "ion-item-divider");
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](6, AddonModFeedbackRespondentsPage_ng_container_17_ion_item_6_Template, 5, 5, "ion-item", 13);
        core["nd" /* ɵɵtemplate */](7, AddonModFeedbackRespondentsPage_ng_container_17_ion_button_7_Template, 3, 3, "ion-button", 14);
        core["nd" /* ɵɵtemplate */](8, AddonModFeedbackRespondentsPage_ng_container_17_ion_item_8_Template, 4, 3, "ion-item", 15);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Rc" /* ɵɵpipeBind2 */](5, 4, "addon.mod_feedback.anonymous_entries", core["ad" /* ɵɵpureFunction1 */](7, _c1, ctx_r2.responses.anonResponses.total)));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r2.responses.anonResponses.attempts);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.responses.anonResponses.canLoadMore && !ctx_r2.loadingMore);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r2.responses.anonResponses.canLoadMore && ctx_r2.loadingMore);
    }
}
/**
 * Page that displays feedback respondents.
 */
let respondents_AddonModFeedbackRespondentsPage = /*@__PURE__*/ (() => {
    class AddonModFeedbackRespondentsPage {
        constructor(route) {
            this.page = 0;
            this.loaded = false;
            this.loadingMore = false;
            this.responses = new respondents_AddonModFeedbackResponsesManager(route.component);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.selectedGroup = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('group') || 0;
                yield this.fetchData();
                this.responses.start(this.splitView);
            });
        }
        /**
         * Fetch all the data required for the view.
         *
         * @param refresh Empty events array first.
         * @return Promise resolved when done.
         */
        fetchData(refresh = false) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.page = 0;
                this.responses.resetItems();
                try {
                    this.feedback = yield feedback["a" /* AddonModFeedback */].getFeedback(this.courseId, this.cmId);
                    this.groupInfo = yield groups["a" /* CoreGroups */].getActivityGroupInfo(this.cmId);
                    this.selectedGroup = groups["a" /* CoreGroups */].validateGroupId(this.selectedGroup, this.groupInfo);
                    yield this.loadGroupAttempts(this.selectedGroup);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                    if (!refresh) {
                        // Some call failed on first fetch, go back.
                        services_navigator["a" /* CoreNavigator */].back();
                    }
                }
            });
        }
        /**
         * Load Group attempts.
         *
         * @param groupId If defined it will change group if not, it will load more attempts for the same group.
         * @return Resolved with the attempts loaded.
         */
        loadGroupAttempts(groupId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (typeof groupId == 'undefined') {
                    this.page++;
                    this.loadingMore = true;
                }
                else {
                    this.selectedGroup = groupId;
                    this.page = 0;
                    this.responses.resetItems();
                }
                try {
                    const responses = yield feedback_helper["a" /* AddonModFeedbackHelper */].getResponsesAnalysis(this.feedback.id, {
                        groupId: this.selectedGroup,
                        page: this.page,
                        cmId: this.cmId,
                    });
                    this.responses.setResponses(responses);
                }
                finally {
                    this.loadingMore = false;
                    this.loaded = true;
                }
            });
        }
        /**
         * Change selected group or load more attempts.
         *
         * @param groupId Group ID selected. If not defined, it will load more attempts.
         */
        loadAttempts(groupId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield this.loadGroupAttempts(groupId);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errorgetmodule', true);
                }
            });
        }
        /**
         * Refresh the attempts.
         *
         * @param refresher Refresher.
         */
        refreshFeedback(refresher) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const promises = [];
                promises.push(groups["a" /* CoreGroups */].invalidateActivityGroupInfo(this.cmId));
                if (this.feedback) {
                    promises.push(feedback["a" /* AddonModFeedback */].invalidateResponsesAnalysisData(this.feedback.id));
                }
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(Promise.all(promises));
                    yield this.fetchData(true);
                }
                finally {
                    refresher.complete();
                }
            });
        }
    }
    AddonModFeedbackRespondentsPage.ɵfac = function AddonModFeedbackRespondentsPage_Factory(t) { return new (t || AddonModFeedbackRespondentsPage)(core["yc" /* ɵɵdirectiveInject */](router["a" /* ActivatedRoute */])); };
    AddonModFeedbackRespondentsPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModFeedbackRespondentsPage, selectors: [["page-addon-mod-feedback-respondents"]], viewQuery: function AddonModFeedbackRespondentsPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](split_view["a" /* CoreSplitViewComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.splitView = _t.first);
            }
        }, decls: 18, vars: 14, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [1, "ion-no-margin"], ["class", "ion-text-wrap", 4, "ngIf"], [4, "ngIf"], [1, "ion-text-wrap"], ["id", "addon-feedback-groupslabel"], ["aria-labelledby", "addon-feedback-groupslabel", "interface", "action-sheet", 3, "ngModel", "interfaceOptions", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "ion-text-wrap", "button", "", "detail", "true", 3, "click", 4, "ngFor", "ngForOf"], ["class", "ion-margin", "expand", "block", 3, "click", 4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["slot", "start", 3, "user"], [1, "item-heading"], ["expand", "block", 1, "ion-margin", 3, "click"], [1, "ion-text-center"]], template: function AddonModFeedbackRespondentsPage_Template(rf, ctx) {
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
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](8, "ion-content");
                core["Ec" /* ɵɵelementStart */](9, "core-split-view");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 2);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModFeedbackRespondentsPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshFeedback($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 3);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 4);
                core["Ec" /* ɵɵelementStart */](14, "ion-list", 5);
                core["nd" /* ɵɵtemplate */](15, AddonModFeedbackRespondentsPage_ion_item_15_Template, 7, 9, "ion-item", 6);
                core["nd" /* ɵɵtemplate */](16, AddonModFeedbackRespondentsPage_ng_container_16_Template, 9, 9, "ng-container", 7);
                core["nd" /* ɵɵtemplate */](17, AddonModFeedbackRespondentsPage_ng_container_17_Template, 9, 9, "ng-container", 7);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 10, "addon.mod_feedback.responses"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 12, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.groupInfo && (ctx.groupInfo.separateGroups || ctx.groupInfo.visibleGroups));
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.responses.responses.total > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.responses.anonResponses.total > 0);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], split_view["a" /* CoreSplitViewComponent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], ionic_angular["I" /* IonItemDivider */], user_avatar["a" /* CoreUserAvatarComponent */], ionic_angular["k" /* IonButton */], ionic_angular["pb" /* IonSpinner */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], format_date["a" /* CoreFormatDatePipe */]], encapsulation: 2 });
    return AddonModFeedbackRespondentsPage;
})();
/**
 * Entries manager.
 */
class respondents_AddonModFeedbackResponsesManager extends page_items_list_manager["a" /* CorePageItemsListManager */] {
    constructor(pageComponent) {
        super(pageComponent);
        this.responses = {
            attempts: [],
            total: 0,
            canLoadMore: false,
        };
        this.anonResponses = {
            attempts: [],
            total: 0,
            canLoadMore: false,
        };
    }
    /**
     * Update responses.
     *
     * @param responses Responses.
     */
    setResponses(responses) {
        this.responses.total = responses.totalattempts;
        this.anonResponses.total = responses.totalanonattempts;
        if (this.anonResponses.attempts.length < responses.totalanonattempts) {
            this.anonResponses.attempts = this.anonResponses.attempts.concat(responses.anonattempts);
        }
        if (this.responses.attempts.length < responses.totalattempts) {
            this.responses.attempts = this.responses.attempts.concat(responses.attempts);
        }
        this.anonResponses.canLoadMore = this.anonResponses.attempts.length < responses.totalanonattempts;
        this.responses.canLoadMore = this.responses.attempts.length < responses.totalattempts;
        this.setItems(this.responses.attempts.concat(this.anonResponses.attempts));
    }
    /**
     * @inheritdoc
     */
    resetItems() {
        super.resetItems();
        this.responses.total = 0;
        this.responses.attempts = [];
        this.anonResponses.total = 0;
        this.anonResponses.attempts = [];
    }
    /**
     * @inheritdoc
     */
    getItemPath(entry) {
        return `attempt/${entry.id}`;
    }
}

// EXTERNAL MODULE: ./src/app/app-routing.module.ts
var app_routing_module = __webpack_require__("vY5A");

// EXTERNAL MODULE: ./src/core/services/screen.ts
var screen = __webpack_require__("Y+03");

// CONCATENATED MODULE: ./src/addons/mod/feedback/feedback-lazy.module.ts
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
        component: index_AddonModFeedbackIndexPage,
    },
    {
        path: ':courseId/:cmId/form',
        loadChildren: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, "HFvr")).then(m => m.AddonModFeedbackFormPageModule),
    },
    {
        path: ':courseId/:cmId/nonrespondents',
        loadChildren: () => __webpack_require__.e(/* import() */ 51).then(__webpack_require__.bind(null, "B1At"))
            .then(m => m.AddonModFeedbackNonRespondentsPageModule),
    },
];
const mobileRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/respondents',
        component: respondents_AddonModFeedbackRespondentsPage,
    },
    {
        path: ':courseId/:cmId/respondents/attempt/:attemptId',
        loadChildren: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "LXV0")).then(m => m.AddonModFeedbackAttemptPageModule),
    },
];
const tabletRoutes = [
    ...commonRoutes,
    {
        path: ':courseId/:cmId/respondents',
        component: respondents_AddonModFeedbackRespondentsPage,
        children: [
            {
                path: 'attempt/:attemptId',
                loadChildren: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "LXV0")).then(m => m.AddonModFeedbackAttemptPageModule),
            },
        ],
    },
];
const routes = [
    ...Object(app_routing_module["c" /* conditionalRoutes */])(mobileRoutes, () => screen["a" /* CoreScreen */].isMobile),
    ...Object(app_routing_module["c" /* conditionalRoutes */])(tabletRoutes, () => screen["a" /* CoreScreen */].isTablet),
];
let feedback_lazy_module_AddonModFeedbackLazyModule = /*@__PURE__*/ (() => {
    class AddonModFeedbackLazyModule {
    }
    AddonModFeedbackLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModFeedbackLazyModule });
    AddonModFeedbackLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModFeedbackLazyModule_Factory(t) { return new (t || AddonModFeedbackLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModFeedbackComponentsModule */],
            ]] });
    return AddonModFeedbackLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](feedback_lazy_module_AddonModFeedbackLazyModule, { declarations: [index_AddonModFeedbackIndexPage,
            respondents_AddonModFeedbackRespondentsPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModFeedbackComponentsModule */]] });
})();


/***/ })

}]);