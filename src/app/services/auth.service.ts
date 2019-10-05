import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationUrls } from '../shared/application-urls';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginSuccess = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) { }

  login(data) {
    data = JSON.stringify(data);
    return this.http.post(ApplicationUrls.auth.login , data).pipe();
  }

  setLoginFlag(flag) {
    this.loginSuccess.next(flag);
  }

  getLoginFlag(): Observable<any>{
    return this.loginSuccess;
  }
  
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
}
