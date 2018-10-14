import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ISubject} from '../../types/subject';
import {DAYS} from '../../constants/days';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  readonly DAYS = DAYS;

  activeSubject: ISubject;

  @Input() subjectList: ISubject[];

  @Output() selectedSubject: EventEmitter<ISubject> = new EventEmitter();

  constructor() {
    this.subjectList = [];
  }

  getData(time: string): string {
    return new Date(time).toLocaleTimeString().slice(0, -3);
  }

  selectSubjectHandle(subject: ISubject) {
    this.activeSubject = subject;
    this.selectedSubject.emit(subject);
  }
}
