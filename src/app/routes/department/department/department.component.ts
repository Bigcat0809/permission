import { Component, OnInit,ViewChild } from '@angular/core';

import { DepartmentEditComponent} from '../department-edit/department-edit.component'
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit {
  /**引入子组件 */
  @ViewChild(DepartmentEditComponent) public department:DepartmentComponent
  constructor() { }

  ngOnInit() {
  }

}
