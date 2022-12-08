import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailavancementtacheComponent } from './coordinateurdetailavancementtache.component';

describe('CoordinateurdetailavancementtacheComponent', () => {
  let component: CoordinateurdetailavancementtacheComponent;
  let fixture: ComponentFixture<CoordinateurdetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
