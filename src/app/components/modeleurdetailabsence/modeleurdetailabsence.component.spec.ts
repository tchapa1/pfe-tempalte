import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailabsenceComponent } from './modeleurdetailabsence.component';

describe('ModeleurdetailabsenceComponent', () => {
  let component: ModeleurdetailabsenceComponent;
  let fixture: ComponentFixture<ModeleurdetailabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
