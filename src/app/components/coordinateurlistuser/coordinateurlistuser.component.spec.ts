import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistuserComponent } from './coordinateurlistuser.component';

describe('CoordinateurlistuserComponent', () => {
  let component: CoordinateurlistuserComponent;
  let fixture: ComponentFixture<CoordinateurlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
