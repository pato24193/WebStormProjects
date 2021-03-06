import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFourComponent } from './test-four.component';

describe('TestFourComponent', () => {
  let component: TestFourComponent;
  let fixture: ComponentFixture<TestFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
