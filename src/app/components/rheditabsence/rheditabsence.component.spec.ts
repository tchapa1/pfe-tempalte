import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditabsenceComponent } from './rheditabsence.component';

describe('RheditabsenceComponent', () => {
  let component: RheditabsenceComponent;
  let fixture: ComponentFixture<RheditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
