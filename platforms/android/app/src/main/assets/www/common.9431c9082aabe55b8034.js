(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "74mu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "f"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* c */ "f"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__[/* h */ "e"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "MLi9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanLeaveGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bFG1");
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



let CanLeaveGuard = /*@__PURE__*/ (() => {
    class CanLeaveGuard {
        canDeactivate(component) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                if (!this.isCanLeave(component)) {
                    return true;
                }
                return _services_utils_utils__WEBPACK_IMPORTED_MODULE_1__[/* CoreUtils */ "a"].ignoreErrors(component.canLeave(), false);
            });
        }
        isCanLeave(component) {
            return component !== null && 'canLeave' in component;
        }
    }
    CanLeaveGuard.ɵfac = function CanLeaveGuard_Factory(t) { return new (t || CanLeaveGuard)(); };
    CanLeaveGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵdefineInjectable */ "uc"]({ token: CanLeaveGuard, factory: CanLeaveGuard.ɵfac, providedIn: 'root' });
    return CanLeaveGuard;
})();


/***/ }),

/***/ "OzlW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreGradesCoursePageModule; });
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L3Fv");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wxbA");
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




let CoreGradesCoursePageModule = /*@__PURE__*/ (() => {
    class CoreGradesCoursePageModule {
    }
    CoreGradesCoursePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵdefineNgModule */ "wc"]({ type: CoreGradesCoursePageModule });
    CoreGradesCoursePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵdefineInjector */ "vc"]({ factory: function CoreGradesCoursePageModule_Factory(t) { return new (t || CoreGradesCoursePageModule)(); }, imports: [[
                _core_shared_module__WEBPACK_IMPORTED_MODULE_0__[/* CoreSharedModule */ "a"],
            ]] });
    return CoreGradesCoursePageModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__[/* ɵɵsetNgModuleScope */ "ld"](CoreGradesCoursePageModule, { declarations: [_course_page__WEBPACK_IMPORTED_MODULE_1__[/* CoreGradesCoursePage */ "a"]], imports: [_core_shared_module__WEBPACK_IMPORTED_MODULE_0__[/* CoreSharedModule */ "a"]] }); })();


/***/ }),

/***/ "acej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "wxbA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreGradesCoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mrSG");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3LXp");
/* harmony import */ var _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wo9T");
/* harmony import */ var _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FvYb");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9+EE");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bFG1");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("46ml");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("8l6b");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("pHTc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("TEn/");
/* harmony import */ var _components_loading_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("PgjG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ofXK");
/* harmony import */ var _components_empty_box_empty_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("r8G5");
/* harmony import */ var _directives_aria_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("saTE");
/* harmony import */ var _directives_fa_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("3CSS");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("sYmb");




















