import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateabsenceComponent } from './modeleurcreateabsence.component';

describe('ModeleurcreateabsenceComponent', () => {
  let component: ModeleurcreateabsenceComponent;
  let fixture: ComponentFixture<ModeleurcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
