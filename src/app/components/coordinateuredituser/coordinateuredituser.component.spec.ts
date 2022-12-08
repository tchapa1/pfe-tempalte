import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateuredituserComponent } from './coordinateuredituser.component';

describe('CoordinateuredituserComponent', () => {
  let component: CoordinateuredituserComponent;
  let fixture: ComponentFixture<CoordinateuredituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateuredituserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateuredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
