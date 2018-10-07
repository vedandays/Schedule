import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-definition-week',
  templateUrl: './definition-week.component.html',
  styleUrls: ['./definition-week.component.css']
})
export class DefinitionWeekComponent {
  description: string;

  @Output() saveWeek: EventEmitter<string> = new EventEmitter();

  addWeek(): void {
    this.saveWeek.emit(this.description);
  }
}
