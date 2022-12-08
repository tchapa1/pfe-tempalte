import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailcongeComponent } from './admindetailconge.component';

describe('AdmindetailcongeComponent', () => {
  let component: AdmindetailcongeComponent;
  let fixture: ComponentFixture<AdmindetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
