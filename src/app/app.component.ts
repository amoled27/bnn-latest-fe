import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';
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
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  constructor(zone: NgZone,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  toggleDir() {
    this.dir = this.dir === 'ltr' ? 'rtl' : 'ltr';
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }
}
