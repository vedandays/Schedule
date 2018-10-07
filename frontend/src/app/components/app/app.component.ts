import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {IWeek} from '../../types/week';
import {ISubject} from '../../types/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weekList: IWeek[];
  activeWeek: IWeek;
  activeSubject: ISubject;
  editableSubject: ISubject;
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
    if (this.editableSubject) {
      this.httpService.updateSubject(this.editableSubject.Id, subject)
        .then(() => {
          this.updateAllWeeks();
          this.activeWeek = null;
        })
        .catch(() => console.error('Updating subject if failed'));
    } else {
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

    this.isOpenSubjectPanel = false;
    this.editableSubject = null;
  }

  removeSubject(): void {
    this.httpService.removeSubject(this.activeSubject.Id)
      .then(() => this.activeWeek.Subjects = this.activeWeek.Subjects.filter(item => item.Id !== this.activeSubject.Id))
      .catch(() => console.error('Removing subject is failed'));
  }

  selectSubject(subject: ISubject) {
    this.activeSubject = subject;
  }

  createNewSubject() {
    this.editableSubject = null;
    this.isOpenSubjectPanel = true;
  }

  editSubject() {
    this.editableSubject = this.activeSubject;
    this.isOpenSubjectPanel = true;
  }
}
