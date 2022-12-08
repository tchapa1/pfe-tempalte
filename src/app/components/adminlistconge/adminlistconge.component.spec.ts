import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlistcongeComponent } from './adminlistconge.component';

describe('AdminlistcongeComponent', () => {
  let component: AdminlistcongeComponent;
  let fixture: ComponentFixture<AdminlistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlistcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
