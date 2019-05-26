import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLampDialogComponent } from './add-lamp-dialog.component';

describe('AddLampDialogComponent', () => {
  let component: AddLampDialogComponent;
  let fixture: ComponentFixture<AddLampDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLampDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLampDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
