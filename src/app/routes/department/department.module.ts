import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department/department.component';
import { AngularSplitModule } from 'angular-split';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    AngularSplitModule
  ],
  declarations: [DepartmentComponent,
    DepartmentEditComponent
]
})
export class DepartmentModule { }
