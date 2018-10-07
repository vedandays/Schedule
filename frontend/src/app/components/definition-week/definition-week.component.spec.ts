import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionWeekComponent } from './definition-week.component';

describe('DefinitionWeekComponent', () => {
  let component: DefinitionWeekComponent;
  let fixture: ComponentFixture<DefinitionWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinitionWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
