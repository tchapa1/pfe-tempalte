import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateabsenceComponent } from './coordinateurcreateabsence.component';

describe('CoordinateurcreateabsenceComponent', () => {
  let component: CoordinateurcreateabsenceComponent;
  let fixture: ComponentFixture<CoordinateurcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
