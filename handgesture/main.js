(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\poc\hand\angular-tfjs-demo\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1Kaz":
/*!**********************************!*\
  !*** ./src/app/hand-renderer.ts ***!
  \**********************************/
/*! exports provided: drawKeypoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawKeypoints", function() { return drawKeypoints; });
const fingerLookupIndices = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20],
};
const drawKeypoints = (ctx, keypoints) => {
    const keypointsArray = keypoints;
    for (let i = 0; i < keypointsArray.length; i++) {
        const y = keypointsArray[i][0];
        const x = keypointsArray[i][1];
        drawPoint(ctx, x - 2, y - 2, 3);
    }
    const fingers = Object.keys(fingerLookupIndices);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < fingers.length; i++) {
        const finger = fingers[i];
        const points = fingerLookupIndices[finger].map((idx) => keypoints[idx]);
        drawPath(ctx, points, false);
    }
};
function drawPoint(ctx, y, x, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
}
function drawPath(ctx, points, closePath) {
    const region = new Path2D();
    region.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        region.lineTo(point[0], point[1]);
    }
    if (closePath) {
        region.closePath();
    }
    ctx.stroke(region);
}


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2UHN":
/*!************************************!*\
  !*** ./src/app/fingere-gesture.ts ***!
  \************************************/
/*! exports provided: GE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GE", function() { return GE; });
/* harmony import */ var fingerpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fingerpose */ "m6Ak");
/* harmony import */ var fingerpose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fingerpose__WEBPACK_IMPORTED_MODULE_0__);

const oneFingerGesture = new fingerpose__WEBPACK_IMPORTED_MODULE_0__["GestureDescription"]('one_finger');
oneFingerGesture.addCurl(fingerpose__WEBPACK_IMPORTED_MODULE_0__["Finger"].Index, fingerpose__WEBPACK_IMPORTED_MODULE_0__["FingerCurl"].NoCurl, 1.0);
oneFingerGesture.addCurl(fingerpose__WEBPACK_IMPORTED_MODULE_0__["Finger"].Thumb, fingerpose__WEBPACK_IMPORTED_MODULE_0__["FingerCurl"].FullCurl, 1.0);
oneFingerGesture.addCurl(fingerpose__WEBPACK_IMPORTED_MODULE_0__["Finger"].Middle, fingerpose__WEBPACK_IMPORTED_MODULE_0__["FingerCurl"].FullCurl, 1.0);
oneFingerGesture.addCurl(fingerpose__WEBPACK_IMPORTED_MODULE_0__["Finger"].Ring, fingerpose__WEBPACK_IMPORTED_MODULE_0__["FingerCurl"].FullCurl, 1.0);
oneFingerGesture.addCurl(fingerpose__WEBPACK_IMPORTED_MODULE_0__["Finger"].Pinky, fingerpose__WEBPACK_IMPORTED_MODULE_0__["FingerCurl"].FullCurl, 1.0);
const GE = new fingerpose__WEBPACK_IMPORTED_MODULE_0__["GestureEstimator"]([
    fingerpose__WEBPACK_IMPORTED_MODULE_0__["Gestures"].VictoryGesture,
    fingerpose__WEBPACK_IMPORTED_MODULE_0__["Gestures"].ThumbsUpGesture,
    oneFingerGesture,
]);


