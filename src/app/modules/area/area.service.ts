import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUrls } from 'src/app/shared/application-urls';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient) { }

  addArea(areadata: any) {
    return this.http.post(ApplicationUrls.area.addArea, areadata).pipe();
  }

  getAllAreas() {
    return this.http.get(ApplicationUrls.area.getAllAreas).pipe();
  }
}
