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
  isOpenSubjectPanel: boolean;

  constructor(private httpService: HttpService) {
    this.isOpenSubjectPanel = false;
  }

  ngOnInit(): void {
    this.updateAllWeeks();
  }

  updateAllWeeks(): void {
    this.httpService.getAllWorkWeeks()
      .then((data: IWeek[]) => this.weekList = data)
      .catch(() => console.error('Uploading weeks is failed'));
  }

  selectWeek(week: IWeek): void {
    this.activeWeek = week;
  }

  saveWeek(description: string): void {
    this.httpService.saveWeek(description)
      .then(() => this.updateAllWeeks())
      .catch(() => console.error('Saving week is failed'));
  }

  deleteWeek(): void {
    this.httpService.removeWeek(this.activeWeek.Id)
      .then(() => {
        this.weekList = this.weekList.filter(week => week !== this.activeWeek);
        this.activeWeek = null;
      })
      .catch(() => console.error('Removing week is failed'));
  }

  saveSubject(subject: any) {
    subject = {
      ...subject,
      workWeek: {...this.activeWeek,
        Subjects: []
      }
    };

    this.httpService.saveSubject(subject)
      .then(() => {
        this.updateAllWeeks();
        this.activeWeek = null;
      })
      .catch(() => console.error('Saving subject is failed'));
  }

  removeSubject(id: string): void {
    this.httpService.removeSubject(id)
      .then(() => this.activeWeek.Subjects = this.activeWeek.Subjects.filter(item => item.Id !== id))
      .catch(() => console.error('Removing subject is failed'));
  }

  toogleDefinitionSubjectPanel() {
    this.isOpenSubjectPanel = !this.isOpenSubjectPanel;
  }
}
