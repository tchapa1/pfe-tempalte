import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistmessageComponent } from './coordinateurlistmessage.component';

describe('CoordinateurlistmessageComponent', () => {
  let component: CoordinateurlistmessageComponent;
  let fixture: ComponentFixture<CoordinateurlistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
