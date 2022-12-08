import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistavancementtacheComponent } from './coordinateurlistavancementtache.component';

describe('CoordinateurlistavancementtacheComponent', () => {
  let component: CoordinateurlistavancementtacheComponent;
  let fixture: ComponentFixture<CoordinateurlistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
