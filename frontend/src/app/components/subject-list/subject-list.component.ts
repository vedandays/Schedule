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

  @Input() subjects: ISubject[];

  @Output() removeSubject: EventEmitter<string> = new EventEmitter();

  getData(time: string): string {
    return new Date(time).toLocaleTimeString().slice(0, -3);
  }

  removeSubjectHandle(id: string): void {
    this.removeSubject.emit(id);
  }
}
