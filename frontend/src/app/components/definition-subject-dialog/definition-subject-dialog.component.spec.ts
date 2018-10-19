import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { DefinitionSubjectDialogComponent } from './definition-subject-dialog.component';
import {MatDialog, MatDialogModule, MatInputModule, MatSelectModule} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DefinitionSubjectDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainer: OverlayContainer;
  let fixture: ComponentFixture<DefinitionSubjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionSubjectDialogComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule
      ]
    });

    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DefinitionSubjectDialogComponent]
      }
    });

    TestBed.compileComponents();
  }));

  beforeEach(inject([MatDialog, OverlayContainer], (d: MatDialog, oc: OverlayContainer) => {
    dialog = d;
    overlayContainer = oc;
  }));

  afterEach(() => overlayContainer.ngOnDestroy());

  it('should open a dialog with a component', () => {
    const dialogRef = dialog.open(DefinitionSubjectDialogComponent, {
      data: { param: '1' }
    });

    expect(dialogRef.componentInstance instanceof DefinitionSubjectDialogComponent).toBe(true);
  });

  it('should be empty all fields when dialog is open without data', () => {
    const dialogRef = dialog.open(DefinitionSubjectDialogComponent, null);
    const component = dialogRef.componentInstance;
    expect(component.subject).toEqual({
      name: '',
      dayOfWeek: 0,
      time: '',
      audienceNumber: 0,
      FullName: '',
    });
  });

  it('should be filled all fields when dialog is open with data', () => {
    const dialogRef = dialog.open(DefinitionSubjectDialogComponent, {
      data : {
        Id: '55863366-19a4-4909-9fde-a96a7f325c79',
        Name: 'TestSubject2',
        DayOfWeek: 2,
        Time: '2018-10-11T17:00:00',
        AudienceNumber: 231,
        FullName: 'TestTeacher2',
        WorkWeek: null
      }
    });
    const component = dialogRef.componentInstance;
    expect(component.subject).toEqual({
      name: 'TestSubject2',
      dayOfWeek: 2,
      time: '17:00',
      audienceNumber: 231,
      FullName: 'TestTeacher2'
    });
  });

  it('should to display on view when data is changed',  () => {
    const dialogRef = dialog.open(DefinitionSubjectDialogComponent, null);

    const component = dialogRef.componentInstance;
    component.subject = {
      name: 'SomeSubject',
      dayOfWeek: 5,
      time: '11:00',
      audienceNumber: 123,
      FullName: 'SomeTeacher'
    };
  });
});
