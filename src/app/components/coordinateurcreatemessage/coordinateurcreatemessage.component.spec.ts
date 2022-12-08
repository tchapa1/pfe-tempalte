import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreatemessageComponent } from './coordinateurcreatemessage.component';

describe('CoordinateurcreatemessageComponent', () => {
  let component: CoordinateurcreatemessageComponent;
  let fixture: ComponentFixture<CoordinateurcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreatemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
