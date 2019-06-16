import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area/area.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { AddAreaDialogComponent } from './add-area-dialog/add-area-dialog.component';

const area: Routes = [
  {
    path: '',
    component: AreaComponent
  }
];
@NgModule({
  declarations: [AreaComponent, AddAreaDialogComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(area),
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    AddAreaDialogComponent
  ]
})
export class AreaModule { }
