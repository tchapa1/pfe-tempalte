import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailmessageComponent } from './admindetailmessage.component';

describe('AdmindetailmessageComponent', () => {
  let component: AdmindetailmessageComponent;
  let fixture: ComponentFixture<AdmindetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
