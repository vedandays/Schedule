import {TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {HttpService} from '../../services/http.service';
import {ToastrModule} from 'ngx-toastr';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {IWeek} from '../../types/week';

const mockWeekList = [
  {
    Id: '41dcd8e7-5a8e-434a-a8bd-30c8f1c7b246',
    Description: 'TestWeek1',
    Subjects: [
      {
        Id: 'd2429c33-ec78-4e9c-98d4-5f40f26a4569',
        Name: 'TestSubject1',
        DayOfWeek: 0,
        Time: '2018-10-08T08:00:00',
        AudienceNumber: 666,
        FullName: 'TestTeacher1',
        WorkWeek: null
      },
      {
        Id: '55863366-19a4-4909-9fde-a96a7f325c79',
        Name: 'TestSubject2',
        DayOfWeek: 2,
        Time: '2018-10-11T17:00:00',
        AudienceNumber: 231,
        FullName: 'TestTeacher2',
        WorkWeek: null
      }
    ]
  },
  {
    Id: '062144d2-a044-4871-b610-ff770f26808c',
    Description: 'TestWeek2',
    Subjects: [
      {
        Id: '73baea84-e6a5-4118-b4c6-40c4df46f6af',
        Name: 'TestSubject3',
        DayOfWeek: 0,
        Time: '2018-10-13T10:10:00',
        AudienceNumber: 123,
        FullName: 'TestTeacher3',
        WorkWeek: null
      }
    ]
  }
];

describe('AppComponent', () => {

  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        NoopAnimationsModule,
        MatDialogModule,
        ToastrModule.forRoot({ closeButton: true })
      ],
      providers: [
        { provide: HttpService, useClass: HttpServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should get list of weeks when component is created', () => {
    expect(component.weekList).toEqual(mockWeekList);
  });

  it('should to set active week', () => {
    component.selectWeek(mockWeekList[0] as IWeek);
    expect(component.activeWeek).toEqual(mockWeekList[0]);
    component.selectWeek(mockWeekList[1] as IWeek);
    expect(component.activeWeek).toEqual(mockWeekList[1]);
  });

  it('should to delete week', async () => {
    await component.deleteWeek(mockWeekList[0].Id);
    fixture.detectChanges();
    expect(component.weekList).toEqual([{
      Id: '062144d2-a044-4871-b610-ff770f26808c',
      Description: 'TestWeek2',
      Subjects: [
        {
          Id: '73baea84-e6a5-4118-b4c6-40c4df46f6af',
          Name: 'TestSubject3',
          DayOfWeek: 0,
          Time: '2018-10-13T10:10:00',
          AudienceNumber: 123,
          FullName: 'TestTeacher3',
          WorkWeek: null
        }
      ]
    }]);
  });

  it('should to delete subject', async () => {
    await component.removeSubject(mockWeekList[0], '55863366-19a4-4909-9fde-a96a7f325c79');
    fixture.detectChanges();
    expect(component.weekList[0].Subjects).toEqual([
      {
        Id: 'd2429c33-ec78-4e9c-98d4-5f40f26a4569',
        Name: 'TestSubject1',
        DayOfWeek: 0,
        Time: '2018-10-08T08:00:00',
        AudienceNumber: 666,
        FullName: 'TestTeacher1',
        WorkWeek: null
      }
    ]);
  });

  it('should to set active subject', () => {
    const subject = mockWeekList[0].Subjects[1];
    component.selectSubject(subject);
    fixture.detectChanges();
    expect(component.activeSubject).toEqual(subject);
  });

  it('should to create new subject', async () => {
    const week = component.weekList[1];
    const subject = {
      Id: 'abc',
      Name: 'Added Subject',
      DayOfWeek: 0,
      Time: '2018-10-13T00:00:00',
      AudienceNumber: 123,
      FullName: 'TestTeacher',
      WorkWeek: null
    };

    let findWeek = component.weekList.find(item => item.Id === subject.Id);
    expect(findWeek).toBeUndefined();

    await component.createSubject(week, subject);
    findWeek = component.weekList.find(item => item.Id === subject.Id);
    expect(findWeek).toBeUndefined();
  });
});

class HttpServiceStub {
  getAllWorkWeeks() {
    return new Promise(res => res(mockWeekList));
  }

  removeWeek() {
    return new Promise(res => res());
  }

  saveSubject(subject: any) {
    return new Promise(res => res());
  }

  updateSubject(id: string, subject: any) {
    return new Promise(res => res());
  }

  removeSubject() {
    return new Promise(res => res());
  }
}
