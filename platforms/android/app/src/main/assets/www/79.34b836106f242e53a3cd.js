(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "KBMx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AddonStorageManagerLazyModule", function() { return /* binding */ storagemanager_lazy_module_AddonStorageManagerLazyModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/features/course/services/course.ts
var services_course = __webpack_require__("ULAo");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/features/course/services/module-prefetch-delegate.ts
var module_prefetch_delegate = __webpack_require__("zbKZ");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./src/core/singletons/array.ts
var array = __webpack_require__("Wsfw");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// EXTERNAL MODULE: ./src/core/pipes/bytes-to-size.ts
var bytes_to_size = __webpack_require__("1iFe");

// CONCATENATED MODULE: ./src/addons/storagemanager/pages/courses-storage/courses-storage.ts

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

















function AddonStorageManagerCoursesStoragePage_ion_item_33_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 15);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](course_r1.displayname);
    }
}
function AddonStorageManagerCoursesStoragePage_ion_item_33_p_3_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 15);
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r1 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](course_r1.fullname);
    }
}
function AddonStorageManagerCoursesStoragePage_ion_item_33_p_4_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p", 16);
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.downloading"), " ");
    }
}
const _c0 = function (a0) { return { name: a0 }; };
function AddonStorageManagerCoursesStoragePage_ion_item_33_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 11);
        core["Ec" /* ɵɵelementStart */](1, "ion-label", 3);
        core["nd" /* ɵɵtemplate */](2, AddonStorageManagerCoursesStoragePage_ion_item_33_p_2_Template, 2, 1, "p", 12);
        core["nd" /* ɵɵtemplate */](3, AddonStorageManagerCoursesStoragePage_ion_item_33_p_3_Template, 2, 1, "p", 12);
        core["nd" /* ɵɵtemplate */](4, AddonStorageManagerCoursesStoragePage_ion_item_33_p_4_Template, 3, 3, "p", 13);
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p", 6);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "coreBytesToSize");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 7);
        core["Mc" /* ɵɵlistener */]("click", function AddonStorageManagerCoursesStoragePage_ion_item_33_Template_ion_button_click_8_listener() { core["gd" /* ɵɵrestoreView */](_r8); const course_r1 = ctx.$implicit; const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.deleteCourse(course_r1); });
        core["zc" /* ɵɵelement */](9, "ion-icon", 14);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r1 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", course_r1.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", !course_r1.displayname);
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", course_r1.isDownloading);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 6, course_r1.totalSize));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("disabled", course_r1.isDownloading);
        core["lc" /* ɵɵadvance */](1);
        core["mc" /* ɵɵattribute */]("aria-label", core["Rc" /* ɵɵpipeBind2 */](10, 8, "addon.storagemanager.deletedatafrom", core["ad" /* ɵɵpureFunction1 */](11, _c0, course_r1.displayname)));
    }
}
/**
 * Page that displays downloaded courses and allows the user to delete them.
 */
