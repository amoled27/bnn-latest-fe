import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';

const dashboard: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(dashboard),
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
