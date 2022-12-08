import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditnotificationComponent } from './coordinateureditnotification.component';

describe('CoordinateureditnotificationComponent', () => {
  let component: CoordinateureditnotificationComponent;
  let fixture: ComponentFixture<CoordinateureditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
