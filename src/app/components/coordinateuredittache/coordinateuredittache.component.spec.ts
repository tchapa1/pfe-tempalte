import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateuredittacheComponent } from './coordinateuredittache.component';

describe('CoordinateuredittacheComponent', () => {
  let component: CoordinateuredittacheComponent;
  let fixture: ComponentFixture<CoordinateuredittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateuredittacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateuredittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
