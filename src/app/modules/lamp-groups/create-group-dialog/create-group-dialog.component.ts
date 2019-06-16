import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-create-group-dialog',
  templateUrl: './create-group-dialog.component.html',
  styleUrls: ['./create-group-dialog.component.scss']
})
export class CreateGroupDialogComponent implements OnInit {
  form: FormGroup;
  areas: any = [];
  selectedAr: any;
  constructor(public dialogRef: MatDialogRef<CreateGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private areaService: AreaService) { }

  ngOnInit() {
    this.buildForm();
    this.getAreas();
  }

  buildForm() {
    this.form = this.fb.group({
      'name': [null, Validators.required],
      'areaId': [null, Validators.required],
    });
  }

  addGroup() {
    let data = {
      name: this.form.value.name, areaId: { _id: this.selectedAr, areaShortName: this.form.value.areaId } 
    }
    this.dialogRef.close(data);
  }

  getAreas() {
    this.areaService.getAllAreas().subscribe( (res: any) => {
      this.areas = res.areas;
    });
  }
  selectedArea(area) {
    this.selectedAr = area._id;
  }
}
