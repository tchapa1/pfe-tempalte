import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailnotificationComponent } from './coordinateurdetailnotification.component';

describe('CoordinateurdetailnotificationComponent', () => {
  let component: CoordinateurdetailnotificationComponent;
  let fixture: ComponentFixture<CoordinateurdetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
