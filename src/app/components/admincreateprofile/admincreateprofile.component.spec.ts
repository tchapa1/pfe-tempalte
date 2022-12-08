import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateprofileComponent } from './admincreateprofile.component';

describe('AdmincreateprofileComponent', () => {
  let component: AdmincreateprofileComponent;
  let fixture: ComponentFixture<AdmincreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
