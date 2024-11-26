import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNavbarComponent } from './dot-navbar.component';

describe('DotNavbarComponent', () => {
  let component: DotNavbarComponent;
  let fixture: ComponentFixture<DotNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
