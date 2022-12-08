import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditabsenceComponent } from './dgeditabsence.component';

describe('DgeditabsenceComponent', () => {
  let component: DgeditabsenceComponent;
  let fixture: ComponentFixture<DgeditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
