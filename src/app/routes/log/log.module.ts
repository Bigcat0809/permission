import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log/log.component';
@NgModule({
  imports: [
    CommonModule,
    LogRoutingModule,
    SharedModule
  ],
  declarations: [LogComponent]
})
export class LogModule { }
