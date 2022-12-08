import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurheaderComponent } from './coordinateurheader.component';

describe('CoordinateurheaderComponent', () => {
  let component: CoordinateurheaderComponent;
  let fixture: ComponentFixture<CoordinateurheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
