import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-area-dialog',
  templateUrl: './add-area-dialog.component.html',
  styleUrls: ['./add-area-dialog.component.scss']
})
export class AddAreaDialogComponent implements OnInit {
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddAreaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      'name': [null, Validators.required],
      'areaShortName': [null, Validators.required],
      'location': ['']
    });
  }

  addArea() {
    this.dialogRef.close(this.form.value);
    console.log(this.form.value)
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
