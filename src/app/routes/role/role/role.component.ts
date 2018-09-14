import { Component, OnInit, ViewChild } from '@angular/core';

import { RoleEditComponent} from '../role-edit/role-edit.component'
import { JstreeComponent } from "app/modular-js/jstree/jstree.component";
import { JstreeNode } from "app/modular-js/jstree/jstree-node";
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styles: []
})
export class RoleComponent implements OnInit {
  @ViewChild(RoleEditComponent) public roleEdit:RoleEditComponent
  @ViewChild("jstree") public jstreeComponent: JstreeComponent;
  public pageSize:number=10
  public isRoleEditNzVisible:boolean=false
  public isSetUpAuthNzVisible: boolean = false
  public isSetUpAuthSpinning:boolean=false
  roles = [
    {
      id: '0',
      name: '领导',
      remark: '领导'
    },
    {
      key: '1',
      name: '员工',
      remark: '员工'
    },
    {
      key: '2',
      name: '管理员',
      remark: '管理员'
    }
  ];
  constructor() { }

  createRole(){
    this.isRoleEditNzVisible=true
  }
  setUpAuth(){
    this.isSetUpAuthNzVisible=true
  }
  /**取消关闭modal */
  closeModal = e => {
    this.isRoleEditNzVisible = false
    this.isSetUpAuthNzVisible=false
  }
  /**提交modal */
  saveEditRole=e=>{
    this.roleEdit.submitForm(e)
  }
  ngOnInit() {
  }

}
