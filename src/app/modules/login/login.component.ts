import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.checkLoggedIn();
  }
  checkLoggedIn() {
    let token = localStorage.getItem('token');
    let loggedUser = localStorage.getItem('loggeduser');
    if (token && loggedUser ) {
      this.router.navigate(['dashboard']);
    }
  }
  buildForm() {
    this.form = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  login() {
    this.authService.login(this.form.value).subscribe( (res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('loggeduser', res.userId);
      this.authService.setLoginFlag(true);
      this.router.navigate(['dashboard']);
    });
  }
}
