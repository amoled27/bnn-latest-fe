import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupwiseDimmerComponent } from './groupwise-dimmer/groupwise-dimmer.component';
import { DimmerSchedulerComponent } from './dimmer-scheduler/dimmer-scheduler.component';
import { UtilityComponent } from './utility/utility.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const utilityRoute: Routes = [
  {
    path: '',
    component: UtilityComponent
  }
]
@NgModule({
  declarations: [GroupwiseDimmerComponent, DimmerSchedulerComponent, UtilityComponent],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(utilityRoute),
  ],
  exports: [
    RouterModule
  ],
})
export class UtilityModule { }
