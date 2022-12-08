import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreatecongeComponent } from './coordinateurcreateconge.component';

describe('CoordinateurcreatecongeComponent', () => {
  let component: CoordinateurcreatecongeComponent;
  let fixture: ComponentFixture<CoordinateurcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreatecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
