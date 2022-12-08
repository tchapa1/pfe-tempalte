import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailuserComponent } from './coordinateurdetailuser.component';

describe('CoordinateurdetailuserComponent', () => {
  let component: CoordinateurdetailuserComponent;
  let fixture: ComponentFixture<CoordinateurdetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
