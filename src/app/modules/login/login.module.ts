import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const group: Routes = [{
  path: '',
  component: LoginComponent
}]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(group),
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
