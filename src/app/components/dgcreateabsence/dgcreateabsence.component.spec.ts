import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateabsenceComponent } from './dgcreateabsence.component';

describe('DgcreateabsenceComponent', () => {
  let component: DgcreateabsenceComponent;
  let fixture: ComponentFixture<DgcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
