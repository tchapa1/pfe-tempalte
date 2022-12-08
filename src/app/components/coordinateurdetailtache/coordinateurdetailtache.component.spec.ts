import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailtacheComponent } from './coordinateurdetailtache.component';

describe('CoordinateurdetailtacheComponent', () => {
  let component: CoordinateurdetailtacheComponent;
  let fixture: ComponentFixture<CoordinateurdetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
