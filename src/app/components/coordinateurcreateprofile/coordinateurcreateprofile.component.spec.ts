import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateprofileComponent } from './coordinateurcreateprofile.component';

describe('CoordinateurcreateprofileComponent', () => {
  let component: CoordinateurcreateprofileComponent;
  let fixture: ComponentFixture<CoordinateurcreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
