import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogControlComponent } from './backlog-control.component';

describe('BacklogControlComponent', () => {
  let component: BacklogControlComponent;
  let fixture: ComponentFixture<BacklogControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacklogControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
