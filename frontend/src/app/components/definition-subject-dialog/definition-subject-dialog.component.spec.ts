import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionSubjectDialogComponent } from './definition-subject-dialog.component';

describe('DefinitionSubjectDialogComponent', () => {
  let component: DefinitionSubjectDialogComponent;
  let fixture: ComponentFixture<DefinitionSubjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionSubjectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionSubjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
