import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-add-lamp-dialog',
  templateUrl: './add-lamp-dialog.component.html',
  styleUrls: ['./add-lamp-dialog.component.scss']
})
export class AddLampDialogComponent implements OnInit {
  form: FormGroup;
  groups: any = [];
  selectedGroupId: any;

  constructor(public dialogRef: MatDialogRef<AddLampDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private groupService: GroupService) { }

  ngOnInit() {
    this.buildForm();
    this.getGroups();
  }
  buildForm() {
    this.form = this.fb.group({
      'name': [null],
      'imei': [null, Validators.required],
      'siteName': [null],
      'voltage': [0],
      'status': [false],
      'bnnId': [null],
      'poleId': [null],
      'groupId': [null, Validators.required],
    });
  }
  addLamp() {
    let data = {
      formData : this.form.value,
      groupId : this.selectedGroupId
    }
    this.dialogRef.close(data);
  }

  getGroups() {
    this.groupService.getGroups().subscribe((res: any) => {
      this.groups = res.groups;
    });
  }
  onSelectGroup(value) {
    this.selectedGroupId = value._id;
  }

}
