import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailabsenceComponent } from './dgdetailabsence.component';

describe('DgdetailabsenceComponent', () => {
  let component: DgdetailabsenceComponent;
  let fixture: ComponentFixture<DgdetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
