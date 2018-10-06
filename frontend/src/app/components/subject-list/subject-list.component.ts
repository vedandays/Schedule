import {Component, Input} from '@angular/core';
import {ISubject} from '../../types/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  readonly days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  @Input() subjects: ISubject[];

  getData(time: string) {
    return new Date(time).toLocaleTimeString().slice(0, -3);
  }
}
