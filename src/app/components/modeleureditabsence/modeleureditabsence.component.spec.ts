import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditabsenceComponent } from './modeleureditabsence.component';

describe('ModeleureditabsenceComponent', () => {
  let component: ModeleureditabsenceComponent;
  let fixture: ComponentFixture<ModeleureditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditabsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
