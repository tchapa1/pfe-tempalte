import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreategroupeComponent } from './coordinateurcreategroupe.component';

describe('CoordinateurcreategroupeComponent', () => {
  let component: CoordinateurcreategroupeComponent;
  let fixture: ComponentFixture<CoordinateurcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreategroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
