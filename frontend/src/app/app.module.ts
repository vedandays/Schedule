import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './services/http.service';
import {WeekListComponent} from './components/week-list/week-list.component';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {DefinitionWeekComponent} from './components/definition-week/definition-week.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeekListComponent,
    SubjectListComponent,
    DefinitionWeekComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
