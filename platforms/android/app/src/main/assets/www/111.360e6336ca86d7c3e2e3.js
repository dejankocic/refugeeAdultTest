(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "IUk5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPageModule", function() { return /* binding */ index_module_CoreSiteHomeIndexPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/core/features/block/components/components.module.ts
var components_module = __webpack_require__("5p9q");

// EXTERNAL MODULE: ./src/core/features/course/components/components.module.ts
var components_components_module = __webpack_require__("Fjfc");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/features/sitehome/services/sitehome.ts
var sitehome = __webpack_require__("SV+s");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/features/block/components/course-blocks/course-blocks.ts
var course_blocks = __webpack_require__("lJYf");

// EXTERNAL MODULE: ./src/core/features/course/services/module-delegate.ts + 1 modules
var module_delegate = __webpack_require__("yQ+R");

// EXTERNAL MODULE: ./src/core/features/course/services/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__("zbKZ");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu.ts + 4 modules
var context_menu = __webpack_require__("fQ68");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__("8/N+");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./src/core/features/course/components/module/module.ts
var module_module = __webpack_require__("1Y1L");

// EXTERNAL MODULE: ./src/core/components/spacer/spacer.ts
var spacer = __webpack_require__("nEkO");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/sitehome/pages/index/index.ts

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


























function CoreSiteHomeIndexPage_ion_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function CoreSiteHomeIndexPage_ion_button_1_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r16 = core["Oc" /* ɵɵnextContext */](); return ctx_r16.openSearch(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 16);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.searchcourses"));
    }
}
function CoreSiteHomeIndexPage_core_context_menu_item_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 17);
        core["Mc" /* ɵɵlistener */]("action", function CoreSiteHomeIndexPage_core_context_menu_item_3_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r19); const ctx_r18 = core["Oc" /* ɵɵnextContext */](); return ctx_r18.toggleDownload(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("priority", 1000)("content", core["Qc" /* ɵɵpipeBind1 */](1, 3, "core.settings.showdownloadoptions"))("iconAction", ctx_r1.downloadEnabledIcon);
    }
}
function CoreSiteHomeIndexPage_core_context_menu_item_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "core-context-menu-item", 18);
        core["Mc" /* ɵɵlistener */]("action", function CoreSiteHomeIndexPage_core_context_menu_item_4_Template_core_context_menu_item_action_0_listener() { core["gd" /* ɵɵrestoreView */](_r21); const ctx_r20 = core["Oc" /* ɵɵnextContext */](); return ctx_r20.manageCoursesStorage(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("priority", 500)("content", core["Qc" /* ɵɵpipeBind1 */](1, 2, "addon.storagemanager.managestorage"));
    }
}
function CoreSiteHomeIndexPage_ng_container_12_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 21);
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["zc" /* ɵɵelement */](2, "core-format-text", 22);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r22 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("text", ctx_r22.section.summary)("contextInstanceId", ctx_r22.siteHomeId);
    }
}
function CoreSiteHomeIndexPage_ng_container_12_core_course_module_2_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-course-module", 23);
    }
    if (rf & 2) {
        const module_r24 = ctx.$implicit;
        const ctx_r23 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("module", module_r24)("courseId", ctx_r23.siteHomeId)("downloadEnabled", ctx_r23.downloadEnabled)("section", ctx_r23.section);
    }
}
function CoreSiteHomeIndexPage_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_12_ion_item_1_Template, 3, 2, "ion-item", 19);
        core["nd" /* ɵɵtemplate */](2, CoreSiteHomeIndexPage_ng_container_12_core_course_module_2_Template, 1, 4, "core-course-module", 20);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.section.summary);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r3.section.modules);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_core_spacer_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-spacer");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_1_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_1_Template, 1, 0, undefined, 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["Oc" /* ɵɵnextContext */](3);
        const _r6 = core["fd" /* ɵɵreference */](16);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r6);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_1_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_1_Template, 1, 0, undefined, 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["Oc" /* ɵɵnextContext */](3);
        const _r10 = core["fd" /* ɵɵreference */](20);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r10);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_1_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_1_Template, 1, 0, undefined, 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["Oc" /* ɵɵnextContext */](3);
        const _r14 = core["fd" /* ɵɵreference */](24);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r14);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_1_ng_template_0_Template(rf, ctx) { }
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_1_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_1_Template, 1, 0, undefined, 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["Oc" /* ɵɵnextContext */](3);
        const _r12 = core["fd" /* ɵɵreference */](22);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r12);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_1_ng_template_0_Template(rf, ctx) { }
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_1_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_1_ng_template_0_Template, 0, 0, "ng-template");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_1_Template, 1, 0, undefined, 27);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        core["Oc" /* ɵɵnextContext */](3);
        const _r8 = core["fd" /* ɵɵreference */](18);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngTemplateOutlet", _r8);
    }
}
function CoreSiteHomeIndexPage_ng_container_13_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["Cc" /* ɵɵelementContainerStart */](1, 25);
        core["nd" /* ɵɵtemplate */](2, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](3, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](4, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_4_Template, 2, 1, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](5, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 26);
        core["nd" /* ɵɵtemplate */](6, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_ng_container_6_Template, 2, 1, "ng-container", 26);
        core["Bc" /* ɵɵelementContainerEnd */]();
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const item_r27 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitch", item_r27);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "LIST_OF_COURSE");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "LIST_OF_CATEGORIES");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "COURSE_SEARCH_BOX");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "ENROLLED_COURSES");
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngSwitchCase", "NEWS_ITEMS");
    }
}
function CoreSiteHomeIndexPage_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ng_container_13_core_spacer_1_Template, 1, 0, "core-spacer", 8);
        core["nd" /* ɵɵtemplate */](2, CoreSiteHomeIndexPage_ng_container_13_ng_container_2_Template, 7, 6, "ng-container", 24);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.section && ctx_r4.section.hasContent);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r4.items);
    }
}
function CoreSiteHomeIndexPage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-empty-box", 28);
        core["Pc" /* ɵɵpipe */](1, "translate");
    }
    if (rf & 2) {
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.course.nocontentavailable"));
    }
}
function CoreSiteHomeIndexPage_ng_template_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r44 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 29);
        core["Mc" /* ɵɵlistener */]("click", function CoreSiteHomeIndexPage_ng_template_15_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r44); const ctx_r43 = core["Oc" /* ɵɵnextContext */](); return ctx_r43.openAvailableCourses(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 30);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.courses.availablecourses"));
    }
}
function CoreSiteHomeIndexPage_ng_template_17_core_course_module_0_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-course-module", 32);
    }
    if (rf & 2) {
        const ctx_r45 = core["Oc" /* ɵɵnextContext */](2);
        core["Vc" /* ɵɵproperty */]("module", ctx_r45.newsForumModule)("courseId", ctx_r45.siteHomeId);
    }
}
function CoreSiteHomeIndexPage_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        core["nd" /* ɵɵtemplate */](0, CoreSiteHomeIndexPage_ng_template_17_core_course_module_0_Template, 1, 2, "core-course-module", 31);
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r9.newsForumModule);
    }
}
function CoreSiteHomeIndexPage_ng_template_19_Template(rf, ctx) {
    if (rf & 1) {
        const _r47 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 29);
        core["Mc" /* ɵɵlistener */]("click", function CoreSiteHomeIndexPage_ng_template_19_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r47); const ctx_r46 = core["Oc" /* ɵɵnextContext */](); return ctx_r46.openCourseCategories(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 33);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.courses.categories"));
    }
}
function CoreSiteHomeIndexPage_ng_template_21_Template(rf, ctx) {
    if (rf & 1) {
        const _r49 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 29);
        core["Mc" /* ɵɵlistener */]("click", function CoreSiteHomeIndexPage_ng_template_21_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r49); const ctx_r48 = core["Oc" /* ɵɵnextContext */](); return ctx_r48.openMyCourses(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 30);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.courses.mycourses"));
    }
}
function CoreSiteHomeIndexPage_ng_template_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r51 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 29);
        core["Mc" /* ɵɵlistener */]("click", function CoreSiteHomeIndexPage_ng_template_23_Template_ion_item_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r51); const ctx_r50 = core["Oc" /* ɵɵnextContext */](); return ctx_r50.openSearch(); });
        core["zc" /* ɵɵelement */](1, "ion-icon", 34);
        core["Ec" /* ɵɵelementStart */](2, "ion-label");
        core["Ec" /* ɵɵelementStart */](3, "h2");
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 1, "core.courses.searchcourses"));
    }
}
/**
 * Page that displays site home index.
 */
