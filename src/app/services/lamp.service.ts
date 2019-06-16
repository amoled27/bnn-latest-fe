import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationUrls } from '../shared/application-urls';

@Injectable({
  providedIn: 'root'
})
export class LampService {
  // headers = new HttpHeaders()
  // .set('Access-Control-Allow-Origin', '*')
  // .set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
  // .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getAllDevices() {
    return this.http.get(ApplicationUrls.device.getAllDevices).pipe();
  }

  getOneDevice(deviceImei) {
    return this.http.get(ApplicationUrls.device.singleDevice + '/' + deviceImei).pipe();
  }

  updateDevice(deviceImei, data) {
    data = JSON.stringify(data);
    return this.http.post(ApplicationUrls.device.singleDevice + '/' + deviceImei, data).pipe();
  }

  deleteDevice(imei) {
    return this.http.delete(ApplicationUrls.device.deleteDevice + '/' + imei).pipe();
  }

  addDevice(data) {
    data = JSON.stringify(data);
    return this.http.post(ApplicationUrls.device.addDevice, data).pipe();
  }

  getDeviceByGroupId(id) {
    return this.http.get(ApplicationUrls.device.deviceByGroupId + '/' + id).pipe();
  }
}
