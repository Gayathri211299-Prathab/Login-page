import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOuterComponent } from './employee-outer.component';

describe('EmployeeOuterComponent', () => {
  let component: EmployeeOuterComponent;
  let fixture: ComponentFixture<EmployeeOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeOuterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
