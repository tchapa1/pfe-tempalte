import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditabsenceComponent } from './coordinateureditabsence.component';

describe('CoordinateureditabsenceComponent', () => {
  let component: CoordinateureditabsenceComponent;
  let fixture: ComponentFixture<CoordinateureditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
