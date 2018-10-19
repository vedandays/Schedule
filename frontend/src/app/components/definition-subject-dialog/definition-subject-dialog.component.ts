import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DAYS} from '../../constants/days';

@Component({
  selector: 'app-definition-subject-dialog',
  templateUrl: './definition-subject-dialog.component.html',
  styleUrls: ['./definition-subject-dialog.component.css']
})
export class DefinitionSubjectDialogComponent {
  readonly DAYS = DAYS;

  constructor(@Inject(MAT_DIALOG_DATA) public subject: any,
              public dialogRef: MatDialogRef<DefinitionSubjectDialogComponent>) {
    this.subject = subject
      ? {
          name: this.subject.Name,
          dayOfWeek: this.subject.DayOfWeek,
          time: new Date(this.subject.Time).toLocaleTimeString().slice(0, -3),
          audienceNumber: this.subject.AudienceNumber,
          FullName: this.subject.FullName,
        }
      : {
          name: '',
          dayOfWeek: 0,
          time: '',
          audienceNumber: 0,
          FullName: '',
        };
  }

  saveSubject() {
    this.dialogRef.close(this.subject);
  }
}
