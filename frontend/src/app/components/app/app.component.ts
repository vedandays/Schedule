import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {IWeek} from '../../types/week';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weekList: IWeek[];
  activeWeek: IWeek;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getAllWorkWeeks().then((data: IWeek[]) => this.weekList = data);
  }

  selectWeek(week: IWeek) {
    this.activeWeek = week;
  }
}
