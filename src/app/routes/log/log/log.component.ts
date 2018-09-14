import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styles: []
})
export class LogComponent implements OnInit {
  logs=[
    {
      code:1,
      username:'admin',
      name:'管理员',
      context:"新增一条日志记录",
      type:"添加",
      operateDate:"2018-9-08 23:12:00"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