let index_CoreSiteHomeIndexPage = /*@__PURE__*/ (() => {
    class CoreSiteHomeIndexPage {
        constructor() {
            this.dataLoaded = false;
            this.hasContent = false;
            this.items = [];
            this.siteHomeId = 1;
            this.searchEnabled = false;
            this.downloadEnabled = false;
            this.downloadCourseEnabled = false;
            this.downloadCoursesEnabled = false;
            this.downloadEnabledIcon = 'far-square';
        }
        /**
         * Page being initialized.
         */
        ngOnInit() {
            this.searchEnabled = !courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !courses["a" /* CoreCourses */].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
            // Refresh the enabled flags if site is updated.
            this.updateSiteObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, () => {
                this.searchEnabled = !courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
                this.downloadCourseEnabled = !courses["a" /* CoreCourses */].isDownloadCourseDisabledInSite();
                this.downloadCoursesEnabled = !courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
                this.switchDownload(this.downloadEnabled && this.downloadCourseEnabled && this.downloadCoursesEnabled);
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            this.currentSite = sites["b" /* CoreSites */].getCurrentSite();
            this.siteHomeId = sites["b" /* CoreSites */].getCurrentSiteHomeId();
            const module = services_navigator["a" /* CoreNavigator */].getRouteParam('module');
            if (module) {
                const modParams = services_navigator["a" /* CoreNavigator */].getRouteParam('modParams');
                course_helper["a" /* CoreCourseHelper */].openModule(module, this.siteHomeId, undefined, modParams);
            }
            this.loadContent().finally(() => {
                this.dataLoaded = true;
            });
        }
        /**
         * Convenience function to fetch the data.
         *
         * @return Promise resolved when done.
         */
        loadContent() {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.hasContent = false;
                const config = this.currentSite.getStoredConfig() || { numsections: 1, frontpageloggedin: undefined };
                this.items = yield sitehome["a" /* CoreSiteHome */].getFrontPageItems(config.frontpageloggedin);
                this.hasContent = this.items.length > 0;
                if (this.items.some((item) => item == 'NEWS_ITEMS')) {
                    // Get the news forum.
                    try {
                        const forum = yield sitehome["a" /* CoreSiteHome */].getNewsForum();
                        this.newsForumModule = yield course["a" /* CoreCourse */].getModuleBasicInfo(forum.cmid);
                        this.newsForumModule.handlerData = module_delegate["a" /* CoreCourseModuleDelegate */].getModuleDataFor(this.newsForumModule.modname, this.newsForumModule, this.siteHomeId, this.newsForumModule.section, true);
                    }
                    catch (_b) {
                        // Ignore errors.
                    }
                }
                try {
                    const sections = yield course["a" /* CoreCourse */].getSections(this.siteHomeId, false, true);
                    // Check "Include a topic section" setting from numsections.
                    this.section = config.numsections ? sections.find((section) => section.section == 1) : undefined;
                    if (this.section) {
                        const result = course_helper["a" /* CoreCourseHelper */].addHandlerDataForModules([this.section], this.siteHomeId, undefined, undefined, true);
                        this.hasContent = result.hasContent || this.hasContent;
                    }
                    // Add log in Moodle.
                    course["a" /* CoreCourse */].logView(this.siteHomeId, undefined, undefined, (_a = this.currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.sitename).catch(() => {
                        // Ignore errors.
                    });
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.couldnotloadsectioncontent', true);
                }
            });
        }
        /**
         * Refresh the data.
         *
         * @param refresher Refresher.
         */
        doRefresh(refresher) {
            const promises = [];
            promises.push(course["a" /* CoreCourse */].invalidateSections(this.siteHomeId));
            promises.push(this.currentSite.invalidateConfig().then(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Config invalidated, fetch it again.
                const config = yield this.currentSite.getConfig();
                this.currentSite.setConfig(config);
                return;
            })));
            if (this.section && this.section.modules) {
                // Invalidate modules prefetch data.
                promises.push(module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */].invalidateModules(this.section.modules, this.siteHomeId));
            }
            if (this.courseBlocksComponent) {
                promises.push(this.courseBlocksComponent.invalidateBlocks());
            }
            Promise.all(promises).finally(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const p2 = [];
                p2.push(this.loadContent());
                if (this.courseBlocksComponent) {
                    p2.push(this.courseBlocksComponent.loadContent());
                }
                yield Promise.all(p2).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            }));
        }
        /**
         * Toggle download enabled.
         */
        toggleDownload() {
            this.switchDownload(!this.downloadEnabled);
        }
        /**
         * Convenience function to switch download enabled.
         *
         * @param enable If enable or disable.
         */
        switchDownload(enable) {
            this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
            this.downloadEnabledIcon = this.downloadEnabled ? 'far-check-square' : 'far-square';
            events["b" /* CoreEvents */].trigger(courses["b" /* CoreCoursesProvider */].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
        }
        /**
         * Open page to manage courses storage.
         */
        manageCoursesStorage() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('/storage');
        }
        /**
         * Go to search courses.
         */
        openSearch() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/search');
        }
        /**
         * Go to available courses.
         */
        openAvailableCourses() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/all');
        }
        /**
         * Go to my courses.
         */
        openMyCourses() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/my');
        }
        /**
         * Go to course categories.
         */
        openCourseCategories() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/categories');
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
    }
    CoreSiteHomeIndexPage.ɵfac = function CoreSiteHomeIndexPage_Factory(t) { return new (t || CoreSiteHomeIndexPage)(); };
    CoreSiteHomeIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreSiteHomeIndexPage, selectors: [["page-core-sitehome-index"]], viewQuery: function CoreSiteHomeIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](course_blocks["a" /* CoreBlockCourseBlocksComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.courseBlocksComponent = _t.first);
            }
        }, decls: 25, vars: 13, consts: [["slot", "end"], [3, "click", 4, "ngIf"], [3, "priority", "content", "iconAction", "action", 4, "ngIf"], ["iconAction", "fas-archive", 3, "priority", "content", "action", 4, "ngIf"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "courseId", "downloadEnabled"], [3, "hideUntil"], [4, "ngIf"], ["icon", "fas-box-open", 3, "message", 4, "ngIf"], ["allCourseList", ""], ["news", ""], ["categories", ""], ["enrolledCourseList", ""], ["courseSearch", ""], [3, "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], [3, "priority", "content", "iconAction", "action"], ["iconAction", "fas-archive", 3, "priority", "content", "action"], ["class", "ion-text-wrap", 4, "ngIf"], [3, "module", "courseId", "downloadEnabled", "section", 4, "ngFor", "ngForOf"], [1, "ion-text-wrap"], ["contextLevel", "course", 3, "text", "contextInstanceId"], [3, "module", "courseId", "downloadEnabled", "section"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], ["icon", "fas-box-open", 3, "message"], ["button", "", "detail", "true", 1, "ion-text-wrap", 3, "click"], ["name", "fas-graduation-cap", "fixed-width", "", "slot", "start", "aria-hidden", "true"], ["class", "core-sitehome-news", 3, "module", "courseId", 4, "ngIf"], [1, "core-sitehome-news", 3, "module", "courseId"], ["name", "fas-folder", "slot", "start", "aria-hidden", "true"], ["name", "fas-search", "slot", "start", "aria-hidden", "true"]], template: function CoreSiteHomeIndexPage_Template(rf, ctx) {
            if (rf & 1) {
                core["Ec" /* ɵɵelementStart */](0, "core-navbar-buttons", 0);
                core["nd" /* ɵɵtemplate */](1, CoreSiteHomeIndexPage_ion_button_1_Template, 3, 3, "ion-button", 1);
                core["Ec" /* ɵɵelementStart */](2, "core-context-menu");
                core["nd" /* ɵɵtemplate */](3, CoreSiteHomeIndexPage_core_context_menu_item_3_Template, 2, 5, "core-context-menu-item", 2);
                core["nd" /* ɵɵtemplate */](4, CoreSiteHomeIndexPage_core_context_menu_item_4_Template, 2, 4, "core-context-menu-item", 3);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](5, "ion-content");
                core["Ec" /* ɵɵelementStart */](6, "ion-refresher", 4);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreSiteHomeIndexPage_Template_ion_refresher_ionRefresh_6_listener($event) { return ctx.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](7, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](8, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "core-block-course-blocks", 6);
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 7);
                core["Ec" /* ɵɵelementStart */](11, "ion-list");
                core["nd" /* ɵɵtemplate */](12, CoreSiteHomeIndexPage_ng_container_12_Template, 3, 2, "ng-container", 8);
                core["nd" /* ɵɵtemplate */](13, CoreSiteHomeIndexPage_ng_container_13_Template, 3, 2, "ng-container", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](14, CoreSiteHomeIndexPage_core_empty_box_14_Template, 2, 3, "core-empty-box", 9);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](15, CoreSiteHomeIndexPage_ng_template_15_Template, 6, 3, "ng-template", null, 10, core["od" /* ɵɵtemplateRefExtractor */]);
                core["nd" /* ɵɵtemplate */](17, CoreSiteHomeIndexPage_ng_template_17_Template, 1, 1, "ng-template", null, 11, core["od" /* ɵɵtemplateRefExtractor */]);
                core["nd" /* ɵɵtemplate */](19, CoreSiteHomeIndexPage_ng_template_19_Template, 6, 3, "ng-template", null, 12, core["od" /* ɵɵtemplateRefExtractor */]);
                core["nd" /* ɵɵtemplate */](21, CoreSiteHomeIndexPage_ng_template_21_Template, 6, 3, "ng-template", null, 13, core["od" /* ɵɵtemplateRefExtractor */]);
                core["nd" /* ɵɵtemplate */](23, CoreSiteHomeIndexPage_ng_template_23_Template, 6, 3, "ng-template", null, 14, core["od" /* ɵɵtemplateRefExtractor */]);
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.searchEnabled);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.downloadCourseEnabled || ctx.downloadCoursesEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.downloadCourseEnabled || ctx.downloadCoursesEnabled);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.dataLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](8, 11, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("courseId", ctx.siteHomeId)("downloadEnabled", ctx.downloadEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.dataLoaded);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.section && ctx.section.hasContent);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.items.length > 0);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.hasContent);
            }
        }, directives: [navbar_buttons["a" /* CoreNavBarButtonsComponent */], common["t" /* NgIf */], context_menu["a" /* CoreContextMenuComponent */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], course_blocks["a" /* CoreBlockCourseBlocksComponent */], loading["a" /* CoreLoadingComponent */], ionic_angular["O" /* IonList */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], context_menu_item["a" /* CoreContextMenuItemComponent */], common["s" /* NgForOf */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], format_text["a" /* CoreFormatTextDirective */], module_module["a" /* CoreCourseModuleComponent */], spacer["a" /* CoreSpacerComponent */], common["x" /* NgSwitch */], common["y" /* NgSwitchCase */], common["A" /* NgTemplateOutlet */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreSiteHomeIndexPage;
})();

// CONCATENATED MODULE: ./src/core/features/sitehome/pages/index/index.module.ts
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
        component: index_CoreSiteHomeIndexPage,
    },
];
let index_module_CoreSiteHomeIndexPageModule = /*@__PURE__*/ (() => {
    class CoreSiteHomeIndexPageModule {
    }
    CoreSiteHomeIndexPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreSiteHomeIndexPageModule });
    CoreSiteHomeIndexPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreSiteHomeIndexPageModule_Factory(t) { return new (t || CoreSiteHomeIndexPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreBlockComponentsModule */],
                components_components_module["a" /* CoreCourseComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreSiteHomeIndexPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](index_module_CoreSiteHomeIndexPageModule, { declarations: [index_CoreSiteHomeIndexPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreBlockComponentsModule */],
            components_components_module["a" /* CoreCourseComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);