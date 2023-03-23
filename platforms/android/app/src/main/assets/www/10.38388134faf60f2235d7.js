(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "/pOg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CoreCoursesMyCoursesPageModule", function() { return /* binding */ my_courses_module_CoreCoursesMyCoursesPageModule; });

// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 14 modules
var router = __webpack_require__("tyNb");

// EXTERNAL MODULE: ./src/core/shared.module.ts + 3 modules
var shared_module = __webpack_require__("L3Fv");

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("mrSG");

// EXTERNAL MODULE: ./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js + 5 modules
var ionic_angular = __webpack_require__("TEn/");

// EXTERNAL MODULE: ./src/core/singletons/events.ts
var events = __webpack_require__("fjkH");

// EXTERNAL MODULE: ./src/core/services/sites.ts
var sites = __webpack_require__("9+EE");

// EXTERNAL MODULE: ./src/core/services/utils/dom.ts + 2 modules
var dom = __webpack_require__("3LXp");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses.ts
var services_courses = __webpack_require__("Xzvb");

// EXTERNAL MODULE: ./src/core/features/courses/services/courses-helper.ts
var courses_helper = __webpack_require__("ZSwf");

// EXTERNAL MODULE: ./src/core/features/course/services/course-helper.ts
var course_helper = __webpack_require__("GBcW");

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__("BaYo");

// EXTERNAL MODULE: ./src/core/features/course/services/course-options-delegate.ts
var course_options_delegate = __webpack_require__("nxay");

// EXTERNAL MODULE: ./src/core/services/navigator.ts
var services_navigator = __webpack_require__("pHTc");

// EXTERNAL MODULE: ./src/core/singletons/index.ts
var singletons = __webpack_require__("j3ag");

// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 4 modules
var core = __webpack_require__("fXoL");

// EXTERNAL MODULE: ./src/core/components/navbar-buttons/navbar-buttons.ts
var navbar_buttons = __webpack_require__("ACV2");

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__("ofXK");

// EXTERNAL MODULE: ./src/core/directives/fa-icon.ts
var fa_icon = __webpack_require__("3CSS");

// EXTERNAL MODULE: ./src/core/components/loading/loading.ts
var loading = __webpack_require__("PgjG");

// EXTERNAL MODULE: ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js
var fesm2015_forms = __webpack_require__("3Pt+");

// EXTERNAL MODULE: ./src/core/features/courses/components/course-progress/course-progress.ts
var course_progress = __webpack_require__("81gp");

// EXTERNAL MODULE: ./src/core/components/empty-box/empty-box.ts
var empty_box = __webpack_require__("r8G5");

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js + 8 modules
var ngx_translate_core = __webpack_require__("sYmb");

// CONCATENATED MODULE: ./src/core/features/courses/pages/my-courses/my-courses.ts

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






















