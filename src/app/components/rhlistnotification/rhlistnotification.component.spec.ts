import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistnotificationComponent } from './rhlistnotification.component';

describe('RhlistnotificationComponent', () => {
  let component: RhlistnotificationComponent;
  let fixture: ComponentFixture<RhlistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
