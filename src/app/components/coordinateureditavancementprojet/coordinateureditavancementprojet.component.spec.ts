import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditavancementprojetComponent } from './coordinateureditavancementprojet.component';

describe('CoordinateureditavancementprojetComponent', () => {
  let component: CoordinateureditavancementprojetComponent;
  let fixture: ComponentFixture<CoordinateureditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
