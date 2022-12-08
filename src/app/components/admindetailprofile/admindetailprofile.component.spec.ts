import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailprofileComponent } from './admindetailprofile.component';

describe('AdmindetailprofileComponent', () => {
  let component: AdmindetailprofileComponent;
  let fixture: ComponentFixture<AdmindetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
