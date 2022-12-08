import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailnotificationComponent } from './rhdetailnotification.component';

describe('RhdetailnotificationComponent', () => {
  let component: RhdetailnotificationComponent;
  let fixture: ComponentFixture<RhdetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
