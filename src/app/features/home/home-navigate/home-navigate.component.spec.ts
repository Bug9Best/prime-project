import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavigateComponent } from './home-navigate.component';

describe('HomeNavigateComponent', () => {
  let component: HomeNavigateComponent;
  let fixture: ComponentFixture<HomeNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNavigateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
