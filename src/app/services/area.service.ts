import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../shared/application-urls';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  addArea(areadata: any) {
    areadata = JSON.stringify(areadata);
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.post(ApplicationUrls.area.addArea, areadata, { headers: headers }).pipe();
  }

  getAllAreas() {
    let headers = new HttpHeaders();
    headers = this.createAuthorizationHeader(headers);
    return this.http.get(ApplicationUrls.area.getAllAreas, { headers: headers }).pipe();
  }
}
