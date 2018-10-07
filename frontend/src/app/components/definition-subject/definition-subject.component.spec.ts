import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionSubjectComponent } from './definition-subject.component';

describe('DefinitionSubjectComponent', () => {
  let component: DefinitionSubjectComponent;
  let fixture: ComponentFixture<DefinitionSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
