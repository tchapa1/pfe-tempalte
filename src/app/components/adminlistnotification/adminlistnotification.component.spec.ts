import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistnotificationComponent } from './adminlistnotification.component';

describe('AdminlistnotificationComponent', () => {
  let component: AdminlistnotificationComponent;
  let fixture: ComponentFixture<AdminlistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
