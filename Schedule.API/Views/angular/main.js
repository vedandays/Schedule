(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/app.component */ "./src/app/components/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _components_week_list_week_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/week-list/week-list.component */ "./src/app/components/week-list/week-list.component.ts");
/* harmony import */ var _components_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/subject-list/subject-list.component */ "./src/app/components/subject-list/subject-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/definition-subject-dialog/definition-subject-dialog.component */ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.ts");
/* harmony import */ var _components_definition_week_dialog_definition_week_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/definition-week-dialog/definition-week-dialog.component */ "./src/app/components/definition-week-dialog/definition-week-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_week_list_week_list_component__WEBPACK_IMPORTED_MODULE_7__["WeekListComponent"],
                _components_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_8__["SubjectListComponent"],
                _components_definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DefinitionSubjectDialogComponent"],
                _components_definition_week_dialog_definition_week_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DefinitionWeekDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({ closeButton: true })
            ],
            entryComponents: [
                _components_definition_week_dialog_definition_week_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DefinitionWeekDialogComponent"],
                _components_definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DefinitionSubjectDialogComponent"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_components_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app/app.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 3fr;\n      grid-template-columns: 1fr 3fr;\n  grid-gap: 2em;\n  height: 100%;\n  padding: 1em;\n  overflow: overlay;\n  box-sizing: border-box;\n}\n\n.block {\n  overflow: hidden;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: auto 1fr;\n      grid-template-rows: auto 1fr;\n}\n\n.sidebar {\n  overflow: hidden;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr auto;\n      grid-template-rows: 1fr auto;\n}\n\n.content {\n  overflow: auto;\n}\n\n.subject-content {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 1fr auto;\n      grid-template-rows: 1fr auto;\n}\n\n.actions {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 1em;\n  -ms-grid-columns: 1fr max-content;\n      grid-template-columns: 1fr -webkit-max-content;\n      grid-template-columns: 1fr max-content;\n  justify-items: end;\n}\n\n.subject-actions {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  -ms-grid-column-align: end;\n      justify-self: end;\n}\n\n.actions button {\n  text-transform: uppercase;\n}\n\napp-definition-week {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/app/app.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid\">\n\n  <mat-card class=\"sidebar\">\n    <mat-card-content class=\"content\">\n      <app-week-list [weekList]=\"weekList\" (selectedWeek)=\"selectWeek($event)\"></app-week-list>\n      <div *ngIf=\"isLoadingWeek\">Loading...</div>\n    </mat-card-content>\n\n    <div class=\"actions\">\n      <button mat-button (click)=\"openDialogForCreateWeek()\">CREATE WEEK</button>\n      <button mat-button (click)=\"deleteWeek(activeWeek.Id)\">REMOVE</button>\n    </div>\n  </mat-card>\n\n  <mat-card class=\"block\">\n    <mat-card-header>\n      <mat-card-title>List of subjects</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content class=\"content subject-content\">\n      <app-subject-list *ngIf=\"activeWeek\" [subjectList]=\"activeWeek.Subjects\"\n                        (selectedSubject)=\"selectSubject($event)\">\n      </app-subject-list>\n\n      <div class=\"empty-block\" *ngIf=\"!activeWeek\">Please select a week</div>\n    </mat-card-content>\n\n    <div class=\"subject-actions\">\n      <button mat-button (click)=\"openDialogForCreateSubject()\" *ngIf=\"activeWeek\">NEW SUBJECT</button>\n      <button mat-button (click)=\"openDialogForEditSubject()\" *ngIf=\"activeWeek\">EDIT</button>\n      <button mat-button (click)=\"removeSubject(activeWeek, activeSubject.Id)\" *ngIf=\"activeWeek\">REMOVE</button>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/app/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../definition-subject-dialog/definition-subject-dialog.component */ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.ts");