function CoreGradesCoursePage_core_empty_box_14_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](0, "core-empty-box", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipe */ "Pc"](1, "translate");
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("message", _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipeBind1 */ "Qc"](1, 1, "core.grades.nogradesreturned"));
    }
}
function CoreGradesCoursePage_div_15_th_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtext */ "pd"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipe */ "Pc"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const column_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵclassProp */ "qc"]("ion-hide-md-down", column_r4.hiddenPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpropertyInterpolate */ "Wc"]("id", column_r4.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵattribute */ "mc"]("colspan", column_r4.colspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtextInterpolate1 */ "rd"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipeBind1 */ "Qc"](2, 5, "core.grades." + column_r4.name), " ");
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_td_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](0, "td", 22);
    }
    if (rf & 2) {
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵattribute */ "mc"]("rowspan", row_r5.rowspan);
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_ion_icon_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](0, "ion-icon", 23);
    }
    if (rf & 2) {
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpropertyInterpolate */ "Wc"]("name", row_r5.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵattribute */ "mc"]("aria-label", row_r5.iconAlt);
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_img_4_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](0, "img", 24);
    }
    if (rf & 2) {
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("src", row_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵsanitizeUrl */ "jd"])("alt", row_r5.iconAlt);
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_ng_container_6_td_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](0, "td", 20);
    }
    if (rf & 2) {
        const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"]().$implicit;
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵclassMap */ "nc"]("ion-text-start core-grades-table-" + column_r14.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵclassProp */ "qc"]("ion-hide-md-down", column_r14.hiddenPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("innerHTML", row_r5[column_r14.name], _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵsanitizeHtml */ "hd"]);
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_ng_container_6_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](1, CoreGradesCoursePage_div_15_tr_6_ng_container_1_ng_container_6_td_1_Template, 1, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const column_r14 = ctx.$implicit;
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2).$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", column_r14.name != "gradeitem" && row_r5[column_r14.name] != undefined);
    }
}
function CoreGradesCoursePage_div_15_tr_6_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementContainerStart */ "Cc"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](1, CoreGradesCoursePage_div_15_tr_6_ng_container_1_td_1_Template, 1, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](2, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](3, CoreGradesCoursePage_div_15_tr_6_ng_container_1_ion_icon_3_Template, 1, 2, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](4, CoreGradesCoursePage_div_15_tr_6_ng_container_1_img_4_Template, 1, 2, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](5, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](6, CoreGradesCoursePage_div_15_tr_6_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementContainerEnd */ "Bc"]();
    }
    if (rf & 2) {
        const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"]().$implicit;
        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", row_r5.itemtype == "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵclassProp */ "qc"]("column-itemname", row_r5.itemtype == "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵattribute */ "mc"]("aria-current", ctx_r6.grades.getItemAriaCurrent(row_r5))("colspan", row_r5.colspan);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", row_r5.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", row_r5.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("innerHTML", row_r5.gradeitem, _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵsanitizeHtml */ "hd"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngForOf", ctx_r6.grades.columns);
    }
}
const _c0 = function (a0) { return { "core-grades-grade-clickable": a0 }; };
function CoreGradesCoursePage_div_15_tr_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵgetCurrentView */ "Fc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵlistener */ "Mc"]("ariaButtonClick", function CoreGradesCoursePage_div_15_tr_6_Template_tr_ariaButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵrestoreView */ "gd"](_r21); const row_r5 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"](2); return row_r5.itemtype != "category" && ctx_r20.grades.select(row_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](1, CoreGradesCoursePage_div_15_tr_6_ng_container_1_Template, 7, 9, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const row_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵclassMap */ "nc"](row_r5.rowclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpureFunction1 */ "ad"](5, _c0, row_r5.itemtype != "category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵattribute */ "mc"]("tabindex", row_r5.itemtype != "category" ? 0 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", row_r5.itemtype);
    }
}
function CoreGradesCoursePage_div_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](1, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](4, CoreGradesCoursePage_div_15_th_4_Template, 3, 7, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](6, CoreGradesCoursePage_div_15_tr_6_Template, 2, 7, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵnextContext */ "Oc"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngForOf", ctx_r1.grades.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngForOf", ctx_r1.grades.rows);
    }
}
/**
 * Page that displays a course grades.
 */
