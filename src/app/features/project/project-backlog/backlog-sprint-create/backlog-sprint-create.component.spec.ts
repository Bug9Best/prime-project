import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogSprintCreateComponent } from './backlog-sprint-create.component';

describe('BacklogSprintCreateComponent', () => {
  let component: BacklogSprintCreateComponent;
  let fixture: ComponentFixture<BacklogSprintCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BacklogSprintCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklogSprintCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
