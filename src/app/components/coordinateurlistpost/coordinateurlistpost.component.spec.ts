import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistpostComponent } from './coordinateurlistpost.component';

describe('CoordinateurlistpostComponent', () => {
  let component: CoordinateurlistpostComponent;
  let fixture: ComponentFixture<CoordinateurlistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
