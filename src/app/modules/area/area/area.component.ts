import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddAreaDialogComponent } from '../add-area-dialog/add-area-dialog.component';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  addAreaDialog: MatDialogRef<AddAreaDialogComponent>;
  areaList = [];
  constructor(private matdialog: MatDialog, private areaService: AreaService) { }

  ngOnInit() {
    this.getAreas();
  }

  onAddAreaDialog() {
    this.addAreaDialog = this.matdialog.open(AddAreaDialogComponent);
    this.addAreaDialog.afterClosed().subscribe(res => {
      if (res) {
        this.areaService.addArea(res).subscribe(resp => {
          this.areaList.push(res);
          this.areaList = [...this.areaList];
        });
      }
    });
  }

  getAreas() {
    this.areaService.getAllAreas().subscribe((res: any) => {
      this.areaList = res.areas;
    })
  }
  onActivate(e) {

  }
}
