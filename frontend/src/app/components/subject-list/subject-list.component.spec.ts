import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListComponent } from './subject-list.component';
import {By} from '@angular/platform-browser';

const mockSubjectList = [
  {
    Id: '93b60e57-5b75-40ea-8b70-48e5095abd70',
    Name: 'T1',
    DayOfWeek: 1,
    Time: '2018-10-11T10:20:00',
    AudienceNumber: 123,
    FullName: 'Teacher_1',
    WorkWeek: null
  },
  {
    Id: 'd9f3a081-3ad9-4244-b133-517c36eb1047',
    Name: 'T2',
    DayOfWeek: 2,
    Time: '2018-10-11T10:30:00',
    AudienceNumber: 1,
    FullName: 'Teacher_2',
    WorkWeek: null
  }
];

describe('SubjectListComponent', () => {
  let component: SubjectListComponent;
  let fixture: ComponentFixture<SubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to display list of subject on page', () => {
    component.subjectList = [...mockSubjectList];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(items.length).toBe(mockSubjectList.length);
  });

  it('should to display is empty message when list of subjects is empty', () => {
    component.subjectList = [];
    fixture.detectChanges();
    const content = fixture.debugElement.nativeElement;
    expect(content.innerHTML).toContain('This week is empty');
  });

  it('should to display is correct time', () => {
    const data = component.getData('2018-10-11T10:20:00');
    expect(data).toEqual('10:20');
  });

  it('should to set active subject', () => {
    let callbackData = null;
    component.subjectList = [...mockSubjectList];
    component.selectedSubject.subscribe((data) => callbackData = data);
    fixture.detectChanges();
    component.selectSubjectHandle(component.subjectList[0]);
    expect(component.activeSubject).toBe(component.subjectList[0]);
    expect(callbackData).toBe(component.subjectList[0]);
    component.selectSubjectHandle(component.subjectList[1]);
    expect(component.activeSubject).toBe(component.subjectList[1]);
    expect(callbackData).toBe(component.subjectList[1]);
  });

  it('should have css style when subject is active', () => {
    component.subjectList = [...mockSubjectList];
    component.selectSubjectHandle(component.subjectList[0]);
    fixture.detectChanges();
    const item = fixture.debugElement.query(By.css('.active')).nativeElement;
    expect(item.innerHTML).toContain(component.subjectList[0].Name);
  });
});
