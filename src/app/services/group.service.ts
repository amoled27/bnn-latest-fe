import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUrls } from '../shared/application-urls';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  headers: any;
  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  addGroup(data) {
    data = JSON.stringify(data);
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.post(ApplicationUrls.groups.addGroup, data, { headers: headers }).pipe();
  }

  getGroups() {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(ApplicationUrls.groups.getAllGroups, { headers: headers }).pipe();
  }
  setGroupVoltage(data) {
    data = JSON.stringify(data);
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.put(ApplicationUrls.groups.setGroupVoltage, data, { headers: headers }).pipe();
  }
}
