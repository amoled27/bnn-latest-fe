import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-lamp-dialog',
  templateUrl: './add-lamp-dialog.component.html',
  styleUrls: ['./add-lamp-dialog.component.scss']
})
export class AddLampDialogComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddLampDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      'name': [null, Validators.required],
      'imei': [null, Validators.required],
      'siteName': [null, Validators.required],
      'voltage': [null, Validators.required],
      'status': [null, Validators.required]
    });
  }
  addLamp() {
    this.dialogRef.close(this.form.value);
  }

}
