import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { JstreeModule } from 'app/modular-js/jstree/jstree.module';
@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule,
    JstreeModule
  ],
  declarations: [RoleComponent,
    RoleEditComponent
]
})
export class RoleModule { }
