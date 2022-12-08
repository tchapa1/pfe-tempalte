import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistprofileComponent } from './adminlistprofile.component';

describe('AdminlistprofileComponent', () => {
  let component: AdminlistprofileComponent;
  let fixture: ComponentFixture<AdminlistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
