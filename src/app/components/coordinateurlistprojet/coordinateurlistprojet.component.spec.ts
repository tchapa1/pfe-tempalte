import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistprojetComponent } from './coordinateurlistprojet.component';

describe('CoordinateurlistprojetComponent', () => {
  let component: CoordinateurlistprojetComponent;
  let fixture: ComponentFixture<CoordinateurlistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
