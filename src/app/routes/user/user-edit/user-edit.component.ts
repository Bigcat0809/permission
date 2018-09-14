import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: []
})
export class UserEditComponent implements OnInit {
  isSpinning: boolean = false
  id: string;
  validateForm: FormGroup;
  constructor(private _fb: FormBuilder,
    private message: NzMessageService) { }

  submitForm = $events => {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }
  ngOnInit() {
    this.validateForm = this._fb.group({
      name: ["", [Validators.required]],
      userAccount: ["", [Validators.required]],
      password: ["", [Validators.required]],
      tel: ["", [Validators.required]],
      remark: [""]
    });
  }
  /**上传图片配置 */
  public nzActionUrl: string ;//图片上传的地址
  public fileList: any[] = [];//图片文件列表
  previewImage = "";//预览图片
  previewVisible = false;//预览是否可见
  beforeUpload = (file: File) => {
    const isImg =
      file.type === 'image/jpeg' ||
      file.type === "image/gif" ||
      file.type === "image/bmp" ||
      file.type === "image/png";
    if (!isImg) {
      this.message.warning("只能上传图片文件!", {
        nzDuration: 1500
      })
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.message.warning("图片大小不能超过2兆!", {
        nzDuration: 1500
      })
    }
    return isImg && isLt2M;
  }
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }
  handleRemove = (file: UploadFile) => {
    this.fileList = [];
  };
  handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      if (this.fileList.length == 0) {
        this.fileList.push(info.file);
      }
    }
  }
}
