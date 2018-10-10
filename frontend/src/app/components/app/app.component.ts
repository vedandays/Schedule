import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {IWeek} from '../../types/week';
import {ISubject} from '../../types/subject';
import {ToastrService} from 'ngx-toastr';
import {MatDialog} from '@angular/material';
import {DefinitionSubjectDialogComponent} from '../definition-subject-dialog/definition-subject-dialog.component';

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

  updateAllWeeks(): void {
    this.isLoadingWeek = true;
    this.httpService.getAllWorkWeeks()
      .then((data: IWeek[]) => {
        this.weekList = data;
        this.isLoadingWeek = false;
      })
      .catch(() => this.toastr.error('Uploading weeks is failed'));
  }

  selectWeek(week: IWeek): void {
    this.activeWeek = week;
  }

  saveWeek(description: string): void {
    this.httpService.saveWeek(description)
      .then(() => {
        this.updateAllWeeks();
        this.toastr.success('Week successfully saved');
      })
      .catch(() => this.toastr.error('Saving week is failed'));
  }

  deleteWeek(): void {
    this.httpService.removeWeek(this.activeWeek.Id)
      .then(() => {
        this.weekList = this.weekList.filter(week => week !== this.activeWeek);
        this.activeWeek = null;
        this.toastr.success('Week successfully removed');
      })
      .catch(() => this.toastr.error('Removing week is failed'));
  }

  removeSubject(): void {
    this.httpService.removeSubject(this.activeSubject.Id)
      .then(() => {
        this.activeWeek.Subjects = this.activeWeek.Subjects.filter(item => item.Id !== this.activeSubject.Id);
        this.toastr.success('Subject successfully removed');
      })
      .catch(() => this.toastr.error('Removing subject is failed'));
  }

  selectSubject(subject: ISubject) {
    this.activeSubject = subject;
  }

  createNewSubject() {
    const dialogRef = this.dialog.open(DefinitionSubjectDialogComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().toPromise().then(subject => {
      if (subject !== '') {
        subject.workWeek = this.activeWeek;
        this.httpService.saveSubject(subject)
          .then(() => {
            this.updateAllWeeks();
            this.activeWeek = null;
            this.toastr.success('Subject successfully saved');
          })
          .catch(() => this.toastr.error('Saving subject is failed'));
      }
    });
  }

  editSubject() {
    if (this.activeSubject) {
      const dialogRef = this.dialog.open(DefinitionSubjectDialogComponent, {
        width: '500px',
        data: this.activeSubject
      });

      dialogRef.afterClosed().toPromise().then(subject => {
        if (subject !== '' && subject != null) {
          this.httpService.updateSubject(this.activeSubject.Id, subject)
            .then(() => {
              this.updateAllWeeks();
              this.activeWeek = null;
              this.toastr.success('Subject successfully updated');
            })
            .catch(() => this.toastr.error('Updating subject if failed'));
        }
      });
    } else {
      this.toastr.info('You should choose subject for editing');
    }
  }
}
