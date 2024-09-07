import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeveloperComponent } from './section-developer.component';

describe('SectionDeveloperComponent', () => {
  let component: SectionDeveloperComponent;
  let fixture: ComponentFixture<SectionDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDeveloperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
