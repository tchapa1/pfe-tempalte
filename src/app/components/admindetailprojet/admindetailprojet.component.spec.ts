import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailprojetComponent } from './admindetailprojet.component';

describe('AdmindetailprojetComponent', () => {
  let component: AdmindetailprojetComponent;
  let fixture: ComponentFixture<AdmindetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