/* harmony import */ var _definition_week_dialog_definition_week_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../definition-week-dialog/definition-week-dialog.component */ "./src/app/components/definition-week-dialog/definition-week-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, httpService, toastr) {
        this.dialog = dialog;
        this.httpService = httpService;
        this.toastr = toastr;
        this.isLoadingWeek = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.updateAllWeeks();
    };
    AppComponent.prototype.selectWeek = function (week) {
        this.activeWeek = week;
    };
    AppComponent.prototype.openDialogForCreateWeek = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_definition_week_dialog_definition_week_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DefinitionWeekDialogComponent"], { width: '500px' });
        dialogRef.afterClosed().toPromise()
            .then(function (weekDescription) {
            if (weekDescription !== '' && weekDescription != null) {
                _this.createWeek(weekDescription);
            }
        });
    };
    AppComponent.prototype.deleteWeek = function (weekId) {
        var _this = this;
        this.httpService.removeWeek(weekId)
            .then(function () {
            _this.weekList = _this.weekList.filter(function (week) { return week.Id !== weekId; });
            _this.activeWeek = null;
            _this.toastr.success('Week successfully removed');
        })
            .catch(function () { return _this.toastr.error('Removing week is failed'); });
    };
    AppComponent.prototype.removeSubject = function (week, subjectId) {
        var _this = this;
        this.httpService.removeSubject(subjectId)
            .then(function () {
            week.Subjects = week.Subjects.filter(function (item) { return item.Id !== subjectId; });
            _this.toastr.success('Subject successfully removed');
        })
            .catch(function () { return _this.toastr.error('Removing subject is failed'); });
    };
    AppComponent.prototype.selectSubject = function (subject) {
        this.activeSubject = subject;
    };
    AppComponent.prototype.openDialogForCreateSubject = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DefinitionSubjectDialogComponent"], {
            width: '500px',
            data: null
        });
        dialogRef.afterClosed().toPromise()
            .then(function (subject) {
            if (subject !== '' && subject != null) {
                _this.createSubject(_this.activeWeek, subject);
            }
        });
    };
    AppComponent.prototype.openDialogForEditSubject = function () {
        var _this = this;
        if (this.activeSubject) {
            var dialogRef = this.dialog.open(_definition_subject_dialog_definition_subject_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DefinitionSubjectDialogComponent"], {
                width: '500px',
                data: this.activeSubject
            });
            dialogRef.afterClosed().toPromise()
                .then(function (subject) {
                if (subject !== '' && subject != null) {
                    _this.updateSubject(_this.activeSubject.Id, subject);
                }
            });
        }
        else {
            this.toastr.info('You should choose subject for editing');
        }
    };
    AppComponent.prototype.createSubject = function (week, subject) {
        var _this = this;
        subject.WorkWeek = week;
        this.httpService.saveSubject(subject)
            .then(function () {
            _this.updateAllWeeks();
            _this.activeWeek = null;
            _this.toastr.success('Subject successfully saved');
        })
            .catch(function () { return _this.toastr.error('Saving subject is failed'); });
    };
    AppComponent.prototype.createWeek = function (description) {
        var _this = this;
        this.httpService.saveWeek({ description: description })
            .then(function () {
            _this.updateAllWeeks();
            _this.toastr.success('Week successfully saved');
        })
            .catch(function () { return _this.toastr.error('Saving week is failed'); });
    };
    AppComponent.prototype.updateAllWeeks = function () {
        var _this = this;
        this.isLoadingWeek = true;
        this.httpService.getAllWorkWeeks()
            .then(function (data) {
            _this.weekList = data;
            _this.isLoadingWeek = false;
        })
            .catch(function () { return _this.toastr.error('Uploading weeks is failed'); });
    };
    AppComponent.prototype.updateSubject = function (subjectId, subject) {
        var _this = this;
        this.httpService.updateSubject(subjectId, subject)
            .then(function () {
            _this.updateAllWeeks();
            _this.activeWeek = null;
            _this.toastr.success('Subject successfully updated');
        })
            .catch(function () { return _this.toastr.error('Updating subject if failed'); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/definition-subject-dialog/definition-subject-dialog.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 1em;\n      -ms-grid-columns: 1fr 1em 1fr;\n      grid-template-columns: 1fr 1fr;\n  -ms-grid-rows: auto 1em auto 1em auto 1em auto;\n      grid-template-areas:\n    \"name name\"\n    \"day time\"\n    \"audience audience\"\n    \"teacher teacher\";\n}\n\n.name {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-area: name;\n}\n\n.day {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: day;\n}\n\n.time {\n  -ms-grid-row: 3;\n  -ms-grid-column: 3;\n  grid-area: time;\n}\n\n.audience {\n  -ms-grid-row: 5;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-area: audience;\n}\n\n.teacher {\n  -ms-grid-row: 7;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-area: teacher;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/definition-subject-dialog/definition-subject-dialog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Subject definition</h2>\n<mat-dialog-content class=\"grid\">\n  <mat-form-field class=\"name\">\n    <input matInput placeholder=\"Subject name\" [(ngModel)]=\"subject.name\">\n  </mat-form-field>\n  <mat-form-field class=\"day\">\n    <mat-select placeholder=\"Day\" [(ngModel)]=\"subject.dayOfWeek\">\n      <mat-option *ngFor=\"let day of DAYS; let index = index\" [value]=\"index\">{{day}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"time\">\n    <input matInput type=\"time\" placeholder=\"Time\" [(ngModel)]=\"subject.time\">\n  </mat-form-field>\n  <mat-form-field class=\"audience\">\n    <input matInput type=\"number\" placeholder=\"Audience\" [(ngModel)]=\"subject.audienceNumber\">\n  </mat-form-field>\n  <mat-form-field class=\"teacher\">\n    <input matInput placeholder=\"Teacher\" [(ngModel)]=\"subject.FullName\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions class=\"actions\">\n  <button mat-button (click)=\"saveSubject()\">Save</button>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/definition-subject-dialog/definition-subject-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DefinitionSubjectDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionSubjectDialogComponent", function() { return DefinitionSubjectDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _constants_days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/days */ "./src/app/constants/days.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DefinitionSubjectDialogComponent = /** @class */ (function () {
    function DefinitionSubjectDialogComponent(subject, dialogRef) {
        this.subject = subject;
        this.dialogRef = dialogRef;
        this.DAYS = _constants_days__WEBPACK_IMPORTED_MODULE_2__["DAYS"];
        this.subject = subject
            ? {
                name: this.subject.Name,
                dayOfWeek: this.subject.DayOfWeek,
                time: new Date(this.subject.Time).toLocaleTimeString().slice(0, -3),
                audienceNumber: this.subject.AudienceNumber,
                FullName: this.subject.FullName,
            }
            : {
                name: '',
                dayOfWeek: 0,
                time: '',
                audienceNumber: 0,
                FullName: '',
            };
    }
    DefinitionSubjectDialogComponent.prototype.saveSubject = function () {
        this.dialogRef.close(this.subject);
    };
    DefinitionSubjectDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-definition-subject-dialog',
            template: __webpack_require__(/*! ./definition-subject-dialog.component.html */ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.html"),
            styles: [__webpack_require__(/*! ./definition-subject-dialog.component.css */ "./src/app/components/definition-subject-dialog/definition-subject-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DefinitionSubjectDialogComponent);
    return DefinitionSubjectDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/definition-week-dialog/definition-week-dialog.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/definition-week-dialog/definition-week-dialog.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%;\n}\n\n.actions {\n  justify-content: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/components/definition-week-dialog/definition-week-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/definition-week-dialog/definition-week-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Week definition</h2>\n<mat-dialog-content class=\"grid\">\n  <mat-form-field class=\"name\">\n    <input matInput placeholder=\"Description\" [(ngModel)]=\"description\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions class=\"actions\">\n  <button mat-button (click)=\"createWeek()\">Create</button>\n  <button mat-button mat-dialog-close>Close</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/components/definition-week-dialog/definition-week-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/definition-week-dialog/definition-week-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DefinitionWeekDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinitionWeekDialogComponent", function() { return DefinitionWeekDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefinitionWeekDialogComponent = /** @class */ (function () {
    function DefinitionWeekDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.description = '';
    }
    DefinitionWeekDialogComponent.prototype.createWeek = function () {
        this.dialogRef.close(this.description);
    };
    DefinitionWeekDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-definition-week-dialog',
            template: __webpack_require__(/*! ./definition-week-dialog.component.html */ "./src/app/components/definition-week-dialog/definition-week-dialog.component.html"),
            styles: [__webpack_require__(/*! ./definition-week-dialog.component.css */ "./src/app/components/definition-week-dialog/definition-week-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DefinitionWeekDialogComponent);
    return DefinitionWeekDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/subject-list/subject-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/subject-list/subject-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  text-align: center;\n}\n\ntable, th, td {\n  border: 1px solid #000;\n  border-collapse: collapse;\n  padding: .5em;\n}\n\ntd.id {\n  width: 3em;\n}\n\n.action {\n  padding: 0;\n}\n\ntr.active {\n  background-color: rgba(0,0,0,0.34);\n}\n"

/***/ }),

/***/ "./src/app/components/subject-list/subject-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/subject-list/subject-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table *ngIf=\"subjectList.length\">\n  <thead>\n  <tr>\n    <td>#</td>\n    <td>Subject name</td>\n    <td>Day</td>\n    <td>Time</td>\n    <td>Audience</td>\n    <td>Teacher</td>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let subject of subjectList; let index = index\" [class.active]=\"subject === activeSubject\"\n      (click)=\"selectSubjectHandle(subject)\">\n    <td>{{index + 1}}</td>\n    <td>{{subject.Name}}</td>\n    <td>{{DAYS[subject.DayOfWeek]}}</td>\n    <td>{{getData(subject.Time)}}</td>\n    <td>{{subject.AudienceNumber}}</td>\n    <td>{{subject.FullName}}</td>\n  </tr>\n  </tbody>\n</table>\n\n<div class=\"empty-block\" *ngIf=\"!subjectList.length\">\n  This week is empty\n</div>\n"

/***/ }),

/***/ "./src/app/components/subject-list/subject-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/subject-list/subject-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/days */ "./src/app/constants/days.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectListComponent = /** @class */ (function () {
    function SubjectListComponent() {
        this.DAYS = _constants_days__WEBPACK_IMPORTED_MODULE_1__["DAYS"];
        this.selectedSubject = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subjectList = [];
    }
    SubjectListComponent.prototype.getData = function (time) {
        return new Date(time).toLocaleTimeString().slice(0, -3);
    };
    SubjectListComponent.prototype.selectSubjectHandle = function (subject) {
        this.activeSubject = subject;
        this.selectedSubject.emit(subject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubjectListComponent.prototype, "subjectList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SubjectListComponent.prototype, "selectedSubject", void 0);
    SubjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/components/subject-list/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject-list.component.css */ "./src/app/components/subject-list/subject-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubjectListComponent);
    return SubjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/week-list/week-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/week-list/week-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-bottom: 1em;\n  font-size: 16px;\n}\n\n.item {\n  padding: .5em;\n  cursor: pointer;\n  transition: background-color .2s ease;\n}\n\n.item:hover {\n  background-color: rgba(0,0,0,.1);\n}\n\n.item.active {\n  background-color: rgba(0,0,0,0.34);\n}\n"

/***/ }),

/***/ "./src/app/components/week-list/week-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/week-list/week-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"title\">List of weeks</div>\n  <div class=\"content\">\n    <div *ngIf=\"weekList && weekList.length\">\n      <div class=\"item\" [class.active]=\"week === activeWeek\" *ngFor=\"let week of weekList\" (click)=\"selectWeek(week)\">\n        {{week.Description}}\n      </div>\n    </div>\n\n    <div class=\"empty-block\" *ngIf=\"weekList && !weekList.length\">List of weeks is empty</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/week-list/week-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/week-list/week-list.component.ts ***!
  \*************************************************************/
/*! exports provided: WeekListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekListComponent", function() { return WeekListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeekListComponent = /** @class */ (function () {
    function WeekListComponent() {
        this.selectedWeek = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.weekList = [];
    }
    WeekListComponent.prototype.selectWeek = function (week) {
        this.activeWeek = week;
        this.selectedWeek.emit(week);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], WeekListComponent.prototype, "weekList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WeekListComponent.prototype, "selectedWeek", void 0);
    WeekListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-week-list',
            template: __webpack_require__(/*! ./week-list.component.html */ "./src/app/components/week-list/week-list.component.html"),
            styles: [__webpack_require__(/*! ./week-list.component.css */ "./src/app/components/week-list/week-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeekListComponent);
    return WeekListComponent;
}());



/***/ }),

/***/ "./src/app/config/app.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/app.config.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
var SERVER_PORT = 5000;
var APP_CONFIG = {
    SERVER_API: window.location.origin.replace(window.location.port, SERVER_PORT.toString()) + "/api"
};


/***/ }),

/***/ "./src/app/constants/days.ts":
/*!***********************************!*\
  !*** ./src/app/constants/days.ts ***!
  \***********************************/
/*! exports provided: DAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS", function() { return DAYS; });
var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/app.config */ "./src/app/config/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getAllWorkWeeks = function () {
        return this.http.get(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/workWeek").toPromise();
    };
    HttpService.prototype.saveWeek = function (week) {
        return this.http.post(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/workWeek", week).toPromise();
    };
    HttpService.prototype.removeWeek = function (id) {
        return this.http.delete(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/workWeek?id=" + id).toPromise();
    };
    HttpService.prototype.saveSubject = function (subject) {
        return this.http.post(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/subject", subject).toPromise();
    };
    HttpService.prototype.updateSubject = function (id, subject) {
        return this.http.put(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/subject?id=" + id, subject).toPromise();
    };
    HttpService.prototype.removeSubject = function (id) {
        return this.http.delete(_config_app_config__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"].SERVER_API + "/subject?id=" + id).toPromise();
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/komdosh/Projects/Rider/Schedule/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map