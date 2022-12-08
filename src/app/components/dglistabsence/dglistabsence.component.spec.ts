import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistabsenceComponent } from './dglistabsence.component';

describe('DglistabsenceComponent', () => {
  let component: DglistabsenceComponent;
  let fixture: ComponentFixture<DglistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
