import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {IWeek} from '../../types/week';
import {ISubject} from '../../types/subject';
import {ToastrService} from 'ngx-toastr';
import {MatDialog} from '@angular/material';
import {DefinitionSubjectDialogComponent} from '../definition-subject-dialog/definition-subject-dialog.component';
import {DefinitionWeekDialogComponent} from '../definition-week-dialog/definition-week-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weekList: IWeek[];
  activeWeek: IWeek;
  activeSubject: ISubject;
  isLoadingWeek: boolean;

  constructor(public dialog: MatDialog,
              private httpService: HttpService,
              private toastr: ToastrService) {
    this.isLoadingWeek = false;
  }

  ngOnInit(): void {
    this.updateAllWeeks();
  }

  selectWeek(week: IWeek): void {
    this.activeWeek = week;
  }

  openDialogForCreateWeek() {
    const dialogRef = this.dialog.open(DefinitionWeekDialogComponent, { width: '500px' });

    dialogRef.afterClosed().toPromise()
      .then(weekDescription => {
        if (weekDescription !== '' && weekDescription != null) {
          this.createWeek(weekDescription);
        }
      });
  }

  deleteWeek(weekId: string): void {
    this.httpService.removeWeek(weekId)
      .then(() => {
        this.weekList = this.weekList.filter(week => week.Id !== weekId);
        this.activeWeek = null;
        this.toastr.success('Week successfully removed');
      })
      .catch(() => this.toastr.error('Removing week is failed'));
  }

  removeSubject(week: IWeek, subjectId: string): void {
    this.httpService.removeSubject(subjectId)
      .then(() => {
        week.Subjects = week.Subjects.filter(item => item.Id !== subjectId);
        this.toastr.success('Subject successfully removed');
      })
      .catch(() => this.toastr.error('Removing subject is failed'));
  }

  selectSubject(subject: ISubject) {
    this.activeSubject = subject;
  }

  openDialogForCreateSubject() {
    const dialogRef = this.dialog.open(DefinitionSubjectDialogComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().toPromise()
      .then(subject => {
        if (subject !== '' && subject != null) {
          this.createSubject(this.activeWeek, subject);
        }
      });
  }

  openDialogForEditSubject() {
    if (this.activeSubject) {
      const dialogRef = this.dialog.open(DefinitionSubjectDialogComponent, {
        width: '500px',
        data: this.activeSubject
      });

      dialogRef.afterClosed().toPromise()
        .then(subject => {
          if (subject !== '' && subject != null) {
            this.updateSubject(this.activeSubject.Id, subject);
          }
        });
    } else {
      this.toastr.info('You should choose subject for editing');
    }
  }

  createSubject(week: IWeek, subject: ISubject) {
    subject.WorkWeek = week;
    this.httpService.saveSubject(subject)
      .then(() => {
        this.updateAllWeeks();
        this.activeWeek = null;
        this.toastr.success('Subject successfully saved');
      })
      .catch(() => this.toastr.error('Saving subject is failed'));
  }

  private createWeek(description: string) {
    this.httpService.saveWeek({ description })
      .then(() => {
        this.updateAllWeeks();
        this.toastr.success('Week successfully saved');
      })
      .catch(() => this.toastr.error('Saving week is failed'));
  }

  private updateAllWeeks() {
    this.isLoadingWeek = true;
    this.httpService.getAllWorkWeeks()
      .then((data: IWeek[]) => {
        this.weekList = data;
        this.isLoadingWeek = false;
      })
      .catch(() => this.toastr.error('Uploading weeks is failed'));
  }

  private updateSubject(subjectId: string, subject) {
    this.httpService.updateSubject(subjectId, subject)
      .then(() => {
        this.updateAllWeeks();
        this.activeWeek = null;
        this.toastr.success('Subject successfully updated');
      })
      .catch(() => this.toastr.error('Updating subject if failed'));
  }
}
