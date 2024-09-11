import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhantomTableForListComponent } from './phantom-table-for-list.component';

describe('PhantomTableForListComponent', () => {
  let component: PhantomTableForListComponent;
  let fixture: ComponentFixture<PhantomTableForListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhantomTableForListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhantomTableForListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
