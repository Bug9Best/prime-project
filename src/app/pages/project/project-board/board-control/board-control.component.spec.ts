import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardControlComponent } from './board-control.component';

describe('BoardControlComponent', () => {
  let component: BoardControlComponent;
  let fixture: ComponentFixture<BoardControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
