import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { AuthService } from './services/auth.service';
const SMALL_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bnn-angular';
  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  users: Observable<any>;
  isDarkTheme = false;
  dir = 'ltr';
  user: any;
  selectedLanguage;
  token: any;
  loggredInUser: any;

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  constructor(zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { 
      this.authService.getLoginFlag().subscribe ((logindata) => {
        if (logindata) {
          this.token = localStorage.getItem('token');
          this.loggredInUser = localStorage.getItem('loggeduser');
        }
      });
    }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
    this.token = localStorage.getItem('token');
    this.loggredInUser = localStorage.getItem('loggeduser');
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }
  logout() {
    localStorage.setItem('loggeduser', '');
    localStorage.setItem('token', '');
    this.token = null;
    this.loggredInUser = null;
    this.authService.setLoginFlag(false);
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 300);
  }
}