function CoreCoursesMyCoursesPage_ion_button_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-button", 16);
        core["Mc" /* ɵɵlistener */]("click", function CoreCoursesMyCoursesPage_ion_button_10_Template_ion_button_click_0_listener() { core["gd" /* ɵɵrestoreView */](_r5); const ctx_r4 = core["Oc" /* ɵɵnextContext */](); return ctx_r4.openSearch(); });
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["zc" /* ɵɵelement */](2, "ion-icon", 17);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](1, 1, "core.courses.searchcourses"));
    }
}
function CoreCoursesMyCoursesPage_ion_searchbar_23_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = core["Fc" /* ɵɵgetCurrentView */]();
        core["Ec" /* ɵɵelementStart */](0, "ion-searchbar", 18, 19);
        core["Mc" /* ɵɵlistener */]("ngModelChange", function CoreCoursesMyCoursesPage_ion_searchbar_23_Template_ion_searchbar_ngModelChange_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r7 = core["Oc" /* ɵɵnextContext */](); return ctx_r7.filter = $event; })("ionInput", function CoreCoursesMyCoursesPage_ion_searchbar_23_Template_ion_searchbar_ionInput_0_listener($event) { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r9 = core["Oc" /* ɵɵnextContext */](); return ctx_r9.filterChanged($event); })("ionCancel", function CoreCoursesMyCoursesPage_ion_searchbar_23_Template_ion_searchbar_ionCancel_0_listener() { core["gd" /* ɵɵrestoreView */](_r8); const ctx_r10 = core["Oc" /* ɵɵnextContext */](); return ctx_r10.filterChanged(); });
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r1 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("ngModel", ctx_r1.filter)("placeholder", core["Qc" /* ɵɵpipeBind1 */](2, 2, "core.courses.filtermycourses"));
    }
}
function CoreCoursesMyCoursesPage_ion_col_26_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "ion-col", 20);
        core["zc" /* ɵɵelement */](1, "core-courses-course-progress", 21);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const course_r11 = ctx.$implicit;
        core["lc" /* ɵɵadvance */](1);
        core["Vc" /* ɵɵproperty */]("course", course_r11);
    }
}
function CoreCoursesMyCoursesPage_core_empty_box_27_p_2_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "p");
        core["pd" /* ɵɵtext */](1);
        core["Pc" /* ɵɵpipe */](2, "translate");
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        core["lc" /* ɵɵadvance */](1);
        core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](2, 1, "core.courses.searchcoursesadvice"));
    }
}
function CoreCoursesMyCoursesPage_core_empty_box_27_Template(rf, ctx) {
    if (rf & 1) {
        core["Ec" /* ɵɵelementStart */](0, "core-empty-box", 22);
        core["Pc" /* ɵɵpipe */](1, "translate");
        core["nd" /* ɵɵtemplate */](2, CoreCoursesMyCoursesPage_core_empty_box_27_p_2_Template, 3, 3, "p", 23);
        core["Dc" /* ɵɵelementEnd */]();
    }
    if (rf & 2) {
        const ctx_r3 = core["Oc" /* ɵɵnextContext */]();
        core["Vc" /* ɵɵproperty */]("message", core["Qc" /* ɵɵpipeBind1 */](1, 2, "core.courses.nocourses"));
        core["lc" /* ɵɵadvance */](2);
        core["Vc" /* ɵɵproperty */]("ngIf", ctx_r3.searchEnabled);
    }
}
/**
 * Page that displays the list of courses the user is enrolled in.
 */
