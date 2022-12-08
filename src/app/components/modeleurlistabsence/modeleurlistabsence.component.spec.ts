import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistabsenceComponent } from './modeleurlistabsence.component';

describe('ModeleurlistabsenceComponent', () => {
  let component: ModeleurlistabsenceComponent;
  let fixture: ComponentFixture<ModeleurlistabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
