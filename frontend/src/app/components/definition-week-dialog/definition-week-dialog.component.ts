import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-definition-week-dialog',
  templateUrl: './definition-week-dialog.component.html',
  styleUrls: ['./definition-week-dialog.component.css']
})
export class DefinitionWeekDialogComponent {

  description: string;

  constructor(public dialogRef: MatDialogRef<DefinitionWeekDialogComponent>) {
    this.description = '';
  }

  createWeek() {
    this.dialogRef.close(this.description);
  }
}
