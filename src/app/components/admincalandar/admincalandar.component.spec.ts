import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincalandarComponent } from './admincalandar.component';

describe('AdmincalandarComponent', () => {
  let component: AdmincalandarComponent;
  let fixture: ComponentFixture<AdmincalandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincalandarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincalandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
