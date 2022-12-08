import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailabsenceComponent } from './admindetailabsence.component';

describe('AdmindetailabsenceComponent', () => {
  let component: AdmindetailabsenceComponent;
  let fixture: ComponentFixture<AdmindetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
