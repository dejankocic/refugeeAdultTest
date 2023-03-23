(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "9DI8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCourseCompetenciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FBtE");
/* harmony import */ var _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qjHM");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pHTc");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3LXp");
/* harmony import */ var _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Hahs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("TEn/");
/* harmony import */ var _core_components_loading_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("PgjG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("ofXK");
/* harmony import */ var _core_components_progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TKc2");
/* harmony import */ var _core_components_user_avatar_user_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("FeAf");
/* harmony import */ var _core_components_empty_box_empty_box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("r8G5");
/* harmony import */ var _core_directives_format_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("hMzs");
/* harmony import */ var _core_directives_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("iSJP");
/* harmony import */ var _core_directives_external_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("NcPy");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("sYmb");

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

















function AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](3, 1, "addon.competency.coursecompetencyratingsarepushedtouserplans"));
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](3, 1, "addon.competency.coursecompetencyratingsarenotpushedtouserplans"));
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_ion_item_1_Template, 4, 3, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](2, AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_ion_item_2_Template, 4, 3, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx_r5.competencies.settings.pushratingstouserplans);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", !ctx_r5.competencies.settings.pushratingstouserplans);
    }
}
const _c0 = function (a0, a1) { return { x: a0, y: a1 }; };
const _c1 = function (a0) { return { $a: a0 }; };
function AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](2, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](5, "core-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpropertyInterpolate1 */ "Xc"]("id", "addon-competency-course-", ctx_r6.courseId, "-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind2 */ "Rc"](4, 4, "addon.competency.xcompetenciesproficientoutofyincourse", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpureFunction1 */ "ad"](10, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpureFunction2 */ "bd"](7, _c0, ctx_r6.competencies.statistics.proficientcompetencycount, ctx_r6.competencies.statistics.competencycount))), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpropertyInterpolate1 */ "Xc"]("ariaDescribedBy", "addon-competency-course-", ctx_r6.courseId, "-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("progress", ctx_r6.competencies.statistics.proficientcompetencypercentage);
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_3_p_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵlistener */ "Mc"]("click", function AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_3_p_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵrestoreView */ "gd"](_r13); const comp_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](3); return ctx_r12.openCompetencySummary(comp_r11.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const comp_r11 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate2 */ "sd"](" ", comp_r11.shortname, " - ", comp_r11.idnumber, " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](2, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](5, AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_3_p_5_Template, 3, 2, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](4, 2, "addon.competency.competenciesmostoftennotproficientincourse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", ctx_r7.competencies.statistics.leastproficient);
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_13_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_ion_card_13_ng_container_1_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](2, AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_2_Template, 6, 12, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](3, AddonCompetencyCourseCompetenciesPage_ion_card_13_ion_item_3_Template, 6, 4, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx_r0.competencies.cangradecompetencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx_r0.competencies.statistics.canbegradedincourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx_r0.competencies.statistics.canmanagecoursecompetencies && ctx_r0.competencies.statistics.leastproficientcount > 0);
    }
}
function AddonCompetencyCourseCompetenciesPage_h2_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](2, 1, "addon.competency.coursecompetencies"), " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_ion_card_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](2, "core-user-avatar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](3, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("user", ctx_r2.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](ctx_r2.user.fullname);
    }
}
function AddonCompetencyCourseCompetenciesPage_core_empty_box_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](0, "core-empty-box", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](1, "translate");
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpropertyInterpolate */ "Wc"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](1, 1, "addon.competency.nocompetenciesincourse"));
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_badge_7_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-badge", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("color", competency_r15.usercompetencycourse.proficiency ? "success" : "danger");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", competency_r15.usercompetencycourse.gradename, " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_p_10_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](1, "core-format-text", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("text", competency_r15.competency.description)("contextInstanceId", ctx_r17.courseId);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_a_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("href", competency_r15.comppath.pluginbaseurl + "/competencies.php?competencyframeworkid=" + competency_r15.comppath.framework.id + "&pagecontextid=" + competency_r15.comppath.pagecontextid, _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵsanitizeUrl */ "jd"])("title", competency_r15.comppath.framework.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", competency_r15.comppath.framework.name, " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", competency_r15.comppath.framework.name, " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵlistener */ "Mc"]("click", function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵrestoreView */ "gd"](_r35); const ancestor_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](3); return ctx_r33.openCompetencySummary(ancestor_r29.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ancestor_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", ancestor_r29.name, " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const ancestor_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](ancestor_r29.name);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1, "\u00A0/\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_button_1_Template, 2, 1, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](2, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_ng_container_2_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](3, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_ng_container_3_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const ancestor_r29 = ctx.$implicit;
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.comppath.showlinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", !competency_r15.comppath.showlinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", !ancestor_r29.last);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_ng_container_4_span_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ruleoutcome_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](ruleoutcome_r40.text);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_ng_container_4_span_1_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const ruleoutcome_r40 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ruleoutcome_r40.selected);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](4, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_ng_container_4_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](3, 2, "addon.competency.uponcoursecompletion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", competency_r15.ruleoutcomeoptions);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_p_25_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](2, 1, "addon.competency.noactivities"), " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_item_26_img_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](0, "img", 31);
    }
    if (rf & 2) {
        const activity_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("src", activity_r44.iconurl, _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵsanitizeUrl */ "jd"]);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_item_26_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_item_26_img_1_Template, 1, 1, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](3, "core-format-text", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const activity_r44 = ctx.$implicit;
        const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("href", activity_r44.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵattribute */ "mc"]("aria-label", activity_r44.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", activity_r44.iconurl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("text", activity_r44.name)("contextInstanceId", activity_r44.id)("courseId", ctx_r23.courseId);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_p_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](2, 1, "addon.competency.nouserplanswithcompetency"), " ");
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_ion_item_5_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-item", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](2, "core-format-text", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const plan_r49 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("href", plan_r49.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵattribute */ "mc"]("aria-label", plan_r49.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("text", plan_r49.name)("contextInstanceId", plan_r49.userid);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](4, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_p_4_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](5, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_ion_item_5_Template, 3, 4, "ion-item", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](3, 3, "addon.competency.userplans"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.plans.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", competency_r15.plans);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵlistener */ "Mc"]("click", function AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_Template_ion_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵrestoreView */ "gd"](_r52); const competency_r15 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2); return ctx_r51.openCompetency(competency_r15.competency.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](2, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](3, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](5, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](7, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_badge_7_Template, 2, 2, "ion-badge", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](8, "ion-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](9, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](10, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_p_10_Template, 2, 2, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](12, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](16, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_a_16_Template, 2, 3, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](17, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_17_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](18, " \u00A0/\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](19, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ng_container_19_Template, 4, 3, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](20, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_20_Template, 5, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](25, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_p_25_Template, 3, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](26, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_ion_item_26_Template, 4, 6, "ion-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](27, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_div_27_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const competency_r15 = ctx.$implicit;
        const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵattribute */ "mc"]("aria-label", competency_r15.competency.shortname);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate1 */ "rd"](" ", competency_r15.competency.shortname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](competency_r15.competency.idnumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.usercompetencycourse && competency_r15.usercompetencycourse.gradename);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.competency.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](14, 14, "addon.competency.path"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.comppath.showlinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", !competency_r15.comppath.showlinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", competency_r15.comppath.ancestors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx_r14.competencies.statistics.canmanagecoursecompetencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](24, 16, "addon.competency.activities"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.coursemodules.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", competency_r15.coursemodules);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", competency_r15.plans);
    }
}
function AddonCompetencyCourseCompetenciesPage_div_17_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](1, AddonCompetencyCourseCompetenciesPage_div_17_ion_card_1_Template, 28, 18, "ion-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵnextContext */ "Oc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngForOf", ctx_r4.competencies.competencies);
    }
}
/**
 * Page that displays the list of competencies of a course.
 */
