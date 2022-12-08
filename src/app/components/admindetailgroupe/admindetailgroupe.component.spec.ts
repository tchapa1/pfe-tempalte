import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailgroupeComponent } from './admindetailgroupe.component';

describe('AdmindetailgroupeComponent', () => {
  let component: AdmindetailgroupeComponent;
  let fixture: ComponentFixture<AdmindetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
