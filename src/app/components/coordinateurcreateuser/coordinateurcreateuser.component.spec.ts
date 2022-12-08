import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateuserComponent } from './coordinateurcreateuser.component';

describe('CoordinateurcreateuserComponent', () => {
  let component: CoordinateurcreateuserComponent;
  let fixture: ComponentFixture<CoordinateurcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
