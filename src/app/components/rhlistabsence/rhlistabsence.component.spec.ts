import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistabsenceComponent } from './rhlistabsence.component';

describe('RhlistabsenceComponent', () => {
  let component: RhlistabsenceComponent;
  let fixture: ComponentFixture<RhlistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
