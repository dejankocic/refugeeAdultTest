(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ "ISmu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_text", function() { return Text; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wEJo");
/* harmony import */ var _ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("E/Mt");
/* harmony import */ var _theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("74mu");




const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
  constructor(hostRef) {
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* r */ "o"])(this, hostRef);
  }
  render() {
    const mode = Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
    return (Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "j"])(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* H */ "c"], { class: Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__[/* c */ "a"])(this.color, {
        [mode]: true,
      }) }, Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__[/* h */ "j"])("slot", null)));
  }
};
Text.style = textCss;




/***/ })

}]);