import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebackroundComponent } from './homebackround.component';

describe('HomebackroundComponent', () => {
  let component: HomebackroundComponent;
  let fixture: ComponentFixture<HomebackroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomebackroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomebackroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