/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _hand_gesture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hand-gesture.service */ "nXVB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["video"];
const _c1 = ["canvas"];
const _c2 = ["home"];
const _c3 = ["about"];
class AppComponent {
    constructor(_recognizer, _router) {
        this._recognizer = _recognizer;
        this._router = _router;
        this.opened$ = this._recognizer.swipe$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((value) => value === 'left' || value === 'right'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => value === 'right'));
        this.selection$ = this._recognizer.gesture$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((value) => value === 'one' || value === 'two'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((value) => (value === 'one' ? 'home' : 'about')));
        this._recognizer.gesture$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((value) => value === 'ok'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.selection$))
            .subscribe(([_, page]) => this._router.navigateByUrl(page));
    }
    get stream() {
        return this._recognizer.stream;
    }
    ngAfterViewInit() {
        this._recognizer.initialize(this.canvas.nativeElement, this.video.nativeElement);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hand_gesture_service__WEBPACK_IMPORTED_MODULE_2__["HandGesture"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.homeLink = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aboutLink = _t.first);
    } }, decls: 22, vars: 14, consts: [["autosize", "", 1, "container"], [3, "opened"], ["drawer", ""], ["routerLink", "home"], ["home", ""], ["routerLink", "about"], ["about", ""], [1, "sidenav-content"], ["type", "button", 1, "hamburger", "hamburger--slider", 3, "click"], [1, "hamburger-box"], [1, "hamburger-inner"], ["width", "640", "height", "480", "autoplay", "", 2, "display", "none", 3, "srcObject"], ["video", ""], ["width", "640", "height", "480"], ["canvas", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "video", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "canvas", 13, 14);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, ctx.opened$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focus", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, ctx.selection$) === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focus", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 12, ctx.selection$) === "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", _r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("srcObject", ctx.stream);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[_nghost-%COMP%], mat-drawer-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  display: block;\r\n  background-color: #1C4A88;\r\n  color: #fff;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%] {\r\n  background-color: #1C4A88;\r\n  color: #fff;\r\n}\r\n\r\nmat-drawer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 100px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.sidenav-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  transform: scale(0.5);\r\n  position: absolute;\r\n  top: -119px;\r\n  right: -158px;\r\n  z-index: 2;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 2em;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  margin-left: 50px;\r\n  margin-right: 50px;\r\n  color: #fff;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   a.focus[_ngcontent-%COMP%] {\r\n  background-color: #006bc0;\r\n}\r\n\r\n\r\n\r\n.hamburger[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 33px;\r\n  left: 60px;\r\n  z-index: 3;\r\n  padding: 15px 15px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition-property: opacity, filter;\r\n  transition-duration: 0.15s;\r\n  transition-timing-function: linear;\r\n  font: inherit;\r\n  color: inherit;\r\n  text-transform: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n  margin: 0;\r\n  overflow: visible;\r\n}\r\n\r\n.hamburger[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.hamburger.is-active[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%], .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\r\n  background-color: #fff;\r\n}\r\n\r\n.hamburger-box[_ngcontent-%COMP%] {\r\n  width: 40px;\r\n  height: 24px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.hamburger-inner[_ngcontent-%COMP%] {\r\n  display: block;\r\n  top: 50%;\r\n  margin-top: -2px;\r\n}\r\n\r\n.hamburger-inner[_ngcontent-%COMP%], .hamburger-inner[_ngcontent-%COMP%]::before, .hamburger-inner[_ngcontent-%COMP%]::after {\r\n  width: 40px;\r\n  height: 4px;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  position: absolute;\r\n  transition-property: transform;\r\n  transition-duration: 0.15s;\r\n  transition-timing-function: ease;\r\n}\r\n\r\n.hamburger-inner[_ngcontent-%COMP%]::before, .hamburger-inner[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  display: block;\r\n}\r\n\r\n.hamburger-inner[_ngcontent-%COMP%]::before {\r\n  top: -10px;\r\n}\r\n\r\n.hamburger-inner[_ngcontent-%COMP%]::after {\r\n  bottom: -10px;\r\n}\r\n\r\n\r\n\r\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\r\n  top: 2px;\r\n}\r\n\r\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\r\n  top: 10px;\r\n  transition-property: transform, opacity;\r\n  transition-timing-function: ease;\r\n  transition-duration: 0.15s;\r\n}\r\n\r\n.hamburger--slider[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\r\n  top: 20px;\r\n}\r\n\r\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%] {\r\n  transform: translate3d(0, 10px, 0) rotate(45deg);\r\n}\r\n\r\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::before {\r\n  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\r\n  opacity: 0;\r\n}\r\n\r\n.hamburger--slider.is-active[_ngcontent-%COMP%]   .hamburger-inner[_ngcontent-%COMP%]::after {\r\n  transform: translate3d(0, -20px, 0) rotate(-90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7RUFNRTs7QUFDRjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUNBOzs7RUFHRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsZ0NBQWdDO0FBQ2xDOztBQUNBOztFQUVFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztJQUVJOztBQUNKO0VBQ0UsUUFBUTtBQUNWOztBQUNBO0VBQ0UsU0FBUztFQUNULHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0RBQWdEO0FBQ2xEOztBQUNBO0VBQ0UsMERBQTBEO0VBQzFELFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtEQUFrRDtBQUNwRCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzRBODg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxQzRBODg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXIgc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTE5cHg7XHJcbiAgcmlnaHQ6IC0xNThweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciBhLmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YmMwO1xyXG59XHJcblxyXG4vKiFcclxuICogSGFtYnVyZ2Vyc1xyXG4gKiBAZGVzY3JpcHRpb24gVGFzdHkgQ1NTLWFuaW1hdGVkIGhhbWJ1cmdlcnNcclxuICogQGF1dGhvciBKb25hdGhhbiBTdWggQGpvbnN1aFxyXG4gKiBAc2l0ZSBodHRwczovL2pvbnN1aC5jb20vaGFtYnVyZ2Vyc1xyXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vam9uc3VoL2hhbWJ1cmdlcnNcclxuICovXHJcbi5oYW1idXJnZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMzcHg7XHJcbiAgbGVmdDogNjBweDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHksIGZpbHRlcjtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4uaGFtYnVyZ2VyOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmhhbWJ1cmdlci5pcy1hY3RpdmU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4uaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyLFxyXG4uaGFtYnVyZ2VyLmlzLWFjdGl2ZSAuaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcbi5oYW1idXJnZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLWJveCB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItaW5uZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuLmhhbWJ1cmdlci1pbm5lcixcclxuLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlLFxyXG4uaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG4uaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUsXHJcbi5oYW1idXJnZXItaW5uZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uaGFtYnVyZ2VyLWlubmVyOjpiZWZvcmUge1xyXG4gIHRvcDogLTEwcHg7XHJcbn1cclxuLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgICogU2xpZGVyXHJcbiAgICovXHJcbi5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyIHtcclxuICB0b3A6IDJweDtcclxufVxyXG4uaGFtYnVyZ2VyLS1zbGlkZXIgLmhhbWJ1cmdlci1pbm5lcjo6YmVmb3JlIHtcclxuICB0b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG59XHJcbi5oYW1idXJnZXItLXNsaWRlciAuaGFtYnVyZ2VyLWlubmVyOjphZnRlciB7XHJcbiAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCkgcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uaGFtYnVyZ2VyLS1zbGlkZXIuaXMtYWN0aXZlIC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUzZCgtNS43MTQyOXB4LCAtNnB4LCAwKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi5oYW1idXJnZXItLXNsaWRlci5pcy1hY3RpdmUgLmhhbWJ1cmdlci1pbm5lcjo6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApIHJvdGF0ZSgtOTBkZWcpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _hand_gesture_service__WEBPACK_IMPORTED_MODULE_2__["HandGesture"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], homeLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['home']
        }], aboutLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['about']
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "nXVB":
/*!*****************************************!*\
  !*** ./src/app/hand-gesture.service.ts ***!
  \*****************************************/
