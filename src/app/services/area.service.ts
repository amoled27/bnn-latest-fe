import { Injectable } from '@angular/core';
import { ApplicationUrls } from '../shared/application-urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http: HttpClient) { }

  addArea(areadata: any) {
    areadata = JSON.stringify(areadata);
    return this.http.post(ApplicationUrls.area.addArea, areadata).pipe();
  }

  getAllAreas() {
    return this.http.get(ApplicationUrls.area.getAllAreas).pipe();
  }
}
