import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistnotificationComponent } from './coordinateurlistnotification.component';

describe('CoordinateurlistnotificationComponent', () => {
  let component: CoordinateurlistnotificationComponent;
  let fixture: ComponentFixture<CoordinateurlistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
