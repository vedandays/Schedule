import {Component, EventEmitter, Output} from '@angular/core';
import {DAYS} from '../../constants/days';

@Component({
  selector: 'app-definition-subject',
  templateUrl: './definition-subject.component.html',
  styleUrls: ['./definition-subject.component.css']
})
export class DefinitionSubjectComponent {
  readonly DAYS = DAYS;

  @Output() saveSubject: EventEmitter<any> = new EventEmitter();

  subject: any;

  constructor() {
    this.subject = {
      name: '',
      dayOfWeek: 0,
      time: '',
      audienceNumber: 0,
      FullName: '',
    };
  }

  saveSubjectHandle() {
    this.saveSubject.emit(this.subject);
  }
}