let courses_storage_AddonStorageManagerCoursesStoragePage = /*@__PURE__*/ (() => {
    class AddonStorageManagerCoursesStoragePage {
        constructor() {
            this.userCourses = [];
            this.downloadedCourses = [];
            this.completelyDownloadedCourses = [];
            this.totalSize = 0;
            this.loaded = false;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.userCourses = yield courses["a" /* CoreCourses */].getUserCourses();
                this.courseStatusObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].COURSE_STATUS_CHANGED, ({ courseId, status }) => this.onCourseUpdated(courseId, status));
                const downloadedCourseIds = yield services_course["a" /* CoreCourse */].getDownloadedCourseIds();
                const downloadedCourses = yield Promise.all(this.userCourses
                    .filter((course) => downloadedCourseIds.indexOf(course.id) !== -1)
                    .map((course) => this.getDownloadedCourse(course)));
                this.setDownloadedCourses(downloadedCourses);
                this.loaded = true;
            });
        }
        /**
         * Component destroyed.
         */
        ngOnDestroy() {
            var _a;
            (_a = this.courseStatusObserver) === null || _a === void 0 ? void 0 : _a.off();
        }
        /**
         * Delete all courses that have been downloaded.
         */
        deleteCompletelyDownloadedCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.course.confirmdeletestoreddata');
                }
                catch (error) {
                    if (!dom["a" /* CoreDomUtils */].isCanceledError(error)) {
                        throw error;
                    }
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                const deletedCourseIds = this.completelyDownloadedCourses.map((course) => course.id);
                try {
                    yield Promise.all(deletedCourseIds.map((courseId) => course_helper["a" /* CoreCourseHelper */].deleteCourseFiles(courseId)));
                    this.setDownloadedCourses(this.downloadedCourses.filter((course) => !array["a" /* CoreArray */].contains(deletedCourseIds, course.id)));
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, singletons["L" /* Translate */].instant('core.errordeletefile'));
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Delete course.
         *
         * @param course Course to delete.
         */
        deleteCourse(course) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.course.confirmdeletestoreddata');
                }
                catch (error) {
                    if (!dom["a" /* CoreDomUtils */].isCanceledError(error)) {
                        throw error;
                    }
                    return;
                }
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                try {
                    yield course_helper["a" /* CoreCourseHelper */].deleteCourseFiles(course.id);
                    this.setDownloadedCourses(array["a" /* CoreArray */].withoutItem(this.downloadedCourses, course));
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, singletons["L" /* Translate */].instant('core.errordeletefile'));
                }
                finally {
                    modal.dismiss();
                }
            });
        }
        /**
         * Handle course updated event.
         *
         * @param courseId Updated course id.
         */
        onCourseUpdated(courseId, status) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (courseId == services_course["b" /* CoreCourseProvider */].ALL_COURSES_CLEARED) {
                    this.setDownloadedCourses([]);
                    return;
                }
                const course = this.downloadedCourses.find((course) => course.id === courseId);
                if (!course) {
                    return;
                }
                course.isDownloading = status === constants["a" /* CoreConstants */].DOWNLOADING;
                course.totalSize = yield this.calculateDownloadedCourseSize(course.id);
                this.setDownloadedCourses(this.downloadedCourses);
            });
        }
        /**
         * Set downloaded courses data.
         *
         * @param courses Courses info.
         */
        setDownloadedCourses(courses) {
            this.downloadedCourses = courses.sort((a, b) => b.totalSize - a.totalSize);
            this.completelyDownloadedCourses = courses.filter((course) => !course.isDownloading);
            this.totalSize = this.downloadedCourses.reduce((totalSize, course) => totalSize + course.totalSize, 0);
        }
        /**
         * Get downloaded course data.
         *
         * @param course Course.
         * @return Course info.
         */
        getDownloadedCourse(course) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const totalSize = yield this.calculateDownloadedCourseSize(course.id);
                const status = yield services_course["a" /* CoreCourse */].getCourseStatus(course.id);
                return Object.assign(Object.assign({}, course), { totalSize, isDownloading: status === constants["a" /* CoreConstants */].DOWNLOADING });
            });
        }
        /**
         * Calculate the size of a downloaded course.
         *
         * @param courseId Downloaded course id.
         * @return Promise to be resolved with the course size.
         */
        calculateDownloadedCourseSize(courseId) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const sections = yield services_course["a" /* CoreCourse */].getSections(courseId);
                const modules = array["a" /* CoreArray */].flatten(sections.map((section) => section.modules));
                const promisedModuleSizes = modules.map((module) => Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                    const size = yield module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */].getModuleStoredSize(module, courseId);
                    return isNaN(size) ? 0 : size;
                }));
                const moduleSizes = yield Promise.all(promisedModuleSizes);
                return moduleSizes.reduce((totalSize, moduleSize) => totalSize + moduleSize, 0);
            });
        }
    }
    AddonStorageManagerCoursesStoragePage.ɵfac = function AddonStorageManagerCoursesStoragePage_Factory(t) { return new (t || AddonStorageManagerCoursesStoragePage)(); };
    AddonStorageManagerCoursesStoragePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonStorageManagerCoursesStoragePage, selectors: [["page-addon-storagemanager-courses-storage"]], decls: 34, vars: 24, consts: [["slot", "start"], [3, "text"], [3, "hideUntil"], [1, "ion-text-wrap"], ["lines", "none", 1, "size", "ion-text-wrap", "ion-no-padding"], ["name", "fas-archive", "slot", "start", "aria-hidden", "true"], ["slot", "end", 1, "ion-text-end"], ["slot", "end", 3, "disabled", "click"], ["name", "fas-trash", "slot", "icon-only", 3, "ariaLabel"], [1, "ion-no-padding"], ["class", "course", 4, "ngFor", "ngForOf"], [1, "course"], ["class", "item-heading", 4, "ngIf"], ["class", "item-heading item-heading-secondary", 4, "ngIf"], ["name", "fas-trash", "slot", "icon-only"], [1, "item-heading"], [1, "item-heading", "item-heading-secondary"]], template: function AddonStorageManagerCoursesStoragePage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 2);
                core["Ec" /* ɵɵelementStart */](10, "ion-card");
                core["Ec" /* ɵɵelementStart */](11, "ion-card-header");
                core["Ec" /* ɵɵelementStart */](12, "ion-card-title", 3);
                core["pd" /* ɵɵtext */](13);
                core["Pc" /* ɵɵpipe */](14, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](15, "p", 3);
                core["pd" /* ɵɵtext */](16);
                core["Pc" /* ɵɵpipe */](17, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "ion-item", 4);
                core["zc" /* ɵɵelement */](19, "ion-icon", 5);
                core["Ec" /* ɵɵelementStart */](20, "ion-label");
                core["Ec" /* ɵɵelementStart */](21, "h2", 3);
                core["pd" /* ɵɵtext */](22);
                core["Pc" /* ɵɵpipe */](23, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](24, "p", 6);
                core["pd" /* ɵɵtext */](25);
                core["Pc" /* ɵɵpipe */](26, "coreBytesToSize");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](27, "ion-button", 7);
                core["Mc" /* ɵɵlistener */]("click", function AddonStorageManagerCoursesStoragePage_Template_ion_button_click_27_listener() { return ctx.deleteCompletelyDownloadedCourses(); });
                core["zc" /* ɵɵelement */](28, "ion-icon", 8);
                core["Pc" /* ɵɵpipe */](29, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](30, "ion-card");
                core["Ec" /* ɵɵelementStart */](31, "ion-card-content", 9);
                core["Ec" /* ɵɵelementStart */](32, "ion-list");
                core["nd" /* ɵɵtemplate */](33, AddonStorageManagerCoursesStoragePage_ion_item_33_Template, 11, 13, "ion-item", 10);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 10, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 12, "addon.storagemanager.managestorage"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](4);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](14, 14, "core.courses.courses"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](17, 16, "addon.storagemanager.info"));
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](23, 18, "addon.storagemanager.storageused"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](26, 20, ctx.totalSize));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", ctx.completelyDownloadedCourses.length === 0);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("ariaLabel", core["Qc" /* ɵɵpipeBind1 */](29, 22, "addon.storagemanager.deletecourses"));
                core["lc" /* ɵɵadvance */](5);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.downloadedCourses);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["o" /* IonCardHeader */], ionic_angular["q" /* IonCardTitle */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["k" /* IonButton */], ionic_angular["n" /* IonCardContent */], ionic_angular["O" /* IonList */], common["s" /* NgForOf */], common["t" /* NgIf */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], bytes_to_size["a" /* CoreBytesToSizePipe */]], styles: ["[_nghost-%COMP%]   ion-item.course[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{font-weight:700}"] });
    return AddonStorageManagerCoursesStoragePage;
})();

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// CONCATENATED MODULE: ./src/addons/storagemanager/pages/course-storage/course-storage.ts

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















