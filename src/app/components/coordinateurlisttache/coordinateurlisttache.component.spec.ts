import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlisttacheComponent } from './coordinateurlisttache.component';

describe('CoordinateurlisttacheComponent', () => {
  let component: CoordinateurlisttacheComponent;
  let fixture: ComponentFixture<CoordinateurlisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlisttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
