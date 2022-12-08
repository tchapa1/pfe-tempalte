import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditnotificationComponent } from './rheditnotification.component';

describe('RheditnotificationComponent', () => {
  let component: RheditnotificationComponent;
  let fixture: ComponentFixture<RheditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
