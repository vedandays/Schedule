import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DAYS} from '../../constants/days';
import {ISubject} from '../../types/subject';

@Component({
  selector: 'app-definition-subject',
  templateUrl: './definition-subject.component.html',
  styleUrls: ['./definition-subject.component.css']
})
export class DefinitionSubjectComponent implements OnInit {
  readonly DAYS = DAYS;

  @Input() editableSubject: ISubject;

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

  ngOnInit(): void {
    if (this.editableSubject) {
      this.subject = {
        name: this.editableSubject.Name,
        dayOfWeek: this.editableSubject.DayOfWeek,
        time: new Date(this.editableSubject.Time).toLocaleTimeString().slice(0, -3),
        audienceNumber: this.editableSubject.AudienceNumber,
        FullName: this.editableSubject.FullName,
      };
    }
  }

  saveSubjectHandle() {
    this.saveSubject.emit(this.subject);
  }
}
