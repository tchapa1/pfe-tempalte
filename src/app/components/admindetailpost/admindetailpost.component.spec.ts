import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailpostComponent } from './admindetailpost.component';

describe('AdmindetailpostComponent', () => {
  let component: AdmindetailpostComponent;
  let fixture: ComponentFixture<AdmindetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