let AddonCompetencyCourseCompetenciesPage = /*@__PURE__*/ (() => {
    class AddonCompetencyCourseCompetenciesPage {
        constructor() {
            this.competenciesLoaded = false;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__[/* CoreNavigator */ "a"].getRouteNumberParam('courseId');
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_3__[/* CoreNavigator */ "a"].getRouteNumberParam('userId');
            this.fetchCourseCompetencies().finally(() => {
                this.competenciesLoaded = true;
            });
        }
        /**
         * Fetches the competencies and updates the view.
         *
         * @return Promise resolved when done.
         */
        fetchCourseCompetencies() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                try {
                    this.competencies = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_1__[/* AddonCompetency */ "a"].getCourseCompetencies(this.courseId, this.userId);
                    // Get the user profile image.
                    this.user = yield _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_2__[/* AddonCompetencyHelper */ "a"].getProfile(this.userId);
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_4__[/* CoreDomUtils */ "a"].showErrorModalDefault(error, 'Error getting course competencies data.');
                }
            });
        }
        /**
         * Opens a competency.
         *
         * @param competencyId
         */
        openCompetency(competencyId) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__[/* CoreNavigator */ "a"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_5__[/* AddonCompetencyMainMenuHandlerService */ "b"].PAGE_NAME + '/competencies/' + competencyId, {
                params: { courseId: this.courseId, userId: this.userId },
            });
        }
        /**
         * Opens the summary of a competency.
         *
         * @param competencyId
         */
        openCompetencySummary(competencyId) {
            _services_navigator__WEBPACK_IMPORTED_MODULE_3__[/* CoreNavigator */ "a"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_5__[/* AddonCompetencyMainMenuHandlerService */ "b"].PAGE_NAME + '/summary/' + competencyId, {
                params: {
                    contextLevel: "course" /* COURSE */,
                    contextInstanceId: this.courseId,
                }
            });
        }
        /**
         * Refreshes the competencies.
         *
         * @param refresher Refresher.
         */
        refreshCourseCompetencies(refresher) {
            _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_1__[/* AddonCompetency */ "a"].invalidateCourseCompetencies(this.courseId, this.userId).finally(() => {
                this.fetchCourseCompetencies().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
    }
    AddonCompetencyCourseCompetenciesPage.ɵfac = function AddonCompetencyCourseCompetenciesPage_Factory(t) { return new (t || AddonCompetencyCourseCompetenciesPage)(); };
    AddonCompetencyCourseCompetenciesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵdefineComponent */ "sc"]({ type: AddonCompetencyCourseCompetenciesPage, selectors: [["page-addon-competency-coursecompetencies"]], decls: 18, vars: 16, consts: [["slot", "start"], [3, "text"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["class", "ion-margin-horizontal", 4, "ngIf"], ["icon", "fas-award", 3, "message", 4, "ngIf"], ["class", "ion-text-wrap", 4, "ngIf"], ["class", "ion-text-wrap", "color", "danger", 4, "ngIf"], [1, "ion-text-wrap"], ["color", "danger", 1, "ion-text-wrap"], [3, "id"], [3, "progress", "ariaDescribedBy"], [1, "item-heading"], [4, "ngFor", "ngForOf"], [1, "as-link", 3, "click"], [1, "ion-margin-horizontal"], ["slot", "start", 3, "user"], ["icon", "fas-award", 3, "message"], ["detail", "true", "button", "", 1, "ion-text-wrap", 3, "click"], ["slot", "end", 3, "color", 4, "ngIf"], ["core-link", "", 3, "href", "title", 4, "ngIf"], ["class", "ion-text-wrap core-course-module-handler item-media", "core-link", "", "capture", "true", 3, "href", 4, "ngFor", "ngForOf"], ["slot", "end", 3, "color"], ["contextLevel", "course", 3, "text", "contextInstanceId"], ["core-link", "", 3, "href", "title"], ["class", "as-link", 3, "click", 4, "ngIf"], ["core-link", "", "capture", "true", 1, "ion-text-wrap", "core-course-module-handler", "item-media", 3, "href"], ["slot", "start", "core-external-content", "", "alt", "", "class", "core-module-icon", 3, "src", 4, "ngIf"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "start", "core-external-content", "", "alt", "", 1, "core-module-icon", 3, "src"], ["class", "ion-text-wrap", "core-link", "", "capture", "true", 3, "href", 4, "ngFor", "ngForOf"], ["core-link", "", "capture", "true", 1, "ion-text-wrap", 3, "href"], ["contextLevel", "user", 3, "text", "contextInstanceId"]], template: function AddonCompetencyCourseCompetenciesPage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](3, "ion-back-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](4, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](5, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtext */ "pd"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](7, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](8, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](9, "ion-refresher", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵlistener */ "Mc"]("ionRefresh", function AddonCompetencyCourseCompetenciesPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.refreshCourseCompetencies($event.target); });
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelement */ "zc"](10, "ion-refresher-content", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipe */ "Pc"](11, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementStart */ "Ec"](12, "core-loading", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](13, AddonCompetencyCourseCompetenciesPage_ion_card_13_Template, 4, 3, "ion-card", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](14, AddonCompetencyCourseCompetenciesPage_h2_14_Template, 3, 3, "h2", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](15, AddonCompetencyCourseCompetenciesPage_ion_card_15_Template, 6, 2, "ion-card", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](16, AddonCompetencyCourseCompetenciesPage_core_empty_box_16_Template, 2, 3, "core-empty-box", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtemplate */ "nd"](17, AddonCompetencyCourseCompetenciesPage_div_17_Template, 2, 1, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵelementEnd */ "Dc"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](4, 10, "core.back"));
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](7, 12, "addon.competency.coursecompetencies"));
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("disabled", !ctx.competenciesLoaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpropertyInterpolate */ "Wc"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵpipeBind1 */ "Qc"](11, 14, "core.pulltorefresh"));
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("hideUntil", ctx.competenciesLoaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", !ctx.user && ctx.competencies && ctx.competencies.statistics.competencycount > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.competencies && ctx.competencies.statistics.competencycount > 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.user);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.competencies && ctx.competencies.statistics.competencycount == 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.competencies);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonHeader */ "B"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonToolbar */ "zb"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonButtons */ "l"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonBackButton */ "g"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonBackButtonDelegate */ "h"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonContent */ "u"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonRefresher */ "ab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonRefresherContent */ "bb"], _core_components_loading_loading__WEBPACK_IMPORTED_MODULE_8__[/* CoreLoadingComponent */ "a"], _angular_common__WEBPACK_IMPORTED_MODULE_9__[/* NgIf */ "t"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonCard */ "m"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonItem */ "H"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonLabel */ "N"], _core_components_progress_bar_progress_bar__WEBPACK_IMPORTED_MODULE_10__[/* CoreProgressBarComponent */ "a"], _angular_common__WEBPACK_IMPORTED_MODULE_9__[/* NgForOf */ "s"], _core_components_user_avatar_user_avatar__WEBPACK_IMPORTED_MODULE_11__[/* CoreUserAvatarComponent */ "a"], _core_components_empty_box_empty_box__WEBPACK_IMPORTED_MODULE_12__[/* CoreEmptyBoxComponent */ "a"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__[/* IonBadge */ "j"], _core_directives_format_text__WEBPACK_IMPORTED_MODULE_13__[/* CoreFormatTextDirective */ "a"], _core_directives_link__WEBPACK_IMPORTED_MODULE_14__[/* CoreLinkDirective */ "a"], _core_directives_external_content__WEBPACK_IMPORTED_MODULE_15__[/* CoreExternalContentDirective */ "a"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__[/* TranslatePipe */ "d"]], encapsulation: 2 });
    return AddonCompetencyCourseCompetenciesPage;
})();


