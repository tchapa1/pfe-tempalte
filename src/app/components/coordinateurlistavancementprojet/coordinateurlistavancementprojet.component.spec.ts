import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistavancementprojetComponent } from './coordinateurlistavancementprojet.component';

describe('CoordinateurlistavancementprojetComponent', () => {
  let component: CoordinateurlistavancementprojetComponent;
  let fixture: ComponentFixture<CoordinateurlistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
