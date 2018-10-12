import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekListComponent } from './week-list.component';
import {By} from '@angular/platform-browser';

const mockWeeks = [
  {
    Id: '1',
    Description: 'description_1',
    Subjects: []
  },
  {
    Id: '2',
    Description: 'description_2',
    Subjects: []
  }
];

describe('WeekListComponent', () => {
  let component: WeekListComponent;
  let fixture: ComponentFixture<WeekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const title = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(title.innerHTML).toContain('List of weeks');
  });

  it('should to display weeks on page', () => {
    component.weekList = [...mockWeeks];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('.item'));
    expect(items.length).toBe(component.weekList.length);
  });

  it('should to display empty message when list of weeks is empty', () => {
    component.weekList = [];
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('.content')).nativeElement;
    expect(content.innerHTML).toContain('List of weeks is empty');
  });

  it('should to set active week', () => {
    let callbackData = null;
    component.weekList = [...mockWeeks];
    component.selectedWeek.subscribe(data => callbackData = data);
    fixture.detectChanges();
    component.selectWeek(component.weekList[0]);
    expect(component.activeWeek).toBe(component.weekList[0]);
    expect(callbackData).toBe(component.weekList[0]);
    component.selectWeek(component.weekList[1]);
    expect(component.activeWeek).toBe(component.weekList[1]);
    expect(callbackData).toBe(component.weekList[1]);
  });

  it('should have css style when week is active', () => {
    component.weekList = [...mockWeeks];
    fixture.detectChanges();
    component.selectWeek(component.weekList[0]);
    fixture.detectChanges();
    const item = fixture.debugElement.query(By.css('.active')).nativeElement;
    expect(item.innerHTML).toContain(component.weekList[0].Description);
  });
});
