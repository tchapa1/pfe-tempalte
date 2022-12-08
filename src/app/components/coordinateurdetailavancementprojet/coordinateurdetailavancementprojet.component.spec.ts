import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailavancementprojetComponent } from './coordinateurdetailavancementprojet.component';

describe('CoordinateurdetailavancementprojetComponent', () => {
  let component: CoordinateurdetailavancementprojetComponent;
  let fixture: ComponentFixture<CoordinateurdetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
