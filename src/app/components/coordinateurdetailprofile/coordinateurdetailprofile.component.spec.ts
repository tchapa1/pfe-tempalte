import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailprofileComponent } from './coordinateurdetailprofile.component';

describe('CoordinateurdetailprofileComponent', () => {
  let component: CoordinateurdetailprofileComponent;
  let fixture: ComponentFixture<CoordinateurdetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
