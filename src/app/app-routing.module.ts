import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'lamps',
    loadChildren: './modules/lamp/lamp.module#LampModule'
  },
  {
    path: 'groups',
    loadChildren: './modules/lamp-groups/lamp-groups.module#LampGroupsModule'
  },
  {
    path: 'area',
    loadChildren: './modules/area/area.module#AreaModule'
  },
  {
    path: 'utility',
    loadChildren: './modules/utility/utility.module#UtilityModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
