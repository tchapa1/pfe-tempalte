import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateavancementprojetComponent } from './coordinateurcreateavancementprojet.component';

describe('CoordinateurcreateavancementprojetComponent', () => {
  let component: CoordinateurcreateavancementprojetComponent;
  let fixture: ComponentFixture<CoordinateurcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
