import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUrls } from '../shared/application-urls';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  addGroup(data) {
    data = JSON.stringify(data);
    return this.http.post(ApplicationUrls.groups.addGroup, data).pipe();
  }

  getGroups() {
    return this.http.get(ApplicationUrls.groups.getAllGroups).pipe();
  }
  setGroupVoltage(data) {
    data = JSON.stringify(data);
    return this.http.put(ApplicationUrls.groups.setGroupVoltage, data).pipe();
  }
}