let my_courses_CoreCoursesMyCoursesPage = /*@__PURE__*/ (() => {
    class CoreCoursesMyCoursesPage {
        constructor() {
            this.courses = [];
            this.filteredCourses = [];
            this.searchEnabled = false;
            this.filter = '';
            this.showFilter = false;
            this.coursesLoaded = false;
            this.downloadAllCoursesIcon = constants["a" /* CoreConstants */].ICON_NOT_DOWNLOADED;
            this.downloadAllCoursesLoading = false;
            this.downloadAllCoursesBadge = '';
            this.downloadAllCoursesEnabled = false;
            this.downloadAllCoursesBadgeA11yText = '';
            this.isDestroyed = false;
            this.courseIds = '';
            // Update list if user enrols in a course.
            this.myCoursesObserver = events["b" /* CoreEvents */].on(services_courses["b" /* CoreCoursesProvider */].EVENT_MY_COURSES_UPDATED, (data) => {
                if (data.action == services_courses["b" /* CoreCoursesProvider */].ACTION_ENROL) {
                    this.fetchCourses();
                }
            }, sites["b" /* CoreSites */].getCurrentSiteId());
            // Refresh the enabled flags if site is updated.
            this.siteUpdatedObserver = events["b" /* CoreEvents */].on(events["b" /* CoreEvents */].SITE_UPDATED, () => {
                this.searchEnabled = !services_courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
                this.downloadAllCoursesEnabled = !services_courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
            }, sites["b" /* CoreSites */].getCurrentSiteId());
        }
        /**
         * Component being initialized.
         */
        ngOnInit() {
            this.searchEnabled = !services_courses["a" /* CoreCourses */].isSearchCoursesDisabledInSite();
            this.downloadAllCoursesEnabled = !services_courses["a" /* CoreCourses */].isDownloadCoursesDisabledInSite();
            this.fetchCourses().finally(() => {
                this.coursesLoaded = true;
            });
        }
        /**
         * Fetch the user courses.
         *
         * @return Promise resolved when done.
         */
        fetchCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                try {
                    const courses = yield services_courses["a" /* CoreCourses */].getUserCourses();
                    const courseIds = courses.map((course) => course.id);
                    this.courseIds = courseIds.join(',');
                    yield courses_helper["a" /* CoreCoursesHelper */].loadCoursesExtraInfo(courses);
                    if (services_courses["a" /* CoreCourses */].canGetAdminAndNavOptions()) {
                        const options = yield services_courses["a" /* CoreCourses */].getCoursesAdminAndNavOptions(courseIds);
                        courses.forEach((course) => {
                            course.navOptions = options.navOptions[course.id];
                            course.admOptions = options.admOptions[course.id];
                        });
                    }
                    this.courses = courses;
                    this.filteredCourses = this.courses;
                    this.filter = '';
                }
                catch (error) {
                    dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                }
            });
        }
        /**
         * Refresh the courses.
         *
         * @param refresher Refresher.
         */
        refreshCourses(refresher) {
            const promises = [];
            promises.push(services_courses["a" /* CoreCourses */].invalidateUserCourses());
            promises.push(course_options_delegate["a" /* CoreCourseOptionsDelegate */].clearAndInvalidateCoursesOptions());
            if (this.courseIds) {
                promises.push(services_courses["a" /* CoreCourses */].invalidateCoursesByField('ids', this.courseIds));
            }
            Promise.all(promises).finally(() => {
                this.fetchCourses().finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                });
            });
        }
        /**
         * Show or hide the filter.
         */
        switchFilter() {
            this.filter = '';
            this.showFilter = !this.showFilter;
            this.filteredCourses = this.courses;
            if (this.showFilter) {
                setTimeout(() => {
                    this.searchbar.setFocus();
                }, 500);
            }
        }
        /**
         * The filter has changed.
         *
         * @param Received Event.
         */
        filterChanged(event) {
            const target = (event === null || event === void 0 ? void 0 : event.target) || null;
            const newValue = target ? String(target.value).trim().toLowerCase() : null;
            if (!newValue || !this.courses) {
                this.filteredCourses = this.courses;
            }
            else {
                // Use displayname if available, or fullname if not.
                if (this.courses.length > 0 && typeof this.courses[0].displayname != 'undefined') {
                    this.filteredCourses = this.courses.filter((course) => course.displayname.toLowerCase().indexOf(newValue) > -1);
                }
                else {
                    this.filteredCourses = this.courses.filter((course) => course.fullname.toLowerCase().indexOf(newValue) > -1);
                }
            }
        }
        /**
         * Prefetch all the courses.
         *
         * @return Promise resolved when done.
         */
        prefetchCourses() {
            return Object(tslib_es6["a" /* __awaiter */])(this, void 0, void 0, function* () {
                this.downloadAllCoursesLoading = true;
                try {
                    yield course_helper["a" /* CoreCourseHelper */].confirmAndPrefetchCourses(this.courses, (progress) => {
                        this.downloadAllCoursesBadge = progress.count + ' / ' + progress.total;
                        this.downloadAllCoursesBadgeA11yText =
                            singletons["L" /* Translate */].instant('core.course.downloadcoursesprogressdescription', progress);
                        this.downloadAllCoursesCount = progress.count;
                        this.downloadAllCoursesTotal = progress.total;
                    });
                }
                catch (error) {
                    if (!this.isDestroyed) {
                        dom["a" /* CoreDomUtils */].showErrorModalDefault(error, 'core.course.errordownloadingcourse', true);
                    }
                }
                this.downloadAllCoursesBadge = '';
                this.downloadAllCoursesLoading = false;
            });
        }
        /**
         * Go to search courses.
         */
        openSearch() {
            services_navigator["a" /* CoreNavigator */].navigateToSitePath('courses/search');
        }
        /**
         * Page destroyed.
         */
        ngOnDestroy() {
            var _a, _b;
            this.isDestroyed = true;
            (_a = this.myCoursesObserver) === null || _a === void 0 ? void 0 : _a.off();
            (_b = this.siteUpdatedObserver) === null || _b === void 0 ? void 0 : _b.off();
        }
    }
    CoreCoursesMyCoursesPage.ɵfac = function CoreCoursesMyCoursesPage_Factory(t) { return new (t || CoreCoursesMyCoursesPage)(); };
    CoreCoursesMyCoursesPage.ɵcmp = core["sc" /* ɵɵdefineComponent */]({ type: CoreCoursesMyCoursesPage, selectors: [["page-core-courses-my-courses"]], viewQuery: function CoreCoursesMyCoursesPage_Query(rf, ctx) {
            if (rf & 1) {
                core["ud" /* ɵɵviewQuery */](ionic_angular["hb" /* IonSearchbar */], true);
            }
            if (rf & 2) {
                var _t;
                core["ed" /* ɵɵqueryRefresh */](_t = core["Nc" /* ɵɵloadQuery */]()) && (ctx.searchbar = _t.first);
            }
        }, decls: 28, vars: 29, consts: [["slot", "start"], [3, "text"], ["slot", "end"], [3, "click", 4, "ngIf"], [3, "hidden", "click"], ["slot", "icon-only", "aria-hidden", "true", 3, "name"], [3, "hidden"], ["role", "progressbar", 3, "hidden"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [3, "hideUntil"], [3, "ngModel", "placeholder", "ngModelChange", "ionInput", "ionCancel", 4, "ngIf"], [1, "ion-no-padding", "safe-area-page"], [1, "ion-no-padding"], ["class", "ion-no-padding", "size", "12", "size-sm", "6", "size-md", "6", "size-lg", "4", "size-xl", "4", 4, "ngFor", "ngForOf"], ["icon", "fas-graduation-cap", 3, "message", 4, "ngIf"], [3, "click"], ["name", "fas-search", "slot", "icon-only", "aria-hidden", "true"], [3, "ngModel", "placeholder", "ngModelChange", "ionInput", "ionCancel"], ["searchbar", ""], ["size", "12", "size-sm", "6", "size-md", "6", "size-lg", "4", "size-xl", "4", 1, "ion-no-padding"], ["showAll", "true", 1, "core-courseoverview", 3, "course"], ["icon", "fas-graduation-cap", 3, "message"], [4, "ngIf"]], template: function CoreCoursesMyCoursesPage_Template(rf, ctx) {
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
                core["Ec" /* ɵɵelementStart */](8, "ion-buttons", 2);
                core["Ec" /* ɵɵelementStart */](9, "core-navbar-buttons");
                core["nd" /* ɵɵtemplate */](10, CoreCoursesMyCoursesPage_ion_button_10_Template, 3, 3, "ion-button", 3);
                core["Ec" /* ɵɵelementStart */](11, "ion-button", 4);
                core["Mc" /* ɵɵlistener */]("click", function CoreCoursesMyCoursesPage_Template_ion_button_click_11_listener() { return ctx.prefetchCourses(); });
                core["Pc" /* ɵɵpipe */](12, "translate");
                core["zc" /* ɵɵelement */](13, "ion-icon", 5);
                core["Dc" /* ɵɵelementEnd */]();
                core["zc" /* ɵɵelement */](14, "ion-spinner", 6);
                core["Pc" /* ɵɵpipe */](15, "translate");
                core["Ec" /* ɵɵelementStart */](16, "ion-badge", 7);
                core["pd" /* ɵɵtext */](17);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](18, "ion-content");
                core["Ec" /* ɵɵelementStart */](19, "ion-refresher", 8);
                core["Mc" /* ɵɵlistener */]("ionRefresh", function CoreCoursesMyCoursesPage_Template_ion_refresher_ionRefresh_19_listener($event) { return ctx.refreshCourses($event.target); });
                core["zc" /* ɵɵelement */](20, "ion-refresher-content", 9);
                core["Pc" /* ɵɵpipe */](21, "translate");
                core["Dc" /* ɵɵelementEnd */]();
                core["Ec" /* ɵɵelementStart */](22, "core-loading", 10);
                core["nd" /* ɵɵtemplate */](23, CoreCoursesMyCoursesPage_ion_searchbar_23_Template, 3, 4, "ion-searchbar", 11);
                core["Ec" /* ɵɵelementStart */](24, "ion-grid", 12);
                core["Ec" /* ɵɵelementStart */](25, "ion-row", 13);
                core["nd" /* ɵɵtemplate */](26, CoreCoursesMyCoursesPage_ion_col_26_Template, 2, 1, "ion-col", 14);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
                core["nd" /* ɵɵtemplate */](27, CoreCoursesMyCoursesPage_core_empty_box_27_Template, 3, 4, "core-empty-box", 15);
                core["Dc" /* ɵɵelementEnd */]();
                core["Dc" /* ɵɵelementEnd */]();
            }
            if (rf & 2) {
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("text", core["Qc" /* ɵɵpipeBind1 */](4, 19, "core.back"));
                core["lc" /* ɵɵadvance */](3);
                core["qd" /* ɵɵtextInterpolate */](core["Qc" /* ɵɵpipeBind1 */](7, 21, "core.courses.mycourses"));
                core["lc" /* ɵɵadvance */](4);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.searchEnabled);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.downloadAllCoursesEnabled || !ctx.courses || ctx.courses.length < 2 || ctx.downloadAllCoursesLoading);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](12, 23, "core.courses.downloadcourses"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("name", ctx.downloadAllCoursesIcon);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.downloadAllCoursesEnabled || !ctx.courses || ctx.courses.length < 2 || ctx.downloadAllCoursesBadge != "" || !ctx.downloadAllCoursesLoading);
                core["mc" /* ɵɵattribute */]("aria-label", core["Qc" /* ɵɵpipeBind1 */](15, 25, "core.loading"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hidden", !ctx.downloadAllCoursesEnabled || !ctx.courses || ctx.courses.length < 2 || !ctx.downloadAllCoursesLoading || ctx.downloadAllCoursesBadge == "" || !ctx.downloadAllCoursesLoading);
                core["mc" /* ɵɵattribute */]("aria-valuemax", ctx.downloadAllCoursesTotal)("aria-valuenow", ctx.downloadAllCoursesCount)("aria-valuetext", ctx.downloadAllCoursesBadgeA11yText);
                core["lc" /* ɵɵadvance */](1);
                core["rd" /* ɵɵtextInterpolate1 */](" ", ctx.downloadAllCoursesBadge, " ");
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("disabled", !ctx.coursesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Wc" /* ɵɵpropertyInterpolate */]("pullingText", core["Qc" /* ɵɵpipeBind1 */](21, 27, "core.pulltorefresh"));
                core["lc" /* ɵɵadvance */](2);
                core["Vc" /* ɵɵproperty */]("hideUntil", ctx.coursesLoaded);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", ctx.courses && ctx.courses.length > 5);
                core["lc" /* ɵɵadvance */](3);
                core["Vc" /* ɵɵproperty */]("ngForOf", ctx.filteredCourses);
                core["lc" /* ɵɵadvance */](1);
                core["Vc" /* ɵɵproperty */]("ngIf", !ctx.courses || !ctx.courses.length);
            }
        }, directives: [ionic_angular["B" /* IonHeader */], ionic_angular["zb" /* IonToolbar */], ionic_angular["l" /* IonButtons */], ionic_angular["g" /* IonBackButton */], ionic_angular["h" /* IonBackButtonDelegate */], navbar_buttons["a" /* CoreNavBarButtonsComponent */], common["t" /* NgIf */], ionic_angular["k" /* IonButton */], ionic_angular["C" /* IonIcon */], fa_icon["a" /* CoreFaIconDirective */], ionic_angular["pb" /* IonSpinner */], ionic_angular["j" /* IonBadge */], ionic_angular["u" /* IonContent */], ionic_angular["ab" /* IonRefresher */], ionic_angular["bb" /* IonRefresherContent */], loading["a" /* CoreLoadingComponent */], ionic_angular["A" /* IonGrid */], ionic_angular["gb" /* IonRow */], common["s" /* NgForOf */], ionic_angular["hb" /* IonSearchbar */], ionic_angular["Ob" /* TextValueAccessor */], fesm2015_forms["r" /* NgControlStatus */], fesm2015_forms["u" /* NgModel */], ionic_angular["t" /* IonCol */], course_progress["a" /* CoreCoursesCourseProgressComponent */], empty_box["a" /* CoreEmptyBoxComponent */]], pipes: [ngx_translate_core["d" /* TranslatePipe */]], encapsulation: 2 });
    return CoreCoursesMyCoursesPage;
})();

