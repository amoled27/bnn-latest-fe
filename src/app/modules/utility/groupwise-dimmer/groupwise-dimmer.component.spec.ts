import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupwiseDimmerComponent } from './groupwise-dimmer.component';

describe('GroupwiseDimmerComponent', () => {
  let component: GroupwiseDimmerComponent;
  let fixture: ComponentFixture<GroupwiseDimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupwiseDimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupwiseDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
