import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreatenotificationComponent } from './coordinateurcreatenotification.component';

describe('CoordinateurcreatenotificationComponent', () => {
  let component: CoordinateurcreatenotificationComponent;
  let fixture: ComponentFixture<CoordinateurcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
