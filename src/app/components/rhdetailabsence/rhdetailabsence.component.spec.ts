import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailabsenceComponent } from './rhdetailabsence.component';

describe('RhdetailabsenceComponent', () => {
  let component: RhdetailabsenceComponent;
  let fixture: ComponentFixture<RhdetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
