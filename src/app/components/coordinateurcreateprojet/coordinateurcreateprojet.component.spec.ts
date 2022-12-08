import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateprojetComponent } from './coordinateurcreateprojet.component';

describe('CoordinateurcreateprojetComponent', () => {
  let component: CoordinateurcreateprojetComponent;
  let fixture: ComponentFixture<CoordinateurcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
