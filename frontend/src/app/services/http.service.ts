import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG} from '../config/app.config';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllWorkWeeks() {
    return this.http.get(`${APP_CONFIG.SERVER_API}/workWeek`).toPromise();
  }

  saveWeek(description: string) {
    return this.http.post(`${APP_CONFIG.SERVER_API}/workWeek`, { description }).toPromise();
  }

  removeWeek(id: string) {
    return this.http.delete(`${APP_CONFIG.SERVER_API}/workWeek?id=${id}`).toPromise();
  }

  saveSubject(subject: any) {
    return this.http.post(`${APP_CONFIG.SERVER_API}/subject`, subject).toPromise();
  }

  removeSubject(id: string) {
    return this.http.delete(`${APP_CONFIG.SERVER_API}/subject?id=${id}`).toPromise();
  }
}
