import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'lamps',
    loadChildren: './modules/lamp/lamp.module#LampModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'groups',
    loadChildren: './modules/lamp-groups/lamp-groups.module#LampGroupsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'area',
    loadChildren: './modules/area/area.module#AreaModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'utility',
    loadChildren: './modules/utility/utility.module#UtilityModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
