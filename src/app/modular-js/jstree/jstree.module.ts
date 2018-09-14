// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { SharedModule } from "@shared/shared.module";

// import { JstreeComponent } from './jstree.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     SharedModule
//   ],
//   exports: [JstreeComponent],
//   declarations: [JstreeComponent]
// })
// export class JstreeModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared/shared.module";
import { JstreeComponent } from "./jstree.component";

@NgModule({
  imports: [SharedModule, CommonModule],
  exports: [JstreeComponent],
  declarations: [JstreeComponent]
})
export class JstreeModule { }