import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistcongeComponent } from './coordinateurlistconge.component';

describe('CoordinateurlistcongeComponent', () => {
  let component: CoordinateurlistcongeComponent;
  let fixture: ComponentFixture<CoordinateurlistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
