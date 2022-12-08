import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailabsenceComponent } from './chefdetailabsence.component';

describe('ChefdetailabsenceComponent', () => {
  let component: ChefdetailabsenceComponent;
  let fixture: ComponentFixture<ChefdetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
