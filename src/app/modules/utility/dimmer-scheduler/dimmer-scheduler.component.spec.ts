import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmerSchedulerComponent } from './dimmer-scheduler.component';

describe('DimmerSchedulerComponent', () => {
  let component: DimmerSchedulerComponent;
  let fixture: ComponentFixture<DimmerSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimmerSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmerSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