/*! exports provided: HandGesture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandGesture", function() { return HandGesture; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _tensorflow_models_handpose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow-models/handpose */ "LRCb");
/* harmony import */ var _tensorflow_tfjs_backend_webgl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "7n2I");
/* harmony import */ var _tensorflow_tfjs_backend_cpu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs-backend-cpu */ "ix3U");
/* harmony import */ var _hand_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hand-renderer */ "1Kaz");
/* harmony import */ var _fingere_gesture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fingere-gesture */ "2UHN");








const GestureMap = {
    thumbs_up: 'ok',
    victory: 'two',
    one_finger: 'one',
};
class HandGesture {
    constructor() {
        this._swipe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('none');
        this.swipe$ = this._swipe$.asObservable();
        this._gesture$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('none');
        this.gesture$ = this._gesture$.asObservable();
        this._initiated = false;
        this._initialTimestamp = -1;
        this._lastGestureTiemstamp = -1;
        this._lastGesture = null;
        this._emitGesture = true;
    }
    get stream() {
        return this._stream;
    }
    initialize(canvas, video) {
        this._dimensions = [video.width, video.height];
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
            this._stream = stream;
            return _tensorflow_models_handpose__WEBPACK_IMPORTED_MODULE_2__["load"]();
        })
            .then((model) => {
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, video.width, video.height);
            context.strokeStyle = 'red';
            context.fillStyle = 'red';
            context.translate(canvas.width, 0);
            context.scale(-1, 1);
            const runDetection = () => {
                model.estimateHands(video).then((predictions) => {
                    // Render
                    context.drawImage(video, 0, 0, video.width, video.height, 0, 0, canvas.width, canvas.height);
                    if (predictions && predictions[0]) {
                        Object(_hand_renderer__WEBPACK_IMPORTED_MODULE_5__["drawKeypoints"])(context, predictions[0].landmarks);
                        this._process(predictions[0].boundingBox);
                        this._processGesture(predictions[0].landmarks);
                    }
                    requestAnimationFrame(runDetection);
                });
            };
            runDetection();
        })
            .catch((err) => {
            console.error(err);
        });
    }
    _processGesture(landmarks) {
        const { gestures } = _fingere_gesture__WEBPACK_IMPORTED_MODULE_6__["GE"].estimate(landmarks, 7.5) || [];
        let gesture = null;
        for (const g of gestures) {
            if (g.name === 'victory' || g.name === 'thumbs_up') {
                gesture = g.name;
                break;
            }
        }
        if (!gesture && gestures.length) {
            gesture = 'one_finger';
        }
        if (this._lastGesture !== gesture) {
            this._lastGesture = gesture;
            this._lastGestureTiemstamp = Date.now();
            this._emitGesture = true;
        }
        else {
            if (this._emitGesture &&
                this._toSeconds(Date.now() - this._lastGestureTiemstamp) > 1) {
                this._gesture$.next(GestureMap[this._lastGesture]);
                this._emitGesture = false;
            }
        }
    }
    _process(rect) {
        const middle = this._getMiddle(rect);
        if (this._aroundCenter(middle)) {
            this._initialTimestamp = Date.now();
            this._initiated = true;
            return;
        }
        if (!this._initiated) {
            return;
        }
        if (this._inRegion(0, 0.1, middle) &&
            this._toSeconds(Date.now() - this._initialTimestamp) < 2) {
            this._swipe$.next('right');
            this._initiated = false;
            return;
        }
        if (this._inRegion(0.9, 1, middle) &&
            this._toSeconds(Date.now() - this._initialTimestamp) < 2) {
            this._swipe$.next('left');
            this._initiated = false;
            return;
        }
    }
    _toSeconds(ms) {
        return ms / 1000;
    }
    _aroundCenter(center) {
        return this._inRegion(0.4, 0.6, center);
    }
    _inRegion(start, end, point) {
        return (this._dimensions[0] * start < point[0] &&
            this._dimensions[0] * end > point[0]);
    }
    _getMiddle(rect) {
        return [
            rect.topLeft[0] + (rect.topLeft[0] + rect.bottomRight[0]) / 2,
            rect.topLeft[1] + (rect.topLeft[1] + rect.bottomRight[1]) / 2,
        ];
    }
}
HandGesture.ɵfac = function HandGesture_Factory(t) { return new (t || HandGesture)(); };
HandGesture.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HandGesture, factory: HandGesture.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HandGesture, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then((m) => m.HomeModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "FQ1g")).then((m) => m.AboutModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map