// EXTERNAL MODULE: ./src/core/features/courses/components/components.module.ts
var components_module = __webpack_require__("oV7r");

// CONCATENATED MODULE: ./src/core/features/courses/pages/my-courses/my-courses.module.ts
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
        component: my_courses_CoreCoursesMyCoursesPage,
    },
];
let my_courses_module_CoreCoursesMyCoursesPageModule = /*@__PURE__*/ (() => {
    class CoreCoursesMyCoursesPageModule {
    }
    CoreCoursesMyCoursesPageModule.ɵmod = core["wc" /* ɵɵdefineNgModule */]({ type: CoreCoursesMyCoursesPageModule });
    CoreCoursesMyCoursesPageModule.ɵinj = core["vc" /* ɵɵdefineInjector */]({ factory: function CoreCoursesMyCoursesPageModule_Factory(t) { return new (t || CoreCoursesMyCoursesPageModule)(); }, imports: [[
                router["m" /* RouterModule */].forChild(routes),
                shared_module["a" /* CoreSharedModule */],
                components_module["a" /* CoreCoursesComponentsModule */],
            ], router["m" /* RouterModule */]] });
    return CoreCoursesMyCoursesPageModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && core["ld" /* ɵɵsetNgModuleScope */](my_courses_module_CoreCoursesMyCoursesPageModule, { declarations: [my_courses_CoreCoursesMyCoursesPage], imports: [router["m" /* RouterModule */], shared_module["a" /* CoreSharedModule */],
            components_module["a" /* CoreCoursesComponentsModule */]], exports: [router["m" /* RouterModule */]] });
})();


/***/ })

}]);