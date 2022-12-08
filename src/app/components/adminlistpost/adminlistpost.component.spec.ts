import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistpostComponent } from './adminlistpost.component';

describe('AdminlistpostComponent', () => {
  let component: AdminlistpostComponent;
  let fixture: ComponentFixture<AdminlistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
