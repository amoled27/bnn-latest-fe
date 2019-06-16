import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { CreateGroupDialogComponent } from './create-group-dialog/create-group-dialog.component';

const group: Routes = [{
  path: '',
  component: GroupsComponent
}]

@NgModule({
  declarations: [GroupsComponent, CreateGroupDialogComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(group),
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    CreateGroupDialogComponent
  ]
})
export class LampGroupsModule { }
