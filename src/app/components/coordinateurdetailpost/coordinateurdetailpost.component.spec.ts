import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailpostComponent } from './coordinateurdetailpost.component';

describe('CoordinateurdetailpostComponent', () => {
  let component: CoordinateurdetailpostComponent;
  let fixture: ComponentFixture<CoordinateurdetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
