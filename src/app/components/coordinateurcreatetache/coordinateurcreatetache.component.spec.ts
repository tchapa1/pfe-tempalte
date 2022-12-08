import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreatetacheComponent } from './coordinateurcreatetache.component';

describe('CoordinateurcreatetacheComponent', () => {
  let component: CoordinateurcreatetacheComponent;
  let fixture: ComponentFixture<CoordinateurcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreatetacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
