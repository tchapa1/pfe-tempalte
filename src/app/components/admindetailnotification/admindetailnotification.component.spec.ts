import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailnotificationComponent } from './admindetailnotification.component';

describe('AdmindetailnotificationComponent', () => {
  let component: AdmindetailnotificationComponent;
  let fixture: ComponentFixture<AdmindetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
