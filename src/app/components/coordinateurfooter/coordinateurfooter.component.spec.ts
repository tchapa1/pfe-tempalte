import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurfooterComponent } from './coordinateurfooter.component';

describe('CoordinateurfooterComponent', () => {
  let component: CoordinateurfooterComponent;
  let fixture: ComponentFixture<CoordinateurfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
