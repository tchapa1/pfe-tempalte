import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailtacheComponent } from './admindetailtache.component';

describe('AdmindetailtacheComponent', () => {
  let component: AdmindetailtacheComponent;
  let fixture: ComponentFixture<AdmindetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
