import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailabsenceComponent } from './coordinateurdetailabsence.component';

describe('CoordinateurdetailabsenceComponent', () => {
  let component: CoordinateurdetailabsenceComponent;
  let fixture: ComponentFixture<CoordinateurdetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
