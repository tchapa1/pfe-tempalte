import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateabsenceComponent } from './rhcreateabsence.component';

describe('RhcreateabsenceComponent', () => {
  let component: RhcreateabsenceComponent;
  let fixture: ComponentFixture<RhcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
