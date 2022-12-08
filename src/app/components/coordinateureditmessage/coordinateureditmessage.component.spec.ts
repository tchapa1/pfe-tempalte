import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditmessageComponent } from './coordinateureditmessage.component';

describe('CoordinateureditmessageComponent', () => {
  let component: CoordinateureditmessageComponent;
  let fixture: ComponentFixture<CoordinateureditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
