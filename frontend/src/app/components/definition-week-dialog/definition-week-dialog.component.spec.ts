import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionWeekDialogComponent } from './definition-week-dialog.component';

describe('DefinitionWeekDialogComponent', () => {
  let component: DefinitionWeekDialogComponent;
  let fixture: ComponentFixture<DefinitionWeekDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionWeekDialogComponent ]
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
});
