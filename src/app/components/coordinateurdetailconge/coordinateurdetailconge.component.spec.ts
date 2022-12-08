import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailcongeComponent } from './coordinateurdetailconge.component';

describe('CoordinateurdetailcongeComponent', () => {
  let component: CoordinateurdetailcongeComponent;
  let fixture: ComponentFixture<CoordinateurdetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
