import { Component, OnInit, ViewChild } from '@angular/core';

import { UserEditComponent} from '../user-edit/user-edit.component'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  @ViewChild(UserEditComponent) public userEdit: UserEditComponent
  public isUserEditNzVisible:boolean=false
  users = [
    {
      id: '0',
      name: '张三',
      userAccount: 'zhangsan',
      department: 'root',
      createDate:'2018-8-08 23:12:00'
    },
    {
      key: '1',
      name: '李四',
      userAccount: 'lisi',
      department: 'root',
      createDate:'2018-9-08 23:12:00'
    }
  ];
  constructor() { }
  addUser() {
    this.isUserEditNzVisible = true
  }
  /**取消关闭modal */
  closeModal = e => {
    this.isUserEditNzVisible = false
  }
  /**提交modal */
  saveEditUser = e => {
    this.userEdit.submitForm(e)
  }
  ngOnInit() {
  }

}
