import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styles: []
})
export class RoleEditComponent implements OnInit {
  isSpinning: boolean = false
  id: string;
  validateForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  submitForm=$events=>{
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }
  ngOnInit() {
    /**表单验证 */
    this.validateForm = this._fb.group({
      name: ["", [Validators.required]],
      remark: [""]
    });
  }

}
