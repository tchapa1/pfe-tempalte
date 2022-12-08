import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditprofileComponent } from './coordinateureditprofile.component';

describe('CoordinateureditprofileComponent', () => {
  let component: CoordinateureditprofileComponent;
  let fixture: ComponentFixture<CoordinateureditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
