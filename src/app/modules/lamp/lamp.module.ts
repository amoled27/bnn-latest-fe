import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampComponent } from './lamp/lamp.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddLampDialogComponent } from './add-lamp-dialog/add-lamp-dialog.component';
import { EditLampComponent } from './edit-lamp/edit-lamp.component';

const lamp: Routes = [
  {
    path: '',
    component: LampComponent
  }
];
@NgModule({
  declarations: [LampComponent, AddLampDialogComponent, EditLampComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(lamp),
  ],
  exports: [
    RouterModule
  ],
  entryComponents: [
    AddLampDialogComponent,
    EditLampComponent
  ]
})
export class LampModule { }