let CoreGradesCoursePage = /*@__PURE__*/ (() => {
    class CoreGradesCoursePage {
        constructor(route) {
            var _a, _b, _c;
            this.route = route;
            const courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_8__[/* CoreNavigator */ "a"].getRouteNumberParam('courseId', { route });
            const userId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_8__[/* CoreNavigator */ "a"].getRouteNumberParam('userId', { route })) !== null && _a !== void 0 ? _a : _services_sites__WEBPACK_IMPORTED_MODULE_4__[/* CoreSites */ "b"].getCurrentSiteUserId();
            const useSplitView = (_b = route.snapshot.data.useSplitView) !== null && _b !== void 0 ? _b : true;
            const outsideGradesTab = (_c = route.snapshot.data.outsideGradesTab) !== null && _c !== void 0 ? _c : false;
            this.splitViewMode = useSplitView ? undefined : _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__[/* CoreSplitViewMode */ "b"].MENU_ONLY;
            this.grades = new CoreGradesCourseManager(CoreGradesCoursePage, courseId, userId, outsideGradesTab);
        }
        /**
         * @inheritdoc
         */
        ngAfterViewInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                yield this.fetchInitialGrades();
                this.grades.start(this.splitView);
            });
        }
        /**
         * @inheritdoc
         */
        ngOnDestroy() {
            this.grades.destroy();
        }
        /**
         * Refresh grades.
         *
         * @param refresher Refresher.
         */
        refreshGrades(refresher) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                const { courseId, userId } = this.grades;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__[/* CoreUtils */ "a"].ignoreErrors(_features_grades_services_grades__WEBPACK_IMPORTED_MODULE_2__[/* CoreGrades */ "a"].invalidateCourseGradesData(courseId, userId));
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__[/* CoreUtils */ "a"].ignoreErrors(this.fetchGrades());
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }
        /**
         * Obtain the initial table of grades.
         */
        fetchInitialGrades() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                try {
                    yield this.fetchGrades();
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_1__[/* CoreDomUtils */ "a"].showErrorModalDefault(error, 'Error loading course');
                    this.grades.setTable({ columns: [], rows: [] });
                }
            });
        }
        /**
         * Update the table of grades.
         */
        fetchGrades() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
                const table = yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_2__[/* CoreGrades */ "a"].getCourseGradesTable(this.grades.courseId, this.grades.userId);
                const formattedTable = yield _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_3__[/* CoreGradesHelper */ "a"].formatGradesTable(table);
                this.grades.setTable(formattedTable);
            });
        }
    }
    CoreGradesCoursePage.ɵfac = function CoreGradesCoursePage_Factory(t) { return new (t || CoreGradesCoursePage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵdirectiveInject */ "yc"](_angular_router__WEBPACK_IMPORTED_MODULE_10__[/* ActivatedRoute */ "a"])); };
    CoreGradesCoursePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵdefineComponent */ "sc"]({ type: CoreGradesCoursePage, selectors: [["page-core-grades-course"]], viewQuery: function CoreGradesCoursePage_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵviewQuery */ "ud"](_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__[/* CoreSplitViewComponent */ "a"], true);
            }
            if (rf & 2) {
                var _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵqueryRefresh */ "ed"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵloadQuery */ "Nc"]()) && (ctx.splitView = _t.first);
            }
        }, decls: 16, vars: 14, consts: [["slot", "start"], [3, "text"], [3, "mode"], ["slot", "fixed", 3, "disabled", "ionRefresh"], [3, "pullingText"], [1, "safe-area-page", 3, "hideUntil"], ["icon", "fas-chart-bar", 3, "message", 4, "ngIf"], ["class", "core-grades-container", 4, "ngIf"], ["icon", "fas-chart-bar", 3, "message"], [1, "core-grades-container"], ["cellspacing", "0", "cellpadding", "0", 1, "core-grades-table"], ["class", "ion-text-start", 3, "id", "ion-hide-md-down", 4, "ngFor", "ngForOf"], ["role", "button row", 3, "class", "ngClass", "ariaButtonClick", 4, "ngFor", "ngForOf"], [1, "ion-text-start", 3, "id"], ["role", "button row", 3, "ngClass", "ariaButtonClick"], [4, "ngIf"], ["class", "core-grades-table-category", 4, "ngIf"], [1, "core-grades-table-gradeitem", "ion-text-start"], ["slot", "start", 3, "name", 4, "ngIf"], ["slot", "start", "class", "core-module-icon", 3, "src", "alt", 4, "ngIf"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "core-grades-table-category"], ["slot", "start", 3, "name"], ["slot", "start", 1, "core-module-icon", 3, "src", "alt"], [3, "class", "ion-hide-md-down", "innerHTML", 4, "ngIf"]], template: function CoreGradesCoursePage_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](0, "ion-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](1, "ion-toolbar");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](2, "ion-buttons", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](3, "ion-back-button", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipe */ "Pc"](4, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](5, "h1");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtext */ "pd"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipe */ "Pc"](7, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](8, "ion-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](9, "core-split-view", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](10, "ion-refresher", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵlistener */ "Mc"]("ionRefresh", function CoreGradesCoursePage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.refreshGrades($event.target); });
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelement */ "zc"](11, "ion-refresher-content", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipe */ "Pc"](12, "translate");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementStart */ "Ec"](13, "core-loading", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](14, CoreGradesCoursePage_core_empty_box_14_Template, 2, 3, "core-empty-box", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtemplate */ "nd"](15, CoreGradesCoursePage_div_15_Template, 7, 2, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵelementEnd */ "Dc"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipeBind1 */ "Qc"](4, 8, "core.back"));
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵtextInterpolate */ "qd"](_angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipeBind1 */ "Qc"](7, 10, "core.grades.grades"));
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("mode", ctx.splitViewMode);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("disabled", !ctx.grades.loaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpropertyInterpolate */ "Wc"]("pullingText", _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵpipeBind1 */ "Qc"](12, 12, "core.pulltorefresh"));
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("hideUntil", ctx.grades.loaded);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", ctx.grades.empty);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵadvance */ "lc"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__[/* ɵɵproperty */ "Vc"]("ngIf", !ctx.grades.empty);
            }
        }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonHeader */ "B"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonToolbar */ "zb"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonButtons */ "l"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonBackButton */ "g"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonBackButtonDelegate */ "h"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonContent */ "u"], _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_6__[/* CoreSplitViewComponent */ "a"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonRefresher */ "ab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonRefresherContent */ "bb"], _components_loading_loading__WEBPACK_IMPORTED_MODULE_12__[/* CoreLoadingComponent */ "a"], _angular_common__WEBPACK_IMPORTED_MODULE_13__[/* NgIf */ "t"], _components_empty_box_empty_box__WEBPACK_IMPORTED_MODULE_14__[/* CoreEmptyBoxComponent */ "a"], _angular_common__WEBPACK_IMPORTED_MODULE_13__[/* NgForOf */ "s"], _angular_common__WEBPACK_IMPORTED_MODULE_13__[/* NgClass */ "q"], _directives_aria_button__WEBPACK_IMPORTED_MODULE_15__[/* CoreAriaButtonClickDirective */ "a"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__[/* IonIcon */ "C"], _directives_fa_icon__WEBPACK_IMPORTED_MODULE_16__[/* CoreFaIconDirective */ "a"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__[/* TranslatePipe */ "d"]], styles: ["[_nghost-%COMP%]{--header-background:var(--white);--odd-cell-background:var(--gray-lighter);--even-cell-background:var(--white);--odd-cell-hover:var(--gray-light);--even-cell-hover:var(--gray-lighter);--icon-color:#999}[_nghost-%COMP%]   .odd[_ngcontent-%COMP%]{--cell-background:var(--odd-cell-background);--cell-hover:var(--odd-cell-hover)}[_nghost-%COMP%]   .even[_ngcontent-%COMP%]{--cell-background:var(--even-cell-background);--cell-hover:var(--even-cell-hover)}body.dark[_nghost-%COMP%], body.dark   [_nghost-%COMP%]{--header-background:var(--black);--odd-cell-background:var(--gray-darker);--even-cell-background:var(--black);--odd-cell-hover:var(--gray-dark);--even-cell-hover:var(--gray-darker);--icon-color:#eee}ion-app.md[_nghost-%COMP%], ion-app.md   [_nghost-%COMP%]{--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))))}ion-app.ios[_nghost-%COMP%], ion-app.ios   [_nghost-%COMP%]{--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.core-grades-table[_ngcontent-%COMP%]{border-collapse:collapse;line-height:20px;width:100%;font-size:16px;color:var(--ion-text-color)}.core-grades-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-color)}.core-grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:10px;padding-top:10px;padding-bottom:10px;vertical-align:top;white-space:normal;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:unset;-webkit-padding-end:10px;padding-inline-end:10px}}.core-grades-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:bottom;font-weight:700;background-color:var(--header-background)}.core-grades-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-weight:400}.core-grades-table[_ngcontent-%COMP%]   #gradeitem[_ngcontent-%COMP%]{padding-left:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   #gradeitem[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:5px;padding-inline-start:5px}}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]{padding-left:5px;font-weight:700}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:5px;padding-inline-start:5px}}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem.column-itemname[_ngcontent-%COMP%]{padding-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem.column-itemname[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:0;padding-inline-start:0}}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--icon-color)}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-gradeitem[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:unset;-webkit-margin-start:5px;margin-inline-start:5px}}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-feedback[_ngcontent-%COMP%]{padding-left:5px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-feedback[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:5px;padding-inline-start:5px}}.core-grades-table[_ngcontent-%COMP%]   .core-grades-table-feedback[_ngcontent-%COMP%]   .no-overflow[_ngcontent-%COMP%]{overflow:auto}.core-grades-table[_ngcontent-%COMP%]   .dimmed_text[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{opacity:.7}.core-grades-table[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .even[_ngcontent-%COMP%]   th[aria-current=page][_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .odd[_ngcontent-%COMP%]   th[aria-current=page][_ngcontent-%COMP%]{background-color:var(--cell-background)}.core-grades-table[_ngcontent-%COMP%]   .core-grades-grade-clickable[_ngcontent-%COMP%]{cursor:pointer}.core-grades-table[_ngcontent-%COMP%]   .core-grades-grade-clickable[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .core-grades-grade-clickable[_ngcontent-%COMP%]:hover   th[_ngcontent-%COMP%], .core-grades-table[_ngcontent-%COMP%]   .core-grades-grade-clickable[_ngcontent-%COMP%]:hover   th[aria-current=page][_ngcontent-%COMP%]{background-color:var(--cell-hover)}core-split-view.menu-and-content[_ngcontent-%COMP%]   .core-grades-table[_ngcontent-%COMP%]   .ion-hide-md-down[_ngcontent-%COMP%], core-split-view.nested[_ngcontent-%COMP%]   .core-grades-table[_ngcontent-%COMP%]   .ion-hide-md-down[_ngcontent-%COMP%]{display:none;opacity:0}@media (max-width:767.98px){.core-grades-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:.85em}}"] });
    return CoreGradesCoursePage;
})();
/**
 * Helper to manage the table of grades.
 */
class CoreGradesCourseManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_7__[/* CorePageItemsListManager */ "a"] {
    constructor(pageComponent, courseId, userId, outsideGradesTab) {
        super(pageComponent);
        this.courseId = courseId;
        this.userId = userId;
        this.outsideGradesTab = outsideGradesTab;
    }
    /**
     * Set grades table.
     *
     * @param table Grades table.
     */
    setTable(table) {
        this.columns = table.columns;
        this.rows = table.rows;
        this.setItems(table.rows.filter(this.isFilledRow));
    }
    /**
     * @inheritdoc
     */
    select(row) {
        const _super = Object.create(null, {
            select: { get: () => super.select }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
            if (this.outsideGradesTab) {
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_8__[/* CoreNavigator */ "a"].navigateToSitePath(`/grades/${this.courseId}/${row.id}`);
                return;
            }
            return _super.select.call(this, row);
        });
    }
    /**
     * @inheritdoc
     */
    getDefaultItem() {
        return null;
    }
    /**
     * @inheritdoc
     */
    getItemPath(row) {
        return row.id.toString();
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams() {
        return { userId: this.userId };
    }
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __awaiter */ "a"])(this, void 0, void 0, function* () {
            yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_2__[/* CoreGrades */ "a"].logCourseGradesView(this.courseId, this.userId);
        });
    }
    /**
     * Check whether the given row is filled or not.
     *
     * @param row Grades table row.
     * @return Whether the given row is filled or not.
     */
    isFilledRow(row) {
        return 'id' in row;
    }
}


/***/ })

}]);