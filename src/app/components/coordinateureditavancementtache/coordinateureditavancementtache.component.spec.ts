import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditavancementtacheComponent } from './coordinateureditavancementtache.component';

describe('CoordinateureditavancementtacheComponent', () => {
  let component: CoordinateureditavancementtacheComponent;
  let fixture: ComponentFixture<CoordinateureditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