/***/ }),

/***/ "y5rm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonCompetencyCourseCompetenciesPageModule; });
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L3Fv");
/* harmony import */ var _coursecompetencies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9DI8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fXoL");
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




let AddonCompetencyCourseCompetenciesPageModule = /*@__PURE__*/ (() => {
    class AddonCompetencyCourseCompetenciesPageModule {
    }
    AddonCompetencyCourseCompetenciesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵdefineNgModule */ "wc"]({ type: AddonCompetencyCourseCompetenciesPageModule });
    AddonCompetencyCourseCompetenciesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵdefineInjector */ "vc"]({ factory: function AddonCompetencyCourseCompetenciesPageModule_Factory(t) { return new (t || AddonCompetencyCourseCompetenciesPageModule)(); }, imports: [[
                _core_shared_module__WEBPACK_IMPORTED_MODULE_0__[/* CoreSharedModule */ "a"],
            ]] });
    return AddonCompetencyCourseCompetenciesPageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵsetNgModuleScope */ "ld"](AddonCompetencyCourseCompetenciesPageModule, { declarations: [_coursecompetencies_page__WEBPACK_IMPORTED_MODULE_1__[/* AddonCompetencyCourseCompetenciesPage */ "a"]], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__[/* CoreSharedModule */ "a"]] }); })();


/***/ })

}]);