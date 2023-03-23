(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "NdFX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonForumNewDiscussionPageModule", function() { return /* binding */ new_discussion_module_AddonForumNewDiscussionPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/addons/mod/forum/components/components.module.ts
var components_module = __webpack_require__("AzLI");

// EXTERNAL MODULE: ./src/core/guards/can-leave.ts
var can_leave = __webpack_require__("MLi9");

// EXTERNAL MODULE: ./src/core/features/editor/components/components.module.ts
var components_components_module = __webpack_require__("ekpb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/groups.ts
var services_groups = __webpack_require__("mWdr");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum.ts
var forum = __webpack_require__("ZCW2");

// EXTERNAL MODULE: ./src/core/features/editor/components/rich-text-editor/rich-text-editor.ts
var rich_text_editor = __webpack_require__("N5Lt");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-sync.ts
var forum_sync = __webpack_require__("pET4");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/services/sync.ts
var sync = __webpack_require__("uT8i");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-offline.ts
var forum_offline = __webpack_require__("h709");

// EXTERNAL MODULE: ./src/core/services/utils/utils.ts
var utils = __webpack_require__("bFG1");

// EXTERNAL MODULE: ./src/addons/mod/forum/services/forum-helper.ts
var forum_helper = __webpack_require__("VF9H");

// EXTERNAL MODULE: ./src/core/features/fileuploader/services/fileuploader.ts
var fileuploader = __webpack_require__("hSQQ");

// EXTERNAL MODULE: ./src/core/services/utils/text.ts + 1 modules
var utils_text = __webpack_require__("vuGA");

// EXTERNAL MODULE: ./src/core/singletons/form.ts
var singletons_form = __webpack_require__("4reR");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/split-view/split-view.ts
var split_view = __webpack_require__("46ml");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/attachments/attachments.ts
var attachments_attachments = __webpack_require__("M9y5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/forum/pages/new-discussion/new-discussion.page.ts

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




























const _c0 = ["newDiscFormEl"];
function AddonModForumNewDiscussionPage_form_14_ion_icon_16_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 16);
    }
}
function AddonModForumNewDiscussionPage_form_14_ion_icon_17_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "ion-icon", 17);
    }
}
function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 21);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_1_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r11); const ctx_r10 = core["Oc" /* ɵɵnextContext */](3); return ctx_r10.newDiscussion.postToAllGroups = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r6 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.mod_forum.posttomygroups"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r6.newDiscussion.postToAllGroups);
    }
}
function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_2_ion_select_option_6_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-select-option", 25);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const group_r13 = ctx.$implicit;
        core["Vc" /* ɵɵproperty */]("value", group_r13.id);
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](group_r13.name);
    }
}
const _c1 = function (a0) { return { header: a0 }; };
function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 22);
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-select", 23);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_2_Template_ion_select_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r15); const ctx_r14 = core["Oc" /* ɵɵnextContext */](3); return ctx_r14.newDiscussion.groupId = $event; });
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["nd" /* ɵɵtemplate */](6, AddonModForumNewDiscussionPage_form_14_div_22_ion_item_2_ion_select_option_6_Template, 2, 2, "ion-select-option", 24);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r7 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 5, "addon.mod_forum.group"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r7.newDiscussion.groupId)("disabled", ctx_r7.newDiscussion.postToAllGroups)("interfaceOptions", core["ad" /* ɵɵpureFunction1 */](9, _c1, core["Qc" /* ɵɵpipeBind1 */](5, 7, "addon.mod_forum.group")));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngForOf", ctx_r7.groups);
    }
}
function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r17 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item");
        core["Ec" /* ɵɵelementStart */](1, "ion-label");
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](4, "ion-toggle", 26);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModForumNewDiscussionPage_form_14_div_22_ion_item_8_Template_ion_toggle_ngModelChange_4_listener($event) { core["gd" /* ɵɵrestoreView */](_r17); const ctx_r16 = core["Oc" /* ɵɵnextContext */](3); return ctx_r16.newDiscussion.pin = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r8 = core["Oc" /* ɵɵnextContext */](3);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 2, "addon.mod_forum.discussionpinned"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r8.newDiscussion.pin);
    }
}
function AddonModForumNewDiscussionPage_form_14_div_22_core_attachments_9_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-attachments", 27);
    }
    if (rf & 2) {
        const ctx_r9 = core["Oc" /* ɵɵnextContext */](3);
        core["Vc" /* ɵɵproperty */]("files", ctx_r9.newDiscussion.files)("maxSize", ctx_r9.forum.maxbytes)("maxSubmissions", ctx_r9.forum.maxattachments)("component", ctx_r9.component)("componentId", ctx_r9.forum.cmid)("allowOffline", true);
    }
}
function AddonModForumNewDiscussionPage_form_14_div_22_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "div", 18);
        core["nd" /* ɵɵtemplate */](1, AddonModForumNewDiscussionPage_form_14_div_22_ion_item_1_Template, 5, 4, "ion-item", 6);
        core["nd" /* ɵɵtemplate */](2, AddonModForumNewDiscussionPage_form_14_div_22_ion_item_2_Template, 7, 11, "ion-item", 6);
        core["Ec" /* ɵɵelementStart */](3, "ion-item");
        core["Ec" /* ɵɵelementStart */](4, "ion-label");
        core["pd" /* ɵɵtext */](5);
        core["Pc" /* ɵɵpipe */](6, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](7, "ion-toggle", 19);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModForumNewDiscussionPage_form_14_div_22_Template_ion_toggle_ngModelChange_7_listener($event) { core["gd" /* ɵɵrestoreView */](_r19); const ctx_r18 = core["Oc" /* ɵɵnextContext */](2); return ctx_r18.newDiscussion.subscribe = $event; });
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](8, AddonModForumNewDiscussionPage_form_14_div_22_ion_item_8_Template, 5, 4, "ion-item", 6);
        core["nd" /* ɵɵtemplate */](9, AddonModForumNewDiscussionPage_form_14_div_22_core_attachments_9_Template, 1, 6, "core-attachments", 20);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r4 = core["Oc" /* ɵɵnextContext */](2);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.showGroups && ctx_r4.groupIds.length > 1 && ctx_r4.accessInfo.cancanposttomygroups);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.showGroups);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](6, 6, "addon.mod_forum.discussionsubscription"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r4.newDiscussion.subscribe);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.canPin);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r4.canCreateAttachments && ctx_r4.forum && ctx_r4.forum.maxattachments > 0);
    }
}
function AddonModForumNewDiscussionPage_form_14_ion_col_30_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-col");
        core["Ec" /* ɵɵelementStart */](1, "ion-button", 28);
        core["Mc" /* ɵɵlistener */]("click", function AddonModForumNewDiscussionPage_form_14_ion_col_30_Template_ion_button_click_1_listener() { core["gd" /* ɵɵrestoreView */](_r21); const ctx_r20 = core["Oc" /* ɵɵnextContext */](2); return ctx_r20.discard(); });
        core["pd" /* ɵɵtext */](2);
        core["Pc" /* ɵɵpipe */](3, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](3, 1, "core.discard"));
    }
}
function AddonModForumNewDiscussionPage_form_14_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "form", null, 7);
        core["Ec" /* ɵɵelementStart */](2, "ion-item");
        core["Ec" /* ɵɵelementStart */](3, "ion-label", 8);
        core["pd" /* ɵɵtext */](4);
        core["Pc" /* ɵɵpipe */](5, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "ion-input", 9);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function AddonModForumNewDiscussionPage_form_14_Template_ion_input_ngModelChange_6_listener($event) { core["gd" /* ɵɵrestoreView */](_r23); const ctx_r22 = core["Oc" /* ɵɵnextContext */](); return ctx_r22.newDiscussion.subject = $event; });
        core["Pc" /* ɵɵpipe */](7, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-item");
        core["Ec" /* ɵɵelementStart */](9, "ion-label", 8);
        core["pd" /* ɵɵtext */](10);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "core-rich-text-editor", 10);
        core["Mc" /* ɵɵlistener */]("contentChanged", function AddonModForumNewDiscussionPage_form_14_Template_core_rich_text_editor_contentChanged_12_listener($event) { core["gd" /* ɵɵrestoreView */](_r23); const ctx_r24 = core["Oc" /* ɵɵnextContext */](); return ctx_r24.onMessageChange($event); });
        core["Pc" /* ɵɵpipe */](13, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](14, "ion-item", 11);
        core["Mc" /* ɵɵlistener */]("click", function AddonModForumNewDiscussionPage_form_14_Template_ion_item_click_14_listener() { core["gd" /* ɵɵrestoreView */](_r23); const ctx_r25 = core["Oc" /* ɵɵnextContext */](); return ctx_r25.toggleAdvanced(); });
        core["Pc" /* ɵɵpipe */](15, "translate");
        core["nd" /* ɵɵtemplate */](16, AddonModForumNewDiscussionPage_form_14_ion_icon_16_Template, 1, 0, "ion-icon", 12);
        core["nd" /* ɵɵtemplate */](17, AddonModForumNewDiscussionPage_form_14_ion_icon_17_Template, 1, 0, "ion-icon", 13);
        core["Ec" /* ɵɵelementStart */](18, "ion-label");
        core["Ec" /* ɵɵelementStart */](19, "h2");
        core["pd" /* ɵɵtext */](20);
        core["Pc" /* ɵɵpipe */](21, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](22, AddonModForumNewDiscussionPage_form_14_div_22_Template, 10, 8, "div", 14);
        core["Ec" /* ɵɵelementStart */](23, "ion-item");
        core["Ec" /* ɵɵelementStart */](24, "ion-label");
        core["Ec" /* ɵɵelementStart */](25, "ion-row");
        core["Ec" /* ɵɵelementStart */](26, "ion-col");
        core["Ec" /* ɵɵelementStart */](27, "ion-button", 15);
        core["Mc" /* ɵɵlistener */]("click", function AddonModForumNewDiscussionPage_form_14_Template_ion_button_click_27_listener() { core["gd" /* ɵɵrestoreView */](_r23); const ctx_r26 = core["Oc" /* ɵɵnextContext */](); return ctx_r26.add(); });
        core["pd" /* ɵɵtext */](28);
        core["Pc" /* ɵɵpipe */](29, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["nd" /* ɵɵtemplate */](30, AddonModForumNewDiscussionPage_form_14_ion_col_30_Template, 4, 3, "ion-col", 6);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](5, 19, "addon.mod_forum.subject"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r0.newDiscussion.subject)("placeholder", core["Qc" /* ɵɵpipeBind1 */](7, 21, "addon.mod_forum.subject"));
        core["lc" /* ɵɵadvance */](4);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](11, 23, "addon.mod_forum.message"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("control", ctx_r0.messageControl)("placeholder", core["Qc" /* ɵɵpipeBind1 */](13, 25, "addon.mod_forum.message"))("component", ctx_r0.component)("componentId", ctx_r0.forum.cmid)("autoSave", true)("contextInstanceId", ctx_r0.forum.cmid);
        core["lc" /* ɵɵadvance */](2);
        core["mc" /* ɵɵattribute */]("aria-expanded", ctx_r0.advanced)("aria-label", core["Qc" /* ɵɵpipeBind1 */](15, 27, ctx_r0.advanced ? "core.hideadvanced" : "core.showadvanced"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", !ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](3);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](21, 29, "addon.mod_forum.advanced"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.advanced);
        core["lc" /* ɵɵadvance */](5);
        core["Vc" /* ɵɵproperty */]("disabled", ctx_r0.newDiscussion.subject == "" || ctx_r0.newDiscussion.message == null);
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](29, 31, "addon.mod_forum.posttoforum"), " ");
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.hasOffline);
    }
}
/**
 * Page that displays the new discussion form.
 */
