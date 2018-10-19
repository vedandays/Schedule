import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefinitionWeekDialogComponent } from './definition-week-dialog.component';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatDialogRef} from '@angular/material';

describe('DefinitionWeekDialogComponent', () => {
  let component: DefinitionWeekDialogComponent;
  let fixture: ComponentFixture<DefinitionWeekDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionWeekDialogComponent ],
      imports: [ FormsModule ],
      providers: [ {
        provide: MatDialogRef,
        useValue: {}
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionWeekDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to display on view when description is changed', () => {
    const field = 'TestDescription';
    expect(component.description).toBe('');
    component.description = field;
    expect(component.description).toBe(field);
  });
});
