(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "Y/uQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonModScormLazyModule", function() { return /* binding */ scorm_lazy_module_AddonModScormLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./src/addons/mod/scorm/components/components.module.ts
var components_module = __webpack_require__("snYc");

// EXTERNAL MODULE: ./src/core/features/course/classes/main-activity-page.ts
var main_activity_page = __webpack_require__("ghUQ");

// EXTERNAL MODULE: ./src/addons/mod/scorm/components/index/index.ts
var index = __webpack_require__("kGPB");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/directives/format-text.ts
var format_text = __webpack_require__("hMzs");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/addons/mod/scorm/pages/index/index.ts
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
 * Page that displays the scorm entry page.
 */
let index_AddonModScormIndexPage = /*@__PURE__*/ (() => {
    class AddonModScormIndexPage extends main_activity_page["a" /* CoreCourseModuleMainActivityPage */] {
    }
    AddonModScormIndexPage.ɵfac = function AddonModScormIndexPage_Factory(t) { return ɵAddonModScormIndexPage_BaseFactory(t || AddonModScormIndexPage); };
    AddonModScormIndexPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModScormIndexPage, selectors: [["page-addon-mod-scorm-index"]], viewQuery: function AddonModScormIndexPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](index["a" /* AddonModScormIndexComponent */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.activityComponent = _t.first);
            }
        }, features: [core["ic" /* ɵɵInheritDefinitionFeature */]], decls: 13, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "module", "courseId", "dataRetrieved"]], template: function AddonModScormIndexPage_Template(rf, ctx) {
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
                core["Mc" /* ɵɵlistener */]("ionRefresh", function AddonModScormIndexPage_Template_ion_refresher_ionRefresh_9_listener($event) { return ctx.activityComponent == null ? null : ctx.activityComponent.doRefresh($event.target); });
                core["zc" /* ɵɵelement */](10, "ion-refresher-content", 5);
                core["Pc" /* ɵɵpipe */](11, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](12, "addon-mod-scorm-index", 6);
                core["Mc" /* ɵɵlistener */]("dataRetrieved", function AddonModScormIndexPage_Template_addon_mod_scorm_index_dataRetrieved_12_listener($event) { return ctx.updateData($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 8, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.module == null ? null : ctx.module.id)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("disabled", !(ctx.activityComponent == null ? null : ctx.activityComponent.loaded));
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](11, 10, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("module", ctx.module)("courseId", ctx.courseId);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], index["a" /* AddonModScormIndexComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModScormIndexPage;
})();
const ɵAddonModScormIndexPage_BaseFactory = /*@__PURE__*/ core["Gc" /* ɵɵgetInheritedFactory */](index_AddonModScormIndexPage);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

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

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/addons/mod/scorm/services/scorm.ts
var services_scorm = __webpack_require__("bKlM");

// CONCATENATED MODULE: ./src/addons/mod/scorm/classes/data-model-12.ts
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



// Standard Data Type Definition.
const CMI_STRING_256 = '^[\\u0000-\\uFFFF]{0,255}$';
const CMI_STRING_4096 = '^[\\u0000-\\uFFFF]{0,4096}$';
const CMI_TIME = '^([0-2]{1}[0-9]{1}):([0-5]{1}[0-9]{1}):([0-5]{1}[0-9]{1})(.[0-9]{1,2})?$';
const CMI_TIMESPAN = '^([0-9]{2,4}):([0-9]{2}):([0-9]{2})(.[0-9]{1,2})?$';
const CMI_INTEGER = '^\\d+$'; // eslint-disable-line @typescript-eslint/no-unused-vars
const CMI_SINTEGER = '^-?([0-9]+)$';
const CMI_DECIMAL = '^-?([0-9]{0,3})(.[0-9]*)?$';
const CMI_IDENTIFIER = '^[\\u0021-\\u007E]{0,255}$';
const CMI_FEEDBACK = CMI_STRING_256; // This must be redefined.
const CMI_INDEX = '[._](\\d+).';
// Vocabulary Data Type Definition.
const CMI_STATUS = '^passed$|^completed$|^failed$|^incomplete$|^browsed$';
const CMI_STATUS_2 = '^passed$|^completed$|^failed$|^incomplete$|^browsed$|^not attempted$';
const CMI_EXIT = '^time-out$|^suspend$|^logout$|^$';
const CMI_TYPE = '^true-false$|^choice$|^fill-in$|^matching$|^performance$|^sequencing$|^likert$|^numeric$';
const CMI_RESULT = '^correct$|^wrong$|^unanticipated$|^neutral$|^([0-9]{0,3})?(.[0-9]*)?$';
const NAV_EVENT = '^previous$|^continue$';
// Children lists.
const CMI_CHILDREN = 'core,suspend_data,launch_data,comments,objectives,student_data,student_preference,interactions';
const CORE_CHILDREN = 'student_id,student_name,lesson_location,credit,lesson_status,entry,score,total_time,lesson_mode,' +
    'exit,session_time';
const SCORE_CHILDREN = 'raw,min,max';
const COMMENTS_CHILDREN = 'content,location,time';
const OBJECTIVES_CHILDREN = 'id,score,status';
const CORRECT_RESPONSES_CHILDREN = 'pattern'; // eslint-disable-line @typescript-eslint/no-unused-vars
const STUDENT_DATA_CHILDREN = 'mastery_score,max_time_allowed,time_limit_action';
const STUDENT_PREFERENCE_CHILDREN = 'audio,language,speed,text';
const INTERACTIONS_CHILDREN = 'id,objectives,time,type,correct_responses,weighting,student_response,result,latency';
// Data ranges.
const SCORE_RANGE = '0#100';
const AUDIO_RANGE = '-1#100';
const SPEED_RANGE = '-100#100';
const WEIGHTING_RANGE = '-100#100';
const TEXT_RANGE = '-1#1';
// Error messages.
const ERROR_STRINGS = {
    0: 'No error',
    101: 'General exception',
    201: 'Invalid argument error',
    202: 'Element cannot have children',
    203: 'Element not an array - cannot have count',
    301: 'Not initialized',
    401: 'Not implemented error',
    402: 'Invalid set value, element is a keyword',
    403: 'Element is read only',
    404: 'Element is write only',
    405: 'Incorrect data type',
};
/**
 * SCORM data model implementation for version 1.2.
 */
/* eslint-disable @typescript-eslint/naming-convention */
class data_model_12_AddonModScormDataModel12 {
    /**
     * Constructor.
     *
     * @param siteId Site ID.
     * @param scorm SCORM.
     * @param scoId Current SCO ID.
     * @param attempt Attempt number.
     * @param userData The user default data.
     * @param mode Mode being played. By default, MODENORMAL.
     * @param offline Whether the attempt is offline.
     */
    constructor(siteId, scorm, scoId, attempt, userData, mode, offline) {
        this.currentUserData = {}; // Current user data.
        this.def = {}; // Object containing the default values.
        this.defExtra = {}; // Objectives and interactions (all .n. elems).
        this.dataModel = {}; // The SCORM 1.2 data model.
        this.initialized = false; // Whether LMSInitialize has been called.
        this.errorCode = '0'; // Last error.
        this.siteId = siteId;
        this.scorm = scorm;
        this.scoId = scoId;
        this.attempt = attempt;
        this.mode = mode || services_scorm["b" /* AddonModScormProvider */].MODENORMAL;
        this.offline = !!offline;
        this.init(userData);
    }
    /**
     * Utility function for adding two times in format hh:mm:ss.
     *
     * @param first First time.
     * @param second Second time.
     * @return Total time.
     */
    addTime(first, second) {
        const sFirst = first.split(':');
        const sSecond = second.split(':');
        const cFirst = sFirst[2].split('.');
        const cSecond = sSecond[2].split('.');
        let change = 0;
        let firstCents = 0; // Cents.
        if (cFirst.length > 1) {
            firstCents = parseInt(cFirst[1], 10);
        }
        let secondCents = 0;
        if (cSecond.length > 1) {
            secondCents = parseInt(cSecond[1], 10);
        }
        let cents = firstCents + secondCents;
        change = Math.floor(cents / 100);
        cents = cents - (change * 100);
        if (Math.floor(cents) < 10) {
            cents = '0' + cents.toString();
        }
        let secs = parseInt(cFirst[0], 10) + parseInt(cSecond[0], 10) + change; // Seconds.
        change = Math.floor(secs / 60);
        secs = secs - (change * 60);
        if (Math.floor(secs) < 10) {
            secs = '0' + secs.toString();
        }
        let mins = parseInt(sFirst[1], 10) + parseInt(sSecond[1], 10) + change; // Minutes.
        change = Math.floor(mins / 60);
        mins = mins - (change * 60);
        if (mins < 10) {
            mins = '0' + mins.toString();
        }
        let hours = parseInt(sFirst[0], 10) + parseInt(sSecond[0], 10) + change; // Hours.
        if (hours < 10) {
            hours = '0' + hours.toString();
        }
        if (cents != '0') {
            return hours + ':' + mins + ':' + secs + '.' + cents;
        }
        else {
            return hours + ':' + mins + ':' + secs;
        }
    }
    /**
     * Collect all the user tracking data that must be persisted in the system, this is usually called by LMSCommit().
     *
     * @return Collected data.
     */
    collectData() {
        if (!this.currentUserData[this.scoId]) {
            return [];
        }
        const data = [];
        for (const element in this.currentUserData[this.scoId].userdata) {
            // Ommit for example the nav. elements and the session time element.
            if (element.substr(0, 3) != 'cmi' || element == 'cmi.core.session_time') {
                continue;
            }
            // Get the generic name for this element (e.g. convert 'cmi.interactions.1.id' to 'cmi.interactions.n.id')
            const expression = new RegExp(CMI_INDEX, 'g');
            const elementModel = element.replace(expression, '.n.');
            // Check if this specific element is not defined in the datamodel, but the generic element name is.
            if (this.dataModel[this.scoId][element] === undefined && this.dataModel[this.scoId][elementModel] !== undefined) {
                // Add this element to the data model (by cloning the generic element) so we can track changes to it.
                this.dataModel[this.scoId][element] = utils["a" /* CoreUtils */].clone(this.dataModel[this.scoId][elementModel]);
            }
            // Check if the current element exists in the datamodel and it's not a read only element.
            if (this.dataModel[this.scoId][element] === undefined || this.dataModel[this.scoId][element].mod == 'r') {
                continue;
            }
            const el = {
                // Moodle stores the organizations and interactions using _n. instead .n.
                element: element.replace(expression, '_$1.'),
                value: this.getEl(element),
            };
            // Check if the element has a default value.
            if (this.dataModel[this.scoId][element].defaultvalue !== undefined) {
                // Check if the default value is different from the current value.
                if (this.dataModel[this.scoId][element].defaultvalue !== el.value) {
                    data.push(el);
                    // Update the element default to reflect the current committed value.
                    this.dataModel[this.scoId][element].defaultvalue = el.value;
                }
            }
            else {
                data.push(el);
                // No default value for the element, so set it now.
                this.dataModel[this.scoId][element].defaultvalue = el.value;
            }
        }
        return data;
    }
    /**
     * Get the value of the given element from the non-persistent (current) user data.
     *
     * @param el The element
     * @return The element value
     */
    getEl(el) {
        if (this.currentUserData[this.scoId] && this.currentUserData[this.scoId].userdata[el] !== undefined) {
            return this.currentUserData[this.scoId].userdata[el];
        }
        return '';
    }
    /**
     * Initialize the model.
     *
     * @param userData The user default data.
     */
    init(userData) {
        var _a, _b, _c, _d, _e, _f, _g;
        // Prepare the definition array containing the default values.
        for (const scoId in userData) {
            const sco = userData[scoId];
            this.def[scoId] = sco.defaultdata;
            this.defExtra[scoId] = sco.userdata;
        }
        // Set up data model for each SCO.
        for (const scoId in this.def) {
            this.dataModel[scoId] = {
                'cmi._children': { defaultvalue: CMI_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi._version': { defaultvalue: '3.4', mod: 'r', writeerror: '402' },
                'cmi.core._children': { defaultvalue: CORE_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.core.student_id': { defaultvalue: this.def[scoId]['cmi.core.student_id'], mod: 'r', writeerror: '403' },
                'cmi.core.student_name': { defaultvalue: this.def[scoId]['cmi.core.student_name'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_location': {
                    defaultvalue: this.def[scoId]['cmi.core.lesson_location'],
                    format: CMI_STRING_256,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.core.credit': { defaultvalue: this.def[scoId]['cmi.core.credit'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_status': {
                    defaultvalue: this.def[scoId]['cmi.core.lesson_status'],
                    format: CMI_STATUS,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.core.entry': { defaultvalue: this.def[scoId]['cmi.core.entry'], mod: 'r', writeerror: '403' },
                'cmi.core.score._children': { defaultvalue: SCORE_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.core.score.raw': {
                    defaultvalue: this.def[scoId]['cmi.core.score.raw'],
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.core.score.max': {
                    defaultvalue: this.def[scoId]['cmi.core.score.max'],
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.core.score.min': {
                    defaultvalue: this.def[scoId]['cmi.core.score.min'],
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.core.total_time': { defaultvalue: this.def[scoId]['cmi.core.total_time'], mod: 'r', writeerror: '403' },
                'cmi.core.lesson_mode': { defaultvalue: this.def[scoId]['cmi.core.lesson_mode'], mod: 'r', writeerror: '403' },
                'cmi.core.exit': {
                    defaultvalue: this.def[scoId]['cmi.core.exit'],
                    format: CMI_EXIT,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.core.session_time': {
                    format: CMI_TIMESPAN,
                    mod: 'w',
                    defaultvalue: '00:00:00',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.suspend_data': {
                    defaultvalue: this.def[scoId]['cmi.suspend_data'],
                    format: CMI_STRING_4096,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.launch_data': { defaultvalue: this.def[scoId]['cmi.launch_data'], mod: 'r', writeerror: '403' },
                'cmi.comments': {
                    defaultvalue: this.def[scoId]['cmi.comments'],
                    format: CMI_STRING_4096,
                    mod: 'rw',
                    writeerror: '405',
                },
                // Deprecated evaluation attributes.
                'cmi.evaluation.comments._count': { defaultvalue: '0', mod: 'r', writeerror: '402' },
                'cmi.evaluation.comments._children': { defaultvalue: COMMENTS_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.evaluation.comments.n.content': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_STRING_256,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.evaluation.comments.n.location': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_STRING_256,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.evaluation.comments.n.time': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_TIME,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.comments_from_lms': { mod: 'r', writeerror: '403' },
                'cmi.objectives._children': { defaultvalue: OBJECTIVES_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.objectives._count': { mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.objectives.n.id': { pattern: CMI_INDEX, format: CMI_IDENTIFIER, mod: 'rw', writeerror: '405' },
                'cmi.objectives.n.score._children': { pattern: CMI_INDEX, mod: 'r', writeerror: '402' },
                'cmi.objectives.n.score.raw': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.objectives.n.score.min': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.objectives.n.score.max': {
                    defaultvalue: '',
                    pattern: CMI_INDEX,
                    format: CMI_DECIMAL,
                    range: SCORE_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.objectives.n.status': { pattern: CMI_INDEX, format: CMI_STATUS_2, mod: 'rw', writeerror: '405' },
                'cmi.student_data._children': { defaultvalue: STUDENT_DATA_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.student_data.mastery_score': {
                    defaultvalue: this.def[scoId]['cmi.student_data.mastery_score'],
                    mod: 'r',
                    writeerror: '403',
                },
                'cmi.student_data.max_time_allowed': {
                    defaultvalue: this.def[scoId]['cmi.student_data.max_time_allowed'],
                    mod: 'r',
                    writeerror: '403',
                },
                'cmi.student_data.time_limit_action': {
                    defaultvalue: this.def[scoId]['cmi.student_data.time_limit_action'],
                    mod: 'r',
                    writeerror: '403',
                },
                'cmi.student_preference._children': {
                    defaultvalue: STUDENT_PREFERENCE_CHILDREN,
                    mod: 'r',
                    writeerror: '402',
                },
                'cmi.student_preference.audio': {
                    defaultvalue: this.def[scoId]['cmi.student_preference.audio'],
                    format: CMI_SINTEGER,
                    range: AUDIO_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.student_preference.language': {
                    defaultvalue: this.def[scoId]['cmi.student_preference.language'],
                    format: CMI_STRING_256,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.student_preference.speed': {
                    defaultvalue: this.def[scoId]['cmi.student_preference.speed'],
                    format: CMI_SINTEGER,
                    range: SPEED_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.student_preference.text': {
                    defaultvalue: this.def[scoId]['cmi.student_preference.text'],
                    format: CMI_SINTEGER,
                    range: TEXT_RANGE,
                    mod: 'rw',
                    writeerror: '405',
                },
                'cmi.interactions._children': { defaultvalue: INTERACTIONS_CHILDREN, mod: 'r', writeerror: '402' },
                'cmi.interactions._count': { mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.interactions.n.id': {
                    pattern: CMI_INDEX,
                    format: CMI_IDENTIFIER,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.objectives._count': { pattern: CMI_INDEX, mod: 'r', defaultvalue: '0', writeerror: '402' },
                'cmi.interactions.n.objectives.n.id': {
                    pattern: CMI_INDEX,
                    format: CMI_IDENTIFIER,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.time': { pattern: CMI_INDEX, format: CMI_TIME, mod: 'w', readerror: '404', writeerror: '405' },
                'cmi.interactions.n.type': { pattern: CMI_INDEX, format: CMI_TYPE, mod: 'w', readerror: '404', writeerror: '405' },
                'cmi.interactions.n.correct_responses._count': {
                    pattern: CMI_INDEX,
                    mod: 'r',
                    defaultvalue: '0',
                    writeerror: '402',
                },
                'cmi.interactions.n.correct_responses.n.pattern': {
                    pattern: CMI_INDEX,
                    format: CMI_FEEDBACK,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.weighting': {
                    pattern: CMI_INDEX,
                    format: CMI_DECIMAL,
                    range: WEIGHTING_RANGE,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.student_response': {
                    pattern: CMI_INDEX,
                    format: CMI_FEEDBACK,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.result': {
                    pattern: CMI_INDEX,
                    format: CMI_RESULT,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'cmi.interactions.n.latency': {
                    pattern: CMI_INDEX,
                    format: CMI_TIMESPAN,
                    mod: 'w',
                    readerror: '404',
                    writeerror: '405',
                },
                'nav.event': { defaultvalue: '', format: NAV_EVENT, mod: 'w', readerror: '404', writeerror: '405' },
            };
            this.currentUserData[scoId] = {
                scoid: Number(scoId),
                userdata: {},
                defaultdata: {},
            };
            // Load default values.
            for (const element in this.dataModel[scoId]) {
                if (element.match(/\.n\./) === null) {
                    if (this.dataModel[scoId][element].defaultvalue !== undefined) {
                        this.currentUserData[scoId].userdata[element] = this.dataModel[scoId][element].defaultvalue;
                    }
                }
            }
            // Load initial user data for current SCO.
            for (const element in this.def[scoId]) {
                if (element.match(/\.n\./) === null) {
                    if (this.dataModel[scoId][element].defaultvalue !== undefined) {
                        this.currentUserData[scoId].userdata[element] = this.dataModel[scoId][element].defaultvalue;
                    }
                    else if (this.defExtra[scoId][element] !== undefined) {
                        // Check in user data values.
                        this.currentUserData[scoId].userdata[element] = this.defExtra[scoId][element];
                    }
                    else {
                        this.currentUserData[scoId].userdata[element] = '';
                    }
                }
            }
            // Load interactions and objectives, and init the counters.
            const expression = new RegExp(CMI_INDEX, 'g');
            for (const element in this.defExtra[scoId]) {
                let counterElement = '';
                let currentCounterIndex = '0';
                // This check for an indexed element. cmi.objectives.1.id or cmi.objectives_1.id.
                if (element.match(expression)) {
                    // Normalize to the expected value according the standard.
                    // Moodle stores this values using _n. instead .n.
                    const elementDotFormat = element.replace(expression, '.$1.');
                    this.currentUserData[scoId].userdata[elementDotFormat] = this.defExtra[scoId][element];
                    // Get the correct counter and current index.
                    if (elementDotFormat.indexOf('cmi.evaluation.comments') === 0) {
                        counterElement = 'cmi.evaluation.comments._count';
                        currentCounterIndex = ((_a = elementDotFormat.match(/.(\d+)./)) === null || _a === void 0 ? void 0 : _a[1]) || '0';
                    }
                    else if (elementDotFormat.indexOf('cmi.objectives') === 0) {
                        counterElement = 'cmi.objectives._count';
                        currentCounterIndex = ((_b = elementDotFormat.match(/.(\d+)./)) === null || _b === void 0 ? void 0 : _b[1]) || '0';
                    }
                    else if (elementDotFormat.indexOf('cmi.interactions') === 0) {
                        if (elementDotFormat.indexOf('.objectives.') > 0) {
                            const currentN = (_c = elementDotFormat.match(/cmi.interactions.(\d+)./)) === null || _c === void 0 ? void 0 : _c[1];
                            currentCounterIndex = ((_d = elementDotFormat.match(/objectives.(\d+)./)) === null || _d === void 0 ? void 0 : _d[1]) || '0';
                            counterElement = 'cmi.interactions.' + currentN + '.objectives._count';
                        }
                        else if (elementDotFormat.indexOf('.correct_responses.') > 0) {
                            const currentN = (_e = elementDotFormat.match(/cmi.interactions.(\d+)./)) === null || _e === void 0 ? void 0 : _e[1];
                            currentCounterIndex = ((_f = elementDotFormat.match(/correct_responses.(\d+)./)) === null || _f === void 0 ? void 0 : _f[1]) || '0';
                            counterElement = 'cmi.interactions.' + currentN + '.correct_responses._count';
                        }
                        else {
                            counterElement = 'cmi.interactions._count';
                            currentCounterIndex = ((_g = elementDotFormat.match(/.(\d+)./)) === null || _g === void 0 ? void 0 : _g[1]) || '0';
                        }
                    }
                    if (counterElement) {
                        const counterData = this.currentUserData[scoId].userdata[counterElement];
                        if (counterData === undefined) {
                            this.currentUserData[scoId].userdata[counterElement] = 0;
                        }
                        // Check if we need to sum.
                        if (Number(currentCounterIndex) == Number(counterData)) {
                            this.currentUserData[scoId].userdata[counterElement] = Number(counterData) + 1;
                        }
                        if (Number(currentCounterIndex) > Number(counterData)) {
                            this.currentUserData[scoId].userdata[counterElement] = Number(currentCounterIndex) - 1;
                        }
                    }
                }
            }
            // Set default status.
            if (this.currentUserData[scoId].userdata['cmi.core.lesson_status'] === '') {
                this.currentUserData[scoId].userdata['cmi.core.lesson_status'] = 'not attempted';
            }
            // Define mode and credit.
            this.currentUserData[scoId].userdata['cmi.core.credit'] = this.mode == services_scorm["b" /* AddonModScormProvider */].MODENORMAL ?
                'credit' :
                'no-credit';
            this.currentUserData[scoId].userdata['cmi.core.lesson_mode'] = this.mode;
        }
    }
    /**
     * Commit the changes.
     *
     * @param param Param.
     * @return "true" if success, "false" otherwise.
     */
    LMSCommit(param) {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
        this.errorCode = '0';
        if (param == '') {
            if (this.initialized) {
                const result = this.storeData(false);
                // Trigger TOC update.
                this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].UPDATE_TOC_EVENT);
                this.errorCode = result ? '0' : '101';
                // Conver to string representing a boolean.
                return result ? 'true' : 'false';
            }
            else {
                this.errorCode = '301';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    }
    /**
     * Finish the data model.
     *
     * @param param Param.
     * @return "true" if success, "false" otherwise.
     */
    LMSFinish(param) {
        this.errorCode = '0';
        if (param == '') {
            if (this.initialized) {
                this.initialized = false;
                const result = this.storeData(true);
                if (this.getEl('nav.event') != '') {
                    if (this.getEl('nav.event') == 'continue') {
                        this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT);
                    }
                    else {
                        this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].LAUNCH_PREV_SCO_EVENT);
                    }
                }
                else {
                    if (this.scorm.auto) {
                        this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT);
                    }
                }
                this.errorCode = result ? '0' : '101';
                // Trigger TOC update.
                this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].UPDATE_TOC_EVENT);
                // Conver to string representing a boolean.
                return result ? 'true' : 'false';
            }
            else {
                this.errorCode = '301';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    }
    /**
     * Get diagnostic.
     *
     * @param param Param.
     * @return Result.
     */
    LMSGetDiagnostic(param) {
        if (param == '') {
            param = this.errorCode;
        }
        return param;
    }
    /**
     * Get the error message for a certain code.
     *
     * @param param Error code.
     * @return Error message.
     */
    LMSGetErrorString(param) {
        if (param != '') {
            return ERROR_STRINGS[param];
        }
        else {
            return '';
        }
    }
    /**
     * Get the last error code.
     *
     * @return Last error code.
     */
    LMSGetLastError() {
        return this.errorCode;
    }
    /**
     * Get the value of a certain element.
     *
     * @param element Name of the element to get.
     * @return Value.
     */
    LMSGetValue(element) {
        this.errorCode = '0';
        if (this.initialized) {
            if (element != '') {
                const expression = new RegExp(CMI_INDEX, 'g');
                const elementModel = String(element).replace(expression, '.n.');
                if (this.dataModel[this.scoId][elementModel] !== undefined) {
                    if (this.dataModel[this.scoId][elementModel].mod != 'w') {
                        this.errorCode = '0';
                        return this.getEl(element);
                    }
                    else {
                        this.errorCode = this.dataModel[this.scoId][elementModel].readerror || '0';
                    }
                }
                else {
                    const childrenStr = '._children';
                    const countStr = '._count';
                    if (elementModel.substr(elementModel.length - childrenStr.length, elementModel.length) == childrenStr) {
                        const parentModel = elementModel.substr(0, elementModel.length - childrenStr.length);
                        if (this.dataModel[this.scoId][parentModel] !== undefined) {
                            this.errorCode = '202';
                        }
                        else {
                            this.errorCode = '201';
                        }
                    }
                    else if (elementModel.substr(elementModel.length - countStr.length, elementModel.length) == countStr) {
                        const parentModel = elementModel.substr(0, elementModel.length - countStr.length);
                        if (this.dataModel[this.scoId][parentModel] !== undefined) {
                            this.errorCode = '203';
                        }
                        else {
                            this.errorCode = '201';
                        }
                    }
                    else {
                        this.errorCode = '201';
                    }
                }
            }
            else {
                this.errorCode = '201';
            }
        }
        else {
            this.errorCode = '301';
        }
        return '';
    }
    /**
     * Initialize the data model.
     *
     * @param param Param.
     * @return "true" if initialized, "false" otherwise.
     */
    LMSInitialize(param) {
        this.errorCode = '0';
        if (param == '') {
            if (!this.initialized) {
                this.initialized = true;
                this.errorCode = '0';
                return 'true';
            }
            else {
                this.errorCode = '101';
            }
        }
        else {
            this.errorCode = '201';
        }
        return 'false';
    }
    /**
     * Set the value of a certain element.
     *
     * @param element Name of the element to set.
     * @param value Value to set.
     * @return "true" if success, "false" otherwise.
     */
    LMSSetValue(element, value) {
        var _a, _b;
        this.errorCode = '0';
        if (this.initialized) {
            if (element != '') {
                let expression = new RegExp(CMI_INDEX, 'g');
                const elementModel = String(element).replace(expression, '.n.');
                if (this.dataModel[this.scoId][elementModel] !== undefined) {
                    if (this.dataModel[this.scoId][elementModel].mod != 'r') {
                        expression = new RegExp(this.dataModel[this.scoId][elementModel].format);
                        value = value + '';
                        const matches = value.match(expression);
                        if (matches != null) {
                            // Create dynamic data model element.
                            if (element != elementModel) {
                                // Init default counters and values.
                                if (element.indexOf('cmi.objectives') === 0) {
                                    const currentN = (_a = element.match(/cmi.objectives.(\d+)./)) === null || _a === void 0 ? void 0 : _a[1];
                                    const counterElement = 'cmi.objectives.' + currentN + '.score';
                                    if (this.currentUserData[this.scoId].userdata[counterElement + '._children'] === undefined) {
                                        this.setEl(this.currentUserData[this.scoId].userdata[counterElement + '._children'], SCORE_CHILDREN);
                                        this.setEl(this.currentUserData[this.scoId].userdata[counterElement + '.raw'], '');
                                        this.setEl(this.currentUserData[this.scoId].userdata[counterElement + '.min'], '');
                                        this.setEl(this.currentUserData[this.scoId].userdata[counterElement + '.max'], '');
                                    }
                                }
                                else if (element.indexOf('cmi.interactions') === 0) {
                                    const currentN = (_b = element.match(/cmi.interactions.(\d+)./)) === null || _b === void 0 ? void 0 : _b[1];
                                    let counterElement = 'cmi.interactions.' + currentN + '.objectives._count';
                                    if (this.currentUserData[this.scoId].userdata[counterElement] === undefined) {
                                        this.setEl(counterElement, 0);
                                    }
                                    counterElement = 'cmi.interactions.' + currentN + '.correct_responses._count';
                                    if (this.currentUserData[this.scoId].userdata[counterElement] === undefined) {
                                        this.setEl(counterElement, 0);
                                    }
                                }
                                const elementIndexes = element.split('.');
                                let subElement = 'cmi';
                                for (let i = 1; i < elementIndexes.length - 1; i++) {
                                    const elementIndex = elementIndexes[i];
                                    if (elementIndexes[i + 1].match(/^\d+$/)) {
                                        const counterElement = subElement + '.' + elementIndex + '._count';
                                        if (this.currentUserData[this.scoId].userdata[counterElement] === undefined) {
                                            this.setEl(counterElement, 0);
                                        }
                                        if (elementIndexes[i + 1] == this.getEl(counterElement)) {
                                            const count = this.getEl(counterElement);
                                            this.setEl(counterElement, Number(count) + 1);
                                        }
                                        if (elementIndexes[i + 1] > this.getEl(counterElement)) {
                                            this.errorCode = '201';
                                        }
                                        subElement = subElement.concat('.' + elementIndex + '.' + elementIndexes[i + 1]);
                                        i++;
                                    }
                                    else {
                                        subElement = subElement.concat('.' + elementIndex);
                                    }
                                }
                                element = subElement.concat('.' + elementIndexes[elementIndexes.length - 1]);
                            }
                            // Store data.
                            if (this.errorCode == '0') {
                                if (this.scorm.autocommit && !this.timeout) {
                                    this.timeout = window.setTimeout(this.LMSCommit.bind(this), 60000, ['']);
                                }
                                const range = this.dataModel[this.scoId][elementModel].range;
                                if (range !== undefined) {
                                    const ranges = range.split('#');
                                    value = Number(value);
                                    if (value >= Number(ranges[0]) && value <= Number(ranges[1])) {
                                        this.setEl(element, Number(value));
                                        this.errorCode = '0';
                                        return 'true';
                                    }
                                    else {
                                        this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                                    }
                                }
                                else {
                                    if (element == 'cmi.comments') {
                                        this.setEl('cmi.comments', this.getEl('cmi.comments') + value);
                                    }
                                    else {
                                        this.setEl(element, value);
                                    }
                                    this.errorCode = '0';
                                    return 'true';
                                }
                            }
                        }
                        else {
                            this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                        }
                    }
                    else {
                        this.errorCode = this.dataModel[this.scoId][elementModel].writeerror;
                    }
                }
                else {
                    this.errorCode = '201';
                }
            }
            else {
                this.errorCode = '201';
            }
        }
        else {
            this.errorCode = '301';
        }
        return 'false';
    }
    /**
     * Set a SCO ID.
     * The scoId is like a pointer to be able to retrieve the SCO default values and set the new ones in the overall SCORM
     * data structure.
     *
     * @param scoId The new SCO id.
     */
    loadSco(scoId) {
        this.scoId = scoId;
    }
    /**
     * Set the value of the given element in the non-persistent (current) user data.
     *
     * @param el The element.
     * @param value The value.
     */
    setEl(el, value) {
        this.currentUserData[this.scoId] = this.currentUserData[this.scoId] || {
            scoid: this.scoId,
            userdata: {},
            defaultdata: {},
        };
        this.currentUserData[this.scoId].userdata[el] = value;
    }
    /**
     * Set offline mode to true or false.
     *
     * @param offline True if offline, false otherwise.
     */
    setOffline(offline) {
        this.offline = offline;
    }
    /**
     * Persist the current user data (this is usually called by LMSCommit).
     *
     * @param storeTotalTime If true, we need to calculate the total time too.
     * @return True if success, false otherwise.
     */
    storeData(storeTotalTime) {
        let tracks;
        if (storeTotalTime) {
            if (this.getEl('cmi.core.lesson_status') == 'not attempted') {
                this.setEl('cmi.core.lesson_status', 'completed');
            }
            if (this.getEl('cmi.core.lesson_mode') == services_scorm["b" /* AddonModScormProvider */].MODENORMAL) {
                if (this.getEl('cmi.core.credit') == 'credit') {
                    if (this.getEl('cmi.student_data.mastery_score') !== '' && this.getEl('cmi.core.score.raw') !== '') {
                        if (parseFloat(this.getEl('cmi.core.score.raw')) >=
                            parseFloat(this.getEl('cmi.student_data.mastery_score'))) {
                            this.setEl('cmi.core.lesson_status', 'passed');
                        }
                        else {
                            this.setEl('cmi.core.lesson_status', 'failed');
                        }
                    }
                }
            }
            if (this.getEl('cmi.core.lesson_mode') == services_scorm["b" /* AddonModScormProvider */].MODEBROWSE) {
                if (this.dataModel[this.scoId]['cmi.core.lesson_status'].defaultvalue == '' &&
                    this.getEl('cmi.core.lesson_status') == 'not attempted') {
                    this.setEl('cmi.core.lesson_status', 'browsed');
                }
            }
            tracks = this.collectData();
            tracks.push(this.totalTime());
        }
        else {
            tracks = this.collectData();
        }
        const ok = services_scorm["a" /* AddonModScorm */].saveTracksSync(this.scoId, this.attempt, tracks, this.scorm, this.offline, this.currentUserData);
        if (this.offline || ok) {
            return ok;
        }
        // Failure storing data in online. Go offline.
        this.offline = true;
        this.triggerEvent(services_scorm["b" /* AddonModScormProvider */].GO_OFFLINE_EVENT);
        return services_scorm["a" /* AddonModScorm */].saveTracksSync(this.scoId, this.attempt, tracks, this.scorm, this.offline, this.currentUserData);
    }
    /**
     * Utility function for calculating the total time spent in the SCO.
     *
     * @return Total time element.
     */
    totalTime() {
        const totalTime = this.addTime(this.getEl('cmi.core.total_time'), this.getEl('cmi.core.session_time'));
        return { element: 'cmi.core.total_time', value: totalTime };
    }
    /**
     * Convenience function to trigger events.
     *
     * @param name Name of the event to trigger.
     */
    triggerEvent(name) {
        events["b" /* CoreEvents */].trigger(name, {
            scormId: this.scorm.id,
            scoId: this.scoId,
            attempt: this.attempt,
        }, this.siteId);
    }
}

// EXTERNAL MODULE: ./src/addons/mod/scorm/components/toc/toc.ts
var toc = __webpack_require__("8ykv");

// EXTERNAL MODULE: ./src/addons/mod/scorm/services/scorm-helper.ts
var scorm_helper = __webpack_require__("pisK");

// EXTERNAL MODULE: ./src/addons/mod/scorm/services/scorm-sync.ts
var scorm_sync = __webpack_require__("G82x");

// EXTERNAL MODULE: ./src/core/features/mainmenu/pages/menu/menu.ts
var menu = __webpack_require__("tVmb");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/components/navigation-bar/navigation-bar.ts
var navigation_bar = __webpack_require__("/BoF");

// EXTERNAL MODULE: ./src/core/components/button-with-spinner/button-with-spinner.ts
var button_with_spinner = __webpack_require__("3zv0");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/iframe/iframe.ts
var iframe = __webpack_require__("qNqN");

// CONCATENATED MODULE: ./src/addons/mod/scorm/pages/player/player.ts

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
























function AddonModScormPlayerPage_core_button_with_spinner_8_ion_button_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 11);
        core["Mc" /* ɵɵlistener */]("click", function AddonModScormPlayerPage_core_button_with_spinner_8_ion_button_1_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](2); return ctx_r4.openToc(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 12);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "addon.mod_scorm.toc"));
    }
}
function AddonModScormPlayerPage_core_button_with_spinner_8_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-button-with-spinner", 9);
        core["nd" /* ɵɵtemplate */](1, AddonModScormPlayerPage_core_button_with_spinner_8_ion_button_1_Template, 3, 3, "ion-button", 10);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("loading", ctx_r0.loadingToc);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r0.toc.length);
    }
}
function AddonModScormPlayerPage_core_iframe_12_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "core-iframe", 13);
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("src", ctx_r1.src)("iframeWidth", ctx_r1.scormWidth)("iframeHeight", ctx_r1.scormHeight);
    }
}
function AddonModScormPlayerPage_p_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r2 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, ctx_r2.errorMessage));
    }
}
/**
 * Page that allows playing a SCORM.
 */