let new_discussion_page_AddonModForumNewDiscussionPage = /*@__PURE__*/ (() => {
    class AddonModForumNewDiscussionPage {
        constructor(splitView) {
            this.splitView = splitView;
            this.component = forum["b" /* AddonModForumProvider */].COMPONENT;
            this.messageControl = new fesm2015_forms["g" /* FormControl */]();
            this.groupsLoaded = false;
            this.showGroups = false;
            this.hasOffline = false;
            this.canCreateAttachments = true; // Assume we can by default.
            this.canPin = false;
            this.showForm = false;
            this.groups = [];
            this.groupIds = [];
            this.newDiscussion = {
                subject: '',
                message: null,
                postToAllGroups: false,
                groupId: 0,
                subscribe: true,
                pin: false,
                files: [],
            };
            this.advanced = false; // Display all form fields.
            this.accessInfo = {};
            this.isDestroyed = false;
            this.forceLeave = false;
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
            this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
            this.forumId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('forumId');
            this.timeCreated = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('timeCreated');
            this.fetchDiscussionData().finally(() => {
                this.groupsLoaded = true;
            });
        }
        /**
         * User entered the page that contains the component.
         */
        ionViewDidEnter() {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = events["b" /* CoreEvents */].on(forum_sync["b" /* AddonModForumSyncProvider */].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && data.userId == sites["b" /* CoreSites */].getCurrentSiteUserId()) {
                    dom["a" /* CoreDomUtils */].showAlertTranslated('core.notice', 'core.contenteditingsynced');
                    this.returnToDiscussions();
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Fetch if forum uses groups and the groups it uses.
         *
         * @param refresh Whether we're refreshing data.
         * @return Promise resolved when done.
         */
        fetchDiscussionData(refresh) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const mode = yield services_groups["a" /* CoreGroups */].getActivityGroupMode(this.cmId);
                    const promises = [];
                    if (mode === services_groups["b" /* CoreGroupsProvider */].SEPARATEGROUPS || mode === services_groups["b" /* CoreGroupsProvider */].VISIBLEGROUPS) {
                        promises.push(services_groups["a" /* CoreGroups */].instance
                            .getActivityAllowedGroups(this.cmId)
                            .then((result) => {
                            let promise;
                            if (mode === services_groups["b" /* CoreGroupsProvider */].VISIBLEGROUPS) {
                                // We need to check which of the returned groups the user can post to.
                                promise = this.validateVisibleGroups(result.groups);
                            }
                            else {
                                // WS already filters groups, no need to do it ourselves. Add "All participants" if needed.
                                promise = this.addAllParticipantsOption(result.groups, true);
                            }
                            // eslint-disable-next-line promise/no-nesting
                            return promise.then((forumGroups) => {
                                if (forumGroups.length > 0) {
                                    this.groups = forumGroups;
                                    this.groupIds = forumGroups.map((group) => group.id).filter((id) => id > 0);
                                    // Do not override group id.
                                    this.newDiscussion.groupId = this.newDiscussion.groupId || forumGroups[0].id;
                                    this.showGroups = true;
                                    if (this.groupIds.length <= 1) {
                                        this.newDiscussion.postToAllGroups = false;
                                    }
                                    return;
                                }
                                else {
                                    const message = mode === services_groups["b" /* CoreGroupsProvider */].SEPARATEGROUPS ?
                                        'addon.mod_forum.cannotadddiscussionall' : 'addon.mod_forum.cannotadddiscussion';
                                    throw new Error(singletons["L" /* Translate */].instant(message));
                                }
                            });
                        }));
                    }
                    else {
                        this.showGroups = false;
                        this.newDiscussion.postToAllGroups = false;
                        // Use the canAddDiscussion WS to check if the user can add attachments and pin discussions.
                        promises.push(utils["a" /* CoreUtils */].ignoreErrors(forum["a" /* AddonModForum */].instance
                            .canAddDiscussionToAll(this.forumId, { cmId: this.cmId })
                            .then((response) => {
                            this.canPin = !!response.canpindiscussions;
                            this.canCreateAttachments = !!response.cancreateattachment;
                            return;
                        })));
                    }
                    // Get forum.
                    promises.push(forum["a" /* AddonModForum */].getForum(this.courseId, this.cmId).then((forum) => this.forum = forum));
                    // Get access information.
                    promises.push(forum["a" /* AddonModForum */].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => this.accessInfo = accessInfo));
                    yield Promise.all(promises);
                    // If editing a discussion, get offline data.
                    if (this.timeCreated && !refresh) {
                        this.syncId = forum_sync["a" /* AddonModForumSync */].getForumSyncId(this.forumId);
                        yield forum_sync["a" /* AddonModForumSync */].waitForSync(this.syncId).then(() => {
                            // Do not block if the scope is already destroyed.
                            if (!this.isDestroyed) {
                                sync["a" /* CoreSync */].blockOperation(forum["b" /* AddonModForumProvider */].COMPONENT, this.syncId);
                            }
                            // eslint-disable-next-line promise/no-nesting
                            return forum_offline["a" /* AddonModForumOffline */].instance
                                .getNewDiscussion(this.forumId, this.timeCreated)
                                .then((discussion) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                                this.hasOffline = true;
                                discussion.options = discussion.options || {};
                                if (discussion.groupid == forum["b" /* AddonModForumProvider */].ALL_GROUPS) {
                                    this.newDiscussion.groupId = this.groups[0].id;
                                    this.newDiscussion.postToAllGroups = true;
                                }
                                else {
                                    this.newDiscussion.groupId = discussion.groupid;
                                    this.newDiscussion.postToAllGroups = false;
                                }
                                this.newDiscussion.subject = discussion.subject;
                                this.newDiscussion.message = discussion.message;
                                this.newDiscussion.subscribe = !!discussion.options.discussionsubscribe;
                                this.newDiscussion.pin = !!discussion.options.discussionpinned;
                                this.messageControl.setValue(discussion.message);
                                // Treat offline attachments if any.
                                if (typeof discussion.options.attachmentsid === 'object' && discussion.options.attachmentsid.offline) {
                                    const files = yield forum_helper["a" /* AddonModForumHelper */].getNewDiscussionStoredFiles(this.forumId, this.timeCreated);
                                    this.newDiscussion.files = files;
                                }
                                // Show advanced fields by default if any of them has not the default value.
                                if (!this.newDiscussion.subscribe ||
                                    this.newDiscussion.pin ||
                                    this.newDiscussion.files.length ||
                                    this.groups.length > 0 && this.newDiscussion.groupId != this.groups[0].id ||
                                    this.newDiscussion.postToAllGroups) {
                                    this.advanced = true;
                                }
                                return;
                            }));
                        });
                    }
                    if (!this.originalData) {
                        // Initialize original data.
                        this.originalData = {
                            subject: this.newDiscussion.subject,
                            message: this.newDiscussion.message,
                            files: this.newDiscussion.files.slice(),
                        };
                    }
                    this.showForm = true;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_forum.errorgetgroups', true);
                    this.showForm = false;
                }
            });
        }
        /**
         * Validate which of the groups returned by getActivityAllowedGroups in visible groups should be shown to post to.
         *
         * @param forumGroups Forum groups.
         * @return Promise resolved with the list of groups.
         */
        validateVisibleGroups(forumGroups) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                let response;
                // We first check if the user can post to all the groups.
                try {
                    response = yield forum["a" /* AddonModForum */].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                }
                catch (error) {
                    // The call failed, let's assume he can't.
                    response = {
                        status: false,
                        canpindiscussions: false,
                        cancreateattachment: true,
                    };
                }
                this.canPin = !!response.canpindiscussions;
                this.canCreateAttachments = !!response.cancreateattachment;
                // The user can post to all groups, add the "All participants" option and return them all.
                if (response.status) {
                    return this.addAllParticipantsOption(forumGroups, false);
                }
                // The user can't post to all groups, let's check which groups he can post to.
                const promises = [];
                const filtered = [];
                forumGroups.forEach((group) => {
                    promises.push(forum["a" /* AddonModForum */].instance
                        .canAddDiscussion(this.forumId, group.id, { cmId: this.cmId })
                        // The call failed, let's return true so the group is shown.
                        // If the user can't post to it an error will be shown when he tries to add the discussion.
                        .catch(() => ({ status: true }))
                        .then((response) => {
                        if (response.status) {
                            filtered.push(group);
                        }
                        return;
                    }));
                });
                yield Promise.all(promises);
                return filtered;
            });
        }
        /**
         * Filter forum groups, returning only those that are inside user groups.
         *
         * @param forumGroups Forum groups.
         * @param userGroups User groups.
         * @return Filtered groups.
         */
        filterGroups(forumGroups, userGroups) {
            const userGroupsIds = userGroups.map(group => group.id);
            return forumGroups.filter(forumGroup => userGroupsIds.indexOf(forumGroup.id) > -1);
        }
        /**
         * Add the "All participants" option to a list of groups if the user can add a discussion to all participants.
         *
         * @param groups Groups.
         * @param check True to check if the user can add a discussion to all participants.
         * @return Promise resolved with the list of groups.
         */
        addAllParticipantsOption(groups, check) {
            if (!forum["a" /* AddonModForum */].isAllParticipantsFixed()) {
                // All participants has a bug, don't add it.
                return Promise.resolve(groups);
            }
            let promise;
            if (check) {
                // We need to check if the user can add a discussion to all participants.
                promise = forum["a" /* AddonModForum */].canAddDiscussionToAll(this.forumId, { cmId: this.cmId }).then((response) => {
                    this.canPin = !!response.canpindiscussions;
                    this.canCreateAttachments = !!response.cancreateattachment;
                    return response.status;
                }).catch(() => 
                // The call failed, let's assume he can't.
                false);
            }
            else {
                // No need to check, assume the user can.
                promise = Promise.resolve(true);
            }
            return promise.then((canAdd) => {
                if (canAdd) {
                    groups.unshift({
                        courseid: this.courseId,
                        id: forum["b" /* AddonModForumProvider */].ALL_PARTICIPANTS,
                        name: singletons["L" /* Translate */].instant('core.allparticipants'),
                    });
                }
                return groups;
            });
        }
        /**
         * Pull to refresh.
         *
         * @param refresher Refresher.
         */
        refreshGroups(refresher) {
            const promises = [
                services_groups["a" /* CoreGroups */].invalidateActivityGroupMode(this.cmId),
                services_groups["a" /* CoreGroups */].invalidateActivityAllowedGroups(this.cmId),
                forum["a" /* AddonModForum */].invalidateCanAddDiscussion(this.forumId),
            ];
            Promise.all(promises).finally(() => {
                this.fetchDiscussionData(true).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Convenience function to update or return to discussions depending on device.
         *
         * @param discussionIds Ids of the new discussions.
         * @param discTimecreated The time created of the discussion (if offline).
         */
        returnToDiscussions(discussionIds, discTimecreated) {
            var _a;
            this.forceLeave = true;
            // Delete the local files from the tmp folder.
            fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.newDiscussion.files);
            events["b" /* CoreEvents */].trigger(forum["b" /* AddonModForumProvider */].NEW_DISCUSSION_EVENT, {
                forumId: this.forumId,
                cmId: this.cmId,
                discussionIds: discussionIds,
                discTimecreated: discTimecreated,
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            if ((_a = this.splitView) === null || _a === void 0 ? void 0 : _a.outletActivated) {
                // Empty form.
                this.hasOffline = false;
                this.newDiscussion.subject = '';
                this.newDiscussion.message = null;
                this.newDiscussion.files = [];
                this.newDiscussion.postToAllGroups = false;
                this.messageEditor.clearText();
                this.originalData = utils["a" /* CoreUtils */].clone(this.newDiscussion);
            }
            else {
                services_navigator["a" /* CoreNavigator */].back();
            }
        }
        /**
         * Message changed.
         *
         * @param text The new text.
         */
        onMessageChange(text) {
            this.newDiscussion.message = text;
        }
        /**
         * Add a new discussion.
         */
        add() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const forumName = this.forum.name;
                const subject = this.newDiscussion.subject;
                let message = this.newDiscussion.message || '';
                const pin = this.newDiscussion.pin;
                const attachments = this.newDiscussion.files;
                const discTimecreated = this.timeCreated || Date.now();
                const options = {
                    discussionsubscribe: !!this.newDiscussion.subscribe,
                };
                if (!subject) {
                    dom["a" /* CoreDomUtils */].showErrorModal('addon.mod_forum.erroremptysubject', true);
                    return;
                }
                if (!message) {
                    dom["a" /* CoreDomUtils */].showErrorModal('addon.mod_forum.erroremptymessage', true);
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading('core.sending', true);
                // Add some HTML to the message if needed.
                message = utils_text["a" /* CoreTextUtils */].formatHtmlLines(message);
                if (pin) {
                    options.discussionpinned = true;
                }
                const groupIds = this.newDiscussion.postToAllGroups ? this.groupIds : [this.newDiscussion.groupId];
                try {
                    const discussionIds = yield forum_helper["a" /* AddonModForumHelper */].addNewDiscussion(this.forumId, forumName, this.courseId, subject, message, attachments, options, groupIds, discTimecreated);
                    if (discussionIds) {
                        // Data sent to server, delete stored files (if any).
                        forum_helper["a" /* AddonModForumHelper */].deleteNewDiscussionStoredFiles(this.forumId, discTimecreated);
                        events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'forum' });
                    }
                    if (discussionIds && discussionIds.length < groupIds.length) {
                        // Some discussions could not be created.
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(null, 'addon.mod_forum.errorposttoallgroups', true);
                    }
                    singletons_form["a" /* CoreForms */].triggerFormSubmittedEvent(this.formElement, !!discussionIds, sites["b" /* CoreSites */].getCurrentSiteId());
                    this.returnToDiscussions(discussionIds, discTimecreated);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'addon.mod_forum.cannotcreatediscussion', true);
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Discard an offline saved discussion.
         */
        discard() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.areyousure'));
                    const promises = [];
                    promises.push(forum_offline["a" /* AddonModForumOffline */].deleteNewDiscussion(this.forumId, this.timeCreated));
                    promises.push(utils["a" /* CoreUtils */].ignoreErrors(forum_helper["a" /* AddonModForumHelper */].deleteNewDiscussionStoredFiles(this.forumId, this.timeCreated)));
                    yield Promise.all(promises);
                    singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                    this.returnToDiscussions();
                }
                catch (error) {
                    // Cancelled.
                }
            });
        }
        /**
         * Show or hide advanced form fields.
         */
        toggleAdvanced() {
            this.advanced = !this.advanced;
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
                if (forum_helper["a" /* AddonModForumHelper */].hasPostDataChanged(this.newDiscussion, this.originalData)) {
                    // Show confirmation if some data has been modified.
                    yield dom["a" /* CoreDomUtils */].showConfirm(singletons["L" /* Translate */].instant('core.confirmcanceledit'));
                }
                // Delete the local files from the tmp folder.
                fileuploader["a" /* CoreFileUploader */].clearTmpFiles(this.newDiscussion.files);
                if (this.formElement) {
                    singletons_form["a" /* CoreForms */].triggerFormCancelledEvent(this.formElement, sites["b" /* CoreSites */].getCurrentSiteId());
                }
                return true;
            });
        }
        /**
         * Runs when the page is about to leave and no longer be the active page.
         */
        ionViewWillLeave() {
            this.syncObserver && this.syncObserver.off();
            delete this.syncObserver;
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            if (this.syncId) {
                sync["a" /* CoreSync */].unblockOperation(forum["b" /* AddonModForumProvider */].COMPONENT, this.syncId);
            }
            this.isDestroyed = true;
        }
    }
    AddonModForumNewDiscussionPage.ɵfac = function AddonModForumNewDiscussionPage_Factory(t) { return new (t || AddonModForumNewDiscussionPage)(core["yc" /* ɵɵdirectiveInject */](split_view["a" /* CoreSplitViewComponent */], 8)); };
    AddonModForumNewDiscussionPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModForumNewDiscussionPage, selectors: [["page-addon-mod-forum-new-discussion"]], viewQuery: function AddonModForumNewDiscussionPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](_c0, true);
                core["ud" /* ɵɵviewQuery */](rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.formElement = _t.first);
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.messageEditor = _t.first);
            }
        }, decls: 15, vars: 12, consts: [["slot", "start"], [3, "text"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [4, "ngIf"], ["newDiscFormEl", ""], ["position", "stacked"], ["type", "text", "name", "subject", 3, "ngModel", "placeholder", "ngModelChange"], ["name", "addon_mod_forum_new_discussion", "contextLevel", "module", "elementId", "message", 3, "control", "placeholder", "component", "componentId", "autoSave", "contextInstanceId", "contentChanged"], ["button", "", "detail", "false", "role", "heading", "aria-controls", "addon-mod-forum-new-discussion-advanced", 1, "divider", "ion-text-wrap", 3, "click"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true", 4, "ngIf"], ["id", "addon-mod-forum-new-discussion-advanced", 4, "ngIf"], ["expand", "block", 3, "disabled", "click"], ["name", "fas-caret-right", "flip-rtl", "", "slot", "start", "aria-hidden", "true"], ["name", "fas-caret-down", "slot", "start", "aria-hidden", "true"], ["id", "addon-mod-forum-new-discussion-advanced"], ["name", "subscribe", 3, "ngModel", "ngModelChange"], [3, "files", "maxSize", "maxSubmissions", "component", "componentId", "allowOffline", 4, "ngIf"], ["name", "postallgroups", 3, "ngModel", "ngModelChange"], ["id", "addon-mod-forum-groupslabel"], ["aria-labelledby", "addon-mod-forum-groupslabel", "interface", "action-sheet", "name", "groupid", 3, "ngModel", "disabled", "interfaceOptions", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["name", "pin", 3, "ngModel", "ngModelChange"], [3, "files", "maxSize", "maxSubmissions", "component", "componentId", "allowOffline"], ["expand", "block", "color", "light", 3, "click"]], template: function AddonModForumNewDiscussionPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "ion-refresher", 3);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModForumNewDiscussionPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshGroups($event.target); });
                core["zc" /* ɵɵelement */](11, "ion-refresher-content", 4);
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](13, "core-loading", 5);
                core["nd" /* ɵɵtemplate */](14, AddonModForumNewDiscussionPage_form_14_Template, 31, 33, "form", 6);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 6, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 8, "addon.mod_forum.addanewdiscussion"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.groupsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](12, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.groupsLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showForm);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], common["t" /* NgIf */], fesm2015_forms["H" /* ɵangular_packages_forms_forms_y */], fesm2015_forms["s" /* NgControlStatusGroup */], fesm2015_forms["t" /* NgForm */], ionic_angular["H" /* IonItem */], ionic_angular["N" /* IonLabel */], ionic_angular["G" /* IonInput */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], rich_text_editor["a" /* CoreEditorRichTextEditorComponent */], ionic_angular["gb" /* IonRow */], ionic_angular["t" /* IonCol */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["yb" /* IonToggle */], ionic_angular["c" /* BooleanValueAccessor */], ionic_angular["kb" /* IonSelect */], ionic_angular["Nb" /* SelectValueAccessor */], common["s" /* NgForOf */], ionic_angular["lb" /* IonSelectOption */], attachments_attachments["a" /* CoreAttachmentsComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModForumNewDiscussionPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/forum/pages/new-discussion/new-discussion.module.ts
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
        component: new_discussion_page_AddonModForumNewDiscussionPage,
        canDeactivate: [can_leave["a" /* CanLeaveGuard */]],
    }];
let new_discussion_module_AddonForumNewDiscussionPageModule = /*@__PURE__*/ (() => {
    class AddonForumNewDiscussionPageModule {
    }
    AddonForumNewDiscussionPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonForumNewDiscussionPageModule });
    AddonForumNewDiscussionPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonForumNewDiscussionPageModule_Factory(t) { return new (t || AddonForumNewDiscussionPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModForumComponentsModule */],
                components_components_module["a" /* CoreEditorComponentsModule */],
            ]] });
    return AddonForumNewDiscussionPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](new_discussion_module_AddonForumNewDiscussionPageModule, { declarations: [new_discussion_page_AddonModForumNewDiscussionPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModForumComponentsModule */],
            components_components_module["a" /* CoreEditorComponentsModule */]] });
})();


/***/ })

}]);