function AddonStorageManagerCourseStoragePage_ion_card_title_12_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card-title");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r0 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r0.course.displayname);
    }
}
function AddonStorageManagerCourseStoragePage_ion_card_title_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-card-title");
        core["pd" /* ɵɵtext */](1);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](ctx_r1.course.fullname);
    }
}
function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_ion_item_1_img_1_Template(rf, ctx) {
    if (rf & 1) {
        core["zc" /* ɵɵelement */](0, "img", 20);
    }
    if (rf & 2) {
        const module_r6 = core["Oc" /* ɵɵnextContext */](2).$implicit;
        core["Vc" /* ɵɵproperty */]("src", module_r6.handlerData.icon, core["jd" /* ɵɵsanitizeUrl */])("alt", module_r6.modNameTranslated);
    }
}
const course_storage_c0 = function (a0) { return { name: a0 }; };
function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_ion_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-item", 15);
        core["nd" /* ɵɵtemplate */](1, AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_ion_item_1_img_1_Template, 1, 2, "img", 18);
        core["Ec" /* ɵɵelementStart */](2, "ion-label", 5);
        core["Ec" /* ɵɵelementStart */](3, "h3");
        core["pd" /* ɵɵtext */](4);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](5, "p", 9);
        core["pd" /* ɵɵtext */](6);
        core["Pc" /* ɵɵpipe */](7, "coreBytesToSize");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](8, "ion-button", 19);
        core["Mc" /* ɵɵlistener */]("click", function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_ion_item_1_Template_ion_button_click_8_listener() { core["gd" /* ɵɵrestoreView */](_r12); const module_r6 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r10 = core["Oc" /* ɵɵnextContext */](3); return ctx_r10.deleteForModule(module_r6); });
        core["zc" /* ɵɵelement */](9, "ion-icon", 11);
        core["Pc" /* ɵɵpipe */](10, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const module_r6 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", module_r6.handlerData.icon);
        core["lc" /* ɵɵadvance */](2);
        core["oc" /* ɵɵclassMapInterpolate1 */]("", module_r6.handlerData.class, " addon-storagemanager-module-size");
        core["lc" /* ɵɵadvance */](1);
        core["rd" /* ɵɵtextInterpolate1 */](" ", module_r6.name, " ");
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 7, module_r6.totalSize));
        core["lc" /* ɵɵadvance */](3);
        core["mc" /* ɵɵattribute */]("aria-label", core["Rc" /* ɵɵpipeBind2 */](10, 9, "addon.storagemanager.deletedatafrom", core["ad" /* ɵɵpureFunction1 */](12, course_storage_c0, module_r6.name)));
    }
}
function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_ion_item_1_Template, 11, 14, "ion-item", 17);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const module_r6 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", module_r6.totalSize > 0);
    }
}
function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-card", 14);
        core["Ec" /* ɵɵelementStart */](1, "ion-card-header");
        core["Ec" /* ɵɵelementStart */](2, "ion-item", 15);
        core["Ec" /* ɵɵelementStart */](3, "ion-label");
        core["Ec" /* ɵɵelementStart */](4, "p", 8);
        core["pd" /* ɵɵtext */](5);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](6, "p", 9);
        core["pd" /* ɵɵtext */](7);
        core["Pc" /* ɵɵpipe */](8, "coreBytesToSize");
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](9, "ion-button", 16);
        core["Mc" /* ɵɵlistener */]("click", function AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_Template_ion_button_click_9_listener() { core["gd" /* ɵɵrestoreView */](_r16); const section_r3 = core["Oc" /* ɵɵnextContext */]().$implicit; const ctx_r14 = core["Oc" /* ɵɵnextContext */](); return ctx_r14.deleteForSection(section_r3); });
        core["zc" /* ɵɵelement */](10, "ion-icon", 11);
        core["Pc" /* ɵɵpipe */](11, "translate");
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
        core["Ec" /* ɵɵelementStart */](12, "ion-card-content");
        core["nd" /* ɵɵtemplate */](13, AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_ng_container_13_Template, 2, 1, "ng-container", 12);
        core["Dc" /* ɵɵelementEnd */]();
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const section_r3 = core["Oc" /* ɵɵnextContext */]().$implicit;
        core["lc" /* ɵɵadvance */](5);
        core["qd" /* ɵɵtextInterpolate */](section_r3.name);
        core["lc" /* ɵɵadvance */](2);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](8, 4, section_r3.totalSize));
        core["lc" /* ɵɵadvance */](3);
        core["mc" /* ɵɵattribute */]("aria-label", core["Rc" /* ɵɵpipeBind2 */](11, 6, "addon.storagemanager.deletedatafrom", core["ad" /* ɵɵpureFunction1 */](9, course_storage_c0, section_r3.name)));
        core["lc" /* ɵɵadvance */](3);
        core["Vc" /* ɵɵproperty */]("ngForOf", section_r3.modules);
    }
}
function AddonStorageManagerCourseStoragePage_ng_container_29_Template(rf, ctx) {
    if (rf & 1) {
        core["Cc" /* ɵɵelementContainerStart */](0);
        core["nd" /* ɵɵtemplate */](1, AddonStorageManagerCourseStoragePage_ng_container_29_ion_card_1_Template, 14, 11, "ion-card", 13);
        core["Bc" /* ɵɵelementContainerEnd */]();
    }
    if (rf & 2) {
        const section_r3 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("ngIf", section_r3.totalSize > 0);
    }
}
/**
 * Page that displays the amount of file storage used by each activity on the course, and allows
 * the user to delete these files.
 */
