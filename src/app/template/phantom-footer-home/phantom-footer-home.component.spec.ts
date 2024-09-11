import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomFooterHomeComponent } from './phantom-footer-home.component';

describe('PhantomFooterHomeComponent', () => {
  let component: PhantomFooterHomeComponent;
  let fixture: ComponentFixture<PhantomFooterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhantomFooterHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomFooterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
