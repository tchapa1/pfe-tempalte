import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailmessageComponent } from './coordinateurdetailmessage.component';

describe('CoordinateurdetailmessageComponent', () => {
  let component: CoordinateurdetailmessageComponent;
  let fixture: ComponentFixture<CoordinateurdetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