let player_AddonModScormPlayerPage = /*@__PURE__*/ (() => {
    class AddonModScormPlayerPage {
        constructor(mainMenuPage) {
            this.mainMenuPage = mainMenuPage;
            this.showToc = false; // Whether to show the table of contents (TOC).
            this.loadingToc = true; // Whether the TOC is being loaded.
            this.toc = []; // List of SCOs.
            this.loaded = false; // Whether the data has been loaded.
            this.incomplete = false; // Whether last attempt is incomplete.
            this.newAttempt = false; // Whether to start a new attempt.
            this.offline = false; // Whether it's offline mode.
        }
        /**
         * @inheritdoc
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.cmId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('cmId');
                this.courseId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('courseId');
                this.mode = services_navigator["a" /* CoreNavigator */].getRouteParam('mode') || services_scorm["b" /* AddonModScormProvider */].MODENORMAL;
                this.moduleUrl = services_navigator["a" /* CoreNavigator */].getRouteParam('moduleUrl') || '';
                this.newAttempt = !!services_navigator["a" /* CoreNavigator */].getRouteBooleanParam('newAttempt');
                this.organizationId = services_navigator["a" /* CoreNavigator */].getRouteParam('organizationId');
                this.initialScoId = services_navigator["a" /* CoreNavigator */].getRouteNumberParam('scoId');
                this.siteId = sites["b" /* CoreSites */].getCurrentSiteId();
                try {
                    // Fetch the SCORM data.
                    yield this.fetchData();
                    if (!this.currentSco) {
                        return;
                    }
                    // Set start time if it's a new attempt.
                    if (this.newAttempt) {
                        try {
                            yield this.setStartTime(this.currentSco.id);
                        }
                        catch (error) {
                            dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
                        }
                    }
                    // Load SCO.
                    this.loadSco(this.currentSco);
                }
                finally {
                    this.loaded = true;
                }
            });
        }
        /**
         * Initialize.
         *
         * @return Promise resolved when done.
         */
        initialize() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                // Get the SCORM instance.
                this.scorm = yield services_scorm["a" /* AddonModScorm */].getScorm(this.courseId, this.cmId, {
                    moduleUrl: this.moduleUrl,
                    readingStrategy: 1 /* PREFER_CACHE */,
                });
                // Block the SCORM so it cannot be synchronized.
                sync["a" /* CoreSync */].blockOperation(services_scorm["b" /* AddonModScormProvider */].COMPONENT, this.scorm.id, 'player');
                // We use SCORM name at start, later we'll use the SCO title.
                this.title = this.scorm.name;
                this.showToc = services_scorm["a" /* AddonModScorm */].displayTocInPlayer(this.scorm);
                if (this.scorm.popup) {
                    this.mainMenuPage.changeVisibility(false);
                    // If we receive a value > 100 we assume it's a fixed pixel size.
                    if (this.scorm.width > 100) {
                        this.scormWidth = this.scorm.width;
                        // Only get fixed size on height if width is also fixed.
                        if (this.scorm.height > 100) {
                            this.scormHeight = this.scorm.height;
                        }
                    }
                }
                // Listen for events to update the TOC, navigate through SCOs and go offline.
                this.tocObserver = events["b" /* CoreEvents */].on(services_scorm["b" /* AddonModScormProvider */].UPDATE_TOC_EVENT, (data) => {
                    if (data.scormId !== this.scorm.id) {
                        return;
                    }
                    if (this.offline) {
                        // Wait a bit to make sure data is stored.
                        setTimeout(this.refreshToc.bind(this), 100);
                    }
                    else {
                        this.refreshToc();
                    }
                }, this.siteId);
                this.launchNextObserver = events["b" /* CoreEvents */].on(services_scorm["b" /* AddonModScormProvider */].LAUNCH_NEXT_SCO_EVENT, (data) => {
                    if (data.scormId === this.scorm.id && this.nextSco) {
                        this.loadSco(this.nextSco);
                    }
                }, this.siteId);
                this.launchPrevObserver = events["b" /* CoreEvents */].on(services_scorm["b" /* AddonModScormProvider */].LAUNCH_PREV_SCO_EVENT, (data) => {
                    if (data.scormId === this.scorm.id && this.previousSco) {
                        this.loadSco(this.previousSco);
                    }
                }, this.siteId);
                this.goOfflineObserver = events["b" /* CoreEvents */].on(services_scorm["b" /* AddonModScormProvider */].GO_OFFLINE_EVENT, (data) => {
                    if (data.scormId !== this.scorm.id || this.offline) {
                        return;
                    }
                    this.offline = true;
                    // Wait a bit to prevent collisions between this store and SCORM API's store.
                    setTimeout(() => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                        try {
                            scorm_helper["a" /* AddonModScormHelper */].convertAttemptToOffline(this.scorm, this.attempt);
                        }
                        catch (error) {
                            dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error, 'core.error', true);
                        }
                        this.refreshToc();
                    }), 200);
                }, this.siteId);
            });
        }
        /**
         * Calculate the next and previous SCO.
         *
         * @param scoId Current SCO ID.
         */
        calculateNextAndPreviousSco(scoId) {
            this.previousSco = scorm_helper["a" /* AddonModScormHelper */].getPreviousScoFromToc(this.toc, scoId);
            this.nextSco = scorm_helper["a" /* AddonModScormHelper */].getNextScoFromToc(this.toc, scoId);
        }
        /**
         * Determine the attempt to use, the mode (normal/preview) and if it's offline or online.
         *
         * @param attemptsData Attempts count.
         * @return Promise resolved when done.
         */
        determineAttemptAndMode(attemptsData) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const data = yield scorm_helper["a" /* AddonModScormHelper */].determineAttemptToContinue(this.scorm, attemptsData);
                let incomplete = false;
                this.attempt = data.num;
                this.offline = data.offline;
                if (this.attempt != attemptsData.lastAttempt.num) {
                    this.attemptToContinue = this.attempt;
                }
                // Check if current attempt is incomplete.
                if (this.attempt > 0) {
                    incomplete = yield services_scorm["a" /* AddonModScorm */].isAttemptIncomplete(this.scorm.id, this.attempt, {
                        offline: this.offline,
                        cmId: this.cmId,
                    });
                }
                // Determine mode and attempt to use.
                const result = services_scorm["a" /* AddonModScorm */].determineAttemptAndMode(this.scorm, this.mode, this.attempt, this.newAttempt, incomplete);
                if (result.attempt > this.attempt) {
                    // We're creating a new attempt.
                    if (this.offline) {
                        // Last attempt was offline, so we'll create a new offline attempt.
                        yield scorm_helper["a" /* AddonModScormHelper */].createOfflineAttempt(this.scorm, result.attempt, attemptsData.online.length);
                    }
                    else {
                        try {
                            // Last attempt was online, verify that we can create a new online attempt. We ignore cache.
                            yield services_scorm["a" /* AddonModScorm */].getScormUserData(this.scorm.id, result.attempt, {
                                cmId: this.cmId,
                                readingStrategy: 2 /* ONLY_NETWORK */,
                            });
                        }
                        catch (_a) {
                            // Cannot communicate with the server, create an offline attempt.
                            this.offline = true;
                            yield scorm_helper["a" /* AddonModScormHelper */].createOfflineAttempt(this.scorm, result.attempt, attemptsData.online.length);
                        }
                    }
                }
                this.mode = result.mode;
                this.newAttempt = result.newAttempt;
                this.attempt = result.attempt;
            });
        }
        /**
         * Fetch data needed to play the SCORM.
         *
         * @return Promise resolved when done.
         */
        fetchData() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.scorm) {
                    yield this.initialize();
                }
                // Wait for any ongoing sync to finish. We won't sync a SCORM while it's being played.
                yield scorm_sync["a" /* AddonModScormSync */].waitForSync(this.scorm.id);
                try {
                    // Get attempts data.
                    const attemptsData = yield services_scorm["a" /* AddonModScorm */].getAttemptCount(this.scorm.id, { cmId: this.cmId });
                    yield this.determineAttemptAndMode(attemptsData);
                    const [data, accessInfo] = yield Promise.all([
                        services_scorm["a" /* AddonModScorm */].getScormUserData(this.scorm.id, this.attempt, {
                            cmId: this.cmId,
                            offline: this.offline,
                        }),
                        services_scorm["a" /* AddonModScorm */].getAccessInformation(this.scorm.id, {
                            cmId: this.cmId,
                        }),
                        this.fetchToc(),
                    ]);
                    this.userData = data;
                    this.accessInfo = accessInfo;
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
                }
            });
        }
        /**
         * Fetch the TOC.
         *
         * @return Promise resolved when done.
         */
        fetchToc() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.loadingToc = true;
                try {
                    // We need to check incomplete again: attempt number or status might have changed.
                    this.incomplete = yield services_scorm["a" /* AddonModScorm */].isAttemptIncomplete(this.scorm.id, this.attempt, {
                        offline: this.offline,
                        cmId: this.cmId,
                    });
                    // Get TOC.
                    this.toc = yield scorm_helper["a" /* AddonModScormHelper */].getToc(this.scorm.id, this.attempt, this.incomplete, {
                        organization: this.organizationId,
                        offline: this.offline,
                        cmId: this.cmId,
                    });
                    if (this.currentSco) {
                        return;
                    }
                    if (this.newAttempt) {
                        // Creating a new attempt, use the first SCO defined by the SCORM.
                        this.initialScoId = this.scorm.launch;
                    }
                    // Determine current SCO if we received an ID.
                    if (this.initialScoId && this.initialScoId > 0) {
                        // SCO set by parameter, get it from TOC.
                        this.currentSco = scorm_helper["a" /* AddonModScormHelper */].getScoFromToc(this.toc, this.initialScoId);
                    }
                    if (this.currentSco) {
                        return;
                    }
                    // No SCO defined. Get the first valid one.
                    const sco = yield scorm_helper["a" /* AddonModScormHelper */].getFirstSco(this.scorm.id, this.attempt, {
                        toc: this.toc,
                        organization: this.organizationId,
                        mode: this.mode,
                        offline: this.offline,
                        cmId: this.cmId,
                    });
                    if (sco) {
                        this.currentSco = sco;
                    }
                    else {
                        // We couldn't find a SCO to load: they're all inactive or without launch URL.
                        this.errorMessage = 'addon.mod_scorm.errornovalidsco';
                    }
                }
                finally {
                    this.loadingToc = false;
                }
            });
        }
        /**
         * Load a SCO.
         *
         * @param sco The SCO to load.
         * @return Promise resolved when done.
         */
        loadSco(sco) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (!this.dataModel) {
                    // Create the model.
                    this.dataModel = new data_model_12_AddonModScormDataModel12(this.siteId, this.scorm, sco.id, this.attempt, this.userData, this.mode, this.offline);
                    // Add the model to the window so the SCORM can access it.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    window.API = this.dataModel;
                }
                else {
                    // Load the SCO in the existing model.
                    this.dataModel.loadSco(sco.id);
                }
                this.currentSco = sco;
                this.title = sco.title || this.scorm.name; // Try to use SCO title.
                this.calculateNextAndPreviousSco(sco.id);
                // Load the SCO source.
                this.loadScoSrc(sco);
                if (sco.scormtype == 'asset') {
                    // Mark the asset as completed.
                    this.markCompleted(sco);
                }
                // Trigger SCO launch event.
                utils["a" /* CoreUtils */].ignoreErrors(services_scorm["a" /* AddonModScorm */].logLaunchSco(this.scorm.id, sco.id, this.scorm.name));
            });
        }
        /**
         * Load SCO src.
         *
         * @param sco SCO to load.
         * @return Promise resolved when done.
         */
        loadScoSrc(sco) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const src = yield services_scorm["a" /* AddonModScorm */].getScoSrc(this.scorm, sco);
                if (src == this.src) {
                    // Re-loading same page. Set it to empty and then re-set the src in the next digest so it detects it has changed.
                    this.src = '';
                    yield utils["a" /* CoreUtils */].nextTick();
                }
                this.src = src;
            });
        }
        /**
         * Given an SCO, mark it as completed.
         *
         * @param sco SCO to mark.
         * @return Promise resolved when done.
         */
        markCompleted(sco) {
            var _a;
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const tracks = [{
                        element: 'cmi.core.lesson_status',
                        value: 'completed',
                    }];
                try {
                    services_scorm["a" /* AddonModScorm */].saveTracks(sco.id, this.attempt, tracks, this.scorm, this.offline);
                }
                catch (_b) {
                    // Error saving data. Go offline if needed.
                    if (this.offline) {
                        return;
                    }
                    const data = yield services_scorm["a" /* AddonModScorm */].getScormUserData(this.scorm.id, this.attempt, {
                        cmId: this.cmId,
                    });
                    if (data[sco.id] && data[sco.id].userdata['cmi.core.lesson_status'] == 'completed') {
                        // Already marked as completed.
                        return;
                    }
                    try {
                        // Go offline.
                        yield scorm_helper["a" /* AddonModScormHelper */].convertAttemptToOffline(this.scorm, this.attempt);
                        this.offline = true;
                        (_a = this.dataModel) === null || _a === void 0 ? void 0 : _a.setOffline(true);
                        yield services_scorm["a" /* AddonModScorm */].saveTracks(sco.id, this.attempt, tracks, this.scorm, true);
                    }
                    catch (error) {
                        dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error, 'core.error', true);
                    }
                }
                finally {
                    // Refresh TOC, some prerequisites might have changed.
                    this.refreshToc();
                }
            });
        }
        /**
         * Show the TOC.
         */
        openToc() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modalData = yield dom["a" /* CoreDomUtils */].openSideModal({
                    component: toc["a" /* AddonModScormTocComponent */],
                    componentProps: {
                        toc: this.toc,
                        attemptToContinue: this.attemptToContinue,
                        selected: this.currentSco && this.currentSco.id,
                        moduleId: this.cmId,
                        courseId: this.courseId,
                        accessInfo: this.accessInfo,
                        mode: this.mode,
                    },
                });
                if (modalData) {
                    this.loadSco(modalData);
                }
            });
        }
        /**
         * Refresh the TOC.
         *
         * @return Promise resolved when done.
         */
        refreshToc() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield utils["a" /* CoreUtils */].ignoreErrors(services_scorm["a" /* AddonModScorm */].invalidateAllScormData(this.scorm.id));
                    yield this.fetchToc();
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].instance.showErrorModalDefault(error, 'addon.mod_scorm.errorgetscorm', true);
                }
            });
        }
        /**
         * Set SCORM start time.
         *
         * @param scoId SCO ID.
         * @return Promise resolved when done.
         */
        setStartTime(scoId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const tracks = [{
                        element: 'x.start.time',
                        value: String(time["a" /* CoreTimeUtils */].timestamp()),
                    }];
                yield services_scorm["a" /* AddonModScorm */].saveTracks(scoId, this.attempt, tracks, this.scorm, this.offline);
                if (this.offline) {
                    return;
                }
                // New online attempt created, update cached data about online attempts.
                yield utils["a" /* CoreUtils */].ignoreErrors(services_scorm["a" /* AddonModScorm */].getAttemptCount(this.scorm.id, {
                    cmId: this.cmId,
                    readingStrategy: 2 /* ONLY_NETWORK */,
                }));
            });
        }
        /**
         * @inheritdoc
         */
        ionViewDidEnter() {
            if (this.scorm && this.scorm.popup) {
                this.mainMenuPage.changeVisibility(false);
            }
        }
        /**
         * @inheritdoc
         */
        ionViewWillLeave() {
            this.mainMenuPage.changeVisibility(true);
        }
        /**
         * Component being destroyed.
         */
        ngOnDestroy() {
            var _a, _b, _c;
            // Empty src when leaving the state so unload event is triggered in the iframe.
            this.src = '';
            events["b" /* CoreEvents */].trigger(events["b" /* CoreEvents */].ACTIVITY_DATA_SENT, { module: 'scorm' });
            // Stop listening for events.
            (_a = this.tocObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.launchNextObserver) === null || _b === void 0 ? void 0 : _b.off();
            (_c = this.launchPrevObserver) === null || _c === void 0 ? void 0 : _c.off();
            setTimeout(() => {
                var _a;
                (_a = this.goOfflineObserver) === null || _a === void 0 ? void 0 : _a.off();
            }, 500);
            // Unblock the SCORM so it can be synced.
            sync["a" /* CoreSync */].unblockOperation(services_scorm["b" /* AddonModScormProvider */].COMPONENT, this.scorm.id, 'player');
        }
    }
    AddonModScormPlayerPage.ɵfac = function AddonModScormPlayerPage_Factory(t) { return new (t || AddonModScormPlayerPage)(core["yc" /* ɵɵdirectiveInject */](menu["a" /* CoreMainMenuPage */])); };
    AddonModScormPlayerPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonModScormPlayerPage, selectors: [["page-addon-mod-scorm-player"]], decls: 14, vars: 12, consts: [["slot", "start"], [3, "text"], ["contextLevel", "module", 3, "text", "contextInstanceId", "courseId"], ["slot", "end"], [3, "loading", 4, "ngIf"], [1, "core-loading-fullheight", 3, "hideUntil"], [3, "previous", "next", "action"], [3, "src", "iframeWidth", "iframeHeight", 4, "ngIf"], [4, "ngIf"], [3, "loading"], ["fill", "clear", "aria-haspopup", "true", 3, "click", 4, "ngIf"], ["fill", "clear", "aria-haspopup", "true", 3, "click"], ["name", "fas-bookmark", "slot", "icon-only", "aria-hidden", "true"], [3, "src", "iframeWidth", "iframeHeight"]], template: function AddonModScormPlayerPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](7, "ion-buttons", 3);
                core["nd" /* ɵɵtemplate */](8, AddonModScormPlayerPage_core_button_with_spinner_8_Template, 2, 2, "core-button-with-spinner", 4);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](9, "ion-content");
                core["Ec" /* ɵɵelementStart */](10, "core-loading", 5);
                core["Ec" /* ɵɵelementStart */](11, "core-navigation-bar", 6);
                core["Mc" /* ɵɵlistener */]("action", function AddonModScormPlayerPage_Template_core_navigation_bar_action_11_listener($event) { return ctx.loadSco($event); });
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](12, AddonModScormPlayerPage_core_iframe_12_Template, 1, 3, "core-iframe", 7);
                core["nd" /* ɵɵtemplate */](13, AddonModScormPlayerPage_p_13_Template, 3, 3, "p", 8);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", ctx.title)("contextInstanceId", ctx.cmId)("courseId", ctx.courseId);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.showToc);
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("previous", ctx.previousSco)("next", ctx.nextSco);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.loaded && ctx.src);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.src && ctx.errorMessage);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], format_text["a" /* CoreFormatTextDirective */], common["t" /* NgIf */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], navigation_bar["a" /* CoreNavigationBarComponent */], button_with_spinner["a" /* CoreButtonWithSpinnerComponent */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], iframe["a" /* CoreIframeComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return AddonModScormPlayerPage;
})();

// CONCATENATED MODULE: ./src/addons/mod/scorm/scorm-lazy.module.ts
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
        path: ':courseId/:cmId',
        component: index_AddonModScormIndexPage,
    },
    {
        path: ':courseId/:cmId/player',
        component: player_AddonModScormPlayerPage,
    },
];
let scorm_lazy_module_AddonModScormLazyModule = /*@__PURE__*/ (() => {
    class AddonModScormLazyModule {
    }
    AddonModScormLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonModScormLazyModule });
    AddonModScormLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonModScormLazyModule_Factory(t) { return new (t || AddonModScormLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* AddonModScormComponentsModule */],
            ]] });
    return AddonModScormLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](scorm_lazy_module_AddonModScormLazyModule, { declarations: [index_AddonModScormIndexPage,
            player_AddonModScormPlayerPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* AddonModScormComponentsModule */]] });
})();


/***/ })

}]);