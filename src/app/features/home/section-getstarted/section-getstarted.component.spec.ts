import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGetstartedComponent } from './section-getstarted.component';

describe('SectionGetstartedComponent', () => {
  let component: SectionGetstartedComponent;
  let fixture: ComponentFixture<SectionGetstartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionGetstartedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionGetstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
