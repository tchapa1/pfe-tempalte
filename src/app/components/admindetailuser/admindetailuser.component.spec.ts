import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailuserComponent } from './admindetailuser.component';

describe('AdmindetailuserComponent', () => {
  let component: AdmindetailuserComponent;
  let fixture: ComponentFixture<AdmindetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