let course_storage_AddonStorageManagerCourseStoragePage = /*@__PURE__*/ (() => {
    class AddonStorageManagerCourseStoragePage {
        constructor() {
            this.loaded = false;
            this.sections = [];
            this.totalSize = 0;
        }
        /**
         * View loaded.
         */
        ngOnInit() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.course = services_navigator["a" /* CoreNavigator */].getRouteParam('course');
                this.sections = yield services_course["a" /* CoreCourse */].getSections(this.course.id, false, true);
                course_helper["a" /* CoreCourseHelper */].addHandlerDataForModules(this.sections, this.course.id);
                this.totalSize = 0;
                const promises = [];
                this.sections.forEach((section) => {
                    section.totalSize = 0;
                    section.modules.forEach((module) => {
                        module.parentSection = section;
                        module.totalSize = 0;
                        module.modNameTranslated = services_course["a" /* CoreCourse */].translateModuleName(module.modname) || '';
                        // Note: This function only gets the size for modules which are downloadable.
                        // For other modules it always returns 0, even if they have downloaded some files.
                        // However there is no 100% reliable way to actually track the files in this case.
                        // You can maybe guess it based on the component and componentid.
                        // But these aren't necessarily consistent, for example mod_frog vs mmaModFrog.
                        // There is nothing enforcing correct values.
                        // Most modules which have large files are downloadable, so I think this is sufficient.
                        const promise = module_prefetch_delegate["a" /* CoreCourseModulePrefetchDelegate */].getModuleStoredSize(module, this.course.id).then((size) => {
                            // There are some cases where the return from this is not a valid number.
                            if (!isNaN(size)) {
                                module.totalSize = Number(size);
                                section.totalSize += size;
                                this.totalSize += size;
                            }
                            return;
                        });
                        promises.push(promise);
                    });
                });
                yield Promise.all(promises);
                this.loaded = true;
                if (this.totalSize == 0) {
                    this.markCourseAsNotDownloaded();
                }
            });
        }
        /**
         * The user has requested a delete for the whole course data.
         *
         * (This works by deleting data for each module on the course that has data.)
         */
        deleteForCourse() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.course.confirmdeletestoreddata');
                }
                catch (error) {
                    if (!dom["a" /* CoreDomUtils */].isCanceledError(error)) {
                        throw error;
                    }
                    return;
                }
                const modules = [];
                this.sections.forEach((section) => {
                    section.modules.forEach((module) => {
                        if (module.totalSize && module.totalSize > 0) {
                            modules.push(module);
                        }
                    });
                });
                this.deleteModules(modules);
            });
        }
        /**
         * The user has requested a delete for a section's data.
         *
         * (This works by deleting data for each module in the section that has data.)
         *
         * @param section Section object with information about section and modules
         */
        deleteForSection(section) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.course.confirmdeletestoreddata');
                }
                catch (error) {
                    if (!dom["a" /* CoreDomUtils */].isCanceledError(error)) {
                        throw error;
                    }
                    return;
                }
                const modules = [];
                section.modules.forEach((module) => {
                    if (module.totalSize && module.totalSize > 0) {
                        modules.push(module);
                    }
                });
                this.deleteModules(modules);
            });
        }
        /**
         * The user has requested a delete for a module's data
         *
         * @param module Module details
         */
        deleteForModule(module) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                if (module.totalSize === 0) {
                    return;
                }
                try {
                    yield dom["a" /* CoreDomUtils */].showDeleteConfirm('core.course.confirmdeletestoreddata');
                }
                catch (error) {
                    if (!dom["a" /* CoreDomUtils */].isCanceledError(error)) {
                        throw error;
                    }
                    return;
                }
                this.deleteModules([module]);
            });
        }
        /**
         * Deletes the specified modules, showing the loading overlay while it happens.
         *
         * @param modules Modules to delete
         * @return Promise<void> Once deleting has finished
         */
        deleteModules(modules) {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                const modal = yield dom["a" /* CoreDomUtils */].showModalLoading();
                const promises = [];
                modules.forEach((module) => {
                    // Remove the files.
                    const promise = course_helper["a" /* CoreCourseHelper */].removeModuleStoredData(module, this.course.id).then(() => {
                        // When the files and cache are removed, update the size.
                        module.parentSection.totalSize -= module.totalSize;
                        this.totalSize -= module.totalSize;
                        module.totalSize = 0;
                        return;
                    });
                    promises.push(promise);
                });
                try {
                    yield Promise.all(promises);
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, singletons["L" /* Translate */].instant('core.errordeletefile'));
                }
                finally {
                    modal.dismiss();
                    // @TODO This is a workaround that should be more specific solving MOBILE-3305.
                    // Also should take into account all modules are not downloaded.
                    // Mark course as not downloaded if course size is 0.
                    if (this.totalSize == 0) {
                        this.markCourseAsNotDownloaded();
                    }
                }
            });
        }
        /**
         * Mark course as not downloaded.
         */
        markCourseAsNotDownloaded() {
            // @TODO This is a workaround that should be more specific solving MOBILE-3305.
            // Also should take into account all modules are not downloaded.
            // Check after MOBILE-3188 is integrated.
            services_course["a" /* CoreCourse */].setCourseStatus(this.course.id, constants["a" /* CoreConstants */].NOT_DOWNLOADED);
        }
    }
    AddonStorageManagerCourseStoragePage.ɵfac = function AddonStorageManagerCourseStoragePage_Factory(t) { return new (t || AddonStorageManagerCourseStoragePage)(); };
    AddonStorageManagerCourseStoragePage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: AddonStorageManagerCourseStoragePage, selectors: [["page-addon-storagemanager-course-storage"]], decls: 30, vars: 23, consts: [["slot", "start"], [3, "text"], [3, "hideUntil"], [1, "wholecourse"], [4, "ngIf"], [1, "ion-text-wrap"], ["lines", "none", 1, "size", "ion-text-wrap", "ion-no-padding"], ["name", "fas-archive", "slot", "start", "aria-hidden", "true"], [1, "item-heading", "ion-text-wrap"], ["slot", "end", 1, "ion-text-end"], ["slot", "end", 3, "disabled", "click"], ["name", "fas-trash", "slot", "icon-only"], [4, "ngFor", "ngForOf"], ["class", "section", 4, "ngIf"], [1, "section"], [1, "ion-no-padding"], ["slot", "end", 3, "click"], ["class", "ion-no-padding", 4, "ngIf"], ["class", "core-module-icon", "slot", "start", 3, "src", "alt", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click"], ["slot", "start", 1, "core-module-icon", 3, "src", "alt"]], template: function AddonStorageManagerCourseStoragePage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](9, "core-loading", 2);
                core["Ec" /* ɵɵelementStart */](10, "ion-card", 3);
                core["Ec" /* ɵɵelementStart */](11, "ion-card-header");
                core["nd" /* ɵɵtemplate */](12, AddonStorageManagerCourseStoragePage_ion_card_title_12_Template, 2, 1, "ion-card-title", 4);
                core["nd" /* ɵɵtemplate */](13, AddonStorageManagerCourseStoragePage_ion_card_title_13_Template, 2, 1, "ion-card-title", 4);
                core["Ec" /* ɵɵelementStart */](14, "p", 5);
                core["pd" /* ɵɵtext */](15);
                core["Pc" /* ɵɵpipe */](16, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](17, "ion-item", 6);
                core["zc" /* ɵɵelement */](18, "ion-icon", 7);
                core["Ec" /* ɵɵelementStart */](19, "ion-label");
                core["Ec" /* ɵɵelementStart */](20, "p", 8);
                core["pd" /* ɵɵtext */](21);
                core["Pc" /* ɵɵpipe */](22, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](23, "p", 9);
                core["pd" /* ɵɵtext */](24);
                core["Pc" /* ɵɵpipe */](25, "coreBytesToSize");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](26, "ion-button", 10);
                core["Mc" /* ɵɵlistener */]("click", function AddonStorageManagerCourseStoragePage_Template_ion_button_click_26_listener() { return ctx.deleteForCourse(); });
                core["zc" /* ɵɵelement */](27, "ion-icon", 11);
                core["Pc" /* ɵɵpipe */](28, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](29, AddonStorageManagerCourseStoragePage_ng_container_29_Template, 2, 1, "ng-container", 12);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 11, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 13, "addon.storagemanager.managestorage"));
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.loaded);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.course.displayname);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.course.displayname);
                core["lc" /* ɵɵadvance */](2);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](16, 15, "addon.storagemanager.info"));
                core["lc" /* ɵɵadvance */](6);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](22, 17, "addon.storagemanager.storageused"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](25, 19, ctx.totalSize));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", ctx.totalSize == 0);
                core["lc" /* ɵɵadvance */](1);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](28, 21, "addon.storagemanager.deletecourse"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.sections);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], ionic_angular["u" /* IonContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["m" /* IonCard */], ionic_angular["o" /* IonCardHeader */], common["t" /* NgIf */], ionic_angular["H" /* IonItem */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["N" /* IonLabel */], ionic_angular["k" /* IonButton */], common["s" /* NgForOf */], ionic_angular["q" /* IonCardTitle */], ionic_angular["n" /* IonCardContent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */], bytes_to_size["a" /* CoreBytesToSizePipe */]], styles: ["[_nghost-%COMP%]   ion-card.section[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{margin-bottom:8px;padding-top:8px;padding-bottom:8px}[_nghost-%COMP%]   ion-card.section[_ngcontent-%COMP%]   .item-heading[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem}"] });
    return AddonStorageManagerCourseStoragePage;
})();

// CONCATENATED MODULE: ./src/addons/storagemanager/storagemanager-lazy.module.ts
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
        path: 'storage',
        component: courses_storage_AddonStorageManagerCoursesStoragePage,
    },
    {
        path: 'storage/:courseId',
        component: course_storage_AddonStorageManagerCourseStoragePage,
    },
];
let storagemanager_lazy_module_AddonStorageManagerLazyModule = /*@__PURE__*/ (() => {
    class AddonStorageManagerLazyModule {
    }
    AddonStorageManagerLazyModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: AddonStorageManagerLazyModule });
    AddonStorageManagerLazyModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function AddonStorageManagerLazyModule_Factory(t) { return new (t || AddonStorageManagerLazyModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
            ], router["m" /* RouterModule */]] });
    return AddonStorageManagerLazyModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](storagemanager_lazy_module_AddonStorageManagerLazyModule, { declarations: [courses_storage_AddonStorageManagerCoursesStoragePage,
            course_storage_AddonStorageManagerCourseStoragePage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);