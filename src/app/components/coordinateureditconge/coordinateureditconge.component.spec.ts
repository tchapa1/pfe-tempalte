import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditcongeComponent } from './coordinateureditconge.component';

describe('CoordinateureditcongeComponent', () => {
  let component: CoordinateureditcongeComponent;
  let fixture: ComponentFixture<CoordinateureditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
