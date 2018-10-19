import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../config/app.config';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllWorkWeeks() {
    return this.http.get(`${APP_CONFIG.SERVER_API}/workWeek`).toPromise();
  }

  saveWeek(week: any) {
    return this.http.post(`${APP_CONFIG.SERVER_API}/workWeek`, week).toPromise();
  }

  removeWeek(id: string) {
    return this.http.delete(`${APP_CONFIG.SERVER_API}/workWeek?id=${id}`).toPromise();
  }

  saveSubject(subject: any) {
    return this.http.post(`${APP_CONFIG.SERVER_API}/subject`, subject).toPromise();
  }

  updateSubject(id: string, subject: any) {
    return this.http.put(`${APP_CONFIG.SERVER_API}/subject?id=${id}`, subject).toPromise();
  }

  removeSubject(id: string) {
    return this.http.delete(`${APP_CONFIG.SERVER_API}/subject?id=${id}`).toPromise();
  }
}
