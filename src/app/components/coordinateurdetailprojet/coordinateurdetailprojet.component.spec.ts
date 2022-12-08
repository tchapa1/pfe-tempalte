import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailprojetComponent } from './coordinateurdetailprojet.component';

describe('CoordinateurdetailprojetComponent', () => {
  let component: CoordinateurdetailprojetComponent;
  let fixture: ComponentFixture<CoordinateurdetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
