import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditprojetComponent } from './coordinateureditprojet.component';

describe('CoordinateureditprojetComponent', () => {
  let component: CoordinateureditprojetComponent;
  let fixture: ComponentFixture<CoordinateureditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
