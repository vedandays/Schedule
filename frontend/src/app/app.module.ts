import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {WeekListComponent} from './components/week-list/week-list.component';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import { DefinitionSubjectDialogComponent } from './components/definition-subject-dialog/definition-subject-dialog.component';
import { DefinitionWeekDialogComponent } from './components/definition-week-dialog/definition-week-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeekListComponent,
    SubjectListComponent,
    DefinitionSubjectDialogComponent,
    DefinitionWeekDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot({ closeButton: true })
  ],
  entryComponents: [
    DefinitionWeekDialogComponent,
    DefinitionSubjectDialogComponent
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
