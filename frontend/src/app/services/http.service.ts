import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllWorkWeeks() {
    return this.http.get('http://127.0.0.1:5000/api/workWeek').toPromise();
  }

  saveWeek(description: string) {
    return this.http.post('http://127.0.0.1:5000/api/workWeek', { description }).toPromise();
  }

  removeWeek(id: string) {
    return this.http.delete(`http://127.0.0.1:5000/api/workWeek?id=${id}`).toPromise();
  }
}
