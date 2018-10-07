import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IWeek} from '../../types/week';

@Component({
  selector: 'app-week-list',
  templateUrl: './week-list.component.html',
  styleUrls: ['./week-list.component.css']
})
export class WeekListComponent {

  @Input() weekList: IWeek[];

  @Output() selectedWeek: EventEmitter<IWeek> = new EventEmitter();

  activeWeek: IWeek;

  selectWeek(week: IWeek): void {
    this.activeWeek = week;
    this.selectedWeek.emit(week);
  }
}
