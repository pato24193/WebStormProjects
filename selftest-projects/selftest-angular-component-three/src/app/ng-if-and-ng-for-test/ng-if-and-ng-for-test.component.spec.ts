import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfAndNgForTestComponent } from './ng-if-and-ng-for-test.component';

describe('NgIfAndNgForTestComponent', () => {
  let component: NgIfAndNgForTestComponent;
  let fixture: ComponentFixture<NgIfAndNgForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfAndNgForTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfAndNgForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
