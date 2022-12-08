import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditnotificationComponent } from './chefeditnotification.component';

describe('ChefeditnotificationComponent', () => {
  let component: ChefeditnotificationComponent;
  let fixture: ComponentFixture<ChefeditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefeditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
