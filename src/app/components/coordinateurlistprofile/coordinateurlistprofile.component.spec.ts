import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistprofileComponent } from './coordinateurlistprofile.component';

describe('CoordinateurlistprofileComponent', () => {
  let component: CoordinateurlistprofileComponent;
  let fixture: ComponentFixture<CoordinateurlistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
