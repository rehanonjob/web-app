import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IAttendenceList } from '../types/IattendenceList';

@Injectable({
  providedIn: 'root',
})
export class Attendence {
  http = inject(HttpClient);

  SCANIN() {
    return this.http.post(environment.apiUrl + '/Attendence/scan-in', {});
  }

  SCANOFF() {
    return this.http.post(environment.apiUrl + '/Attendence/scan-off', {});
  }

  GETALL() {
    return this.http.get<IAttendenceList[]>(environment.apiUrl + '/Attendence/get-all-list');
  }
}
