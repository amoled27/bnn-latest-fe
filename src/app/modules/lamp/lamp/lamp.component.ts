import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddLampDialogComponent } from '../add-lamp-dialog/add-lamp-dialog.component';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.scss']
})
export class LampComponent implements OnInit {
  isSwitchedOn = false;
  lampList = [];
  currentImei: any;
  currentSite: any;
  currentVoltage: any;
  addLampDialog: MatDialogRef<AddLampDialogComponent>
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.lampList = [{
      imei: 12323237748,
      siteName: 'MH-Andheri',
      voltage: '20v',
      status: true
    },
    {
      imei: 873237928392,
      siteName: 'MH-Andheri',
      voltage: '25v',
      status: false
    },
    {
      imei: 12323274849,
      siteName: 'MH-Vashi',
      voltage: '21v',
      status: true
    },
    {
      imei: 9902379283752,
      siteName: 'MH-Pune',
      voltage: '20v',
      status: true
    }]
  }

  onActivate(e) {
    this.isSwitchedOn = e.row.status;
    this.currentImei = e.row.imei;
    this.currentSite = e.row.siteName;
    this.currentVoltage = e.row.voltage;
  }

  openAddLampDialog() {
    this.addLampDialog = this.dialog.open(AddLampDialogComponent)
    this.addLampDialog.afterClosed().subscribe( res => {
      if (res) {
        res.voltage = '18v';
        res.status = false;
        this.lampList.push(res);
        this.lampList = [...this.lampList]
      }
    });
  }

}
