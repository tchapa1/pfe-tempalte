import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistabsenceComponent } from './coordinateurlistabsence.component';

describe('CoordinateurlistabsenceComponent', () => {
  let component: CoordinateurlistabsenceComponent;
  let fixture: ComponentFixture<CoordinateurlistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
